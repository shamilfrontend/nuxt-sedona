<template>
  <el-menu :default-active="$route.path" class="app-menu" router>
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Аналитика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit-outline"></i>
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/hotels">
      <i class="el-icon-tickets"></i>
      <span>Отели</span>
    </el-menu-item>
    <el-menu-item index="/admin/users">
      <i class="el-icon-service"></i>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-setting"></i>
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AppAside'
}
</script>

<style lang="scss" scoped>
.app-menu {
  height: 100%;
}
</style>
