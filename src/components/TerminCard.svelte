<script>
  import {getDate, getTime} from '../lib/dateTime'

  import ArrowWideRight from './icons/ArrowWideRight.svelte'

  export let title
  export let date
  export let dateText = null

  function handleDate() {
    if (dateText) {
      return dateText
    }

    // The date string includes a T if the date has a time value
    if (!date.includes('T')) {
      return getDate(new Date(date))
    }

    return `${getDate(new Date(date))} - ${getTime(new Date(date))}`
  }
</script>

<div class="card">
  <div class="info">
    <p>
      {handleDate()}
    </p>
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
    background-color: var(--primary);
    margin: 0;
    padding: 1rem;
    cursor: pointer;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease-out;
  }

  .card:hover {
    transform: translate3d(1px, -1px, 0);
    background-color: var(--primary-transparent);
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
