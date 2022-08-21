<template>
  <div>
    <InvoiceInfo />
    <InvoiceCard />
    <ItemDetail />
    <InvoiceFooter />
  </div>
</template>
<script>
import InvoiceInfo from "@/components/invoices/InvoiceInfo.vue";
import InvoiceCard from "../components/invoices/invoiceCard.vue";
import ItemDetail from "../components/invoices/itemDetail.vue";
import InvoiceFooter from "@/components/invoices/invoiceFooter.vue";
export default {
  components: { InvoiceInfo, InvoiceCard, ItemDetail, InvoiceFooter },
};
</script>
<style lang=""></style>
