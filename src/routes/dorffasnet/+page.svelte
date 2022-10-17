<script>
  import Figuren from './../../components/Figuren.svelte'
  import Heading from '../../components/Heading.svelte'
  import Section from '../../components/Section.svelte'

  export let data
  let figuren = data.body.figuren
</script>

<Section style={'white'} gap={3}>
  <h2>
    <Heading style={'h3'} firstLine={'die'} secondLine={'Dorffasnet'} />
  </h2>

  <Figuren {figuren} />
</Section>
