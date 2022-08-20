<template lang="">
  <div>
    <div class="row details-container">
      <div class="column vertical-middle">
        <p class="m-0"><b>Item Detail</b></p>
        <p class="text-grey">Type Item for Hours item.</p>
      </div>
      <q-space />
      <q-btn icon="tune" flat size="md" label="Customize" />
    </div>
    <DetailsTable />
  </div>
</template>
<script>
import DetailsTable from "./detailsTable.vue";
export default {
  components: {
    DetailsTable,
  },
};
</script>
<style scoped lang="scss">
.q-btn {
  background: rgb(77, 75, 166, 0.2);
  height: 40px;
  border-radius: 0.5rem;
  color: $primary;
  text-transform: capitalize;
}
.details-container {
  margin-bottom: 1rem;
}
</style>
