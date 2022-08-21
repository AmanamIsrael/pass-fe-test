<template lang="">
  <q-card flat class="text-white">
    <q-card-section class="container">
      <section class="row items-center">
        <div class="column vertical-middle">
          <p><b>Invoice Number</b></p>
          <p>{{ store.state?.invoice?.number }}</p>
          <p>Issued Date: {{ store.state?.invoice?.number }}</p>
          <p>Due Date: 18 jan 2022</p>
        </div>
        <q-space />
        <div class="column text-right vertical-middle">
          <p><b>Billed To</b></p>
          <p>{{ store.state?.invoice?.billedTo?.name }}</p>
          <p>{{ store.state?.invoice?.billedTo?.address?.street }}</p>
          <p>{{ store.state?.invoice?.billedTo?.address?.city }}</p>
        </div>
      </section>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>
<style lang=""></style>
<style scoped lang="scss">
.q-card {
  margin: 1.5rem 0;
  padding: 1rem;
  border-radius: 2rem;
  min-height: max-content;
  background-color: rgb(77, 75, 166, 0.9);
}
.column {
  text-align: left;
}
</style>
