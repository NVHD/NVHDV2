<script>
  import {onMount} from 'svelte'
  import {fly} from 'svelte/transition'
  import {quintOut} from 'svelte/easing'
  import {appStore} from '../stores'
  import Modal from './Modal.svelte'
  import BtnArrow from './BtnArrow.svelte'

  export let imgs = []

  onMount(() => {
    window.addEventListener('keydown', handleKeyPresses)

    document.addEventListener('touchmove', (e) => {
      e.preventDefault()
    })

    document.addEventListener('touchstart', (e) => {
      touchstartX = e.changedTouches[0].screenX
    })

    document.addEventListener('touchend', (e) => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    })

    return () => {
      $appStore.isLightBoxOpen = false
    }
  })

  const slideLeft = 500
  const slideRight = -500
  let touchstartX = 0
  let touchendX = 0
  let isLeftBtnClick

  // https://stackoverflow.com/a/56663695/13267067
  function checkDirection() {
    // swipe left
    if (touchendX < touchstartX) {
      switchImage('right')
    }
    // swipe right
    if (touchendX > touchstartX) {
      switchImage('left')
    }
  }

  function handleKeyPresses(e) {
    switch (e.code) {
      case 'ArrowRight':
      case 'KeyD':
        switchImage('right')
        break

      case 'ArrowLeft':
      case 'KeyA':
        switchImage('left')
        break

      case 'Escape':
        $appStore.isLightBoxOpen = false
        break
    }
  }

  function switchImage(direction) {
    if (direction === 'left') {
      isLeftBtnClick = true
      if ($appStore.galleryClickedImage === 0) {
        $appStore.galleryClickedImage = imgs.length - 1
      } else {
        $appStore.galleryClickedImage--
      }
    } else if (direction === 'right') {
      isLeftBtnClick = false
      if ($appStore.galleryClickedImage === imgs.length - 1) {
        $appStore.galleryClickedImage = 0
      } else {
        $appStore.galleryClickedImage++
      }
    }
  }
</script>

{#if $appStore.isLightBoxOpen}
  <Modal name={'isLightBoxOpen'}>
    <div class="lightBox">
      <div class="btn">
        <BtnArrow
          direction="left"
          on:click={() => {
            switchImage('left')
          }}
        />
      </div>
      {#key $appStore.galleryClickedImage}
        <img
          in:fly={{
            duration: 500,
            x: isLeftBtnClick ? slideRight : slideLeft,
            easing: quintOut
          }}
          out:fly|local={{
            duration: 500,
            x: isLeftBtnClick ? slideLeft : slideRight,
            easing: quintOut
          }}
          class="lightBoxImg"
          width={imgs[$appStore.galleryClickedImage].width}
          height={imgs[$appStore.galleryClickedImage].height}
          src={imgs[$appStore.galleryClickedImage].src}
          alt={`Productbild-${$appStore.galleryClickedImage}`}
        />
      {/key}
      <div class="btn">
        <BtnArrow
          direction="right"
          on:click={() => {
            switchImage('right')
          }}
        />
      </div>
    </div>
  </Modal>
{/if}

<style>
  .lightBox {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    grid-template-rows: 1fr;
    align-items: center;
    overflow: hidden;
  }

  .lightBoxImg {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
    padding: 2rem;
    pointer-events: none;
  }

  @media only screen and (max-width: 920px) {
    .lightBoxImg {
      max-height: unset;
      padding: 0;
      margin: 0;
      height: 100vh;
      width: 100vw;
      pointer-events: none;
    }

    .btn {
      display: none;
    }
  }
</style>
