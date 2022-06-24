<script>
  import FaceBookIcon from './icons/Facebook.svelte'
  import InstagramIcon from './icons/Instagram.svelte'
  import TwitterIcon from './icons/Twitter.svelte'
  import YoutubeIcon from './icons/Youtube.svelte'
</script>

<footer>
  <ul class="social">
    <li>
      <a href="https://www.facebook.com/heuliecher/">
        <FaceBookIcon fill={'#f0be28'} />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/heuliecher">
        <InstagramIcon fill={'#f0be28'} />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/heuliecher">
        <TwitterIcon fill={'#f0be28'} />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCkkbZhBC039H2zRYIszzSbw">
        <YoutubeIcon fill={'#f0be28'} />
      </a>
    </li>
  </ul>
  <ul class="legal">
    <li><a href="/datenschutz">Datenschutz</a></li>
    <li><a href="/impressum">Impressum</a></li>
  </ul>
</footer>

<style>
  footer {
    background-color: var(--tertiary);
    padding: 3rem 1rem;
    border-top: 5px solid var(--secondary);
    box-shadow: 0 0 10px rgb(0 0 0 / 21%);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    padding: 0 1rem;
  }

  a {
    color: var(--secondary);
    font-size: 0.8rem;
  }

  .social {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    width: 100%;
    margin-top: 2rem;
  }

  .legal {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }
</style>
