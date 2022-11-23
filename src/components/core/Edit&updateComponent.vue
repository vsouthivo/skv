<template>
   <v-container>
    <v-card>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>job</th>
                    <th>id</th>
                    <th>createAt</th> 
                </tr>
            </thead>
            <tbody>
              <tr
              v-for="Data in listData"
              :key="Data._id"
              >
                <td>{{ Data.id }}</td>
                <td>{{ Data.avatar }}</td>
                <td>{{ Data.email }}</td>
                <td>{{ Data.first_name }}</td>
                <td>{{ Data.last_name }}</td>
                <td>
                  <router-link :to="{name: 'edit', params:{id: Data.id}}" >
                    <v-btn flat="">Edit</v-btn>
                  </router-link>
                  <v-btn flat @click.prevent="handleUpdateForm(Data._id)">
                    Delete
                  </v-btn>
                </td>
              </tr>
            </tbody>
        </table>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
 data() {
    return {
        listData: {}
    }
 },
 created() {
    let apiURL = 'https://reqres.in/api/users/${this.$route.params.id}';
    axios.get(apiURL).then((res)=> {
        this.student = res.data 
    })
 },
 method: {
    handleUpdateForm(){
    let apiURL = 'https://reqres.in/api/users/${this.$route.params.id}';
    axios.put(apiURL,this.listData).then((res)=>{
        console.log(res);
        this.$router.push("/Show");
    }).catch(error => {
        console.log(error);
    })
    }
 }
}
</script>

<style>

</style>