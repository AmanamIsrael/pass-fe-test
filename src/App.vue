<template>
  <DashbaordLayout />
</template>

<script>
import { ref } from "vue";
import DashbaordLayout from "./layout/DashbaordLayout.vue";

export default {
  name: "LayoutDefault",

  components: {
    DashbaordLayout,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
