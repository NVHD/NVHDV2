<script context="module">
  export const load = async ({url, fetch}) => {
    const res = await fetch('/logo.json')
    const data = res.json()

    return {
      props: {
        url,
        data
      }
    }
  }
</script>

<script>
  import PageTransition from '../components/PageTransition.svelte'
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'

  export let url
  export let data
</script>

{#await data}
  <p>waiting.</p>
{:then data}
  <Header logo={data.data.logo} />
{/await}
<PageTransition {url}>
  <main>
    <slot />
  </main>
</PageTransition>

<Footer />

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  :global(:root) {
    font-size: 100%;
  }

  :global(body) {
    font-family: var(--body-font);
    margin: 0;
    padding: 0;
    max-width: unset;
  }

  :global(body) {
    --green-hs: 177, 95%;
    --green-l: 17%;
    --green-base: var(--green-hs), var(--green-l);
    --green: hsl(var(--green-hs), var(--green-l));
    --green-d10-base: var(--green-hs), calc(var(--green-l) - 10%);
    --green-d10: hsl(var(--green-d10-base));
    --green-d10-a70: hsla(var(--green-d10-base), 0.7);
    --green-60: hsl(var(--green-hs), calc(var(--green-l) + 60%));
    --green-a70: hsla(var(--green-base), 0.7);
    --green-a75: hsla(var(--green-base), 0.75);
    --green-a80: hsla(var(--green-base), 0.8);
    --yellow: hsl(45, 87%, 55%);
    --paleRed: hsl(5, 38%, 47%);
    --red: hsl(0, 75%, 38%);
    --red-10: hsl(0, 75%, 48%);
    --black: hsl(0, 0%, 10%);
    --black-10: hsl(0, 0%, 10%);
    --black-20: hsl(0, 0%, 20%);
    --black-30: hsl(0, 0%, 30%);
    --black-40: hsl(0, 0%, 40%);
    --black-50: hsl(0, 0%, 50%);
    --white-60: hsl(0, 0%, 60%);
    --white-70: hsl(0, 0%, 70%);
    --white-80: hsl(0, 0%, 80%);
    --white-90-base: 0, 0%, 90%;
    --white-90: hsl(var(--white-90-base));
    --white-90-a98: hsla(var(--white-90-base), 0.98);
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
    --primary: var(--green);
    --primary-transparent: var(--green-a75);
    --primary-dark: var(--green-d10);
    --primary-dark-transparent: var(--green-d10-a70);
    --secondary: var(--yellow);
    --tertiary: var(--paleRed);
    --cta: var(--red);
    --ctaHighlight: var(--red-10);
    --lightBase: var(--white-90);
    --lightBase-transparent: var(--white-90-a98);
    --darkBase: var(--black-20);
    --heading-font: var(--base-font);
    --body-font: var(--base-font);
  }

  :global(p) {
    color: var(--darkBase);
    margin: 0;
  }

  :global(figcaption) {
    color: var(--black-40);
  }

  :global(a) {
    color: var(--white-80);
    text-decoration: none;
  }
  :global(a:hover) {
    color: var(--white-80);
  }

  :global(a:visited) {
    color: var(--white-80);
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: var(--heading-font);
  }

  :global(h3) {
    color: var(--primary);
  }
</style>
