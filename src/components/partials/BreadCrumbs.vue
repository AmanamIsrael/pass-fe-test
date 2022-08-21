<template>
  <div class="breadcrumbs">
    <span class="header">
      {{ $route.name?.toUpperCase() }}
    </span>
    <span>
      {{ $route.name === "invoices" ? "/edit invoice (INV-2022-010)" : "" }}
    </span>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  color: $grey;
  font-weight: 500;

  .header {
    font-weight: bold;
    color: $dark;
  }
}

// Media queries
@media (max-width: 768px) {
  .breadcrumbs {
    margin-left: 1rem;
  }
}
</style>
