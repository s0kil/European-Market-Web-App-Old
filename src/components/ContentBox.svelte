<div class="box col">
	<h2>{text}</h2>
	<div class="button">
		<a href={link}>{linkText}</a>
	</div>
</div>


<style>
  .box {
    background: #618a0f;
    /* background: rgb(129, 184, 20); */
    width: 400px;
    height: auto;
    margin-bottom: 1em;
  }

  h2 {
    text-align: center;
    /* padding: 0.4em 0.6em 1em 0.6em; */
    color: #faecd1;
    font-family: "Merriweather", serif;
  }

  .button {
    background: #81b814;
    margin: 1em auto;
    text-align: center;
    padding: 0.8em;
    max-width: 50%;
    /* cursor: pointer; */
  }

  .button:hover {
    opacity: 0.8;
  }

  a {
    font-family: "Roboto Slab", serif;
    font-size: 1.2em;
    font-weight: 700;
    color: #1a1a1a;
    text-decoration: none;
  }

  a:hover {
    color: #1a1a1a;
  }
</style>