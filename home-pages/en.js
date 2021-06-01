;(()=>{
  let isEn = localStorage.getItem("curLanguage") === "en" ;
  if(isEn){
    $("body").addClass("en-font-family")
    let els = document.querySelectorAll("[enrk]")
    els.forEach(el => {
      if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')
        el.placeholder = el.getAttribute("enrk")
      else if(el.tagName === 'IMG')
        el.setAttribute("src", el.getAttribute("enrk"))
      else 
        el.innerHTML = el.getAttribute("enrk")
    });
    if(document.querySelectorAll(".mobile-background").length > 1){
      document.querySelectorAll(".mobile-background").forEach(el=>{
        el.style.display = 'block'
      })
      document.querySelectorAll(".pc-background")[0].style.display = 'none'
    }
  }
})()