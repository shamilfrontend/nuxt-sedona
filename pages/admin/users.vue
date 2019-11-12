<template>
  <div class="">Users</div>
</template>

<script>
export default {
  name: 'UserPage',

  layout: 'admin',

  middleware: ['admin-auth']
}
</script>
