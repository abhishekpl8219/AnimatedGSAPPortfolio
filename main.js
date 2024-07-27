gsap.registerPlugin(ScrollTrigger);
//Hero Section
const heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top bottom",
    toggleActions: "play none restart none",
  },
});

heroTl.from(".gsap-nav-item", {
  y: -30,
  opacity: 0,
  ease: "back",
  stagger: 0.3,
});

heroTl.from(".gsap__hero__item", {
  y: 30,
  opacity: 0,
  stagger: 0.3,
});

heroTl.from(".hero_illustration", {
  y: 30,
  opacity: 0,
  stagger: 0.2,
});

heroTl.from(".hero_illustration_img", {
  rotate: 90,
  repeat: -1,
  yoyo: true,

  duration: 15,
});

gsap.to(".hero_illustration__text", {
  y: "-115px",
  repeat: -1,
  duration: 15,
  yoyo: true,
  opacity: 1,
  delay: 1,
});

const horizontalSections = gsap.utils.toArray(".horizontal");
horizontalSections.forEach((section) => {
  let animeWrap = section.querySelector(".horizontal__animation-wrap");
  let animeContentWrap = section.querySelector(".animation__content__wrap");
  console.log(animeWrap, animeContentWrap);
  let getToValue = () =>
    -(animeContentWrap?.scrollWidth - window.innerWidth / 2);
  if (window.innerWidth < 650) {
    getToValue = () =>
      -(animeContentWrap?.scrollWidth - window.innerWidth / 2 - 140);
  }
  gsap.fromTo(
    animeWrap,
    { x: () => (animeWrap.classList.contains("to--right") ? 0 : getToValue()) },
    {
      x: () => (animeWrap.classList.contains("to--right") ? getToValue() : 0),
      ease: "none",
      scrollTrigger: {
        trigger: animeWrap,
        start: "top top",
        end: () =>
          "+=" + (animeContentWrap?.scrollWidth - window.innerWidth / 2 - 120),
        pin: animeWrap,
        invalidateOnRefresh: true,
        scrub: true,
      },
    }
  );
});

const projectcsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "top bottom",
    toggleActions: "restart none none none",
  },
});

projectcsTL.from(".projects__main__title", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "back",
});

projectcsTL.from(".gsap-project__item", {
  y: 30,
  opacity: 0,
  stagger: 0.5,
});

//About section

const aboutTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
    toggleActions: "restart none restart none",
  },
});

aboutTL.from(".gsap-about__item", {
  y: 30,
  opacity: 0,
  stagger: 0.5,
});

//Resume Action
const resumeTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".resume",
    start: "top bottom",
    toggleActions: "restart none restart none",
  },
});

resumeTL.from(".gsap-resume__item", {
  y: 30,
  opacity: 0,
  stagger: 0.5,
});

//Service Section

const servicesTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
    anticipatePin: true,
  },
});
servicesTL.from(".gsap-service-item-1", { xPercent: -100 });
servicesTL.from(".gsap-service-item-2", { yPercent: -100 });
servicesTL.from(".gsap-service-item-3", { xPercent: 100 });

const animateServiceTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top bottom",
    toggleActions: "restart none restart none",
  },
});

animateServiceTL.from(".gsap-service-item", {
  y: 30,
  opacity: 0,
  delay: 0.8,
  stagger: 0.5,
});

//Tech Section
const techTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".tech",
    start: "top bottom",
    toggleActions: "restart none restart none",
  },
});

techTL.from(".gsap-tech__item", {
  y: 30,
  scale: 0.5,
  ease: "back",
  opacity: 0,
  stagger: 0.5,
  duration: 0.5,
});

//Contact Section
//Tech Section
const contactTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top bottom",
    toggleActions: "restart none restart none",
  },
});

contactTL.from(".gsap-contact__item", {
  y: 30,

  opacity: 0,
  delay: 0.5,
  stagger: 0.5,
});
