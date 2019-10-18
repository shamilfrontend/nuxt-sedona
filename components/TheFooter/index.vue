<template>
  <footer :class="footerClasses">
    <span class="visit">#Visitsedona</span>
    <ul class="social-list">
      <li class="social social-tw">
        <a
          class="social-button"
          href="https://twitter.com/"
          title="Twitter"
          target="_blank"
        >
          <svg
            height="15"
            width="17"
            viewBox="0 0 17 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.95.144c1.685-.496 2.984.27 3.577 1.179.673-.231 1.331-.481 2.011-.708a2.345 2.345 0 0 1-.857 1.768c.685.17 1.304-.491 1.304-.491-.169 1-1.006 1.788-1.563 2.024-.231 6.75-3.175 11.217-10.077 11.082h-.446c-.41 0-4.164-.46-4.898-1.887 2.271.196 3.893-.422 4.693-1.177-.96-.3-2.679-.477-2.979-2.95.349.106.564.228 1.19.119C1.705 8.247.374 7.53.448 5.33c.285.328 1.067.536 1.34.472C1.085 5.561-.182 2.442.894.85c1.818 1.854 3.735 3.606 7.152 3.773C8.254 2.33 9.183.793 10.95.144z"
              fill="#FFF"
            ></path>
          </svg>
        </a>
      </li>
      <li class="social social-fb">
        <a
          class="social-button"
          href="https://www.facebook.com/"
          title="Facebook"
          target="_blank"
        >
          <svg
            height="22"
            width="12"
            viewBox="0 0 12 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4V0H8a4 4 0 0 0-4 4v4H0v4h4v10h4V12h4V8H8V4h4z"
              fill="#FFF"
            ></path>
          </svg>
        </a>
      </li>
      <li class="social social-vk">
        <a
          class="social-button"
          href="https://vk.com/"
          title="YouTube"
          target="_blank"
        >
          <svg
            height="16"
            width="20"
            viewBox="0 0 20 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 0H3C1.35 0 0 1.35 0 3v10c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM6.027 11.998V4.002L15.014 8l-8.987 3.998z"
              fill="#FFF"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
    <div class="footer-copyright">
      <a href="http://alisultanov.ru/" class="footer-copyright-link">
        <span class="website">Website by</span>
        <span>SHAMILFRONTEND</span>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  computed: {
    footerClasses() {
      return {
        'page-footer': true,
        'page-footer_is-home-page': this.$route.path === '/'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  position: relative;
  z-index: 2;
  display: flex;
  min-height: var(--size-footer-height);
  background-color: rgba(252, 251, 251, 0.9);
  align-items: center;
  justify-content: space-between;
  padding: 0 101px 0 133px;

  &_is-home-page {
    margin-top: -120px;
  }
}

.visit {
  font-size: 21px;
  font-weight: bold;
  line-height: 26px;
}

.page-footer li {
  list-style: none;
}

.social-button {
  display: flex;

  width: 46px;
  height: 48px;

  background-color: var(--color-blue-light);

  justify-content: center;
  align-items: center;
}

.social-button:hover,
.social-button:focus {
  background-color: #669ec0;
}

.social-button:active path {
  background-color: #5496bd;

  fill: #88b6d1;
}

.social-list {
  display: flex;

  width: 150px;
  margin: 0;
  padding: 0;

  flex-wrap: wrap;
  justify-content: space-between;
}

.footer-copyright {
  width: 197px;
  margin-left: -30px;
}

.footer-copyright a {
  display: flex;

  text-decoration: none;

  color: var(--color-black);

  align-items: center;
  justify-content: space-between;
}

.footer-copyright-link:hover path,
.footer-copyright-link:focus path {
  fill: var(--color-blue-light);
}

.footer-copyright-link:active path {
  fill: #bdbbbc;
}
</style>
