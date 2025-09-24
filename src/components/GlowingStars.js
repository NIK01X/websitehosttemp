"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var GlowingStars = function () {
    var canvasRef = (0, react_1.useRef)(null);
    var animationRef = (0, react_1.useRef)(null);
    var starsRef = (0, react_1.useRef)([]);
    var lastScrollY = (0, react_1.useRef)(0);
    var frameCount = (0, react_1.useRef)(0);
    var performanceMonitor = (0, react_1.useRef)({
        frameStartTime: 0,
        avgFrameTime: 16,
        performanceMode: "normal",
    });
    (0, react_1.useEffect)(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        // Set canvas size with high-DPI support
        var resizeCanvas = function () {
            var devicePixelRatio = window.devicePixelRatio || 1;
            // Get the About section container dimensions
            var aboutSection = canvas.closest("#about") || canvas.parentElement;
            var displayWidth = (aboutSection === null || aboutSection === void 0 ? void 0 : aboutSection.clientWidth) || window.innerWidth;
            var displayHeight = (aboutSection === null || aboutSection === void 0 ? void 0 : aboutSection.clientHeight) || window.innerHeight;
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
        var resizeTimeout;
        var throttledResize = function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                resizeCanvas();
                generateStars(); // Regenerate stars on resize
            }, 150);
        };
        window.addEventListener("resize", throttledResize);
        // Generate stars
        var generateStars = function () {
            var stars = [];
            // Get the About section container dimensions
            var aboutSection = canvas.closest("#about") || canvas.parentElement;
            var displayWidth = (aboutSection === null || aboutSection === void 0 ? void 0 : aboutSection.clientWidth) || window.innerWidth;
            var displayHeight = (aboutSection === null || aboutSection === void 0 ? void 0 : aboutSection.clientHeight) || window.innerHeight;
            // Mobile-optimized star count
            var isMobile = displayWidth <= 768;
            var isLowEndDevice = navigator.hardwareConcurrency <= 4;
            var starDensity = 6000; // Default density
            if (isMobile && isLowEndDevice) {
                starDensity = 15000; // Fewer stars on low-end mobile
            }
            else if (isMobile) {
                starDensity = 10000; // Moderate stars on mobile
            }
            var starCount = Math.floor((displayWidth * displayHeight) / starDensity);
            for (var i = 0; i < starCount; i++) {
                var baseY = Math.random() * displayHeight;
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
        var isMobile = window.innerWidth <= 768;
        var isLowEndDevice = navigator.hardwareConcurrency <= 4;
        var targetFPS = isMobile ? (isLowEndDevice ? 30 : 45) : 60;
        var frameInterval = 1000 / targetFPS;
        var lastFrameTime = 0;
        // Animation loop with adaptive FPS and performance monitoring
        var time = 0;
        var animate = function (currentTime) {
            if (currentTime === void 0) { currentTime = 0; }
            // Performance monitoring
            var monitor = performanceMonitor.current;
            if (monitor.frameStartTime > 0) {
                var frameTime = currentTime - monitor.frameStartTime;
                monitor.avgFrameTime = monitor.avgFrameTime * 0.9 + frameTime * 0.1;
                // Adaptive performance mode
                if (frameCount.current % 60 === 0) {
                    // Check every 60 frames
                    if (monitor.avgFrameTime > 25 &&
                        monitor.performanceMode === "normal") {
                        monitor.performanceMode = "reduced";
                    }
                    else if (monitor.avgFrameTime > 40 &&
                        monitor.performanceMode === "reduced") {
                        monitor.performanceMode = "minimal";
                    }
                    else if (monitor.avgFrameTime < 18 &&
                        monitor.performanceMode !== "normal") {
                        monitor.performanceMode = "normal";
                    }
                }
            }
            monitor.frameStartTime = currentTime;
            // Throttle animation based on device performance and current performance mode
            var currentFrameInterval = frameInterval;
            if (monitor.performanceMode === "reduced") {
                currentFrameInterval *= 1.5; // Slower FPS
            }
            else if (monitor.performanceMode === "minimal") {
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
            var shouldUpdateScroll = frameCount.current % (isMobile ? 3 : 2) === 0;
            var relativeScroll = 0;
            if (shouldUpdateScroll) {
                var scrollY_1 = window.scrollY;
                lastScrollY.current = scrollY_1;
                var aboutSection = canvas.closest("#about");
                var sectionTop = (aboutSection === null || aboutSection === void 0 ? void 0 : aboutSection.offsetTop) || 0;
                relativeScroll = scrollY_1 - sectionTop;
            }
            else {
                // Use cached scroll value
                var aboutSection = canvas.closest("#about");
                var sectionTop = (aboutSection === null || aboutSection === void 0 ? void 0 : aboutSection.offsetTop) || 0;
                relativeScroll = lastScrollY.current - sectionTop;
            }
            // Render subset of stars based on performance mode
            var starsToRender = starsRef.current;
            if (performanceMonitor.current.performanceMode === "reduced") {
                starsToRender = starsRef.current.filter(function (_, i) { return i % 2 === 0; }); // Render every other star
            }
            else if (performanceMonitor.current.performanceMode === "minimal") {
                starsToRender = starsRef.current.filter(function (_, i) { return i % 3 === 0; }); // Render every third star
            }
            starsToRender.forEach(function (star) {
                // Apply parallax effect based on scroll position (reduced on mobile)
                var parallaxIntensity = isMobile ? 0.1 : 0.3;
                star.y =
                    star.baseY + relativeScroll * star.parallaxSpeed * parallaxIntensity;
                // Calculate twinkling opacity (simplified on mobile)
                var currentOpacity;
                if (isMobile ||
                    performanceMonitor.current.performanceMode !== "normal") {
                    // Simplified twinkling for performance
                    currentOpacity =
                        star.opacity *
                            (0.8 + 0.2 * Math.sin(time * star.twinkleSpeed * 50));
                }
                else {
                    // Full twinkling effect
                    var twinkle = Math.sin(time * star.twinkleSpeed * 100) * 0.3 + 0.7;
                    currentOpacity = star.opacity * twinkle;
                }
                // Create gradient for glow effect
                var gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.glowIntensity);
                // Different star colors for variety
                var colors = ["#ffffff", "#e6f3ff", "#fff9e6", "#f0e6ff", "#e6ffe6"];
                var color = colors[Math.floor(Math.random() * colors.length)];
                gradient.addColorStop(0, "".concat(color).concat(Math.floor(currentOpacity * 255)
                    .toString(16)
                    .padStart(2, "0")));
                gradient.addColorStop(0.4, "".concat(color).concat(Math.floor(currentOpacity * 0.3 * 255)
                    .toString(16)
                    .padStart(2, "0")));
                gradient.addColorStop(1, "".concat(color, "00"));
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
                }
                else {
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
                    var coreGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size);
                    coreGradient.addColorStop(0, color);
                    coreGradient.addColorStop(0.7, "".concat(color, "cc"));
                    coreGradient.addColorStop(1, "".concat(color, "00"));
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
        return function () {
            window.removeEventListener("resize", throttledResize);
            clearTimeout(resizeTimeout);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("canvas", { ref: canvasRef, className: "absolute inset-0 w-full h-full pointer-events-none", style: {
            background: "transparent",
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        } }));
};
exports.default = GlowingStars;
