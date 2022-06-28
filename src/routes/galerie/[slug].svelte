<script>
  import {onMount} from 'svelte'
  import BiggerPicture from 'bigger-picture/src/bigger-picture.js'
  import styles from 'bigger-picture/dist/bigger-picture.css'
  import Section from '../../components/Section.svelte'

  export let images
  console.log(images)

  let bp

  onMount(() => {
    // initialize BiggerPicture
    bp = BiggerPicture({
      target: document.body
    })

    // grab image links
    let imageLinks = document.querySelectorAll('#images > a')

    // add click listener on links to open BiggerPicture
    for (let i = 0; i < imageLinks.length; i++) {
      imageLinks[i].addEventListener('click', openGallery)
    }

    // function to open BiggerPicture
    function openGallery(e) {
      e.preventDefault()
      bp.open({
        items: imageLinks,
        el: e.currentTarget
      })
    }
  })
</script>

<div id="images">
  {#each images as { asset }}
    <a
      href={asset.url}
      data-img={asset.url}
      data-thumb={`${asset.url}?w=400`}
      data-alt="Example"
      data-height={asset.metadata.dimensions.height}
      data-width={asset.metadata.dimensions.width}
    >
      <img src={`${asset.url}?w=400`} alt="Example" />
    </a>
  {/each}
</div>

<style>
  a {
    display: inline-block;
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.95;
  }

  #images {
    width: 100%;
    max-width: 1200px;
    display: table;
    margin: 0 auto;
  }

  img {
    margin: 0;
    width: 100%;
    vertical-align: bottom;
  }
</style>
