<template>
  <div class="admin-layout">
    <el-container class="admin-layout__container">
      <el-aside width="250px">
        <app-aside />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AppAside from '@/components/admin/AppAside'

export default {
  name: 'AdminLayout',

  components: {
    AppAside
  }
}
</script>

<style lang="scss" scoped>
.admin-layout {
  width: 100%;
  height: 100vh;

  background-color: #ffffff;

  &__container {
    height: 100%;
  }
}
</style>
