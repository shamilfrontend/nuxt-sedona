<template>
  <div class="">Logout</div>
</template>

<script>
export default {
  name: 'LogoutPage',

  layout: 'admin',

  beforeCreate() {
    this.$store.dispatch('/auth/logout')
    this.$router.push('/admin/login?message=logout')
  }
}
</script>
