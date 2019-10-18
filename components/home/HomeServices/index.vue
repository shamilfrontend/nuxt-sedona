<template>
  <section class="home-services">
    <div class="home-services__item home-services__item_house">
      <h4 class="home-services__title">Жильё</h4>
      <p class="home-services__text">
        Рекомендуем пожить в настоящем мотеле, всё как в кино!
      </p>
    </div>
    <div class="home-services__item home-services__item_food">
      <h4 class="home-services__title">Еда</h4>
      <p class="home-services__text">
        Всегда заказывайте фирменный бургер, вы не разочаруетесь!
      </p>
    </div>
    <div class="home-services__item home-services__item_souvenir">
      <h4 class="home-services__title">Сувениры</h4>
      <p class="home-services__text">
        Не только китайского, но и местного производства!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeServices'
}
</script>

<style lang="scss" scoped>
.home-services {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 324px;

  &__item {
    flex-basis: 400px;
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: var(--color-white);

    &_house {
      background-image: url(./img/icon-1.svg);
      background-repeat: no-repeat;
      background-position: center 54px;
    }
    &_food {
      background-image: url(./img/icon-3.svg);
      background-repeat: no-repeat;
      background-position: center 55px;
    }
    &_souvenir {
      background-image: url(./img/icon-2.svg);
      background-repeat: no-repeat;
      background-position: center 50px;
    }
  }

  &__title {
    font-size: 21px;
    margin: 0;
    padding: 156px 0 23px;
    color: var(--color-black);
  }

  &__text {
    margin: 0;
    padding: 0 58px 0;
  }
}
</style>
