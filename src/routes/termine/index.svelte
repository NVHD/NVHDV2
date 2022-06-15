<script>
  import Heading from '../../components/Heading.svelte'
  import Section from '../../components/Section.svelte'
  import TerminCard from '../../components/TerminCard.svelte'

  export let termine
</script>

<Section style={'secondary'}>
  <h2><Heading style={'h3'} firstLine={'unsere'} secondLine={'Termine'} /></h2>

  {#each termine as termin}
    <a href={`/termine/${termin.slug.current}`} class="termin" sveltekit:noscroll>
      <TerminCard title={termin.title} date={termin.date} dateText={termin.dateText} />
    </a>
  {/each}
</Section>

<style>
  .termin {
    margin: 0.5rem 0;
  }
</style>
