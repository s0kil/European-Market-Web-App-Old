<nav>
	<ul class="nav-items">
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
		<!-- <li><a class='{segment === "specials" ? "selected" : ""}' href='specials'>Specials</a></li> -->
		<li><a class='{segment === "locations" ? "selected" : ""}' href='locations'>Locations</a></li>
		<!-- <li><a class='{segment === "products" ? "selected" : ""}' href='products'>Products</a></li> -->
		<!-- <li><a class='{segment === "gallery" ? "selected" : ""}' href='gallery' rel=prefetch>Gallery</a></li> -->
		<!-- <li><a class='{segment === "events" ? "selected" : ""}' href='events' rel=prefetch>Events</a></li> -->
		<li><a class='{segment === "contact-us" ? "selected" : ""}' href='contact-us'>Contact Us</a></li>
		<li><a class='{segment === "our-story" ? "selected" : ""}' href='our-story'>Our Story</a></li>
	</ul>
</nav>


<style>
			nav {
			  overflow-y: hidden;
			  overflow-x: auto;
			  white-space: nowrap;
			}

			ul {
			  display: flex;
			  list-style-type: none;
			  padding: 0;
			}

			li {
			  flex: 1;
			  text-align: center;
			}

			a {
			  display: block;
			  text-decoration: none;
			  /* color: rgb(107, 153, 0); */
				/* color: #415c0a; */
				color: rgba(97, 138, 15, 1);
			  font-family: "Roboto Slab", serif;
			  font-weight: 700;
			  font-size: 18px;
			  padding: 8px;
			  position: relative;
			}

			.selected {
			  background: #81b814;
			  color: white;
			}

			.selected:after {
			  top: 98%;
			  left: 50%;
			  border: solid transparent;
			  content: " ";
			  height: 0;
			  width: 0;
			  position: absolute;
			  pointer-events: none;
			  /* border-color: rgba(136, 183, 213, 0); */
			  border-top-color: #81b814;
			  border-width: 10px;
			  margin-left: -10px;
			}
</style>