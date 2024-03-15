
	Expectations?
	Browser compatibility
	Lighthouse (performance testing)
	Validators
	Testing sources -	am I responsive
				validation services
	Site functionality
	
## Bugs

* When first testing the site on smaller screens there were two problems with the pop-out navigation:
	1. The hamburger button needed pressing twice to initially open the navigation menu.
	2. While using the Chrome Dev tools and closing the navigation pop out, after switching back to a desktop size screen the menu would remain hidden. Although this would unlikely be a real use issue it meant the navigation was not working as intended.
I concluded there was a problem with the JavaScript code I had used. After some research I decided to just use a differnt code which seened more efficient and suitable for my use case (link provided in credits section).

* While performing the cross browser test I noticed the form input boxes on Safari were styled differently, probably due to Safari's default styling. To keep the style consistant across browsers I added a border to the input box in my CSS code.

* When designing the index page the footer worked as expected and sat at the bottom of the page but on pages with less content the footer would sit undernieth the content not at the bottom. I found a tutorial (link in credits) that involved wrapping the page content in a container which allowed the footer to stay at the bottom of the page.

* Also, when testing for smaller screens on my computer the smaller text in the footer looked fine but when testing on an actual mobile device the text became too small and unreadable, I solved this by stacking the footer elements upon one another allowing me to increase the font size.