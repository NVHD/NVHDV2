<script>
  import {createEventDispatcher} from 'svelte'
  import CrossIcon from './icons/Cross.svelte'

  const dispatch = createEventDispatcher()
</script>

<button
  class="reloadBtn"
  on:click={() => {
    dispatch('click')
  }}
>
  <div class="icon">
    <CrossIcon width={20} height={20} fill={'#f0be28'} />
  </div>
</button>

<style>
  .reloadBtn {
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    border: none;
    background-color: var(--color-3);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .reloadBtn:hover,
  .reloadBtn:focus {
    transform: translateY(-0.2rem);
    filter: drop-shadow(var(--shadow-1--color1));
  }

  .icon {
    position: absolute;
    top: 53%;
    left: 51%;
    transform: translate(-50%, -50%);
  }
</style>
