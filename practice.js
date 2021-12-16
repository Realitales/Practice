const redbutton = document.getElementById("navbarhamburger");
const navbar = document.querySelector(".navbar");
const navbarheader= document.querySelector(".header");

navbarheader.classList.add("hide");
navbar.classList.add("hide");
redbutton.addEventListener ("click", () => {
 
  
  
  if(navbar.classList.contains("show")==true){

    navbarheader.classList.remove("show");
    navbar.classList.remove("show");
    navbar.classList.add("hide");
    navbarheader.classList.add("hide");
  }
  else{
      
    navbarheader.classList.remove("hide");
    navbarheader.classList.add("show");
    navbar.classList.add("show");
    navbar.classList.remove("hide");
  }
})  




