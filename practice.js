const redbutton = document.getElementById("navbarhamburger");
const navbar = document.querySelector(".navbar");
navbar.classList.add("show");
redbutton.addEventListener ("click", () => {
 
  
  
  if(navbar.classList.contains("show")==true){

    navbar.classList.remove("show");
    navbar.classList.add("hide");

  }
  else{
      
    navbar.classList.add("show");
    navbar.classList.remove("hide");
  }
})  