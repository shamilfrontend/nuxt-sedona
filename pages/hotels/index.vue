<template>
  <div class="hotels-page">
    <hotel-filters />
    <div class="hotels-page__content">
      <hotel-sortable :count="hotelCount" />
      <section class="hotels-page__list">
        <hotel-item
          v-for="(hotel, index) in hotels"
          :key="index"
          :hotel="hotel"
        />
      </section>
    </div>
  </div>
</template>

<script>
import HotelFilters from './components/HotelFilters'
import HotelSortable from './components/HotelSortable'
import HotelItem from './components/HotelItem'

export default {
  name: 'Hotels',

  components: {
    HotelFilters,
    HotelSortable,
    HotelItem
  },

  computed: {
    hotelCount() {
      return this.hotels.length
    }
  },

  async asyncData({ $axios }) {
    const hotels = await $axios.$get('http://localhost:3000/api/v1/hotel')
    return {
      hotels: hotels.map((hotel) => ({
        ...hotel,
        imagePath: require(`./img/${hotel.imagePath}`)
      }))
    }
  }
}
</script>

<style lang="scss">
.hotels-page {
  &__content {
    background-color: #fefefe;
  }
}
</style>
