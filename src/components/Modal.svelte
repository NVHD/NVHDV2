<script>
  import {appStore} from '../stores.js'
  import {onMount} from 'svelte'
  import {fade, scale} from 'svelte/transition'
  import BtnClose from './BtnClose.svelte'
  import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock'

  export let backgroundImage = undefined
  export let name

  onMount(() => {
    $appStore[name] = true

    const overlay = document.querySelector('.modal')
    disableBodyScroll(overlay)

    return () => {
      enableBodyScroll(overlay)
    }
  })
</script>

<div
  class="backdrop"
  in:fade|local={{duration: 200}}
  out:fade|local={{delay: 200, duration: 200}}
  on:click|self={() => {
    $appStore[name] = false
  }}
>
  <div
    class="modal"
    style={backgroundImage
      ? `background-image:linear-gradient(to right bottom, rgb(15 38 30), rgb(93 166 123 / 38%)), url(${backgroundImage})`
      : ''}
  >
    <div
      in:scale|local={{delay: 400, duration: 200}}
      out:scale|local={{duration: 200}}
      class="content"
    >
      <slot />
    </div>
    <div class="btnRemove">
      <BtnClose
        on:click={() => {
          $appStore[name] = false
        }}
      />
    </div>
  </div>
</div>

<style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(12px) brightness(0.3);
    -webkit-backdrop-filter: blur(12px) brightness(0.3);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @supports not (backdrop-filter: blur(4px)) {
    .backdrop {
      background-color: var(--color-1);
    }
  }

  .modal {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    max-width: 80rem;
    padding: 3rem;
    overflow-y: auto;
    background-size: cover;
    z-index: 1001;
  }
  .content {
    grid-row: 1 / 2;
    grid-column: 1 /2;
  }

  .btnRemove {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    justify-self: end;
    margin: -2rem;
  }
  @media only screen and (max-width: 920px) {
    .btnRemove {
      position: absolute;
      top: 2rem;
      left: 2rem;
    }

    .modal {
      padding: 0;
      overflow-y: hidden;
    }
  }
</style>
