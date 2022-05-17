<script>
  import {PortableText} from '@portabletext/svelte'
  import Heading from '../components/Heading.svelte'
  import Section from '../components/Section.svelte'
  import Image from '../components/PortableText/Image.svelte'

  export let text

  console.log(text)
</script>

<Section style={'tertiary'}>
  <h2>
    <Heading style={'h3 secondary'} firstLine={'unsere'} secondLine={'Geschichte'} />
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
    color: var(--lightBase);
    line-height: 1.7;
  }

  :global(h3) {
    color: var(--secondary);
  }
</style>
