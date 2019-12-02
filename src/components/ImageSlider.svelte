<!-- Thanks To : https://codepen.io/kathykato -->
<div class="wrapper">
	<div id="slider" class="perf-box-shadow">
		<img class="slider-img active" src="images/european-meats-{width <= 800 ? 'small' : 'min'}.jpg" alt="European Meats">
		<img class="slider-img" src="" data-src="images/homemade-blintzes-{width <= 800 ? 'small' : 'min'}.jpg" alt="Homemade Blintzes">
		<img class="slider-img" src="" data-src="images/homemade-cabbage-rolls-{width <= 800 ? 'small' : 'min'}.jpg" alt="Homemade Cabbage Rolls">
		<img class="slider-img" src="" data-src="images/homemade-pelmeni-{width <= 800 ? 'small' : 'min'}.jpg" alt="Homemade Pelmeni">
		<img class="slider-img" src="" data-src="images/homemade-perogies-{width <= 800 ? 'small' : 'min'}.jpg" alt="Homemade Perogies">
	</div>
	<nav class="slider-nav">
		<ul>
			<li class="arrow brand-color-green-darkest">
				<span on:click="showPreviousItem()" id="previous"><i>&#x2190;</i></span>
			</li>
			{#if autoSlide}
			<li>
				<span>
					{#if sliderPaused === false}
					<button class="controls paused" on:click="set({sliderPaused: true})"></button>
					{:elseif sliderPaused === true}
					<button class="controls" on:click="set({sliderPaused: false})"></button>
					{/if}
				</span>
			</li>
			{/if}
			<li class="arrow brand-color-green-darkest">
				<span on:click="showNextItem()" id="next"><i>&#8594;</i></span>
			</li>
		</ul>
	</nav>
</div>

<script>
  export default {
    data() {
      // TODO : Override Deafults with Config
      return {
        count: 0,
        autoSlide: false,
        autoSlideTime: 6, // Seconds
        sliderPaused: false
      };
    },

    oncreate() {
      const slider = document.getElementById("slider");
      const items = document.querySelectorAll(".slider-img");
      const itemCount = items.length;
      const nextItem = document.getElementById("next");
      const previousItem = document.getElementById("previous");

      this.set({
        items: items,
        itemCount: itemCount,
        nextItem: nextItem,
        previousItem: previousItem
      });

      let { autoSlide, autoSlideTime } = this.get();
      if (autoSlide) {
        setInterval(() => {
          if (!this.get().sliderPaused) {
            this.showNextItem();
          }
        }, 1000 * autoSlideTime);
      }

      this.lazyLoadImages();

      // Stop Slider From Janking Up And Down On Image Lazy Load
      slider.style.minHeight =
        getComputedStyle(items[0]).height || slider.offsetHeight + "px";
    },

    methods: {
      lazyLoadImages() {
        // Get all of the images that are marked up to lazy load
        const images = Array.prototype.filter.call(this.get().items, image => {
          return !image.classList.contains("active");
        });

        const config = {
          // If the image gets within 50px in the Y axis, start the download.
          rootMargin: "0px 0px",
          threshold: 0.01
        };

        // The observer for the images on the page
        let observer = new IntersectionObserver(onIntersection, config);
        images.forEach(image => {
          observer.observe(image);
        });

        function onIntersection(entries) {
          // Loop through the entries
          entries.forEach(entry => {
            // Are we in viewport?
            if (entry.intersectionRatio > 0) {
              // Stop watching and load the image
              observer.unobserve(entry.target);
              preloadImage(entry.target);
            }
          });
        }

        function preloadImage(image) {
          image.src = image.dataset.src;
        }
      },

      showNextItem() {
        let { items, itemCount, count } = this.get();

        items[count].classList.remove("active");

        if (count < itemCount - 1) {
          count++;
        } else {
          count = 0;
        }

        items[count].classList.add("active");

        this.set({ count: count, items: items });
      },

      showPreviousItem() {
        let { items, itemCount, count } = this.get();

        items[count].classList.remove("active");

        if (count > 0) {
          count--;
        } else {
          count = itemCount - 1;
        }

        items[count].classList.add("active");

        this.set({ count: count, items: items });
      }
    }
  };
</script>

<style>
  .wrapper {
    max-width: 100%;
    margin: 0 auto;
  }

  span i {
    font-size: 2rem;
    display: block;
    cursor: pointer;
    outline: 0;
  }

  /* Pause And Play Auto Slide */
  .controls {
    width: 0;
    height: 20px;
    vertical-align: middle;
    box-sizing: border-box;
    background: transparent;
    transition: transform 0.3s ease;
    cursor: pointer;
    border: 0;
    border-color: transparent transparent transparent #202020;
    border-style: solid;
    border-width: 10px 0 10px 15px;
  }

  .controls.paused {
    border-style: double;
    border-width: 0px 0 0px 15px;
  }

  .slider-nav {
    padding: 0;
  }

  .slider-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .slider-nav li {
    flex: 2;
    text-align: center;
    display: flex;
  }

  .slider-img {
    max-width: 100%;
    display: none;
  }

  .slider-img.active {
    display: block;
    animation: fadeImg 1s;
  }

  .slider-nav .arrow {
    flex: 1 1 15%;
  }

  .slider-nav span {
    display: block;
    width: 100%;
  }

  @keyframes fadeImg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>