<template>
  <div>
    <div class="loading-spinner" v-if="isLoading">
      <q-spinner-hourglass color="primary" size="2em" />
    </div>
    <section v-else>
      <InvoiceInfo />
      <InvoiceCard />
      <ItemDetail />
      <InvoiceFooter />
    </section>
  </div>
</template>
<script setup>
import InvoiceInfo from "@/components/invoices/InvoiceInfo.vue";
import InvoiceCard from "../components/invoices/invoiceCard.vue";
import ItemDetail from "../components/invoices/itemDetail.vue";
import InvoiceFooter from "@/components/invoices/invoiceFooter.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = ref(false);

onMounted(() => {
  getUsers();
});

const getUsers = async () => {
  isLoading.value = true;
  try {
    const response = await fetch("api/users");
    response.json().then((data) => {
      store.commit("setUser", data.users[0]);
      getInvoices();
    });
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
};

const getInvoices = async () => {
  try {
    const response = await fetch("api/invoice");
    response.json().then((data) => {
      store.commit("setInvoice", data.invoices[0]);
    });
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
};
</script>
<style lang="scss">
.loading-spinner {
  display: grid;
  place-items: center;
  height: 70vh;
}
</style>
