<template>
  <section class="hotel-filters">
    <form class="filter filter-container">
      <div class="filter-checkbox">
        <h3 class="filter-title">Инфраструктура</h3>
        <ul class="filter-checkbox-list">
          <li class="filter-checkbox-item">
            <label>
              <input name="pool" type="checkbox" checked />
              <span class="checkbox-indicator"></span>
              Бассейн
            </label>
          </li>
          <li class="filter-checkbox-item">
            <label>
              <input name="parking" type="checkbox" />
              <span class="checkbox-indicator"></span>
              Парковка
            </label>
          </li>
          <li class="filter-checkbox-item">
            <label>
              <input name="wi-fi" type="checkbox" />
              <span class="checkbox-indicator"></span>
              Wi-Fi
            </label>
          </li>
        </ul>
      </div>
      <div class="filter-checkbox">
        <h3 class="filter-title">Тип жилья</h3>
        <ul class="filter-checkbox-list">
          <li class="filter-checkbox-item">
            <label>
              <input name="guesthouse" type="checkbox" checked />
              <span class="checkbox-indicator"></span>
              Гостиница
            </label>
          </li>
          <li class="filter-checkbox-item">
            <label>
              <input name="motel" type="checkbox" checked />
              <span class="checkbox-indicator"></span>
              Мотель
            </label>
          </li>
          <li class="filter-checkbox-item">
            <label>
              <input name="apartment" type="checkbox" checked />
              <span class="checkbox-indicator"></span>
              Апартаменты
            </label>
          </li>
        </ul>
      </div>
      <div class="filter-range">
        <h3 class="filter-title">Стоимость в сутки (р):</h3>
        <div class="price-controls">
          <label class="min-price">
            от
            <input name="min-price" type="text" value="0" />
          </label>
          <label class="max-price">
            до
            <input name="max-price" type="text" value="3000" />
          </label>
        </div>
        <div class="range-controls">
          <div class="scale">
            <div class="bar"></div>
            <div class="range-toggle range-toggle-min"></div>
            <div class="range-toggle range-toggle-max"></div>
          </div>
        </div>
        <button class="btn-transparent" type="submit">Показать</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'HotelFilters'
}
</script>

<style lang="scss">
.filter-container {
  display: flex;
  align-items: flex-start;
  min-height: 217px;
  padding: 0 72px;
  color: var(--color-white);
  background-color: var(--color-blue-middle);
  background-image: url('./img/filter-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -56px;
  justify-content: flex-start;
}

.filter-title {
  font-size: 16px;
  line-height: 21px;
  margin: 0;
  padding: 28px 0 23px;
}

.filter-checkbox ul {
  overflow: hidden;
  width: 255px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.filter-checkbox li {
  position: relative;
  margin: 0 0 25px 37px;
  padding: 0;
}

.filter-checkbox-item {
  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox']:checked + .checkbox-indicator::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 14px;
    width: 5px;
    height: 22px;
    transform: rotate(45grad);
    border: 0.5px solid var(--color-blue-middle);
    border-bottom: 0;
    border-radius: 2px;
    background-color: var(--color-white);
  }
  input[type='checkbox']:checked + .checkbox-indicator::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 4px;
    width: 4.5px;
    height: 12.5px;
    transform: rotate(-50grad);
    border: 0 solid var(--color-blue-middle);
    border-left: 0.5px solid var(--color-blue-middle);
    border-radius: 2px;
    background-color: var(--color-white);
  }

  input[type='checkbox'] + .checkbox-indicator {
    position: absolute;
    left: -37px;
    width: 18px;
    height: 18px;
    border: 3px solid var(--color-white);
    border-radius: 4px;
  }

  input[type='checkbox']:disabled + .checkbox-indicator {
    border-color: #6a6a6a;
  }

  input[type='checkbox']:disabled + .checkbox-indicator::before,
  input[type='checkbox']:disabled + .checkbox-indicator::after {
    background-color: #6a6a6a;
  }
}

.filter-range {
  width: 317px;
  margin-left: 228px;
}

.filter-range .filter-title {
  margin-bottom: -13px;
}

.price-controls {
  font-size: 0;
  position: relative;
  height: 32px;
  margin-bottom: 20px;
  border: 2px solid var(--color-white);
  border-radius: 2px;
}

.price-controls::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 22px;
  transform: translate(-50%, -50%);
  background-color: var(--color-white);
}

.price-controls label {
  font-family: inherit;
  font-size: 14px;
  line-height: 21px;
  display: inline-block;
  vertical-align: middle;
  margin-top: 5px;
  cursor: pointer;
}

.price-controls label:last-child {
  margin-left: -10px;
}

.price-controls .min-price,
.price-controls .max-price {
  width: 90px;
  padding-left: 65px;
}

.price-controls input {
  font: inherit;
  width: 50px;
  margin: 0;
  color: inherit;
  border: none;
  background-color: none;
}

.range-controls {
  position: relative;
  margin-bottom: 32px;
}

.range-controls .scale {
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
}

.range-controls .bar {
  width: 80%;
  height: 2px;
  background-color: var(--color-white);
}

.range-toggle {
  position: absolute;
  top: -9px;
  width: 4px;
  height: 4px;
  cursor: pointer;
  border: 8px solid var(--color-white);
  border-radius: 50%;
  background-color: #ababab;
  box-shadow: 0 2px 1px 0 rgba(0, 1, 1, 0.2);
}

.range-toggle:hover {
  background-color: var(--color-blue-bold);
}

.range-toggle-min {
  left: 0;
}

.range-toggle-max {
  left: 80%;
}

.btn-transparent {
  font-family: inherit;
  font-size: 14px;
  line-height: 20px;
  display: block;
  margin: 0 154px;
  padding: 6px 34px;
  cursor: pointer;
  transform: translateX(-50%);
  text-transform: inherit;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  border-radius: 2px;
  background-color: transparent;
}

.btn-transparent:hover {
  color: var(--color-black);
  background-color: var(--color-white);
}
</style>
