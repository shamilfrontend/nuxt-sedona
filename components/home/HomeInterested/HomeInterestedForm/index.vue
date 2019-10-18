<template>
  <form class="interested-form" action="#" method="post">
    <div class="interested-form__row">
      <label for="date-arrival">Дата заезда:</label>
      <input
        id="date-arrival"
        class="interested-form__field"
        name="arrival"
        type="text"
        value="24 АПРЕЛЯ 2017"
        required
      />
      <button class="interested-form__icon-btn" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          viewBox="0 0 21 22"
        >
          <path
            d="M19.251 2.025h-2.845V.648c0-.381-.294-.689-.656-.689-.363 0-.656.308-.656.689v1.377h-3.938V.648c0-.381-.294-.689-.655-.689-.363 0-.657.308-.657.689v1.377H5.906V.648c0-.381-.294-.689-.656-.689-.363 0-.657.308-.657.689v1.377H1.75C.784 2.025 0 2.847 0 3.862v16.302C0 21.179.784 22 1.75 22h17.501c.966 0 1.749-.821 1.749-1.836V3.862c0-1.015-.783-1.837-1.749-1.837zm.437 18.139a.448.448 0 0 1-.437.459H1.75a.45.45 0 0 1-.438-.459V3.862a.45.45 0 0 1 .438-.459h2.844v1.378c0 .381.294.689.657.689.362 0 .656-.308.656-.689V3.403h3.938v1.378c0 .381.294.689.657.689.361 0 .655-.308.655-.689V3.403h3.938v1.378c0 .381.293.689.656.689.362 0 .656-.308.656-.689V3.403h2.845c.241 0 .437.206.437.459v16.302z"
          ></path>
          <path
            d="M4.594 8.225h2.625v2.066H4.594zM4.594 11.668h2.625v2.067H4.594zM4.594 15.112h2.625v2.066H4.594zM9.188 15.112h2.625v2.066H9.188zM9.188 11.668h2.625v2.067H9.188zM9.188 8.225h2.625v2.066H9.188zM13.781 15.112h2.625v2.066h-2.625zM13.781 11.668h2.625v2.067h-2.625zM13.781 8.225h2.625v2.066h-2.625z"
          ></path>
        </svg>
      </button>
    </div>

    <div class="interested-form__row">
      <label for="date-departure">Дата выезда:</label>
      <input
        id="date-departure"
        class="interested-form__field"
        name="departure"
        type="text"
        value="4 ИЮЛЯ 2017"
      />
      <button class="interested-form__icon-btn" type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          viewBox="0 0 21 22"
        >
          <path
            d="M19.251 2.025h-2.845V.648c0-.381-.294-.689-.656-.689-.363 0-.656.308-.656.689v1.377h-3.938V.648c0-.381-.294-.689-.655-.689-.363 0-.657.308-.657.689v1.377H5.906V.648c0-.381-.294-.689-.656-.689-.363 0-.657.308-.657.689v1.377H1.75C.784 2.025 0 2.847 0 3.862v16.302C0 21.179.784 22 1.75 22h17.501c.966 0 1.749-.821 1.749-1.836V3.862c0-1.015-.783-1.837-1.749-1.837zm.437 18.139a.448.448 0 0 1-.437.459H1.75a.45.45 0 0 1-.438-.459V3.862a.45.45 0 0 1 .438-.459h2.844v1.378c0 .381.294.689.657.689.362 0 .656-.308.656-.689V3.403h3.938v1.378c0 .381.294.689.657.689.361 0 .655-.308.655-.689V3.403h3.938v1.378c0 .381.293.689.656.689.362 0 .656-.308.656-.689V3.403h2.845c.241 0 .437.206.437.459v16.302z"
          ></path>
          <path
            d="M4.594 8.225h2.625v2.066H4.594zM4.594 11.668h2.625v2.067H4.594zM4.594 15.112h2.625v2.066H4.594zM9.188 15.112h2.625v2.066H9.188zM9.188 11.668h2.625v2.067H9.188zM9.188 8.225h2.625v2.066H9.188zM13.781 15.112h2.625v2.066h-2.625zM13.781 11.668h2.625v2.067h-2.625zM13.781 8.225h2.625v2.066h-2.625z"
          ></path>
        </svg>
      </button>
    </div>

    <div class="interested-form__grid">
      <div class="interested-form__col">
        <label for="adults">Взрослые:</label>
        <div class="interested-form-counter">
          <input
            id="adults"
            class="interested-form-counter__field"
            type="text"
            value="2"
            min="1"
          />
          <button class="interested-form-counter__minus" type="button">
            <svg>
              <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"></rect>
            </svg>
          </button>
          <button class="interested-form-counter__plus" type="button">
            <svg>
              <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"></rect>
              <rect
                fill="#a9a9a9"
                height="12"
                width="3"
                x="17.5"
                y="12.5"
              ></rect>
            </svg>
          </button>
        </div>
      </div>

      <div class="interested-form__col interested-form__col_right">
        <label for="children">Дети:</label>
        <div class="interested-form-counter">
          <input
            id="children"
            class="interested-form-counter__field"
            type="text"
            value="0"
            min="0"
          />
          <button class="interested-form-counter__minus" type="button">
            <svg>
              <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"></rect>
            </svg>
          </button>
          <button class="interested-form-counter__plus" type="button">
            <svg>
              <rect fill="#a9a9a9" height="3" width="12" x="13" y="17"></rect>
              <rect
                fill="#a9a9a9"
                height="12"
                width="3"
                x="17.5"
                y="12.5"
              ></rect>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <button class="interested-form__submit-btn" type="submit">
      Найти
    </button>
  </form>
</template>

<script>
export default {
  name: 'HomeInterestedForm'
}
</script>

<style lang="scss" scoped>
.interested-form {
  padding: 55px;
  min-height: 395px;
  background-color: var(--color-white);

  &__row {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-column-gap: 50px;
    margin-bottom: 30px;
  }

  &__col {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_right {
      padding-left: 25px;
    }
  }

  &__field {
    width: 295px;
    height: 38px;
    font-family: inherit;
    font-size: 14px;
    font-weight: bold;
    line-height: 26px;
    text-transform: inherit;
    border: 2px solid transparent;
    background-color: #f2f2f2;
    margin: 0 38px 0 0;
    padding: 1px 0 0 13px;

    &:hover {
      outline: 0;
      background-color: #ebebeb;

      & + .interested-form__icon-btn {
        background-color: #ebebeb;
      }
    }

    &:focus {
      outline: 0;
      background-color: var(--color-white);
      border: 2px solid #e5e5e5;
      border-right: none;

      & + .interested-form__icon-btn {
        background-color: var(--color-white);
        border: 2px solid #e5e5e5;
        border-left: none;
      }
    }
  }

  &__icon-btn {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    width: 38px;
    height: 38px;
    margin: 0;
    padding: 0;
    border: none;
    background-color: #f2f2f2;
    justify-content: center;
    align-items: center;

    &:focus {
      outline: 0;
    }

    path {
      fill: #cacaca;
    }

    &:hover path,
    &:focus path,
    &:hover rect,
    &:focus rect {
      fill: var(--color-black);
    }

    &:active path,
    &:active rect {
      fill: var(--color-blue-light);
    }
  }

  &__submit-btn {
    font-family: inherit;
    font-size: 21px;
    font-weight: bold;
    line-height: 26px;
    width: 100%;
    height: 58px;
    margin-top: 24px;
    text-transform: inherit;
    color: var(--color-white);
    background-color: var(--color-blue-light);
    border: none;

    &:hover,
    &:focus {
      background-color: var(--color-blue-light);
    }

    &:active {
      color: #88b6d1;
      background-color: var(--color-blue-light);
    }
  }
}

.interested-form-counter {
  display: flex;

  &__field {
    order: 2;
    width: 38px;
    height: 38px;
    padding: 0;
    text-align: center;
    border: 2px solid transparent;
    background-color: #f2f2f2;

    &:focus {
      outline: 0;
      background-color: var(--color-white);
      border-top: 2px solid #e5e5e5;
      border-bottom: 2px solid #e5e5e5;

      & ~ .interested-form-counter__minus {
        background-color: var(--color-white);
        border: 2px solid #e5e5e5;
        border-right: none;
      }

      & ~ .interested-form-counter__plus {
        background-color: var(--color-white);
        border: 2px solid #e5e5e5;
        border-left: none;
      }
    }
  }

  button {
    width: 38px;
    height: 38px;
    margin: 0;
    padding: 0;
    border: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    overflow: hidden;
    outline: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__minus {
    order: 1;
  }
  &__plus {
    order: 3;
  }
}
</style>
