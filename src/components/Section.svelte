<script>
  export let style
</script>

<section class={style}>
  <div class="content">
    <slot />
  </div>
</section>

<style>
  section {
    padding: 2rem 0;
  }

  .content {
    display: grid;
    max-width: var(--content-width);
    width: 100%;
    margin: auto;
    padding: 0 1rem;
  }

  .primary {
    background-color: var(--primary);
  }

  .primary-dark {
    background-color: var(--primary-dark);
  }

  .secondary {
    background-color: var(--secondary);
  }

  .tertiary {
    background-color: var(--tertiary);
  }

  .white {
    background-color: var(--white-95);
  }
</style>
