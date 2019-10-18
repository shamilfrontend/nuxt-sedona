<template>
  <section class="home-bridge">
    <div class="home-bridge__image"></div>
    <div class="home-bridge__content">
      <h3 class="home-bridge__title">
        Там есть<br />
        Мост дьявола
      </h3>
      <p class="home-bridge__number">— №2 —</p>
      <p class="home-bridge__text">
        Да, по нему можно пройти! Если конечно вы осмелитесь
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeBridge'
}
</script>

<style lang="scss" scoped>
.home-bridge {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  height: 256px;

  &__image {
    flex-grow: 1;
    background-image: url('./img/sedona-bridge.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__content {
    width: 400px;
    min-height: 256px;
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
    margin: 0;
    padding: 0 40px;
  }
}
</style>
