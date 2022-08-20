<template>
  <div>
    <InvoiceInfo />
    <InvoiceCard />
  </div>
</template>
<script>
import InvoiceInfo from "@/components/invoices/InvoiceInfo.vue";
import InvoiceCard from "../components/invoices/invoiceCard.vue";
export default { components: { InvoiceInfo, InvoiceCard } };
</script>
<style lang=""></style>
