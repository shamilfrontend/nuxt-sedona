<template>
  <div>
    <home-poster />

    <home-intro />

    <home-town />

    <home-services />

    <home-bridge />

    <home-more-advantages />

    <home-interested />

    <home-map />
  </div>
</template>

<script>
import HomePoster from '@/components/home/HomePoster'
import HomeIntro from '@/components/home/HomeIntro'
import HomeTown from '@/components/home/HomeTown'
import HomeServices from '@/components/home/HomeServices'
import HomeBridge from '@/components/home/HomeBridge'
import HomeMoreAdvantages from '@/components/home/HomeMoreAdvantages'
import HomeInterested from '@/components/home/HomeInterested'
import HomeMap from '@/components/home/HomeMap'

export default {
  name: 'HomePage',

  components: {
    HomePoster,
    HomeIntro,
    HomeTown,
    HomeServices,
    HomeBridge,
    HomeMoreAdvantages,
    HomeInterested,
    HomeMap
  }
}
</script>
