<template>

    <!-- nav-bar component -->
    <v-toolbar app>

      <v-app-bar-nav-icon 
      variant="text" 
      @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase">
          <span>Dashboard</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-list>
        <v-list-group>
          <v-list-item
            v-for="([title, icon], i) in menus"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
          ></v-list-item>
        </v-list-group>
      </v-list>
    </v-toolbar>
    
    <!-- sidebar component -->
    <v-navigation-drawer 
     v-model="drawer" 
     left 
     temporary>
     <SideBar/>
    </v-navigation-drawer>


</template>

<script>
import SideBar from "./Side-Bar.vue";
export default {
    data() {
        return {
          drawer: false,
        };
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
    components: { SideBar }
}
</script>

<style>

</style>