<template>
  <div class="admin">Admin</div>
</template>

<script>
export default {
  name: 'AdminPage',

  layout: 'admin',

  middleware: ['admin-auth']
}
</script>
