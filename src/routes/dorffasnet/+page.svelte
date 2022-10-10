<script>
  import Heading from '../../components/Heading.svelte'
  import Section from '../../components/Section.svelte'
  import SanityImage from '$lib/SanityImage.svelte'

  export let data
  let figuren = data.body.figuren
</script>

<Section style={'white'}>
  <h2>
    <Heading style={'h3'} firstLine={'die'} secondLine={'Dorffasnet'} />
  </h2>

  {#each figuren as figur}
    <div class="img">
      <SanityImage image={figur.bild} />
    </div>
    <h3>{figur.name}</h3>
    <p>{figur.description}</p>
  {/each}
</Section>

<style>
  h3 {
    margin: 0;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--primary);
    justify-self: center;
  }

  .img {
    justify-self: center;
    padding: 8rem 0 1rem 0;
  }

  p:last-of-type {
    padding-bottom: 8rem;
  }

  @media only screen and (max-width: 720px) {
    .img {
      justify-self: center;
      padding: 3rem 0 0.5rem 0;
    }

    h3 {
      font-size: 2.5rem;
    }

    p:last-of-type {
      padding-bottom: 4rem;
    }
  }
</style>
