"use strict";
import { gsap } from "gsap";

let tl = gsap.timeline();

tl.to(".ball", { duration: 2, x: 400, rotate: 200, duration: 2, ease: "slow" })
  .to(".ball", { duration: 2, y: 10, x: 390, rotate: 360, scale: 0.85, ease: "slow" })
  .to(".ball", { duration: 0.35, y: 15, x: 388, scale: 0.75, ease: "slow" })
  .to(".ball", { duration: 0.3, y: 40, x: 385, scale: 0.55, ease: "slow" })
  .to(".ball", { duration: 0.2, y: 40, x: 385, scale: 0.25 })
  .to(".ball", { duration: 0.25, y: 60, scale: 0 });
