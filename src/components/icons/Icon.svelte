<script>
  export let width
  export let height
  export let shadow = true
  export let border = false
</script>

{#if shadow}
  <div class="icon">
    <slot />
  </div>
{:else}
  <slot />
{/if}

<style>
  .icon {
    filter: drop-shadow(var(--shadow-1));
  }
</style>
