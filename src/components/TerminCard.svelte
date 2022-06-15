<script>
  import {getDate, getTime} from '../lib/dateTime'

  import ArrowWideRight from './icons/ArrowWideRight.svelte'

  export let title
  export let date
  export let dateText = null
</script>

<div class="card">
  <div class="info">
    <p>{dateText ? dateText : `${getDate(new Date(date))} - ${getTime(new Date(date))}`}</p>
    <h3>{title}</h3>
  </div>
  <div class="icon">
    <ArrowWideRight />
  </div>
</div>

<style>
  .card {
    display: grid;
    grid-template-columns: 1fr min-content;
    align-items: center;
    background-color: var(--primary-transparent);
    margin: 0;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.1s ease-out;
  }

  .card:hover {
    background-color: var(--primary);
  }

  .icon {
    display: flex;
  }

  p {
    color: var(--lightBase);
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }

  h3 {
    color: var(--lightBase-transparent);
    font-size: 1.2rem;
    font-weight: 100;
    margin: 0;
    padding: 0;
  }
</style>
