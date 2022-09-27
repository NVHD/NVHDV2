<script>
  import {createEventDispatcher} from 'svelte'
  import ArrowIcon from './Icons/Arrow.svelte'

  const dispatch = createEventDispatcher()

  export let direction
  export let bg
</script>

<button
  class={`${direction} ${bg ? 'background' : ''}`}
  on:click={() => {
    dispatch('click')
  }}><ArrowIcon width={25} height={30} shadow={false} fill={'#f0be28'} /></button
>

<style>
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .left {
    transform: rotate(90deg);
  }

  .right {
    transform: rotate(270deg);
  }

  .background {
    background-color: var(--primary);
    width: 5rem;
    height: 5rem;
  }
</style>
