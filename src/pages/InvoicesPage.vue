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

onMounted(async () => {
  try {
    const response = await fetch("api/users");
    response.json().then((data) => {
      console.log(data);
      getInvoices();
    });
  } catch (error) {
    console.log(error);
  }
});

const getInvoices = async () => {
  try {
    const response = await fetch("api/invoice");
    response.json().then((data) => {
      console.log(data);
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
<style lang=""></style>
