<template>
  <div class="empty-layout">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout'
}
</script>

<style lang="scss" scoped>
.empty-layout {
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
