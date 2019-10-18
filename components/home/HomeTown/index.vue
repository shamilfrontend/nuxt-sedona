<template>
  <section class="home-town">
    <div class="home-town__content">
      <h3 class="home-town__title">Настоящий городок</h3>
      <p class="home-town__number">— №1 —</p>
      <p class="home-town__text">
        Седона — не аттракцион для туристов, там течёт своя жизнь
      </p>
    </div>
    <div class="home-town__image"></div>
  </section>
</template>

<script>
export default {
  name: 'HomeTown'
}
</script>

<style lang="scss" scoped>
.home-town {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 256px;

  &__content {
    width: 400px;
    text-align: center;
    color: var(--color-white);
    background-color: var(--color-blue-light);
  }

  &__title {
    font-size: 21px;
    font-weight: bold;
    margin: 0;
    padding: 48px 125px 25px;
  }

  &__number {
    margin: 0;
    padding: 0 0 21px;
  }

  &__text {
    padding: 0 60px;
  }

  &__image {
    flex-grow: 1;
    background-image: url('./img/sedona-town.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
