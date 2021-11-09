// gsap.fromTo(".navbar", {y: -150, opacity:0, duration:1},{y: 0, opacity:1, duration:1})
// gsap.fromTo(".about-image", {y: 100, opacity:0, duration:1},{y: 0, opacity:1, duration:1})



//watch the free video on how this demo was made
// https://www.snorkl.tv/scrolltrigger-smooth-scroll/


const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".scrollContainer"),
    smooth: true
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)



locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scrollContainer", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            scroller:".scrollContainer",
        };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({   


    "(min-width: 300px)": function () {
        gsap.from("#my-scrollbar", {
            opacity: 1,
            backgroundColor: "black",
            duration: 20
        })
        gsap.fromTo(".navbar", {
            opacity: 0,
            duration: .5,
            y: -100
        },{
            opacity: 1,
            duration: .5,
            y: 0
        })
        gsap.from(".about-image", {
            opacity: 0,
            duration: 1,
            y: 200,
            ease: "Power2.easeInOut",
            delay: 1
        })
        gsap.from("#abtxt", {
            opacity: 0,
            duration: 1,
            y: 500,
            stagger: 0.3,
            ease: "Power1.easeInOut",
            delay: 1
        })

        ScrollTrigger.refresh();    

        // gsap.from(".about-text", {opacity:0, duration:1, y: 200, ease: "Power2.easeInOut", delay: 1.3})
        // gsap.from(".animated", {opacity:0, duration:1, y: 200, ease: "Power2.easeInOut", delay: 1.5})
        // gsap.from(".notes", {opacity:0, duration:1, y: 200, ease: "Power2.easeInOut", delay: 1.7})
        // gsap.from(".custom-btn-group", {delay: 1.9, opacity:0, duration:1, y: 200, ease: "Power2.easeInOut"})

        let petl = gsap.timeline({
            scrollTrigger: {
                trigger: ".project",
                force3D: true,
                scroller:".scrollContainer",
            }
        });
        ScrollTrigger.refresh();

        petl.from(".col-lg-8", {
                opacity: 0,
                duration: 1,
                x: -200,
                ease: "SlowMo.easeInOut"
            })
            .from(".owl-theme", {
                opacity: 0,
                duration: 1,
                x: 200,
                ease: "SlowMo.easeInOut"
            }, "-=1")


        let retl = gsap.timeline({
            scrollTrigger: {
                trigger: ".resume",
                force3D: true,
                scroller:".scrollContainer",
            }
        })
        ScrollTrigger.refresh();

        retl.from(".mb-4", {
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            y: 200,
            ease: "SlowMo.easeInOut"
        }, "-=1")
        retl.from(".timeline-wrapper", {
            opacity: 0,
            duration: .5,
            stagger: 0.1,
            y: 200,
            ease: "SlowMo.easeInOut"
        }, "-=1")


        let cotl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact",
                force3D: true,
                scroller:".scrollContainer",
                
            }
        })
        ScrollTrigger.refresh();
        cotl.from(".google-map, .contact-info", {
            opacity: 0,
            duration: 1,
            backgroundPosition: '-200px 0px',
            ease: "SlowMo.easeInOut"
        })
        cotl.from(".form-control", {
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            backgroundPosition: '200px 0px',
            ease: "SlowMo.easeInOut"
        }, "-=.5")


        let fotl = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer",
                force3D: true,
                scroller:".scrollContainer",
            }
        })
        ScrollTrigger.refresh();
        fotl.from(".copyright-text", {
            opacity: 0.1,
            duration: 1,
            stagger: 0.2,
            backgroundPosition: '200px 0px',
            ease: "SlowMo.easeInOut"
        })
    }
    
    


});

// TweenLite.ticker.fps(1);

ScrollTrigger.refresh();
// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
