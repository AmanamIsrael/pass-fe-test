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
  margin-top: 1rem;

  div.layout {
    background-color: $white;
    min-height: max-content;
    margin-top: 1rem;
    padding: 2rem;
    border-radius: 0.5rem;
  }
}

// Media queries
@media (max-width: 768px) {
  div.layout {
    padding: 1rem !important;
  }
}
q-layout {
  min-height: auto;
}
</style>
