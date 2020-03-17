"use strict";
import { gsap } from "gsap";

let tl = gsap.timeline();

tl.to(".ball", { duration: 2, x: 400, rotate: 200, duration: 2, ease: "slow" })
  .to(".ball", { duration: 2, y: 10, x: 390, rotate: 360, scale: 0.85, ease: "slow" })
  .to(".ball", { duration: 0.3, y: 40, x: 385, scale: 0, ease: "slow(0.7, 0.7, false)" });
