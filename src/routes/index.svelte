<script>
  import Section from '../components/Section.svelte'
  import BtnCta from '../components/BtnCta.svelte'
  import Heading from '../components/Heading.svelte'
  import ImageComp from '../components/ImageComp.svelte'
  import TerminCard from '../components/TerminCard.svelte'

  export let data
  let {figuren, termine} = data
</script>

<svelte:head>
  <title>Wilkommen | Narrenverein Heulicher | Heudorf im Hegau</title>
</svelte:head>

<Section style={'white'}>
  <Section style={'white'}>
    <p>Brauchtum in seiner schönsten Form erleben</p>

    <h2>
      <Heading style={'h2 uppercase'} firstLine={'Heu !'} secondLine={'Liecher !'} />
    </h2>
  </Section>

  <Section style={'white'}>
    <h3>
      <Heading style={'h3'} firstLine={'unser'} secondLine={'Verein'} />
    </h3>

    <ImageComp data={figuren} />

    <BtnCta link="/figuren">Mehr erfahren</BtnCta>
  </Section>
</Section>

<Section style={'secondary'}>
  <h3>
    <Heading style={'h3'} firstLine={'unsere'} secondLine={'Termine'} />
  </h3>

  {#each termine as termin}
    <a href={`/termine/${termin.slug.current}`} class="termin" sveltekit:noscroll>
      <TerminCard title={termin.title} date={termin.date} dateText={termin.dateText} />
    </a>
  {/each}

  <BtnCta link="/termine">alle Termine</BtnCta>
</Section>

<Section style={'primary'}>
  <h3>
    <Heading style={'h3 secondary'} firstLine={'Mit'} secondLine={'Machen'} />
  </h3>

  <p style={`color: var(--secondary)`}>
    Du hast lust mit uns um die Häuser zu ziehen oder wolltest schon immer mal wissen wie es unter
    einer Maske aussieht?
  </p>

  <BtnCta link="/kontakt">schreib uns</BtnCta>
</Section>

<style>
  .termin {
    margin: 0.5rem 0;
  }
</style>
