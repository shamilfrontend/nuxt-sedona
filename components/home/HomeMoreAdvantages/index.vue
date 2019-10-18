<template>
  <section class="more-advantages">
    <div class="more-advantages__item">
      <h3 class="more-advantages__title">Небольшая площадь</h3>
      <p class="more-advantages__number">— №3 —</p>
      <p class="more-advantages__text">
        Все достопримечательности находятся очень близко
      </p>
    </div>
    <div class="more-advantages__item">
      <h3 class="more-advantages__title">Красивая дорога</h3>
      <p class="more-advantages__number">— №4 —</p>
      <p class="more-advantages__text">
        Ехать в Седону из Лас-Вегаса совсем не скучно!
      </p>
    </div>
    <div class="more-advantages__item">
      <h3 class="more-advantages__title">Мало туристов</h3>
      <p class="more-advantages__number">— №5 —</p>
      <p class="more-advantages__text">
        Большинство едет в гранд каньон и толпится там
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeMoreAdvantages'
}
</script>

<style lang="scss">
.more-advantages {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  &__item {
    width: 400px;
    min-height: 256px;
    text-align: center;
    color: #333;
    background-color: #eee;

    &:last-of-type p:nth-of-type(2) {
      padding: 0 75px;
    }
  }

  &__title {
    color: var(--color-black);
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
}
</style>
