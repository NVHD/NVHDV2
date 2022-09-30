<script>
  import {appStore} from './../stores.js'
  import Heuliecher from './icons/Heuliecher.svelte'

  export let link
  export let title
</script>

<a
  href={link}
  on:click={() => {
    setTimeout(() => {
      $appStore.isNavOpen = false
    }, 200)
  }}
>
  <Heuliecher fill={'#f0be28'} />
  <span> {title} </span>
</a>

<style>
  a {
    display: flex;
    align-items: center;
  }

  span {
    color: var(--secondary);
    text-transform: uppercase;
    margin-left: 0.5rem;
  }
</style>
