<script>
  import {appStore} from './../stores.js'

  export let src
  export let width
  export let height
  export let imageIndex
</script>

<img
  {width}
  {height}
  {src}
  alt="gallery img"
  on:click={() => {
    $appStore.isLightBoxOpen = true
    $appStore.galleryClickedImage = imageIndex
  }}
/>

<style>
  img {
    cursor: pointer;
    transition: transform 0.2s ease-out;
  }

  img:hover {
    transform: scale(1.01);
  }
</style>
