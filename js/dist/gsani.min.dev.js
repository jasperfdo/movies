"use strict";

gsap.registerPlugin(ScrollTrigger), ScrollTrigger.matchMedia({
  "(min-width: 300px)": function minWidth300px() {
    gsap.from("#my-scrollbar", {
      opacity: 1,
      backgroundColor: "black",
      duration: 20
    }), gsap.from(".navbar", {
      opacity: 0,
      duration: .5,
      y: -150
    }), gsap.from(".about-image", {
      opacity: 0,
      duration: 1,
      y: 200,
      ease: "Power2.easeInOut",
      delay: 1
    }), gsap.from("#abtxt", {
      opacity: 0,
      duration: 1,
      y: 500,
      stagger: .3,
      ease: "Power1.easeInOut",
      delay: 1
    }), gsap.timeline({
      scrollTrigger: {
        trigger: ".project",
        force3D: !0
      }
    }).from(".col-lg-8", {
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
    var o = gsap.timeline({
      scrollTrigger: {
        trigger: ".resume",
        force3D: !0
      }
    });
    o.from(".mb-4", {
      opacity: 0,
      duration: 1,
      stagger: .3,
      y: 200,
      ease: "SlowMo.easeInOut"
    }, "-=1"), o.from(".timeline-wrapper", {
      opacity: 0,
      duration: .5,
      stagger: .1,
      y: 200,
      ease: "SlowMo.easeInOut"
    }, "-=1");
    var e = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        force3D: !0
      }
    });
    e.from(".google-map, .contact-info", {
      opacity: 0,
      duration: 1,
      backgroundPosition: "-200px 0px",
      ease: "SlowMo.easeInOut"
    }), e.from(".form-control", {
      opacity: 0,
      duration: 1,
      stagger: .2,
      backgroundPosition: "200px 0px",
      ease: "SlowMo.easeInOut"
    }, "-=.5"), gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        force3D: !0
      }
    }).from(".copyright-text", {
      opacity: .1,
      duration: 1,
      stagger: .2,
      backgroundPosition: "200px 0px",
      ease: "SlowMo.easeInOut"
    });
  }
});