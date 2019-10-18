<template>
  <div class="home-poster">
    <img
      class="home-poster__image"
      src="./img/title-intro.png"
      alt="Welcome Sedona"
    />
  </div>
</template>

<script>
export default {
  name: 'HomePoster'
}
</script>

<style lang="scss" scoped>
.home-poster {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  height: 507px;
  margin-bottom: 63px;
  padding-top: 74px;
  text-align: center;
  background-color: var(--color-blue-light);
  background-image: url(./img/intro.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center top;

  &__image {
    display: block;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 57px;
    background-image: url(./img/intro-after.png);
    background-repeat: no-repeat;
    background-position: center bottom;
  }
}
</style>
