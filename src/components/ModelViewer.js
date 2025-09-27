"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var drei_1 = require("@react-three/drei");
var OBJLoader_1 = require("three/examples/jsm/loaders/OBJLoader");
var THREE = __importStar(require("three"));
var isMeshObject = function (object) {
    return "isMesh" in object && object.isMesh === true;
};
var isLightObject = function (object) {
    return "isLight" in object && object.isLight === true;
};
var isTouch = typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);
var deg2rad = function (d) { return (d * Math.PI) / 180; };
var DECIDE = 8; // px before we decide horizontal vs vertical
var ROTATE_SPEED = 0.005;
var INERTIA = 0.925;
var PARALLAX_MAG = 0.05;
var PARALLAX_EASE = 0.12;
var HOVER_MAG = deg2rad(6);
var HOVER_EASE = 0.15;
var Loader = function (_a) {
    var placeholderSrc = _a.placeholderSrc;
    var _b = (0, drei_1.useProgress)(), progress = _b.progress, active = _b.active;
    if (!active && placeholderSrc)
        return null;
    return ((0, jsx_runtime_1.jsx)(drei_1.Html, { center: true, children: placeholderSrc ? ((0, jsx_runtime_1.jsx)("img", { src: placeholderSrc, width: 128, height: 128, style: { filter: "blur(8px)", borderRadius: 8 } })) : ("".concat(Math.round(progress), " %")) }));
};
var DesktopControls = function (_a) {
    var pivot = _a.pivot, min = _a.min, max = _a.max, zoomEnabled = _a.zoomEnabled;
    var ref = (0, react_1.useRef)(null);
    (0, fiber_1.useFrame)(function () { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.target.copy(pivot); });
    return ((0, jsx_runtime_1.jsx)(drei_1.OrbitControls, { ref: ref, makeDefault: true, enablePan: false, enableRotate: false, enableZoom: zoomEnabled, minDistance: min, maxDistance: max }));
};
var ModelInner = function (_a) {
    var url = _a.url, xOff = _a.xOff, yOff = _a.yOff, pivot = _a.pivot, initYaw = _a.initYaw, initPitch = _a.initPitch, minZoom = _a.minZoom, maxZoom = _a.maxZoom, enableMouseParallax = _a.enableMouseParallax, enableManualRotation = _a.enableManualRotation, enableHoverRotation = _a.enableHoverRotation, enableManualZoom = _a.enableManualZoom, autoFrame = _a.autoFrame, fadeIn = _a.fadeIn, autoRotate = _a.autoRotate, autoRotateSpeed = _a.autoRotateSpeed, onLoaded = _a.onLoaded;
    var outer = (0, react_1.useRef)(null);
    var inner = (0, react_1.useRef)(null);
    var _b = (0, fiber_1.useThree)(), camera = _b.camera, gl = _b.gl;
    var vel = (0, react_1.useRef)({ x: 0, y: 0 });
    var tPar = (0, react_1.useRef)({ x: 0, y: 0 });
    var cPar = (0, react_1.useRef)({ x: 0, y: 0 });
    var tHov = (0, react_1.useRef)({ x: 0, y: 0 });
    var cHov = (0, react_1.useRef)({ x: 0, y: 0 });
    var ext = (0, react_1.useMemo)(function () { return url.split(".").pop().toLowerCase(); }, [url]);
    var content = (0, react_1.useMemo)(function () {
        if (ext === "glb" || ext === "gltf")
            return (0, drei_1.useGLTF)(url).scene.clone();
        if (ext === "fbx")
            return (0, drei_1.useFBX)(url).clone();
        if (ext === "obj")
            return (0, fiber_1.useLoader)(OBJLoader_1.OBJLoader, url).clone();
        console.error("Unsupported format:", ext);
        return null;
    }, [url, ext]);
    var pivotW = (0, react_1.useRef)(new THREE.Vector3());
    (0, react_1.useLayoutEffect)(function () {
        if (!content)
            return;
        var g = inner.current;
        g.updateWorldMatrix(true, true);
        var sphere = new THREE.Box3()
            .setFromObject(g)
            .getBoundingSphere(new THREE.Sphere());
        var s = 1 / (sphere.radius * 2);
        g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
        g.scale.setScalar(s);
        g.traverse(function (o) {
            if (isMeshObject(o)) {
                o.castShadow = true;
                o.receiveShadow = true;
                if (fadeIn) {
                    var materials = Array.isArray(o.material)
                        ? o.material
                        : [o.material];
                    materials.forEach(function (material) {
                        material.transparent = true;
                        material.opacity = 0;
                    });
                }
            }
        });
        g.getWorldPosition(pivotW.current);
        pivot.copy(pivotW.current);
        outer.current.rotation.set(initPitch, initYaw, 0);
        if (autoFrame && camera.isPerspectiveCamera) {
            var persp = camera;
            var fitR = sphere.radius * s;
            var d = (fitR * 1.2) / Math.sin((persp.fov * Math.PI) / 180 / 2);
            persp.position.set(pivotW.current.x, pivotW.current.y, pivotW.current.z + d);
            persp.near = d / 10;
            persp.far = d * 10;
            persp.updateProjectionMatrix();
        }
        /* optional fade-in */
        if (fadeIn) {
            var t_1 = 0;
            var id_1 = setInterval(function () {
                t_1 += 0.05;
                var v = Math.min(t_1, 1);
                g.traverse(function (o) {
                    if (isMeshObject(o)) {
                        var materials = Array.isArray(o.material)
                            ? o.material
                            : [o.material];
                        materials.forEach(function (material) {
                            material.opacity = v;
                        });
                    }
                });
                (0, fiber_1.invalidate)();
                if (v === 1) {
                    clearInterval(id_1);
                    onLoaded === null || onLoaded === void 0 ? void 0 : onLoaded();
                }
            }, 16);
            return function () { return clearInterval(id_1); };
        }
        else
            onLoaded === null || onLoaded === void 0 ? void 0 : onLoaded();
    }, [content]);
    (0, react_1.useEffect)(function () {
        if (!enableManualRotation || isTouch)
            return;
        var el = gl.domElement;
        var drag = false;
        var lx = 0, ly = 0;
        var down = function (e) {
            if (e.pointerType !== "mouse" && e.pointerType !== "pen")
                return;
            drag = true;
            lx = e.clientX;
            ly = e.clientY;
            window.addEventListener("pointerup", up);
        };
        var move = function (e) {
            if (!drag)
                return;
            var dx = e.clientX - lx;
            var dy = e.clientY - ly;
            lx = e.clientX;
            ly = e.clientY;
            outer.current.rotation.y += dx * ROTATE_SPEED;
            outer.current.rotation.x += dy * ROTATE_SPEED;
            vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
            (0, fiber_1.invalidate)();
        };
        var up = function () { return (drag = false); };
        el.addEventListener("pointerdown", down);
        el.addEventListener("pointermove", move);
        return function () {
            el.removeEventListener("pointerdown", down);
            el.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
        };
    }, [gl, enableManualRotation]);
    (0, react_1.useEffect)(function () {
        if (!isTouch)
            return;
        var el = gl.domElement;
        var pts = new Map();
        var mode = "idle";
        var sx = 0, sy = 0, lx = 0, ly = 0, startDist = 0, startZ = 0;
        var down = function (e) {
            if (e.pointerType !== "touch")
                return;
            pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
            if (pts.size === 1) {
                mode = "decide";
                sx = lx = e.clientX;
                sy = ly = e.clientY;
            }
            else if (pts.size === 2 && enableManualZoom) {
                mode = "pinch";
                var _a = Array.from(pts.values()), p1 = _a[0], p2 = _a[1];
                startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                startZ = camera.position.z;
                e.preventDefault();
            }
            (0, fiber_1.invalidate)();
        };
        var move = function (e) {
            var p = pts.get(e.pointerId);
            if (!p)
                return;
            p.x = e.clientX;
            p.y = e.clientY;
            if (mode === "decide") {
                var dx = e.clientX - sx;
                var dy = e.clientY - sy;
                if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
                    if (enableManualRotation && Math.abs(dx) > Math.abs(dy)) {
                        mode = "rotate";
                        el.setPointerCapture(e.pointerId);
                    }
                    else {
                        mode = "idle";
                        pts.clear();
                    }
                }
            }
            if (mode === "rotate") {
                e.preventDefault();
                var dx = e.clientX - lx;
                var dy = e.clientY - ly;
                lx = e.clientX;
                ly = e.clientY;
                outer.current.rotation.y += dx * ROTATE_SPEED;
                outer.current.rotation.x += dy * ROTATE_SPEED;
                vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
                (0, fiber_1.invalidate)();
            }
            else if (mode === "pinch" && pts.size === 2) {
                e.preventDefault();
                var _a = Array.from(pts.values()), p1 = _a[0], p2 = _a[1];
                var d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                var ratio = startDist / d;
                camera.position.z = THREE.MathUtils.clamp(startZ * ratio, minZoom, maxZoom);
                (0, fiber_1.invalidate)();
            }
        };
        var up = function (e) {
            pts.delete(e.pointerId);
            if (mode === "rotate" && pts.size === 0)
                mode = "idle";
            if (mode === "pinch" && pts.size < 2)
                mode = "idle";
        };
        el.addEventListener("pointerdown", down, { passive: true });
        window.addEventListener("pointermove", move, { passive: false });
        window.addEventListener("pointerup", up, { passive: true });
        window.addEventListener("pointercancel", up, { passive: true });
        return function () {
            el.removeEventListener("pointerdown", down);
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
            window.removeEventListener("pointercancel", up);
        };
    }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);
    (0, react_1.useEffect)(function () {
        if (isTouch)
            return;
        var mm = function (e) {
            if (e.pointerType !== "mouse")
                return;
            var nx = (e.clientX / window.innerWidth) * 2 - 1;
            var ny = (e.clientY / window.innerHeight) * 2 - 1;
            if (enableMouseParallax)
                tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
            if (enableHoverRotation)
                tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
            (0, fiber_1.invalidate)();
        };
        window.addEventListener("pointermove", mm);
        return function () { return window.removeEventListener("pointermove", mm); };
    }, [enableMouseParallax, enableHoverRotation]);
    (0, fiber_1.useFrame)(function (_, dt) {
        var need = false;
        cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
        cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
        var phx = cHov.current.x, phy = cHov.current.y;
        cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
        cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;
        var ndc = pivotW.current.clone().project(camera);
        ndc.x += xOff + cPar.current.x;
        ndc.y += yOff + cPar.current.y;
        outer.current.position.copy(ndc.unproject(camera));
        outer.current.rotation.x += cHov.current.x - phx;
        outer.current.rotation.y += cHov.current.y - phy;
        if (autoRotate) {
            outer.current.rotation.y += autoRotateSpeed * dt;
            need = true;
        }
        outer.current.rotation.y += vel.current.x;
        outer.current.rotation.x += vel.current.y;
        vel.current.x *= INERTIA;
        vel.current.y *= INERTIA;
        if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4)
            need = true;
        if (Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
            Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
            Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
            Math.abs(cHov.current.y - tHov.current.y) > 1e-4)
            need = true;
        if (need)
            (0, fiber_1.invalidate)();
    });
    if (!content)
        return null;
    return ((0, jsx_runtime_1.jsx)("group", { ref: outer, children: (0, jsx_runtime_1.jsx)("group", { ref: inner, children: (0, jsx_runtime_1.jsx)("primitive", { object: content }) }) }));
};
var ModelViewer = function (_a) {
    var url = _a.url, _b = _a.width, width = _b === void 0 ? 400 : _b, _c = _a.height, height = _c === void 0 ? 400 : _c, _d = _a.modelXOffset, modelXOffset = _d === void 0 ? 0 : _d, _e = _a.modelYOffset, modelYOffset = _e === void 0 ? 0 : _e, _f = _a.defaultRotationX, defaultRotationX = _f === void 0 ? -50 : _f, _g = _a.defaultRotationY, defaultRotationY = _g === void 0 ? 20 : _g, _h = _a.defaultZoom, defaultZoom = _h === void 0 ? 0.5 : _h, _j = _a.minZoomDistance, minZoomDistance = _j === void 0 ? 0.5 : _j, _k = _a.maxZoomDistance, maxZoomDistance = _k === void 0 ? 10 : _k, _l = _a.enableMouseParallax, enableMouseParallax = _l === void 0 ? true : _l, _m = _a.enableManualRotation, enableManualRotation = _m === void 0 ? true : _m, _o = _a.enableHoverRotation, enableHoverRotation = _o === void 0 ? true : _o, _p = _a.enableManualZoom, enableManualZoom = _p === void 0 ? true : _p, _q = _a.ambientIntensity, ambientIntensity = _q === void 0 ? 0.3 : _q, _r = _a.keyLightIntensity, keyLightIntensity = _r === void 0 ? 1 : _r, _s = _a.fillLightIntensity, fillLightIntensity = _s === void 0 ? 0.5 : _s, _t = _a.rimLightIntensity, rimLightIntensity = _t === void 0 ? 0.8 : _t, _u = _a.environmentPreset, environmentPreset = _u === void 0 ? "forest" : _u, _v = _a.autoFrame, autoFrame = _v === void 0 ? false : _v, placeholderSrc = _a.placeholderSrc, _w = _a.showScreenshotButton, showScreenshotButton = _w === void 0 ? true : _w, _x = _a.fadeIn, fadeIn = _x === void 0 ? false : _x, _y = _a.autoRotate, autoRotate = _y === void 0 ? false : _y, _z = _a.autoRotateSpeed, autoRotateSpeed = _z === void 0 ? 0.35 : _z, onModelLoaded = _a.onModelLoaded;
    (0, react_1.useEffect)(function () { return void drei_1.useGLTF.preload(url); }, [url]);
    var pivot = (0, react_1.useRef)(new THREE.Vector3()).current;
    var contactRef = (0, react_1.useRef)(null);
    var rendererRef = (0, react_1.useRef)(null);
    var sceneRef = (0, react_1.useRef)(null);
    var cameraRef = (0, react_1.useRef)(null);
    var initYaw = deg2rad(defaultRotationX);
    var initPitch = deg2rad(defaultRotationY);
    var camZ = Math.min(Math.max(defaultZoom, minZoomDistance), maxZoomDistance);
    var capture = function () {
        var g = rendererRef.current, s = sceneRef.current, c = cameraRef.current;
        if (!g || !s || !c)
            return;
        g.shadowMap.enabled = false;
        var tmp = [];
        s.traverse(function (o) {
            if (isLightObject(o)) {
                tmp.push({ l: o, cast: o.castShadow });
                o.castShadow = false;
            }
        });
        if (contactRef.current)
            contactRef.current.visible = false;
        g.render(s, c);
        var urlPNG = g.domElement.toDataURL("image/png");
        var a = document.createElement("a");
        a.download = "model.png";
        a.href = urlPNG;
        a.click();
        g.shadowMap.enabled = true;
        tmp.forEach(function (_a) {
            var l = _a.l, cast = _a.cast;
            return (l.castShadow = cast);
        });
        if (contactRef.current)
            contactRef.current.visible = true;
        (0, fiber_1.invalidate)();
    };
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            width: width,
            height: height,
            position: "relative",
            touchAction: "pan-y pinch-zoom",
        }, children: [showScreenshotButton && ((0, jsx_runtime_1.jsx)("button", { onClick: capture, style: {
                    position: "absolute",
                    border: "1px solid #fff",
                    right: 16,
                    top: 16,
                    zIndex: 10,
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: 10,
                }, children: "Take Screenshot" })), (0, jsx_runtime_1.jsxs)(fiber_1.Canvas, { shadows: true, frameloop: "demand", gl: { preserveDrawingBuffer: true }, onCreated: function (_a) {
                    var gl = _a.gl, scene = _a.scene, camera = _a.camera;
                    rendererRef.current = gl;
                    sceneRef.current = scene;
                    cameraRef.current = camera;
                    gl.toneMapping = THREE.ACESFilmicToneMapping;
                    gl.outputColorSpace = THREE.SRGBColorSpace;
                }, camera: { fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }, style: { touchAction: "pan-y pinch-zoom" }, children: [environmentPreset !== "none" && ((0, jsx_runtime_1.jsx)(drei_1.Environment, { preset: environmentPreset, background: false })), (0, jsx_runtime_1.jsx)("ambientLight", { intensity: ambientIntensity }), (0, jsx_runtime_1.jsx)("directionalLight", { position: [5, 5, 5], intensity: keyLightIntensity, castShadow: true }), (0, jsx_runtime_1.jsx)("directionalLight", { position: [-5, 2, 5], intensity: fillLightIntensity }), (0, jsx_runtime_1.jsx)("directionalLight", { position: [0, 4, -5], intensity: rimLightIntensity }), (0, jsx_runtime_1.jsx)(drei_1.ContactShadows, { ref: contactRef, position: [0, -0.5, 0], opacity: 0.35, scale: 10, blur: 2 }), (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(Loader, { placeholderSrc: placeholderSrc }), children: (0, jsx_runtime_1.jsx)(ModelInner, { url: url, xOff: modelXOffset, yOff: modelYOffset, pivot: pivot, initYaw: initYaw, initPitch: initPitch, minZoom: minZoomDistance, maxZoom: maxZoomDistance, enableMouseParallax: enableMouseParallax, enableManualRotation: enableManualRotation, enableHoverRotation: enableHoverRotation, enableManualZoom: enableManualZoom, autoFrame: autoFrame, fadeIn: fadeIn, autoRotate: autoRotate, autoRotateSpeed: autoRotateSpeed, onLoaded: onModelLoaded }) }), !isTouch && ((0, jsx_runtime_1.jsx)(DesktopControls, { pivot: pivot, min: minZoomDistance, max: maxZoomDistance, zoomEnabled: enableManualZoom }))] })] }));
};
exports.default = ModelViewer;
