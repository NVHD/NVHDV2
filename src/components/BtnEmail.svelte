<script>
  import {fly, fade} from 'svelte/transition'

  export let email

  let isCoppyed = false
  let isCoppyError = false

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      isCoppyed = true

      setTimeout(() => {
        isCoppyed = false
      }, 1000)
    } catch (e) {
      isCoppyError = true
    }
  }
</script>

<button on:click={copyToClipboard}><p>{email}</p></button>

{#if isCoppyed}
  <div class="isCopyed" transition:fly|local={{y: -20, duration: 200}}>
    <p>E-Mail kopiert <span role="img" aria-label="Daumen hoch">👍</span></p>
  </div>
{/if}

<style>
  button {
    border: none;
    font-size: inherit;
    font-family: inherit;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  p {
    text-decoration: underline;
    color: var(--primary);
  }

  .isCopyed {
    position: absolute;
    background-color: var(--primary-transparent);
    padding: 1rem;
    backdrop-filter: blur(5px);
  }

  .isCopyed p {
    text-decoration: none;
    color: var(--lightBase);
    font-size: 1.1rem;
  }
</style>
