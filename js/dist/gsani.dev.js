"use strict";

// gsap.fromTo(".navbar", {y: -150, opacity:0, duration:1},{y: 0, opacity:1, duration:1})
// gsap.fromTo(".about-image", {y: 100, opacity:0, duration:1},{y: 0, opacity:1, duration:1})
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
  "(min-width: 300px)": function minWidth300px() {
    gsap.from("#my-scrollbar", {
      opacity: 1,
      backgroundColor: "black",
      duration: 20
    });
    gsap.from(".navbar", {
      opacity: 0,
      duration: .5,
      y: -150
    });
    gsap.from(".about-image", {
      opacity: 0,
      duration: 1,
      y: 200,
      ease: "Power2.easeInOut",
      delay: 1
    });
    gsap.from("#abtxt", {
      opacity: 0,
      duration: 1,
      y: 500,
      stagger: 0.3,
      ease: "Power1.easeInOut",
      delay: 1
    }); // gsap.from(".about-text", {opacity:0, duration:1, y: 200, ease: "Power2.easeInOut", delay: 1.3})
    // gsap.from(".animated", {opacity:0, duration:1, y: 200, ease: "Power2.easeInOut", delay: 1.5})
    // gsap.from(".notes", {opacity:0, duration:1, y: 200, ease: "Power2.easeInOut", delay: 1.7})
    // gsap.from(".custom-btn-group", {delay: 1.9, opacity:0, duration:1, y: 200, ease: "Power2.easeInOut"})

    var petl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project",
        force3D: true
      }
    });
    petl.from(".col-lg-8", {
      opacity: 0,
      duration: 1,
      x: -200,
      ease: "SlowMo.easeInOut"
    }).from(".owl-theme", {
      opacity: 0,
      duration: 1,
      x: 200,
      ease: "SlowMo.easeInOut"
    }, "-=1");
    var retl = gsap.timeline({
      scrollTrigger: {
        trigger: ".resume",
        force3D: true
      }
    });
    retl.from(".mb-4", {
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      y: 200,
      ease: "SlowMo.easeInOut"
    }, "-=1");
    retl.from(".timeline-wrapper", {
      opacity: 0,
      duration: .5,
      stagger: 0.1,
      y: 200,
      ease: "SlowMo.easeInOut"
    }, "-=1");
    var cotl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        force3D: true
      }
    });
    cotl.from(".google-map, .contact-info", {
      opacity: 0,
      duration: 1,
      backgroundPosition: '-200px 0px',
      ease: "SlowMo.easeInOut"
    });
    cotl.from(".form-control", {
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      backgroundPosition: '200px 0px',
      ease: "SlowMo.easeInOut"
    }, "-=.5");
    var fotl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        force3D: true
      }
    });
    fotl.from(".copyright-text", {
      opacity: 0.1,
      duration: 1,
      stagger: 0.2,
      backgroundPosition: '200px 0px',
      ease: "SlowMo.easeInOut"
    });
  }
}); // TweenLite.ticker.fps(1);