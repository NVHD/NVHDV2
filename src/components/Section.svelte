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
    max-width: 70ch;
    margin: auto;
  }

  .primary {
    background-color: var(--primary);
  }

  .secondary {
    background-color: var(--secondary);
  }

  .white {
    background-color: var(--white-95);
  }
</style>
