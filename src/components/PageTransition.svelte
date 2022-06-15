<script>
  // https://dev.to/evanwinter/page-transitions-with-svelte-kit-35o6
  // https://www.reddit.com/r/sveltejs/comments/sjg3av/page_transitions/

  import {fade} from 'svelte/transition'
  export let url = ''
  const pageTransitionDuration = 200
</script>

{#key url}
  <div
    in:fade|local={{duration: pageTransitionDuration, delay: pageTransitionDuration}}
    out:fade|local={{duration: pageTransitionDuration}}
    on:outroend={() => {
      window.scrollTo(0, 0)
    }}
  >
    <slot />
  </div>
{/key}
