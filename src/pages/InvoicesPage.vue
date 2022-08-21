<template>
  <div>
    <InvoiceInfo />
    <InvoiceCard />
    <ItemDetail />
    <InvoiceFooter />
  </div>
</template>
<script setup>
import InvoiceInfo from "@/components/invoices/InvoiceInfo.vue";
import InvoiceCard from "../components/invoices/invoiceCard.vue";
import ItemDetail from "../components/invoices/itemDetail.vue";
import InvoiceFooter from "@/components/invoices/invoiceFooter.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  getUsers();
});

const getUsers = async () => {
  try {
    const response = await fetch("api/users");
    response.json().then((data) => {
      store.commit("setUser", data.users[0]);
      getInvoices();
    });
  } catch (error) {
    console.log(error);
  }
};

const getInvoices = async () => {
  try {
    const response = await fetch("api/invoice");
    response.json().then((data) => {
      store.commit("setInvoice", data.invoices[0]);
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
<style lang=""></style>
