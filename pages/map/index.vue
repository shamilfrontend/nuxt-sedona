<template>
  <div class="page-wrap">
    <h1 class="page-wrap__title">Карта штата</h1>
    <div class="page-wrap__content">
      <div class="video-wrap">
        <google-map />
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'

export default {
  name: 'MapPage',

  components: {
    GoogleMap
  }
}
</script>

<style lang="scss">
.video-wrap {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;

  iframe {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
