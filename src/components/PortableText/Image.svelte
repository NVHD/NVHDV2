<script>
  import SanityImage from '$lib/SanityImage.svelte'

  // Property custom blocks receive from @portabletext/svelte when redered
  export let portableText
</script>

<SanityImage image={portableText.value} />
