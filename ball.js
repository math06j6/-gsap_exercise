"use strict";
import { gsap } from "gsap";

let tl = gsap.timeline();

tl.to(".ball", { duration: 2, x: 400, rotate: 200, duration: 2, ease: "slow" })
  .to(".ball", { duration: 1.5, y: 10, x: 385, rotate: 360, scale: 0.75 })
  .to(".ball", { duration: 5, y: -2000, x: 3000, scale: 0, ease: "power1.inOut" });
