<script>
  import SanityImage from '$lib/SanityImage.svelte'

  export let data
</script>

<div class="imageComp">
  {#each data[0].figuren as figur}
    <figure>
      <SanityImage image={figur.bild} />
      <figcaption>{figur.name}</figcaption>
    </figure>
  {/each}
</div>

<style>
  .imageComp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: end;
  }

  figure:first-child {
    transform: translateX(7rem);
  }

  figure:last-child {
    transform: translateX(-7rem);
  }

  figure {
    border: none;
    padding: 0;
  }
</style>
