
var da = setInterval(cha, 100)

function cha () {
  if(window.scrollY > 300) {
    document.querySelector(".navbar").classList.remove("bg-danger");
    document.querySelector(".navbar").classList.add("bg-primary");
  }
  
  else{
    document.querySelector(".navbar").classList.remove("bg-primary");
    document.querySelector(".navbar").classList.add("bg-danger");
  }
}
