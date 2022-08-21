<template lang="">
  <section>
    <div class="row">
      <div>
        <div class="row">
          <b class="m-0">Payment Method</b>
          <q-space />
          <button class="m-0 text-primary">Select payment</button>
        </div>
        <q-card flat>
          <q-card-section>
            <div class="row">
              <p class="m-0">Wire Transfer</p>
              <q-space />
              <img src="../../assets/images/wise.png" alt="wise logo" />
            </div>
            <div>
              <p>
                <b class="text-grey">Account Name:</b>
                {{ store.state.user?.payment?.accountName }}
              </p>

              <p>
                <b class="text-grey">Account Number:</b>
                {{ store.state.user?.payment?.accountNumber }}
              </p>
              <p>
                <b class="text-grey">Routing Number:</b>
                {{ store.state.user?.payment?.routingNumber }}
              </p>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <q-space />
      <div class="summary-container">
        <div class="row summary">
          <p class="m-0">Sub Total</p>
          <q-space />
          <p class="m-0">&dollar;{{ store.state?.lineTotal }}</p>
        </div>
        <div class="row summary">
          <p class="m-0 text-grey">Discount</p>
          <q-space />
          <p class="m-0">&dollar;{{ store.state?.discount }}</p>
        </div>
        <div class="row summary mb-3">
          <p class="m-0 text-grey">Total Tax</p>
          <q-space />
          <p class="m-0">&dollar;{{ store.state.itemDetails?.tax }}</p>
        </div>
        <q-separator />
        <div class="row total mb-3">
          <p class="m-0 text-grey">Total Amount</p>
          <q-space />
          <p class="m-0">
            &dollar;{{ store.state?.lineTotal + store.state?.itemDetails?.tax }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>
<style scoped lang="scss">
section {
  margin: 1rem 0;

  .row {
    margin-bottom: 1rem;
  }

  .summary {
    margin-bottom: 1rem;
  }

  .total {
    margin: 2rem 0;
  }

  .mb-3 {
    margin-bottom: 3rem;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  img {
    max-height: 70px;
    max-width: 70px;
    object-fit: scale-down;
  }
}

.q-card,
.summary-container {
  min-width: 350px;
  max-width: 100%;
}
</style>
