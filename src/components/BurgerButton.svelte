<script>
  export let btnClicked = false
</script>

<button on:click><span class={btnClicked ? 'x' : ''} /></button>

<style>
  button {
    width: 4rem;
    height: 4rem;
    z-index: 2000;
    border: 0;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    text-align: center;
    transform: translateY(-3px);
  }

  span {
    position: relative;
    display: inline-block;
    border-bottom: 3px solid var(--lightBase);
    width: 4rem;
    transition: all 0.2s ease-in-out;
  }

  span::before {
    content: '';
    display: block;
    position: absolute;
    top: -1.1rem;
    width: 4rem;
    border-bottom: 3px solid var(--lightBase);
    margin-bottom: 7px;
    transition: all 0.2s ease-in-out;
  }

  span::after {
    content: '';
    display: block;
    position: absolute;
    top: 1.1rem;
    width: 4rem;
    border-bottom: 3px solid var(--lightBase);
    margin-bottom: 7px;
    transition: all 0.2s ease-in-out;
  }

  .x {
    border-bottom: 3px solid transparent;
  }

  .x::before {
    top: 0;
    transform: rotate(45deg);
    transform-origin: center;
    border-bottom: 3px solid var(--secondary);
  }

  .x::after {
    top: 0;
    transform: rotate(-45deg);
    transform-origin: center;
    border-bottom: 3px solid var(--secondary);
  }
</style>
