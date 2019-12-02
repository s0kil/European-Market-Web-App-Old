<svelte:title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cardo">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans">
</svelte:title>

<div class="special">
	<div class="imageContainer">
		<slot name="image"></slot>
	</div>

	<div class="titleContainer">
		<h1>{title}</h1>
	</div>

	<div class="descriptionContainer">
		<slot name="description"></slot>
	</div>
    <!--
    <div class="ctaContainer Grid -right">
        <a class="Cell -4of12" href="{ctaUrl}">Learn More</a>
    </div>
    -->
</div>


<style>
    .special {
        height: 100%;
        box-shadow: 0 3px 3px 0 rgba(0,0,0,0.15);
        margin: 4px;
    }

    .titleContainer,
    .descriptionContainer {
        margin: 0 0.4em;
    }

    .titleContainer h1 {
      font-family: "Cardo", serif;
      font-weight: 100;
      font-style: normal;
      margin: 10px 0;
    }

    .descriptionContainer {
      font-family: "Open Sans", sans-serif;
      line-height: 1.4em;
    }

    .imageContainer {
    }

    .ctaContainer {

    }

    .ctaContainer a {
        margin-top: 10px;
        text-align: center;
        text-decoration: none;
        color: white;
        background-color: #517a3e;
        font-size: 18px;
        padding: 8px;
        margin: 0.4em;
        border-radius: 2px;
    }
</style>