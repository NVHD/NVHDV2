<script>
  import Section from '../components/Section.svelte'
  import BtnCta from '../components/BtnCta.svelte'
  import Heading from '../components/Heading.svelte'
  import ImageComp from '../components/ImageComp.svelte'

  export let figuren
</script>

<svelte:head>
  <title>Wilkommen | Narrenverein Heulicher | Heudorf im Hegau</title>
</svelte:head>

<Section style={'white'}>
  <Section>
    <p>Brauchtum in seiner schönsten Form erleben</p>

    <h2>
      <Heading style={'h2 uppercase'} firstLine={'Heu !'} secondLine={'Liecher !'} />
    </h2>
  </Section>

  <Section>
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
</style>
