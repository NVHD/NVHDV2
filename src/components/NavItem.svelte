<script>
  import Heuliecher from './icons/Heuliecher.svelte'

  export let link
  export let title
</script>

<a href={link}>
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
