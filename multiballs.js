"use strict";
import { gsap } from "gsap";

let tl = gsap.timeline();

tl.to(".ball", { duration: 2, x: 400, rotate: 200, duration: 2, ease: "slow" }).to(".ball", { duration: 2, y: -22, x: 413, rotate: 360 });
