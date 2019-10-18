<template>
  <div class="page-wrap">
    <h1 class="page-wrap__title">Фото и видео</h1>
    <div class="page-wrap__content">
      <h2>Фотографии</h2>
      <ul class="photos">
        <li class="photo">
          <img src="./img/1.jpg" class="photo__img" alt="photo" />
        </li>
        <li class="photo">
          <img src="./img/2.jpg" class="photo__img" alt="photo" />
        </li>
        <li class="photo">
          <img src="./img/3.jpg" class="photo__img" alt="photo" />
        </li>
        <li class="photo">
          <img src="./img/4.jpg" class="photo__img" alt="photo" />
        </li>
        <li class="photo">
          <img src="./img/5.jpg" class="photo__img" alt="photo" />
        </li>
        <li class="photo">
          <img src="./img/6.jpg" class="photo__img" alt="photo" />
        </li>
        <li class="photo">
          <img src="./img/7.jpg" class="photo__img" alt="photo" />
        </li>
        <li class="photo">
          <img src="./img/3.jpg" class="photo__img" alt="photo" />
        </li>
      </ul>

      <h2>Видео</h2>
      <div class="video-wrap">
        <iframe
          src="https://www.youtube.com/embed/gA6pxmdMiOQ"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaPage'
}
</script>

<style lang="scss" scoped>
.photos {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  .photo {
    width: 100%;
    break-inside: avoid;

    .photo__img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }
}

.video-wrap {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;

  iframe {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
