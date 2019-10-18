<template>
  <header class="page-header">
    <nav class="main-menu">
      <nuxt-link to="/" tabindex="1">
        <img class="logo" src="./img/logo.png" alt="Седона" />
      </nuxt-link>
      <ul class="main-menu__list">
        <li
          v-for="(menu, index) in mainMenu"
          :key="index"
          class="main-menu__item"
        >
          <nuxt-link :to="menu.link" class="main-menu__link">
            {{ menu.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',

  data() {
    return {
      mainMenu: [
        {
          link: '/info',
          text: 'Информация'
        },
        {
          link: '/media',
          text: 'Фото и видео'
        },
        {
          link: '/map',
          text: 'Карта штата'
        },
        {
          link: '/hotels',
          text: 'Гостиницы'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-white);
}

.logo {
  position: absolute;
  z-index: 3;
  left: 50%;
  width: 138px;
  height: 70px;
  transform: translateX(-50%);

  &:focus {
    outline: 1px solid blue;
  }
}

.main-menu {
  height: var(--size-header-height);
  padding: 0 72px;
  color: var(--color-black);

  &__list {
    display: flex;
    align-items: flex-start;

    margin: 0;
    padding: 0;

    list-style: none;

    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__item {
    text-align: left;
    width: 203px;
    margin: 15px 0;

    &:nth-child(2) {
      margin-right: 62px;
    }
    &:nth-child(3) {
      margin-left: 62px;
      text-align: right;
    }
    &:nth-child(4) {
      text-align: right;
    }
    .router-link-active {
      color: var(--color-blue-light);
    }
  }

  &__link {
    font-weight: bold;
    line-height: 26px;
    color: var(--color-black);

    .nuxt-link-exact-active,
    &:hover,
    &:focus {
      color: var(--color-blue-light);
    }

    &:active {
      color: rgba(0, 0, 0, 0.302);
    }
  }
}
</style>
