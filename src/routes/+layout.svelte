<svelte:head>
  <link rel="stylesheet" type="text/css" media="all" href="/main.css">
</svelte:head>
<header>
  <h1><a href="/">Motorcycle Mania!</a></h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/categories" id="lnk-categories">Categories</a></li>
      <li><a href="/manufacturers" id="lnk-manufacturers">Manufacturers</a></li>
    </ul>
  </nav>
</header>
<slot />
<footer>
  <p>© 2020 YOUR NAME</p>
</footer>
