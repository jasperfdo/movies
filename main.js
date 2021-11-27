//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/


const locoScroll = new LocomotiveScroll({
	el: document.querySelector(".scrollContainer"),
	smooth: true,
    inertia: 0.8,    
    getDirection: true,
    mobile: {
      breakpoint: 0,
      smooth: true,
      getDirection: true,
    },
    tablet: {
      breakpoint: 0,
      smooth: true,
      getDirection: true,
    },
  });


// const locoScroll = new LocomotiveScroll({
// 	el: document.querySelector(".scrollContainer"),
// 	smooth: true
// });




// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)



locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scrollContainer", {
	scrollTop(value) {
		return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
	}, // we don't have to define a scrollLeft because we're only scrolling vertically.
	getBoundingClientRect() {
		return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
	},
	// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
	pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});


//gsap
// gsap.to('.htanim', {opacity:1, duration:1, y:-50, ease:'Power2.easeInOut', stagger: .2})
// gsap.to('.herowrk', {delay: .6, opacity:1, duration:2, y:-20, ease:'Power2.easeInOut'})
// gsap.fromTo('.imgg', {opacity:0, duration:4, x:150, ease:'Power2.easeInOut'}, {delay: .5, opacity:1, duration:2, x:-80, ease:'Power2.easeInOut'})
// gsap.fromTo('.header', {opacity:0, duration:0, y:-20, ease:'Power2.easeInOut'}, {delay: 1, opacity:1, duration:1, y:0, ease:'Power2.easeInOut'})

var tl = gsap.timeline({ defaults: { duration: 1 } })

tl.to(".htanim", { opacity: 1, y: -50, ease: 'Power2.easeInOut', stagger: .2 })
	.to(".herowrk", { opacity: 1, y: -20, ease: 'Power2.easeInOut' }, "-=.5")
	.fromTo(".imgg", { opacity: 0, x: 150, ease: 'Power2.easeInOut' }, { opacity: 1, x: -74, ease: "Expo.easeOut" }, "-=.5")
	.fromTo(".imggg", { opacity: 0, x: 150, ease: 'Power2.easeInOut' }, { opacity: 1, x: -14, ease: "Expo.easeOut" }, "-=.5")
	.fromTo(".header", { opacity: 0, y: -20, ease: 'Power5' }, { opacity: 1, y: 0, ease: 'Power5' }, "-=1.4")



//Scrolltrigger with loco with gsap

let wrtl = gsap.timeline({defaults: {}})
	.fromTo(".worktitle, .char", {y:-50, opacity: 0, duration: 1}, {y:0, opacity: 1, ease: "Power1.easeInOut"})
	.fromTo(".word", {y:-50, opacity: 0, duration: 1}, {y:0, opacity: 1, ease: "slow.easeOut", stagger: 0.050},"-=1")	



ScrollTrigger.create( {
	trigger: '.worktitle',
	start: "top bottom",
	end: "+=300",
	scroller: ".scrollContainer",
	animation:wrtl

})
//gsap

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/
















// function updateList() {
// 	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
// 		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
// 	});

// 	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

// 	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
// }

// updateList();
// window.addEventListener('scroll', () => {
// 	updateList();	
// })







