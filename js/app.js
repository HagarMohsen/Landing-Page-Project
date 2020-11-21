/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


/*---------------------------------------------------*/
/*--------creating the Button helper Function--------*/

function goToTheTop(){
   document.documentElement.scrollTop= 0;
}


/*--------------------------------------------*/
/*--------creating the navigation list--------*/
//declaring variables
let fragment = document.createDocumentFragment();
let sections = document.querySelectorAll('section');


//looping over each section and creating a specific list Item to navigate it
sections.forEach(section => {
   let text = section.getAttribute('data-nav');
   let listText = document.createTextNode(text);
   let newLink = document.createElement('a');
   let newListItem = document.createElement('li');
 
//adding the class name to the link to apply the css styling  
   newLink.className='menu__link';
   

//Scrolling to the section  
   newLink.addEventListener ('click', function(){
     section.scrollIntoView({behavior: "smooth"})
    });

//specifying the target location in the web page  
   newLink.href = '#'+ text;
  
//append the elements to it's parents
   newLink.appendChild(listText);
   newListItem.appendChild(newLink);
   fragment.appendChild(newListItem);


});

//bulding the navigation List
document.querySelector('#navbar__list').appendChild(fragment);



/*----------------------------------------------------------*/
/*--------checking the active section and link state--------*/
//listening to the Scroll event to change the active section state
document.addEventListener('scroll', ()=>{

//detecting whether the current section is active or not 
sections.forEach(section => {
   let rect = section.getBoundingClientRect();
   let windowHight = window.innerHeight + 150; //adding this variable to insure the navegation active 
   if(rect.top >= 0 &&  rect.bottom < windowHight){

//removing the perivious active state      
      let sections = document.querySelectorAll('section');
      sections.forEach(RemoveActiveClass =>{
         RemoveActiveClass.classList.remove('your-active-class');
      } )

//adding the active class to the active section      
      section.classList.add('your-active-class');

//applying the active class to the link itself      
      let DataNavInfo = section.getAttribute('data-nav');
      let Links = document.querySelectorAll('a');
      Links.forEach(myLink => {
               if(myLink.textContent == DataNavInfo){
                  Links.forEach(myLink => {
                     myLink.classList.remove('your-active-link')
                  })
                  myLink.classList.add('your-active-link');
                  
               }
            } )
   }

});

/*----------------------------------------------------------*/
/*--------checking the active section and link state--------*/
//deciding the button state while listening to the document scroll event 
let myButton = document.querySelector('button') ;
if (document.documentElement.scrollTop > 300) {
   myButton.style.display = "block";
 } else {
   myButton.style.display = "none";
 }
 

});


 