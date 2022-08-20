<template>
  <q-layout>
    <q-page-container>
      <Navbar />
      <section class="body-container">
        <BreadCrumbs />
        <div class="layout">
          <router-view></router-view>
        </div>
      </section>
    </q-page-container>
  </q-layout>
</template>

<script>
import Navbar from "@/partials/NavBar.vue";
import BreadCrumbs from "@/partials/BreadCrumbs.vue";
export default {
  name: "DashboardLayout",
  components: { Navbar, BreadCrumbs },
};
</script>

<style scoped lang="scss">
section.body-container {
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 0.5rem;
  padding: 0 2rem;
  padding-top: 1rem;
  margin-top: 1rem;

  div.layout {
    background-color: $white;
    min-height: 750px;
    margin-top: 2rem;
  }
}
q-layout {
  min-height: auto;
}
</style>
