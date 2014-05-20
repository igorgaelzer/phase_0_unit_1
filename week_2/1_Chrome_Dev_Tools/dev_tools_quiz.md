#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS

You can edit a page in realtime in the Elements tab, where they`ll be temporary and will be lost once the page is reloaded, or in the Sources tab, where you can actually save the changes permanently.

  
  * Javascript Debugging

Javascript debugging is mande in the Console tab.


  * Performance Optimization

Performance optimization is made in the Network tab.


* What's the quick key for your OS to spawn the Dev Tools inspector?

On the Mac, the quick key is Option + Command + I.


* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)

The background color is #0b0f11.


  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

Because it`s actually an image, not html code. http://www.postmachina.com/images/home_bg.gif


* Go to www.ticketswizard.com and analyze the page.
  * What is the largest image on the website? 

The biggest image has 316kb. http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png


  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

You open Developer Tools, go to the Network Tab, organize the Size column from big to small and look at the first image file. The biggest image has 316kb and it's URL is http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png


* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?

Optimizing images could save 837.9KiB, reducing their size by 37%.
