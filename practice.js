const navbarbutton = document.querySelector(".navbarhamburger");
const navbarheader= document.querySelector(".header");


//navbarheader.classList.add("hide");
navbarbutton.addEventListener ("click", () => {
 
  
  navbarbutton.classList.toggle("show");
  if(navbarheader.classList.contains("showsidenavbar")==true){

    navbarheader.classList.remove("showsidenavbar");
    navbarheader.classList.add("hidesidenavbar");
  }
  else{
      
    navbarheader.classList.remove("hidesidenavbar");
    navbarheader.classList.add("showsidenavbar");

  }
})  




