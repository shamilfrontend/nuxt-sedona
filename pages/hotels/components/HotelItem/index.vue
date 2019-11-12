<template>
  <article class="hotel-item">
    <div class="hotel-item__left">
      <div class="hotel-item__image">
        <img
          :src="hotel.imagePath"
          alt="Amara Resost & SPA"
          height="90"
          width="135"
        />
      </div>
      <div class="hotel-item__content">
        <h3 class="hotel-item__name">{{ hotel.title }}</h3>
        <div class="hotel-item-type">
          <span class="hotel-item-type__name">
            {{ displayHotelType(hotel.type) }}
          </span>
          <span class="hotel-item-type__price">От {{ hotel.price }} Р.</span>
        </div>
        <button class="hotel-item__more-btn" type="button">Подробнее</button>
      </div>
    </div>
    <div class="hotel-item__right">
      <div
        class="hotel-item__stars"
        :class="starClasses(hotel.starCount)"
      ></div>
      <div class="hotel-item__rating">Рейтинг: {{ hotel.rating }}</div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HotelItem',

  props: {
    hotel: {
      type: Object,
      required: true
    }
  },

  methods: {
    starClasses(starCount) {
      switch (starCount) {
        default:
        case 1:
          return 'hotel-item__stars_one'
        case 2:
          return 'hotel-item__stars_second'
        case 3:
          return 'hotel-item__stars_three'
        case 4:
          return 'hotel-item__stars_four'
        case 5:
          return 'hotel-item__stars_five'
      }
    },
    displayHotelType(type) {
      switch (type) {
        default:
        case 'hotel':
          return 'Гостиница'
        case 'motel':
          return 'Мотель'
        case 'apartments':
          return 'Апартаменты'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin buttonStyles() {
  font-family: inherit;
  font-size: 14px;
  font-weight: bold;
  line-height: 21px;
  padding: 3px 17px;
  text-transform: inherit;
  color: var(--color-white);
  border: none;
}

.hotel-item {
  display: flex;
  padding: 30px 72px;
  border-bottom: 1px solid #e5e5e5;
  justify-content: space-between;

  &__left {
    display: flex;
    flex-wrap: wrap;
  }

  &__right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    width: 115px;
  }

  &__image {
    max-height: 90px;
    max-width: 135px;
    margin-right: 31px;
  }

  &__name {
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;
    max-width: 650px;
    margin: -4px 0 6px;
    padding: 0;
  }

  &__more-btn {
    @include buttonStyles;

    background-color: var(--color-blue-light);
  }

  &__stars {
    height: 16px;
    background-image: url('./img/star.svg');
    background-repeat: repeat-x;
    background-position: center right;

    &_one {
      width: 20%;
    }

    &_second {
      width: 40%;
    }

    &_three {
      width: 60%;
    }

    &_four {
      width: 80%;
    }

    &_five {
      width: 100%;
    }
  }

  &__rating {
    font-size: 14px;
    line-height: 21px;
    height: 21px;
    padding: 3px 15px 3px 16px;
    color: #666;
    background-color: #f2f2f2;
  }
}

.hotel-item-type {
  display: flex;
  width: 181px;
  justify-content: space-between;

  font: inherit;
  margin: 0 0 14px;
  padding: 0;
}
</style>
