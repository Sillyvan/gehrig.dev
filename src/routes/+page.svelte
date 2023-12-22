<script>
  import Titel from '../components/Titel.svelte';
  import About from '../components/About.svelte';
  import Contact from '../components/Contact.svelte';
  import './styles.css';

  export let data;
</script>

<svelte:head>
  <title>Gehrig.dev</title>
  <meta name="description" content="Gehrig.dev" />
  <meta name="keywords" content="portfolio, website, gehrig, silvan" />
  <meta name="author" content="Silvan Gehrig" />
  <meta name="web_author" content="Silvan Gehrig" />
  <meta name="robots" content="index, follow" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="language" content="English" />
</svelte:head>

<Titel {data} />
<About />
<Contact />
