<script>
  export let link
</script>

<a href={link} data-sveltekit-noscroll><button><slot /> </button></a>

<style>
  a {
    margin: 4rem auto 0;
  }
  button {
    display: inline-block;
    max-width: 35rem;
    border: none;
    padding: 1.25rem 4.5rem;
    background: var(--cta);
    cursor: pointer;
    text-align: center;
    color: var(--white-80);
    font-family: var(--base-font);
    font-weight: 700;
    font-size: var(--ctaFontSize);
    text-transform: uppercase;
    border-radius: 10px;
    box-shadow: 0 20px 40px rgb(0 0 0 / 15%);
    transition: background 0.25s ease-in-out, transform 0.15s ease;
  }

  button:hover {
    background: var(--ctaHighlight);
  }
</style>
