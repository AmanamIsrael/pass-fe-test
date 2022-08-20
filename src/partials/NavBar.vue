<template>
  <nav>
    <section>
      <div class="logo">Payday.</div>
      <div class="tabs-container">
        <q-tabs
          inline-label
          v-model="tab"
          no-caps
          indicator-color="primary"
          outside-arrows
          mobile-arrows
          active-color="primary"
        >
          <q-route-tab
            to="/"
            icon="dashboard"
            name="dashboard"
            label="Dashboard"
          />
          <q-route-tab
            to="/invoices"
            icon="description"
            name="invoices"
            label="Invoices"
          />
          <q-route-tab
            to="/wallet"
            icon="balance"
            name="wallet"
            label="Wallet"
          />
          <q-route-tab
            to="/activity"
            icon="assessment"
            name="activity"
            label="Activity"
          />
          <q-route-tab to="/help" icon="phone" name="help" label="Help" />
        </q-tabs>
      </div>
    </section>
  </nav>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      tab: ref("invoices"),
    };
  },
});
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  background-color: $white;
  color: $dark;
  padding: 1rem;

  section {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: $primary;
      margin-right: 1rem;
    }

    .tabs-container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
