"use strict";

import { gsap } from "gsap";

gsap.to(".ball", { duration: 2, y: -400, stagger: 0.2, repeat: 5, ease: "bounce.out" });
