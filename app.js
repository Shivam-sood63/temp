// let Ham=document.querySelector("#ham")
// let Cross=document.querySelector("#cross")
// Ham.addEventListener("click",function(){
//     Ham.classList.toggle("#cross");
// })


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


// ---------------------------//GSAP LIBRARY START//------------------------------------------
gsap.from(".space", {
  y: 30,
  duration: 1,
  opacity: 0,
});
gsap.from(".carousel-inner h3", {
  x: 100,
  duration: 1,
  opacity: 0,
  
});
gsap.from(".carousel-inner p", {
  y: 100,
  duration: 1,
  opacity: 0,
  rotate:90,
});
gsap.from(".carousel-inner button", {
  x: -100,
  duration: 1,
  opacity: 0,
});
gsap.from(".prt1", {
  y:70,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".ptr3",
  },
});
gsap.from(".prt2", {
  y:70,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".ptr3",
  },
});
gsap.from(".prt3", {
  y:70,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".ptr3",
  },
});

gsap.from(".product", {
  y: 100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".product",
  },
});
gsap.from(".navv", {
  y:100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".navv",
  },
});
gsap.from(".two_btns", {
  y:100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "",
  },
});
gsap.from(".esp1", {
  y:100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".esp1",
  },
});
gsap.from(".esp2", {
  y:100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".esp2",
    // scrub: 1,
  },
});
gsap.from(".esp3", {
  y:100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".esp3",
   
  },
});
gsap.from(".esp4", {
  y:100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".esp4",
    
  },
});

gsap.from(".loadmore", {
  y:30,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".loadmore",
  },
});

gsap.from(".abot p", {
  y:100,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".abot",
  },
});
gsap.from(".abot p", {
  y: 30,
  duration: 1,
  opacity: 0,
});