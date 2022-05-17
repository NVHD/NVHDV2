<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header blogTitle={'SvelteKit x Sanity Blog'} />

<main>
  <slot />
</main>

<Footer />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  :global(body) {
    font-family: var(--body-font);
    margin: 0;
    padding: 0;
    max-width: unset;
  }

  :global(body) {
    --green: hsl(177, 96%, 17%);
    --yellow: hsl(45, 87%, 55%);
    --paleRed: hsl(5, 38%, 47%);
    --red: hsl(0, 75%, 38%);
    --cta-10: hsl(0, 75%, 48%);
    --black: hsl(0, 0%, 10%);
    --black-10: hsl(0, 0%, 10%);
    --black-20: hsl(0, 0%, 20%);
    --black-30: hsl(0, 0%, 30%);
    --black-40: hsl(0, 0%, 40%);
    --black-50: hsl(0, 0%, 50%);
    --white-60: hsl(0, 0%, 60%);
    --white-70: hsl(0, 0%, 70%);
    --white-80: hsl(0, 0%, 80%);
    --white-90: hsl(0, 0%, 90%);
    --white-95: hsl(0, 0%, 95%);
    --white: hsl(0, 0%, 100%);
    --base-font: 'Noto Sans', sans-serif;
    --bodyFontSize: 18px;
    --baseFontSize: 1rem;
    --smallFontSize: 0.8rem;
    --smallestFontSize: 0.62rem;
    --heading-1: 1.953rem;
    --heading-2: 4.25rem;
    --heading-2-secondary: 9.6rem;
    --heading-3: 4rem;
    --heading-3-secondary: 9.4rem;
    --heading-4: var(--baseFontSize);
    --heading-5: var(--smallFontSize);
    --heading-6: 0.64rem;
    --heading-7: var(--smallestFontSize);
  }

  :global(body) {
    --primary: #025753;
    --secondary: #f0be2a;
    --tertiary: #a5534b;
    --cta: #a81918;
    --ctaHighlight: #c61d1c;
    --lightBase: var(--white-90)
    --darkBase: var(--black-20)
    --heading-font: var(--base-font);
    --body-font: var(--base-font);
  }

  :global(p) {
    color: var(--black-20);
  }

  :global(figcaption) {
    color: var(--black-40);
  }

  :global(a) {
    color: #1a4d9e;
  }
  :global(a:hover) {
    color: #1e61cd;
    border-bottom: none;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: var(--heading-font);
  }
</style>
