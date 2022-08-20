<template>
  <div>
    <InvoiceInfo />
    <InvoiceCard />
    <ItemDetail />
  </div>
</template>
<script>
import InvoiceInfo from "@/components/invoices/InvoiceInfo.vue";
import InvoiceCard from "../components/invoices/invoiceCard.vue";
import ItemDetail from "../components/invoices/itemDetail.vue";
export default { components: { InvoiceInfo, InvoiceCard, ItemDetail } };
</script>
<style lang=""></style>
