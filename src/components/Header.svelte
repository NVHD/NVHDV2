<script>
  import BurgerButton from './BurgerButton.svelte'
  import SanityImage from './../lib/SanityImage.svelte'
  import NavItem from './NavItem.svelte'

  export let logo

  let navStyle = ''
  let ulStyle = ''
  let navBtnClicked = false

  const handleNavBtn = () => {
    if (!navBtnClicked) {
      navStyle = 'full'
    } else {
      navStyle = ''
    }

    navBtnClicked = !navBtnClicked
  }
</script>

<header>
  <a href="/">
    <SanityImage image={logo} />
  </a>

  <nav class={navStyle}>
    <ul class={ulStyle}>
      <li>
        <NavItem link={'/'} title={'Startseite'} />
      </li>
      <li>
        <NavItem link={'/figuren'} title={'Figuren'} />
      </li>
      <li>
        <NavItem link={'/dorffasnet'} title={'Dorffasnet'} />
      </li>
      <li>
        <NavItem link={'/termine'} title={'Termine'} />
      </li>
      <li>
        <NavItem link={'/chronik'} title={'Chronik'} />
      </li>
      <li>
        <NavItem link={'/galerie'} title={'Galerie'} />
      </li>
      <li>
        <NavItem link={'/vorstand'} title={'Vorstand'} />
      </li>
      <li>
        <NavItem link={'/kontakt'} title={'Kontakt'} />
      </li>
    </ul>
  </nav>
  <div class="btnNav">
    <BurgerButton on:click={handleNavBtn} />
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    margin: 0;
    padding: 0.5rem 1rem;
    display: grid;
    grid-template-columns: 7rem 1fr max-content;
    column-gap: 4rem;
    align-items: center;
    background-color: var(--primary);
    box-shadow: 5px 5px 10px hsla(0, 0%, 0%, 0.15);
    z-index: 5000;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;
    padding: 0 1rem;
  }

  .btnNav {
    display: none;
    z-index: 1001;
    justify-self: end;
  }

  .full {
    z-index: 1000;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (max-width: 1440px) {
    .btnNav {
      display: block;
    }

    header {
      column-gap: 0;
    }

    nav {
      display: none;
    }

    ul {
      flex-direction: column;
      align-items: flex-start;
    }

    li {
      padding: 0.5rem 1rem;
    }
  }
</style>
