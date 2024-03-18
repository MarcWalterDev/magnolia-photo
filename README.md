# Magnolia Photography - Portfolio Project

A website advertising a wedding photographer, where visitors come to help them decide who they want to capture the moment of their big day. This website is designed to be responsive across a range of devices and screen sizes and should be welcoming show good examples of the photographers work in order to gain new clients.

Please not this is not a real photographer but a project created for [The Code Institue](https://codeinstitute.net/) as part of their online course.

![multi device preview](assets/readme/multiscreen-pic.png)

The live site can be viewed on [here](https://) on github pages

Contents

_____________________________

## User experience

### User story

As a first time user I want to:

* See what service is on offer.
* Navigate easily through the website.
* See examples of the photographers work.
* See if the photographer is right for me.
* Contact the photographer.

As a returning user I want to:

* Book or contact the photographer.

Due to the nature of the service visitors will unlikely return multiple times other than to book the service or enquire.

_____________________________

## Design

### Colours

I wanted to keep a simple colour scheme to keep the photographs the center of attention, with the majority of the photographs being on the gallery and album pages I used the colour scheme throughout for consistency. I used white for the main colour due to its association with weddings, grey for the main font colour for a softer look, gold/yellow for hover effects as I felt it suited the wedding theme and the green for a splash of colour so it didn't look too plain.

![colour palette](assets/readme/colours.png)

### Typography

Fonts were taken from [Google Fonts](https://fonts.google.com/). I used [Poppins](https://fonts.google.com/specimen/Poppins?query=poppins) as the main font for its clean, modern look and [Tangerine](https://fonts.google.com/?query=tangerine) for headings to add some elegance with sans serif and cursive, respectively, for back up.

### Media

The photographs in the gallery and album pages were taken from [pexels.com](https://www.pexels.com/) a free stock photography site. The "reviewers" are friends and family and the photographer is a portarait of myself.

### Wireframes

The site was designed to be a multi page site which is responsive across all device types.
I made a some design choices during the development process which deviate from the original designs. These were mainly layout choices.

* On smaller screen sizes the footer look too squashed or the text became hard to read so I went with more of a horizontal layout.
* I swapped the text and image around on the index about me section for a small variation from the "about me" page.
* I decided to use text instead of images on the contact form as I felt it needed some description.
* I added some headings not included in the wireframes to further highlight the users location on the site.

For images please see [previews.md](previews.md).
_____________________________

## Features

### Index:

#### Header

On the left side is a logo which when clicked takes the user to the home page. On the right on larger screens is the navigation menu, the current page is highlighted by a gold underline and text changes colour on hover. On smaller screens there is a hamburger button, when pressed, the navigation menu sides out from the right of the screen. The header section is fixed and will stay at the top of the page on scoll and is consistant across all pages of the web site.

#### Hero

The hero section consists of the "Magnolia Photography" heading with a subheading and a "book now" button with a colour changing hover effect over an image.

#### Welcome

there is a breif about section telling the user a little about the photographer and why he does what he does, to show the passion the photographer has for his work on the left and a picture on the right.  On smaller screens the image moves above the text.

#### Reviews

A reveiws section demonstrates the experience of other clients to give the user confidence in the service on offer.

#### Map

The map, if it were for a real company, would show the user where the business is located.

#### Footer

There is a basic footer section consisant across all pages which contains copyright information and external links to social media sites. It might be worth noting that the links currently go to social media home pages, if it were for a real company the links would go to their social media pages.

### Gallery/Album:

The gallery page is split into four album sub-pages, each showcasing a different event. Each album has nine photos and at the bottom is a button that takes the user back to the main gallery page.

### Contact:

The contact page is where the user can book the photographer or enquire about pricing and/or services. This consists of a form where the user inputs their name, contact details, the dates of their wedding, the venue of their wedding and has a text are box where they can send an optional message. This form is connected to an external API which send the details of the form to the photographer email address. There are also two buttons if the user wants to email the photographer which opens their email app and one for the phone number which when pressed opens a call prompt.

### Pop out Nav menu:

On smaller screens the horizontal menu in the header is replaced by a hamburger icon which, when pressed, opens the navigation via a pop out panel.

### 404:

I created a 404 page to inform the user of any errors with their request, this consists of an error message and two buttons at the bottom, one which takes the user back to the home page and one which opens the users email app shoukld they wish to report the problem.

### Future Features:

The photographs in the album page will open to give a full screen view of the photoraph with arrow buttons on either side so the user can scroll through the images. This will be shown on an overlay with album page dimmed in the background.
_____________________________

## Technologies

* HTML - Used for the main structure of the web site
* CSS - Used for the layout and styling
* JavaScript - Used for the pop out side menu
* [GitHub](https://github.com/) - Used to host the site
* [Balsamiq](https://balsamiq.com/) - For the wireframe
* [CDNJS.com](https://cdnjs.com/libraries/font-awesome) - For Fontawesome CDN link
* [Fontawesome v4](https://fontawesome.com/v4/) - For the icons used in the project
* [Google Fonts](https://fonts.google.com/) - For the fonts
* [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) - For the resposive layout of the gallery pages
* [VS Code](https://code.visualstudio.com/) - Used for writing the code
* Chrome Dev Tools - For testing resposiveness
* W3C [HTML](https://validator.w3.org/) and [CSS](https://jigsaw.w3.org/css-validator/) validators - To make sure there were no error in the code
* [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?pli=1) - For testing performance

_____________________________

## Testing

Testing results can be found in [test.md](test.md)

_____________________________

## Deployment Instructions

_____________________________

## Credits

* Friends and family who helped test.
* Friends and family who let me use their pictures for the review profile photos (especially my sister Emma who disagreed with my choice of photo)
* [pexels.com](https://www.pexels.com/) - For the wedding photographs.
* [Learn Web](https://www.youtube.com/watch?v=muquF8McnrI) - for the circle profile picture tutorial.
* [Codegrid](youtube.com/watch?v=rGAbT8ykGB0&t=2s) - For the slide out navigation tutorial.
* [Free Code Camp](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/) - For the footer turtorial.
* [CSS tricks](https://css-tricks.com/) - Where I learnt more about 'flex'.
* [chat GPT](https://chat.openai.com/) - Which wrote the 'about' content.
* [w3schools](https://www.w3schools.com/howto/howto_css_center_button.asp) - for their centering tutorial
* [stackoverflow](https://stackoverflow.com/questions/9182978/semi-transparent-color-layer-over-background-image) - for the semi-transparent overlay using linear gradient.
* [MDM](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) - for alignment of images in their div.
* unknown - Used a turtorial for help with input box incosistancies relating to placeholder text, forgot to save and can't find the source.

_____________________________

## Comments

I have learn a lot about organisation and design during this project. Some key take aways:
* use ID more - This could have cleaned up my CSS a lot, using class names meant some lengthy targeting of elements. I will do some more research about when it is better to ID vs class.
* README - I should have written the README as I went along, it was quite a daunting task after just making a few notes and doing the whole write up at the end.
* Mobile first desgin - I originally started mobile first but decided to switch to desktop first design as I felt it made more sense but I think designing mobile first would greatly reduce the amount of media queries needed for different screen sizesand save a lot of time.
* Organisation - Being more methodical would have saved a lot of going back and forth between pages.

On the whole I have really enjoyed the process. Even though some of my methods caused some undue stress it has helped me learn what and what not to do in the future.