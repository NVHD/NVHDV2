<script>
  import {fly} from 'svelte/transition'
  import {quintOut} from 'svelte/easing'
  import SanityImage from '$lib/SanityImage.svelte'
  import {formatTimeString, getDate, getTime, getWeekDay} from '$lib/dateTime'
  import ArrowWideRight from './icons/ArrowWideRight.svelte'

  export let isIntersecting
  export let termin

  let onlyTitle = false
</script>

<button class={isIntersecting ? 'back' : 'back fixed'}>
  <a href="/termine" data-sveltekit-noscroll>
    <div class="icon"><ArrowWideRight /></div>

    {#if !isIntersecting && !onlyTitle}
      <div
        in:fly|local={{duration: 200, y: 50, opacity: 0.5, easing: quintOut}}
        out:fly|local={{duration: 200, y: 50, opacity: 0.5, easing: quintOut}}
        on:outroend={() => {
          onlyTitle = true
        }}
        class="info"
      >
        <h2>
          {termin.title}
        </h2>
        <p>
          {termin.dateText || getDate(new Date(termin.date))}
        </p>
      </div>
    {:else if onlyTitle && isIntersecting}
      <div
        in:fly|local={{duration: 200, y: 50, opacity: 0.5, easing: quintOut}}
        out:fly|local={{duration: 200, y: 50, opacity: 0.5, easing: quintOut}}
        on:outroend={() => {
          onlyTitle = false
        }}
        class="info"
      >
        <h2>{termin.title}</h2>
      </div>
    {/if}
  </a>
  {#if termin.image}
    <div class="img">
      <SanityImage image={termin.image} />
    </div>
  {/if}
</button>

<style>
  button {
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
  }

  a {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    column-gap: 2rem;
    margin: auto;
    padding: 0 1rem;
    max-width: var(--content-width);
  }

  p {
    color: var(--lightBase);
    text-align: left;
    font-family: var(--base-font);
    font-size: 1.2rem;
  }

  h2 {
    color: var(--lightBase-transparent);
    font-size: 1.2rem;
    font-weight: 100;
    text-align: left;
    margin: 0;
    padding: 0;
    z-index: 2;
  }

  .back {
    position: sticky;
    width: 100%;
    height: 7rem;
    backdrop-filter: blur(10px);
    background-color: var(--primary-dark-transparent);
    box-shadow: 0px -3px 5px #00000042;
    z-index: 200;
    overflow: hidden;
    transition: all 0.2s;
  }

  .fixed {
    position: sticky;
    bottom: 0;
  }

  .back .icon {
    transform: rotate(180deg);
    z-index: 2;
  }

  .back .img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .back .img:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(
      95deg,
      rgb(2 87 83) 0%,
      rgba(2, 87, 83, 0.8) 70%,
      rgba(3, 111, 106, 0.3)
    );
    backdrop-filter: blur(1px) grayscale(1);
  }

  .info {
    z-index: 2;
  }
</style>
