<script>
  import Gallery from 'svelte-gallery'
  import ImageComponent from '../../components/GalleryImage.svelte'
  import LightBox from '../../components/LightBox.svelte'

  export let images

  const getImgArray = new Promise((resolve, reject) => {
    const imgArray = images.map((image, i) => {
      return {
        src: image.asset.url,
        width: image.asset.metadata.dimensions.width,
        height: image.asset.metadata.dimensions.height,
        imageIndex: i
      }
    })

    resolve(imgArray)
  })
</script>

{#await getImgArray}
  ...loading...
{:then galleryImages}
  <LightBox imgs={galleryImages} />

  <section>
    <Gallery images={galleryImages} gutter={5} imageComponent={ImageComponent} />
  </section>
{/await}

<style>
  section {
    background-color: var(--lightBase);
    padding: 5px 5px 5rem 5px;
  }
</style>
