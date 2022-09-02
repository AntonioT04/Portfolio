const menuBtn = document.querySelector(".menu-btn")
let menuOpen=false;
menuBtn.addEventListener("click", () =>{
  if (!menuOpen){
    menuBtn.classList.add("open");
    document.getElementById("myNav").style.width = "100%";
    menuOpen = true;
  }
  else{
    menuBtn.classList.remove("open");
    document.getElementById("myNav").style.width = "0%";
    menuOpen=false;
  }
})