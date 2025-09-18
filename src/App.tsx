/**
 * Main App Component
 *
 * Features implemented:
 * 1. Professional website with sections: About, Projects, Service, Contact
 * 2. Premium animated brand text "WHITE EVENTIVE" with sophisticated effects
 * 3. Dark-themed StaggeredMenu navigation with smooth animations
 * 4. Responsive design with smooth scrolling between sections
 */

import { MaskContainer } from "./Animations/Aceternity/svgmask";
import StaggeredMenu from "./Animations/ReactBits/StaggeredMenu";
import About from "./components/About";
import Projects from "./components/Projects";
import { Service } from "./components/Service";
import { Howwework } from "./components/Howwework";
import Contact from "./components/Contact";
import GridMotion from "./Animations/ReactBits/GridMotion";
import DomeGallery from "./Animations/ReactBits/DomeGallery";
import AnimatedContent from "./Animations/ReactBits/AnimatedContent";
import ScrollReveal from "./Animations/ReactBits/ScrollReveal";
import LogoLoop from "./Animations/ReactBits/LogoLoop";
import { useEffect, useState } from "react";
import Stacking3D from "./Animations/Stacking3d";
import HeroStack from "./Animations/Stacking3d";
import { SparklesCore } from "./Animations/Aceternity/sparkles";
import { BackgroundGradientAnimation } from "./Animations/Aceternity/background-gradient-animation";
import ScrollStack, {
  ScrollStackItem,
} from "./Animations/ReactBits/ScrollStack";
import { ParallaxScroll } from "./Animations/Aceternity/parallax-scroll";
import { TextHoverEffect } from "./Animations/Aceternity/text-hover-effect";
import ScrollVelocity from "./Animations/ReactBits/ScrollVelocity";
import Masonry from "./Animations/ReactBits/Masonry";
import { BackgroundBeams } from "./Animations/Aceternity/background-beams";
import { LayoutGrid } from "./Animations/Aceternity/layout-grid";
import Noise from "./Animations/ReactBits/Noise";

// height of hero
const heroHeight = window.innerHeight;

// calculate progress (0 to 1)
const progress = Math.min(scrollY / heroHeight, 1);

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const items2 = [
  {
    id: "1",
    img: "/websitehosttemp/images/tulah/tulahthree.jpg",
    // img: "images/tulah/tulahthree.jpg",
    url: "#tulah",
    height: 400,
  },
  {
    id: "2",
    // img: "/images/akhand/akhandone.jpg",
    img: "/websitehosttemp/images/akhand/akhandone.jpg",
    url: "#akhand",
    height: 350,
  },
  {
    id: "3",
    // img: "/images/purvankara/IMG_5187.jpg",
    img: "/websitehosttemp/images/purvankara/IMG_5187.jpg",
    url: "#purvankara",
    height: 500,
  },
  {
    id: "4",
    // img: "/images/yougov/IMG_4429.jpg",
    img: "/websitehosttemp/images/yougov/IMG_4429.jpg",
    url: "#yougov",
    height: 300,
  },
  {
    id: "5",
    // img: "/images/sleepzone/sz1.JPG",
    img: "/websitehosttemp/images/sleepzone/sz1.JPG",
    url: "#sleepzone",
    height: 450,
  },
  {
    id: "6",
    // img: "/images/jiobp/img1.JPEG",
    img: "/websitehosttemp/images/jiobp/img1.JPEG",
    url: "#jiobp",
    height: 380,
  },
  {
    id: "7",
    // img: "/images/bakerdozen/img1.jpg",
    img: "/websitehosttemp/images/bakerdozen/img1.jpg",
    url: "#bakerdozen",
    height: 420,
  },
  {
    id: "8",
    // img: "/images/tulah/tulahtwo.jpg",
    img: "/websitehosttemp/images/tulah/tulahtwo.jpg",
    url: "#tulah",
    height: 350,
  },
  {
    id: "9",
    // img: "/images/akhand/akhand2.jpg",
    img: "/websitehosttemp/images/akhand/akhand2.jpg",
    url: "#akhand",
    height: 480,
  },
  {
    id: "10",
    // img: "/images/purvankara/IMG_5215.jpg",
    img: "/websitehosttemp/images/purvankara/IMG_5215.jpg",
    url: "#purvankara",
    height: 400,
  },
  {
    id: "11",
    // img: "/images/yougov/IMG_4432.jpg",
    img: "/websitehosttemp/images/yougov/IMG_4432.jpg",
    url: "#yougov",
    height: 360,
  },
  {
    id: "12",
    // img: "/images/sleepzone/sz2.JPG",
    img: "/websitehosttemp/images/sleepzone/sz2.JPG",
    url: "#sleepzone",
    height: 440,
  },
  {
    id: "13",
    // img: "/images/tulah/tulah.JPG",
    img: "/websitehosttemp/images/tulah/tulah.JPG",
    url: "#tulah",
    height: 380,
  },
  {
    id: "14",
    // img: "/images/tulah/tulah4.jpg",
    img: "/websitehosttemp/images/tulah/tulah4.jpg",
    url: "#tulah",
    height: 520,
  },
  {
    id: "15",
    // img: "/images/akhand/akhand3.jpg",
    img: "/websitehosttemp/images/akhand/akhand3.jpg",
    url: "#akhand",
    height: 340,
  },
  {
    id: "16",
    // img: "/images/purvankara/IMG_5227.jpg",
    img: "/websitehosttemp/images/purvankara/IMG_5227.jpg",
    url: "#purvankara",
    height: 460,
  },
  {
    id: "17",
    // img: "/images/purvankara/img.jpg",
    img: "/websitehosttemp/images/purvankara/img.jpg",
    url: "#purvankara",
    height: 390,
  },
  {
    id: "18",
    // img: "/images/purvankara/img2.jpg",
    img: "/websitehosttemp/images/purvankara/img2.jpg",
    url: "#purvankara",
    height: 430,
  },
  {
    id: "19",
    // img: "/images/yougov/IMG_4449.jpg",
    img: "/websitehosttemp/images/yougov/IMG_4449.jpg",
    url: "#yougov",
    height: 370,
  },
  {
    id: "20",
    // img: "/images/jiobp/img2.jpg",
    img: "/websitehosttemp/images/jiobp/img2.jpg",
    url: "#jiobp",
    height: 410,
  },
  {
    id: "21",
    // img: "/images/bakerdozen/img2.jpg",
    img: "/websitehosttemp/images/bakerdozen/img2.jpg",
    url: "#bakerdozen",
    height: 450,
  },
];
const images = [
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
];
// Navigation menu items - converted to anchor links for smooth scrolling
const menuItems = [
  { label: "Home", ariaLabel: "Go to home section", link: "#home" },
  { label: "About", ariaLabel: "Learn about us", link: "#about" },
  // { label: "How we work", ariaLabel: "Learn about us", link: "#about" },
  { label: "Services", ariaLabel: "View our services", link: "#service" },
  { label: "Projects", ariaLabel: "Our projects", link: "#projects" },

  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

// Social media links for the StaggeredMenu component
const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];
const items = [
  // "Event Photography Portfolio",

  // Tulah Images
  "/images/tulah/tulahthree.jpg",
  "/images/tulah/tulahtwo.JPG",
  "/images/tulah/tulah.JPG",
  "/images/tulah/tulah4.JPG",

  // Akhand Images
  "/images/akhand/akhandone.jpg",
  "/images/akhand/akhand2.jpg",
  "/images/akhand/akhand3.jpg",

  // Purvankara Images
  "/images/purvankara/IMG_5187.jpg",
  "/images/purvankara/IMG_5215.jpg",
  "/images/purvankara/IMG_5227.jpg",
  "/images/purvankara/img.jpg",
  "/images/purvankara/img2.jpg",

  // YouGov Images
  "/images/yougov/IMG_4429.jpg",
  "/images/yougov/IMG_4432.jpg",
  "/images/yougov/IMG_4449.jpg",

  //sleepzone
  "/images/sleepzone/sz1.JPG",
  "/images/sleepzone/sz2.JPG",

  //jiobp
  "/images/jiobp/img1.JPEG",
  "/images/jiobp/img2.jpg",

  //bakerdozen

  // <div key="jsx-item-1">
  //   <div style={{ color: "#EEE8D6", fontWeight: "bold", fontSize: "1.2rem" }}>
  //     Professional Event Photography
  //   </div>
  // </div>,

  // <div key="jsx-item-2">
  //   <div style={{ color: "#EEE8D6", fontWeight: "bold", fontSize: "1.2rem" }}>
  //     Corporate Events & Celebrations
  //   </div>
  // </div>,

  // <div key="jsx-item-3">
  //   <div style={{ color: "#EEE8D6", fontWeight: "bold", fontSize: "1.2rem" }}>
  //     Capturing Memorable Moments
  //   </div>
  // </div>,

  // Add more items as needed
];
function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // height of hero
  const heroHeight = window.innerHeight;

  // calculate progress (0 to 1)
  const progress = Math.min(scrollY / heroHeight, 1);

  // Calculate scroll-based animations for EVENTIVE text
  const eventiveProgress = Math.min(
    Math.max((scrollY - heroHeight * 0.3) / (heroHeight * 0.7), 0),
    1
  );
  const eventiveTranslateY = eventiveProgress * (heroHeight * 0.7); // Move down by 30% of screen height
  const eventiveScale = 1 + eventiveProgress * 0.5; // Scale from 1 to 3x
  const eventiveOpacity = 1 - eventiveProgress * 0.3; // Slight fade for depth

  // Subtitle animation - appears when EVENTIVE text settles
  const textSettledProgress =
    eventiveProgress > 0.8 ? (eventiveProgress - 0.8) / 0.2 : 0;
  const showSubAnimation = textSettledProgress > 0.3;

  return (
    <div>
      {/* HOME SECTION - Extended height for scroll animation */}

      <section
        id="home"
        style={
          {
            // height: "200vh", // Extended height for scroll animation
            // position: "relative",
            // overflow: "hidden",
            // backgroundColor: "#EEE8D6",
          }
        }
      >
        {/* GRID MOTION BACKGROUND */}
        {/* <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <GridMotion items={items} />
        </div> */}

        {/*
          STAGGERED MENU COMPONENT
          - Dark theme implementation with custom colors
          - Right-positioned animated menu
          - Social links enabled with numbering
          - Custom logo and brand colors (#15284B, #5227ff)
        */}
        {/* Background gradient animation as backdrop */}
        <div
          style={{
            position: "absolute",

            inset: 0,
            zIndex: 1,
            opacity: 1 - eventiveProgress * 0.3, // Subtle fade as text animates
          }}
        >
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                {/* Gradients X Animations */}
              </p>
            </div>
          </BackgroundGradientAnimation>

          {/* Noise effect overlay on top of BackgroundGradientAnimation */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 2,
              overflow: "hidden",
            }}
          >
            <Noise
              patternSize={250}
              patternScaleX={1}
              patternScaleY={1}
              patternRefreshInterval={2}
              patternAlpha={15}
            />
          </div>
        </div>

        {/* StaggeredMenu on top with proper positioning */}
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#EEE8D6"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#EEE8D6", "#5227ff"]}
          logoUrl="/whitelogo.svg"
          accentColor="#5227ff"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
          // style={{ position: "relative", zIndex: 9999 }}
        />

        {/* CENTERED BRAND TEXT CONTAINER */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 10,
            height: "100vh", // Fixed to viewport height to maintain initial centering
            top: 0,
          }}
        >
          <div className="text-center">
            {/*
              MAIN TEXT ANIMATION CONTAINER
              Animation: "zoomIn" - Scales from 30% to 100% over 1.8 seconds
              Timing: Starts immediately (0s delay)
              Easing: ease-out for professional deceleration
            */}
            <div
              className="text-container"
              style={{
                transform: "scale(0.3)",
                animation: "zoomIn 1.8s ease-out 0s forwards",
              }}
            >
              {/*
                "WHITE" TEXT ELEMENT
                Font: Anvers (custom font from /fonts folder)
                Color: #15284B (dark blue brand color)
                Size: Responsive using clamp() - scales from 4rem to 8rem
                Weight: Ultra-thin (50) for premium appearance

                Animations applied:
                1. Individual letter reveal (letterReveal) - staggered 0.1s apart
                2. Vertical movement (moveUp) - moves up 30px after 2.5s delay
              */}
              <div
                className="white-text"
                style={{
                  fontFamily: "Anvers, sans-serif",
                  color: "#EEE8D6",
                  fontSize: "clamp(4rem, 8vw, 8rem)",
                  fontWeight: "50",
                  lineHeight: "1",
                  margin: "0",
                  letterSpacing: "0.05em",
                  // animation: "moveUp 0.8s ease-out 2.5s forwards",
                }}
              >
                {/*
                  LETTER-BY-LETTER ANIMATION
                  Each letter of "WHITE" gets individual animation:
                  - Starts ultra-thin (scaleX: 0.1) and invisible (opacity: 0)
                  - Uses "letterReveal" animation with staggered timing
                  - Each letter delays by 0.1s more than the previous (0s, 0.1s, 0.2s, 0.3s, 0.4s)
                  - Creates premium cascading reveal effect
                */}
                {"WHITE".split("").map((letter, index) => (
                  <span
                    key={index}
                    className="letter-animate"
                    style={{
                      display: "inline-block",
                      fontWeight: "100",
                      opacity: "0",
                      transform: "scaleX(0.1)",
                      animation: `letterReveal 0.8s ease-out ${
                        0.1 * index
                      }s forwards`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              {/*
                EXPANDING RECTANGLE DIVIDER
                Creates elegant separation between "WHITE" and "EVENTIVE"

                Styling:
                - Dark blue background (#15284B) matching text color
                - Circular edges (borderRadius: 50px) for premium appearance
                - Starts completely collapsed (0px width/height)

                Animation: "expandRectangle"
                - Duration: 1.2s with ease-out timing
                - Delay: 2.5s (synchronized with text separation)
                - Grows from nothing to full responsive size
                - Creates space-filling effect as text moves apart
              */}
              <div
                className="expanding-rectangle"
                style={{
                  width: "0px",
                  height: "0px",
                  backgroundColor: "#EEE8D6",
                  borderRadius: "50px",
                  margin: "0px auto",
                  opacity: "0",
                  // animation: "expandRectangle 0.7s ease-out 2.0s forwards",
                }}
              />

              {/*
                "EVENTIVE" TEXT ELEMENT
                Smaller than "WHITE" to create visual hierarchy

                Styling:
                - Same Anvers font family and brand color
                - Smaller responsive size: clamp(2.5rem, 5vw, 5rem)
                - Ultra-thin weight (50) for consistency

                Animations applied:
                1. Individual letter reveal (letterReveal) - starts after "WHITE" letters
                2. Vertical movement (moveDown) - moves down 30px after 2.5s delay
                3. Synchronized with rectangle expansion for cohesive effect
              */}
              <div
                className="eventive-text"
                style={{
                  fontFamily: "Anvers, sans-serif",
                  color: "#EEE8D6",
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  fontWeight: "50",
                  lineHeight: "1",
                  margin: "0",
                  letterSpacing: "0.05em",
                  // transform: `translateY(${eventiveTranslateY}px) scale(${eventiveScale})`,
                  opacity: eventiveOpacity,
                  transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
                  // animation: "moveDown 0.8s ease-out 2.5s forwards",
                }}
              >
                {/*
                  LETTER-BY-LETTER ANIMATION FOR "EVENTIVE" + SCROLL ANIMATION
                  - Initial letter reveal animation on page load
                  - Scroll-based transform and scale animation
                  - Moves down and enlarges as user scrolls
                */}
                {"EVENTIVE".split("").map((letter, index) => (
                  <span
                    key={index}
                    className="letter-animate"
                    style={{
                      display: "inline-block",
                      fontWeight: "100",
                      opacity: "0",
                      transform: "scaleX(0.1)",
                      animation: `letterReveal 0.8s ease-out ${
                        0.6 + 0.1 * index
                      }s forwards`,
                    }}
                  >
                    {letter}
                  </span>
                ))}

                {/* Add effects directly to EVENTIVE text when it settles */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    opacity: showSubAnimation ? 1 : 0,
                    transition: "opacity 0.5s ease-out",
                  }}
                >
                  {/* Glowing border effect */}
                  <div
                    style={{
                      position: "absolute",

                      // inset: "-10px",
                      // background: "transparent",
                      // "linear-gradient(45deg, #5227ff, transparent, #5227ff, transparent)",
                      // borderRadius: "8px",
                      opacity: showSubAnimation ? 0.3 : 0,
                      animation: showSubAnimation
                        ? "pulse 2s ease-in-out infinite"
                        : "none",
                      // filter: "blur(8px)",
                    }}
                  >
                    {/* <h1>EVENTS</h1> */}
                  </div>

                  {/* Subtle text shadow/glow */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      textShadow: showSubAnimation
                        ? "0 0 20px rgba(82, 39, 255, 0.5), 0 0 40px rgba(82, 39, 255, 0.3)"
                        : "none",
                      transition: "text-shadow 0.8s ease-out",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSITION COVERING RECTANGLE */}
      {/* <section
        style={{
          height: "10vh",
          backgroundColor: "#EEE8D6",
          width: "100%",
          position: "relative",
          zIndex: 100,
        }}
      > */}
      {/* <div
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, #EEE8D6,#EEE8D6)",
          }}
        >
          <ScrollVelocity
            texts={["React Bits", "Scroll Down"]}
            // velocity={velocity}
            className="custom-scroll-text"
          />
        </div> */}
      {/* </section> */}

      {/* SCROLL STACK DEMO SECTION */}
      {/* <section
        style={{
          height: "100vh",
          position: "relative",
          backgroundColor: "#000",
        }}
      >
        <ScrollStack
          useWindowScroll={true}
          itemDistance={150}
          itemScale={0.05}
          itemStackDistance={40}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.8}
          className="h-full"
        >
          <ScrollStackItem itemClassName="bg-white text-black">
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Card 1</h2>
            <p style={{ fontSize: "1.2rem" }}>
              This is the first card in the stack
            </p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="bg-blue-500 text-white">
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Card 2</h2>
            <p style={{ fontSize: "1.2rem" }}>
              This is the second card in the stack
            </p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="bg-purple-500 text-white">
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Card 3</h2>
            <p style={{ fontSize: "1.2rem" }}>
              This is the third card in the stack
            </p>
          </ScrollStackItem>
        </ScrollStack>
      </section> */}

      {/*
        GRADIENT TRANSITION SECTION
        Long gradient section transitioning from dark navy blue to black
        - Creates elegant visual separation between hero and content sections
        - Full viewport height for dramatic effect
        - Smooth gradient transition from top to bottom
      */}

      {/*
        ACETERNITY MASK CONTAINER DEMO SECTION
        Interactive reveal animation component
        - Shows hidden text on hover/interaction
        - Demonstrates advanced CSS animations
        - Part of the original template structure
      */}
      {/* <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
              The first rule of MRR Club is you do not talk about MRR Club. The
              second rule of MRR Club is you DO NOT talk about MRR Club.
            </p>
          }
          className="h-[40rem] rounded-md border text-white dark:text-black"
        >
          Discover the power of{" "}
          <span className="text-blue-500">Tailwind CSS v4</span> with native CSS
          variables and container queries with
          <span className="text-blue-500">advanced animations</span>.
        </MaskContainer>
      </div> */}

      {/*
        WEBSITE SECTIONS
        Professional page sections with anchor IDs for smooth scrolling navigation
        - About: Company/personal information
        - Projects: Portfolio/work showcase
        - Service: Services offered
        - Contact: Contact form and information
      */}
      <About />
      <Howwework />
      {/* <Service /> */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
