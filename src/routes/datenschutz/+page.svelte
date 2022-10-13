<script>
  import {PortableText} from '@portabletext/svelte'
  import Heading from '../../components/Heading.svelte'
  import Section from '../../components/Section.svelte'
  import Image from '../../components/PortableText/Image.svelte'

  export let data
  let {text} = data.body
</script>

<Section style={'white'}>
  <h2>
    <Heading style={'h3 primary'} secondLine={'Datenschutz'} />
  </h2>

  <PortableText
    value={text[0].text}
    components={{
      types: {
        image: Image
      }
    }}
  />
</Section>

<style>
  :global(p) {
    line-height: 1.7;
  }
</style>
