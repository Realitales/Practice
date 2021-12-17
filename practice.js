const redbutton = document.getElementById("navbarhamburger");
const navbarheader= document.querySelector(".header");

//navbarheader.classList.add("hide");
redbutton.addEventListener ("click", () => {
 
  
  
  if(navbarheader.classList.contains("show")==true){

    navbarheader.classList.remove("show");
    navbarheader.classList.add("hide");
  }
  else{
      
    navbarheader.classList.remove("hide");
    navbarheader.classList.add("show");

  }
})  




