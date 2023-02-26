var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// react-import.ts
var import_react;
var init_react_import = __esm({
  "react-import.ts"() {
    import_react = __toESM(require("react"));
  }
});

// ../../node_modules/chroma-js/chroma.js
var require_chroma = __commonJS({
  "../../node_modules/chroma-js/chroma.js"(exports, module2) {
    init_react_import();
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.chroma = factory());
    })(exports, function() {
      "use strict";
      var limit$2 = /* @__PURE__ */ __name(function(x, min3, max3) {
        if (min3 === void 0)
          min3 = 0;
        if (max3 === void 0)
          max3 = 1;
        return x < min3 ? min3 : x > max3 ? max3 : x;
      }, "limit$2");
      var limit$1 = limit$2;
      var clip_rgb$3 = /* @__PURE__ */ __name(function(rgb2) {
        rgb2._clipped = false;
        rgb2._unclipped = rgb2.slice(0);
        for (var i2 = 0; i2 <= 3; i2++) {
          if (i2 < 3) {
            if (rgb2[i2] < 0 || rgb2[i2] > 255) {
              rgb2._clipped = true;
            }
            rgb2[i2] = limit$1(rgb2[i2], 0, 255);
          } else if (i2 === 3) {
            rgb2[i2] = limit$1(rgb2[i2], 0, 1);
          }
        }
        return rgb2;
      }, "clip_rgb$3");
      var classToType = {};
      for (var i$1 = 0, list$1 = [
        "Boolean",
        "Number",
        "String",
        "Function",
        "Array",
        "Date",
        "RegExp",
        "Undefined",
        "Null"
      ]; i$1 < list$1.length; i$1 += 1) {
        var name = list$1[i$1];
        classToType["[object " + name + "]"] = name.toLowerCase();
      }
      var type$p = /* @__PURE__ */ __name(function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
      }, "type$p");
      var type$o = type$p;
      var unpack$B = /* @__PURE__ */ __name(function(args, keyOrder) {
        if (keyOrder === void 0)
          keyOrder = null;
        if (args.length >= 3) {
          return Array.prototype.slice.call(args);
        }
        if (type$o(args[0]) == "object" && keyOrder) {
          return keyOrder.split("").filter(function(k) {
            return args[0][k] !== void 0;
          }).map(function(k) {
            return args[0][k];
          });
        }
        return args[0];
      }, "unpack$B");
      var type$n = type$p;
      var last$4 = /* @__PURE__ */ __name(function(args) {
        if (args.length < 2) {
          return null;
        }
        var l = args.length - 1;
        if (type$n(args[l]) == "string") {
          return args[l].toLowerCase();
        }
        return null;
      }, "last$4");
      var PI$2 = Math.PI;
      var utils = {
        clip_rgb: clip_rgb$3,
        limit: limit$2,
        type: type$p,
        unpack: unpack$B,
        last: last$4,
        PI: PI$2,
        TWOPI: PI$2 * 2,
        PITHIRD: PI$2 / 3,
        DEG2RAD: PI$2 / 180,
        RAD2DEG: 180 / PI$2
      };
      var input$h = {
        format: {},
        autodetect: []
      };
      var last$3 = utils.last;
      var clip_rgb$2 = utils.clip_rgb;
      var type$m = utils.type;
      var _input = input$h;
      var Color$D = /* @__PURE__ */ __name(function Color2() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var me = this;
        if (type$m(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
          return args[0];
        }
        var mode = last$3(args);
        var autodetect = false;
        if (!mode) {
          autodetect = true;
          if (!_input.sorted) {
            _input.autodetect = _input.autodetect.sort(function(a, b) {
              return b.p - a.p;
            });
            _input.sorted = true;
          }
          for (var i2 = 0, list2 = _input.autodetect; i2 < list2.length; i2 += 1) {
            var chk = list2[i2];
            mode = chk.test.apply(chk, args);
            if (mode) {
              break;
            }
          }
        }
        if (_input.format[mode]) {
          var rgb2 = _input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
          me._rgb = clip_rgb$2(rgb2);
        } else {
          throw new Error("unknown format: " + args);
        }
        if (me._rgb.length === 3) {
          me._rgb.push(1);
        }
      }, "Color");
      Color$D.prototype.toString = /* @__PURE__ */ __name(function toString2() {
        if (type$m(this.hex) == "function") {
          return this.hex();
        }
        return "[" + this._rgb.join(",") + "]";
      }, "toString");
      var Color_1 = Color$D;
      var chroma$k = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(chroma$k.Color, [
          null
        ].concat(args)))();
      }, "chroma$k");
      chroma$k.Color = Color_1;
      chroma$k.version = "2.4.2";
      var chroma_1 = chroma$k;
      var unpack$A = utils.unpack;
      var max$2 = Math.max;
      var rgb2cmyk$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$A(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max$2(r, max$2(g, b));
        var f = k < 1 ? 1 / (1 - k) : 0;
        var c = (1 - r - k) * f;
        var m = (1 - g - k) * f;
        var y = (1 - b - k) * f;
        return [
          c,
          m,
          y,
          k
        ];
      }, "rgb2cmyk$1");
      var rgb2cmyk_1 = rgb2cmyk$1;
      var unpack$z = utils.unpack;
      var cmyk2rgb = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$z(args, "cmyk");
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) {
          return [
            0,
            0,
            0,
            alpha
          ];
        }
        return [
          c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
          m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
          y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
          alpha
        ];
      }, "cmyk2rgb");
      var cmyk2rgb_1 = cmyk2rgb;
      var chroma$j = chroma_1;
      var Color$C = Color_1;
      var input$g = input$h;
      var unpack$y = utils.unpack;
      var type$l = utils.type;
      var rgb2cmyk = rgb2cmyk_1;
      Color$C.prototype.cmyk = function() {
        return rgb2cmyk(this._rgb);
      };
      chroma$j.cmyk = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$C, [
          null
        ].concat(args, [
          "cmyk"
        ])))();
      };
      input$g.format.cmyk = cmyk2rgb_1;
      input$g.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$y(args, "cmyk");
          if (type$l(args) === "array" && args.length === 4) {
            return "cmyk";
          }
        }
      });
      var unpack$x = utils.unpack;
      var last$2 = utils.last;
      var rnd = /* @__PURE__ */ __name(function(a) {
        return Math.round(a * 100) / 100;
      }, "rnd");
      var hsl2css$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var hsla = unpack$x(args, "hsla");
        var mode = last$2(args) || "lsa";
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1] * 100) + "%";
        hsla[2] = rnd(hsla[2] * 100) + "%";
        if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
          hsla[3] = hsla.length > 3 ? hsla[3] : 1;
          mode = "hsla";
        } else {
          hsla.length = 3;
        }
        return mode + "(" + hsla.join(",") + ")";
      }, "hsl2css$1");
      var hsl2css_1 = hsl2css$1;
      var unpack$w = utils.unpack;
      var rgb2hsl$3 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$w(args, "rgba");
        var r = args[0];
        var g = args[1];
        var b = args[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var min3 = Math.min(r, g, b);
        var max3 = Math.max(r, g, b);
        var l = (max3 + min3) / 2;
        var s, h;
        if (max3 === min3) {
          s = 0;
          h = Number.NaN;
        } else {
          s = l < 0.5 ? (max3 - min3) / (max3 + min3) : (max3 - min3) / (2 - max3 - min3);
        }
        if (r == max3) {
          h = (g - b) / (max3 - min3);
        } else if (g == max3) {
          h = 2 + (b - r) / (max3 - min3);
        } else if (b == max3) {
          h = 4 + (r - g) / (max3 - min3);
        }
        h *= 60;
        if (h < 0) {
          h += 360;
        }
        if (args.length > 3 && args[3] !== void 0) {
          return [
            h,
            s,
            l,
            args[3]
          ];
        }
        return [
          h,
          s,
          l
        ];
      }, "rgb2hsl$3");
      var rgb2hsl_1 = rgb2hsl$3;
      var unpack$v = utils.unpack;
      var last$1 = utils.last;
      var hsl2css = hsl2css_1;
      var rgb2hsl$2 = rgb2hsl_1;
      var round$6 = Math.round;
      var rgb2css$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var rgba = unpack$v(args, "rgba");
        var mode = last$1(args) || "rgb";
        if (mode.substr(0, 3) == "hsl") {
          return hsl2css(rgb2hsl$2(rgba), mode);
        }
        rgba[0] = round$6(rgba[0]);
        rgba[1] = round$6(rgba[1]);
        rgba[2] = round$6(rgba[2]);
        if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
          rgba[3] = rgba.length > 3 ? rgba[3] : 1;
          mode = "rgba";
        }
        return mode + "(" + rgba.slice(0, mode === "rgb" ? 3 : 4).join(",") + ")";
      }, "rgb2css$1");
      var rgb2css_1 = rgb2css$1;
      var unpack$u = utils.unpack;
      var round$5 = Math.round;
      var hsl2rgb$1 = /* @__PURE__ */ __name(function() {
        var assign;
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$u(args, "hsl");
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r, g, b;
        if (s === 0) {
          r = g = b = l * 255;
        } else {
          var t3 = [
            0,
            0,
            0
          ];
          var c = [
            0,
            0,
            0
          ];
          var t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var t1 = 2 * l - t2;
          var h_ = h / 360;
          t3[0] = h_ + 1 / 3;
          t3[1] = h_;
          t3[2] = h_ - 1 / 3;
          for (var i2 = 0; i2 < 3; i2++) {
            if (t3[i2] < 0) {
              t3[i2] += 1;
            }
            if (t3[i2] > 1) {
              t3[i2] -= 1;
            }
            if (6 * t3[i2] < 1) {
              c[i2] = t1 + (t2 - t1) * 6 * t3[i2];
            } else if (2 * t3[i2] < 1) {
              c[i2] = t2;
            } else if (3 * t3[i2] < 2) {
              c[i2] = t1 + (t2 - t1) * (2 / 3 - t3[i2]) * 6;
            } else {
              c[i2] = t1;
            }
          }
          assign = [
            round$5(c[0] * 255),
            round$5(c[1] * 255),
            round$5(c[2] * 255)
          ], r = assign[0], g = assign[1], b = assign[2];
        }
        if (args.length > 3) {
          return [
            r,
            g,
            b,
            args[3]
          ];
        }
        return [
          r,
          g,
          b,
          1
        ];
      }, "hsl2rgb$1");
      var hsl2rgb_1 = hsl2rgb$1;
      var hsl2rgb = hsl2rgb_1;
      var input$f = input$h;
      var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
      var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var round$4 = Math.round;
      var css2rgb$1 = /* @__PURE__ */ __name(function(css) {
        css = css.toLowerCase().trim();
        var m;
        if (input$f.format.named) {
          try {
            return input$f.format.named(css);
          } catch (e) {
          }
        }
        if (m = css.match(RE_RGB)) {
          var rgb2 = m.slice(1, 4);
          for (var i2 = 0; i2 < 3; i2++) {
            rgb2[i2] = +rgb2[i2];
          }
          rgb2[3] = 1;
          return rgb2;
        }
        if (m = css.match(RE_RGBA)) {
          var rgb$1 = m.slice(1, 5);
          for (var i$12 = 0; i$12 < 4; i$12++) {
            rgb$1[i$12] = +rgb$1[i$12];
          }
          return rgb$1;
        }
        if (m = css.match(RE_RGB_PCT)) {
          var rgb$2 = m.slice(1, 4);
          for (var i$2 = 0; i$2 < 3; i$2++) {
            rgb$2[i$2] = round$4(rgb$2[i$2] * 2.55);
          }
          rgb$2[3] = 1;
          return rgb$2;
        }
        if (m = css.match(RE_RGBA_PCT)) {
          var rgb$3 = m.slice(1, 5);
          for (var i$3 = 0; i$3 < 3; i$3++) {
            rgb$3[i$3] = round$4(rgb$3[i$3] * 2.55);
          }
          rgb$3[3] = +rgb$3[3];
          return rgb$3;
        }
        if (m = css.match(RE_HSL)) {
          var hsl2 = m.slice(1, 4);
          hsl2[1] *= 0.01;
          hsl2[2] *= 0.01;
          var rgb$4 = hsl2rgb(hsl2);
          rgb$4[3] = 1;
          return rgb$4;
        }
        if (m = css.match(RE_HSLA)) {
          var hsl$1 = m.slice(1, 4);
          hsl$1[1] *= 0.01;
          hsl$1[2] *= 0.01;
          var rgb$5 = hsl2rgb(hsl$1);
          rgb$5[3] = +m[4];
          return rgb$5;
        }
      }, "css2rgb$1");
      css2rgb$1.test = function(s) {
        return RE_RGB.test(s) || RE_RGBA.test(s) || RE_RGB_PCT.test(s) || RE_RGBA_PCT.test(s) || RE_HSL.test(s) || RE_HSLA.test(s);
      };
      var css2rgb_1 = css2rgb$1;
      var chroma$i = chroma_1;
      var Color$B = Color_1;
      var input$e = input$h;
      var type$k = utils.type;
      var rgb2css = rgb2css_1;
      var css2rgb = css2rgb_1;
      Color$B.prototype.css = function(mode) {
        return rgb2css(this._rgb, mode);
      };
      chroma$i.css = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$B, [
          null
        ].concat(args, [
          "css"
        ])))();
      };
      input$e.format.css = css2rgb;
      input$e.autodetect.push({
        p: 5,
        test: function(h) {
          var rest2 = [], len = arguments.length - 1;
          while (len-- > 0)
            rest2[len] = arguments[len + 1];
          if (!rest2.length && type$k(h) === "string" && css2rgb.test(h)) {
            return "css";
          }
        }
      });
      var Color$A = Color_1;
      var chroma$h = chroma_1;
      var input$d = input$h;
      var unpack$t = utils.unpack;
      input$d.format.gl = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var rgb2 = unpack$t(args, "rgba");
        rgb2[0] *= 255;
        rgb2[1] *= 255;
        rgb2[2] *= 255;
        return rgb2;
      };
      chroma$h.gl = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$A, [
          null
        ].concat(args, [
          "gl"
        ])))();
      };
      Color$A.prototype.gl = function() {
        var rgb2 = this._rgb;
        return [
          rgb2[0] / 255,
          rgb2[1] / 255,
          rgb2[2] / 255,
          rgb2[3]
        ];
      };
      var unpack$s = utils.unpack;
      var rgb2hcg$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$s(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min3 = Math.min(r, g, b);
        var max3 = Math.max(r, g, b);
        var delta = max3 - min3;
        var c = delta * 100 / 255;
        var _g = min3 / (255 - delta) * 100;
        var h;
        if (delta === 0) {
          h = Number.NaN;
        } else {
          if (r === max3) {
            h = (g - b) / delta;
          }
          if (g === max3) {
            h = 2 + (b - r) / delta;
          }
          if (b === max3) {
            h = 4 + (r - g) / delta;
          }
          h *= 60;
          if (h < 0) {
            h += 360;
          }
        }
        return [
          h,
          c,
          _g
        ];
      }, "rgb2hcg$1");
      var rgb2hcg_1 = rgb2hcg$1;
      var unpack$r = utils.unpack;
      var floor$3 = Math.floor;
      var hcg2rgb = /* @__PURE__ */ __name(function() {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$r(args, "hcg");
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r, g, b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) {
          r = g = b = _g;
        } else {
          if (h === 360) {
            h = 0;
          }
          if (h > 360) {
            h -= 360;
          }
          if (h < 0) {
            h += 360;
          }
          h /= 60;
          var i2 = floor$3(h);
          var f = h - i2;
          var p = _g * (1 - c);
          var q = p + _c * (1 - f);
          var t = p + _c * f;
          var v = p + _c;
          switch (i2) {
            case 0:
              assign = [
                v,
                t,
                p
              ], r = assign[0], g = assign[1], b = assign[2];
              break;
            case 1:
              assign$1 = [
                q,
                v,
                p
              ], r = assign$1[0], g = assign$1[1], b = assign$1[2];
              break;
            case 2:
              assign$2 = [
                p,
                v,
                t
              ], r = assign$2[0], g = assign$2[1], b = assign$2[2];
              break;
            case 3:
              assign$3 = [
                p,
                q,
                v
              ], r = assign$3[0], g = assign$3[1], b = assign$3[2];
              break;
            case 4:
              assign$4 = [
                t,
                p,
                v
              ], r = assign$4[0], g = assign$4[1], b = assign$4[2];
              break;
            case 5:
              assign$5 = [
                v,
                p,
                q
              ], r = assign$5[0], g = assign$5[1], b = assign$5[2];
              break;
          }
        }
        return [
          r,
          g,
          b,
          args.length > 3 ? args[3] : 1
        ];
      }, "hcg2rgb");
      var hcg2rgb_1 = hcg2rgb;
      var unpack$q = utils.unpack;
      var type$j = utils.type;
      var chroma$g = chroma_1;
      var Color$z = Color_1;
      var input$c = input$h;
      var rgb2hcg = rgb2hcg_1;
      Color$z.prototype.hcg = function() {
        return rgb2hcg(this._rgb);
      };
      chroma$g.hcg = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$z, [
          null
        ].concat(args, [
          "hcg"
        ])))();
      };
      input$c.format.hcg = hcg2rgb_1;
      input$c.autodetect.push({
        p: 1,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$q(args, "hcg");
          if (type$j(args) === "array" && args.length === 3) {
            return "hcg";
          }
        }
      });
      var unpack$p = utils.unpack;
      var last2 = utils.last;
      var round$3 = Math.round;
      var rgb2hex$2 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$p(args, "rgba");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last2(args) || "auto";
        if (a === void 0) {
          a = 1;
        }
        if (mode === "auto") {
          mode = a < 1 ? "rgba" : "rgb";
        }
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16);
        str = str.substr(str.length - 6);
        var hxa = "0" + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch (mode.toLowerCase()) {
          case "rgba":
            return "#" + str + hxa;
          case "argb":
            return "#" + hxa + str;
          default:
            return "#" + str;
        }
      }, "rgb2hex$2");
      var rgb2hex_1 = rgb2hex$2;
      var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
      var hex2rgb$1 = /* @__PURE__ */ __name(function(hex) {
        if (hex.match(RE_HEX)) {
          if (hex.length === 4 || hex.length === 7) {
            hex = hex.substr(1);
          }
          if (hex.length === 3) {
            hex = hex.split("");
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
          }
          var u = parseInt(hex, 16);
          var r = u >> 16;
          var g = u >> 8 & 255;
          var b = u & 255;
          return [
            r,
            g,
            b,
            1
          ];
        }
        if (hex.match(RE_HEXA)) {
          if (hex.length === 5 || hex.length === 9) {
            hex = hex.substr(1);
          }
          if (hex.length === 4) {
            hex = hex.split("");
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
          }
          var u$1 = parseInt(hex, 16);
          var r$1 = u$1 >> 24 & 255;
          var g$1 = u$1 >> 16 & 255;
          var b$1 = u$1 >> 8 & 255;
          var a = Math.round((u$1 & 255) / 255 * 100) / 100;
          return [
            r$1,
            g$1,
            b$1,
            a
          ];
        }
        throw new Error("unknown hex color: " + hex);
      }, "hex2rgb$1");
      var hex2rgb_1 = hex2rgb$1;
      var chroma$f = chroma_1;
      var Color$y = Color_1;
      var type$i = utils.type;
      var input$b = input$h;
      var rgb2hex$1 = rgb2hex_1;
      Color$y.prototype.hex = function(mode) {
        return rgb2hex$1(this._rgb, mode);
      };
      chroma$f.hex = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$y, [
          null
        ].concat(args, [
          "hex"
        ])))();
      };
      input$b.format.hex = hex2rgb_1;
      input$b.autodetect.push({
        p: 4,
        test: function(h) {
          var rest2 = [], len = arguments.length - 1;
          while (len-- > 0)
            rest2[len] = arguments[len + 1];
          if (!rest2.length && type$i(h) === "string" && [
            3,
            4,
            5,
            6,
            7,
            8,
            9
          ].indexOf(h.length) >= 0) {
            return "hex";
          }
        }
      });
      var unpack$o = utils.unpack;
      var TWOPI$2 = utils.TWOPI;
      var min$2 = Math.min;
      var sqrt$4 = Math.sqrt;
      var acos = Math.acos;
      var rgb2hsi$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$o(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min$2(r, g, b);
        var i2 = (r + g + b) / 3;
        var s = i2 > 0 ? 1 - min_ / i2 : 0;
        if (s === 0) {
          h = NaN;
        } else {
          h = (r - g + (r - b)) / 2;
          h /= sqrt$4((r - g) * (r - g) + (r - b) * (g - b));
          h = acos(h);
          if (b > g) {
            h = TWOPI$2 - h;
          }
          h /= TWOPI$2;
        }
        return [
          h * 360,
          s,
          i2
        ];
      }, "rgb2hsi$1");
      var rgb2hsi_1 = rgb2hsi$1;
      var unpack$n = utils.unpack;
      var limit = utils.limit;
      var TWOPI$1 = utils.TWOPI;
      var PITHIRD = utils.PITHIRD;
      var cos$4 = Math.cos;
      var hsi2rgb = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$n(args, "hsi");
        var h = args[0];
        var s = args[1];
        var i2 = args[2];
        var r, g, b;
        if (isNaN(h)) {
          h = 0;
        }
        if (isNaN(s)) {
          s = 0;
        }
        if (h > 360) {
          h -= 360;
        }
        if (h < 0) {
          h += 360;
        }
        h /= 360;
        if (h < 1 / 3) {
          b = (1 - s) / 3;
          r = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
          g = 1 - (b + r);
        } else if (h < 2 / 3) {
          h -= 1 / 3;
          r = (1 - s) / 3;
          g = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
          b = 1 - (r + g);
        } else {
          h -= 2 / 3;
          g = (1 - s) / 3;
          b = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
          r = 1 - (g + b);
        }
        r = limit(i2 * r * 3);
        g = limit(i2 * g * 3);
        b = limit(i2 * b * 3);
        return [
          r * 255,
          g * 255,
          b * 255,
          args.length > 3 ? args[3] : 1
        ];
      }, "hsi2rgb");
      var hsi2rgb_1 = hsi2rgb;
      var unpack$m = utils.unpack;
      var type$h = utils.type;
      var chroma$e = chroma_1;
      var Color$x = Color_1;
      var input$a = input$h;
      var rgb2hsi = rgb2hsi_1;
      Color$x.prototype.hsi = function() {
        return rgb2hsi(this._rgb);
      };
      chroma$e.hsi = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$x, [
          null
        ].concat(args, [
          "hsi"
        ])))();
      };
      input$a.format.hsi = hsi2rgb_1;
      input$a.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$m(args, "hsi");
          if (type$h(args) === "array" && args.length === 3) {
            return "hsi";
          }
        }
      });
      var unpack$l = utils.unpack;
      var type$g = utils.type;
      var chroma$d = chroma_1;
      var Color$w = Color_1;
      var input$9 = input$h;
      var rgb2hsl$1 = rgb2hsl_1;
      Color$w.prototype.hsl = function() {
        return rgb2hsl$1(this._rgb);
      };
      chroma$d.hsl = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$w, [
          null
        ].concat(args, [
          "hsl"
        ])))();
      };
      input$9.format.hsl = hsl2rgb_1;
      input$9.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$l(args, "hsl");
          if (type$g(args) === "array" && args.length === 3) {
            return "hsl";
          }
        }
      });
      var unpack$k = utils.unpack;
      var min$1 = Math.min;
      var max$1 = Math.max;
      var rgb2hsl = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$k(args, "rgb");
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h, s, v;
        v = max_ / 255;
        if (max_ === 0) {
          h = Number.NaN;
          s = 0;
        } else {
          s = delta / max_;
          if (r === max_) {
            h = (g - b) / delta;
          }
          if (g === max_) {
            h = 2 + (b - r) / delta;
          }
          if (b === max_) {
            h = 4 + (r - g) / delta;
          }
          h *= 60;
          if (h < 0) {
            h += 360;
          }
        }
        return [
          h,
          s,
          v
        ];
      }, "rgb2hsl");
      var rgb2hsv$1 = rgb2hsl;
      var unpack$j = utils.unpack;
      var floor$2 = Math.floor;
      var hsv2rgb = /* @__PURE__ */ __name(function() {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$j(args, "hsv");
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r, g, b;
        v *= 255;
        if (s === 0) {
          r = g = b = v;
        } else {
          if (h === 360) {
            h = 0;
          }
          if (h > 360) {
            h -= 360;
          }
          if (h < 0) {
            h += 360;
          }
          h /= 60;
          var i2 = floor$2(h);
          var f = h - i2;
          var p = v * (1 - s);
          var q = v * (1 - s * f);
          var t = v * (1 - s * (1 - f));
          switch (i2) {
            case 0:
              assign = [
                v,
                t,
                p
              ], r = assign[0], g = assign[1], b = assign[2];
              break;
            case 1:
              assign$1 = [
                q,
                v,
                p
              ], r = assign$1[0], g = assign$1[1], b = assign$1[2];
              break;
            case 2:
              assign$2 = [
                p,
                v,
                t
              ], r = assign$2[0], g = assign$2[1], b = assign$2[2];
              break;
            case 3:
              assign$3 = [
                p,
                q,
                v
              ], r = assign$3[0], g = assign$3[1], b = assign$3[2];
              break;
            case 4:
              assign$4 = [
                t,
                p,
                v
              ], r = assign$4[0], g = assign$4[1], b = assign$4[2];
              break;
            case 5:
              assign$5 = [
                v,
                p,
                q
              ], r = assign$5[0], g = assign$5[1], b = assign$5[2];
              break;
          }
        }
        return [
          r,
          g,
          b,
          args.length > 3 ? args[3] : 1
        ];
      }, "hsv2rgb");
      var hsv2rgb_1 = hsv2rgb;
      var unpack$i = utils.unpack;
      var type$f = utils.type;
      var chroma$c = chroma_1;
      var Color$v = Color_1;
      var input$8 = input$h;
      var rgb2hsv = rgb2hsv$1;
      Color$v.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
      };
      chroma$c.hsv = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$v, [
          null
        ].concat(args, [
          "hsv"
        ])))();
      };
      input$8.format.hsv = hsv2rgb_1;
      input$8.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$i(args, "hsv");
          if (type$f(args) === "array" && args.length === 3) {
            return "hsv";
          }
        }
      });
      var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,
        // D65 standard referent
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 8856452e-9
      };
      var LAB_CONSTANTS$3 = labConstants;
      var unpack$h = utils.unpack;
      var pow$a = Math.pow;
      var rgb2lab$2 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$h(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r, g, b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [
          l < 0 ? 0 : l,
          500 * (x - y),
          200 * (y - z)
        ];
      }, "rgb2lab$2");
      var rgb_xyz = /* @__PURE__ */ __name(function(r) {
        if ((r /= 255) <= 0.04045) {
          return r / 12.92;
        }
        return pow$a((r + 0.055) / 1.055, 2.4);
      }, "rgb_xyz");
      var xyz_lab = /* @__PURE__ */ __name(function(t) {
        if (t > LAB_CONSTANTS$3.t3) {
          return pow$a(t, 1 / 3);
        }
        return t / LAB_CONSTANTS$3.t2 + LAB_CONSTANTS$3.t0;
      }, "xyz_lab");
      var rgb2xyz = /* @__PURE__ */ __name(function(r, g, b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS$3.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / LAB_CONSTANTS$3.Yn);
        var z = xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / LAB_CONSTANTS$3.Zn);
        return [
          x,
          y,
          z
        ];
      }, "rgb2xyz");
      var rgb2lab_1 = rgb2lab$2;
      var LAB_CONSTANTS$2 = labConstants;
      var unpack$g = utils.unpack;
      var pow$9 = Math.pow;
      var lab2rgb$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$g(args, "lab");
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x, y, z, r, g, b_;
        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;
        y = LAB_CONSTANTS$2.Yn * lab_xyz(y);
        x = LAB_CONSTANTS$2.Xn * lab_xyz(x);
        z = LAB_CONSTANTS$2.Zn * lab_xyz(z);
        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
        g = xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
        return [
          r,
          g,
          b_,
          args.length > 3 ? args[3] : 1
        ];
      }, "lab2rgb$1");
      var xyz_rgb = /* @__PURE__ */ __name(function(r) {
        return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * pow$9(r, 1 / 2.4) - 0.055);
      }, "xyz_rgb");
      var lab_xyz = /* @__PURE__ */ __name(function(t) {
        return t > LAB_CONSTANTS$2.t1 ? t * t * t : LAB_CONSTANTS$2.t2 * (t - LAB_CONSTANTS$2.t0);
      }, "lab_xyz");
      var lab2rgb_1 = lab2rgb$1;
      var unpack$f = utils.unpack;
      var type$e = utils.type;
      var chroma$b = chroma_1;
      var Color$u = Color_1;
      var input$7 = input$h;
      var rgb2lab$1 = rgb2lab_1;
      Color$u.prototype.lab = function() {
        return rgb2lab$1(this._rgb);
      };
      chroma$b.lab = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$u, [
          null
        ].concat(args, [
          "lab"
        ])))();
      };
      input$7.format.lab = lab2rgb_1;
      input$7.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$f(args, "lab");
          if (type$e(args) === "array" && args.length === 3) {
            return "lab";
          }
        }
      });
      var unpack$e = utils.unpack;
      var RAD2DEG = utils.RAD2DEG;
      var sqrt$3 = Math.sqrt;
      var atan2$2 = Math.atan2;
      var round$2 = Math.round;
      var lab2lch$2 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$e(args, "lab");
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$3(a * a + b * b);
        var h = (atan2$2(b, a) * RAD2DEG + 360) % 360;
        if (round$2(c * 1e4) === 0) {
          h = Number.NaN;
        }
        return [
          l,
          c,
          h
        ];
      }, "lab2lch$2");
      var lab2lch_1 = lab2lch$2;
      var unpack$d = utils.unpack;
      var rgb2lab = rgb2lab_1;
      var lab2lch$1 = lab2lch_1;
      var rgb2lch$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$d(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch$1(l, a, b_);
      }, "rgb2lch$1");
      var rgb2lch_1 = rgb2lch$1;
      var unpack$c = utils.unpack;
      var DEG2RAD = utils.DEG2RAD;
      var sin$3 = Math.sin;
      var cos$3 = Math.cos;
      var lch2lab$2 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$c(args, "lch");
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) {
          h = 0;
        }
        h = h * DEG2RAD;
        return [
          l,
          cos$3(h) * c,
          sin$3(h) * c
        ];
      }, "lch2lab$2");
      var lch2lab_1 = lch2lab$2;
      var unpack$b = utils.unpack;
      var lch2lab$1 = lch2lab_1;
      var lab2rgb = lab2rgb_1;
      var lch2rgb$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$b(args, "lch");
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab$1(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [
          r,
          g,
          b,
          args.length > 3 ? args[3] : 1
        ];
      }, "lch2rgb$1");
      var lch2rgb_1 = lch2rgb$1;
      var unpack$a = utils.unpack;
      var lch2rgb = lch2rgb_1;
      var hcl2rgb = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var hcl = unpack$a(args, "hcl").reverse();
        return lch2rgb.apply(void 0, hcl);
      }, "hcl2rgb");
      var hcl2rgb_1 = hcl2rgb;
      var unpack$9 = utils.unpack;
      var type$d = utils.type;
      var chroma$a = chroma_1;
      var Color$t = Color_1;
      var input$6 = input$h;
      var rgb2lch = rgb2lch_1;
      Color$t.prototype.lch = function() {
        return rgb2lch(this._rgb);
      };
      Color$t.prototype.hcl = function() {
        return rgb2lch(this._rgb).reverse();
      };
      chroma$a.lch = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$t, [
          null
        ].concat(args, [
          "lch"
        ])))();
      };
      chroma$a.hcl = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$t, [
          null
        ].concat(args, [
          "hcl"
        ])))();
      };
      input$6.format.lch = lch2rgb_1;
      input$6.format.hcl = hcl2rgb_1;
      [
        "lch",
        "hcl"
      ].forEach(function(m) {
        return input$6.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$9(args, m);
            if (type$d(args) === "array" && args.length === 3) {
              return m;
            }
          }
        });
      });
      var w3cx11$1 = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflower: "#6495ed",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        laserlemon: "#ffff54",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrod: "#fafad2",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        maroon2: "#7f0000",
        maroon3: "#b03060",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        purple2: "#7f007f",
        purple3: "#a020f0",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };
      var w3cx11_1 = w3cx11$1;
      var Color$s = Color_1;
      var input$5 = input$h;
      var type$c = utils.type;
      var w3cx11 = w3cx11_1;
      var hex2rgb = hex2rgb_1;
      var rgb2hex = rgb2hex_1;
      Color$s.prototype.name = function() {
        var hex = rgb2hex(this._rgb, "rgb");
        for (var i2 = 0, list2 = Object.keys(w3cx11); i2 < list2.length; i2 += 1) {
          var n = list2[i2];
          if (w3cx11[n] === hex) {
            return n.toLowerCase();
          }
        }
        return hex;
      };
      input$5.format.named = function(name2) {
        name2 = name2.toLowerCase();
        if (w3cx11[name2]) {
          return hex2rgb(w3cx11[name2]);
        }
        throw new Error("unknown color name: " + name2);
      };
      input$5.autodetect.push({
        p: 5,
        test: function(h) {
          var rest2 = [], len = arguments.length - 1;
          while (len-- > 0)
            rest2[len] = arguments[len + 1];
          if (!rest2.length && type$c(h) === "string" && w3cx11[h.toLowerCase()]) {
            return "named";
          }
        }
      });
      var unpack$8 = utils.unpack;
      var rgb2num$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$8(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
      }, "rgb2num$1");
      var rgb2num_1 = rgb2num$1;
      var type$b = utils.type;
      var num2rgb = /* @__PURE__ */ __name(function(num2) {
        if (type$b(num2) == "number" && num2 >= 0 && num2 <= 16777215) {
          var r = num2 >> 16;
          var g = num2 >> 8 & 255;
          var b = num2 & 255;
          return [
            r,
            g,
            b,
            1
          ];
        }
        throw new Error("unknown num color: " + num2);
      }, "num2rgb");
      var num2rgb_1 = num2rgb;
      var chroma$9 = chroma_1;
      var Color$r = Color_1;
      var input$4 = input$h;
      var type$a = utils.type;
      var rgb2num = rgb2num_1;
      Color$r.prototype.num = function() {
        return rgb2num(this._rgb);
      };
      chroma$9.num = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$r, [
          null
        ].concat(args, [
          "num"
        ])))();
      };
      input$4.format.num = num2rgb_1;
      input$4.autodetect.push({
        p: 5,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          if (args.length === 1 && type$a(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
            return "num";
          }
        }
      });
      var chroma$8 = chroma_1;
      var Color$q = Color_1;
      var input$3 = input$h;
      var unpack$7 = utils.unpack;
      var type$9 = utils.type;
      var round$1 = Math.round;
      Color$q.prototype.rgb = function(rnd2) {
        if (rnd2 === void 0)
          rnd2 = true;
        if (rnd2 === false) {
          return this._rgb.slice(0, 3);
        }
        return this._rgb.slice(0, 3).map(round$1);
      };
      Color$q.prototype.rgba = function(rnd2) {
        if (rnd2 === void 0)
          rnd2 = true;
        return this._rgb.slice(0, 4).map(function(v, i2) {
          return i2 < 3 ? rnd2 === false ? v : round$1(v) : v;
        });
      };
      chroma$8.rgb = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$q, [
          null
        ].concat(args, [
          "rgb"
        ])))();
      };
      input$3.format.rgb = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var rgba = unpack$7(args, "rgba");
        if (rgba[3] === void 0) {
          rgba[3] = 1;
        }
        return rgba;
      };
      input$3.autodetect.push({
        p: 3,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$7(args, "rgba");
          if (type$9(args) === "array" && (args.length === 3 || args.length === 4 && type$9(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
            return "rgb";
          }
        }
      });
      var log$1 = Math.log;
      var temperature2rgb$1 = /* @__PURE__ */ __name(function(kelvin) {
        var temp = kelvin / 100;
        var r, g, b;
        if (temp < 66) {
          r = 255;
          g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log$1(g);
          b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log$1(b);
        } else {
          r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log$1(r);
          g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log$1(g);
          b = 255;
        }
        return [
          r,
          g,
          b,
          1
        ];
      }, "temperature2rgb$1");
      var temperature2rgb_1 = temperature2rgb$1;
      var temperature2rgb = temperature2rgb_1;
      var unpack$6 = utils.unpack;
      var round = Math.round;
      var rgb2temperature$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var rgb2 = unpack$6(args, "rgb");
        var r = rgb2[0], b = rgb2[2];
        var minTemp = 1e3;
        var maxTemp = 4e4;
        var eps = 0.4;
        var temp;
        while (maxTemp - minTemp > eps) {
          temp = (maxTemp + minTemp) * 0.5;
          var rgb$1 = temperature2rgb(temp);
          if (rgb$1[2] / rgb$1[0] >= b / r) {
            maxTemp = temp;
          } else {
            minTemp = temp;
          }
        }
        return round(temp);
      }, "rgb2temperature$1");
      var rgb2temperature_1 = rgb2temperature$1;
      var chroma$7 = chroma_1;
      var Color$p = Color_1;
      var input$2 = input$h;
      var rgb2temperature = rgb2temperature_1;
      Color$p.prototype.temp = Color$p.prototype.kelvin = Color$p.prototype.temperature = function() {
        return rgb2temperature(this._rgb);
      };
      chroma$7.temp = chroma$7.kelvin = chroma$7.temperature = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$p, [
          null
        ].concat(args, [
          "temp"
        ])))();
      };
      input$2.format.temp = input$2.format.kelvin = input$2.format.temperature = temperature2rgb_1;
      var unpack$5 = utils.unpack;
      var cbrt = Math.cbrt;
      var pow$8 = Math.pow;
      var sign$1 = Math.sign;
      var rgb2oklab$2 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$5(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = [
          rgb2lrgb(r / 255),
          rgb2lrgb(g / 255),
          rgb2lrgb(b / 255)
        ];
        var lr = ref$1[0];
        var lg = ref$1[1];
        var lb = ref$1[2];
        var l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
        var m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
        var s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
        return [
          0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
          1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
          0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
        ];
      }, "rgb2oklab$2");
      var rgb2oklab_1 = rgb2oklab$2;
      function rgb2lrgb(c) {
        var abs2 = Math.abs(c);
        if (abs2 < 0.04045) {
          return c / 12.92;
        }
        return (sign$1(c) || 1) * pow$8((abs2 + 0.055) / 1.055, 2.4);
      }
      __name(rgb2lrgb, "rgb2lrgb");
      var unpack$4 = utils.unpack;
      var pow$7 = Math.pow;
      var sign = Math.sign;
      var oklab2rgb$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$4(args, "lab");
        var L = args[0];
        var a = args[1];
        var b = args[2];
        var l = pow$7(L + 0.3963377774 * a + 0.2158037573 * b, 3);
        var m = pow$7(L - 0.1055613458 * a - 0.0638541728 * b, 3);
        var s = pow$7(L - 0.0894841775 * a - 1.291485548 * b, 3);
        return [
          255 * lrgb2rgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
          255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
          255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
          args.length > 3 ? args[3] : 1
        ];
      }, "oklab2rgb$1");
      var oklab2rgb_1 = oklab2rgb$1;
      function lrgb2rgb(c) {
        var abs2 = Math.abs(c);
        if (abs2 > 31308e-7) {
          return (sign(c) || 1) * (1.055 * pow$7(abs2, 1 / 2.4) - 0.055);
        }
        return c * 12.92;
      }
      __name(lrgb2rgb, "lrgb2rgb");
      var unpack$3 = utils.unpack;
      var type$8 = utils.type;
      var chroma$6 = chroma_1;
      var Color$o = Color_1;
      var input$1 = input$h;
      var rgb2oklab$1 = rgb2oklab_1;
      Color$o.prototype.oklab = function() {
        return rgb2oklab$1(this._rgb);
      };
      chroma$6.oklab = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$o, [
          null
        ].concat(args, [
          "oklab"
        ])))();
      };
      input$1.format.oklab = oklab2rgb_1;
      input$1.autodetect.push({
        p: 3,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$3(args, "oklab");
          if (type$8(args) === "array" && args.length === 3) {
            return "oklab";
          }
        }
      });
      var unpack$2 = utils.unpack;
      var rgb2oklab = rgb2oklab_1;
      var lab2lch = lab2lch_1;
      var rgb2oklch$1 = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$2(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2oklab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch(l, a, b_);
      }, "rgb2oklch$1");
      var rgb2oklch_1 = rgb2oklch$1;
      var unpack$1 = utils.unpack;
      var lch2lab = lch2lab_1;
      var oklab2rgb = oklab2rgb_1;
      var oklch2rgb = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$1(args, "lch");
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = oklab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [
          r,
          g,
          b,
          args.length > 3 ? args[3] : 1
        ];
      }, "oklch2rgb");
      var oklch2rgb_1 = oklch2rgb;
      var unpack = utils.unpack;
      var type$7 = utils.type;
      var chroma$5 = chroma_1;
      var Color$n = Color_1;
      var input = input$h;
      var rgb2oklch = rgb2oklch_1;
      Color$n.prototype.oklch = function() {
        return rgb2oklch(this._rgb);
      };
      chroma$5.oklch = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$n, [
          null
        ].concat(args, [
          "oklch"
        ])))();
      };
      input.format.oklch = oklch2rgb_1;
      input.autodetect.push({
        p: 3,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack(args, "oklch");
          if (type$7(args) === "array" && args.length === 3) {
            return "oklch";
          }
        }
      });
      var Color$m = Color_1;
      var type$6 = utils.type;
      Color$m.prototype.alpha = function(a, mutate) {
        if (mutate === void 0)
          mutate = false;
        if (a !== void 0 && type$6(a) === "number") {
          if (mutate) {
            this._rgb[3] = a;
            return this;
          }
          return new Color$m([
            this._rgb[0],
            this._rgb[1],
            this._rgb[2],
            a
          ], "rgb");
        }
        return this._rgb[3];
      };
      var Color$l = Color_1;
      Color$l.prototype.clipped = function() {
        return this._rgb._clipped || false;
      };
      var Color$k = Color_1;
      var LAB_CONSTANTS$1 = labConstants;
      Color$k.prototype.darken = function(amount) {
        if (amount === void 0)
          amount = 1;
        var me = this;
        var lab2 = me.lab();
        lab2[0] -= LAB_CONSTANTS$1.Kn * amount;
        return new Color$k(lab2, "lab").alpha(me.alpha(), true);
      };
      Color$k.prototype.brighten = function(amount) {
        if (amount === void 0)
          amount = 1;
        return this.darken(-amount);
      };
      Color$k.prototype.darker = Color$k.prototype.darken;
      Color$k.prototype.brighter = Color$k.prototype.brighten;
      var Color$j = Color_1;
      Color$j.prototype.get = function(mc) {
        var ref = mc.split(".");
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
          var i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
          if (i2 > -1) {
            return src[i2];
          }
          throw new Error("unknown channel " + channel + " in mode " + mode);
        } else {
          return src;
        }
      };
      var Color$i = Color_1;
      var type$5 = utils.type;
      var pow$6 = Math.pow;
      var EPS = 1e-7;
      var MAX_ITER = 20;
      Color$i.prototype.luminance = function(lum) {
        if (lum !== void 0 && type$5(lum) === "number") {
          if (lum === 0) {
            return new Color$i([
              0,
              0,
              0,
              this._rgb[3]
            ], "rgb");
          }
          if (lum === 1) {
            return new Color$i([
              255,
              255,
              255,
              this._rgb[3]
            ], "rgb");
          }
          var cur_lum = this.luminance();
          var mode = "rgb";
          var max_iter = MAX_ITER;
          var test = /* @__PURE__ */ __name(function(low, high) {
            var mid = low.interpolate(high, 0.5, mode);
            var lm = mid.luminance();
            if (Math.abs(lum - lm) < EPS || !max_iter--) {
              return mid;
            }
            return lm > lum ? test(low, mid) : test(mid, high);
          }, "test");
          var rgb2 = (cur_lum > lum ? test(new Color$i([
            0,
            0,
            0
          ]), this) : test(this, new Color$i([
            255,
            255,
            255
          ]))).rgb();
          return new Color$i(rgb2.concat([
            this._rgb[3]
          ]));
        }
        return rgb2luminance.apply(void 0, this._rgb.slice(0, 3));
      };
      var rgb2luminance = /* @__PURE__ */ __name(function(r, g, b) {
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      }, "rgb2luminance");
      var luminance_x = /* @__PURE__ */ __name(function(x) {
        x /= 255;
        return x <= 0.03928 ? x / 12.92 : pow$6((x + 0.055) / 1.055, 2.4);
      }, "luminance_x");
      var interpolator$1 = {};
      var Color$h = Color_1;
      var type$4 = utils.type;
      var interpolator = interpolator$1;
      var mix$1 = /* @__PURE__ */ __name(function(col1, col2, f) {
        if (f === void 0)
          f = 0.5;
        var rest2 = [], len = arguments.length - 3;
        while (len-- > 0)
          rest2[len] = arguments[len + 3];
        var mode = rest2[0] || "lrgb";
        if (!interpolator[mode] && !rest2.length) {
          mode = Object.keys(interpolator)[0];
        }
        if (!interpolator[mode]) {
          throw new Error("interpolation mode " + mode + " is not defined");
        }
        if (type$4(col1) !== "object") {
          col1 = new Color$h(col1);
        }
        if (type$4(col2) !== "object") {
          col2 = new Color$h(col2);
        }
        return interpolator[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
      }, "mix$1");
      var Color$g = Color_1;
      var mix = mix$1;
      Color$g.prototype.mix = Color$g.prototype.interpolate = function(col2, f) {
        if (f === void 0)
          f = 0.5;
        var rest2 = [], len = arguments.length - 2;
        while (len-- > 0)
          rest2[len] = arguments[len + 2];
        return mix.apply(void 0, [
          this,
          col2,
          f
        ].concat(rest2));
      };
      var Color$f = Color_1;
      Color$f.prototype.premultiply = function(mutate) {
        if (mutate === void 0)
          mutate = false;
        var rgb2 = this._rgb;
        var a = rgb2[3];
        if (mutate) {
          this._rgb = [
            rgb2[0] * a,
            rgb2[1] * a,
            rgb2[2] * a,
            a
          ];
          return this;
        } else {
          return new Color$f([
            rgb2[0] * a,
            rgb2[1] * a,
            rgb2[2] * a,
            a
          ], "rgb");
        }
      };
      var Color$e = Color_1;
      var LAB_CONSTANTS = labConstants;
      Color$e.prototype.saturate = function(amount) {
        if (amount === void 0)
          amount = 1;
        var me = this;
        var lch2 = me.lch();
        lch2[1] += LAB_CONSTANTS.Kn * amount;
        if (lch2[1] < 0) {
          lch2[1] = 0;
        }
        return new Color$e(lch2, "lch").alpha(me.alpha(), true);
      };
      Color$e.prototype.desaturate = function(amount) {
        if (amount === void 0)
          amount = 1;
        return this.saturate(-amount);
      };
      var Color$d = Color_1;
      var type$3 = utils.type;
      Color$d.prototype.set = function(mc, value, mutate) {
        if (mutate === void 0)
          mutate = false;
        var ref = mc.split(".");
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
          var i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
          if (i2 > -1) {
            if (type$3(value) == "string") {
              switch (value.charAt(0)) {
                case "+":
                  src[i2] += +value;
                  break;
                case "-":
                  src[i2] += +value;
                  break;
                case "*":
                  src[i2] *= +value.substr(1);
                  break;
                case "/":
                  src[i2] /= +value.substr(1);
                  break;
                default:
                  src[i2] = +value;
              }
            } else if (type$3(value) === "number") {
              src[i2] = value;
            } else {
              throw new Error("unsupported value for Color.set");
            }
            var out = new Color$d(src, mode);
            if (mutate) {
              this._rgb = out._rgb;
              return this;
            }
            return out;
          }
          throw new Error("unknown channel " + channel + " in mode " + mode);
        } else {
          return src;
        }
      };
      var Color$c = Color_1;
      var rgb = /* @__PURE__ */ __name(function(col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color$c(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), "rgb");
      }, "rgb");
      interpolator$1.rgb = rgb;
      var Color$b = Color_1;
      var sqrt$2 = Math.sqrt;
      var pow$5 = Math.pow;
      var lrgb = /* @__PURE__ */ __name(function(col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color$b(sqrt$2(pow$5(x1, 2) * (1 - f) + pow$5(x2, 2) * f), sqrt$2(pow$5(y1, 2) * (1 - f) + pow$5(y2, 2) * f), sqrt$2(pow$5(z1, 2) * (1 - f) + pow$5(z2, 2) * f), "rgb");
      }, "lrgb");
      interpolator$1.lrgb = lrgb;
      var Color$a = Color_1;
      var lab = /* @__PURE__ */ __name(function(col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color$a(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), "lab");
      }, "lab");
      interpolator$1.lab = lab;
      var Color$9 = Color_1;
      var _hsx = /* @__PURE__ */ __name(function(col1, col2, f, m) {
        var assign, assign$1;
        var xyz0, xyz1;
        if (m === "hsl") {
          xyz0 = col1.hsl();
          xyz1 = col2.hsl();
        } else if (m === "hsv") {
          xyz0 = col1.hsv();
          xyz1 = col2.hsv();
        } else if (m === "hcg") {
          xyz0 = col1.hcg();
          xyz1 = col2.hcg();
        } else if (m === "hsi") {
          xyz0 = col1.hsi();
          xyz1 = col2.hsi();
        } else if (m === "lch" || m === "hcl") {
          m = "hcl";
          xyz0 = col1.hcl();
          xyz1 = col2.hcl();
        } else if (m === "oklch") {
          xyz0 = col1.oklch().reverse();
          xyz1 = col2.oklch().reverse();
        }
        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === "h" || m === "oklch") {
          assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2];
          assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2];
        }
        var sat, hue, lbv, dh;
        if (!isNaN(hue0) && !isNaN(hue1)) {
          if (hue1 > hue0 && hue1 - hue0 > 180) {
            dh = hue1 - (hue0 + 360);
          } else if (hue1 < hue0 && hue0 - hue1 > 180) {
            dh = hue1 + 360 - hue0;
          } else {
            dh = hue1 - hue0;
          }
          hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
          hue = hue0;
          if ((lbv1 == 1 || lbv1 == 0) && m != "hsv") {
            sat = sat0;
          }
        } else if (!isNaN(hue1)) {
          hue = hue1;
          if ((lbv0 == 1 || lbv0 == 0) && m != "hsv") {
            sat = sat1;
          }
        } else {
          hue = Number.NaN;
        }
        if (sat === void 0) {
          sat = sat0 + f * (sat1 - sat0);
        }
        lbv = lbv0 + f * (lbv1 - lbv0);
        return m === "oklch" ? new Color$9([
          lbv,
          sat,
          hue
        ], m) : new Color$9([
          hue,
          sat,
          lbv
        ], m);
      }, "_hsx");
      var interpolate_hsx$5 = _hsx;
      var lch = /* @__PURE__ */ __name(function(col1, col2, f) {
        return interpolate_hsx$5(col1, col2, f, "lch");
      }, "lch");
      interpolator$1.lch = lch;
      interpolator$1.hcl = lch;
      var Color$8 = Color_1;
      var num = /* @__PURE__ */ __name(function(col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color$8(c1 + f * (c2 - c1), "num");
      }, "num");
      interpolator$1.num = num;
      var interpolate_hsx$4 = _hsx;
      var hcg = /* @__PURE__ */ __name(function(col1, col2, f) {
        return interpolate_hsx$4(col1, col2, f, "hcg");
      }, "hcg");
      interpolator$1.hcg = hcg;
      var interpolate_hsx$3 = _hsx;
      var hsi = /* @__PURE__ */ __name(function(col1, col2, f) {
        return interpolate_hsx$3(col1, col2, f, "hsi");
      }, "hsi");
      interpolator$1.hsi = hsi;
      var interpolate_hsx$2 = _hsx;
      var hsl = /* @__PURE__ */ __name(function(col1, col2, f) {
        return interpolate_hsx$2(col1, col2, f, "hsl");
      }, "hsl");
      interpolator$1.hsl = hsl;
      var interpolate_hsx$1 = _hsx;
      var hsv = /* @__PURE__ */ __name(function(col1, col2, f) {
        return interpolate_hsx$1(col1, col2, f, "hsv");
      }, "hsv");
      interpolator$1.hsv = hsv;
      var Color$7 = Color_1;
      var oklab = /* @__PURE__ */ __name(function(col1, col2, f) {
        var xyz0 = col1.oklab();
        var xyz1 = col2.oklab();
        return new Color$7(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), "oklab");
      }, "oklab");
      interpolator$1.oklab = oklab;
      var interpolate_hsx = _hsx;
      var oklch = /* @__PURE__ */ __name(function(col1, col2, f) {
        return interpolate_hsx(col1, col2, f, "oklch");
      }, "oklch");
      interpolator$1.oklch = oklch;
      var Color$6 = Color_1;
      var clip_rgb$1 = utils.clip_rgb;
      var pow$4 = Math.pow;
      var sqrt$1 = Math.sqrt;
      var PI$1 = Math.PI;
      var cos$2 = Math.cos;
      var sin$2 = Math.sin;
      var atan2$1 = Math.atan2;
      var average = /* @__PURE__ */ __name(function(colors, mode, weights) {
        if (mode === void 0)
          mode = "lrgb";
        if (weights === void 0)
          weights = null;
        var l = colors.length;
        if (!weights) {
          weights = Array.from(new Array(l)).map(function() {
            return 1;
          });
        }
        var k = l / weights.reduce(function(a, b) {
          return a + b;
        });
        weights.forEach(function(w, i3) {
          weights[i3] *= k;
        });
        colors = colors.map(function(c) {
          return new Color$6(c);
        });
        if (mode === "lrgb") {
          return _average_lrgb(colors, weights);
        }
        var first2 = colors.shift();
        var xyz = first2.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        for (var i2 = 0; i2 < xyz.length; i2++) {
          xyz[i2] = (xyz[i2] || 0) * weights[0];
          cnt.push(isNaN(xyz[i2]) ? 0 : weights[0]);
          if (mode.charAt(i2) === "h" && !isNaN(xyz[i2])) {
            var A = xyz[i2] / 180 * PI$1;
            dx += cos$2(A) * weights[0];
            dy += sin$2(A) * weights[0];
          }
        }
        var alpha = first2.alpha() * weights[0];
        colors.forEach(function(c, ci) {
          var xyz2 = c.get(mode);
          alpha += c.alpha() * weights[ci + 1];
          for (var i3 = 0; i3 < xyz.length; i3++) {
            if (!isNaN(xyz2[i3])) {
              cnt[i3] += weights[ci + 1];
              if (mode.charAt(i3) === "h") {
                var A2 = xyz2[i3] / 180 * PI$1;
                dx += cos$2(A2) * weights[ci + 1];
                dy += sin$2(A2) * weights[ci + 1];
              } else {
                xyz[i3] += xyz2[i3] * weights[ci + 1];
              }
            }
          }
        });
        for (var i$12 = 0; i$12 < xyz.length; i$12++) {
          if (mode.charAt(i$12) === "h") {
            var A$1 = atan2$1(dy / cnt[i$12], dx / cnt[i$12]) / PI$1 * 180;
            while (A$1 < 0) {
              A$1 += 360;
            }
            while (A$1 >= 360) {
              A$1 -= 360;
            }
            xyz[i$12] = A$1;
          } else {
            xyz[i$12] = xyz[i$12] / cnt[i$12];
          }
        }
        alpha /= l;
        return new Color$6(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
      }, "average");
      var _average_lrgb = /* @__PURE__ */ __name(function(colors, weights) {
        var l = colors.length;
        var xyz = [
          0,
          0,
          0,
          0
        ];
        for (var i2 = 0; i2 < colors.length; i2++) {
          var col = colors[i2];
          var f = weights[i2] / l;
          var rgb2 = col._rgb;
          xyz[0] += pow$4(rgb2[0], 2) * f;
          xyz[1] += pow$4(rgb2[1], 2) * f;
          xyz[2] += pow$4(rgb2[2], 2) * f;
          xyz[3] += rgb2[3] * f;
        }
        xyz[0] = sqrt$1(xyz[0]);
        xyz[1] = sqrt$1(xyz[1]);
        xyz[2] = sqrt$1(xyz[2]);
        if (xyz[3] > 0.9999999) {
          xyz[3] = 1;
        }
        return new Color$6(clip_rgb$1(xyz));
      }, "_average_lrgb");
      var chroma$4 = chroma_1;
      var type$2 = utils.type;
      var pow$3 = Math.pow;
      var scale$2 = /* @__PURE__ */ __name(function(colors) {
        var _mode = "rgb";
        var _nacol = chroma$4("#ccc");
        var _spread = 0;
        var _domain = [
          0,
          1
        ];
        var _pos = [];
        var _padding = [
          0,
          0
        ];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;
        var setColors = /* @__PURE__ */ __name(function(colors2) {
          colors2 = colors2 || [
            "#fff",
            "#000"
          ];
          if (colors2 && type$2(colors2) === "string" && chroma$4.brewer && chroma$4.brewer[colors2.toLowerCase()]) {
            colors2 = chroma$4.brewer[colors2.toLowerCase()];
          }
          if (type$2(colors2) === "array") {
            if (colors2.length === 1) {
              colors2 = [
                colors2[0],
                colors2[0]
              ];
            }
            colors2 = colors2.slice(0);
            for (var c = 0; c < colors2.length; c++) {
              colors2[c] = chroma$4(colors2[c]);
            }
            _pos.length = 0;
            for (var c$1 = 0; c$1 < colors2.length; c$1++) {
              _pos.push(c$1 / (colors2.length - 1));
            }
          }
          resetCache();
          return _colors = colors2;
        }, "setColors");
        var getClass = /* @__PURE__ */ __name(function(value) {
          if (_classes != null) {
            var n = _classes.length - 1;
            var i2 = 0;
            while (i2 < n && value >= _classes[i2]) {
              i2++;
            }
            return i2 - 1;
          }
          return 0;
        }, "getClass");
        var tMapLightness = /* @__PURE__ */ __name(function(t) {
          return t;
        }, "tMapLightness");
        var tMapDomain = /* @__PURE__ */ __name(function(t) {
          return t;
        }, "tMapDomain");
        var getColor = /* @__PURE__ */ __name(function(val, bypassMap) {
          var col, t;
          if (bypassMap == null) {
            bypassMap = false;
          }
          if (isNaN(val) || val === null) {
            return _nacol;
          }
          if (!bypassMap) {
            if (_classes && _classes.length > 2) {
              var c = getClass(val);
              t = c / (_classes.length - 2);
            } else if (_max !== _min) {
              t = (val - _min) / (_max - _min);
            } else {
              t = 1;
            }
          } else {
            t = val;
          }
          t = tMapDomain(t);
          if (!bypassMap) {
            t = tMapLightness(t);
          }
          if (_gamma !== 1) {
            t = pow$3(t, _gamma);
          }
          t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
          t = Math.min(1, Math.max(0, t));
          var k = Math.floor(t * 1e4);
          if (_useCache && _colorCache[k]) {
            col = _colorCache[k];
          } else {
            if (type$2(_colors) === "array") {
              for (var i2 = 0; i2 < _pos.length; i2++) {
                var p = _pos[i2];
                if (t <= p) {
                  col = _colors[i2];
                  break;
                }
                if (t >= p && i2 === _pos.length - 1) {
                  col = _colors[i2];
                  break;
                }
                if (t > p && t < _pos[i2 + 1]) {
                  t = (t - p) / (_pos[i2 + 1] - p);
                  col = chroma$4.interpolate(_colors[i2], _colors[i2 + 1], t, _mode);
                  break;
                }
              }
            } else if (type$2(_colors) === "function") {
              col = _colors(t);
            }
            if (_useCache) {
              _colorCache[k] = col;
            }
          }
          return col;
        }, "getColor");
        var resetCache = /* @__PURE__ */ __name(function() {
          return _colorCache = {};
        }, "resetCache");
        setColors(colors);
        var f = /* @__PURE__ */ __name(function(v) {
          var c = chroma$4(getColor(v));
          if (_out && c[_out]) {
            return c[_out]();
          } else {
            return c;
          }
        }, "f");
        f.classes = function(classes) {
          if (classes != null) {
            if (type$2(classes) === "array") {
              _classes = classes;
              _domain = [
                classes[0],
                classes[classes.length - 1]
              ];
            } else {
              var d = chroma$4.analyze(_domain);
              if (classes === 0) {
                _classes = [
                  d.min,
                  d.max
                ];
              } else {
                _classes = chroma$4.limits(d, "e", classes);
              }
            }
            return f;
          }
          return _classes;
        };
        f.domain = function(domain) {
          if (!arguments.length) {
            return _domain;
          }
          _min = domain[0];
          _max = domain[domain.length - 1];
          _pos = [];
          var k = _colors.length;
          if (domain.length === k && _min !== _max) {
            for (var i2 = 0, list2 = Array.from(domain); i2 < list2.length; i2 += 1) {
              var d = list2[i2];
              _pos.push((d - _min) / (_max - _min));
            }
          } else {
            for (var c = 0; c < k; c++) {
              _pos.push(c / (k - 1));
            }
            if (domain.length > 2) {
              var tOut = domain.map(function(d2, i3) {
                return i3 / (domain.length - 1);
              });
              var tBreaks = domain.map(function(d2) {
                return (d2 - _min) / (_max - _min);
              });
              if (!tBreaks.every(function(val, i3) {
                return tOut[i3] === val;
              })) {
                tMapDomain = /* @__PURE__ */ __name(function(t) {
                  if (t <= 0 || t >= 1) {
                    return t;
                  }
                  var i3 = 0;
                  while (t >= tBreaks[i3 + 1]) {
                    i3++;
                  }
                  var f2 = (t - tBreaks[i3]) / (tBreaks[i3 + 1] - tBreaks[i3]);
                  var out = tOut[i3] + f2 * (tOut[i3 + 1] - tOut[i3]);
                  return out;
                }, "tMapDomain");
              }
            }
          }
          _domain = [
            _min,
            _max
          ];
          return f;
        };
        f.mode = function(_m) {
          if (!arguments.length) {
            return _mode;
          }
          _mode = _m;
          resetCache();
          return f;
        };
        f.range = function(colors2, _pos2) {
          setColors(colors2);
          return f;
        };
        f.out = function(_o) {
          _out = _o;
          return f;
        };
        f.spread = function(val) {
          if (!arguments.length) {
            return _spread;
          }
          _spread = val;
          return f;
        };
        f.correctLightness = function(v) {
          if (v == null) {
            v = true;
          }
          _correctLightness = v;
          resetCache();
          if (_correctLightness) {
            tMapLightness = /* @__PURE__ */ __name(function(t) {
              var L0 = getColor(0, true).lab()[0];
              var L1 = getColor(1, true).lab()[0];
              var pol = L0 > L1;
              var L_actual = getColor(t, true).lab()[0];
              var L_ideal = L0 + (L1 - L0) * t;
              var L_diff = L_actual - L_ideal;
              var t0 = 0;
              var t1 = 1;
              var max_iter = 20;
              while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
                (function() {
                  if (pol) {
                    L_diff *= -1;
                  }
                  if (L_diff < 0) {
                    t0 = t;
                    t += (t1 - t) * 0.5;
                  } else {
                    t1 = t;
                    t += (t0 - t) * 0.5;
                  }
                  L_actual = getColor(t, true).lab()[0];
                  return L_diff = L_actual - L_ideal;
                })();
              }
              return t;
            }, "tMapLightness");
          } else {
            tMapLightness = /* @__PURE__ */ __name(function(t) {
              return t;
            }, "tMapLightness");
          }
          return f;
        };
        f.padding = function(p) {
          if (p != null) {
            if (type$2(p) === "number") {
              p = [
                p,
                p
              ];
            }
            _padding = p;
            return f;
          } else {
            return _padding;
          }
        };
        f.colors = function(numColors, out) {
          if (arguments.length < 2) {
            out = "hex";
          }
          var result2 = [];
          if (arguments.length === 0) {
            result2 = _colors.slice(0);
          } else if (numColors === 1) {
            result2 = [
              f(0.5)
            ];
          } else if (numColors > 1) {
            var dm = _domain[0];
            var dd = _domain[1] - dm;
            result2 = __range__(0, numColors, false).map(function(i3) {
              return f(dm + i3 / (numColors - 1) * dd);
            });
          } else {
            colors = [];
            var samples = [];
            if (_classes && _classes.length > 2) {
              for (var i2 = 1, end = _classes.length, asc = 1 <= end; asc ? i2 < end : i2 > end; asc ? i2++ : i2--) {
                samples.push((_classes[i2 - 1] + _classes[i2]) * 0.5);
              }
            } else {
              samples = _domain;
            }
            result2 = samples.map(function(v) {
              return f(v);
            });
          }
          if (chroma$4[out]) {
            result2 = result2.map(function(c) {
              return c[out]();
            });
          }
          return result2;
        };
        f.cache = function(c) {
          if (c != null) {
            _useCache = c;
            return f;
          } else {
            return _useCache;
          }
        };
        f.gamma = function(g) {
          if (g != null) {
            _gamma = g;
            return f;
          } else {
            return _gamma;
          }
        };
        f.nodata = function(d) {
          if (d != null) {
            _nacol = chroma$4(d);
            return f;
          } else {
            return _nacol;
          }
        };
        return f;
      }, "scale$2");
      function __range__(left, right, inclusive) {
        var range2 = [];
        var ascending = left < right;
        var end = !inclusive ? right : ascending ? right + 1 : right - 1;
        for (var i2 = left; ascending ? i2 < end : i2 > end; ascending ? i2++ : i2--) {
          range2.push(i2);
        }
        return range2;
      }
      __name(__range__, "__range__");
      var Color$5 = Color_1;
      var scale$1 = scale$2;
      var binom_row = /* @__PURE__ */ __name(function(n) {
        var row = [
          1,
          1
        ];
        for (var i2 = 1; i2 < n; i2++) {
          var newrow = [
            1
          ];
          for (var j = 1; j <= row.length; j++) {
            newrow[j] = (row[j] || 0) + row[j - 1];
          }
          row = newrow;
        }
        return row;
      }, "binom_row");
      var bezier = /* @__PURE__ */ __name(function(colors) {
        var assign, assign$1, assign$2;
        var I, lab0, lab1, lab2;
        colors = colors.map(function(c) {
          return new Color$5(c);
        });
        if (colors.length === 2) {
          assign = colors.map(function(c) {
            return c.lab();
          }), lab0 = assign[0], lab1 = assign[1];
          I = /* @__PURE__ */ __name(function(t) {
            var lab4 = [
              0,
              1,
              2
            ].map(function(i2) {
              return lab0[i2] + t * (lab1[i2] - lab0[i2]);
            });
            return new Color$5(lab4, "lab");
          }, "I");
        } else if (colors.length === 3) {
          assign$1 = colors.map(function(c) {
            return c.lab();
          }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2];
          I = /* @__PURE__ */ __name(function(t) {
            var lab4 = [
              0,
              1,
              2
            ].map(function(i2) {
              return (1 - t) * (1 - t) * lab0[i2] + 2 * (1 - t) * t * lab1[i2] + t * t * lab2[i2];
            });
            return new Color$5(lab4, "lab");
          }, "I");
        } else if (colors.length === 4) {
          var lab3;
          assign$2 = colors.map(function(c) {
            return c.lab();
          }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3];
          I = /* @__PURE__ */ __name(function(t) {
            var lab4 = [
              0,
              1,
              2
            ].map(function(i2) {
              return (1 - t) * (1 - t) * (1 - t) * lab0[i2] + 3 * (1 - t) * (1 - t) * t * lab1[i2] + 3 * (1 - t) * t * t * lab2[i2] + t * t * t * lab3[i2];
            });
            return new Color$5(lab4, "lab");
          }, "I");
        } else if (colors.length >= 5) {
          var labs, row, n;
          labs = colors.map(function(c) {
            return c.lab();
          });
          n = colors.length - 1;
          row = binom_row(n);
          I = /* @__PURE__ */ __name(function(t) {
            var u = 1 - t;
            var lab4 = [
              0,
              1,
              2
            ].map(function(i2) {
              return labs.reduce(function(sum, el, j) {
                return sum + row[j] * Math.pow(u, n - j) * Math.pow(t, j) * el[i2];
              }, 0);
            });
            return new Color$5(lab4, "lab");
          }, "I");
        } else {
          throw new RangeError("No point in running bezier with only one color.");
        }
        return I;
      }, "bezier");
      var bezier_1 = /* @__PURE__ */ __name(function(colors) {
        var f = bezier(colors);
        f.scale = function() {
          return scale$1(f);
        };
        return f;
      }, "bezier_1");
      var chroma$3 = chroma_1;
      var blend = /* @__PURE__ */ __name(function(bottom, top, mode) {
        if (!blend[mode]) {
          throw new Error("unknown blend mode " + mode);
        }
        return blend[mode](bottom, top);
      }, "blend");
      var blend_f = /* @__PURE__ */ __name(function(f) {
        return function(bottom, top) {
          var c0 = chroma$3(top).rgb();
          var c1 = chroma$3(bottom).rgb();
          return chroma$3.rgb(f(c0, c1));
        };
      }, "blend_f");
      var each2 = /* @__PURE__ */ __name(function(f) {
        return function(c0, c1) {
          var out = [];
          out[0] = f(c0[0], c1[0]);
          out[1] = f(c0[1], c1[1]);
          out[2] = f(c0[2], c1[2]);
          return out;
        };
      }, "each");
      var normal = /* @__PURE__ */ __name(function(a) {
        return a;
      }, "normal");
      var multiply = /* @__PURE__ */ __name(function(a, b) {
        return a * b / 255;
      }, "multiply");
      var darken = /* @__PURE__ */ __name(function(a, b) {
        return a > b ? b : a;
      }, "darken");
      var lighten = /* @__PURE__ */ __name(function(a, b) {
        return a > b ? a : b;
      }, "lighten");
      var screen = /* @__PURE__ */ __name(function(a, b) {
        return 255 * (1 - (1 - a / 255) * (1 - b / 255));
      }, "screen");
      var overlay = /* @__PURE__ */ __name(function(a, b) {
        return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
      }, "overlay");
      var burn = /* @__PURE__ */ __name(function(a, b) {
        return 255 * (1 - (1 - b / 255) / (a / 255));
      }, "burn");
      var dodge = /* @__PURE__ */ __name(function(a, b) {
        if (a === 255) {
          return 255;
        }
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a;
      }, "dodge");
      blend.normal = blend_f(each2(normal));
      blend.multiply = blend_f(each2(multiply));
      blend.screen = blend_f(each2(screen));
      blend.overlay = blend_f(each2(overlay));
      blend.darken = blend_f(each2(darken));
      blend.lighten = blend_f(each2(lighten));
      blend.dodge = blend_f(each2(dodge));
      blend.burn = blend_f(each2(burn));
      var blend_1 = blend;
      var type$1 = utils.type;
      var clip_rgb = utils.clip_rgb;
      var TWOPI = utils.TWOPI;
      var pow$2 = Math.pow;
      var sin$1 = Math.sin;
      var cos$1 = Math.cos;
      var chroma$2 = chroma_1;
      var cubehelix = /* @__PURE__ */ __name(function(start, rotations, hue, gamma, lightness) {
        if (start === void 0)
          start = 300;
        if (rotations === void 0)
          rotations = -1.5;
        if (hue === void 0)
          hue = 1;
        if (gamma === void 0)
          gamma = 1;
        if (lightness === void 0)
          lightness = [
            0,
            1
          ];
        var dh = 0, dl;
        if (type$1(lightness) === "array") {
          dl = lightness[1] - lightness[0];
        } else {
          dl = 0;
          lightness = [
            lightness,
            lightness
          ];
        }
        var f = /* @__PURE__ */ __name(function(fract) {
          var a = TWOPI * ((start + 120) / 360 + rotations * fract);
          var l = pow$2(lightness[0] + dl * fract, gamma);
          var h = dh !== 0 ? hue[0] + fract * dh : hue;
          var amp = h * l * (1 - l) / 2;
          var cos_a = cos$1(a);
          var sin_a = sin$1(a);
          var r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
          var g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
          var b = l + amp * (1.97294 * cos_a);
          return chroma$2(clip_rgb([
            r * 255,
            g * 255,
            b * 255,
            1
          ]));
        }, "f");
        f.start = function(s) {
          if (s == null) {
            return start;
          }
          start = s;
          return f;
        };
        f.rotations = function(r) {
          if (r == null) {
            return rotations;
          }
          rotations = r;
          return f;
        };
        f.gamma = function(g) {
          if (g == null) {
            return gamma;
          }
          gamma = g;
          return f;
        };
        f.hue = function(h) {
          if (h == null) {
            return hue;
          }
          hue = h;
          if (type$1(hue) === "array") {
            dh = hue[1] - hue[0];
            if (dh === 0) {
              hue = hue[1];
            }
          } else {
            dh = 0;
          }
          return f;
        };
        f.lightness = function(h) {
          if (h == null) {
            return lightness;
          }
          if (type$1(h) === "array") {
            lightness = h;
            dl = h[1] - h[0];
          } else {
            lightness = [
              h,
              h
            ];
            dl = 0;
          }
          return f;
        };
        f.scale = function() {
          return chroma$2.scale(f);
        };
        f.hue(hue);
        return f;
      }, "cubehelix");
      var Color$4 = Color_1;
      var digits = "0123456789abcdef";
      var floor$1 = Math.floor;
      var random2 = Math.random;
      var random_1 = /* @__PURE__ */ __name(function() {
        var code = "#";
        for (var i2 = 0; i2 < 6; i2++) {
          code += digits.charAt(floor$1(random2() * 16));
        }
        return new Color$4(code, "hex");
      }, "random_1");
      var type = type$p;
      var log = Math.log;
      var pow$1 = Math.pow;
      var floor = Math.floor;
      var abs$1 = Math.abs;
      var analyze = /* @__PURE__ */ __name(function(data, key2) {
        if (key2 === void 0)
          key2 = null;
        var r = {
          min: Number.MAX_VALUE,
          max: Number.MAX_VALUE * -1,
          sum: 0,
          values: [],
          count: 0
        };
        if (type(data) === "object") {
          data = Object.values(data);
        }
        data.forEach(function(val) {
          if (key2 && type(val) === "object") {
            val = val[key2];
          }
          if (val !== void 0 && val !== null && !isNaN(val)) {
            r.values.push(val);
            r.sum += val;
            if (val < r.min) {
              r.min = val;
            }
            if (val > r.max) {
              r.max = val;
            }
            r.count += 1;
          }
        });
        r.domain = [
          r.min,
          r.max
        ];
        r.limits = function(mode, num2) {
          return limits(r, mode, num2);
        };
        return r;
      }, "analyze");
      var limits = /* @__PURE__ */ __name(function(data, mode, num2) {
        if (mode === void 0)
          mode = "equal";
        if (num2 === void 0)
          num2 = 7;
        if (type(data) == "array") {
          data = analyze(data);
        }
        var min3 = data.min;
        var max3 = data.max;
        var values2 = data.values.sort(function(a, b) {
          return a - b;
        });
        if (num2 === 1) {
          return [
            min3,
            max3
          ];
        }
        var limits2 = [];
        if (mode.substr(0, 1) === "c") {
          limits2.push(min3);
          limits2.push(max3);
        }
        if (mode.substr(0, 1) === "e") {
          limits2.push(min3);
          for (var i2 = 1; i2 < num2; i2++) {
            limits2.push(min3 + i2 / num2 * (max3 - min3));
          }
          limits2.push(max3);
        } else if (mode.substr(0, 1) === "l") {
          if (min3 <= 0) {
            throw new Error("Logarithmic scales are only possible for values > 0");
          }
          var min_log = Math.LOG10E * log(min3);
          var max_log = Math.LOG10E * log(max3);
          limits2.push(min3);
          for (var i$12 = 1; i$12 < num2; i$12++) {
            limits2.push(pow$1(10, min_log + i$12 / num2 * (max_log - min_log)));
          }
          limits2.push(max3);
        } else if (mode.substr(0, 1) === "q") {
          limits2.push(min3);
          for (var i$2 = 1; i$2 < num2; i$2++) {
            var p = (values2.length - 1) * i$2 / num2;
            var pb = floor(p);
            if (pb === p) {
              limits2.push(values2[pb]);
            } else {
              var pr = p - pb;
              limits2.push(values2[pb] * (1 - pr) + values2[pb + 1] * pr);
            }
          }
          limits2.push(max3);
        } else if (mode.substr(0, 1) === "k") {
          var cluster;
          var n = values2.length;
          var assignments = new Array(n);
          var clusterSizes = new Array(num2);
          var repeat = true;
          var nb_iters = 0;
          var centroids = null;
          centroids = [];
          centroids.push(min3);
          for (var i$3 = 1; i$3 < num2; i$3++) {
            centroids.push(min3 + i$3 / num2 * (max3 - min3));
          }
          centroids.push(max3);
          while (repeat) {
            for (var j = 0; j < num2; j++) {
              clusterSizes[j] = 0;
            }
            for (var i$4 = 0; i$4 < n; i$4++) {
              var value = values2[i$4];
              var mindist = Number.MAX_VALUE;
              var best = void 0;
              for (var j$1 = 0; j$1 < num2; j$1++) {
                var dist = abs$1(centroids[j$1] - value);
                if (dist < mindist) {
                  mindist = dist;
                  best = j$1;
                }
                clusterSizes[best]++;
                assignments[i$4] = best;
              }
            }
            var newCentroids = new Array(num2);
            for (var j$2 = 0; j$2 < num2; j$2++) {
              newCentroids[j$2] = null;
            }
            for (var i$5 = 0; i$5 < n; i$5++) {
              cluster = assignments[i$5];
              if (newCentroids[cluster] === null) {
                newCentroids[cluster] = values2[i$5];
              } else {
                newCentroids[cluster] += values2[i$5];
              }
            }
            for (var j$3 = 0; j$3 < num2; j$3++) {
              newCentroids[j$3] *= 1 / clusterSizes[j$3];
            }
            repeat = false;
            for (var j$4 = 0; j$4 < num2; j$4++) {
              if (newCentroids[j$4] !== centroids[j$4]) {
                repeat = true;
                break;
              }
            }
            centroids = newCentroids;
            nb_iters++;
            if (nb_iters > 200) {
              repeat = false;
            }
          }
          var kClusters = {};
          for (var j$5 = 0; j$5 < num2; j$5++) {
            kClusters[j$5] = [];
          }
          for (var i$6 = 0; i$6 < n; i$6++) {
            cluster = assignments[i$6];
            kClusters[cluster].push(values2[i$6]);
          }
          var tmpKMeansBreaks = [];
          for (var j$6 = 0; j$6 < num2; j$6++) {
            tmpKMeansBreaks.push(kClusters[j$6][0]);
            tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length - 1]);
          }
          tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
            return a - b;
          });
          limits2.push(tmpKMeansBreaks[0]);
          for (var i$7 = 1; i$7 < tmpKMeansBreaks.length; i$7 += 2) {
            var v = tmpKMeansBreaks[i$7];
            if (!isNaN(v) && limits2.indexOf(v) === -1) {
              limits2.push(v);
            }
          }
        }
        return limits2;
      }, "limits");
      var analyze_1 = {
        analyze,
        limits
      };
      var Color$3 = Color_1;
      var contrast = /* @__PURE__ */ __name(function(a, b) {
        a = new Color$3(a);
        b = new Color$3(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
      }, "contrast");
      var Color$2 = Color_1;
      var sqrt = Math.sqrt;
      var pow = Math.pow;
      var min2 = Math.min;
      var max2 = Math.max;
      var atan2 = Math.atan2;
      var abs = Math.abs;
      var cos = Math.cos;
      var sin = Math.sin;
      var exp = Math.exp;
      var PI = Math.PI;
      var deltaE = /* @__PURE__ */ __name(function(a, b, Kl, Kc, Kh) {
        if (Kl === void 0)
          Kl = 1;
        if (Kc === void 0)
          Kc = 1;
        if (Kh === void 0)
          Kh = 1;
        var rad2deg = /* @__PURE__ */ __name(function(rad) {
          return 360 * rad / (2 * PI);
        }, "rad2deg");
        var deg2rad = /* @__PURE__ */ __name(function(deg) {
          return 2 * PI * deg / 360;
        }, "deg2rad");
        a = new Color$2(a);
        b = new Color$2(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var avgL = (L1 + L2) / 2;
        var C1 = sqrt(pow(a1, 2) + pow(b1, 2));
        var C2 = sqrt(pow(a2, 2) + pow(b2, 2));
        var avgC = (C1 + C2) / 2;
        var G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
        var a1p = a1 * (1 + G);
        var a2p = a2 * (1 + G);
        var C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
        var C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
        var avgCp = (C1p + C2p) / 2;
        var arctan1 = rad2deg(atan2(b1, a1p));
        var arctan2 = rad2deg(atan2(b2, a2p));
        var h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
        var h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
        var avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
        var T = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
        var deltaHp = h2p - h1p;
        deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
        deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
        var deltaL = L2 - L1;
        var deltaCp = C2p - C1p;
        var sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
        var sc = 1 + 0.045 * avgCp;
        var sh = 1 + 0.015 * avgCp * T;
        var deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
        var Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
        var Rt = -Rc * sin(2 * deg2rad(deltaTheta));
        var result2 = sqrt(pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh)));
        return max2(0, min2(100, result2));
      }, "deltaE");
      var Color$1 = Color_1;
      var distance = /* @__PURE__ */ __name(function(a, b, mode) {
        if (mode === void 0)
          mode = "lab";
        a = new Color$1(a);
        b = new Color$1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for (var i2 in l1) {
          var d = (l1[i2] || 0) - (l2[i2] || 0);
          sum_sq += d * d;
        }
        return Math.sqrt(sum_sq);
      }, "distance");
      var Color = Color_1;
      var valid = /* @__PURE__ */ __name(function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        try {
          new (Function.prototype.bind.apply(Color, [
            null
          ].concat(args)))();
          return true;
        } catch (e) {
          return false;
        }
      }, "valid");
      var chroma$1 = chroma_1;
      var scale = scale$2;
      var scales = {
        cool: /* @__PURE__ */ __name(function cool() {
          return scale([
            chroma$1.hsl(180, 1, 0.9),
            chroma$1.hsl(250, 0.7, 0.4)
          ]);
        }, "cool"),
        hot: /* @__PURE__ */ __name(function hot() {
          return scale([
            "#000",
            "#f00",
            "#ff0",
            "#fff"
          ]).mode("rgb");
        }, "hot")
      };
      var colorbrewer = {
        // sequential
        OrRd: [
          "#fff7ec",
          "#fee8c8",
          "#fdd49e",
          "#fdbb84",
          "#fc8d59",
          "#ef6548",
          "#d7301f",
          "#b30000",
          "#7f0000"
        ],
        PuBu: [
          "#fff7fb",
          "#ece7f2",
          "#d0d1e6",
          "#a6bddb",
          "#74a9cf",
          "#3690c0",
          "#0570b0",
          "#045a8d",
          "#023858"
        ],
        BuPu: [
          "#f7fcfd",
          "#e0ecf4",
          "#bfd3e6",
          "#9ebcda",
          "#8c96c6",
          "#8c6bb1",
          "#88419d",
          "#810f7c",
          "#4d004b"
        ],
        Oranges: [
          "#fff5eb",
          "#fee6ce",
          "#fdd0a2",
          "#fdae6b",
          "#fd8d3c",
          "#f16913",
          "#d94801",
          "#a63603",
          "#7f2704"
        ],
        BuGn: [
          "#f7fcfd",
          "#e5f5f9",
          "#ccece6",
          "#99d8c9",
          "#66c2a4",
          "#41ae76",
          "#238b45",
          "#006d2c",
          "#00441b"
        ],
        YlOrBr: [
          "#ffffe5",
          "#fff7bc",
          "#fee391",
          "#fec44f",
          "#fe9929",
          "#ec7014",
          "#cc4c02",
          "#993404",
          "#662506"
        ],
        YlGn: [
          "#ffffe5",
          "#f7fcb9",
          "#d9f0a3",
          "#addd8e",
          "#78c679",
          "#41ab5d",
          "#238443",
          "#006837",
          "#004529"
        ],
        Reds: [
          "#fff5f0",
          "#fee0d2",
          "#fcbba1",
          "#fc9272",
          "#fb6a4a",
          "#ef3b2c",
          "#cb181d",
          "#a50f15",
          "#67000d"
        ],
        RdPu: [
          "#fff7f3",
          "#fde0dd",
          "#fcc5c0",
          "#fa9fb5",
          "#f768a1",
          "#dd3497",
          "#ae017e",
          "#7a0177",
          "#49006a"
        ],
        Greens: [
          "#f7fcf5",
          "#e5f5e0",
          "#c7e9c0",
          "#a1d99b",
          "#74c476",
          "#41ab5d",
          "#238b45",
          "#006d2c",
          "#00441b"
        ],
        YlGnBu: [
          "#ffffd9",
          "#edf8b1",
          "#c7e9b4",
          "#7fcdbb",
          "#41b6c4",
          "#1d91c0",
          "#225ea8",
          "#253494",
          "#081d58"
        ],
        Purples: [
          "#fcfbfd",
          "#efedf5",
          "#dadaeb",
          "#bcbddc",
          "#9e9ac8",
          "#807dba",
          "#6a51a3",
          "#54278f",
          "#3f007d"
        ],
        GnBu: [
          "#f7fcf0",
          "#e0f3db",
          "#ccebc5",
          "#a8ddb5",
          "#7bccc4",
          "#4eb3d3",
          "#2b8cbe",
          "#0868ac",
          "#084081"
        ],
        Greys: [
          "#ffffff",
          "#f0f0f0",
          "#d9d9d9",
          "#bdbdbd",
          "#969696",
          "#737373",
          "#525252",
          "#252525",
          "#000000"
        ],
        YlOrRd: [
          "#ffffcc",
          "#ffeda0",
          "#fed976",
          "#feb24c",
          "#fd8d3c",
          "#fc4e2a",
          "#e31a1c",
          "#bd0026",
          "#800026"
        ],
        PuRd: [
          "#f7f4f9",
          "#e7e1ef",
          "#d4b9da",
          "#c994c7",
          "#df65b0",
          "#e7298a",
          "#ce1256",
          "#980043",
          "#67001f"
        ],
        Blues: [
          "#f7fbff",
          "#deebf7",
          "#c6dbef",
          "#9ecae1",
          "#6baed6",
          "#4292c6",
          "#2171b5",
          "#08519c",
          "#08306b"
        ],
        PuBuGn: [
          "#fff7fb",
          "#ece2f0",
          "#d0d1e6",
          "#a6bddb",
          "#67a9cf",
          "#3690c0",
          "#02818a",
          "#016c59",
          "#014636"
        ],
        Viridis: [
          "#440154",
          "#482777",
          "#3f4a8a",
          "#31678e",
          "#26838f",
          "#1f9d8a",
          "#6cce5a",
          "#b6de2b",
          "#fee825"
        ],
        // diverging
        Spectral: [
          "#9e0142",
          "#d53e4f",
          "#f46d43",
          "#fdae61",
          "#fee08b",
          "#ffffbf",
          "#e6f598",
          "#abdda4",
          "#66c2a5",
          "#3288bd",
          "#5e4fa2"
        ],
        RdYlGn: [
          "#a50026",
          "#d73027",
          "#f46d43",
          "#fdae61",
          "#fee08b",
          "#ffffbf",
          "#d9ef8b",
          "#a6d96a",
          "#66bd63",
          "#1a9850",
          "#006837"
        ],
        RdBu: [
          "#67001f",
          "#b2182b",
          "#d6604d",
          "#f4a582",
          "#fddbc7",
          "#f7f7f7",
          "#d1e5f0",
          "#92c5de",
          "#4393c3",
          "#2166ac",
          "#053061"
        ],
        PiYG: [
          "#8e0152",
          "#c51b7d",
          "#de77ae",
          "#f1b6da",
          "#fde0ef",
          "#f7f7f7",
          "#e6f5d0",
          "#b8e186",
          "#7fbc41",
          "#4d9221",
          "#276419"
        ],
        PRGn: [
          "#40004b",
          "#762a83",
          "#9970ab",
          "#c2a5cf",
          "#e7d4e8",
          "#f7f7f7",
          "#d9f0d3",
          "#a6dba0",
          "#5aae61",
          "#1b7837",
          "#00441b"
        ],
        RdYlBu: [
          "#a50026",
          "#d73027",
          "#f46d43",
          "#fdae61",
          "#fee090",
          "#ffffbf",
          "#e0f3f8",
          "#abd9e9",
          "#74add1",
          "#4575b4",
          "#313695"
        ],
        BrBG: [
          "#543005",
          "#8c510a",
          "#bf812d",
          "#dfc27d",
          "#f6e8c3",
          "#f5f5f5",
          "#c7eae5",
          "#80cdc1",
          "#35978f",
          "#01665e",
          "#003c30"
        ],
        RdGy: [
          "#67001f",
          "#b2182b",
          "#d6604d",
          "#f4a582",
          "#fddbc7",
          "#ffffff",
          "#e0e0e0",
          "#bababa",
          "#878787",
          "#4d4d4d",
          "#1a1a1a"
        ],
        PuOr: [
          "#7f3b08",
          "#b35806",
          "#e08214",
          "#fdb863",
          "#fee0b6",
          "#f7f7f7",
          "#d8daeb",
          "#b2abd2",
          "#8073ac",
          "#542788",
          "#2d004b"
        ],
        // qualitative
        Set2: [
          "#66c2a5",
          "#fc8d62",
          "#8da0cb",
          "#e78ac3",
          "#a6d854",
          "#ffd92f",
          "#e5c494",
          "#b3b3b3"
        ],
        Accent: [
          "#7fc97f",
          "#beaed4",
          "#fdc086",
          "#ffff99",
          "#386cb0",
          "#f0027f",
          "#bf5b17",
          "#666666"
        ],
        Set1: [
          "#e41a1c",
          "#377eb8",
          "#4daf4a",
          "#984ea3",
          "#ff7f00",
          "#ffff33",
          "#a65628",
          "#f781bf",
          "#999999"
        ],
        Set3: [
          "#8dd3c7",
          "#ffffb3",
          "#bebada",
          "#fb8072",
          "#80b1d3",
          "#fdb462",
          "#b3de69",
          "#fccde5",
          "#d9d9d9",
          "#bc80bd",
          "#ccebc5",
          "#ffed6f"
        ],
        Dark2: [
          "#1b9e77",
          "#d95f02",
          "#7570b3",
          "#e7298a",
          "#66a61e",
          "#e6ab02",
          "#a6761d",
          "#666666"
        ],
        Paired: [
          "#a6cee3",
          "#1f78b4",
          "#b2df8a",
          "#33a02c",
          "#fb9a99",
          "#e31a1c",
          "#fdbf6f",
          "#ff7f00",
          "#cab2d6",
          "#6a3d9a",
          "#ffff99",
          "#b15928"
        ],
        Pastel2: [
          "#b3e2cd",
          "#fdcdac",
          "#cbd5e8",
          "#f4cae4",
          "#e6f5c9",
          "#fff2ae",
          "#f1e2cc",
          "#cccccc"
        ],
        Pastel1: [
          "#fbb4ae",
          "#b3cde3",
          "#ccebc5",
          "#decbe4",
          "#fed9a6",
          "#ffffcc",
          "#e5d8bd",
          "#fddaec",
          "#f2f2f2"
        ]
      };
      for (var i = 0, list = Object.keys(colorbrewer); i < list.length; i += 1) {
        var key = list[i];
        colorbrewer[key.toLowerCase()] = colorbrewer[key];
      }
      var colorbrewer_1 = colorbrewer;
      var chroma = chroma_1;
      chroma.average = average;
      chroma.bezier = bezier_1;
      chroma.blend = blend_1;
      chroma.cubehelix = cubehelix;
      chroma.mix = chroma.interpolate = mix$1;
      chroma.random = random_1;
      chroma.scale = scale$2;
      chroma.analyze = analyze_1.analyze;
      chroma.contrast = contrast;
      chroma.deltaE = deltaE;
      chroma.distance = distance;
      chroma.limits = analyze_1.limits;
      chroma.valid = valid;
      chroma.scales = scales;
      chroma.colors = w3cx11_1;
      chroma.brewer = colorbrewer_1;
      var chroma_js = chroma;
      return chroma_js;
    });
  }
});

// ../../node_modules/underscore/modules/_setup.js
var VERSION, root, ArrayProto, ObjProto, SymbolProto, push, slice, toString, hasOwnProperty, supportsArrayBuffer, supportsDataView, nativeIsArray, nativeKeys, nativeCreate, nativeIsView, _isNaN, _isFinite, hasEnumBug, nonEnumerableProps, MAX_ARRAY_INDEX;
var init_setup = __esm({
  "../../node_modules/underscore/modules/_setup.js"() {
    init_react_import();
    VERSION = "1.13.6";
    root = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {};
    ArrayProto = Array.prototype;
    ObjProto = Object.prototype;
    SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
    push = ArrayProto.push;
    slice = ArrayProto.slice;
    toString = ObjProto.toString;
    hasOwnProperty = ObjProto.hasOwnProperty;
    supportsArrayBuffer = typeof ArrayBuffer !== "undefined";
    supportsDataView = typeof DataView !== "undefined";
    nativeIsArray = Array.isArray;
    nativeKeys = Object.keys;
    nativeCreate = Object.create;
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
    _isNaN = isNaN;
    _isFinite = isFinite;
    hasEnumBug = !{
      toString: null
    }.propertyIsEnumerable("toString");
    nonEnumerableProps = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString"
    ];
    MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  }
});

// ../../node_modules/underscore/modules/restArguments.js
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0), rest2 = Array(length), index = 0;
    for (; index < length; index++) {
      rest2[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest2);
      case 1:
        return func.call(this, arguments[0], rest2);
      case 2:
        return func.call(this, arguments[0], arguments[1], rest2);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest2;
    return func.apply(this, args);
  };
}
var init_restArguments = __esm({
  "../../node_modules/underscore/modules/restArguments.js"() {
    init_react_import();
    __name(restArguments, "restArguments");
  }
});

// ../../node_modules/underscore/modules/isObject.js
function isObject(obj) {
  var type = typeof obj;
  return type === "function" || type === "object" && !!obj;
}
var init_isObject = __esm({
  "../../node_modules/underscore/modules/isObject.js"() {
    init_react_import();
    __name(isObject, "isObject");
  }
});

// ../../node_modules/underscore/modules/isNull.js
function isNull(obj) {
  return obj === null;
}
var init_isNull = __esm({
  "../../node_modules/underscore/modules/isNull.js"() {
    init_react_import();
    __name(isNull, "isNull");
  }
});

// ../../node_modules/underscore/modules/isUndefined.js
function isUndefined(obj) {
  return obj === void 0;
}
var init_isUndefined = __esm({
  "../../node_modules/underscore/modules/isUndefined.js"() {
    init_react_import();
    __name(isUndefined, "isUndefined");
  }
});

// ../../node_modules/underscore/modules/isBoolean.js
function isBoolean(obj) {
  return obj === true || obj === false || toString.call(obj) === "[object Boolean]";
}
var init_isBoolean = __esm({
  "../../node_modules/underscore/modules/isBoolean.js"() {
    init_react_import();
    init_setup();
    __name(isBoolean, "isBoolean");
  }
});

// ../../node_modules/underscore/modules/isElement.js
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}
var init_isElement = __esm({
  "../../node_modules/underscore/modules/isElement.js"() {
    init_react_import();
    __name(isElement, "isElement");
  }
});

// ../../node_modules/underscore/modules/_tagTester.js
function tagTester(name) {
  var tag = "[object " + name + "]";
  return function(obj) {
    return toString.call(obj) === tag;
  };
}
var init_tagTester = __esm({
  "../../node_modules/underscore/modules/_tagTester.js"() {
    init_react_import();
    init_setup();
    __name(tagTester, "tagTester");
  }
});

// ../../node_modules/underscore/modules/isString.js
var isString_default;
var init_isString = __esm({
  "../../node_modules/underscore/modules/isString.js"() {
    init_react_import();
    init_tagTester();
    isString_default = tagTester("String");
  }
});

// ../../node_modules/underscore/modules/isNumber.js
var isNumber_default;
var init_isNumber = __esm({
  "../../node_modules/underscore/modules/isNumber.js"() {
    init_react_import();
    init_tagTester();
    isNumber_default = tagTester("Number");
  }
});

// ../../node_modules/underscore/modules/isDate.js
var isDate_default;
var init_isDate = __esm({
  "../../node_modules/underscore/modules/isDate.js"() {
    init_react_import();
    init_tagTester();
    isDate_default = tagTester("Date");
  }
});

// ../../node_modules/underscore/modules/isRegExp.js
var isRegExp_default;
var init_isRegExp = __esm({
  "../../node_modules/underscore/modules/isRegExp.js"() {
    init_react_import();
    init_tagTester();
    isRegExp_default = tagTester("RegExp");
  }
});

// ../../node_modules/underscore/modules/isError.js
var isError_default;
var init_isError = __esm({
  "../../node_modules/underscore/modules/isError.js"() {
    init_react_import();
    init_tagTester();
    isError_default = tagTester("Error");
  }
});

// ../../node_modules/underscore/modules/isSymbol.js
var isSymbol_default;
var init_isSymbol = __esm({
  "../../node_modules/underscore/modules/isSymbol.js"() {
    init_react_import();
    init_tagTester();
    isSymbol_default = tagTester("Symbol");
  }
});

// ../../node_modules/underscore/modules/isArrayBuffer.js
var isArrayBuffer_default;
var init_isArrayBuffer = __esm({
  "../../node_modules/underscore/modules/isArrayBuffer.js"() {
    init_react_import();
    init_tagTester();
    isArrayBuffer_default = tagTester("ArrayBuffer");
  }
});

// ../../node_modules/underscore/modules/isFunction.js
var isFunction, nodelist, isFunction_default;
var init_isFunction = __esm({
  "../../node_modules/underscore/modules/isFunction.js"() {
    init_react_import();
    init_tagTester();
    init_setup();
    isFunction = tagTester("Function");
    nodelist = root.document && root.document.childNodes;
    if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
      isFunction = /* @__PURE__ */ __name(function(obj) {
        return typeof obj == "function" || false;
      }, "isFunction");
    }
    isFunction_default = isFunction;
  }
});

// ../../node_modules/underscore/modules/_hasObjectTag.js
var hasObjectTag_default;
var init_hasObjectTag = __esm({
  "../../node_modules/underscore/modules/_hasObjectTag.js"() {
    init_react_import();
    init_tagTester();
    hasObjectTag_default = tagTester("Object");
  }
});

// ../../node_modules/underscore/modules/_stringTagBug.js
var hasStringTagBug, isIE11;
var init_stringTagBug = __esm({
  "../../node_modules/underscore/modules/_stringTagBug.js"() {
    init_react_import();
    init_setup();
    init_hasObjectTag();
    hasStringTagBug = supportsDataView && hasObjectTag_default(new DataView(new ArrayBuffer(8)));
    isIE11 = typeof Map !== "undefined" && hasObjectTag_default(/* @__PURE__ */ new Map());
  }
});

// ../../node_modules/underscore/modules/isDataView.js
function ie10IsDataView(obj) {
  return obj != null && isFunction_default(obj.getInt8) && isArrayBuffer_default(obj.buffer);
}
var isDataView, isDataView_default;
var init_isDataView = __esm({
  "../../node_modules/underscore/modules/isDataView.js"() {
    init_react_import();
    init_tagTester();
    init_isFunction();
    init_isArrayBuffer();
    init_stringTagBug();
    isDataView = tagTester("DataView");
    __name(ie10IsDataView, "ie10IsDataView");
    isDataView_default = hasStringTagBug ? ie10IsDataView : isDataView;
  }
});

// ../../node_modules/underscore/modules/isArray.js
var isArray_default;
var init_isArray = __esm({
  "../../node_modules/underscore/modules/isArray.js"() {
    init_react_import();
    init_setup();
    init_tagTester();
    isArray_default = nativeIsArray || tagTester("Array");
  }
});

// ../../node_modules/underscore/modules/_has.js
function has(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}
var init_has = __esm({
  "../../node_modules/underscore/modules/_has.js"() {
    init_react_import();
    init_setup();
    __name(has, "has");
  }
});

// ../../node_modules/underscore/modules/isArguments.js
var isArguments, isArguments_default;
var init_isArguments = __esm({
  "../../node_modules/underscore/modules/isArguments.js"() {
    init_react_import();
    init_tagTester();
    init_has();
    isArguments = tagTester("Arguments");
    (function() {
      if (!isArguments(arguments)) {
        isArguments = /* @__PURE__ */ __name(function(obj) {
          return has(obj, "callee");
        }, "isArguments");
      }
    })();
    isArguments_default = isArguments;
  }
});

// ../../node_modules/underscore/modules/isFinite.js
function isFinite2(obj) {
  return !isSymbol_default(obj) && _isFinite(obj) && !isNaN(parseFloat(obj));
}
var init_isFinite = __esm({
  "../../node_modules/underscore/modules/isFinite.js"() {
    init_react_import();
    init_setup();
    init_isSymbol();
    __name(isFinite2, "isFinite");
  }
});

// ../../node_modules/underscore/modules/isNaN.js
function isNaN2(obj) {
  return isNumber_default(obj) && _isNaN(obj);
}
var init_isNaN = __esm({
  "../../node_modules/underscore/modules/isNaN.js"() {
    init_react_import();
    init_setup();
    init_isNumber();
    __name(isNaN2, "isNaN");
  }
});

// ../../node_modules/underscore/modules/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var init_constant = __esm({
  "../../node_modules/underscore/modules/constant.js"() {
    init_react_import();
    __name(constant, "constant");
  }
});

// ../../node_modules/underscore/modules/_createSizePropertyCheck.js
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= MAX_ARRAY_INDEX;
  };
}
var init_createSizePropertyCheck = __esm({
  "../../node_modules/underscore/modules/_createSizePropertyCheck.js"() {
    init_react_import();
    init_setup();
    __name(createSizePropertyCheck, "createSizePropertyCheck");
  }
});

// ../../node_modules/underscore/modules/_shallowProperty.js
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}
var init_shallowProperty = __esm({
  "../../node_modules/underscore/modules/_shallowProperty.js"() {
    init_react_import();
    __name(shallowProperty, "shallowProperty");
  }
});

// ../../node_modules/underscore/modules/_getByteLength.js
var getByteLength_default;
var init_getByteLength = __esm({
  "../../node_modules/underscore/modules/_getByteLength.js"() {
    init_react_import();
    init_shallowProperty();
    getByteLength_default = shallowProperty("byteLength");
  }
});

// ../../node_modules/underscore/modules/_isBufferLike.js
var isBufferLike_default;
var init_isBufferLike = __esm({
  "../../node_modules/underscore/modules/_isBufferLike.js"() {
    init_react_import();
    init_createSizePropertyCheck();
    init_getByteLength();
    isBufferLike_default = createSizePropertyCheck(getByteLength_default);
  }
});

// ../../node_modules/underscore/modules/isTypedArray.js
function isTypedArray(obj) {
  return nativeIsView ? nativeIsView(obj) && !isDataView_default(obj) : isBufferLike_default(obj) && typedArrayPattern.test(toString.call(obj));
}
var typedArrayPattern, isTypedArray_default;
var init_isTypedArray = __esm({
  "../../node_modules/underscore/modules/isTypedArray.js"() {
    init_react_import();
    init_setup();
    init_isDataView();
    init_constant();
    init_isBufferLike();
    typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
    __name(isTypedArray, "isTypedArray");
    isTypedArray_default = supportsArrayBuffer ? isTypedArray : constant(false);
  }
});

// ../../node_modules/underscore/modules/_getLength.js
var getLength_default;
var init_getLength = __esm({
  "../../node_modules/underscore/modules/_getLength.js"() {
    init_react_import();
    init_shallowProperty();
    getLength_default = shallowProperty("length");
  }
});

// ../../node_modules/underscore/modules/_collectNonEnumProps.js
function emulatedSet(keys2) {
  var hash = {};
  for (var l = keys2.length, i = 0; i < l; ++i)
    hash[keys2[i]] = true;
  return {
    contains: function(key) {
      return hash[key] === true;
    },
    push: function(key) {
      hash[key] = true;
      return keys2.push(key);
    }
  };
}
function collectNonEnumProps(obj, keys2) {
  keys2 = emulatedSet(keys2);
  var nonEnumIdx = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = isFunction_default(constructor) && constructor.prototype || ObjProto;
  var prop = "constructor";
  if (has(obj, prop) && !keys2.contains(prop))
    keys2.push(prop);
  while (nonEnumIdx--) {
    prop = nonEnumerableProps[nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys2.contains(prop)) {
      keys2.push(prop);
    }
  }
}
var init_collectNonEnumProps = __esm({
  "../../node_modules/underscore/modules/_collectNonEnumProps.js"() {
    init_react_import();
    init_setup();
    init_isFunction();
    init_has();
    __name(emulatedSet, "emulatedSet");
    __name(collectNonEnumProps, "collectNonEnumProps");
  }
});

// ../../node_modules/underscore/modules/keys.js
function keys(obj) {
  if (!isObject(obj))
    return [];
  if (nativeKeys)
    return nativeKeys(obj);
  var keys2 = [];
  for (var key in obj)
    if (has(obj, key))
      keys2.push(key);
  if (hasEnumBug)
    collectNonEnumProps(obj, keys2);
  return keys2;
}
var init_keys = __esm({
  "../../node_modules/underscore/modules/keys.js"() {
    init_react_import();
    init_isObject();
    init_setup();
    init_has();
    init_collectNonEnumProps();
    __name(keys, "keys");
  }
});

// ../../node_modules/underscore/modules/isEmpty.js
function isEmpty(obj) {
  if (obj == null)
    return true;
  var length = getLength_default(obj);
  if (typeof length == "number" && (isArray_default(obj) || isString_default(obj) || isArguments_default(obj)))
    return length === 0;
  return getLength_default(keys(obj)) === 0;
}
var init_isEmpty = __esm({
  "../../node_modules/underscore/modules/isEmpty.js"() {
    init_react_import();
    init_getLength();
    init_isArray();
    init_isString();
    init_isArguments();
    init_keys();
    __name(isEmpty, "isEmpty");
  }
});

// ../../node_modules/underscore/modules/isMatch.js
function isMatch(object2, attrs) {
  var _keys = keys(attrs), length = _keys.length;
  if (object2 == null)
    return !length;
  var obj = Object(object2);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj))
      return false;
  }
  return true;
}
var init_isMatch = __esm({
  "../../node_modules/underscore/modules/isMatch.js"() {
    init_react_import();
    init_keys();
    __name(isMatch, "isMatch");
  }
});

// ../../node_modules/underscore/modules/underscore.js
function _(obj) {
  if (obj instanceof _)
    return obj;
  if (!(this instanceof _))
    return new _(obj);
  this._wrapped = obj;
}
var init_underscore = __esm({
  "../../node_modules/underscore/modules/underscore.js"() {
    init_react_import();
    init_setup();
    __name(_, "_");
    _.VERSION = VERSION;
    _.prototype.value = function() {
      return this._wrapped;
    };
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
    _.prototype.toString = function() {
      return String(this._wrapped);
    };
  }
});

// ../../node_modules/underscore/modules/_toBufferView.js
function toBufferView(bufferSource) {
  return new Uint8Array(bufferSource.buffer || bufferSource, bufferSource.byteOffset || 0, getByteLength_default(bufferSource));
}
var init_toBufferView = __esm({
  "../../node_modules/underscore/modules/_toBufferView.js"() {
    init_react_import();
    init_getByteLength();
    __name(toBufferView, "toBufferView");
  }
});

// ../../node_modules/underscore/modules/isEqual.js
function eq(a, b, aStack, bStack) {
  if (a === b)
    return a !== 0 || 1 / a === 1 / b;
  if (a == null || b == null)
    return false;
  if (a !== a)
    return b !== b;
  var type = typeof a;
  if (type !== "function" && type !== "object" && typeof b != "object")
    return false;
  return deepEq(a, b, aStack, bStack);
}
function deepEq(a, b, aStack, bStack) {
  if (a instanceof _)
    a = a._wrapped;
  if (b instanceof _)
    b = b._wrapped;
  var className = toString.call(a);
  if (className !== toString.call(b))
    return false;
  if (hasStringTagBug && className == "[object Object]" && isDataView_default(a)) {
    if (!isDataView_default(b))
      return false;
    className = tagDataView;
  }
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a)
        return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
    case "[object Symbol]":
      return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
    case "[object ArrayBuffer]":
    case tagDataView:
      return deepEq(toBufferView(a), toBufferView(b), aStack, bStack);
  }
  var areArrays = className === "[object Array]";
  if (!areArrays && isTypedArray_default(a)) {
    var byteLength = getByteLength_default(a);
    if (byteLength !== getByteLength_default(b))
      return false;
    if (a.buffer === b.buffer && a.byteOffset === b.byteOffset)
      return true;
    areArrays = true;
  }
  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object")
      return false;
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction_default(aCtor) && aCtor instanceof aCtor && isFunction_default(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b;
  }
  aStack.push(a);
  bStack.push(b);
  if (areArrays) {
    length = a.length;
    if (length !== b.length)
      return false;
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack))
        return false;
    }
  } else {
    var _keys = keys(a), key;
    length = _keys.length;
    if (keys(b).length !== length)
      return false;
    while (length--) {
      key = _keys[length];
      if (!(has(b, key) && eq(a[key], b[key], aStack, bStack)))
        return false;
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function isEqual(a, b) {
  return eq(a, b);
}
var tagDataView;
var init_isEqual = __esm({
  "../../node_modules/underscore/modules/isEqual.js"() {
    init_react_import();
    init_underscore();
    init_setup();
    init_getByteLength();
    init_isTypedArray();
    init_isFunction();
    init_stringTagBug();
    init_isDataView();
    init_keys();
    init_has();
    init_toBufferView();
    tagDataView = "[object DataView]";
    __name(eq, "eq");
    __name(deepEq, "deepEq");
    __name(isEqual, "isEqual");
  }
});

// ../../node_modules/underscore/modules/allKeys.js
function allKeys(obj) {
  if (!isObject(obj))
    return [];
  var keys2 = [];
  for (var key in obj)
    keys2.push(key);
  if (hasEnumBug)
    collectNonEnumProps(obj, keys2);
  return keys2;
}
var init_allKeys = __esm({
  "../../node_modules/underscore/modules/allKeys.js"() {
    init_react_import();
    init_isObject();
    init_setup();
    init_collectNonEnumProps();
    __name(allKeys, "allKeys");
  }
});

// ../../node_modules/underscore/modules/_methodFingerprint.js
function ie11fingerprint(methods) {
  var length = getLength_default(methods);
  return function(obj) {
    if (obj == null)
      return false;
    var keys2 = allKeys(obj);
    if (getLength_default(keys2))
      return false;
    for (var i = 0; i < length; i++) {
      if (!isFunction_default(obj[methods[i]]))
        return false;
    }
    return methods !== weakMapMethods || !isFunction_default(obj[forEachName]);
  };
}
var forEachName, hasName, commonInit, mapTail, mapMethods, weakMapMethods, setMethods;
var init_methodFingerprint = __esm({
  "../../node_modules/underscore/modules/_methodFingerprint.js"() {
    init_react_import();
    init_getLength();
    init_isFunction();
    init_allKeys();
    __name(ie11fingerprint, "ie11fingerprint");
    forEachName = "forEach";
    hasName = "has";
    commonInit = [
      "clear",
      "delete"
    ];
    mapTail = [
      "get",
      hasName,
      "set"
    ];
    mapMethods = commonInit.concat(forEachName, mapTail);
    weakMapMethods = commonInit.concat(mapTail);
    setMethods = [
      "add"
    ].concat(commonInit, forEachName, hasName);
  }
});

// ../../node_modules/underscore/modules/isMap.js
var isMap_default;
var init_isMap = __esm({
  "../../node_modules/underscore/modules/isMap.js"() {
    init_react_import();
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isMap_default = isIE11 ? ie11fingerprint(mapMethods) : tagTester("Map");
  }
});

// ../../node_modules/underscore/modules/isWeakMap.js
var isWeakMap_default;
var init_isWeakMap = __esm({
  "../../node_modules/underscore/modules/isWeakMap.js"() {
    init_react_import();
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isWeakMap_default = isIE11 ? ie11fingerprint(weakMapMethods) : tagTester("WeakMap");
  }
});

// ../../node_modules/underscore/modules/isSet.js
var isSet_default;
var init_isSet = __esm({
  "../../node_modules/underscore/modules/isSet.js"() {
    init_react_import();
    init_tagTester();
    init_stringTagBug();
    init_methodFingerprint();
    isSet_default = isIE11 ? ie11fingerprint(setMethods) : tagTester("Set");
  }
});

// ../../node_modules/underscore/modules/isWeakSet.js
var isWeakSet_default;
var init_isWeakSet = __esm({
  "../../node_modules/underscore/modules/isWeakSet.js"() {
    init_react_import();
    init_tagTester();
    isWeakSet_default = tagTester("WeakSet");
  }
});

// ../../node_modules/underscore/modules/values.js
function values(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var values2 = Array(length);
  for (var i = 0; i < length; i++) {
    values2[i] = obj[_keys[i]];
  }
  return values2;
}
var init_values = __esm({
  "../../node_modules/underscore/modules/values.js"() {
    init_react_import();
    init_keys();
    __name(values, "values");
  }
});

// ../../node_modules/underscore/modules/pairs.js
function pairs(obj) {
  var _keys = keys(obj);
  var length = _keys.length;
  var pairs2 = Array(length);
  for (var i = 0; i < length; i++) {
    pairs2[i] = [
      _keys[i],
      obj[_keys[i]]
    ];
  }
  return pairs2;
}
var init_pairs = __esm({
  "../../node_modules/underscore/modules/pairs.js"() {
    init_react_import();
    init_keys();
    __name(pairs, "pairs");
  }
});

// ../../node_modules/underscore/modules/invert.js
function invert(obj) {
  var result2 = {};
  var _keys = keys(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result2[obj[_keys[i]]] = _keys[i];
  }
  return result2;
}
var init_invert = __esm({
  "../../node_modules/underscore/modules/invert.js"() {
    init_react_import();
    init_keys();
    __name(invert, "invert");
  }
});

// ../../node_modules/underscore/modules/functions.js
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (isFunction_default(obj[key]))
      names.push(key);
  }
  return names.sort();
}
var init_functions = __esm({
  "../../node_modules/underscore/modules/functions.js"() {
    init_react_import();
    init_isFunction();
    __name(functions, "functions");
  }
});

// ../../node_modules/underscore/modules/_createAssigner.js
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults)
      obj = Object(obj);
    if (length < 2 || obj == null)
      return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index], keys2 = keysFunc(source), l = keys2.length;
      for (var i = 0; i < l; i++) {
        var key = keys2[i];
        if (!defaults || obj[key] === void 0)
          obj[key] = source[key];
      }
    }
    return obj;
  };
}
var init_createAssigner = __esm({
  "../../node_modules/underscore/modules/_createAssigner.js"() {
    init_react_import();
    __name(createAssigner, "createAssigner");
  }
});

// ../../node_modules/underscore/modules/extend.js
var extend_default;
var init_extend = __esm({
  "../../node_modules/underscore/modules/extend.js"() {
    init_react_import();
    init_createAssigner();
    init_allKeys();
    extend_default = createAssigner(allKeys);
  }
});

// ../../node_modules/underscore/modules/extendOwn.js
var extendOwn_default;
var init_extendOwn = __esm({
  "../../node_modules/underscore/modules/extendOwn.js"() {
    init_react_import();
    init_createAssigner();
    init_keys();
    extendOwn_default = createAssigner(keys);
  }
});

// ../../node_modules/underscore/modules/defaults.js
var defaults_default;
var init_defaults = __esm({
  "../../node_modules/underscore/modules/defaults.js"() {
    init_react_import();
    init_createAssigner();
    init_allKeys();
    defaults_default = createAssigner(allKeys, true);
  }
});

// ../../node_modules/underscore/modules/_baseCreate.js
function ctor() {
  return function() {
  };
}
function baseCreate(prototype) {
  if (!isObject(prototype))
    return {};
  if (nativeCreate)
    return nativeCreate(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result2 = new Ctor();
  Ctor.prototype = null;
  return result2;
}
var init_baseCreate = __esm({
  "../../node_modules/underscore/modules/_baseCreate.js"() {
    init_react_import();
    init_isObject();
    init_setup();
    __name(ctor, "ctor");
    __name(baseCreate, "baseCreate");
  }
});

// ../../node_modules/underscore/modules/create.js
function create(prototype, props) {
  var result2 = baseCreate(prototype);
  if (props)
    extendOwn_default(result2, props);
  return result2;
}
var init_create = __esm({
  "../../node_modules/underscore/modules/create.js"() {
    init_react_import();
    init_baseCreate();
    init_extendOwn();
    __name(create, "create");
  }
});

// ../../node_modules/underscore/modules/clone.js
function clone(obj) {
  if (!isObject(obj))
    return obj;
  return isArray_default(obj) ? obj.slice() : extend_default({}, obj);
}
var init_clone = __esm({
  "../../node_modules/underscore/modules/clone.js"() {
    init_react_import();
    init_isObject();
    init_isArray();
    init_extend();
    __name(clone, "clone");
  }
});

// ../../node_modules/underscore/modules/tap.js
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}
var init_tap = __esm({
  "../../node_modules/underscore/modules/tap.js"() {
    init_react_import();
    __name(tap, "tap");
  }
});

// ../../node_modules/underscore/modules/toPath.js
function toPath(path) {
  return isArray_default(path) ? path : [
    path
  ];
}
var init_toPath = __esm({
  "../../node_modules/underscore/modules/toPath.js"() {
    init_react_import();
    init_underscore();
    init_isArray();
    __name(toPath, "toPath");
    _.toPath = toPath;
  }
});

// ../../node_modules/underscore/modules/_toPath.js
function toPath2(path) {
  return _.toPath(path);
}
var init_toPath2 = __esm({
  "../../node_modules/underscore/modules/_toPath.js"() {
    init_react_import();
    init_underscore();
    init_toPath();
    __name(toPath2, "toPath");
  }
});

// ../../node_modules/underscore/modules/_deepGet.js
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null)
      return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}
var init_deepGet = __esm({
  "../../node_modules/underscore/modules/_deepGet.js"() {
    init_react_import();
    __name(deepGet, "deepGet");
  }
});

// ../../node_modules/underscore/modules/get.js
function get(object2, path, defaultValue) {
  var value = deepGet(object2, toPath2(path));
  return isUndefined(value) ? defaultValue : value;
}
var init_get = __esm({
  "../../node_modules/underscore/modules/get.js"() {
    init_react_import();
    init_toPath2();
    init_deepGet();
    init_isUndefined();
    __name(get, "get");
  }
});

// ../../node_modules/underscore/modules/has.js
function has2(obj, path) {
  path = toPath2(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!has(obj, key))
      return false;
    obj = obj[key];
  }
  return !!length;
}
var init_has2 = __esm({
  "../../node_modules/underscore/modules/has.js"() {
    init_react_import();
    init_has();
    init_toPath2();
    __name(has2, "has");
  }
});

// ../../node_modules/underscore/modules/identity.js
function identity(value) {
  return value;
}
var init_identity = __esm({
  "../../node_modules/underscore/modules/identity.js"() {
    init_react_import();
    __name(identity, "identity");
  }
});

// ../../node_modules/underscore/modules/matcher.js
function matcher(attrs) {
  attrs = extendOwn_default({}, attrs);
  return function(obj) {
    return isMatch(obj, attrs);
  };
}
var init_matcher = __esm({
  "../../node_modules/underscore/modules/matcher.js"() {
    init_react_import();
    init_extendOwn();
    init_isMatch();
    __name(matcher, "matcher");
  }
});

// ../../node_modules/underscore/modules/property.js
function property(path) {
  path = toPath2(path);
  return function(obj) {
    return deepGet(obj, path);
  };
}
var init_property = __esm({
  "../../node_modules/underscore/modules/property.js"() {
    init_react_import();
    init_deepGet();
    init_toPath2();
    __name(property, "property");
  }
});

// ../../node_modules/underscore/modules/_optimizeCb.js
function optimizeCb(func, context, argCount) {
  if (context === void 0)
    return func;
  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function(value) {
        return func.call(context, value);
      };
    case 3:
      return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
    case 4:
      return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }
  return function() {
    return func.apply(context, arguments);
  };
}
var init_optimizeCb = __esm({
  "../../node_modules/underscore/modules/_optimizeCb.js"() {
    init_react_import();
    __name(optimizeCb, "optimizeCb");
  }
});

// ../../node_modules/underscore/modules/_baseIteratee.js
function baseIteratee(value, context, argCount) {
  if (value == null)
    return identity;
  if (isFunction_default(value))
    return optimizeCb(value, context, argCount);
  if (isObject(value) && !isArray_default(value))
    return matcher(value);
  return property(value);
}
var init_baseIteratee = __esm({
  "../../node_modules/underscore/modules/_baseIteratee.js"() {
    init_react_import();
    init_identity();
    init_isFunction();
    init_isObject();
    init_isArray();
    init_matcher();
    init_property();
    init_optimizeCb();
    __name(baseIteratee, "baseIteratee");
  }
});

// ../../node_modules/underscore/modules/iteratee.js
function iteratee(value, context) {
  return baseIteratee(value, context, Infinity);
}
var init_iteratee = __esm({
  "../../node_modules/underscore/modules/iteratee.js"() {
    init_react_import();
    init_underscore();
    init_baseIteratee();
    __name(iteratee, "iteratee");
    _.iteratee = iteratee;
  }
});

// ../../node_modules/underscore/modules/_cb.js
function cb(value, context, argCount) {
  if (_.iteratee !== iteratee)
    return _.iteratee(value, context);
  return baseIteratee(value, context, argCount);
}
var init_cb = __esm({
  "../../node_modules/underscore/modules/_cb.js"() {
    init_react_import();
    init_underscore();
    init_baseIteratee();
    init_iteratee();
    __name(cb, "cb");
  }
});

// ../../node_modules/underscore/modules/mapObject.js
function mapObject(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = keys(obj), length = _keys.length, results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
var init_mapObject = __esm({
  "../../node_modules/underscore/modules/mapObject.js"() {
    init_react_import();
    init_cb();
    init_keys();
    __name(mapObject, "mapObject");
  }
});

// ../../node_modules/underscore/modules/noop.js
function noop() {
}
var init_noop = __esm({
  "../../node_modules/underscore/modules/noop.js"() {
    init_react_import();
    __name(noop, "noop");
  }
});

// ../../node_modules/underscore/modules/propertyOf.js
function propertyOf(obj) {
  if (obj == null)
    return noop;
  return function(path) {
    return get(obj, path);
  };
}
var init_propertyOf = __esm({
  "../../node_modules/underscore/modules/propertyOf.js"() {
    init_react_import();
    init_noop();
    init_get();
    __name(propertyOf, "propertyOf");
  }
});

// ../../node_modules/underscore/modules/times.js
function times(n, iteratee2, context) {
  var accum = Array(Math.max(0, n));
  iteratee2 = optimizeCb(iteratee2, context, 1);
  for (var i = 0; i < n; i++)
    accum[i] = iteratee2(i);
  return accum;
}
var init_times = __esm({
  "../../node_modules/underscore/modules/times.js"() {
    init_react_import();
    init_optimizeCb();
    __name(times, "times");
  }
});

// ../../node_modules/underscore/modules/random.js
function random(min2, max2) {
  if (max2 == null) {
    max2 = min2;
    min2 = 0;
  }
  return min2 + Math.floor(Math.random() * (max2 - min2 + 1));
}
var init_random = __esm({
  "../../node_modules/underscore/modules/random.js"() {
    init_react_import();
    __name(random, "random");
  }
});

// ../../node_modules/underscore/modules/now.js
var now_default;
var init_now = __esm({
  "../../node_modules/underscore/modules/now.js"() {
    init_react_import();
    now_default = Date.now || function() {
      return (/* @__PURE__ */ new Date()).getTime();
    };
  }
});

// ../../node_modules/underscore/modules/_createEscaper.js
function createEscaper(map2) {
  var escaper = /* @__PURE__ */ __name(function(match) {
    return map2[match];
  }, "escaper");
  var source = "(?:" + keys(map2).join("|") + ")";
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, "g");
  return function(string) {
    string = string == null ? "" : "" + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}
var init_createEscaper = __esm({
  "../../node_modules/underscore/modules/_createEscaper.js"() {
    init_react_import();
    init_keys();
    __name(createEscaper, "createEscaper");
  }
});

// ../../node_modules/underscore/modules/_escapeMap.js
var escapeMap_default;
var init_escapeMap = __esm({
  "../../node_modules/underscore/modules/_escapeMap.js"() {
    init_react_import();
    escapeMap_default = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;"
    };
  }
});

// ../../node_modules/underscore/modules/escape.js
var escape_default;
var init_escape = __esm({
  "../../node_modules/underscore/modules/escape.js"() {
    init_react_import();
    init_createEscaper();
    init_escapeMap();
    escape_default = createEscaper(escapeMap_default);
  }
});

// ../../node_modules/underscore/modules/_unescapeMap.js
var unescapeMap_default;
var init_unescapeMap = __esm({
  "../../node_modules/underscore/modules/_unescapeMap.js"() {
    init_react_import();
    init_invert();
    init_escapeMap();
    unescapeMap_default = invert(escapeMap_default);
  }
});

// ../../node_modules/underscore/modules/unescape.js
var unescape_default;
var init_unescape = __esm({
  "../../node_modules/underscore/modules/unescape.js"() {
    init_react_import();
    init_createEscaper();
    init_unescapeMap();
    unescape_default = createEscaper(unescapeMap_default);
  }
});

// ../../node_modules/underscore/modules/templateSettings.js
var templateSettings_default;
var init_templateSettings = __esm({
  "../../node_modules/underscore/modules/templateSettings.js"() {
    init_react_import();
    init_underscore();
    templateSettings_default = _.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
  }
});

// ../../node_modules/underscore/modules/template.js
function escapeChar(match) {
  return "\\" + escapes[match];
}
function template(text, settings, oldSettings) {
  if (!settings && oldSettings)
    settings = oldSettings;
  settings = defaults_default({}, settings, _.templateSettings);
  var matcher2 = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join("|") + "|$", "g");
  var index = 0;
  var source = "__p+='";
  text.replace(matcher2, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;
    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }
    return match;
  });
  source += "';\n";
  var argument = settings.variable;
  if (argument) {
    if (!bareIdentifier.test(argument))
      throw new Error("variable is not a bare identifier: " + argument);
  } else {
    source = "with(obj||{}){\n" + source + "}\n";
    argument = "obj";
  }
  source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
  var render;
  try {
    render = new Function(argument, "_", source);
  } catch (e) {
    e.source = source;
    throw e;
  }
  var template2 = /* @__PURE__ */ __name(function(data) {
    return render.call(this, data, _);
  }, "template");
  template2.source = "function(" + argument + "){\n" + source + "}";
  return template2;
}
var noMatch, escapes, escapeRegExp, bareIdentifier;
var init_template = __esm({
  "../../node_modules/underscore/modules/template.js"() {
    init_react_import();
    init_defaults();
    init_underscore();
    init_templateSettings();
    noMatch = /(.)^/;
    escapes = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
    __name(escapeChar, "escapeChar");
    bareIdentifier = /^\s*(\w|\$)+\s*$/;
    __name(template, "template");
  }
});

// ../../node_modules/underscore/modules/result.js
function result(obj, path, fallback) {
  path = toPath2(path);
  var length = path.length;
  if (!length) {
    return isFunction_default(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length;
    }
    obj = isFunction_default(prop) ? prop.call(obj) : prop;
  }
  return obj;
}
var init_result = __esm({
  "../../node_modules/underscore/modules/result.js"() {
    init_react_import();
    init_isFunction();
    init_toPath2();
    __name(result, "result");
  }
});

// ../../node_modules/underscore/modules/uniqueId.js
function uniqueId(prefix) {
  var id = ++idCounter + "";
  return prefix ? prefix + id : id;
}
var idCounter;
var init_uniqueId = __esm({
  "../../node_modules/underscore/modules/uniqueId.js"() {
    init_react_import();
    idCounter = 0;
    __name(uniqueId, "uniqueId");
  }
});

// ../../node_modules/underscore/modules/chain.js
function chain(obj) {
  var instance = _(obj);
  instance._chain = true;
  return instance;
}
var init_chain = __esm({
  "../../node_modules/underscore/modules/chain.js"() {
    init_react_import();
    init_underscore();
    __name(chain, "chain");
  }
});

// ../../node_modules/underscore/modules/_executeBound.js
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc))
    return sourceFunc.apply(context, args);
  var self2 = baseCreate(sourceFunc.prototype);
  var result2 = sourceFunc.apply(self2, args);
  if (isObject(result2))
    return result2;
  return self2;
}
var init_executeBound = __esm({
  "../../node_modules/underscore/modules/_executeBound.js"() {
    init_react_import();
    init_baseCreate();
    init_isObject();
    __name(executeBound, "executeBound");
  }
});

// ../../node_modules/underscore/modules/partial.js
var partial, partial_default;
var init_partial = __esm({
  "../../node_modules/underscore/modules/partial.js"() {
    init_react_import();
    init_restArguments();
    init_executeBound();
    init_underscore();
    partial = restArguments(function(func, boundArgs) {
      var placeholder = partial.placeholder;
      var bound = /* @__PURE__ */ __name(function() {
        var position = 0, length = boundArgs.length;
        var args = Array(length);
        for (var i = 0; i < length; i++) {
          args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
        }
        while (position < arguments.length)
          args.push(arguments[position++]);
        return executeBound(func, bound, this, this, args);
      }, "bound");
      return bound;
    });
    partial.placeholder = _;
    partial_default = partial;
  }
});

// ../../node_modules/underscore/modules/bind.js
var bind_default;
var init_bind = __esm({
  "../../node_modules/underscore/modules/bind.js"() {
    init_react_import();
    init_restArguments();
    init_isFunction();
    init_executeBound();
    bind_default = restArguments(function(func, context, args) {
      if (!isFunction_default(func))
        throw new TypeError("Bind must be called on a function");
      var bound = restArguments(function(callArgs) {
        return executeBound(func, bound, context, this, args.concat(callArgs));
      });
      return bound;
    });
  }
});

// ../../node_modules/underscore/modules/_isArrayLike.js
var isArrayLike_default;
var init_isArrayLike = __esm({
  "../../node_modules/underscore/modules/_isArrayLike.js"() {
    init_react_import();
    init_createSizePropertyCheck();
    init_getLength();
    isArrayLike_default = createSizePropertyCheck(getLength_default);
  }
});

// ../../node_modules/underscore/modules/_flatten.js
function flatten(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i = 0, length = getLength_default(input); i < length; i++) {
    var value = input[i];
    if (isArrayLike_default(value) && (isArray_default(value) || isArguments_default(value))) {
      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len)
          output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}
var init_flatten = __esm({
  "../../node_modules/underscore/modules/_flatten.js"() {
    init_react_import();
    init_getLength();
    init_isArrayLike();
    init_isArray();
    init_isArguments();
    __name(flatten, "flatten");
  }
});

// ../../node_modules/underscore/modules/bindAll.js
var bindAll_default;
var init_bindAll = __esm({
  "../../node_modules/underscore/modules/bindAll.js"() {
    init_react_import();
    init_restArguments();
    init_flatten();
    init_bind();
    bindAll_default = restArguments(function(obj, keys2) {
      keys2 = flatten(keys2, false, false);
      var index = keys2.length;
      if (index < 1)
        throw new Error("bindAll must be passed function names");
      while (index--) {
        var key = keys2[index];
        obj[key] = bind_default(obj[key], obj);
      }
      return obj;
    });
  }
});

// ../../node_modules/underscore/modules/memoize.js
function memoize(func, hasher) {
  var memoize2 = /* @__PURE__ */ __name(function(key) {
    var cache = memoize2.cache;
    var address = "" + (hasher ? hasher.apply(this, arguments) : key);
    if (!has(cache, address))
      cache[address] = func.apply(this, arguments);
    return cache[address];
  }, "memoize");
  memoize2.cache = {};
  return memoize2;
}
var init_memoize = __esm({
  "../../node_modules/underscore/modules/memoize.js"() {
    init_react_import();
    init_has();
    __name(memoize, "memoize");
  }
});

// ../../node_modules/underscore/modules/delay.js
var delay_default;
var init_delay = __esm({
  "../../node_modules/underscore/modules/delay.js"() {
    init_react_import();
    init_restArguments();
    delay_default = restArguments(function(func, wait, args) {
      return setTimeout(function() {
        return func.apply(null, args);
      }, wait);
    });
  }
});

// ../../node_modules/underscore/modules/defer.js
var defer_default;
var init_defer = __esm({
  "../../node_modules/underscore/modules/defer.js"() {
    init_react_import();
    init_partial();
    init_delay();
    init_underscore();
    defer_default = partial_default(delay_default, _, 1);
  }
});

// ../../node_modules/underscore/modules/throttle.js
function throttle(func, wait, options) {
  var timeout, context, args, result2;
  var previous = 0;
  if (!options)
    options = {};
  var later = /* @__PURE__ */ __name(function() {
    previous = options.leading === false ? 0 : now_default();
    timeout = null;
    result2 = func.apply(context, args);
    if (!timeout)
      context = args = null;
  }, "later");
  var throttled = /* @__PURE__ */ __name(function() {
    var _now = now_default();
    if (!previous && options.leading === false)
      previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result2 = func.apply(context, args);
      if (!timeout)
        context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result2;
  }, "throttled");
  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };
  return throttled;
}
var init_throttle = __esm({
  "../../node_modules/underscore/modules/throttle.js"() {
    init_react_import();
    init_now();
    __name(throttle, "throttle");
  }
});

// ../../node_modules/underscore/modules/debounce.js
function debounce(func, wait, immediate) {
  var timeout, previous, args, result2, context;
  var later = /* @__PURE__ */ __name(function() {
    var passed = now_default() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate)
        result2 = func.apply(context, args);
      if (!timeout)
        args = context = null;
    }
  }, "later");
  var debounced = restArguments(function(_args) {
    context = this;
    args = _args;
    previous = now_default();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate)
        result2 = func.apply(context, args);
    }
    return result2;
  });
  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };
  return debounced;
}
var init_debounce = __esm({
  "../../node_modules/underscore/modules/debounce.js"() {
    init_react_import();
    init_restArguments();
    init_now();
    __name(debounce, "debounce");
  }
});

// ../../node_modules/underscore/modules/wrap.js
function wrap(func, wrapper) {
  return partial_default(wrapper, func);
}
var init_wrap = __esm({
  "../../node_modules/underscore/modules/wrap.js"() {
    init_react_import();
    init_partial();
    __name(wrap, "wrap");
  }
});

// ../../node_modules/underscore/modules/negate.js
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}
var init_negate = __esm({
  "../../node_modules/underscore/modules/negate.js"() {
    init_react_import();
    __name(negate, "negate");
  }
});

// ../../node_modules/underscore/modules/compose.js
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result2 = args[start].apply(this, arguments);
    while (i--)
      result2 = args[i].call(this, result2);
    return result2;
  };
}
var init_compose = __esm({
  "../../node_modules/underscore/modules/compose.js"() {
    init_react_import();
    __name(compose, "compose");
  }
});

// ../../node_modules/underscore/modules/after.js
function after(times2, func) {
  return function() {
    if (--times2 < 1) {
      return func.apply(this, arguments);
    }
  };
}
var init_after = __esm({
  "../../node_modules/underscore/modules/after.js"() {
    init_react_import();
    __name(after, "after");
  }
});

// ../../node_modules/underscore/modules/before.js
function before(times2, func) {
  var memo;
  return function() {
    if (--times2 > 0) {
      memo = func.apply(this, arguments);
    }
    if (times2 <= 1)
      func = null;
    return memo;
  };
}
var init_before = __esm({
  "../../node_modules/underscore/modules/before.js"() {
    init_react_import();
    __name(before, "before");
  }
});

// ../../node_modules/underscore/modules/once.js
var once_default;
var init_once = __esm({
  "../../node_modules/underscore/modules/once.js"() {
    init_react_import();
    init_partial();
    init_before();
    once_default = partial_default(before, 2);
  }
});

// ../../node_modules/underscore/modules/findKey.js
function findKey(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = keys(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj))
      return key;
  }
}
var init_findKey = __esm({
  "../../node_modules/underscore/modules/findKey.js"() {
    init_react_import();
    init_cb();
    init_keys();
    __name(findKey, "findKey");
  }
});

// ../../node_modules/underscore/modules/_createPredicateIndexFinder.js
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = cb(predicate, context);
    var length = getLength_default(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array))
        return index;
    }
    return -1;
  };
}
var init_createPredicateIndexFinder = __esm({
  "../../node_modules/underscore/modules/_createPredicateIndexFinder.js"() {
    init_react_import();
    init_cb();
    init_getLength();
    __name(createPredicateIndexFinder, "createPredicateIndexFinder");
  }
});

// ../../node_modules/underscore/modules/findIndex.js
var findIndex_default;
var init_findIndex = __esm({
  "../../node_modules/underscore/modules/findIndex.js"() {
    init_react_import();
    init_createPredicateIndexFinder();
    findIndex_default = createPredicateIndexFinder(1);
  }
});

// ../../node_modules/underscore/modules/findLastIndex.js
var findLastIndex_default;
var init_findLastIndex = __esm({
  "../../node_modules/underscore/modules/findLastIndex.js"() {
    init_react_import();
    init_createPredicateIndexFinder();
    findLastIndex_default = createPredicateIndexFinder(-1);
  }
});

// ../../node_modules/underscore/modules/sortedIndex.js
function sortedIndex(array, obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context, 1);
  var value = iteratee2(obj);
  var low = 0, high = getLength_default(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee2(array[mid]) < value)
      low = mid + 1;
    else
      high = mid;
  }
  return low;
}
var init_sortedIndex = __esm({
  "../../node_modules/underscore/modules/sortedIndex.js"() {
    init_react_import();
    init_cb();
    init_getLength();
    __name(sortedIndex, "sortedIndex");
  }
});

// ../../node_modules/underscore/modules/_createIndexFinder.js
function createIndexFinder(dir, predicateFind, sortedIndex2) {
  return function(array, item, idx) {
    var i = 0, length = getLength_default(array);
    if (typeof idx == "number") {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex2 && idx && length) {
      idx = sortedIndex2(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(slice.call(array, i, length), isNaN2);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item)
        return idx;
    }
    return -1;
  };
}
var init_createIndexFinder = __esm({
  "../../node_modules/underscore/modules/_createIndexFinder.js"() {
    init_react_import();
    init_getLength();
    init_setup();
    init_isNaN();
    __name(createIndexFinder, "createIndexFinder");
  }
});

// ../../node_modules/underscore/modules/indexOf.js
var indexOf_default;
var init_indexOf = __esm({
  "../../node_modules/underscore/modules/indexOf.js"() {
    init_react_import();
    init_sortedIndex();
    init_findIndex();
    init_createIndexFinder();
    indexOf_default = createIndexFinder(1, findIndex_default, sortedIndex);
  }
});

// ../../node_modules/underscore/modules/lastIndexOf.js
var lastIndexOf_default;
var init_lastIndexOf = __esm({
  "../../node_modules/underscore/modules/lastIndexOf.js"() {
    init_react_import();
    init_findLastIndex();
    init_createIndexFinder();
    lastIndexOf_default = createIndexFinder(-1, findLastIndex_default);
  }
});

// ../../node_modules/underscore/modules/find.js
function find(obj, predicate, context) {
  var keyFinder = isArrayLike_default(obj) ? findIndex_default : findKey;
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1)
    return obj[key];
}
var init_find = __esm({
  "../../node_modules/underscore/modules/find.js"() {
    init_react_import();
    init_isArrayLike();
    init_findIndex();
    init_findKey();
    __name(find, "find");
  }
});

// ../../node_modules/underscore/modules/findWhere.js
function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}
var init_findWhere = __esm({
  "../../node_modules/underscore/modules/findWhere.js"() {
    init_react_import();
    init_find();
    init_matcher();
    __name(findWhere, "findWhere");
  }
});

// ../../node_modules/underscore/modules/each.js
function each(obj, iteratee2, context) {
  iteratee2 = optimizeCb(iteratee2, context);
  var i, length;
  if (isArrayLike_default(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee2(obj[i], i, obj);
    }
  } else {
    var _keys = keys(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee2(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}
var init_each = __esm({
  "../../node_modules/underscore/modules/each.js"() {
    init_react_import();
    init_optimizeCb();
    init_isArrayLike();
    init_keys();
    __name(each, "each");
  }
});

// ../../node_modules/underscore/modules/map.js
function map(obj, iteratee2, context) {
  iteratee2 = cb(iteratee2, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee2(obj[currentKey], currentKey, obj);
  }
  return results;
}
var init_map = __esm({
  "../../node_modules/underscore/modules/map.js"() {
    init_react_import();
    init_cb();
    init_isArrayLike();
    init_keys();
    __name(map, "map");
  }
});

// ../../node_modules/underscore/modules/_createReduce.js
function createReduce(dir) {
  var reducer = /* @__PURE__ */ __name(function(obj, iteratee2, memo, initial3) {
    var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
    if (!initial3) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee2(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  }, "reducer");
  return function(obj, iteratee2, memo, context) {
    var initial3 = arguments.length >= 3;
    return reducer(obj, optimizeCb(iteratee2, context, 4), memo, initial3);
  };
}
var init_createReduce = __esm({
  "../../node_modules/underscore/modules/_createReduce.js"() {
    init_react_import();
    init_isArrayLike();
    init_keys();
    init_optimizeCb();
    __name(createReduce, "createReduce");
  }
});

// ../../node_modules/underscore/modules/reduce.js
var reduce_default;
var init_reduce = __esm({
  "../../node_modules/underscore/modules/reduce.js"() {
    init_react_import();
    init_createReduce();
    reduce_default = createReduce(1);
  }
});

// ../../node_modules/underscore/modules/reduceRight.js
var reduceRight_default;
var init_reduceRight = __esm({
  "../../node_modules/underscore/modules/reduceRight.js"() {
    init_react_import();
    init_createReduce();
    reduceRight_default = createReduce(-1);
  }
});

// ../../node_modules/underscore/modules/filter.js
function filter(obj, predicate, context) {
  var results = [];
  predicate = cb(predicate, context);
  each(obj, function(value, index, list) {
    if (predicate(value, index, list))
      results.push(value);
  });
  return results;
}
var init_filter = __esm({
  "../../node_modules/underscore/modules/filter.js"() {
    init_react_import();
    init_cb();
    init_each();
    __name(filter, "filter");
  }
});

// ../../node_modules/underscore/modules/reject.js
function reject(obj, predicate, context) {
  return filter(obj, negate(cb(predicate)), context);
}
var init_reject = __esm({
  "../../node_modules/underscore/modules/reject.js"() {
    init_react_import();
    init_filter();
    init_negate();
    init_cb();
    __name(reject, "reject");
  }
});

// ../../node_modules/underscore/modules/every.js
function every(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj))
      return false;
  }
  return true;
}
var init_every = __esm({
  "../../node_modules/underscore/modules/every.js"() {
    init_react_import();
    init_cb();
    init_isArrayLike();
    init_keys();
    __name(every, "every");
  }
});

// ../../node_modules/underscore/modules/some.js
function some(obj, predicate, context) {
  predicate = cb(predicate, context);
  var _keys = !isArrayLike_default(obj) && keys(obj), length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj))
      return true;
  }
  return false;
}
var init_some = __esm({
  "../../node_modules/underscore/modules/some.js"() {
    init_react_import();
    init_cb();
    init_isArrayLike();
    init_keys();
    __name(some, "some");
  }
});

// ../../node_modules/underscore/modules/contains.js
function contains(obj, item, fromIndex, guard) {
  if (!isArrayLike_default(obj))
    obj = values(obj);
  if (typeof fromIndex != "number" || guard)
    fromIndex = 0;
  return indexOf_default(obj, item, fromIndex) >= 0;
}
var init_contains = __esm({
  "../../node_modules/underscore/modules/contains.js"() {
    init_react_import();
    init_isArrayLike();
    init_values();
    init_indexOf();
    __name(contains, "contains");
  }
});

// ../../node_modules/underscore/modules/invoke.js
var invoke_default;
var init_invoke = __esm({
  "../../node_modules/underscore/modules/invoke.js"() {
    init_react_import();
    init_restArguments();
    init_isFunction();
    init_map();
    init_deepGet();
    init_toPath2();
    invoke_default = restArguments(function(obj, path, args) {
      var contextPath, func;
      if (isFunction_default(path)) {
        func = path;
      } else {
        path = toPath2(path);
        contextPath = path.slice(0, -1);
        path = path[path.length - 1];
      }
      return map(obj, function(context) {
        var method = func;
        if (!method) {
          if (contextPath && contextPath.length) {
            context = deepGet(context, contextPath);
          }
          if (context == null)
            return void 0;
          method = context[path];
        }
        return method == null ? method : method.apply(context, args);
      });
    });
  }
});

// ../../node_modules/underscore/modules/pluck.js
function pluck(obj, key) {
  return map(obj, property(key));
}
var init_pluck = __esm({
  "../../node_modules/underscore/modules/pluck.js"() {
    init_react_import();
    init_map();
    init_property();
    __name(pluck, "pluck");
  }
});

// ../../node_modules/underscore/modules/where.js
function where(obj, attrs) {
  return filter(obj, matcher(attrs));
}
var init_where = __esm({
  "../../node_modules/underscore/modules/where.js"() {
    init_react_import();
    init_filter();
    init_matcher();
    __name(where, "where");
  }
});

// ../../node_modules/underscore/modules/max.js
function max(obj, iteratee2, context) {
  var result2 = -Infinity, lastComputed = -Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike_default(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result2) {
        result2 = value;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result2 === -Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
var init_max = __esm({
  "../../node_modules/underscore/modules/max.js"() {
    init_react_import();
    init_isArrayLike();
    init_values();
    init_cb();
    init_each();
    __name(max, "max");
  }
});

// ../../node_modules/underscore/modules/min.js
function min(obj, iteratee2, context) {
  var result2 = Infinity, lastComputed = Infinity, value, computed;
  if (iteratee2 == null || typeof iteratee2 == "number" && typeof obj[0] != "object" && obj != null) {
    obj = isArrayLike_default(obj) ? obj : values(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result2) {
        result2 = value;
      }
    }
  } else {
    iteratee2 = cb(iteratee2, context);
    each(obj, function(v, index, list) {
      computed = iteratee2(v, index, list);
      if (computed < lastComputed || computed === Infinity && result2 === Infinity) {
        result2 = v;
        lastComputed = computed;
      }
    });
  }
  return result2;
}
var init_min = __esm({
  "../../node_modules/underscore/modules/min.js"() {
    init_react_import();
    init_isArrayLike();
    init_values();
    init_cb();
    init_each();
    __name(min, "min");
  }
});

// ../../node_modules/underscore/modules/toArray.js
function toArray(obj) {
  if (!obj)
    return [];
  if (isArray_default(obj))
    return slice.call(obj);
  if (isString_default(obj)) {
    return obj.match(reStrSymbol);
  }
  if (isArrayLike_default(obj))
    return map(obj, identity);
  return values(obj);
}
var reStrSymbol;
var init_toArray = __esm({
  "../../node_modules/underscore/modules/toArray.js"() {
    init_react_import();
    init_isArray();
    init_setup();
    init_isString();
    init_isArrayLike();
    init_map();
    init_identity();
    init_values();
    reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    __name(toArray, "toArray");
  }
});

// ../../node_modules/underscore/modules/sample.js
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike_default(obj))
      obj = values(obj);
    return obj[random(obj.length - 1)];
  }
  var sample2 = toArray(obj);
  var length = getLength_default(sample2);
  n = Math.max(Math.min(n, length), 0);
  var last2 = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = random(index, last2);
    var temp = sample2[index];
    sample2[index] = sample2[rand];
    sample2[rand] = temp;
  }
  return sample2.slice(0, n);
}
var init_sample = __esm({
  "../../node_modules/underscore/modules/sample.js"() {
    init_react_import();
    init_isArrayLike();
    init_values();
    init_getLength();
    init_random();
    init_toArray();
    __name(sample, "sample");
  }
});

// ../../node_modules/underscore/modules/shuffle.js
function shuffle(obj) {
  return sample(obj, Infinity);
}
var init_shuffle = __esm({
  "../../node_modules/underscore/modules/shuffle.js"() {
    init_react_import();
    init_sample();
    __name(shuffle, "shuffle");
  }
});

// ../../node_modules/underscore/modules/sortBy.js
function sortBy(obj, iteratee2, context) {
  var index = 0;
  iteratee2 = cb(iteratee2, context);
  return pluck(map(obj, function(value, key, list) {
    return {
      value,
      index: index++,
      criteria: iteratee2(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0)
        return 1;
      if (a < b || b === void 0)
        return -1;
    }
    return left.index - right.index;
  }), "value");
}
var init_sortBy = __esm({
  "../../node_modules/underscore/modules/sortBy.js"() {
    init_react_import();
    init_cb();
    init_pluck();
    init_map();
    __name(sortBy, "sortBy");
  }
});

// ../../node_modules/underscore/modules/_group.js
function group(behavior, partition) {
  return function(obj, iteratee2, context) {
    var result2 = partition ? [
      [],
      []
    ] : {};
    iteratee2 = cb(iteratee2, context);
    each(obj, function(value, index) {
      var key = iteratee2(value, index, obj);
      behavior(result2, value, key);
    });
    return result2;
  };
}
var init_group = __esm({
  "../../node_modules/underscore/modules/_group.js"() {
    init_react_import();
    init_cb();
    init_each();
    __name(group, "group");
  }
});

// ../../node_modules/underscore/modules/groupBy.js
var groupBy_default;
var init_groupBy = __esm({
  "../../node_modules/underscore/modules/groupBy.js"() {
    init_react_import();
    init_group();
    init_has();
    groupBy_default = group(function(result2, value, key) {
      if (has(result2, key))
        result2[key].push(value);
      else
        result2[key] = [
          value
        ];
    });
  }
});

// ../../node_modules/underscore/modules/indexBy.js
var indexBy_default;
var init_indexBy = __esm({
  "../../node_modules/underscore/modules/indexBy.js"() {
    init_react_import();
    init_group();
    indexBy_default = group(function(result2, value, key) {
      result2[key] = value;
    });
  }
});

// ../../node_modules/underscore/modules/countBy.js
var countBy_default;
var init_countBy = __esm({
  "../../node_modules/underscore/modules/countBy.js"() {
    init_react_import();
    init_group();
    init_has();
    countBy_default = group(function(result2, value, key) {
      if (has(result2, key))
        result2[key]++;
      else
        result2[key] = 1;
    });
  }
});

// ../../node_modules/underscore/modules/partition.js
var partition_default;
var init_partition = __esm({
  "../../node_modules/underscore/modules/partition.js"() {
    init_react_import();
    init_group();
    partition_default = group(function(result2, value, pass) {
      result2[pass ? 0 : 1].push(value);
    }, true);
  }
});

// ../../node_modules/underscore/modules/size.js
function size(obj) {
  if (obj == null)
    return 0;
  return isArrayLike_default(obj) ? obj.length : keys(obj).length;
}
var init_size = __esm({
  "../../node_modules/underscore/modules/size.js"() {
    init_react_import();
    init_isArrayLike();
    init_keys();
    __name(size, "size");
  }
});

// ../../node_modules/underscore/modules/_keyInObj.js
function keyInObj(value, key, obj) {
  return key in obj;
}
var init_keyInObj = __esm({
  "../../node_modules/underscore/modules/_keyInObj.js"() {
    init_react_import();
    __name(keyInObj, "keyInObj");
  }
});

// ../../node_modules/underscore/modules/pick.js
var pick_default;
var init_pick = __esm({
  "../../node_modules/underscore/modules/pick.js"() {
    init_react_import();
    init_restArguments();
    init_isFunction();
    init_optimizeCb();
    init_allKeys();
    init_keyInObj();
    init_flatten();
    pick_default = restArguments(function(obj, keys2) {
      var result2 = {}, iteratee2 = keys2[0];
      if (obj == null)
        return result2;
      if (isFunction_default(iteratee2)) {
        if (keys2.length > 1)
          iteratee2 = optimizeCb(iteratee2, keys2[1]);
        keys2 = allKeys(obj);
      } else {
        iteratee2 = keyInObj;
        keys2 = flatten(keys2, false, false);
        obj = Object(obj);
      }
      for (var i = 0, length = keys2.length; i < length; i++) {
        var key = keys2[i];
        var value = obj[key];
        if (iteratee2(value, key, obj))
          result2[key] = value;
      }
      return result2;
    });
  }
});

// ../../node_modules/underscore/modules/omit.js
var omit_default;
var init_omit = __esm({
  "../../node_modules/underscore/modules/omit.js"() {
    init_react_import();
    init_restArguments();
    init_isFunction();
    init_negate();
    init_map();
    init_flatten();
    init_contains();
    init_pick();
    omit_default = restArguments(function(obj, keys2) {
      var iteratee2 = keys2[0], context;
      if (isFunction_default(iteratee2)) {
        iteratee2 = negate(iteratee2);
        if (keys2.length > 1)
          context = keys2[1];
      } else {
        keys2 = map(flatten(keys2, false, false), String);
        iteratee2 = /* @__PURE__ */ __name(function(value, key) {
          return !contains(keys2, key);
        }, "iteratee");
      }
      return pick_default(obj, iteratee2, context);
    });
  }
});

// ../../node_modules/underscore/modules/initial.js
function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}
var init_initial = __esm({
  "../../node_modules/underscore/modules/initial.js"() {
    init_react_import();
    init_setup();
    __name(initial, "initial");
  }
});

// ../../node_modules/underscore/modules/first.js
function first(array, n, guard) {
  if (array == null || array.length < 1)
    return n == null || guard ? void 0 : [];
  if (n == null || guard)
    return array[0];
  return initial(array, array.length - n);
}
var init_first = __esm({
  "../../node_modules/underscore/modules/first.js"() {
    init_react_import();
    init_initial();
    __name(first, "first");
  }
});

// ../../node_modules/underscore/modules/rest.js
function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}
var init_rest = __esm({
  "../../node_modules/underscore/modules/rest.js"() {
    init_react_import();
    init_setup();
    __name(rest, "rest");
  }
});

// ../../node_modules/underscore/modules/last.js
function last(array, n, guard) {
  if (array == null || array.length < 1)
    return n == null || guard ? void 0 : [];
  if (n == null || guard)
    return array[array.length - 1];
  return rest(array, Math.max(0, array.length - n));
}
var init_last = __esm({
  "../../node_modules/underscore/modules/last.js"() {
    init_react_import();
    init_rest();
    __name(last, "last");
  }
});

// ../../node_modules/underscore/modules/compact.js
function compact(array) {
  return filter(array, Boolean);
}
var init_compact = __esm({
  "../../node_modules/underscore/modules/compact.js"() {
    init_react_import();
    init_filter();
    __name(compact, "compact");
  }
});

// ../../node_modules/underscore/modules/flatten.js
function flatten2(array, depth) {
  return flatten(array, depth, false);
}
var init_flatten2 = __esm({
  "../../node_modules/underscore/modules/flatten.js"() {
    init_react_import();
    init_flatten();
    __name(flatten2, "flatten");
  }
});

// ../../node_modules/underscore/modules/difference.js
var difference_default;
var init_difference = __esm({
  "../../node_modules/underscore/modules/difference.js"() {
    init_react_import();
    init_restArguments();
    init_flatten();
    init_filter();
    init_contains();
    difference_default = restArguments(function(array, rest2) {
      rest2 = flatten(rest2, true, true);
      return filter(array, function(value) {
        return !contains(rest2, value);
      });
    });
  }
});

// ../../node_modules/underscore/modules/without.js
var without_default;
var init_without = __esm({
  "../../node_modules/underscore/modules/without.js"() {
    init_react_import();
    init_restArguments();
    init_difference();
    without_default = restArguments(function(array, otherArrays) {
      return difference_default(array, otherArrays);
    });
  }
});

// ../../node_modules/underscore/modules/uniq.js
function uniq(array, isSorted, iteratee2, context) {
  if (!isBoolean(isSorted)) {
    context = iteratee2;
    iteratee2 = isSorted;
    isSorted = false;
  }
  if (iteratee2 != null)
    iteratee2 = cb(iteratee2, context);
  var result2 = [];
  var seen = [];
  for (var i = 0, length = getLength_default(array); i < length; i++) {
    var value = array[i], computed = iteratee2 ? iteratee2(value, i, array) : value;
    if (isSorted && !iteratee2) {
      if (!i || seen !== computed)
        result2.push(value);
      seen = computed;
    } else if (iteratee2) {
      if (!contains(seen, computed)) {
        seen.push(computed);
        result2.push(value);
      }
    } else if (!contains(result2, value)) {
      result2.push(value);
    }
  }
  return result2;
}
var init_uniq = __esm({
  "../../node_modules/underscore/modules/uniq.js"() {
    init_react_import();
    init_isBoolean();
    init_cb();
    init_getLength();
    init_contains();
    __name(uniq, "uniq");
  }
});

// ../../node_modules/underscore/modules/union.js
var union_default;
var init_union = __esm({
  "../../node_modules/underscore/modules/union.js"() {
    init_react_import();
    init_restArguments();
    init_uniq();
    init_flatten();
    union_default = restArguments(function(arrays) {
      return uniq(flatten(arrays, true, true));
    });
  }
});

// ../../node_modules/underscore/modules/intersection.js
function intersection(array) {
  var result2 = [];
  var argsLength = arguments.length;
  for (var i = 0, length = getLength_default(array); i < length; i++) {
    var item = array[i];
    if (contains(result2, item))
      continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!contains(arguments[j], item))
        break;
    }
    if (j === argsLength)
      result2.push(item);
  }
  return result2;
}
var init_intersection = __esm({
  "../../node_modules/underscore/modules/intersection.js"() {
    init_react_import();
    init_getLength();
    init_contains();
    __name(intersection, "intersection");
  }
});

// ../../node_modules/underscore/modules/unzip.js
function unzip(array) {
  var length = array && max(array, getLength_default).length || 0;
  var result2 = Array(length);
  for (var index = 0; index < length; index++) {
    result2[index] = pluck(array, index);
  }
  return result2;
}
var init_unzip = __esm({
  "../../node_modules/underscore/modules/unzip.js"() {
    init_react_import();
    init_max();
    init_getLength();
    init_pluck();
    __name(unzip, "unzip");
  }
});

// ../../node_modules/underscore/modules/zip.js
var zip_default;
var init_zip = __esm({
  "../../node_modules/underscore/modules/zip.js"() {
    init_react_import();
    init_restArguments();
    init_unzip();
    zip_default = restArguments(unzip);
  }
});

// ../../node_modules/underscore/modules/object.js
function object(list, values2) {
  var result2 = {};
  for (var i = 0, length = getLength_default(list); i < length; i++) {
    if (values2) {
      result2[list[i]] = values2[i];
    } else {
      result2[list[i][0]] = list[i][1];
    }
  }
  return result2;
}
var init_object = __esm({
  "../../node_modules/underscore/modules/object.js"() {
    init_react_import();
    init_getLength();
    __name(object, "object");
  }
});

// ../../node_modules/underscore/modules/range.js
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }
  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range2 = Array(length);
  for (var idx = 0; idx < length; idx++, start += step) {
    range2[idx] = start;
  }
  return range2;
}
var init_range = __esm({
  "../../node_modules/underscore/modules/range.js"() {
    init_react_import();
    __name(range, "range");
  }
});

// ../../node_modules/underscore/modules/chunk.js
function chunk(array, count) {
  if (count == null || count < 1)
    return [];
  var result2 = [];
  var i = 0, length = array.length;
  while (i < length) {
    result2.push(slice.call(array, i, i += count));
  }
  return result2;
}
var init_chunk = __esm({
  "../../node_modules/underscore/modules/chunk.js"() {
    init_react_import();
    init_setup();
    __name(chunk, "chunk");
  }
});

// ../../node_modules/underscore/modules/_chainResult.js
function chainResult(instance, obj) {
  return instance._chain ? _(obj).chain() : obj;
}
var init_chainResult = __esm({
  "../../node_modules/underscore/modules/_chainResult.js"() {
    init_react_import();
    init_underscore();
    __name(chainResult, "chainResult");
  }
});

// ../../node_modules/underscore/modules/mixin.js
function mixin(obj) {
  each(functions(obj), function(name) {
    var func = _[name] = obj[name];
    _.prototype[name] = function() {
      var args = [
        this._wrapped
      ];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_, args));
    };
  });
  return _;
}
var init_mixin = __esm({
  "../../node_modules/underscore/modules/mixin.js"() {
    init_react_import();
    init_underscore();
    init_each();
    init_functions();
    init_setup();
    init_chainResult();
    __name(mixin, "mixin");
  }
});

// ../../node_modules/underscore/modules/underscore-array-methods.js
var underscore_array_methods_default;
var init_underscore_array_methods = __esm({
  "../../node_modules/underscore/modules/underscore-array-methods.js"() {
    init_react_import();
    init_underscore();
    init_each();
    init_setup();
    init_chainResult();
    each([
      "pop",
      "push",
      "reverse",
      "shift",
      "sort",
      "splice",
      "unshift"
    ], function(name) {
      var method = ArrayProto[name];
      _.prototype[name] = function() {
        var obj = this._wrapped;
        if (obj != null) {
          method.apply(obj, arguments);
          if ((name === "shift" || name === "splice") && obj.length === 0) {
            delete obj[0];
          }
        }
        return chainResult(this, obj);
      };
    });
    each([
      "concat",
      "join",
      "slice"
    ], function(name) {
      var method = ArrayProto[name];
      _.prototype[name] = function() {
        var obj = this._wrapped;
        if (obj != null)
          obj = method.apply(obj, arguments);
        return chainResult(this, obj);
      };
    });
    underscore_array_methods_default = _;
  }
});

// ../../node_modules/underscore/modules/index.js
var modules_exports = {};
__export(modules_exports, {
  VERSION: () => VERSION,
  after: () => after,
  all: () => every,
  allKeys: () => allKeys,
  any: () => some,
  assign: () => extendOwn_default,
  before: () => before,
  bind: () => bind_default,
  bindAll: () => bindAll_default,
  chain: () => chain,
  chunk: () => chunk,
  clone: () => clone,
  collect: () => map,
  compact: () => compact,
  compose: () => compose,
  constant: () => constant,
  contains: () => contains,
  countBy: () => countBy_default,
  create: () => create,
  debounce: () => debounce,
  default: () => underscore_array_methods_default,
  defaults: () => defaults_default,
  defer: () => defer_default,
  delay: () => delay_default,
  detect: () => find,
  difference: () => difference_default,
  drop: () => rest,
  each: () => each,
  escape: () => escape_default,
  every: () => every,
  extend: () => extend_default,
  extendOwn: () => extendOwn_default,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex_default,
  findKey: () => findKey,
  findLastIndex: () => findLastIndex_default,
  findWhere: () => findWhere,
  first: () => first,
  flatten: () => flatten2,
  foldl: () => reduce_default,
  foldr: () => reduceRight_default,
  forEach: () => each,
  functions: () => functions,
  get: () => get,
  groupBy: () => groupBy_default,
  has: () => has2,
  head: () => first,
  identity: () => identity,
  include: () => contains,
  includes: () => contains,
  indexBy: () => indexBy_default,
  indexOf: () => indexOf_default,
  initial: () => initial,
  inject: () => reduce_default,
  intersection: () => intersection,
  invert: () => invert,
  invoke: () => invoke_default,
  isArguments: () => isArguments_default,
  isArray: () => isArray_default,
  isArrayBuffer: () => isArrayBuffer_default,
  isBoolean: () => isBoolean,
  isDataView: () => isDataView_default,
  isDate: () => isDate_default,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isError: () => isError_default,
  isFinite: () => isFinite2,
  isFunction: () => isFunction_default,
  isMap: () => isMap_default,
  isMatch: () => isMatch,
  isNaN: () => isNaN2,
  isNull: () => isNull,
  isNumber: () => isNumber_default,
  isObject: () => isObject,
  isRegExp: () => isRegExp_default,
  isSet: () => isSet_default,
  isString: () => isString_default,
  isSymbol: () => isSymbol_default,
  isTypedArray: () => isTypedArray_default,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap_default,
  isWeakSet: () => isWeakSet_default,
  iteratee: () => iteratee,
  keys: () => keys,
  last: () => last,
  lastIndexOf: () => lastIndexOf_default,
  map: () => map,
  mapObject: () => mapObject,
  matcher: () => matcher,
  matches: () => matcher,
  max: () => max,
  memoize: () => memoize,
  methods: () => functions,
  min: () => min,
  mixin: () => mixin,
  negate: () => negate,
  noop: () => noop,
  now: () => now_default,
  object: () => object,
  omit: () => omit_default,
  once: () => once_default,
  pairs: () => pairs,
  partial: () => partial_default,
  partition: () => partition_default,
  pick: () => pick_default,
  pluck: () => pluck,
  property: () => property,
  propertyOf: () => propertyOf,
  random: () => random,
  range: () => range,
  reduce: () => reduce_default,
  reduceRight: () => reduceRight_default,
  reject: () => reject,
  rest: () => rest,
  restArguments: () => restArguments,
  result: () => result,
  sample: () => sample,
  select: () => filter,
  shuffle: () => shuffle,
  size: () => size,
  some: () => some,
  sortBy: () => sortBy,
  sortedIndex: () => sortedIndex,
  tail: () => rest,
  take: () => first,
  tap: () => tap,
  template: () => template,
  templateSettings: () => templateSettings_default,
  throttle: () => throttle,
  times: () => times,
  toArray: () => toArray,
  toPath: () => toPath,
  transpose: () => unzip,
  unescape: () => unescape_default,
  union: () => union_default,
  uniq: () => uniq,
  unique: () => uniq,
  uniqueId: () => uniqueId,
  unzip: () => unzip,
  values: () => values,
  where: () => where,
  without: () => without_default,
  wrap: () => wrap,
  zip: () => zip_default
});
var init_modules = __esm({
  "../../node_modules/underscore/modules/index.js"() {
    init_react_import();
    init_setup();
    init_restArguments();
    init_isObject();
    init_isNull();
    init_isUndefined();
    init_isBoolean();
    init_isElement();
    init_isString();
    init_isNumber();
    init_isDate();
    init_isRegExp();
    init_isError();
    init_isSymbol();
    init_isArrayBuffer();
    init_isDataView();
    init_isArray();
    init_isFunction();
    init_isArguments();
    init_isFinite();
    init_isNaN();
    init_isTypedArray();
    init_isEmpty();
    init_isMatch();
    init_isEqual();
    init_isMap();
    init_isWeakMap();
    init_isSet();
    init_isWeakSet();
    init_keys();
    init_allKeys();
    init_values();
    init_pairs();
    init_invert();
    init_functions();
    init_extend();
    init_extendOwn();
    init_defaults();
    init_create();
    init_clone();
    init_tap();
    init_get();
    init_has2();
    init_mapObject();
    init_identity();
    init_constant();
    init_noop();
    init_toPath();
    init_property();
    init_propertyOf();
    init_matcher();
    init_times();
    init_random();
    init_now();
    init_escape();
    init_unescape();
    init_templateSettings();
    init_template();
    init_result();
    init_uniqueId();
    init_chain();
    init_iteratee();
    init_partial();
    init_bind();
    init_bindAll();
    init_memoize();
    init_delay();
    init_defer();
    init_throttle();
    init_debounce();
    init_wrap();
    init_negate();
    init_compose();
    init_after();
    init_before();
    init_once();
    init_findKey();
    init_findIndex();
    init_findLastIndex();
    init_sortedIndex();
    init_indexOf();
    init_lastIndexOf();
    init_find();
    init_findWhere();
    init_each();
    init_map();
    init_reduce();
    init_reduceRight();
    init_filter();
    init_reject();
    init_every();
    init_some();
    init_contains();
    init_invoke();
    init_pluck();
    init_where();
    init_max();
    init_min();
    init_shuffle();
    init_sample();
    init_sortBy();
    init_groupBy();
    init_indexBy();
    init_countBy();
    init_partition();
    init_toArray();
    init_size();
    init_pick();
    init_omit();
    init_first();
    init_initial();
    init_last();
    init_rest();
    init_compact();
    init_flatten2();
    init_without();
    init_uniq();
    init_union();
    init_intersection();
    init_difference();
    init_unzip();
    init_zip();
    init_object();
    init_range();
    init_chunk();
    init_mixin();
    init_underscore_array_methods();
  }
});

// ../../node_modules/underscore/modules/index-default.js
var _2, index_default_default;
var init_index_default = __esm({
  "../../node_modules/underscore/modules/index-default.js"() {
    init_react_import();
    init_modules();
    init_modules();
    _2 = mixin(modules_exports);
    _2._ = _2;
    index_default_default = _2;
  }
});

// ../../node_modules/underscore/modules/index-all.js
var index_all_exports = {};
__export(index_all_exports, {
  VERSION: () => VERSION,
  after: () => after,
  all: () => every,
  allKeys: () => allKeys,
  any: () => some,
  assign: () => extendOwn_default,
  before: () => before,
  bind: () => bind_default,
  bindAll: () => bindAll_default,
  chain: () => chain,
  chunk: () => chunk,
  clone: () => clone,
  collect: () => map,
  compact: () => compact,
  compose: () => compose,
  constant: () => constant,
  contains: () => contains,
  countBy: () => countBy_default,
  create: () => create,
  debounce: () => debounce,
  default: () => index_default_default,
  defaults: () => defaults_default,
  defer: () => defer_default,
  delay: () => delay_default,
  detect: () => find,
  difference: () => difference_default,
  drop: () => rest,
  each: () => each,
  escape: () => escape_default,
  every: () => every,
  extend: () => extend_default,
  extendOwn: () => extendOwn_default,
  filter: () => filter,
  find: () => find,
  findIndex: () => findIndex_default,
  findKey: () => findKey,
  findLastIndex: () => findLastIndex_default,
  findWhere: () => findWhere,
  first: () => first,
  flatten: () => flatten2,
  foldl: () => reduce_default,
  foldr: () => reduceRight_default,
  forEach: () => each,
  functions: () => functions,
  get: () => get,
  groupBy: () => groupBy_default,
  has: () => has2,
  head: () => first,
  identity: () => identity,
  include: () => contains,
  includes: () => contains,
  indexBy: () => indexBy_default,
  indexOf: () => indexOf_default,
  initial: () => initial,
  inject: () => reduce_default,
  intersection: () => intersection,
  invert: () => invert,
  invoke: () => invoke_default,
  isArguments: () => isArguments_default,
  isArray: () => isArray_default,
  isArrayBuffer: () => isArrayBuffer_default,
  isBoolean: () => isBoolean,
  isDataView: () => isDataView_default,
  isDate: () => isDate_default,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isEqual: () => isEqual,
  isError: () => isError_default,
  isFinite: () => isFinite2,
  isFunction: () => isFunction_default,
  isMap: () => isMap_default,
  isMatch: () => isMatch,
  isNaN: () => isNaN2,
  isNull: () => isNull,
  isNumber: () => isNumber_default,
  isObject: () => isObject,
  isRegExp: () => isRegExp_default,
  isSet: () => isSet_default,
  isString: () => isString_default,
  isSymbol: () => isSymbol_default,
  isTypedArray: () => isTypedArray_default,
  isUndefined: () => isUndefined,
  isWeakMap: () => isWeakMap_default,
  isWeakSet: () => isWeakSet_default,
  iteratee: () => iteratee,
  keys: () => keys,
  last: () => last,
  lastIndexOf: () => lastIndexOf_default,
  map: () => map,
  mapObject: () => mapObject,
  matcher: () => matcher,
  matches: () => matcher,
  max: () => max,
  memoize: () => memoize,
  methods: () => functions,
  min: () => min,
  mixin: () => mixin,
  negate: () => negate,
  noop: () => noop,
  now: () => now_default,
  object: () => object,
  omit: () => omit_default,
  once: () => once_default,
  pairs: () => pairs,
  partial: () => partial_default,
  partition: () => partition_default,
  pick: () => pick_default,
  pluck: () => pluck,
  property: () => property,
  propertyOf: () => propertyOf,
  random: () => random,
  range: () => range,
  reduce: () => reduce_default,
  reduceRight: () => reduceRight_default,
  reject: () => reject,
  rest: () => rest,
  restArguments: () => restArguments,
  result: () => result,
  sample: () => sample,
  select: () => filter,
  shuffle: () => shuffle,
  size: () => size,
  some: () => some,
  sortBy: () => sortBy,
  sortedIndex: () => sortedIndex,
  tail: () => rest,
  take: () => first,
  tap: () => tap,
  template: () => template,
  templateSettings: () => templateSettings_default,
  throttle: () => throttle,
  times: () => times,
  toArray: () => toArray,
  toPath: () => toPath,
  transpose: () => unzip,
  unescape: () => unescape_default,
  union: () => union_default,
  uniq: () => uniq,
  unique: () => uniq,
  uniqueId: () => uniqueId,
  unzip: () => unzip,
  values: () => values,
  where: () => where,
  without: () => without_default,
  wrap: () => wrap,
  zip: () => zip_default
});
var init_index_all = __esm({
  "../../node_modules/underscore/modules/index-all.js"() {
    init_react_import();
    init_index_default();
    init_modules();
  }
});

// ../../node_modules/arc-is/index.js
var nativeTable, arc_is_default;
var init_arc_is = __esm({
  "../../node_modules/arc-is/index.js"() {
    init_react_import();
    nativeTable = {
      "[object Array]": "Array",
      "[object ArrayBuffer]": "ArrayBuffer",
      "[object Boolean]": "Boolean",
      "[object DataView]": "DataView",
      "[object Date]": "Date",
      "[object Error]": "Error",
      "[object EvalError]": "EvalError",
      "[object Float32Array]": "Float32Array",
      "[object Float64Array]": "Float64Array",
      "[object Function]": "Function",
      "[object AsyncFunction]": "AsyncFunction",
      "[object Int8Array]": "Int8Array",
      "[object Int16Array]": "Int16Array",
      "[object Int32Array]": "Int32Array",
      "[object Map]": "Map",
      "[object Number]": "Number",
      "[object Object]": "Object",
      "[object Proxy]": "Proxy",
      "[object Promise]": "Promise",
      "[object RangeError]": "RangeError",
      "[object ReferenceError]": "ReferenceError",
      "[object RegExp]": "RegExp",
      "[object Set]": "Set",
      "[object String]": "String",
      "[object Symbol]": "Symbol",
      "[object SyntaxError]": "SyntaxError",
      "[object TypeError]": "TypeError",
      "[object Uint8Array]": "Uint8Array",
      "[object Uint8ClampedArray]": "Uint8ClampedArray",
      "[object Uint16Array]": "Uint16Array",
      "[object Uint32Array]": "Uint32Array",
      "[object URIError]": "URIError",
      "[object WeakMap]": "WeakMap",
      "[object WeakSet]": "WeakSet"
    };
    arc_is_default = /* @__PURE__ */ __name((_val, _objType) => {
      let $return, toString2;
      if (_val === void 0) {
        return _objType ? "Undefined" : "undefined";
      }
      if (_val === null) {
        return _objType ? "Null" : "null";
      }
      $return = nativeTable[Object.prototype.toString.call(_val)];
      if ($return === "Number") {
        if (isNaN(_val)) {
          return !_objType ? "nan" : "NaN";
        }
        if (!isFinite(_val)) {
          return !_objType ? "infinity" : "Infinity";
        }
      }
      if (!_objType && $return) {
        return $return.toLowerCase() || "object";
      }
      if (_val.toString) {
        toString2 = _val.toString().match(/\[object ([^\]]*)\]/);
      }
      if (!toString2) {
        toString2 = Object.prototype.toString.call(_val).match(/\[object ([^\]]*)\]/);
      }
      if (!toString2) {
        return $return;
      }
      return !_objType ? toString2[1].toLowerCase() : toString2[1];
    }, "default");
  }
});

// ../../node_modules/arc-hash/index.js
var arc_hash_exports = {};
__export(arc_hash_exports, {
  default: () => arc_hash_default
});
var import_crypto, ArcHash, arc_hash_default;
var init_arc_hash = __esm({
  "../../node_modules/arc-hash/index.js"() {
    init_react_import();
    import_crypto = __toESM(require("crypto"), 1);
    init_arc_is();
    ArcHash = /* @__PURE__ */ __name(class ArcHash2 {
      static md5(_unknown, _secret = "") {
        switch (arc_is_default(_unknown)) {
          case "object":
            return ArcHash2.object(_unknown, "md5", _secret);
          case "array":
            return ArcHash2.array(_unknown, "md5", _secret);
          default:
            const hmac = _secret ? import_crypto.default.createHmac("md5", _secret) : import_crypto.default.createHash("md5");
            hmac.update(_unknown);
            return hmac.digest("hex");
        }
      }
      static sha256(_unknown, _secret = "") {
        switch (arc_is_default(_unknown)) {
          case "object":
            return ArcHash2.object(_unknown, "sha256", _secret);
          case "array":
            return ArcHash2.array(_unknown, "sha256", _secret);
          default:
            const hmac = _secret ? import_crypto.default.createHmac("sha256", _secret) : import_crypto.default.createHash("sha256");
            hmac.update(_unknown);
            return hmac.digest("hex");
        }
      }
      static object(_object, _algorithm, _secret = "") {
        const joinedStr = Object.keys(_object).sort().reduce((_join, _key) => {
          switch (arc_is_default(_object[_key])) {
            case "object":
              return _join + _key + ArcHash2.object(_object[_key], _algorithm, _secret);
            case "array":
              return _join + _key + ArcHash2.array(_object[_key], _algorithm, _secret);
            default:
              return _join + _key + String(_object[_key]);
          }
        }, "");
        return _algorithm === "sha256" ? ArcHash2.sha256(joinedStr, _secret) : ArcHash2.md5(joinedStr, _secret);
      }
      static array(_array, _algorithm, _secret = "") {
        const joinedStr = _array.reduce((_join, _val) => {
          switch (arc_is_default(_val)) {
            case "object":
              return _join + ArcHash2.object(_val, _algorithm, _secret);
            case "array":
              return _join + ArcHash2.array(_val, _algorithm, _secret);
            default:
              return _join + String(_val);
          }
        }, "");
        return _algorithm === "sha256" ? ArcHash2.sha256(joinedStr, _secret) : ArcHash2.md5(joinedStr, _secret);
      }
    }, "ArcHash");
    arc_hash_default = ArcHash;
  }
});

// ../../node_modules/flatted/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/flatted/cjs/index.js"(exports) {
    "use strict";
    init_react_import();
    var { parse: $parse, stringify: $stringify } = JSON;
    var { keys: keys2 } = Object;
    var Primitive = String;
    var primitive = "string";
    var ignore = {};
    var object2 = "object";
    var noop2 = /* @__PURE__ */ __name((_3, value) => value, "noop");
    var primitives = /* @__PURE__ */ __name((value) => value instanceof Primitive ? Primitive(value) : value, "primitives");
    var Primitives = /* @__PURE__ */ __name((_3, value) => typeof value === primitive ? new Primitive(value) : value, "Primitives");
    var revive = /* @__PURE__ */ __name((input, parsed, output, $) => {
      const lazy = [];
      for (let ke = keys2(output), { length } = ke, y = 0; y < length; y++) {
        const k = ke[y];
        const value = output[k];
        if (value instanceof Primitive) {
          const tmp = input[value];
          if (typeof tmp === object2 && !parsed.has(tmp)) {
            parsed.add(tmp);
            output[k] = ignore;
            lazy.push({
              k,
              a: [
                input,
                parsed,
                tmp,
                $
              ]
            });
          } else
            output[k] = $.call(output, k, tmp);
        } else if (output[k] !== ignore)
          output[k] = $.call(output, k, value);
      }
      for (let { length } = lazy, i = 0; i < length; i++) {
        const { k, a } = lazy[i];
        output[k] = $.call(output, k, revive.apply(null, a));
      }
      return output;
    }, "revive");
    var set = /* @__PURE__ */ __name((known, input, value) => {
      const index = Primitive(input.push(value) - 1);
      known.set(value, index);
      return index;
    }, "set");
    var parse = /* @__PURE__ */ __name((text, reviver) => {
      const input = $parse(text, Primitives).map(primitives);
      const value = input[0];
      const $ = reviver || noop2;
      const tmp = typeof value === object2 && value ? revive(input, /* @__PURE__ */ new Set(), value, $) : value;
      return $.call({
        "": tmp
      }, "", tmp);
    }, "parse");
    exports.parse = parse;
    var stringify = /* @__PURE__ */ __name((value, replacer, space) => {
      const $ = replacer && typeof replacer === object2 ? (k, v) => k === "" || -1 < replacer.indexOf(k) ? v : void 0 : replacer || noop2;
      const known = /* @__PURE__ */ new Map();
      const input = [];
      const output = [];
      let i = +set(known, input, $.call({
        "": value
      }, "", value));
      let firstRun = !i;
      while (i < input.length) {
        firstRun = true;
        output[i] = $stringify(input[i++], replace, space);
      }
      return "[" + output.join(",") + "]";
      function replace(key, value2) {
        if (firstRun) {
          firstRun = !firstRun;
          return value2;
        }
        const after2 = $.call(this, key, value2);
        switch (typeof after2) {
          case object2:
            if (after2 === null)
              return after2;
          case primitive:
            return known.get(after2) || set(known, input, after2);
        }
        return after2;
      }
      __name(replace, "replace");
    }, "stringify");
    exports.stringify = stringify;
    var toJSON = /* @__PURE__ */ __name((any) => $parse(stringify(any)), "toJSON");
    exports.toJSON = toJSON;
    var fromJSON = /* @__PURE__ */ __name((any) => parse($stringify(any)), "fromJSON");
    exports.fromJSON = fromJSON;
  }
});

// ../utils/lib/index.js
var require_lib = __commonJS({
  "../utils/lib/index.js"(exports, module2) {
    init_react_import();
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, {
          get: all[name],
          enumerable: true
        });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
            });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", {
        value: mod,
        enumerable: true
      }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", {
      value: true
    }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export2(src_exports2, {
      ObjectID: () => ObjectID
    });
    module2.exports = __toCommonJS2(src_exports2);
    var import_arc_hash = __toESM2((init_arc_hash(), __toCommonJS(arc_hash_exports)));
    var import_flatted = require_cjs();
    var ObjectID = /* @__PURE__ */ __name(class {
      static id(input) {
        return import_arc_hash.default.md5((0, import_flatted.stringify)(input));
      }
    }, "ObjectID");
  }
});

// ../buttons/lib/index.js
var require_lib2 = __commonJS({
  "../buttons/lib/index.js"(exports, module2) {
    init_react_import();
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", {
      value,
      configurable: true
    }), "__name");
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, {
          get: all[name],
          enumerable: true
        });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, {
              get: () => from[key],
              enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable
            });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", {
        value: mod,
        enumerable: true
      }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", {
      value: true
    }), mod), "__toCommonJS");
    var src_exports2 = {};
    __export2(src_exports2, {
      ActionButton: () => ActionButton,
      ActionButtonType: () => ActionButtonType,
      ActionButtonsFactory: () => ActionButtonsFactory,
      ActionsDropdownMenu: () => ActionsDropdownMenu,
      AddButton: () => AddButton,
      CancelButton: () => CancelButton,
      DeleteButton: () => DeleteButton,
      DeleteIconButton: () => DeleteIconButton,
      EditIconButton: () => EditIconButton,
      LockButton: () => LockButton,
      RippleButton: () => RippleButton2,
      SaveActionButton: () => SaveActionButton,
      SaveButton: () => SaveButton
    });
    module2.exports = __toCommonJS2(src_exports2);
    var import_react6 = __toESM2(require("react"));
    var import_react32 = require("@chakra-ui/react");
    var import_md2 = require("react-icons/md");
    var import_react22 = require("@chakra-ui/react");
    var import_chroma_js = __toESM2(require_chroma());
    var import_framer_motion2 = require("framer-motion");
    var defaults = {
      size: "md",
      variant: "solid",
      bgColorScheme: "primary",
      gap: 2,
      color: "white",
      fontWeight: "medium",
      rounded: "lg",
      cursor: "pointer",
      py: 3,
      px: 4,
      shadow: "none",
      backgroundPosition: "center",
      minWidth: "fit-content",
      overflow: "hidden"
    };
    function _extends2() {
      _extends2 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends2.apply(this, arguments);
    }
    __name(_extends2, "_extends");
    __name2(_extends2, "_extends");
    var pulse = (0, import_react22.keyframes)({
      "0%": {
        opacity: 0,
        transform: "scale(0)"
      },
      "33%": {
        opacity: 1,
        transform: "scale(5)"
      },
      "100%": {
        opacity: 0,
        transform: "scale(30)"
      }
    });
    var RippleButton2 = /* @__PURE__ */ __name2(({ children, size: size2 = "md", bgColorScheme = "primary", bgColor = {
      step1: `${bgColorScheme}.600`,
      step2: `${bgColorScheme}.700`,
      step3: `${bgColorScheme}.800`
    }, ...properties }) => {
      const [step1, step2, step3] = (0, import_react22.useToken)("colors", [
        // @ts-ignore
        bgColor.step1,
        // @ts-ignore
        bgColor.step2,
        // @ts-ignore
        bgColor.step3
      ]);
      return /* @__PURE__ */ import_react6.default.createElement(import_react22.Button, _extends2({}, defaults, {
        as: import_framer_motion2.motion.button,
        size: size2,
        style: {
          background: `linear-gradient(60deg, ${step1} 0%, ${(0, import_chroma_js.default)(step1).brighten(0.1).hex()} 100%)`
        },
        sx: {
          "&::before": {
            content: "' '",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255,255,255,.4)",
            borderRadius: "50%",
            width: "10px",
            height: "10px",
            margin: "auto",
            opacity: 0
          }
        },
        whileHover: {
          background: [
            `linear-gradient(60deg, ${step2} 0%, ${(0, import_chroma_js.default)(step2).brighten(0.1).hex()} 100%)`,
            `linear-gradient(60deg, ${step2} 0%, ${(0, import_chroma_js.default)(step2).brighten(1).hex()} 100%)`,
            `linear-gradient(60deg, ${(0, import_chroma_js.default)(step2).brighten(1.3).hex()} 0%, ${step2} 100%)`,
            `linear-gradient(60deg, ${(0, import_chroma_js.default)(step2).brighten(0.1).hex()} 0%, ${step2} 100%)`
          ],
          transition: {
            duration: 3,
            type: "spring",
            repeat: Number.POSITIVE_INFINITY
          }
        },
        _active: {
          // @ts-ignore
          bgColor: `${step3}`,
          "&::before": {
            animation: `${pulse} 0.8s linear`
          }
        }
      }, properties), children);
    }, "RippleButton");
    function _extends22() {
      _extends22 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends22.apply(this, arguments);
    }
    __name(_extends22, "_extends2");
    __name2(_extends22, "_extends");
    var SaveButton = /* @__PURE__ */ __name2((properties) => /* @__PURE__ */ import_react6.default.createElement(RippleButton2, _extends22({}, properties), /* @__PURE__ */ import_react6.default.createElement(import_react32.Icon, {
      as: import_md2.MdSave,
      boxSize: 5
    }), /* @__PURE__ */ import_react6.default.createElement(import_react32.Text, null, "Save")), "SaveButton");
    var import_react42 = require("@chakra-ui/react");
    var import_underscore14 = (init_index_all(), __toCommonJS(index_all_exports));
    var import_react52 = require("react");
    var import_md22 = require("react-icons/md");
    var import_utils = require_lib();
    function _extends3() {
      _extends3 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends3.apply(this, arguments);
    }
    __name(_extends3, "_extends3");
    __name2(_extends3, "_extends");
    var ActionsDropdownMenu = /* @__PURE__ */ __name2(({ menuName = "Actions", items = [] }) => {
      const cachedItems = (0, import_react52.useMemo)(() => items.map((item, itemIndex) => {
        return {
          ...item,
          key: import_utils.ObjectID.id((0, import_underscore14.omit)({
            ...item,
            itemIndex
          }, [
            "props",
            "text.props",
            "text.type",
            "text._owner"
          ]))
        };
      }), [
        items
      ]);
      return /* @__PURE__ */ import_react6.default.createElement(import_react42.Box, {
        position: "relative",
        right: 0
      }, /* @__PURE__ */ import_react6.default.createElement(import_react42.Menu, {
        offset: [
          0,
          0
        ],
        strategy: "fixed",
        placement: "bottom-end"
      }, ({ isOpen }) => /* @__PURE__ */ import_react6.default.createElement(import_react42.Box, null, /* @__PURE__ */ import_react6.default.createElement(import_react42.MenuButton, {
        isActive: isOpen,
        borderBottomRightRadius: isOpen ? 0 : 10,
        borderBottomLeftRadius: isOpen ? 0 : 10,
        as: import_react42.Button,
        variant: "solid",
        colorScheme: "primary",
        rightIcon: /* @__PURE__ */ import_react6.default.createElement(import_react42.Icon, {
          as: import_md22.MdArrowDropDown,
          fontSize: "2xl"
        })
      }, menuName), /* @__PURE__ */ import_react6.default.createElement(import_react42.MenuList, {
        rounded: "lg",
        boxShadow: "lg",
        py: 0,
        overflow: "hidden",
        borderTopRightRadius: 0
      }, cachedItems.map((item) => item.isDivider ? /* @__PURE__ */ import_react6.default.createElement(import_react42.Box, {
        textAlign: "center",
        height: "12px",
        key: item.key,
        width: "90%",
        m: "auto"
      }, /* @__PURE__ */ import_react6.default.createElement(import_react42.MenuDivider, {
        borderColor: "gray.300"
      }), /* @__PURE__ */ import_react6.default.createElement(import_react42.Text, {
        as: "span",
        position: "relative",
        top: "-25px",
        bgColor: "white",
        px: 5,
        fontSize: "xs",
        fontWeight: "medium"
      }, item.text)) : /* @__PURE__ */ import_react6.default.createElement(import_react42.MenuItem, _extends3({
        key: item.key
      }, item.props, {
        py: 3,
        alignItems: "center",
        fontSize: "sm",
        textTransform: "uppercase",
        gap: 3,
        iconSpacing: 0,
        _hover: {
          fontWeight: "bold",
          bgColor: "blackAlpha.200"
        }
      }), item.text))))));
    }, "ActionsDropdownMenu");
    var import_react62 = require("@chakra-ui/react");
    var import_hi = require("react-icons/hi");
    function _extends4() {
      _extends4 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends4.apply(this, arguments);
    }
    __name(_extends4, "_extends4");
    __name2(_extends4, "_extends");
    var DeleteIconButton = /* @__PURE__ */ __name2((properties) => /* @__PURE__ */ import_react6.default.createElement(RippleButton2, _extends4({
      size: "sm"
    }, properties, {
      bgColor: {
        step1: "red.400",
        step2: "red.600",
        step3: "red.800"
      },
      p: 2
    }), /* @__PURE__ */ import_react6.default.createElement(import_react62.Icon, {
      as: import_hi.HiOutlineTrash,
      boxSize: 4
    })), "DeleteIconButton");
    var import_react7 = require("@chakra-ui/react");
    var import_md3 = require("react-icons/md");
    function _extends5() {
      _extends5 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends5.apply(this, arguments);
    }
    __name(_extends5, "_extends5");
    __name2(_extends5, "_extends");
    var EditIconButton = /* @__PURE__ */ __name2((properties) => /* @__PURE__ */ import_react6.default.createElement(RippleButton2, _extends5({
      size: "sm"
    }, properties, {
      p: 2,
      borderRadius: 60,
      rounded: 60
    }), /* @__PURE__ */ import_react6.default.createElement(import_react7.Icon, {
      as: import_md3.MdEdit,
      boxSize: 4
    })), "EditIconButton");
    function _extends6() {
      _extends6 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends6.apply(this, arguments);
    }
    __name(_extends6, "_extends6");
    __name2(_extends6, "_extends");
    var CancelButton = /* @__PURE__ */ __name2((properties) => /* @__PURE__ */ import_react6.default.createElement(RippleButton2, _extends6({
      bgColorScheme: "red"
    }, properties), "Cancel"), "CancelButton");
    function _extends7() {
      _extends7 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends7.apply(this, arguments);
    }
    __name(_extends7, "_extends7");
    __name2(_extends7, "_extends");
    var AddButton = /* @__PURE__ */ __name2((properties) => /* @__PURE__ */ import_react6.default.createElement(RippleButton2, _extends7({}, properties), "Add New"), "AddButton");
    function _extends8() {
      _extends8 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends8.apply(this, arguments);
    }
    __name(_extends8, "_extends8");
    __name2(_extends8, "_extends");
    var DeleteButton = /* @__PURE__ */ __name2((properties) => /* @__PURE__ */ import_react6.default.createElement(RippleButton2, _extends8({
      bgColorScheme: "red"
    }, properties), "Delete"), "DeleteButton");
    var import_react8 = require("@chakra-ui/react");
    var import_bs = require("react-icons/bs");
    var LockButton = /* @__PURE__ */ __name2(({ onClick }) => /* @__PURE__ */ import_react6.default.createElement(import_react8.Button, {
      onClick
    }, /* @__PURE__ */ import_react6.default.createElement(import_react8.Icon, {
      as: import_bs.BsShieldLockFill,
      boxSize: 18
    })), "LockButton");
    var import_underscore22 = (init_index_all(), __toCommonJS(index_all_exports));
    function _extends9() {
      _extends9 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends9.apply(this, arguments);
    }
    __name(_extends9, "_extends9");
    __name2(_extends9, "_extends");
    var ActionButton = /* @__PURE__ */ __name2(({ children, ...properties }) => /* @__PURE__ */ import_react6.default.createElement(RippleButton2, _extends9({
      variant: "solid",
      size: "md",
      bgColorScheme: properties.colorScheme || "primary"
    }, (0, import_underscore22.omit)(properties, [
      "bgColor",
      "actionName"
    ])), children), "ActionButton");
    var import_react9 = require("@chakra-ui/react");
    var import_react10 = require("react");
    var import_md4 = require("react-icons/md");
    var buttonProperties = {
      bgColorScheme: "primary",
      gap: 2,
      variant: "solid"
    };
    var ButtonContent = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(import_react9.Icon, {
      as: import_md4.MdSave,
      boxSize: 5
    }), /* @__PURE__ */ import_react6.default.createElement(import_react9.Text, null, "Save"));
    var SaveActionButton = /* @__PURE__ */ __name2((properties) => {
      const renderComponent = (0, import_react10.useCallback)((children) => ActionButton({
        ...properties,
        ...buttonProperties,
        children
      }), [
        properties
      ]);
      return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, renderComponent(ButtonContent));
    }, "SaveActionButton");
    var import_react13 = require("react");
    var import_react11 = require("@chakra-ui/react");
    var import_react12 = require("react");
    var import_md5 = require("react-icons/md");
    var buttonProperties2 = {
      bgColorScheme: "red",
      gap: 2,
      variant: "solid"
    };
    var ButtonContent2 = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(import_react11.Icon, {
      as: import_md5.MdCancel,
      boxSize: 5
    }), /* @__PURE__ */ import_react6.default.createElement(import_react11.Text, null, "Cancel"));
    var CancelActionButton = /* @__PURE__ */ __name2((properties) => {
      const renderComponent = (0, import_react12.useCallback)((children) => ActionButton({
        ...properties,
        ...buttonProperties2,
        children
      }), [
        properties
      ]);
      return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, renderComponent(ButtonContent2));
    }, "CancelActionButton");
    function _extends10() {
      _extends10 = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends10.apply(this, arguments);
    }
    __name(_extends10, "_extends10");
    __name2(_extends10, "_extends");
    var ActionButtonType;
    (function(ActionButtonType2) {
      ActionButtonType2["SAVE"] = "SaveActionButton";
      ActionButtonType2["CANCEL"] = "CancelActionButton";
    })(ActionButtonType || (ActionButtonType = {}));
    var actionButtonMapping = {
      [ActionButtonType.SAVE]: SaveActionButton,
      [ActionButtonType.CANCEL]: CancelActionButton
    };
    var ActionButtonsFactory = /* @__PURE__ */ __name2(({ actionType, ...rest2 }) => {
      const TargetComponent = (0, import_react13.useMemo)(() => actionButtonMapping[actionType], [
        actionType
      ]);
      return /* @__PURE__ */ import_react6.default.createElement(TargetComponent, _extends10({}, rest2));
    }, "ActionButtonsFactory");
  }
});

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Pane: () => Pane,
  PaneContext: () => PaneContext,
  PaneContextProvider: () => PaneContextProvider,
  usePaneHook: () => usePaneHook
});
module.exports = __toCommonJS(src_exports);
init_react_import();

// src/pane.tsx
init_react_import();
var import_react3 = require("@chakra-ui/react");
var import_framer_motion = require("framer-motion");
var import_react4 = require("react");
var import_md = require("react-icons/md");
var import_buttons = __toESM(require_lib2());

// src/pane-context.tsx
init_react_import();
var import_react2 = require("react");
var initial2 = {
  leftPaneProperties: {},
  rightPaneProperties: {},
  togglePane: () => {
  },
  options: {
    toggleButton: true,
    isDraggble: false,
    isOpen: true,
    leftPaneCloseSize: 0,
    leftPaneOpenSize: 0
  },
  isOpen: true,
  setLeftPaneProperties: () => {
    throw new Error("Function not implemented.");
  },
  setRightPaneProperties: () => {
    throw new Error("Function not implemented.");
  }
};
var PaneContext = /* @__PURE__ */ (0, import_react2.createContext)(initial2);
var PaneContextProvider = /* @__PURE__ */ __name(({ userOptions, children }) => {
  const options = {
    toggleButton: true,
    isDraggble: false,
    isOpen: true,
    ...userOptions
  };
  const [isOpen, setIsOpen] = (0, import_react2.useState)(options.isOpen);
  const [leftPaneProperties, setLeftPaneProperties] = (0, import_react2.useState)({
    width: isOpen ? options.leftPaneOpenSize : options.leftPaneCloseSize
  });
  const [rightPaneProperties, setRightPaneProperties] = (0, import_react2.useState)({
    width: "100%"
  });
  const togglePane = (0, import_react2.useCallback)(() => setIsOpen(!isOpen), [
    isOpen
  ]);
  return /* @__PURE__ */ import_react.default.createElement(PaneContext.Provider, {
    value: {
      leftPaneProperties,
      rightPaneProperties,
      setLeftPaneProperties,
      setRightPaneProperties,
      togglePane,
      isOpen,
      options
    }
  }, children);
}, "PaneContextProvider");

// src/pane.tsx
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
__name(_extends, "_extends");
var Pane = /* @__PURE__ */ __name(({ leftComponent, rightComponent }) => {
  const { leftPaneProperties, rightPaneProperties, togglePane, isOpen, options } = (0, import_react4.useContext)(PaneContext);
  const [mouseState, setMouseState] = (0, import_react4.useState)();
  const y = (0, import_react4.useMemo)(() => {
    if (!mouseState?.target || !mouseState.pageY)
      return 0;
    return mouseState.pageY - (mouseState?.target).offsetParent.getClientRects()[0].top - 60;
  }, [
    mouseState
  ]);
  const icon = (0, import_react4.useMemo)(() => isOpen ? import_md.MdKeyboardArrowLeft : import_md.MdKeyboardArrowRight, [
    isOpen
  ]);
  const variants = {
    open: {
      width: options.leftPaneOpenSize,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.6
      }
    },
    close: {
      width: options.leftPaneCloseSize,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.6
      }
    }
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react3.Stack, {
    spacing: 0,
    direction: "row"
  }, /* @__PURE__ */ import_react.default.createElement(import_react3.Box, _extends({
    as: import_framer_motion.motion.div
  }, leftPaneProperties, {
    variants,
    animate: isOpen ? "open" : "close"
  }), leftComponent), /* @__PURE__ */ import_react.default.createElement(import_react3.Box, null, /* @__PURE__ */ import_react.default.createElement(import_react3.Center, {
    margin: 0,
    padding: 0,
    display: "flex",
    position: "relative",
    width: "13px",
    height: "100%",
    onMouseMove: (event_) => {
      if (event_.target?.id === "track") {
        setMouseState(event_);
      }
    },
    id: "track",
    borderLeft: "3px solid transparent"
  }, /* @__PURE__ */ import_react.default.createElement(import_buttons.RippleButton, {
    bgColorScheme: "primary",
    size: "3xs",
    rounded: 60,
    position: "absolute",
    onClick: () => togglePane(),
    "aria-label": "",
    cursor: "pointer",
    p: 0,
    top: `${y}px`
  }, /* @__PURE__ */ import_react.default.createElement(import_react3.Icon, {
    fontSize: 30,
    as: icon
  })))), /* @__PURE__ */ import_react.default.createElement(import_react3.Box, _extends({}, rightPaneProperties), rightComponent));
}, "Pane");

// src/use-pane-hook.tsx
init_react_import();
var import_react5 = require("react");
var usePaneHook = /* @__PURE__ */ __name((leftProperties, rightProperties) => {
  const paneContext = (0, import_react5.useContext)(PaneContext);
  (0, import_react5.useEffect)(() => paneContext.setLeftPaneProperties((previous) => ({
    ...previous,
    ...leftProperties
  })), []);
  (0, import_react5.useEffect)(() => paneContext.setRightPaneProperties((previous) => ({
    ...previous,
    ...rightProperties
  })), []);
  return {
    togglePane: paneContext.togglePane,
    setLeftPaneProperties: paneContext.setLeftPaneProperties,
    setRightPaneProperties: paneContext.setRightPaneProperties
  };
}, "usePaneHook");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Pane,
  PaneContext,
  PaneContextProvider,
  usePaneHook
});
/*! Bundled license information:

chroma-js/chroma.js:
  (**
   * chroma.js - JavaScript library for color conversions
   *
   * Copyright (c) 2011-2019, Gregor Aisch
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   * list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   * derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * -------------------------------------------------------
   *
   * chroma.js includes colors from colorbrewer2.org, which are released under
   * the following license:
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
   * and The Pennsylvania State University.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   * either express or implied. See the License for the specific
   * language governing permissions and limitations under the License.
   *
   * ------------------------------------------------------
   *
   * Named colors are taken from X11 Color Names.
   * http://www.w3.org/TR/css3-color/#svg-color
   *
   * @preserve
   *)

flatted/cjs/index.js:
  (*! (c) 2020 Andrea Giammarchi *)
*/
