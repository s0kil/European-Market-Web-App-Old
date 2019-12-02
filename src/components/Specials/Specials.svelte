<svelte:window on:load="loadSpecialImages()"></svelte:window>

<svelte:title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.8.8/tiny-slider.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.8.8/min/tiny-slider.js"></script>
</svelte:title>

<div id="specialsSlider">
	<div>
		<Special title="European Meats" ctaUrl="">
			<p slot="description">Sausage can get complicated. Take Germany. There are said to be 1,500 types of sausage that vary between region, town, and maker. Some even have protected status under German law. It’s fair to say you won’t find nearly the variety or the same interpretations stateside, but here, generally, is what you can expect at the butcher counter.</p>
			<img class="specialImage" slot="image" src="images/european-meats-min.jpg" alt="European Meats">
		</Special>
	</div>

	<div>
		<Special title="Homemade Blintzes" ctaUrl="">
			<p slot="description">Unlike the thick, fluffy traditional pancakes that Americans have come to love and enjoy for breakfast, these pancakes are very thin and can be stuffed with various sweet or savory fillings, making them a unique vehicle for a variety of flavors. Ideal for breakfast, lunch, or dinner, they can be as filling as you make them.</p>
			<img class="specialImage lazyLoad" slot="image" src="" data-src="images/homemade-blintzes-min.jpg" alt="Homemade Blintzes">
		</Special>
	</div>

	<div>
		<Special title="Homemade Cabbage Rolls" ctaUrl="">
			<p slot="description">Cabbage rolls can vary depending on the origin, the Polish version usually contains meat and rice while the Ukrainian version generally contains only rice.  I use a combination of beef & pork for the best flavor but you can use any type of ground meat for these easy cabbage rolls.  While the tomato soup may not be typical, it softens & sweetens the tomato sauce slightly and tastes delicious!</p>
			<img class="specialImage lazyLoad" slot="image" src="" data-src="images/homemade-cabbage-rolls-min.jpg" alt="Homemade Cabbage Rolls">
		</Special>
	</div>

	<div>
		<Special title="Homemade Pelmeni" ctaUrl="">
			<p slot="description">Pelmeni are traditional Russian meat-filled dumplings. Making pelmeni is favorite family pastime in the long winter months. These dumplings are a common convenience food - big batches can be frozen and quickly boiled or fried on demand.</p>
			<img class="specialImage lazyLoad" slot="image" src="" data-src="images/homemade-pelmeni-min.jpg" alt="Homemade Pelmeni">
		</Special>
	</div>

	<div>
		<Special title="Homemade Perogies" ctaUrl="">
			<p slot="description">Homemade pierogi are also an important part of Christmas Eve celebrations in many homes, but aren't limited to the holidays; many enjoy them all year long. Pierogi are very flexible and can be stuffed with a number of savory or sweet fillings, including potato and cheese (below); sauerkraut, cabbage, spiced meats, and even fruits and berries. Because pierogi freeze well, they make quick, satisfying last-minute meals.</p>
			<img class="specialImage lazyLoad" slot="image" src="" data-src="images/homemade-perogies-min.jpg" alt="Homemade Perogies">
		</Special>
	</div>
</div>


<style>
  .specialImage {
    max-width: 100%;
  }

  .specialImage[src=""] {
    visibility: hidden;
  }
</style>


<script>
	export default {
		oncreate() {
			let slider = tns({
				container: '#specialsSlider',
				items: 1,
				slideBy: 'page',
				autoplay: true,
				controls: false,
				nav: false,
				autoplayButtonOutput: false,
				autoplayTimeout: 10000,
				loop: true
			});
		},

		methods: {
			loadSpecialImages() {
				const lazyLoadImages = document.getElementsByClassName("lazyLoad");
					for (let image of lazyLoadImages) {
						image.src = image.dataset.src;
					}
			}
		},

	  components: {
	    Special: "./Special"
	  }
	};
</script>