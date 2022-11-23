<template>
  <Navbar/>
  <ListComponentVue/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Navbar from './Nav-Bar.vue'
import ListComponentVue from '@/components/core/ListComponent.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Navbar, ListComponentVue
  },
});
</script>
