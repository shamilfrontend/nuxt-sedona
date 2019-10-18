<template>
  <div class="map">
    <iframe
      class="map-iframe"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52385.1356576571!2d-111.83015794013141!3d34.854443815417135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1530445292295"
      width="1200"
      height="593"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap'
}
</script>

<style lang="scss" scoped>
.map {
  background-image: url(./img/map.png);
  background-repeat: no-repeat;
  background-position: center;
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
