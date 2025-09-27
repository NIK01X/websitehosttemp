"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Aurora;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ogl_1 = require("ogl");
require("./Aurora.css");
var VERT = "#version 300 es\nin vec2 position;\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n}\n";
var FRAG = "#version 300 es\nprecision highp float;\n\nuniform float uTime;\nuniform float uAmplitude;\nuniform vec3 uColorStops[3];\nuniform vec2 uResolution;\nuniform float uBlend;\n\nout vec4 fragColor;\n\nvec3 permute(vec3 x) {\n  return mod(((x * 34.0) + 1.0) * x, 289.0);\n}\n\nfloat snoise(vec2 v){\n  const vec4 C = vec4(\n      0.211324865405187, 0.366025403784439,\n      -0.577350269189626, 0.024390243902439\n  );\n  vec2 i  = floor(v + dot(v, C.yy));\n  vec2 x0 = v - i + dot(i, C.xx);\n  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod(i, 289.0);\n\n  vec3 p = permute(\n      permute(i.y + vec3(0.0, i1.y, 1.0))\n    + i.x + vec3(0.0, i1.x, 1.0)\n  );\n\n  vec3 m = max(\n      0.5 - vec3(\n          dot(x0, x0),\n          dot(x12.xy, x12.xy),\n          dot(x12.zw, x12.zw)\n      ), \n      0.0\n  );\n  m = m * m;\n  m = m * m;\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);\n\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nstruct ColorStop {\n  vec3 color;\n  float position;\n};\n\n#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / uResolution;\n  \n  ColorStop colors[3];\n  colors[0] = ColorStop(uColorStops[0], 0.0);\n  colors[1] = ColorStop(uColorStops[1], 0.5);\n  colors[2] = ColorStop(uColorStops[2], 1.0);\n  \n  vec3 rampColor;\n  COLOR_RAMP(colors, uv.x, rampColor);\n  \n  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;\n  height = exp(height);\n  height = (uv.y * 2.0 - height + 0.2);\n  float intensity = 0.6 * height;\n  \n  float midPoint = 0.20;\n  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);\n  \n  vec3 auroraColor = intensity * rampColor;\n  \n  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);\n}\n";
function Aurora(props) {
    var _a = props.colorStops, colorStops = _a === void 0 ? ['#5227FF', '#7cff67', '#5227FF'] : _a, _b = props.amplitude, amplitude = _b === void 0 ? 1.0 : _b, _c = props.blend, blend = _c === void 0 ? 0.5 : _c;
    var propsRef = (0, react_1.useRef)(props);
    propsRef.current = props;
    var ctnDom = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var ctn = ctnDom.current;
        if (!ctn)
            return;
        var renderer = new ogl_1.Renderer({
            alpha: true,
            premultipliedAlpha: true,
            antialias: true
        });
        var gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.canvas.style.backgroundColor = 'transparent';
        var program;
        function resize() {
            if (!ctn)
                return;
            var width = ctn.offsetWidth;
            var height = ctn.offsetHeight;
            renderer.setSize(width, height);
            if (program) {
                program.uniforms.uResolution.value = [width, height];
            }
        }
        window.addEventListener('resize', resize);
        var geometry = new ogl_1.Triangle(gl);
        if (geometry.attributes.uv) {
            delete geometry.attributes.uv;
        }
        var colorStopsArray = colorStops.map(function (hex) {
            var c = new ogl_1.Color(hex);
            return [c.r, c.g, c.b];
        });
        program = new ogl_1.Program(gl, {
            vertex: VERT,
            fragment: FRAG,
            uniforms: {
                uTime: { value: 0 },
                uAmplitude: { value: amplitude },
                uColorStops: { value: colorStopsArray },
                uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
                uBlend: { value: blend }
            }
        });
        var mesh = new ogl_1.Mesh(gl, { geometry: geometry, program: program });
        ctn.appendChild(gl.canvas);
        var animateId = 0;
        var update = function (t) {
            var _a, _b, _c;
            animateId = requestAnimationFrame(update);
            var _d = propsRef.current, _e = _d.time, time = _e === void 0 ? t * 0.01 : _e, _f = _d.speed, speed = _f === void 0 ? 1.0 : _f;
            if (program) {
                program.uniforms.uTime.value = time * speed * 0.1;
                program.uniforms.uAmplitude.value = (_a = propsRef.current.amplitude) !== null && _a !== void 0 ? _a : 1.0;
                program.uniforms.uBlend.value = (_b = propsRef.current.blend) !== null && _b !== void 0 ? _b : blend;
                var stops = (_c = propsRef.current.colorStops) !== null && _c !== void 0 ? _c : colorStops;
                program.uniforms.uColorStops.value = stops.map(function (hex) {
                    var c = new ogl_1.Color(hex);
                    return [c.r, c.g, c.b];
                });
                renderer.render({ scene: mesh });
            }
        };
        animateId = requestAnimationFrame(update);
        resize();
        return function () {
            var _a;
            cancelAnimationFrame(animateId);
            window.removeEventListener('resize', resize);
            if (ctn && gl.canvas.parentNode === ctn) {
                ctn.removeChild(gl.canvas);
            }
            (_a = gl.getExtension('WEBGL_lose_context')) === null || _a === void 0 ? void 0 : _a.loseContext();
        };
    }, [amplitude]);
    return (0, jsx_runtime_1.jsx)("div", { ref: ctnDom, className: "aurora-container" });
}
