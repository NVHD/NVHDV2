<script>
  import Gallery from 'svelte-gallery'
  import ImageComponent from '../../components/LightBox.svelte'

  export let images
  console.log(images)

  const getImgArray = new Promise((resolve, reject) => {
    const imgArray = images.map((image) => {
      return {
        src: image.asset.url,
        width: image.asset.metadata.dimensions.width,
        height: image.asset.metadata.dimensions.height
      }
    })

    resolve(imgArray)
  })
</script>

{#await getImgArray}
  ...loading...
{:then galleryImages}
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
