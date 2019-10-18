<template>
  <section class="home-interested">
    <h2 class="home-interested__title">Заинтересовались?</h2>
    <p class="home-interested__description">
      Укажите предполагаемые даты поездки,<br />
      и мы покажем вам лучшие предложения гостиниц в седоне
    </p>

    <div class="home-interested__form-wrap">
      <a
        href="#"
        class="home-interested__btn"
        @click.prevent="isFormShown = !isFormShown"
      >
        Поиск гостиницы в Седоне
      </a>

      <home-interested-form
        v-show="isFormShown"
        class="home-interested__form"
      />
    </div>
  </section>
</template>

<script>
import HomeInterestedForm from './HomeInterestedForm'

export default {
  name: 'HomeInterested',

  components: {
    HomeInterestedForm
  },

  data: () => ({
    isFormShown: true
  })
}
</script>

<style lang="scss" scoped>
.home-interested {
  min-height: 291px;
  text-align: center;
  background-color: var(--color-white);

  &__title {
    font-size: 30px;
    font-weight: bold;
    line-height: 36px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 53px 0 25px;
    color: var(--color-black);
  }

  &__description {
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 380px 44px;
  }

  &__form-wrap {
    position: relative;
    max-width: 568px;
    margin-left: auto;
    margin-right: auto;
  }

  &__btn {
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;

    display: block;
    padding: 30px 100px;

    text-transform: inherit;

    color: #cfcac7;
    border: none;
    background-color: #766357;
    box-shadow: 0 10px 20px 0 rgba(118, 99, 87, 0.25);
  }

  &__form {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 2;
  }
}
</style>
