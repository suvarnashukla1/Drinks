
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "50% 50%",
        scrub: true,
        // markers: true,
    }
})
tl.to("#cola", {
    height:"70%",
    top: "110%",
    left: "8%"
}, 'leaf')
tl.to("#leaf", {
    top: "120%",
    rotate: "180deg",
    left: "47%"
}, 'leaf')
tl.to("#ice", {
    width: "15%",
    top: "165%",
    right: "2%"
}, 'leaf')
tl.to("#lmn", {
    top: "105%",
    left: "25%",
    rotate:"5%"
}, 'leaf')
tl.to("#apple", {
    top: "150%",
    width: "20%",
    left: "22%",
}, 'leaf')

var tl2 = gsap.timeline({scrollTrigger:{
trigger: ".three",
start: "0% 95%",
end: "50% 50%",
scrub: true,
markers: true,
}})
tl2.from("#kiwi",{
rotate: "-90deg",
left: "-100%",
top: "110%"
}, 'apple')
tl2.from("#sprite",{
rotate: "-90deg",
left: "-100%",
top: "110%"
}, 'apple')
tl2.from("#mons",{
rotate: "90deg",
right: "-100%",
top: "110%"
}, 'apple')
tl2.from("#monster",{
rotate: "90deg",
right: "-100%",
top: "110%"
}, 'apple')
tl2.to("#cola",{
top: "210%",
left: "33%",
height:"50%"

}, 'apple')
tl2.to("#apple",{
width:"30%",
left: "35%",
top: "199%"
}, 'apple')
