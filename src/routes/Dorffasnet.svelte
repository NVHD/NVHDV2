<script>
  import Heading from '../components/Heading.svelte'
  import Section from '../components/Section.svelte'
  import SanityImage from '$lib/SanityImage.svelte'

  export let figuren

  console.log(figuren)
</script>

<Section style={'white'}>
  <h2>
    <Heading style={'h3'} firstLine={'die'} secondLine={'Dorffasnet'} />
  </h2>

  {#each figuren as figur}
    <SanityImage image={figur.bild} />
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

  :global(img) {
    justify-self: center;
  }
</style>
