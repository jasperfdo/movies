
// import './main.js';
// import './tailwind.css';
// import './projects.css';
// import './projects.js';


//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/

const pageContainer = document.querySelector(".scrollContainer");

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
	.fromTo(".tools", {y:-50, opacity: 0, duration: 1}, {y:0, opacity: 1, ease: "slow.easeOut", stagger: 0.050},"-=1")
	.fromTo(".icons", {y:150, opacity: 0, duration: 1}, {y:0, opacity: 1, ease: "slow.easeOut", stagger: 0.050},"-=.5")
	
	


ScrollTrigger.create( {
	trigger: '.worktitle, .word, .tools, .icons, .madetools',
	start: "top bottom",
	end: "+=300",
	scroller: ".scrollContainer",
	animation:wrtl

})

let prtl = gsap.timeline({defaults: {}})
	.fromTo(".madetools", {y:150, opacity: 0, duration: 1}, {y:0, opacity: 1, ease: "slow.easeOut"},"1")	
	// .fromTo(".proimg", { opacity: 0, duration: 1}, {opacity: 1, ease: "slow.easeOut"},"1")
	.to(".proimg", {opacity: 1, duration: 1})


ScrollTrigger.create( {
	trigger: '.madetools, .proimg',
	start: "top bottom",
	end: "+=300",
	scroller: ".scrollContainer",
	animation:prtl

})

let wrkendtl = gsap.timeline({defaults: {}})
	.fromTo("body, header", {backgroundColor:"#861F3E"}, {backgroundColor:"#17171F", ease: "Power2.easeInOut"})	
	// .fromTo(".proslider", {y:500, duration: 1}, {y:0 , ease: "slow.easeOut"})	
	// .fromTo(".proimg", { opacity: 0, duration: 1}, {opacity: 1, ease: "slow.easeOut"},"1")
	


ScrollTrigger.create( {
	trigger: '.workflow',
	start: "center top",
	end: "+=300",
	toggleActions: "restart play reverse",
	scroller: ".scrollContainer",
	animation:wrkendtl

})


let wrkendftl = gsap.timeline({defaults: {}})
	// .fromTo("body", {backgroundColor:"#861F3E", duration: 1}, {backgroundColor:"#17171F", ease: "Expo.easeOut"})	
	// .fromTo("body", {backgroundColor:"#861F3E", duration: 1}, {backgroundColor:"#17171F", ease: "slow.easeOut"})	
	.fromTo(".pin-wrap", {y:-180, opacity: 0 }, {y:0, opacity: 1, duration: 5, ease: "slow.easeInOut"})	
	.to("body, header", {backgroundColor:"#17171F", ease: "Expo.easeInOut"})
	// .fromTo(".proimg", { opacity: 0, duration: 1}, {opacity: 1, ease: "slow.easeOut"},"1")
	// .fromTo("body", {backgroundColor:"#861F3E", duration: 1}, {backgroundColor:"#17171F", ease: "Expo.easeOut"})


ScrollTrigger.create( {
	trigger: '.pin-wrap',
	start: "center top",
	toggleActions: "restart play reverse",
	end: "+=300",
	
	// scrub: 4,
	scroller: ".scrollContainer",
	animation:wrkendftl

})



// let wrkendbbftl = gsap.timeline({defaults: {}})
// 	// .fromTo("body", {backgroundColor:"#861F3E", duration: 1}, {backgroundColor:"#17171F", ease: "Expo.easeOut"})	
// 	// .fromTo("body", {backgroundColor:"#861F3E", duration: 1}, {backgroundColor:"#17171F", ease: "slow.easeOut"})	
// 	.to("body", {backgroundColor:"#861F3E", ease: "Expo.easeInOut"})	
// 	// .fromTo(".proimg", { opacity: 0, duration: 1}, {opacity: 1, ease: "slow.easeOut"},"1")
// 	// .fromTo("body", {backgroundColor:"#861F3E", duration: 1}, {backgroundColor:"#17171F", ease: "Expo.easeOut"})


// ScrollTrigger.create( {
// 	trigger: '.expp',
// 	start: "top bottom",
// 	toggleActions: "restart play reverse",
// 	end: "+=300",
	
	
// 	// scrub: 4,
// 	scroller: ".scrollContainer",
// 	animation:wrkendbbftl

// })

// let prtll = gsap.timeline({defaults: {}})	
// 	.fromTo(".pin-wrap", {y:150, opacity: 0, duration: 1}, {y:0, opacity: 1, ease: "slow.easeOut", stagger: 0.050},"1")
	


// ScrollTrigger.create( {
// 	trigger: '.pin-wrap',
// 	toggleActions: "restart",	
// 	scroller: ".scrollContainer",	
// 	animation:prtll

// })

// gsap.to(".proslider", {
// 	scrollTrigger: {
// 	  scroller: ".scrollContainer",
// 	  trigger: ".proslider",
// 	  toggleActions: "restart",
// 	},	
// 	duration: 2
// 	// x: -horizontalScrollLength,
	
// });


////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
	let pinBoxes = document.querySelectorAll(".pin-wrap > *");
	let pinWrap = document.querySelector(".pin-wrap");
	let pinWrapWidth = pinWrap.offsetWidth;
	let horizontalScrollLength = pinWrapWidth - window.innerWidth;
  
	// Pinning and horizontal scrolling
  
	gsap.to(".pin-wrap", {
		
	  scrollTrigger: {
		scroller: ".scrollContainer", //locomotive-scroll
		scrub: true,
		trigger: "#sectionPin",
		pin: true,
		// anticipatePin: 1,
		start: "top top",
		end: () => "+=" + container.offsetWidth,
		end: pinWrapWidth,
		
		
	  },
	  
	  duration: 1,
	  x: -horizontalScrollLength,
	  ease: "none"
	});

	

	
  


//gsap

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/


});













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







