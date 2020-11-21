# Landing Page Project

/*-----------------------------------------*/
/* ----- The used programming language -----*/

 - HTML5
 - CSS3
 - JavaScript 'with last updates in ES6'

/*-----------------------------------------*/
/* ----- The Project folder Structure -----*/

 - css                    - index.html                                     
   styles.css                                               

 - js                     - README.md 
   app.js

/*-----------------------------------------*/
/* -------- The Project properties --------*/

 - Navigation is built dynamically
 - dermine which section is active and apply the corresponding style dynamically
 - Scrolling to the anchors smoothly
 - Adding Styling to the active links on the navegation when the corresponding section is in the viewport.
 - Adding a scroll to top button which is visible when the user scrolls the page.


/*------------------------------------------------------------*/
/* -------- The Added Items to the given starter code  -------*/

 - The given javascript file (app.js) have been updated
 - Some content have been added to the html file :
        ** linking the (app.js) file with it
        ** a fourth section to make sure the code works properly
        ** a button to scroll to the page top 


/*-----------------------------------------*/
/* ---------- The Project Steps -----------*/

 - at first I linked the app.js file to my html index file

 - then I decide to divide the code into chunks so I could excute it step by step:

    ** The first : Creating the navigation bar
        - selecting all the sections by using the method querySelectorAll.
        - Looping throught the returning node list by using the forEach loop.
        - getting the section text nav and creat a list item element, its text content as the same as the sections next nav attribute content.
        - creat an anchor and add it to the created list item and adding (href) attribute to specify the location that it will scroll to later.
        - adding the event listener that is used to scroll to the wanted section.
        - adding all list items to a document fragment to lowering the number of reflow and repaint in order to increase the code perfprmance.
        - finally append the fragment to the unorderd list to represent our navigation list.

     ** The second : specifying the active section
        -  here I figured it'a all depending on the user, when the user start to scroll, the active section will be cahange so we need to programatically make it change, so the whole code will be the listener to the scroll event.
        -  we'll get all sections and looping through them then applying the (getBoundingClientRect) method to check if the section with in the view port or not.
        -  if the section is in the view port we'll add the active class to it after we removing the active class from any other section.
        -  now the in view section will be the only section with the active class.
        
     ** The third : specifying the active link corresponds to the active section.
        -  just after dermine the active section, we'll use it's value to get the active link.
        -  we'll get all the anchors and looping the returned node list by using the forEach loop.
        -  we'll check if the anchor text content is equal to the data nav attribute of the active section.
        -  if they both were the same then this will be the active link, and at this point we'll add the active link class to it and will remove this active class from any other link.
        -  finally we'll add a style to the active link class to apply to the navigation menue when the corresponding section within the view port. 

     ** The Forth : Adding the scrolling to top button
        -  here I added code to four pars of the the project
                -  first adding a button tag to the index file with an on click function.
                -  then declaring the function at the app.js file so it can scroll the page to top when we click the button.
                -  third I took advantage of the scroll event listener and added a code with in the listener to make the button visible at the scrolling and invisibe when it reaches to the top.
                -  finally I added the styling fir the button in the css file, and also added a scroll property with the value smooth to the html in order to make the transition to the top is much smoother.









