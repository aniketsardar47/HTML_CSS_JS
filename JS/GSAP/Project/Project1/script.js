var tl = gsap.timeline();

tl.from("#nav h3",{
    y: -50,
    opacity: 0,
    delay: 0.4,
    duration: 0.8,
    stagger: 0.4
})

tl.from("#main h1",{
    x:-500,
    opacity: 0,
    stagger:0.4,
    duration:0.8,
    delay:0.4
})

tl.from("img",{
    x:100,
    opacity: 0,
    rotate: 40,
    stagger:0.4
})

tl.from("#footer h3",{
    y:50,
    opacity:0,
    delay: 0.4,
    duration: 0.8,
    stagger: 0.4
})