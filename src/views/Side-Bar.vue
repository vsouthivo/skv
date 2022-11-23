<template>
  <v-card
    class="mx-auto"
    width="300"
    flat
  >
    <v-list v-model:opened="open">
      <v-list-item prepend-icon="mdi-home" title="Home" ></v-list-item>
      <v-divider inset></v-divider>
      <v-list-group value="Users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Action"
          ></v-list-item>
        </template>
        <v-list-item
            v-for="([title, icon,route], i) in cruds"
            :key="i"
            :value="title"
            :title="title"
            :prepend-icon="icon"
            :router="route"
          ></v-list-item>
        </v-list-group>  
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      open: ['Users'],
      cruds: [
        ['Show', 'mdi-file-outline','/show'],
        ['Edit & Update', 'mdi-update','/edit'],
      ],
    }),
  }
</script>

<style>

</style>


