<script>
  import SanityImage from '../lib/SanityImage.svelte'

  export let figuren
</script>

{#each figuren as figur}
  <div class="figur">
    <div class="img">
      <SanityImage image={figur.bild} />
    </div>
    <h3>{figur.name}</h3>
    <p>{figur.description}</p>
  </div>
{/each}

<style>
  .figur {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .figur:last-of-type {
    padding-bottom: 8rem;
  }

  h3 {
    margin: 0;
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--primary);
    justify-self: center;
  }

  p {
    margin: auto;
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
