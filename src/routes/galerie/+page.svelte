<script>
  import Section from './../../components/Section.svelte'
  import SanityImage from '../../lib/SanityImage.svelte'
  import Heading from '../../components/Heading.svelte'

  export let data
  let gallery = data.body.gallery
</script>

<Section style={'white'}>
  <h2>
    <Heading style={'h3'} firstLine={'die'} secondLine={'Galerie'} />
  </h2>

  <div class="gallery">
    {#each gallery as cover}
      <a href="galerie/{cover.slug.current}" class="cover">
        <h3 class="title">{cover.title}</h3>
        <div class="img">
          <SanityImage image={cover.cover} />
        </div>
      </a>
    {/each}
  </div>
</Section>

<style>
  .gallery {
    display: grid;
    grid-template-columns: 1fr;
  }

  .cover {
    margin: 1rem 0;
    display: grid;
    align-items: center;
    justify-items: center;
    border: 0.5rem solid var(--secondary);
    background-color: hsla(0, 0%, 0%, 0.5);
    transition: all 0.2s ease-out;
  }

  .cover:hover .img {
    filter: blur(3px) saturate(0.8) brightness(0.4);
  }

  .cover:hover .title {
    transform: scale(1.05);
  }

  .img,
  .title {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  .title {
    z-index: 2;
    font-size: 7vw;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 2px;
    color: var(--lightBase);
    transition: all 0.2s ease-out;
  }

  .img {
    filter: blur(3px) saturate(0.5) brightness(0.5);
    transition: all 0.2s ease-out;
  }

  @media only screen and (min-width: 900px) {
    .title {
      font-size: 3vw;
    }
  }
</style>
