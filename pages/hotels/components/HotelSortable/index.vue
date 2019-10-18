<template>
  <div class="hotel-sortable">
    <span class="hotel-sortable__count">Найдено: {{ count }}</span>
    <h3 class="hotel-sortable__title">Сортировка:</h3>
    <ul class="hotel-sortable__list">
      <li
        v-for="item in sortList"
        :key="item.value"
        class="hotel-sortable__item"
      >
        <a
          class="hotel-sortable__link"
          :class="{
            'hotel-sortable__link_active': item.value === selectedSort
          }"
          href="#"
          @click.prevent="selectedSort = item.value"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
    <div class="sortable-arrows">
      <a class="sortable-arrows__link sortable-arrows__up" href="#">
        <svg
          class="sortable-arrows__svg"
          height="10"
          viewBox="0 0 11 10"
          width="11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.5 0L0 10h11z" fill="#cacaca"></path>
        </svg>
      </a>
      <a
        class="sortable-arrows__link sortable-arrows__down sortable-arrows_active"
        href="#"
      >
        <svg
          class="sortable-arrows__svg"
          height="10"
          viewBox="0 0 11 10"
          width="11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.5 10L0 0h11" fill="#cacaca"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelSortable',

  props: {
    count: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      selectedSort: 'price',
      sortList: [
        {
          label: 'По цене',
          value: 'price'
        },
        {
          label: 'По типу',
          value: 'type'
        },
        {
          label: 'По рейтингу',
          value: 'rating'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.hotel-sortable {
  font-size: 12px;
  line-height: 18px;
  display: flex;
  height: 86px;
  padding: 0 72px;
  border-bottom: 1px solid #e5e5e5;
  align-items: center;

  &__count {
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;

    margin-right: 47px;
  }

  &__title {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    margin-right: 38px;
  }

  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    margin: 2px 32px 0 0;
    padding: 0;
  }

  &__link {
    color: #c7c7c7;
    border-bottom: 1px dotted var(--color-blue-light);

    &:hover {
      color: var(--color-blue-light);
    }

    &:focus {
      color: var(--color-blue-light);
      border: none;
    }

    &_active {
      color: var(--color-blue-light);
      border: none;
      fill: var(--color-blue-light);
    }
  }
}

.sortable a:active {
  color: var(--color-black);
  border: none;
}

.sortable-arrows {
  font-family: inherit;
  font-size: 0;
  margin-left: auto;
  display: flex;
  width: 35px;
  height: 13px;
  margin-top: 2px;
  justify-content: flex-end;

  &__svg {
    padding-left: 15px;
  }

  &__link {
    &:hover path {
      fill: var(--color-black);
    }

    &:active path,
    &:focus path {
      fill: var(--color-blue-light);
    }

    &_active {
      path {
        color: var(--color-blue-light);
        border: none;
        fill: var(--color-blue-light);
      }
    }
  }
}
</style>
