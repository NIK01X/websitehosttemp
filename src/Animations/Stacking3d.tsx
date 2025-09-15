// // Stacking3D.tsx
// import React, { useEffect, useRef } from "react";

// /**
//  * 3D Stacking scroll effect:
//  * - Hero sits sticky at top.
//  * - Next section is sticky and translates up + forward (translateZ) to stack on top.
//  * - Hero moves down slightly and recedes (translateZ negative) to enhance depth.
//  *
//  * Drop this component in place of your hero + gradient block to test.
//  */

// const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);

// export default function Stacking3D() {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const nextRef = useRef<HTMLDivElement | null>(null);
//   const rafRef = useRef<number | null>(null);
//   const lastScrollRef = useRef(0);

//   useEffect(() => {
//     const reduceMotion =
//       typeof window !== "undefined" &&
//       window.matchMedia &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     // update function uses the latest scroll value in lastScrollRef
//     function update() {
//       const heroEl = heroRef.current;
//       const nextEl = nextRef.current;
//       if (!heroEl || !nextEl) {
//         rafRef.current = null;
//         return;
//       }

//       const heroHeight = heroEl.offsetHeight || window.innerHeight;
//       const scrollY = lastScrollRef.current;
//       const raw = scrollY / heroHeight;
//       const progress = clamp(raw, 0, 1); // 0..1 while scrolling the hero height

//       // ----- TUNABLE PARAMETERS (change these to tweak the look) -----
//       // How far the hero moves down (fraction of viewport height)
//       const heroMoveDownFactor = 0.08; // 8% of hero height downward at progress=1
//       // How much the hero recedes into Z (px)
//       const heroZDepth = 140; // hero translateZ goes to -140px at progress=1
//       // How much the next section comes from far to near (px)
//       const nextZStart = -260; // next translateZ starts at -260px (far) and goes to 0
//       // Slight rotation for depth (degrees)
//       const heroRotateX = 2.2; // max rotateX for hero
//       // ----------------------------------------------------------------

//       const heroTranslateY = progress * heroHeight * heroMoveDownFactor; // px
//       const heroTranslateZ = -progress * heroZDepth; // negative = recede away
//       const heroScale = 1 - progress * 0.02; // tiny scale down

//       // Next section: from translateY(100%) -> translateY(0%)
//       const nextTranslateYPercent = (1 - progress) * 100; // percent
//       const nextTranslateZ = (1 - progress) * nextZStart; // from -260 -> 0
//       const nextScale = 1 + (1 - progress) * 0.01; // tiny scale change while coming in

//       // Apply transforms (preserve-3d + will-change for performance)
//       heroEl.style.transform = `translateY(${heroTranslateY}px) translateZ(${heroTranslateZ}px) scale(${heroScale}) rotateX(${
//         progress * heroRotateX
//       }deg)`;
//       heroEl.style.transformOrigin = "center top";
//       heroEl.style.willChange = "transform";

//       nextEl.style.transform = `translateY(${nextTranslateYPercent}%) translateZ(${nextTranslateZ}px) scale(${nextScale})`;
//       nextEl.style.transformOrigin = "center top";
//       nextEl.style.willChange = "transform";

//       rafRef.current = null; // allow new rAF scheduling on next scroll
//     }

//     if (reduceMotion) {
//       // If user prefers reduced motion, skip the effect and leave natural flow.
//       // Ensure the two sections are in normal document flow (not sticky).
//       const heroEl = heroRef.current;
//       const nextEl = nextRef.current;
//       if (heroEl) {
//         heroEl.style.position = "relative";
//         heroEl.style.transform = "";
//       }
//       if (nextEl) {
//         nextEl.style.position = "relative";
//         nextEl.style.transform = "";
//       }
//       return;
//     }

//     function onScroll() {
//       lastScrollRef.current = window.scrollY;
//       // schedule update (one rAF at a time)
//       if (rafRef.current === null) {
//         rafRef.current = requestAnimationFrame(update);
//       }
//     }

//     // kick off initial style so render doesn't flash
//     update();

//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   // ---- markup: both hero and next are sticky; the wrapper has perspective ----
//   return (
//     <div
//       ref={containerRef}
//       style={{
//         perspective: "1100px", // depth camera — increase for weaker perspective, decrease for stronger
//         perspectiveOrigin: "50% 10%",
//       }}
//     >
//       {/* HERO: z lower so next can stack on top */}
//       <section
//         ref={heroRef}
//         id="home"
//         aria-label="Hero"
//         style={{
//           height: "100vh",
//           position: "sticky",
//           top: 0,
//           zIndex: 1,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           // visual styles — replace with your real hero content
//           background: "linear-gradient(120deg,#15284B,#0b1b2b)",
//           color: "white",
//           overflow: "hidden",
//         }}
//       >
//         {/* Put your existing hero content here (brand text, GridMotion, menu...) */}
//         <div style={{ textAlign: "center", padding: "2rem" }}>
//           <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", margin: 0 }}>
//             WHITE
//             <span
//               style={{
//                 display: "block",
//                 fontSize: "clamp(1.6rem, 3.5vw, 3.2rem)",
//               }}
//             >
//               EVENTIVE
//             </span>
//           </h1>
//           <p style={{ opacity: 0.85, marginTop: "1rem" }}>
//             (Hero — your branded animated content goes here)
//           </p>
//         </div>
//       </section>

//       {/* NEXT: sits on top with higher zIndex and will translate up/forward */}
//       <section
//         ref={nextRef}
//         aria-label="Next Section"
//         style={{
//           height: "100vh",
//           position: "sticky",
//           top: 0,
//           zIndex: 2,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           // visual styles — replace with your gradient / dome gallery
//           background:
//             "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.85) 100%)",
//           color: "#EEE8D6",
//           overflow: "hidden",
//         }}
//       >
//         {/* Place the content that should rise up (DomeGallery, AnimatedContent...) */}
//         <div style={{ maxWidth: 1200, padding: "2rem" }}>
//           <h2 style={{ marginTop: 0, fontSize: "2rem" }}>
//             Next section — rises up and stacks on top
//           </h2>
//           <p style={{ fontSize: "1.1rem" }}>
//             Put your DomeGallery, AnimatedContent and text here. This block will
//             visually come forward while the hero moves down and recedes.
//           </p>
//         </div>
//       </section>

//       {/* A normal content block to allow the scroll to continue after stacking */}
//       <div style={{ height: "120vh", background: "#000" }} />
//     </div>
//   );
// }

// HeroStack.tsx
import React, { useEffect, useRef, useState } from "react";

function clamp(v: number, min = 0, max = 1) {
  return Math.min(Math.max(v, min), max);
}

const HeroStack: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // All style / effect calculations
  const heroHeight = heroRef.current?.offsetHeight || window.innerHeight;
  const rawProgress = scrollY / heroHeight;
  const progress = clamp(rawProgress, 0, 1);

  // Tweak these constants to match aesthetics
  const heroScaleMin = 0.85; // hero scales down to 85%
  const heroOpacityMin = 0.4; // hero fades to 40%
  const nextTranslateYStart = 100; // percent (100% down)
  const nextTranslateYOffset = 0; // when fully in place

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        overflow: "hidden",
        perspective: "1000px",
      }}
    >
      {/* Hero */}
      <div
        ref={heroRef}
        style={{
          height: "100vh",
          position: "sticky",
          top: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: "center center",
          // Animate transform and opacity
          transform: `scale(${1 - (1 - heroScaleMin) * progress})`,
          opacity: 1 - (1 - heroOpacityMin) * progress,
          // optional: slight translateZ for depth, or blur
          // filter: `blur(${progress * 2}px)`,
          willChange: "transform, opacity",
          background:
            "url('/path-to-your-hero-background.jpg') center/cover no-repeat", // replace with your hero bg
        }}
      >
        {/* Hero content */}
        <h1
          style={{
            color: "white",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            textAlign: "center",
            margin: 0,
          }}
        >
          Your Big Headline
        </h1>
      </div>

      {/* Next section */}
      <div
        ref={nextRef}
        style={{
          height: "100vh",
          position: "sticky",
          top: 0,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff", // or your gradient etc
          transform: `translateY(${(1 - progress) * nextTranslateYStart}%)`,
          opacity: progress, // fade in
          willChange: "transform, opacity",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h2 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", margin: 0 }}>
            Next Section Title
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "600px",
              marginTop: "1rem",
            }}
          >
            Some leading text that comes up as the section stacks.
          </p>
        </div>
      </div>

      {/* Then rest of content */}
      <div style={{ background: "#fafafa", minHeight: "200vh" }}>
        {/* your About / Projects / etc */}
      </div>
    </div>
  );
};

export default HeroStack;
