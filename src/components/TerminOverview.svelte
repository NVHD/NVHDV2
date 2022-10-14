<script>
  import {formatTimeString, getDate, getTime, getWeekDay} from '$lib/dateTime'
  import ArrowLeft from './icons/ArrowLeft.svelte'
  import ArrowRight from './icons/ArrowRight.svelte'
  import Calendar from './icons/Calendar.svelte'
  import Clock from './icons/Clock.svelte'
  import Location from './icons/Location.svelte'

  export let termin
</script>

<ul>
  <li>
    <div class="item">
      <div class="icon">
        <Calendar title={'Datum'} />
      </div>
      <p>
        {termin.dateText ||
          `${getWeekDay(new Date(termin.date))}, ${getDate(new Date(termin.date))}`}
      </p>
    </div>
  </li>
  {#if !termin.dateText && termin.date.includes('T')}
    <li>
      <div class="item">
        <div class="icon">
          <Clock title={'Treffpunkt'} />
        </div>
        <p>{getTime(termin.date)}</p>
      </div>
    </li>
  {/if}
  {#if termin.startTime}
    <li>
      <div class="item">
        <div class="icon">
          <ArrowRight title={'Abfahrt'} />
        </div>
        <p>{formatTimeString(termin.startTime)}</p>
      </div>
    </li>
  {/if}
  {#if termin.endTime}
    <li>
      <div class="item">
        <div class="icon">
          <ArrowLeft title={'Rückfahrt'} />
        </div>
        <p>{formatTimeString(termin.endTime)}</p>
      </div>
    </li>
  {/if}
  {#if termin.locationName}
    <li>
      <div class="item">
        <div class="icon">
          <Location title={'Veranstaltungsort'} />
        </div>
        <p>{termin.locationName}</p>
      </div>
    </li>
  {/if}
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
    max-width: 90ch;
  }

  li {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }

  .item {
    display: flex;
    align-items: center;
    padding: 0.2rem 0;
  }

  .item .icon {
    margin-right: 1rem;
    display: flex;
  }

  p {
    color: var(--lightBase);
  }
</style>
