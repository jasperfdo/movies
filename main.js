
// import './main.js';
// import './tailwind.css';
// import './projects.css';
// import './projects.js';


//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/

// const tl = gsap.timeline();


// tl.from(".c0",{
//   y: "100%",
//   opacity: 0,
//   duration: .5,
//   opacity: .8
// });
// gsap.registerPlugin(CSSRulePlugin);
// console.log('skew);
const pageContainer = document.querySelector(".scrollContainer");

function contentAnimation () {


	 


const locoScroll = new LocomotiveScroll({
	el: document.querySelector(".scrollContainer"),
	smooth: true,
	inertia: 0.8,
	getDirection: true,
	mobile: {
		breakpoint: 0,
		smooth: false,
		getDirection: false,
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




var tl = gsap.timeline({ defaults: { duration: 1 } })

tl.to(".htanim", { opacity: 1, y: -50, ease: 'Power2.easeInOut', stagger: .2 })
	.to(".herowrk", { opacity: 1, y: -20, ease: 'Power2.easeInOut' }, "-=.5")
	.fromTo(".imgg", { opacity: 0, scaleX:1.4, scaleY:1.4, x: 150, skewX:10, skewY:-9, ease: 'Power2.easeInOut' }, { opacity: 1, skewX:0, skewY:0, x: -74, ease: "Expo.easeOut" }, "-=.5")
	.fromTo(".imgg", {scale:1.4}, {scale:1, ease: "Expo.easeOut" }, "-=.5")
	.fromTo(".imggg", { opacity: 0, x: 150, ease: 'Power2.easeInOut' }, { opacity: 1, x: -14, ease: "Expo.easeOut" }, "-=.5")
	.fromTo(".header", { opacity: 0, y: -20, ease: 'Power5' }, { opacity: 1, y: 0, ease: 'Power5' }, "-=1.4")


let wrtl = gsap.timeline({ defaults: {} })
	.fromTo(".workicnns", {opacity: 1}, {opacity: 1, duration:1, ease: "Power2.easeOut"})
	.fromTo(".worktitle, .char", { y: -50, opacity: 0}, {y: 0, opacity: 1, ease: "Power2.easeOut", stagger: 0.050}, "-=1")
	.fromTo(".word", { y: -50, opacity: 0, duration: 1 }, { y: 0, opacity: 1, ease: "slow.easeOut", stagger: 0.030 }, "-=1.7")
	.fromTo(".tools", { y: -50, opacity: 0, duration: 1 }, { y: 0, opacity: 1, ease: "slow.easeOut", stagger: 0.050 }, "-=1.5")
	.fromTo(".icons", { y: 150, opacity: 0, duration: 1 }, { y: 0, opacity: 1, ease: "slow.easeOut", stagger: 0.050 }, "-=1")

ScrollTrigger.create({
	trigger: '.homepg',
	start: "70% 10%",
	end: "+=300",
	scroller: ".scrollContainer",
	animation: wrtl,
})

let prtl = gsap.timeline({ defaults: {} })
	.fromTo(".madetoolsss", {opacity: 0 }, {opacity: 1, duration:1, ease: "Power2.easeOut"})
	.fromTo("#work", { opacity: 0, duration: 5 }, {opacity: 1, ease: "Power2.easeOut"}, "-=0.9")
	.fromTo(".proimg", {y: 250, opacity: 0, duration: 1.5 }, { y: 0, opacity: 1, ease: "Power2.easeOut", stagger: 0.080}, "-=0.5")

ScrollTrigger.create({
	trigger: '.wrkcont',
	start: "70% 10%",
	end: "+=300",
	scroller: ".scrollContainer",
	animation: prtl
})

let wrkendtl = gsap.timeline({ defaults: {} })
	.fromTo("body, header", { backgroundColor: "#861F3E" }, { backgroundColor: "#17171F", ease: "Power2.easeInOut" })

	ScrollTrigger.create({
	trigger: '.proimg',
	start: "top 30%",
	end: "+=300",
	scrub: true,
	scroller: ".scrollContainer",
	animation: wrkendtl

})



let expendtl = gsap.timeline({ defaults: {} })	
	.fromTo(".expcont", { opacity: 0 }, {opacity: 1, duration: 1, ease: "Expo.easeInOut"}, "-=0.3")
	.fromTo("#exp", {y: 50, opacity: 0 }, {opacity: 1, y: 0, duration: 1, ease: "Expo.easeInOut" }, "-=0.8")
	.fromTo(".wrdds", {y: 250, opacity: 0 }, {opacity: 1, y: 0, duration: 1, ease: "Expo.easeInOut"}, "-=0.9")

ScrollTrigger.create({
	trigger: '.madetools',
	start: "70% 10%",
	// end: "+=300",
	// toggleActions: "restart play reverse resume",
	scroller: ".scrollContainer",
	animation: expendtl
})




// let wrkendftl = gsap.timeline({ defaults: {} })
// 	// .fromTo("body", {backgroundColor:"#861F3E", duration: 1}, {backgroundColor:"#17171F", ease: "Expo.easeOut"})	
// 	// .fromTo("body", {backgroundColor:"#861F3E", duration: 1}, {backgroundColor:"#17171F", ease: "slow.easeOut"})	
// 	.fromTo(".pin-wrap", { y: -180, opacity: 0 }, { y: 0, opacity: 1, duration: 5, ease: "slow.easeInOut" })
// 	.to("body, header", { backgroundColor: "#17171F", ease: "Expo.easeInOut" })
// // .fromTo(".proimg", { opacity: 0, duration: 1}, {opacity: 1, ease: "slow.easeOut"},"1")
// // .fromTo("body", {backgroundColor:"#861F3E", duration: 1}, {backgroundColor:"#17171F", ease: "Expo.easeOut"})


// ScrollTrigger.create({
// 	trigger: '.pin-wrap',
// 	start: "center top",
// 	toggleActions: "restart play reverse",
// 	end: "+=300",

// 	// scrub: 4,
// 	scroller: ".scrollContainer",
// 	animation: wrkendftl

// })


// SKEW
// gsap.registerPlugin(ScrollTrigger);

// const scrollbar = document.querySelector(".scrollContainer");

// class HorizontalScrollPlugin extends Scrollbar.ScrollbarPlugin {
//   static pluginName = "horizontalScroll";

//   transformDelta(delta, fromEvent) {
//     if (!/wheel/.test(fromEvent.type)) {
//       return delta;
//     }

//     const { x, y } = delta;

//     return {
//       y: 0,
//       x: Math.abs(x) > Math.abs(y) ? x : y
//     };
//   }
// }

// Scrollbar.use(HorizontalScrollPlugin, OverscrollPlugin);
// const myHorizontalScrollbar = Scrollbar.init(scrollbar, {
// 			damping: 0.1,
//       alwaysShowTracks: true
// });

// myHorizontalScrollbar.setPosition(0, 0);

// ScrollTrigger.scrollerProxy(scrollbar, {
//   scrollLeft(value) {
//     if (arguments.length) {
//       myHorizontalScrollbar.scrollLeft = value;
//     }
//     return myHorizontalScrollbar.scrollLeft;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }
// });

// myHorizontalScrollbar.addListener(ScrollTrigger.update);




// SKEW



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
// window.addEventListener("load", function () {
// 	let pinBoxes = document.querySelectorAll(".pin-wrap > *");
// 	let pinWrap = document.querySelector(".pin-wrap");
// 	let pinWrapWidth = pinWrap.offsetWidth;
// 	let horizontalScrollLength = pinWrapWidth - window.innerWidth;

// 	// Pinning and horizontal scrolling

// 	gsap.to(".pin-wrap", {

// 		scrollTrigger: {
// 			scroller: ".scrollContainer", //locomotive-scroll
// 			scrub: true,
// 			trigger: "#sectionPin",
// 			pin: true,
// 			// anticipatePin: 1,
// 			start: "top top",
// 			// end: () => "+=" + container.offsetWidth,
// 			end: pinWrapWidth,


// 		},

// 		duration: 1,
// 		x: -horizontalScrollLength,
// 		//   skewX:10,
// 		//   skewX:-10,
// 		//   x: this.animatableProps.tx.previous,
// 		//   y: this.animatableProps.ty.previous,
// 		ease: "none"
// 	});







// 	//gsap

// 	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// 	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// 	// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// 	ScrollTrigger.refresh();

// 	//watch the free video on how this demo was made
// 	// https://www.snorkl.tv/scrolltrigger-smooth-scroll/

// 	// var blocks = document.getElementsByClassName("container");
// 	// var content = document.getElementsByClassName("content");
// 	// var horizontal = new HorizontalScroll.default({
// 	//   blocks: blocks,
// 	//   container: content,
// 	//   isAnimated: true,
// 	//   springEffect: 5
// 	// });

// });


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





}
// var wrkbtn = document.getElementById('wrk-btn');
// // var wrkbtn = document.getElementById('wrk-btn');
// // var wrkbtn = document.getElementById('wrk-btn');
// // var wrkbtn = document.getElementById('wrk-btn');
// var overlay = document.getElementById('morph');

// var morphing = anime({
// 	targets: '.morph',
// 	d: [
// 		{value: 'M0,0V421.435S321.11,131.576,959.827,763.1S1920.01,421.458,1920.01,421.458L1920,0Z' },
// 		{value: 'M0,0V1080S254.687,1080.613,983.628,1080S1920,1080,1920,1080L1920,0Z' },
// 		// {value: 'M0,230.092V1080S254.687,1080.613,983.628,1080S1920,1080,1920,1080L1920,0Z' },
// 		// {value: 'M0,598.239V1080S254.687,1080.613,983.628,1080S1920,1080,1920,1080L1920,0Z' },
// 		// {value: 'M0,0V1080S254.687,1080.613,983.628,1080S1920,1080,1920,1080L1920,0L984.375,0Z' },
// 		//{value: 'M1004.962,602.082C160.036,683.557,0,1080,0,1080S254.687,1080.613,983.628,1080S1920,1080,1920,1080L1920,0S1849.888,520.607,1004.962,602.082Z' },
		
// 	],
// 	easing: 'easeInOutQuint',
// 	duration: 1300,
// 	loop: false,
// 	autoplay: false
// });

// wrkbtn.addEventListener('click', function() {
// 	morphing.restart();
// 	overlay.classList.add('pointer');
// })















// // function updateList() {
// // 	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
// // 		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
// // 	});

// // 	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

// // 	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
// // }

// // updateList();
// // window.addEventListener('scroll', () => {
// // 	updateList();	
// // })
function pageTransition() {

	var pgtrtl = gsap.timeline();

	pgtrtl.to('ul.transition li', {duration: 0.5, scaleY: 1, transformOrigin: "bottom left", stagger: 0.2})
	pgtrtl.to('ul.transition li', {duration: 0.5, scaleY: 0, transformOrigin: "bottom left", stagger: 0.1, delay: 0.1})
}

function delay(n) {
	n = n || 2000;
	return new Promise(done => {
		setTimeout(() => {
			done();

		}, n);
	});
}

barba.hooks.beforeOnce(() => {
	const bottomDOM = document.getElementsByTagName("body")[0]
	const newScript = document.createElement("script")
	const oldScript = document.querySelector(".main-script")
	newScript.src = "projects.js"
	newScript.className = "main-script"
	oldScript.remove()
	bottomDOM.appendChild(newScript)
	console.log('appended');
})


barba.init({

	sync: true,

	

	transitions: [{

		async leave(data) {

			const done = this.async();

			pageTransition();
			await delay(1500);
			done();
			console.log('leave');

		},
		
		async enter(data) {
			contentAnimation();
			console.log('enter');
		},

		async once(data) {
			contentAnimation();
			console.log('once');
		},


	}]
})


