import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  glowIntensity: number;
  baseY: number; // Original Y position for parallax
  parallaxSpeed: number; // How fast this star moves with scroll
}

const GlowingStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const lastScrollY = useRef<number>(0);
  const frameCount = useRef<number>(0);
  const performanceMonitor = useRef({
    frameStartTime: 0,
    avgFrameTime: 16,
    performanceMode: "normal" as "normal" | "reduced" | "minimal",
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with high-DPI support
    const resizeCanvas = () => {
      const devicePixelRatio = window.devicePixelRatio || 1;

      // Get the About section container dimensions
      const aboutSection = canvas.closest("#about") || canvas.parentElement;
      const displayWidth = aboutSection?.clientWidth || window.innerWidth;
      const displayHeight = aboutSection?.clientHeight || window.innerHeight;

      // Set actual canvas size in memory (scaled for high-DPI)
      canvas.width = displayWidth * devicePixelRatio;
      canvas.height = displayHeight * devicePixelRatio;

      // Scale the canvas back down using CSS
      canvas.style.width = displayWidth + "px";
      canvas.style.height = displayHeight + "px";

      // Scale the drawing context so everything draws at the correct size
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resizeCanvas();

    // Throttled resize handler to prevent excessive recalculations
    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        generateStars(); // Regenerate stars on resize
      }, 150);
    };

    window.addEventListener("resize", throttledResize);

    // Generate stars
    const generateStars = () => {
      const stars: Star[] = [];

      // Get the About section container dimensions
      const aboutSection = canvas.closest("#about") || canvas.parentElement;
      const displayWidth = aboutSection?.clientWidth || window.innerWidth;
      const displayHeight = aboutSection?.clientHeight || window.innerHeight;

      // Mobile-optimized star count
      const isMobile = displayWidth <= 768;
      const isLowEndDevice = navigator.hardwareConcurrency <= 4;

      let starDensity = 6000; // Default density
      if (isMobile && isLowEndDevice) {
        starDensity = 15000; // Fewer stars on low-end mobile
      } else if (isMobile) {
        starDensity = 10000; // Moderate stars on mobile
      }

      const starCount = Math.floor(
        (displayWidth * displayHeight) / starDensity
      );

      for (let i = 0; i < starCount; i++) {
        const baseY = Math.random() * displayHeight;
        stars.push({
          x: Math.random() * displayWidth,
          y: baseY,
          baseY: baseY,
          size: Math.random() * 1.5 + 0.1, // Smaller, more precise sizes: 0.1 to 1.6
          opacity: Math.random() * 0.7 + 0.3, // Opacity between 0.3 and 1
          twinkleSpeed: Math.random() * 0.015 + 0.03, // Speed between 0.03 and 0.045
          glowIntensity: Math.random() * 6 + 1, // Smaller glow: 1 to 7
          parallaxSpeed: Math.random() * 0.5 + 0.1, // Parallax speed: 0.1 to 0.6
        });
      }
      starsRef.current = stars;
    };

    generateStars();

    // Mobile performance optimizations
    const isMobile = window.innerWidth <= 768;
    const isLowEndDevice = navigator.hardwareConcurrency <= 4;
    const targetFPS = isMobile ? (isLowEndDevice ? 30 : 45) : 60;
    const frameInterval = 1000 / targetFPS;
    let lastFrameTime = 0;

    // Animation loop with adaptive FPS and performance monitoring
    let time = 0;
    const animate = (currentTime: number = 0) => {
      // Performance monitoring
      const monitor = performanceMonitor.current;
      if (monitor.frameStartTime > 0) {
        const frameTime = currentTime - monitor.frameStartTime;
        monitor.avgFrameTime = monitor.avgFrameTime * 0.9 + frameTime * 0.1;

        // Adaptive performance mode
        if (frameCount.current % 60 === 0) {
          // Check every 60 frames
          if (
            monitor.avgFrameTime > 25 &&
            monitor.performanceMode === "normal"
          ) {
            monitor.performanceMode = "reduced";
          } else if (
            monitor.avgFrameTime > 40 &&
            monitor.performanceMode === "reduced"
          ) {
            monitor.performanceMode = "minimal";
          } else if (
            monitor.avgFrameTime < 18 &&
            monitor.performanceMode !== "normal"
          ) {
            monitor.performanceMode = "normal";
          }
        }
      }
      monitor.frameStartTime = currentTime;

      // Throttle animation based on device performance and current performance mode
      let currentFrameInterval = frameInterval;
      if (monitor.performanceMode === "reduced") {
        currentFrameInterval *= 1.5; // Slower FPS
      } else if (monitor.performanceMode === "minimal") {
        currentFrameInterval *= 2; // Much slower FPS
      }

      if (currentTime - lastFrameTime < currentFrameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += frameInterval / 1000; // Adjust time increment for consistent animation speed

      // Optimize scroll calculations - only update every few frames
      frameCount.current++;
      const shouldUpdateScroll = frameCount.current % (isMobile ? 3 : 2) === 0;

      let relativeScroll = 0;
      if (shouldUpdateScroll) {
        const scrollY = window.scrollY;
        lastScrollY.current = scrollY;
        const aboutSection = canvas.closest("#about") as HTMLElement;
        const sectionTop = aboutSection?.offsetTop || 0;
        relativeScroll = scrollY - sectionTop;
      } else {
        // Use cached scroll value
        const aboutSection = canvas.closest("#about") as HTMLElement;
        const sectionTop = aboutSection?.offsetTop || 0;
        relativeScroll = lastScrollY.current - sectionTop;
      }

      // Render subset of stars based on performance mode
      let starsToRender = starsRef.current;
      if (performanceMonitor.current.performanceMode === "reduced") {
        starsToRender = starsRef.current.filter((_, i) => i % 2 === 0); // Render every other star
      } else if (performanceMonitor.current.performanceMode === "minimal") {
        starsToRender = starsRef.current.filter((_, i) => i % 3 === 0); // Render every third star
      }

      starsToRender.forEach((star) => {
        // Apply parallax effect based on scroll position (reduced on mobile)
        const parallaxIntensity = isMobile ? 0.1 : 0.3;
        star.y =
          star.baseY + relativeScroll * star.parallaxSpeed * parallaxIntensity;

        // Calculate twinkling opacity (simplified on mobile)
        let currentOpacity;
        if (
          isMobile ||
          performanceMonitor.current.performanceMode !== "normal"
        ) {
          // Simplified twinkling for performance
          currentOpacity =
            star.opacity *
            (0.8 + 0.2 * Math.sin(time * star.twinkleSpeed * 50));
        } else {
          // Full twinkling effect
          const twinkle = Math.sin(time * star.twinkleSpeed * 100) * 0.3 + 0.7;
          currentOpacity = star.opacity * twinkle;
        }

        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.glowIntensity
        );

        // Different star colors for variety
        const colors = ["#ffffff", "#e6f3ff", "#fff9e6", "#f0e6ff", "#e6ffe6"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        gradient.addColorStop(
          0,
          `${color}${Math.floor(currentOpacity * 255)
            .toString(16)
            .padStart(2, "0")}`
        );
        gradient.addColorStop(
          0.4,
          `${color}${Math.floor(currentOpacity * 0.3 * 255)
            .toString(16)
            .padStart(2, "0")}`
        );
        gradient.addColorStop(1, `${color}00`);

        // Mobile-optimized star rendering
        ctx.save();

        if (isMobile) {
          // Simplified rendering for mobile
          ctx.globalAlpha = currentOpacity;
          ctx.fillStyle = gradient;

          // Single circle with gradient - much faster
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 1.5, 0, Math.PI * 2);
          ctx.fill();

          // Simple bright center
          ctx.globalAlpha = currentOpacity * 0.8;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Full quality rendering for desktop
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";

          // Main glow effect
          ctx.globalAlpha = currentOpacity * 0.6;
          ctx.fillStyle = gradient;
          ctx.shadowBlur = star.glowIntensity * 2;
          ctx.shadowColor = color;

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.glowIntensity * 0.8, 0, Math.PI * 2);
          ctx.fill();

          // Reset shadow for core star
          ctx.shadowBlur = 0;
          ctx.globalAlpha = currentOpacity;

          // Draw bright core
          const coreGradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.size
          );
          coreGradient.addColorStop(0, color);
          coreGradient.addColorStop(0.7, `${color}cc`);
          coreGradient.addColorStop(1, `${color}00`);

          ctx.fillStyle = coreGradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();

          // Add tiny bright center point for definition
          ctx.globalAlpha = currentOpacity * 0.9;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", throttledResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        background: "transparent",
        zIndex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
};

export default GlowingStars;
