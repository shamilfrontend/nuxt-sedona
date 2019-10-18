<template>
  <div class="home-intro">
    <h1 class="home-intro__title">
      Седона — небольшой городок в Аризоне, заслуживающий большего!
    </h1>
    <h2 class="home-intro__sub-title">
      Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!
    </h2>
  </div>
</template>

<script>
export default {
  name: 'HomeIntro'
}
</script>

<style lang="scss" scoped>
.home-intro {
  padding: 0 340px;
  text-align: center;
  background-color: var(--color-white);

  &__title {
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;

    margin: 10px 0 25px;

    color: var(--color-black);
  }

  &__sub-title {
    font-size: 14px;
    line-height: 26px;
    margin: 0 0 51px;
    color: #333;
  }
}
</style>
