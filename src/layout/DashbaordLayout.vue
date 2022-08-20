<template>
  <q-layout>
    <q-page-container>
      <Navbar />
      <div class="body-container">
        <router-view></router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from "@/partials/NavBar.vue";
export default {
  name: "DashboardLayout",
  components: { Navbar },
};
</script>

<style scoped lang="scss">
.body-container {
  background-color: $white;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
}
</style>
