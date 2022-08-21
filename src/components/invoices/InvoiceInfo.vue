<template lang="">
  <div class="row no-wrap items-center q-mt-md">
    <div class="row items-center">
      <q-avatar color="primary" class="q-mr-md" text-color="white">X</q-avatar>
      <div class="column vertical-middle">
        <b class="text-primary">{{ store.state?.user?.name }}</b>
        <p class="text-grey email">{{ store.state?.user?.email }}</p>
      </div>
    </div>
    <q-space />
    <div class="column vertical-middle">
      <p class="text-grey email text-right">
        {{ store.state?.user?.address?.street }}
      </p>
      <p class="text-grey email text-right">
        {{ store.state?.user?.address?.city }}
      </p>
      <p class="text-grey email text-right">
        {{ store.state?.user?.address?.country }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>
<style lang="scss">
.email {
  margin: 0;
}
</style>
