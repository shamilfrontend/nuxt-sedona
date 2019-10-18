<template>
  <div class="wrapper">
    <the-header />
    <nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter
  }
}
</script>
