<script>
  export let style
  export let firstLine = undefined
  export let secondLine = undefined
</script>

{#if firstLine}
  <span class="firstLine-{style}">{firstLine}<br /> </span>
{/if}
{#if secondLine}
  <span class="secondLine-{style}">{secondLine}</span>
{/if}

<style>
  .firstLine-h2 {
    font-size: var(--heading-2);
    color: var(--secondary);
    margin-bottom: 5rem;
  }

  .secondLine-h2 {
    font-size: var(--heading-2-secondary);
    font-style: italic;
    font-weight: 400;
    color: var(--primary);
    margin-top: -1rem;
  }

  .firstLine-h3 {
    font-size: var(--heading-3);
    font-family: var(--base-font);
    font-weight: 700;
    line-height: 0.9;
    color: var(--primary);
    margin-bottom: 5rem;
  }

  .secondLine-h3 {
    font-size: var(--heading-3-secondary);
    font-family: var(--base-font);
    font-weight: 700;
    line-height: 0.9;
    color: var(--primary);
    margin-bottom: 5rem;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .secondary {
    color: var(--secondary);
  }
</style>
