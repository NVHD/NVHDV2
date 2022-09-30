<script>
  import {goto} from '$app/navigation'
  import Gallery from 'svelte-gallery'
  import BtnArrow from '../../../components/BtnArrow.svelte'
  import Heading from '../../../components/Heading.svelte'
  import ImageComponent from '../../../components/GalleryImage.svelte'
  import LightBox from '../../../components/LightBox.svelte'

  export let data

  let {images, title} = data.body

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

  function handleBackBtn() {
    goto(`/galerie`, {replaceState: true})
  }
</script>

{#await getImgArray}
  ...loading...
{:then galleryImages}
  <LightBox imgs={galleryImages} />

  <section>
    <div class="heading">
      <div class="btn">
        <BtnArrow direction={'left'} bg={true} on:click={() => handleBackBtn()} />
      </div>
      <h2><Heading firstLine={title} style={'h3'} /></h2>
    </div>

    <Gallery images={galleryImages} gutter={5} imageComponent={ImageComponent} />
  </section>
{/await}

<style>
  section {
    background-color: var(--lightBase);
    padding: 5px 5px 5rem 5px;
  }

  .heading {
    display: flex;
    align-items: center;
  }

  .btn {
    transform: translateX(-5px);
  }

  h2 {
    margin-left: 3rem;
  }
</style>
