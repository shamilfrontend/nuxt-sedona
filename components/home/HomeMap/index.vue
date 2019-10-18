<template>
  <div class="home-map">
    <img src="./img/map.png" alt="map" :draggable="false" />
  </div>
</template>

<script>
export default {
  name: 'HomeMap'
}
</script>

<style lang="scss" scoped>
.home-map {
  position: relative;
}
</style>
