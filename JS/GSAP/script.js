// GSAP = GreenSock Animation Platform 

// gsap.to("#box",{
//     x:1000,
//     rotate: 360,
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1
// })

// gsap.from("#box",{
//     x:1000,
//     rotate: 360,
//     backgroundColor: "blue",
//     duration: 2,
//     delay: 1
// })

//Timeline - 

// let t1 = gsap.timeline();

// t1.to("#box1",{
//     x: 1000,
//     rotate: 360,
//     scale: 0.5,
//     duration: 2,
// })

// t1.to("#box2",{
//     x: 1000,
//     rotate: 360,
//     scale: 0.5,
//     duration: 2,
// })

// t1.to("#box3",{
//     x: 1000,
//     rotate: 360,
//     scale: 0.5,
//     duration: 2,
// })

// Scroll Trigger

// gsap.from("#page1 #circle",{
//     scale: 0,

//     duration:2,
//     rotate:360
// })

// gsap.from("#page2 #circle",{
//     scale: 0,

//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #circle",
//         scroller:"body",
//         markers: true,
//         start: "top 60%",
//         end: "top 30%",
//         scrub:5 //Takes 2 values boolean or 1-5
//     }
// })

// gsap.from("#page3 #circle",{
//     scale: 0,
//     duration:2,
//     rotate:360,
//     // scrollTrigger: "#page3 #circle"
// })

// Scrolltrigger - pin
// gsap.to("#page2 img",{
//     width: "100%",
//     scrollTrigger:{
//         trigger:"#page2",
//         markers:true,
//         scroller: "body",
//         start:"top 0",
//         end:"top -100%",
//         scrub:2,
//         pin: true
//     }
// })

//ScrollTrigger - Horizontal scroll

// gsap.to("#page2 h1",{
//     transform: "translateX(-140%)",
//     scrollTrigger:{
//         trigger: "#page2",
//         scroller: "body",
//         markers: true,
//         start:"top 0",
//         end: "top -100%",
//         scrub:5,
//         pin: true
//     }

// })



//Locomotive.js

// const scroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true
//     });

// GSA & ScrollTrigger Together - Locomotive Scrolltrigger codepen

//Above Code will not work
// const scroll = new LocomotiveScroll({
//       el: document.querySelector("#main"),
//       smooth: true
//     });

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),//Change this to #main
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


gsap.from("#page1 #box",{
    scale: 0,
    rotation: 360,
    duration:2,
    delay:1,
    opacity: 0
})

gsap.from("#page2 #box",{
    scale: 0,
    rotation: 360,
    duration:2,
    opacity: 0,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"#main",    //Change body to #main
        markers:true,
        start: "top 60%",
        end:"top 20%",
        scrub: 5
    }
})