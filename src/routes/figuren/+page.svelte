<script>
  import Heading from '../../components/Heading.svelte'
  import Section from '../../components/Section.svelte'
  import Figuren from '../../components/Figuren.svelte'

  export let data
  let figuren = data.body.figuren
</script>

<Section style={'white'} gap={3}>
  <h2>
    <Heading style={'h3'} firstLine={'unsere'} secondLine={'Figuren'} />
  </h2>

  <Figuren {figuren} />
</Section>
