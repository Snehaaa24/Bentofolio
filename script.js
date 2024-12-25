function loader(){
    var tl=gsap.timeline()

tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,    
})

tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
})
tl.to("#loader",{
    opacity:0,
    display:"none"
})
}
loader() 