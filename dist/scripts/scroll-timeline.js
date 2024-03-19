var __defProp = Object.defineProperty, __defNormalProp = (e, t, n) => t in e ? __defProp(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n, __publicField = (e, t, n) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, n), n);
!function() {
  "use strict";
  class e {
  }
  class t extends e {
    constructor(e2) {
      super(), __publicField(this, "value"), this.value = e2;
    }
  }
  class n extends e {
    constructor(e2) {
      super(), __publicField(this, "value"), this.value = e2;
    }
  }
  class i extends e {
    constructor(e2) {
      super(), __publicField(this, "value"), this.value = e2;
    }
  }
  class r extends e {
    constructor(e2, t2 = "unrestricted") {
      super(), __publicField(this, "type"), __publicField(this, "value"), this.value = e2, this.type = t2;
    }
  }
  class o extends e {
    constructor(e2) {
      super(), __publicField(this, "value"), this.value = e2;
    }
  }
  class s extends e {
  }
  class a extends e {
    constructor(e2) {
      super(), __publicField(this, "value"), this.value = e2;
    }
  }
  class l extends e {
  }
  class c extends e {
    constructor(e2) {
      super(), __publicField(this, "value"), this.value = e2;
    }
  }
  class u extends e {
    constructor(e2, t2 = "integer") {
      super(), __publicField(this, "value"), __publicField(this, "type"), this.value = e2, this.type = t2;
    }
  }
  class m extends e {
    constructor(e2) {
      super(), __publicField(this, "value"), this.value = e2;
    }
  }
  class f extends e {
    constructor(e2, t2, n2) {
      super(), __publicField(this, "value"), __publicField(this, "type"), __publicField(this, "unit"), this.value = e2, this.type = t2, this.unit = n2;
    }
  }
  class h extends e {
  }
  class p extends e {
  }
  class d extends e {
  }
  class S extends e {
  }
  class g extends e {
  }
  class v extends e {
  }
  class T extends e {
  }
  class y extends e {
  }
  class w extends e {
  }
  class x extends e {
  }
  class b extends e {
  }
  class C extends e {
  }
  class E {
    constructor(e2) {
      __publicField(this, "input"), __publicField(this, "index", 0), this.input = e2;
    }
    consume() {
      const e2 = this.input.codePointAt(this.index);
      return void 0 !== e2 && (this.index += String.fromCodePoint(e2).length), e2;
    }
    reconsume(e2) {
      void 0 !== e2 && (this.index -= String.fromCodePoint(e2).length);
    }
    peek() {
      const e2 = [];
      let t2 = this.index;
      for (let n2 = 0; n2 < 3 && t2 < this.input.length; n2++) {
        const n3 = this.input.codePointAt(t2);
        e2.push(n3), t2 += String.fromCodePoint(n3).length;
      }
      return e2;
    }
  }
  function k(e2) {
    return 10 === e2;
  }
  function M(e2) {
    return k(e2) || 8192 === e2 || 32 === e2;
  }
  function P(e2) {
    return e2 >= 48 && e2 <= 57;
  }
  function I(e2) {
    return P(e2) || e2 >= 65 && e2 <= 70 || e2 >= 97 && e2 <= 102;
  }
  function R(e2) {
    return function(e3) {
      return function(e4) {
        return e4 >= 65 && e4 <= 90;
      }(e3) || function(e4) {
        return e4 >= 97 && e4 <= 122;
      }(e3);
    }(e2) || function(e3) {
      return e3 >= 128;
    }(e2) || 95 === e2;
  }
  function N(e2) {
    return R(e2) || P(e2) || 45 === e2;
  }
  function A(e2) {
    return e2 >= 0 && e2 <= 8 || 11 === e2 || e2 >= 14 && e2 <= 31 || 127 === e2;
  }
  function V(e2, t2) {
    return 92 === e2 && !k(t2);
  }
  function _(e2, t2, n2) {
    return 45 === e2 ? R(t2) || 45 === t2 || V(t2, n2) : !!R(e2) || 92 === e2 && V(e2, t2);
  }
  function L(e2, t2, n2) {
    return 43 === e2 || 45 === e2 ? P(t2) || 46 === t2 && P(n2) : P(46 === e2 ? t2 : e2);
  }
  function O(e2) {
    const t2 = e2.consume();
    if (I(t2)) {
      let n2 = [t2];
      for (; I(...e2.peek()) && n2.length < 5; )
        n2.push(e2.consume());
      M(...e2.peek()) && e2.consume();
      const i2 = parseInt(String.fromCodePoint(...n2), 16);
      return 0 === i2 || i2 > 1114111 ? 65533 : i2;
    }
    return void 0 === t2 ? 65533 : t2;
  }
  function U(e2, t2) {
    const n2 = new o("");
    for (; ; ) {
      const i2 = e2.consume();
      if (i2 === t2)
        return n2;
      if (void 0 === i2)
        return n2;
      if (10 === i2)
        return e2.reconsume(i2), new s();
      if (92 === i2) {
        const t3 = e2.peek()[0];
        void 0 === t3 || (k(t3) ? e2.consume() : n2.value += String.fromCodePoint(O(e2)));
      } else
        n2.value += String.fromCodePoint(i2);
    }
  }
  function j(e2) {
    let t2 = "";
    for (; ; ) {
      const n2 = e2.consume();
      if (N(n2))
        t2 += String.fromCodePoint(n2);
      else {
        if (!V(...e2.peek()))
          return e2.reconsume(n2), t2;
        t2 += String.fromCodePoint(O(e2));
      }
    }
  }
  function W(e2) {
    let t2 = function(e3) {
      let t3 = "integer", n2 = "";
      for ([43, 45].includes(e3.peek()[0]) && (n2 += String.fromCodePoint(e3.consume())); P(...e3.peek()); )
        n2 += String.fromCodePoint(e3.consume());
      if (46 === e3.peek()[0] && P(e3.peek()[1]))
        for (n2 += String.fromCodePoint(e3.consume(), e3.consume()), t3 = "number"; P(...e3.peek()); )
          n2 += String.fromCodePoint(e3.consume());
      return [69, 101].includes(e3.peek()[0]) && ([45, 43].includes(e3.peek()[1]) && P(e3.peek()[2]) ? (n2 += String.fromCodePoint(e3.consume(), e3.consume(), e3.consume()), t3 = "number") : P(e3.peek()[1]) && (n2 += String.fromCodePoint(e3.consume(), e3.consume()), t3 = "number")), { value: parseFloat(n2), type: t3 };
    }(e2);
    return _(...e2.peek()) ? new f(t2.value, t2.type, j(e2)) : 37 === e2.peek()[0] ? (e2.consume(), new m(t2.value)) : new u(t2.value, t2.type);
  }
  function F(e2) {
    for (; ; ) {
      const t2 = e2.consume();
      if (41 === t2 || void 0 === t2)
        return;
      V(...e2.peek()) && O(e2);
    }
  }
  function D(e2) {
    const i2 = j(e2);
    if (i2.match(/url/i) && 40 === e2.peek()[0]) {
      for (e2.consume(); M(e2.peek()[0]) && M(e2.peek()[1]); )
        e2.consume();
      return [34, 39].includes(e2.peek()[0]) || M(e2.peek()[0]) && [34, 39].includes(e2.peek()[1]) ? new n(i2) : function(e3) {
        const t2 = new a("");
        for (; M(...e3.peek()); )
          e3.consume();
        for (; ; ) {
          const n2 = e3.consume();
          if (41 === n2)
            return t2;
          if (void 0 === n2)
            return t2;
          if (M(n2)) {
            for (; M(...e3.peek()); )
              e3.consume();
            return 41 === e3.peek()[0] || void 0 === e3.peek()[0] ? (e3.consume(), t2) : (F(e3), new l());
          }
          if ([34, 39, 40].includes(n2) || A(n2))
            return F(e3), new l();
          if (92 === n2) {
            if (!V(...e3.peek()))
              return F(e3), new l();
            t2.value += O(e3);
          } else
            t2.value += String.fromCodePoint(n2);
        }
      }(e2);
    }
    return 40 === e2.peek()[0] ? (e2.consume(), new n(i2)) : new t(i2);
  }
  function z(e2) {
    const t2 = e2.consume(), n2 = e2.peek();
    if (M(t2)) {
      for (; M(...e2.peek()); )
        e2.consume();
      return new h();
    }
    if (34 === t2)
      return U(e2, t2);
    if (35 === t2) {
      if (N(n2[0]) || V(...n2)) {
        const t3 = new r();
        return _(...n2) && (t3.type = "id"), t3.value = j(e2), t3;
      }
      return new c(String.fromCodePoint(t2));
    }
    return 39 === t2 ? U(e2, t2) : 40 === t2 ? new w() : 41 === t2 ? new x() : 43 === t2 ? L(...n2) ? (e2.reconsume(t2), W(e2)) : new c(String.fromCodePoint(t2)) : 44 === t2 ? new v() : 45 === t2 ? L(...e2.peek()) ? (e2.reconsume(t2), W(e2)) : 45 === e2.peek()[0] && 62 === e2.peek()[1] ? (e2.consume(), e2.consume(), new d()) : _(...e2.peek()) ? (e2.reconsume(t2), D(e2)) : new c(String.fromCodePoint(t2)) : 46 === t2 ? L(...e2.peek()) ? (e2.reconsume(t2), W(e2)) : new c(String.fromCodePoint(t2)) : 58 === t2 ? new S() : 59 === t2 ? new g() : 60 === t2 ? 33 === n2[0] && 45 === n2[1] && 45 === n2[2] ? (e2.consume(), e2.consume(), e2.consume(), new p()) : new c(String.fromCodePoint(t2)) : 64 === t2 ? _(...n2) ? new i(j(e2)) : new c(String.fromCodePoint(t2)) : 91 === t2 ? new T() : 92 === t2 ? V(...n2) ? (e2.reconsume(t2), D(e2)) : new c(String.fromCodePoint(t2)) : 93 === t2 ? new y() : 123 === t2 ? new b() : 125 === t2 ? new C() : P(t2) ? (e2.reconsume(t2), W(e2)) : R(t2) ? (e2.reconsume(t2), D(e2)) : void 0 === t2 ? void 0 : new c(String.fromCodePoint(t2));
  }
  const H = /* @__PURE__ */ new Set(["px", "deg", "s", "hz", "dppx", "number", "fr"]);
  function $(e2) {
    return H.has(e2.toLowerCase());
  }
  function q(e2, t2) {
    if (["x", "y"].includes(e2))
      return e2;
    if (!t2)
      throw new Error("To determine the normalized axis the computedStyle of the source is required.");
    const n2 = "horizontal-tb" == t2.writingMode;
    if ("block" === e2)
      e2 = n2 ? "y" : "x";
    else {
      if ("inline" !== e2)
        throw new TypeError(`Invalid axis \u201C${e2}\u201D`);
      e2 = n2 ? "x" : "y";
    }
    return e2;
  }
  function B(e2) {
    const t2 = [];
    let n2 = 0;
    function i2() {
      let t3 = 0;
      const i3 = n2;
      for (; n2 < e2.length; ) {
        const i4 = e2.slice(n2, n2 + 1);
        if (/\s/.test(i4) && 0 === t3)
          break;
        if ("(" === i4)
          t3 += 1;
        else if (")" === i4 && (t3 -= 1, 0 === t3)) {
          n2++;
          break;
        }
        n2++;
      }
      return e2.slice(i3, n2);
    }
    function r2() {
      for (; /\s/.test(e2.slice(n2, n2 + 1)); )
        n2++;
    }
    for (; n2 < e2.length; ) {
      const o2 = e2.slice(n2, n2 + 1);
      /\s/.test(o2) ? r2() : t2.push(i2());
    }
    return t2;
  }
  function K(e2, t2) {
    return e2.reduce((e3, n2) => (e3.has(n2[t2]) ? e3.get(n2[t2]).push(n2) : e3.set(n2[t2], [n2]), e3), /* @__PURE__ */ new Map());
  }
  function G(e2, t2) {
    const n2 = [], i2 = [];
    for (const r2 of e2)
      t2(r2) ? n2.push(r2) : i2.push(r2);
    return [n2, i2];
  }
  function Q(e2, t2 = {}) {
    function n2(e3) {
      return Array.from(e3).map((e4) => Q(e4, t2));
    }
    if (e2 instanceof CSSUnitValue) {
      if ("percent" === e2.unit && t2.percentageReference) {
        const n4 = e2.value / 100 * t2.percentageReference.value, i2 = t2.percentageReference.unit;
        return new CSSUnitValue(n4, i2);
      }
      const n3 = e2.toSum();
      if (n3 && 1 === n3.values.length && (e2 = n3.values[0]), e2 instanceof CSSUnitValue && "em" === e2.unit && t2.fontSize && (e2 = new CSSUnitValue(e2.value * t2.fontSize.value, t2.fontSize.unit)), e2 instanceof CSSKeywordValue) {
        if ("e" === e2.value)
          return new CSSUnitValue(Math.E, "number");
        if ("pi" === e2.value)
          return new CSSUnitValue(Math.PI, "number");
      }
      return e2;
    }
    if (!e2.operator)
      return e2;
    switch (e2.operator) {
      case "sum":
        e2 = new CSSMathSum(...n2(e2.values));
        break;
      case "product":
        e2 = new CSSMathProduct(...n2(e2.values));
        break;
      case "negate":
        e2 = new CSSMathNegate(Q(e2.value, t2));
        break;
      case "clamp":
        e2 = new CSSMathClamp(Q(e2.lower, t2), Q(e2.value, t2), Q(e2.upper, t2));
        break;
      case "invert":
        e2 = new CSSMathInvert(Q(e2.value, t2));
        break;
      case "min":
        e2 = new CSSMathMin(...n2(e2.values));
        break;
      case "max":
        e2 = new CSSMathMax(...n2(e2.values));
    }
    if (e2 instanceof CSSMathMin || e2 instanceof CSSMathMax) {
      const t3 = Array.from(e2.values);
      if (t3.every((e3) => e3 instanceof CSSUnitValue && "percent" !== e3.unit && $(e3.unit) && e3.unit === t3[0].unit)) {
        const n3 = Math[e2.operator].apply(Math, t3.map(({ value: e3 }) => e3));
        return new CSSUnitValue(n3, t3[0].unit);
      }
    }
    if (e2 instanceof CSSMathMin || e2 instanceof CSSMathMax) {
      const t3 = Array.from(e2.values), [n3, i2] = G(t3, (e3) => e3 instanceof CSSUnitValue && "percent" !== e3.unit), r2 = Array.from(K(n3, "unit").values());
      if (r2.some((e3) => e3.length > 0)) {
        const t4 = r2.map((t5) => {
          const n4 = Math[e2.operator].apply(Math, t5.map(({ value: e3 }) => e3));
          return new CSSUnitValue(n4, t5[0].unit);
        });
        e2 = e2 instanceof CSSMathMin ? new CSSMathMin(...t4, ...i2) : new CSSMathMax(...t4, ...i2);
      }
      return 1 === t3.length ? t3[0] : e2;
    }
    if (e2 instanceof CSSMathNegate)
      return e2.value instanceof CSSUnitValue ? new CSSUnitValue(0 - e2.value.value, e2.value.unit) : e2.value instanceof CSSMathNegate ? e2.value.value : e2;
    if (e2 instanceof CSSMathInvert)
      return e2.value instanceof CSSMathInvert ? e2.value.value : e2;
    if (e2 instanceof CSSMathSum) {
      let t3 = function(e3) {
        const t4 = e3.filter((e4) => e4 instanceof CSSUnitValue);
        return [...e3.filter((e4) => !(e4 instanceof CSSUnitValue)), ...Array.from(K(t4, "unit").entries()).map(([e4, t5]) => {
          const n4 = t5.reduce((e5, { value: t6 }) => e5 + t6, 0);
          return new CSSUnitValue(n4, e4);
        })];
      }, n3 = [];
      for (const i2 of e2.values)
        i2 instanceof CSSMathSum ? n3.push(...i2.values) : n3.push(i2);
      return n3 = t3(n3), 1 === n3.length ? n3[0] : new CSSMathSum(...n3);
    }
    if (e2 instanceof CSSMathProduct) {
      let t3 = [];
      for (const r2 of e2.values)
        r2 instanceof CSSMathProduct ? t3.push(...r2.values) : t3.push(r2);
      const [n3, i2] = G(t3, (e3) => e3 instanceof CSSUnitValue && "number" === e3.unit);
      if (n3.length > 1) {
        const e3 = n3.reduce((e4, { value: t4 }) => e4 * t4, 1);
        t3 = [new CSSUnitValue(e3, "number"), ...i2];
      }
      if (2 === t3.length) {
        let e3, n4;
        for (const i3 of t3)
          i3 instanceof CSSUnitValue && "number" === i3.unit ? e3 = i3 : i3 instanceof CSSMathSum && [...i3.values].every((e4) => e4 instanceof CSSUnitValue) && (n4 = i3);
        if (e3 && n4)
          return new CSSMathSum(...[...n4.values].map((t4) => new CSSUnitValue(t4.value * e3.value, t4.unit)));
      }
      if (t3.every((e3) => e3 instanceof CSSUnitValue && $(e3.unit) || e3 instanceof CSSMathInvert && e3.value instanceof CSSUnitValue && $(e3.value.unit))) {
        const e3 = new CSSMathProduct(...t3).toSum();
        if (e3 && 1 === e3.values.length)
          return e3.values[0];
      }
      return new CSSMathProduct(...t3);
    }
    return e2;
  }
  const X = null, Y = ["percent", "length", "angle", "time", "frequency", "resolution", "flex"], J = { fontRelativeLengths: { units: /* @__PURE__ */ new Set(["em", "rem", "ex", "rex", "cap", "rcap", "ch", "rch", "ic", "ric", "lh", "rlh"]) }, viewportRelativeLengths: { units: /* @__PURE__ */ new Set(["vw", "lvw", "svw", "dvw", "vh", "lvh", "svh", "dvh", "vi", "lvi", "svi", "dvi", "vb", "lvb", "svb", "dvb", "vmin", "lvmin", "svmin", "dvmin", "vmax", "lvmax", "svmax", "dvmax"]) }, absoluteLengths: { units: /* @__PURE__ */ new Set(["cm", "mm", "Q", "in", "pt", "pc", "px"]), compatible: true, canonicalUnit: "px", ratios: { cm: 96 / 2.54, mm: 96 / 2.54 / 10, Q: 96 / 2.54 / 40, in: 96, pc: 16, pt: 96 / 72, px: 1 } }, angle: { units: /* @__PURE__ */ new Set(["deg", "grad", "rad", "turn"]), compatible: true, canonicalUnit: "deg", ratios: { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 } }, time: { units: /* @__PURE__ */ new Set(["s", "ms"]), compatible: true, canonicalUnit: "s", ratios: { s: 1, ms: 1e-3 } }, frequency: { units: /* @__PURE__ */ new Set(["hz", "khz"]), compatible: true, canonicalUnit: "hz", ratios: { hz: 1, khz: 1e3 } }, resolution: { units: /* @__PURE__ */ new Set(["dpi", "dpcm", "dppx"]), compatible: true, canonicalUnit: "dppx", ratios: { dpi: 1 / 96, dpcm: 2.54 / 96, dppx: 1 } } }, Z = /* @__PURE__ */ new Map();
  for (const Vt of Object.values(J))
    if (Vt.compatible)
      for (const e2 of Vt.units)
        Z.set(e2, Vt);
  function ee(e2) {
    return Z.get(e2);
  }
  function te(e2, t2) {
    const n2 = { ...e2 };
    for (const i2 of Object.keys(t2))
      n2[i2] ? n2[i2] += t2[i2] : n2[i2] = t2[i2];
    return n2;
  }
  function ne(e2) {
    return "number" === e2 ? {} : "percent" === e2 ? { percent: 1 } : J.absoluteLengths.units.has(e2) || J.fontRelativeLengths.units.has(e2) || J.viewportRelativeLengths.units.has(e2) ? { length: 1 } : J.angle.units.has(e2) ? { angle: 1 } : J.time.units.has(e2) ? { time: 1 } : J.frequency.units.has(e2) ? { frequency: 1 } : J.resolution.units.has(e2) ? { resolution: 1 } : "fr" === e2 ? { flex: 1 } : X;
  }
  function ie(e2) {
    if (e2 instanceof CSSUnitValue) {
      let { unit: t2, value: n2 } = e2;
      const i2 = ee(e2.unit);
      return i2 && t2 !== i2.canonicalUnit && (n2 *= i2.ratios[t2], t2 = i2.canonicalUnit), "number" === t2 ? [[n2, {}]] : [[n2, { [t2]: 1 }]];
    }
    if (e2 instanceof CSSMathInvert) {
      if (!(e2.value instanceof CSSUnitValue))
        throw new Error("Not implemented");
      const t2 = ie(e2.value);
      if (t2 === X)
        return X;
      if (t2.length > 1)
        return X;
      const n2 = t2[0], i2 = {};
      for (const [e3, r2] of Object.entries(n2[1]))
        i2[e3] = -1 * r2;
      return t2[0] = [1 / n2[0], i2], t2;
    }
    if (e2 instanceof CSSMathProduct) {
      let t2 = [[1, {}]];
      for (const n2 of e2.values) {
        const e3 = ie(n2), i2 = [];
        if (e3 === X)
          return X;
        for (const n3 of t2)
          for (const t3 of e3)
            i2.push([n3[0] * t3[0], te(n3[1], t3[1])]);
        t2 = i2;
      }
      return t2;
    }
    throw new Error("Not implemented");
  }
  function re(e2, t2) {
    if (ne(t2) === X)
      throw new SyntaxError("The string did not match the expected pattern.");
    const n2 = ie(e2);
    if (!n2)
      throw new TypeError();
    if (n2.length > 1)
      throw new TypeError("Sum has more than one item");
    const i2 = function(e3, t3) {
      const n3 = e3.unit, i3 = e3.value, r2 = ee(n3), o2 = ee(t3);
      if (!o2 || r2 !== o2)
        return X;
      return new CSSUnitValue(i3 * o2.ratios[n3] / o2.ratios[t3], t3);
    }(oe(n2[0]), t2);
    if (i2 === X)
      throw new TypeError();
    return i2;
  }
  function oe(e2) {
    const [t2, n2] = e2, i2 = Object.entries(n2);
    if (i2.length > 1)
      return X;
    if (0 === i2.length)
      return new CSSUnitValue(t2, "number");
    const r2 = i2[0];
    return 1 !== r2[1] ? X : new CSSUnitValue(t2, r2[0]);
  }
  function se(e2, ...t2) {
    if (t2 && t2.length)
      throw new Error("Not implemented");
    const n2 = ie(e2).map((e3) => oe(e3));
    if (n2.some((e3) => e3 === X))
      throw new TypeError("Type error");
    return new CSSMathSum(...n2);
  }
  function ae(e2, t2) {
    if (e2.percentHint && t2.percentHint && e2.percentHint !== t2.percentHint)
      return X;
    const n2 = { ...e2, percentHint: e2.percentHint ?? t2.percentHint };
    for (const i2 of Y)
      t2[i2] && (n2[i2] ?? (n2[i2] = 0), n2[i2] += t2[i2]);
    return n2;
  }
  class CSSFunction {
    constructor(e2, t2) {
      __publicField(this, "name"), __publicField(this, "values"), this.name = e2, this.values = t2;
    }
  }
  class CSSSimpleBlock {
    constructor(e2, t2) {
      __publicField(this, "value"), __publicField(this, "associatedToken"), this.value = e2, this.associatedToken = t2;
    }
  }
  function le(e2) {
    if (Array.isArray(e2))
      return e2;
    if ("string" == typeof e2)
      return function(e3) {
        const t2 = new E(e3), n2 = [];
        for (; ; ) {
          const e4 = z(t2);
          if (void 0 === e4)
            return n2;
          n2.push(e4);
        }
      }(e2);
    throw new TypeError("Invalid input type " + typeof e2);
  }
  function ce(e2) {
    const t2 = e2.shift();
    return t2 instanceof b || t2 instanceof T || t2 instanceof w ? function(e3, t3) {
      let n2;
      if (t3 instanceof b)
        n2 = C;
      else if (t3 instanceof w)
        n2 = x;
      else {
        if (!(t3 instanceof T))
          return;
        n2 = y;
      }
      const i2 = new CSSSimpleBlock([], t3);
      for (; ; ) {
        const t4 = e3.shift();
        if (t4 instanceof n2)
          return i2;
        if (void 0 === t4)
          return i2;
        e3.unshift(t4), i2.value.push(ce(e3));
      }
    }(e2, t2) : t2 instanceof n ? function(e3, t3) {
      const n2 = new CSSFunction(e3.value, []);
      for (; ; ) {
        const e4 = t3.shift();
        if (e4 instanceof x)
          return n2;
        if (void 0 === e4)
          return n2;
        t3.unshift(e4), n2.values.push(ce(t3));
      }
    }(t2, e2) : t2;
  }
  function ue(e2) {
    if (e2 instanceof w || e2 instanceof x)
      return 6;
    if (e2 instanceof c) {
      switch (e2.value) {
        case "*":
        case "/":
          return 4;
        case "+":
        case "-":
          return 2;
      }
    }
  }
  function me(e2) {
    return e2[e2.length - 1];
  }
  function fe(e2, t2, n2) {
    const i2 = ["+", "-"].includes(e2.value) ? "ADDITION" : "MULTIPLICATION", r2 = t2.type === i2 ? t2.values : [t2], o2 = n2.type === i2 ? n2.values : [n2];
    return "-" === e2.value ? o2[0] = { type: "NEGATE", value: o2[0] } : "/" === e2.value && (o2[0] = { type: "INVERT", value: o2[0] }), { type: i2, values: [...r2, ...o2] };
  }
  function he(e2) {
    if ("ADDITION" === e2.type)
      return new CSSMathSum(...e2.values.map((e3) => he(e3)));
    if ("MULTIPLICATION" === e2.type)
      return new CSSMathProduct(...e2.values.map((e3) => he(e3)));
    if ("NEGATE" === e2.type)
      return new CSSMathNegate(he(e2.value));
    if ("INVERT" === e2.type)
      return new CSSMathInvert(he(e2.value));
    if (e2 instanceof CSSSimpleBlock)
      return pe(new CSSFunction("calc", e2.value));
    if (e2 instanceof t) {
      if ("e" === e2.value)
        return new CSSUnitValue(Math.E, "number");
      if ("pi" === e2.value)
        return new CSSUnitValue(Math.PI, "number");
      throw new SyntaxError("Invalid math expression");
    }
    return de(e2);
  }
  function pe(e2) {
    if ("min" === e2.name || "max" === e2.name) {
      const t2 = e2.values.filter((e3) => !(e3 instanceof h || e3 instanceof v)).map((e3) => Q(pe(new CSSFunction("calc", e3))));
      return "min" === e2.name ? new CSSMathMin(...t2) : new CSSMathMax(...t2);
    }
    if ("calc" !== e2.name)
      return null;
    const n2 = he(function(e3) {
      const n3 = [], i3 = [];
      for (; e3.length; ) {
        const r2 = e3.shift();
        if (r2 instanceof u || r2 instanceof f || r2 instanceof m || r2 instanceof CSSFunction || r2 instanceof CSSSimpleBlock || r2 instanceof t)
          i3.push(r2);
        else if (r2 instanceof c && ["*", "/", "+", "-"].includes(r2.value)) {
          for (; n3.length && !(me(n3) instanceof w) && ue(me(n3)) > ue(r2); ) {
            const e4 = n3.pop(), t2 = i3.pop(), r3 = i3.pop();
            i3.push(fe(e4, r3, t2));
          }
          n3.push(r2);
        } else if (r2 instanceof w)
          n3.push(r2);
        else if (r2 instanceof x) {
          if (!n3.length)
            return null;
          for (; !(me(n3) instanceof w); ) {
            const e4 = n3.pop(), t2 = i3.pop(), r3 = i3.pop();
            i3.push(fe(e4, r3, t2));
          }
          if (!(me(n3) instanceof w))
            return null;
          n3.pop();
        } else if (!(r2 instanceof h))
          return null;
      }
      for (; n3.length; ) {
        if (me(n3) instanceof w)
          return null;
        const e4 = n3.pop(), t2 = i3.pop(), r2 = i3.pop();
        i3.push(fe(e4, r2, t2));
      }
      return i3[0];
    }([...e2.values]));
    let i2;
    try {
      i2 = Q(n2);
    } catch (r2) {
      new CSSStyleSheet().insertRule("error", 0);
    }
    return i2 instanceof CSSUnitValue ? new CSSMathSum(i2) : i2;
  }
  function de(e2) {
    return e2 instanceof CSSFunction && ["calc", "min", "max", "clamp"].includes(e2.name) ? pe(e2) : e2 instanceof u && 0 === e2.value && !e2.unit ? new CSSUnitValue(0, "px") : e2 instanceof u ? new CSSUnitValue(e2.value, "number") : e2 instanceof m ? new CSSUnitValue(e2.value, "percent") : e2 instanceof f ? new CSSUnitValue(e2.value, e2.unit) : void 0;
  }
  function Se(e2) {
    const t2 = function(e3) {
      const t3 = le(e3);
      for (; t3[0] instanceof h; )
        t3.shift();
      if (void 0 === t3[0])
        return null;
      const n2 = ce(t3);
      for (; t3[0] instanceof h; )
        t3.shift();
      return void 0 === t3[0] ? n2 : null;
    }(e2);
    if (null === t2 && new CSSStyleSheet().insertRule("error", 0), t2 instanceof u || t2 instanceof m || t2 instanceof f || t2 instanceof CSSFunction || new CSSStyleSheet().insertRule("error", 0), t2 instanceof f) {
      null === ne(t2.unit) && new CSSStyleSheet().insertRule("error", 0);
    }
    return de(t2);
  }
  !function() {
    let e2 = /* @__PURE__ */ new WeakMap();
    function t2(e3) {
      const t3 = [];
      for (let i2 = 0; i2 < e3.length; i2++)
        t3[i2] = "number" == typeof (n3 = e3[i2]) ? new CSSUnitValue(n3, "number") : n3;
      var n3;
      return t3;
    }
    class CSSNumericValue2 {
      static parse(e3) {
        return e3 instanceof CSSNumericValue2 ? e3 : Q(Se(e3), {});
      }
    }
    class CSSMathValue extends CSSNumericValue2 {
      constructor(n3, i2, r2, o2) {
        super(), e2.set(this, { values: t2(n3), operator: i2, name: r2 || i2, delimiter: o2 || ", " });
      }
      get operator() {
        return e2.get(this).operator;
      }
      get values() {
        return e2.get(this).values;
      }
      toString() {
        const t3 = e2.get(this);
        return `${t3.name}(${t3.values.join(t3.delimiter)})`;
      }
    }
    const n2 = { CSSNumericValue: CSSNumericValue2, CSSMathValue, CSSUnitValue: class extends CSSNumericValue2 {
      constructor(t3, n3) {
        super(), e2.set(this, { value: t3, unit: n3 });
      }
      get value() {
        return e2.get(this).value;
      }
      set value(t3) {
        e2.get(this).value = t3;
      }
      get unit() {
        return e2.get(this).unit;
      }
      to(e3) {
        return re(this, e3);
      }
      toSum(...e3) {
        return se(this, ...e3);
      }
      type() {
        return ne(e2.get(this).unit);
      }
      toString() {
        const t3 = e2.get(this);
        return `${t3.value}${function(e3) {
          switch (e3) {
            case "percent":
              return "%";
            case "number":
              return "";
            default:
              return e3.toLowerCase();
          }
        }(t3.unit)}`;
      }
    }, CSSKeywordValue: class {
      constructor(e3) {
        this.value = e3;
      }
      toString() {
        return this.value.toString();
      }
    }, CSSMathSum: class extends CSSMathValue {
      constructor(e3) {
        super(arguments, "sum", "calc", " + ");
      }
    }, CSSMathProduct: class extends CSSMathValue {
      constructor(e3) {
        super(arguments, "product", "calc", " * ");
      }
      toSum(...e3) {
        return se(this, ...e3);
      }
      type() {
        return e2.get(this).values.map((e3) => e3.type()).reduce(ae);
      }
    }, CSSMathNegate: class extends CSSMathValue {
      constructor(e3) {
        super([arguments[0]], "negate", "-");
      }
      get value() {
        return e2.get(this).values[0];
      }
      type() {
        return this.value.type();
      }
    }, CSSMathInvert: class extends CSSMathValue {
      constructor(e3) {
        super([1, arguments[0]], "invert", "calc", " / ");
      }
      get value() {
        return e2.get(this).values[1];
      }
      type() {
        return function(e3) {
          const t3 = {};
          for (const n3 of Y)
            t3[n3] = -1 * e3[n3];
          return t3;
        }(e2.get(this).values[1].type());
      }
    }, CSSMathMax: class extends CSSMathValue {
      constructor() {
        super(arguments, "max");
      }
    }, CSSMathMin: class extends CSSMathValue {
      constructor() {
        super(arguments, "min");
      }
    } };
    if (!window.CSS && !Reflect.defineProperty(window, "CSS", { value: {} }))
      throw Error("Error installing CSSOM support");
    window.CSSUnitValue || ["number", "percent", "em", "ex", "px", "cm", "mm", "in", "pt", "pc", "Q", "vw", "vh", "vmin", "vmax", "rems", "ch", "deg", "rad", "grad", "turn", "ms", "s", "Hz", "kHz", "dppx", "dpi", "dpcm", "fr"].forEach((e3) => {
      if (!Reflect.defineProperty(CSS, e3, { value: (t3) => new CSSUnitValue(t3, e3) }))
        throw Error(`Error installing CSS.${e3}`);
    });
    for (let [i2, r2] of Object.entries(n2))
      if (!(i2 in window) && !Reflect.defineProperty(window, i2, { value: r2 }))
        throw Error(`Error installing CSSOM support for ${i2}`);
  }();
  const ge = "block";
  let ve = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap();
  const ye = ["entry", "exit", "cover", "contain", "entry-crossing", "exit-crossing"];
  function we(e2) {
    return e2 === document.scrollingElement ? document : e2;
  }
  function xe(e2) {
    Ee(e2);
    let t2 = ve.get(e2).animations;
    if (0 === t2.length)
      return;
    let n2 = e2.currentTime;
    for (let i2 = 0; i2 < t2.length; i2++)
      t2[i2].tickAnimation(n2);
  }
  function be(e2, t2) {
    if (!e2)
      return null;
    const n2 = Te.get(e2).sourceMeasurements, i2 = getComputedStyle(e2);
    let r2 = n2.scrollTop;
    return "x" === q(t2, i2) && (r2 = Math.abs(n2.scrollLeft)), r2;
  }
  function Ce(e2, t2) {
    const n2 = Q(e2, t2);
    if (n2 instanceof CSSUnitValue) {
      if ("px" === n2.unit)
        return n2.value;
      throw TypeError("Unhandled unit type " + n2.unit);
    }
    throw TypeError("Unsupported value type: " + typeof e2);
  }
  function Ee(e2) {
    if (!(e2 instanceof $e))
      return void function(e3) {
        const t3 = ve.get(e3);
        if (!t3.anonymousSource)
          return;
        const n2 = _e(t3.anonymousSource, t3.anonymousTarget);
        Re(e3, n2);
      }(e2);
    const t2 = e2.subject;
    if (!t2)
      return void Re(e2, null);
    if ("none" == getComputedStyle(t2).display)
      return void Re(e2, null);
    Re(e2, We(t2));
  }
  function ke(e2) {
    return ["block", "inline", "x", "y"].includes(e2);
  }
  function Me(e2) {
    const t2 = getComputedStyle(e2);
    return { scrollLeft: e2.scrollLeft, scrollTop: e2.scrollTop, scrollWidth: e2.scrollWidth, scrollHeight: e2.scrollHeight, clientWidth: e2.clientWidth, clientHeight: e2.clientHeight, writingMode: t2.writingMode, direction: t2.direction, scrollPaddingTop: t2.scrollPaddingTop, scrollPaddingBottom: t2.scrollPaddingBottom, scrollPaddingLeft: t2.scrollPaddingLeft, scrollPaddingRight: t2.scrollPaddingRight };
  }
  function Pe(e2, t2) {
    if (!e2 || !t2)
      return;
    let n2 = 0, i2 = 0, r2 = t2;
    const o2 = e2.offsetParent;
    for (; r2 && r2 != o2; )
      i2 += r2.offsetLeft, n2 += r2.offsetTop, r2 = r2.offsetParent;
    i2 -= e2.offsetLeft + e2.clientLeft, n2 -= e2.offsetTop + e2.clientTop;
    const s2 = getComputedStyle(t2);
    return { top: n2, left: i2, offsetWidth: t2.offsetWidth, offsetHeight: t2.offsetHeight, fontSize: s2.fontSize };
  }
  function Ie(e2) {
    let t2 = Te.get(e2);
    t2.sourceMeasurements = Me(e2);
    for (const n2 of t2.timelineRefs) {
      const t3 = n2.deref();
      if (t3 instanceof $e) {
        ve.get(t3).subjectMeasurements = Pe(e2, t3.subject);
      }
    }
    t2.updateScheduled || (setTimeout(() => {
      for (const e3 of t2.timelineRefs) {
        const t3 = e3.deref();
        t3 && xe(t3);
      }
      t2.updateScheduled = false;
    }), t2.updateScheduled = true);
  }
  function Re(e2, t2) {
    const n2 = ve.get(e2), i2 = n2.source;
    if (i2 != t2) {
      if (i2) {
        const t3 = Te.get(i2);
        if (t3) {
          t3.timelineRefs.delete(e2);
          const n3 = Array.from(t3.timelineRefs).filter((e3) => void 0 === e3.deref());
          for (const e3 of n3)
            t3.timelineRefs.delete(e3);
          0 === t3.timelineRefs.size && (t3.disconnect(), Te.delete(i2));
        }
      }
      if (n2.source = t2, t2) {
        let i3 = Te.get(t2);
        if (!i3) {
          i3 = { timelineRefs: /* @__PURE__ */ new Set(), sourceMeasurements: Me(t2) }, Te.set(t2, i3);
          const e3 = new ResizeObserver((e4) => {
            for (const t3 of e4)
              Ie(n2.source);
          });
          e3.observe(t2);
          for (const n3 of t2.children)
            e3.observe(n3);
          const r2 = new MutationObserver((e4) => {
            for (const t3 of e4)
              Ie(t3.target);
          });
          r2.observe(t2, { attributes: true, attributeFilter: ["style", "class"] });
          const o2 = () => {
            i3.sourceMeasurements.scrollLeft = t2.scrollLeft, i3.sourceMeasurements.scrollTop = t2.scrollTop;
            for (const e4 of i3.timelineRefs) {
              const t3 = e4.deref();
              t3 && xe(t3);
            }
          };
          we(t2).addEventListener("scroll", o2), i3.disconnect = () => {
            e3.disconnect(), r2.disconnect(), we(t2).removeEventListener("scroll", o2);
          };
        }
        i3.timelineRefs.add(new WeakRef(e2));
      }
    }
  }
  function Ne(e2, t2) {
    let n2 = ve.get(e2).animations;
    for (let i2 = 0; i2 < n2.length; i2++)
      n2[i2].animation == t2 && n2.splice(i2, 1);
  }
  function Ae(e2, t2, n2) {
    let i2 = ve.get(e2).animations;
    for (let r2 = 0; r2 < i2.length; r2++)
      if (i2[r2].animation == t2)
        return;
    i2.push({ animation: t2, tickAnimation: n2 }), queueMicrotask(() => {
      xe(e2);
    });
  }
  class ScrollTimeline {
    constructor(e2) {
      ve.set(this, { source: null, axis: ge, anonymousSource: e2 ? e2.anonymousSource : null, anonymousTarget: e2 ? e2.anonymousTarget : null, subject: null, inset: null, animations: [], subjectMeasurements: null });
      if (Re(this, e2 && void 0 !== e2.source ? e2.source : document.scrollingElement), e2 && void 0 !== e2.axis && e2.axis != ge) {
        if (!ke(e2.axis))
          throw TypeError("Invalid axis");
        ve.get(this).axis = e2.axis;
      }
      xe(this);
    }
    set source(e2) {
      Re(this, e2), xe(this);
    }
    get source() {
      return ve.get(this).source;
    }
    set axis(e2) {
      if (!ke(e2))
        throw TypeError("Invalid axis");
      ve.get(this).axis = e2, xe(this);
    }
    get axis() {
      return ve.get(this).axis;
    }
    get duration() {
      return CSS.percent(100);
    }
    get phase() {
      const e2 = this.source;
      if (!e2)
        return "inactive";
      let t2 = getComputedStyle(e2);
      return "none" == t2.display ? "inactive" : e2 == document.scrollingElement || "visible" != t2.overflow && "clip" != t2.overflow ? "active" : "inactive";
    }
    get currentTime() {
      const e2 = null, t2 = this.source;
      if (!t2 || !t2.isConnected)
        return e2;
      if ("inactive" == this.phase)
        return e2;
      const n2 = getComputedStyle(t2);
      if ("inline" === n2.display || "none" === n2.display)
        return e2;
      const i2 = this.axis, r2 = be(t2, i2), o2 = function(e3, t3) {
        const n3 = Te.get(e3).sourceMeasurements, i3 = "horizontal-tb" == getComputedStyle(e3).writingMode;
        return "block" === t3 ? t3 = i3 ? "y" : "x" : "inline" === t3 && (t3 = i3 ? "x" : "y"), "y" === t3 ? n3.scrollHeight - n3.clientHeight : "x" === t3 ? n3.scrollWidth - n3.clientWidth : void 0;
      }(t2, i2);
      return o2 > 0 ? CSS.percent(100 * r2 / o2) : CSS.percent(100);
    }
    get __polyfill() {
      return true;
    }
  }
  function Ve(e2, t2) {
    let n2 = e2.parentElement;
    for (; null != n2; ) {
      if (t2(n2))
        return n2;
      n2 = n2.parentElement;
    }
  }
  function _e(e2, t2) {
    switch (e2) {
      case "root":
        return document.scrollingElement;
      case "nearest":
        return We(t2);
      case "self":
        return t2;
      default:
        throw new TypeError("Invalid ScrollTimeline Source Type.");
    }
  }
  function Le(e2) {
    switch (getComputedStyle(e2).display) {
      case "block":
      case "inline-block":
      case "list-item":
      case "table":
      case "table-caption":
      case "flow-root":
      case "flex":
      case "grid":
        return true;
    }
    return false;
  }
  function Oe(e2) {
    const t2 = getComputedStyle(e2);
    return "none" != t2.transform || "none" != t2.perspective || ("transform" == t2.willChange || "perspective" == t2.willChange || ("none" != t2.filter || "filter" == t2.willChange || "none" != t2.backdropFilter));
  }
  function Ue(e2) {
    return "static" != getComputedStyle(e2).position || Oe(e2);
  }
  function je(e2) {
    switch (getComputedStyle(e2).position) {
      case "static":
      case "relative":
      case "sticky":
        return Ve(e2, Le);
      case "absolute":
        return Ve(e2, Ue);
      case "fixed":
        return Ve(e2, Oe);
    }
  }
  function We(e2) {
    if (e2 && e2.isConnected) {
      for (; e2 = je(e2); ) {
        switch (getComputedStyle(e2)["overflow-x"]) {
          case "auto":
          case "scroll":
          case "hidden":
            return e2 == document.body && "visible" == getComputedStyle(document.scrollingElement).overflow ? document.scrollingElement : e2;
        }
      }
      return document.scrollingElement;
    }
  }
  function Fe(e2, t2) {
    const n2 = ve.get(e2), i2 = n2.subjectMeasurements, r2 = Te.get(n2.source).sourceMeasurements;
    return "inactive" === e2.phase ? null : e2 instanceof $e ? De(t2, r2, i2, n2.axis, n2.inset) : null;
  }
  function De(e2, t2, n2, i2, r2) {
    const o2 = "rtl" == t2.direction || "vertical-rl" == t2.writingMode;
    let s2, a2, l2 = { fontSize: n2.fontSize };
    "x" === q(i2, t2) ? (s2 = n2.offsetWidth, a2 = n2.left, l2.scrollPadding = [t2.scrollPaddingLeft, t2.scrollPaddingRight], o2 && (a2 += t2.scrollWidth - t2.clientWidth, l2.scrollPadding = [t2.scrollPaddingRight, t2.scrollPaddingLeft]), l2.containerSize = t2.clientWidth) : (s2 = n2.offsetHeight, a2 = n2.top, l2.scrollPadding = [t2.scrollPaddingTop, t2.scrollPaddingBottom], l2.containerSize = t2.clientHeight);
    const c2 = function(e3, t3) {
      const n3 = { start: 0, end: 0 };
      if (!e3)
        return n3;
      const [i3, r3] = [e3.start, e3.end].map((e4, n4) => "auto" === e4 ? "auto" === t3.scrollPadding[n4] ? 0 : parseFloat(t3.scrollPadding[n4]) : Ce(e4, { percentageReference: CSS.px(t3.containerSize), fontSize: CSS.px(parseFloat(t3.fontSize)) }));
      return { start: i3, end: r3 };
    }(r2, l2), u2 = a2 - l2.containerSize + c2.end, m2 = a2 + s2 - c2.start, f2 = u2 + s2, h2 = m2 - s2, p2 = Math.min(f2, h2), d2 = Math.max(f2, h2);
    let S2, g2;
    const v2 = s2 > l2.containerSize - c2.start - c2.end;
    switch (e2) {
      case "cover":
        S2 = u2, g2 = m2;
        break;
      case "contain":
        S2 = p2, g2 = d2;
        break;
      case "entry":
        S2 = u2, g2 = p2;
        break;
      case "exit":
        S2 = d2, g2 = m2;
        break;
      case "entry-crossing":
        S2 = u2, g2 = v2 ? d2 : p2;
        break;
      case "exit-crossing":
        S2 = v2 ? p2 : d2, g2 = m2;
    }
    return { start: S2, end: g2 };
  }
  function ze(e2, t2) {
    if (e2 instanceof $e) {
      const { rangeName: n2, offset: i2 } = t2;
      return He(Fe(e2, n2), i2, Fe(e2, "cover"), e2.subject);
    }
    if (e2 instanceof ScrollTimeline) {
      const { axis: n2, source: i2 } = e2, { sourceMeasurements: r2 } = Te.get(i2);
      let o2;
      o2 = "x" === q(n2, r2) ? r2.scrollWidth - r2.clientWidth : r2.scrollHeight - r2.clientHeight;
      return Ce(t2, { percentageReference: CSS.px(o2) }) / o2;
    }
    unsupportedTimeline(e2);
  }
  function He(e2, t2, n2, i2) {
    if (!e2 || !n2)
      return 0;
    let r2 = getComputedStyle(i2);
    return (Ce(t2, { percentageReference: CSS.px(e2.end - e2.start), fontSize: CSS.px(parseFloat(r2.fontSize)) }) + e2.start - n2.start) / (n2.end - n2.start);
  }
  let $e = class ViewTimeline extends ScrollTimeline {
    constructor(e2) {
      super(e2);
      const t2 = ve.get(this);
      if (t2.subject = e2 && e2.subject ? e2.subject : void 0, e2 && e2.inset && (t2.inset = function(e3) {
        if (!e3)
          return { start: 0, end: 0 };
        let t3;
        if (t3 = "string" == typeof e3 ? B(e3).map((t4) => {
          if ("auto" === t4)
            return "auto";
          try {
            return CSSNumericValue.parse(t4);
          } catch (n2) {
            throw TypeError(`Could not parse inset "${e3}"`);
          }
        }) : Array.isArray(e3) ? e3 : [e3], 0 === t3.length || t3.length > 2)
          throw TypeError("Invalid inset");
        for (const n2 of t3) {
          if ("auto" === n2)
            continue;
          const e4 = n2.type();
          if (1 !== e4.length && 1 !== e4.percent)
            throw TypeError("Invalid inset");
        }
        return { start: t3[0], end: t3[1] ?? t3[0] };
      }(e2.inset)), t2.subject) {
        new ResizeObserver(() => {
          Ie(t2.source);
        }).observe(t2.subject);
        new MutationObserver(() => {
          Ie(t2.source);
        }).observe(t2.subject, { attributes: true, attributeFilter: ["class", "style"] });
      }
      Ee(this), t2.subjectMeasurements = Pe(t2.source, t2.subject), xe(this);
    }
    get source() {
      return Ee(this), ve.get(this).source;
    }
    set source(e2) {
      throw new Error("Cannot set the source of a view timeline");
    }
    get subject() {
      return ve.get(this).subject;
    }
    get axis() {
      return ve.get(this).axis;
    }
    get currentTime() {
      const e2 = null, t2 = be(this.source, this.axis);
      if (t2 == e2)
        return e2;
      const n2 = Fe(this, "cover");
      if (!n2)
        return e2;
      const i2 = (t2 - n2.start) / (n2.end - n2.start);
      return CSS.percent(100 * i2);
    }
    get startOffset() {
      return CSS.px(Fe(this, "cover").start);
    }
    get endOffset() {
      return CSS.px(Fe(this, "cover").end);
    }
  };
  const qe = document.getAnimations, Be = window.Element.prototype.getAnimations, Ke = window.Element.prototype.animate, Ge = window.Animation;
  class Qe {
    constructor() {
      this.state = "pending", this.nativeResolve = this.nativeReject = null, this.promise = new Promise((e2, t2) => {
        this.nativeResolve = e2, this.nativeReject = t2;
      });
    }
    resolve(e2) {
      this.state = "resolved", this.nativeResolve(e2);
    }
    reject(e2) {
      this.state = "rejected", this.promise.catch(() => {
      }), this.nativeReject(e2);
    }
  }
  function Xe(e2) {
    e2.readyPromise = new Qe(), requestAnimationFrame(() => {
      var t2;
      null !== ((null == (t2 = e2.timeline) ? void 0 : t2.currentTime) ?? null) && (dt(e2), "play" !== e2.pendingTask || null === e2.startTime && null === e2.holdTime ? "pause" === e2.pendingTask && tt(e2) : et(e2));
    });
  }
  function Ye() {
    return new DOMException("The user aborted a request", "AbortError");
  }
  function Je(e2, t2) {
    if (null === t2)
      return t2;
    if ("number" != typeof t2)
      throw new DOMException(`Unexpected value: ${t2}.  Cannot convert to CssNumberish`, "InvalidStateError");
    const n2 = e2.rangeDuration ?? 100, i2 = at(e2), r2 = i2 ? n2 * t2 / i2 : 0;
    return CSS.percent(r2);
  }
  function Ze(e2, t2) {
    if (e2.timeline) {
      if (null === t2)
        return t2;
      if ("percent" === t2.unit) {
        const n2 = e2.rangeDuration ?? 100, i2 = at(e2);
        return t2.value * i2 / n2;
      }
      throw new DOMException("CSSNumericValue must be a percentage for progress based animations.", "NotSupportedError");
    }
    {
      if (null == t2 || "number" == typeof t2)
        return t2;
      const e3 = t2.to("ms");
      if (e3)
        return e3.value;
      throw new DOMException("CSSNumericValue must be either a number or a time value for time based animations.", "InvalidStateError");
    }
  }
  function et(e2) {
    const t2 = Ze(e2, e2.timeline.currentTime);
    if (null != e2.holdTime)
      rt(e2), 0 == e2.animation.playbackRate ? e2.startTime = t2 : (e2.startTime = t2 - e2.holdTime / e2.animation.playbackRate, e2.holdTime = null);
    else if (null !== e2.startTime && null !== e2.pendingPlaybackRate) {
      const n2 = (t2 - e2.startTime) * e2.animation.playbackRate;
      rt(e2);
      const i2 = e2.animation.playbackRate;
      0 == i2 ? (e2.holdTime = null, e2.startTime = t2) : e2.startTime = t2 - n2 / i2;
    }
    e2.readyPromise && "pending" == e2.readyPromise.state && e2.readyPromise.resolve(e2.proxy), st(e2, false, false), lt(e2), e2.pendingTask = null;
  }
  function tt(e2) {
    const t2 = Ze(e2, e2.timeline.currentTime);
    null != e2.startTime && null == e2.holdTime && (e2.holdTime = (t2 - e2.startTime) * e2.animation.playbackRate), rt(e2), e2.startTime = null, e2.readyPromise.resolve(e2.proxy), st(e2, false, false), lt(e2), e2.pendingTask = null;
  }
  function nt(e2) {
    if (!e2.finishedPromise || "pending" != e2.finishedPromise.state)
      return;
    if ("finished" != e2.proxy.playState)
      return;
    e2.finishedPromise.resolve(e2.proxy), e2.animation.pause();
    const t2 = new CustomEvent("finish", { detail: { currentTime: e2.proxy.currentTime, timelineTime: e2.proxy.timeline.currentTime } });
    Object.defineProperty(t2, "currentTime", { get: function() {
      return this.detail.currentTime;
    } }), Object.defineProperty(t2, "timelineTime", { get: function() {
      return this.detail.timelineTime;
    } }), requestAnimationFrame(() => {
      queueMicrotask(() => {
        e2.animation.dispatchEvent(t2);
      });
    });
  }
  function it(e2) {
    return null !== e2.pendingPlaybackRate ? e2.pendingPlaybackRate : e2.animation.playbackRate;
  }
  function rt(e2) {
    null !== e2.pendingPlaybackRate && (e2.animation.playbackRate = e2.pendingPlaybackRate, e2.pendingPlaybackRate = null);
  }
  function ot(e2) {
    if (!e2.timeline)
      return null;
    const t2 = Ze(e2, e2.timeline.currentTime);
    if (null === t2)
      return null;
    if (null === e2.startTime)
      return null;
    let n2 = (t2 - e2.startTime) * e2.animation.playbackRate;
    return -0 == n2 && (n2 = 0), n2;
  }
  function st(e2, t2, n2) {
    if (!e2.timeline)
      return;
    let i2 = t2 ? Ze(e2, e2.proxy.currentTime) : ot(e2);
    if (i2 && null != e2.startTime && !e2.proxy.pending) {
      const n3 = it(e2), r2 = at(e2);
      let o2 = e2.previousCurrentTime;
      n3 > 0 && i2 >= r2 && null != e2.previousCurrentTime ? ((null === o2 || o2 < r2) && (o2 = r2), e2.holdTime = t2 ? i2 : o2) : n3 < 0 && i2 <= 0 ? ((null == o2 || o2 > 0) && (o2 = 0), e2.holdTime = t2 ? i2 : o2) : 0 != n3 && (t2 && null !== e2.holdTime && (e2.startTime = function(e3, t3) {
        if (!e3.timeline)
          return null;
        const n4 = Ze(e3, e3.timeline.currentTime);
        return null == n4 ? null : n4 - t3 / e3.animation.playbackRate;
      }(e2, e2.holdTime)), e2.holdTime = null);
    }
    lt(e2), e2.previousCurrentTime = Ze(e2, e2.proxy.currentTime);
    "finished" == e2.proxy.playState ? (e2.finishedPromise || (e2.finishedPromise = new Qe()), "pending" == e2.finishedPromise.state && (n2 ? nt(e2) : Promise.resolve().then(() => {
      nt(e2);
    }))) : (e2.finishedPromise && "resolved" == e2.finishedPromise.state && (e2.finishedPromise = new Qe()), "paused" != e2.animation.playState && e2.animation.pause());
  }
  function at(e2) {
    const t2 = function(e3) {
      const t3 = e3.proxy.effect.getTiming();
      return e3.normalizedTiming || t3;
    }(e2), n2 = t2.delay + t2.endDelay + t2.iterations * t2.duration;
    return Math.max(0, n2);
  }
  function lt(e2) {
    if (e2.timeline)
      if (null !== e2.startTime) {
        const t2 = e2.timeline.currentTime;
        if (null == t2)
          return;
        ct(e2, (Ze(e2, t2) - e2.startTime) * e2.animation.playbackRate);
      } else
        null !== e2.holdTime && ct(e2, e2.holdTime);
  }
  function ct(e2, t2) {
    const n2 = e2.timeline, i2 = e2.animation.playbackRate, r2 = n2.currentTime && n2.currentTime.value == (i2 < 0 ? 0 : 100) ? i2 < 0 ? 1e-3 : -1e-3 : 0;
    e2.animation.currentTime = t2 + r2;
  }
  function ut(e2, t2) {
    if (!e2.timeline)
      return;
    const n2 = "paused" == e2.proxy.playState && e2.proxy.pending;
    let i2 = false, r2 = Ze(e2, e2.proxy.currentTime);
    0 == it(e2) && null == r2 && (e2.holdTime = 0), null == r2 && (e2.autoAlignStartTime = true), ("finished" === e2.proxy.playState || n2) && (e2.holdTime = null, e2.startTime = null, e2.autoAlignStartTime = true), e2.holdTime && (e2.startTime = null), e2.pendingTask && (e2.pendingTask = null, i2 = true), (null !== e2.holdTime || e2.autoAlignStartTime || n2 || null !== e2.pendingPlaybackRate) && (e2.readyPromise && !i2 && (e2.readyPromise = null), lt(e2), e2.readyPromise || Xe(e2), e2.pendingTask = "play", Ae(e2.timeline, e2.animation, mt.bind(e2.proxy)), st(e2, false, false));
  }
  function mt(e2) {
    const t2 = ht.get(this);
    if (!t2)
      return;
    if (null == e2)
      return void ("paused" !== t2.proxy.playState && "idle" != t2.animation.playState && t2.animation.cancel());
    dt(t2), t2.pendingTask && requestAnimationFrame(() => {
      "play" !== t2.pendingTask || null === t2.startTime && null === t2.holdTime ? "pause" === t2.pendingTask && tt(t2) : et(t2);
    });
    const n2 = this.playState;
    if ("running" == n2 || "finished" == n2) {
      const n3 = Ze(t2, e2);
      ct(t2, (n3 - Ze(t2, this.startTime)) * this.playbackRate), st(t2, false, false);
    }
  }
  function ft(e2) {
    e2.specifiedTiming = null;
  }
  let ht = /* @__PURE__ */ new WeakMap();
  window.addEventListener("pagehide", (e2) => {
    ht = /* @__PURE__ */ new WeakMap();
  }, false);
  let pt = /* @__PURE__ */ new WeakMap();
  function dt(e2) {
    if (!e2.autoAlignStartTime)
      return;
    if (!e2.timeline || !e2.timeline.currentTime)
      return;
    if ("idle" === e2.proxy.playState || "paused" === e2.proxy.playState && null !== e2.holdTime)
      return;
    const t2 = e2.rangeDuration;
    let n2, i2;
    try {
      n2 = CSS.percent(100 * function(e3) {
        if (!e3.animationRange)
          return 0;
        const t3 = "normal" === e3.animationRange.start ? gt(e3.timeline) : e3.animationRange.start;
        return ze(e3.timeline, t3);
      }(e2));
    } catch (o2) {
      n2 = CSS.percent(0), e2.animationRange.start = "normal", console.warn("Exception when calculating start offset", o2);
    }
    try {
      i2 = CSS.percent(100 * (1 - function(e3) {
        if (!e3.animationRange)
          return 0;
        const t3 = "normal" === e3.animationRange.end ? vt(e3.timeline) : e3.animationRange.end;
        return 1 - ze(e3.timeline, t3);
      }(e2)));
    } catch (o2) {
      i2 = CSS.percent(100), e2.animationRange.end = "normal", console.warn("Exception when calculating end offset", o2);
    }
    e2.rangeDuration = i2.value - n2.value;
    const r2 = it(e2);
    e2.startTime = Ze(e2, r2 >= 0 ? n2 : i2), e2.holdTime = null, e2.rangeDuration !== t2 && ft(e2);
  }
  function St(e2) {
    throw new Error("Unsupported timeline class");
  }
  function gt(e2) {
    return e2 instanceof ViewTimeline ? { rangeName: "cover", offset: CSS.percent(0) } : e2 instanceof ScrollTimeline ? CSS.percent(0) : void St();
  }
  function vt(e2) {
    return e2 instanceof ViewTimeline ? { rangeName: "cover", offset: CSS.percent(100) } : e2 instanceof ScrollTimeline ? CSS.percent(100) : void St();
  }
  function Tt(e2, t2) {
    if (!t2)
      return { start: "normal", end: "normal" };
    const n2 = { start: gt(e2), end: vt(e2) };
    if (e2 instanceof ViewTimeline) {
      const e3 = B(t2), i2 = [], r2 = [];
      if (e3.forEach((e4) => {
        if (ye.includes(e4))
          i2.push(e4);
        else
          try {
            r2.push(CSSNumericValue.parse(e4));
          } catch (n3) {
            throw TypeError(`Could not parse range "${t2}"`);
          }
      }), i2.length > 2 || r2.length > 2 || 1 == r2.length)
        throw TypeError("Invalid time range or unsupported time range format.");
      return i2.length && (n2.start.rangeName = i2[0], n2.end.rangeName = i2.length > 1 ? i2[1] : i2[0]), r2.length > 1 && (n2.start.offset = r2[0], n2.end.offset = r2[1]), n2;
    }
    if (e2 instanceof ScrollTimeline) {
      const e3 = t2.split(" ");
      if (2 != e3.length)
        throw TypeError("Invalid time range or unsupported time range format.");
      return n2.start = CSSNumericValue.parse(e3[0]), n2.end = CSSNumericValue.parse(e3[1]), n2;
    }
    St();
  }
  function yt(e2, t2, n2) {
    if (!t2 || "normal" === t2)
      return "normal";
    if (e2 instanceof ViewTimeline) {
      let e3 = "cover", i2 = "start" === n2 ? CSS.percent(0) : CSS.percent(100);
      if (t2 instanceof Object)
        void 0 !== t2.rangeName && (e3 = t2.rangeName), void 0 !== t2.offset && (i2 = t2.offset);
      else {
        const n3 = B(t2);
        1 === n3.length ? ye.includes(n3[0]) ? e3 = n3[0] : i2 = Q(CSSNumericValue.parse(n3[0]), {}) : 2 === n3.length && (e3 = n3[0], i2 = Q(CSSNumericValue.parse(n3[1]), {}));
      }
      if (!ye.includes(e3))
        throw TypeError("Invalid range name");
      return { rangeName: e3, offset: i2 };
    }
    if (e2 instanceof ScrollTimeline)
      return CSSNumericValue.parse(t2);
    St();
  }
  class wt {
    constructor(e2, t2, n2 = {}) {
      const i2 = t2 instanceof ScrollTimeline, r2 = e2 instanceof Ge ? e2 : new Ge(e2, i2 ? void 0 : t2);
      pt.set(r2, this), ht.set(this, { animation: r2, timeline: i2 ? t2 : void 0, playState: i2 ? "idle" : null, readyPromise: null, finishedPromise: null, startTime: null, holdTime: null, rangeDuration: null, previousCurrentTime: null, autoAlignStartTime: false, pendingPlaybackRate: null, pendingTask: null, specifiedTiming: null, normalizedTiming: null, effect: null, animationRange: i2 ? Tt(t2, n2["animation-range"]) : null, proxy: this });
    }
    get effect() {
      const e2 = ht.get(this);
      return e2.timeline ? (e2.effect || (e2.effect = function(e3) {
        const t2 = e3.animation.effect, n2 = t2.updateTiming, i2 = { apply: function(n3) {
          t2.getTiming();
          const i3 = n3.apply(t2);
          if (e3.timeline) {
            const t3 = e3.duration ?? 100;
            i3.localTime = Je(e3, i3.localTime), i3.endTime = Je(e3, i3.endTime), i3.activeDuration = Je(e3, i3.activeDuration);
            const n4 = at(e3), r3 = i3.iterations ? (n4 - i3.delay - i3.endDelay) / i3.iterations : 0;
            i3.duration = n4 ? CSS.percent(t3 * r3 / n4) : CSS.percent(0), void 0 === e3.timeline.currentTime && (i3.localTime = null);
          }
          return i3;
        } }, r2 = { apply: function(i3, r3) {
          if (e3.specifiedTiming)
            return e3.specifiedTiming;
          e3.specifiedTiming = i3.apply(t2);
          let o3, s3 = Object.assign({}, e3.specifiedTiming);
          if (s3.duration === 1 / 0)
            throw TypeError("Effect duration cannot be Infinity when used with Scroll Timelines");
          return (null === s3.duration || "auto" === s3.duration || e3.autoDurationEffect) && e3.timeline && (e3.autoDurationEffect = true, s3.delay = 0, s3.endDelay = 0, o3 = s3.iterations ? 1e5 : 0, s3.duration = s3.iterations ? (o3 - s3.delay - s3.endDelay) / s3.iterations : 0, s3.duration < 0 && (s3.duration = 0, s3.endDelay = o3 - s3.delay), n2.apply(t2, [s3])), e3.normalizedTiming = s3, e3.specifiedTiming;
        } }, o2 = { apply: function(n3, i3, r3) {
          if (r3 && r3.length) {
            if (e3.timeline && r3[0]) {
              const t3 = r3[0], n4 = t3.duration;
              if (n4 === 1 / 0)
                throw TypeError("Effect duration cannot be Infinity when used with Scroll Timelines");
              if (t3.iterations === 1 / 0)
                throw TypeError("Effect iterations cannot be Infinity when used with Scroll Timelines");
              void 0 !== n4 && "auto" !== n4 && (e3.autoDurationEffect = null);
            }
            e3.specifiedTiming && n3.apply(t2, [e3.specifiedTiming]), n3.apply(t2, r3), ft(e3);
          }
        } }, s2 = new Proxy(t2, { get: function(e4, n3) {
          const i3 = e4[n3];
          return "function" == typeof i3 ? i3.bind(t2) : i3;
        }, set: function(e4, t3, n3) {
          return e4[t3] = n3, true;
        } });
        return s2.getComputedTiming = new Proxy(t2.getComputedTiming, i2), s2.getTiming = new Proxy(t2.getTiming, r2), s2.updateTiming = new Proxy(t2.updateTiming, o2), s2;
      }(e2)), e2.effect) : e2.animation.effect;
    }
    set effect(e2) {
      const t2 = ht.get(this);
      t2.animation.effect = e2, t2.effect = null, t2.autoDurationEffect = null;
    }
    get timeline() {
      const e2 = ht.get(this);
      return e2.timeline || e2.animation.timeline;
    }
    set timeline(e2) {
      const t2 = ht.get(this), n2 = this.timeline;
      if (n2 == e2)
        return;
      const i2 = this.playState, r2 = this.currentTime;
      let o2, s2 = at(t2);
      o2 = null === r2 ? null : 0 === s2 ? 0 : Ze(t2, r2) / s2;
      const a2 = n2 instanceof ScrollTimeline, l2 = e2 instanceof ScrollTimeline, c2 = this.pending;
      if (a2 && Ne(t2.timeline, t2.animation), l2)
        return t2.timeline = e2, rt(t2), t2.autoAlignStartTime = true, t2.startTime = null, t2.holdTime = null, "running" !== i2 && "finished" !== i2 || (t2.readyPromise && "resolved" !== t2.readyPromise.state || Xe(t2), t2.pendingTask = "play", Ae(t2.timeline, t2.animation, mt.bind(this))), "paused" === i2 && null !== o2 && (t2.holdTime = o2 * s2), c2 && (t2.readyPromise && "resolved" != t2.readyPromise.state || Xe(t2), t2.pendingTask = "paused" == i2 ? "pause" : "play"), null !== t2.startTime && (t2.holdTime = null), void st(t2, false, false);
      if (t2.animation.timeline != e2)
        throw TypeError("Unsupported timeline: " + e2);
      if (Ne(t2.timeline, t2.animation), t2.timeline = null, a2)
        switch (null !== r2 && (t2.animation.currentTime = o2 * at(t2)), i2) {
          case "paused":
            t2.animation.pause();
            break;
          case "running":
          case "finished":
            t2.animation.play();
        }
    }
    get startTime() {
      const e2 = ht.get(this);
      return e2.timeline ? Je(e2, e2.startTime) : e2.animation.startTime;
    }
    set startTime(e2) {
      const t2 = ht.get(this);
      if (e2 = Ze(t2, e2), !t2.timeline)
        return void (t2.animation.startTime = e2);
      t2.autoAlignStartTime = false;
      null == Ze(t2, t2.timeline.currentTime) && null != t2.startTime && (t2.holdTime = null, lt(t2));
      const n2 = Ze(t2, this.currentTime);
      rt(t2), t2.startTime = e2, null !== t2.startTime && 0 != t2.animation.playbackRate ? t2.holdTime = null : t2.holdTime = n2, t2.pendingTask && (t2.pendingTask = null, t2.readyPromise.resolve(this)), st(t2, true, false), lt(t2);
    }
    get currentTime() {
      const e2 = ht.get(this);
      return e2.timeline ? null != e2.holdTime ? Je(e2, e2.holdTime) : Je(e2, ot(e2)) : e2.animation.currentTime;
    }
    set currentTime(e2) {
      const t2 = ht.get(this);
      t2.timeline ? (!function(e3, t3) {
        if (null == t3 && null !== e3.currentTime)
          throw new TypeError();
        t3 = Ze(e3, t3), e3.autoAlignStartTime = false, null !== e3.holdTime || null === e3.startTime || "inactive" === e3.timeline.phase || 0 === e3.animation.playbackRate ? e3.holdTime = t3 : e3.startTime = Ze(e3, e3.timeline.currentTime) - t3 / e3.animation.playbackRate, "inactive" === e3.timeline.phase && (e3.startTime = null), e3.previousCurrentTime = null;
      }(t2, e2), "pause" == t2.pendingTask && (t2.holdTime = Ze(t2, e2), rt(t2), t2.startTime = null, t2.pendingTask = null, t2.readyPromise.resolve(this)), st(t2, true, false)) : t2.animation.currentTime = e2;
    }
    get playbackRate() {
      return ht.get(this).animation.playbackRate;
    }
    set playbackRate(e2) {
      const t2 = ht.get(this);
      if (!t2.timeline)
        return void (t2.animation.playbackRate = e2);
      t2.pendingPlaybackRate = null;
      const n2 = this.currentTime;
      t2.animation.playbackRate = e2, null !== n2 && (this.currentTime = n2);
    }
    get playState() {
      const e2 = ht.get(this);
      if (!e2.timeline)
        return e2.animation.playState;
      const t2 = Ze(e2, this.currentTime);
      if (null === t2 && null === e2.startTime && null == e2.pendingTask)
        return "idle";
      if ("pause" == e2.pendingTask || null === e2.startTime && "play" != e2.pendingTask)
        return "paused";
      if (null != t2) {
        if (e2.animation.playbackRate > 0 && t2 >= at(e2))
          return "finished";
        if (e2.animation.playbackRate < 0 && t2 <= 0)
          return "finished";
      }
      return "running";
    }
    get rangeStart() {
      var e2;
      return (null == (e2 = ht.get(this).animationRange) ? void 0 : e2.start) ?? "normal";
    }
    set rangeStart(e2) {
      const t2 = ht.get(this);
      if (!t2.timeline)
        return t2.animation.rangeStart = e2;
      if (t2.timeline instanceof ScrollTimeline) {
        t2.animationRange.start = yt(t2.timeline, e2, "start"), dt(t2), lt(t2);
      }
    }
    get rangeEnd() {
      var e2;
      return (null == (e2 = ht.get(this).animationRange) ? void 0 : e2.end) ?? "normal";
    }
    set rangeEnd(e2) {
      const t2 = ht.get(this);
      if (!t2.timeline)
        return t2.animation.rangeEnd = e2;
      if (t2.timeline instanceof ScrollTimeline) {
        t2.animationRange.end = yt(t2.timeline, e2, "end"), dt(t2), lt(t2);
      }
    }
    get replaceState() {
      return ht.get(this).animation.pending;
    }
    get pending() {
      const e2 = ht.get(this);
      return e2.timeline ? !!e2.readyPromise && "pending" == e2.readyPromise.state : e2.animation.pending;
    }
    finish() {
      const e2 = ht.get(this);
      if (!e2.timeline)
        return void e2.animation.finish();
      const t2 = it(e2), n2 = at(e2);
      if (0 == t2)
        throw new DOMException("Cannot finish Animation with a playbackRate of 0.", "InvalidStateError");
      if (t2 > 0 && n2 == 1 / 0)
        throw new DOMException("Cannot finish Animation with an infinite target effect end.", "InvalidStateError");
      rt(e2);
      const i2 = t2 < 0 ? 0 : n2;
      this.currentTime = Je(e2, i2);
      const r2 = Ze(e2, e2.timeline.currentTime);
      null === e2.startTime && null !== r2 && (e2.startTime = r2 - i2 / e2.animation.playbackRate), "pause" == e2.pendingTask && null !== e2.startTime && (e2.holdTime = null, e2.pendingTask = null, e2.readyPromise.resolve(this)), "play" == e2.pendingTask && null !== e2.startTime && (e2.pendingTask = null, e2.readyPromise.resolve(this)), st(e2, true, true);
    }
    play() {
      const e2 = ht.get(this);
      e2.timeline ? ut(e2) : e2.animation.play();
    }
    pause() {
      const e2 = ht.get(this);
      e2.timeline ? "paused" != this.playState && (null === e2.animation.currentTime && (e2.autoAlignStartTime = true), "play" == e2.pendingTask ? e2.pendingTask = null : e2.readyPromise = null, e2.readyPromise || Xe(e2), e2.pendingTask = "pause", Ae(e2.timeline, e2.animation, mt.bind(e2.proxy))) : e2.animation.pause();
    }
    reverse() {
      const e2 = ht.get(this), t2 = it(e2), n2 = Ze(e2, this.currentTime), i2 = at(e2) == 1 / 0, r2 = 0 != t2 && (t2 < 0 || n2 > 0 || !i2);
      if (!e2.timeline || !r2)
        return r2 && (e2.pendingPlaybackRate = -it(e2)), void e2.animation.reverse();
      if ("inactive" == e2.timeline.phase)
        throw new DOMException("Cannot reverse an animation with no active timeline", "InvalidStateError");
      this.updatePlaybackRate(-t2), ut(e2);
    }
    updatePlaybackRate(e2) {
      const t2 = ht.get(this);
      if (t2.pendingPlaybackRate = e2, !t2.timeline)
        return void t2.animation.updatePlaybackRate(e2);
      const n2 = this.playState;
      if (!t2.readyPromise || "pending" != t2.readyPromise.state)
        switch (n2) {
          case "idle":
          case "paused":
            rt(t2);
            break;
          case "finished":
            const n3 = Ze(t2, t2.timeline.currentTime), i2 = null !== n3 ? (n3 - t2.startTime) * t2.animation.playbackRate : null;
            t2.startTime = 0 == e2 ? n3 : null != n3 && null != i2 ? (n3 - i2) / e2 : null, rt(t2), st(t2, false, false), lt(t2);
            break;
          default:
            ut(t2);
        }
    }
    persist() {
      ht.get(this).animation.persist();
    }
    get id() {
      return ht.get(this).animation.id;
    }
    set id(e2) {
      ht.get(this).animation.id = e2;
    }
    cancel() {
      const e2 = ht.get(this);
      e2.timeline ? ("idle" != this.playState && (!function(e3) {
        e3.pendingTask && (e3.pendingTask = null, rt(e3), e3.readyPromise.reject(Ye()), Xe(e3), e3.readyPromise.resolve(e3.proxy));
      }(e2), e2.finishedPromise && "pending" == e2.finishedPromise.state && e2.finishedPromise.reject(Ye()), e2.finishedPromise = new Qe(), e2.animation.cancel()), e2.startTime = null, e2.holdTime = null, Ne(e2.timeline, e2.animation)) : e2.animation.cancel();
    }
    get onfinish() {
      return ht.get(this).animation.onfinish;
    }
    set onfinish(e2) {
      ht.get(this).animation.onfinish = e2;
    }
    get oncancel() {
      return ht.get(this).animation.oncancel;
    }
    set oncancel(e2) {
      ht.get(this).animation.oncancel = e2;
    }
    get onremove() {
      return ht.get(this).animation.onremove;
    }
    set onremove(e2) {
      ht.get(this).animation.onremove = e2;
    }
    get finished() {
      const e2 = ht.get(this);
      return e2.timeline ? (e2.finishedPromise || (e2.finishedPromise = new Qe()), e2.finishedPromise.promise) : e2.animation.finished;
    }
    get ready() {
      const e2 = ht.get(this);
      return e2.timeline ? (e2.readyPromise || (e2.readyPromise = new Qe(), e2.readyPromise.resolve(this)), e2.readyPromise.promise) : e2.animation.ready;
    }
    addEventListener(e2, t2, n2) {
      ht.get(this).animation.addEventListener(e2, t2, n2);
    }
    removeEventListener(e2, t2, n2) {
      ht.get(this).animation.removeEventListener(e2, t2, n2);
    }
    dispatchEvent(e2) {
      ht.get(this).animation.dispatchEvent(e2);
    }
  }
  function xt(e2, t2) {
    const n2 = t2.timeline;
    n2 instanceof ScrollTimeline && delete t2.timeline;
    const i2 = Ke.apply(this, [e2, t2]), r2 = new wt(i2, n2);
    if (n2 instanceof ScrollTimeline) {
      i2.pause();
      ht.get(r2).animationRange = { start: yt(n2, t2.rangeStart, "start"), end: yt(n2, t2.rangeEnd, "end") }, r2.play();
    }
    return r2;
  }
  function bt(e2) {
    for (let t2 = 0; t2 < e2.length; ++t2) {
      let n2 = pt.get(e2[t2]);
      n2 && (e2[t2] = n2);
    }
    return e2;
  }
  function Ct(e2) {
    return bt(Be.apply(this, [e2]));
  }
  function Et(e2) {
    return bt(qe.apply(this, [e2]));
  }
  const kt = { IDENTIFIER: /[\w\\\@_-]+/g, WHITE_SPACE: /\s*/g, NUMBER: /^[0-9]+/, TIME: /^[0-9]+(s|ms)/, SCROLL_TIMELINE: /scroll-timeline\s*:([^;}]+)/, SCROLL_TIMELINE_NAME: /scroll-timeline-name\s*:([^;}]+)/, SCROLL_TIMELINE_AXIS: /scroll-timeline-axis\s*:([^;}]+)/, VIEW_TIMELINE: /view-timeline\s*:([^;}]+)/, VIEW_TIMELINE_NAME: /view-timeline-name\s*:([^;}]+)/, VIEW_TIMELINE_AXIS: /view-timeline-axis\s*:([^;}]+)/, VIEW_TIMELINE_INSET: /view-timeline-inset\s*:([^;}]+)/, ANIMATION_TIMELINE: /animation-timeline\s*:([^;}]+)/, ANIMATION_TIME_RANGE: /animation-range\s*:([^;}]+)/, ANIMATION_NAME: /animation-name\s*:([^;}]+)/, ANIMATION: /animation\s*:([^;}]+)/, ANONYMOUS_SCROLL_TIMELINE: /scroll\(([^)]*)\)/, ANONYMOUS_VIEW_TIMELINE: /view\(([^)]*)\)/ }, Mt = ["block", "inline", "x", "y"], Pt = ["nearest", "root", "self"];
  const It = new class {
    constructor() {
      this.cssRulesWithTimelineName = [], this.nextAnonymousTimelineNameIndex = 0, this.anonymousScrollTimelineOptions = /* @__PURE__ */ new Map(), this.anonymousViewTimelineOptions = /* @__PURE__ */ new Map(), this.sourceSelectorToScrollTimeline = [], this.subjectSelectorToViewTimeline = [], this.keyframeNamesSelectors = /* @__PURE__ */ new Map();
    }
    transpileStyleSheet(e2, t2, n2) {
      const i2 = { sheetSrc: e2, index: 0, name: n2 };
      for (; i2.index < i2.sheetSrc.length && (this.eatWhitespace(i2), !(i2.index >= i2.sheetSrc.length)); ) {
        if (this.lookAhead("/*", i2)) {
          for (; this.lookAhead("/*", i2); )
            this.eatComment(i2), this.eatWhitespace(i2);
          continue;
        }
        const e3 = this.parseQualifiedRule(i2);
        e3 && (t2 ? this.parseKeyframesAndSaveNameMapping(e3, i2) : this.handleScrollTimelineProps(e3, i2));
      }
      return i2.sheetSrc;
    }
    getAnimationTimelineOptions(e2, t2) {
      for (let n2 = this.cssRulesWithTimelineName.length - 1; n2 >= 0; n2--) {
        const i2 = this.cssRulesWithTimelineName[n2];
        try {
          if (t2.matches(i2.selector) && (!i2["animation-name"] || i2["animation-name"] == e2))
            return { "animation-timeline": i2["animation-timeline"], "animation-range": i2["animation-range"] };
        } catch {
        }
      }
      return null;
    }
    getAnonymousScrollTimelineOptions(e2, t2) {
      const n2 = this.anonymousScrollTimelineOptions.get(e2);
      return n2 ? { anonymousSource: n2.source, anonymousTarget: t2, source: _e(n2.source ?? "nearest", t2), axis: n2.axis ? n2.axis : "block" } : null;
    }
    getScrollTimelineOptions(e2, t2) {
      const n2 = this.getAnonymousScrollTimelineOptions(e2, t2);
      if (n2)
        return n2;
      for (let i2 = this.sourceSelectorToScrollTimeline.length - 1; i2 >= 0; i2--) {
        const n3 = this.sourceSelectorToScrollTimeline[i2];
        if (n3.name == e2) {
          const e3 = this.findPreviousSiblingOrAncestorMatchingSelector(t2, n3.selector);
          if (e3)
            return { source: e3, ...n3.axis ? { axis: n3.axis } : {} };
        }
      }
      return null;
    }
    findPreviousSiblingOrAncestorMatchingSelector(e2, t2) {
      let n2 = e2;
      for (; n2; ) {
        if (n2.matches(t2))
          return n2;
        n2 = n2.previousElementSibling || n2.parentElement;
      }
      return null;
    }
    getAnonymousViewTimelineOptions(e2, t2) {
      const n2 = this.anonymousViewTimelineOptions.get(e2);
      return n2 ? { subject: t2, axis: n2.axis ? n2.axis : "block", inset: n2.inset ? n2.inset : "auto" } : null;
    }
    getViewTimelineOptions(e2, t2) {
      const n2 = this.getAnonymousViewTimelineOptions(e2, t2);
      if (n2)
        return n2;
      for (let i2 = this.subjectSelectorToViewTimeline.length - 1; i2 >= 0; i2--) {
        const n3 = this.subjectSelectorToViewTimeline[i2];
        if (n3.name == e2) {
          const e3 = this.findPreviousSiblingOrAncestorMatchingSelector(t2, n3.selector);
          if (e3)
            return { subject: e3, axis: n3.axis, inset: n3.inset };
        }
      }
      return null;
    }
    handleScrollTimelineProps(e2, t2) {
      if (e2.selector.includes("@keyframes"))
        return;
      const n2 = e2.block.contents.includes("animation-name:"), i2 = e2.block.contents.includes("animation-timeline:"), r2 = e2.block.contents.includes("animation:");
      if (this.saveSourceSelectorToScrollTimeline(e2), this.saveSubjectSelectorToViewTimeline(e2), !i2 && !n2 && !r2)
        return;
      let o2 = [], s2 = [], a2 = false;
      i2 && (o2 = this.extractScrollTimelineNames(e2.block.contents)), n2 && (s2 = this.extractMatches(e2.block.contents, kt.ANIMATION_NAME)), i2 && n2 || (r2 && this.extractMatches(e2.block.contents, kt.ANIMATION).forEach((t3) => {
        const n3 = this.extractAnimationName(t3);
        n3 && i2 && s2.push(n3), i2 && (this.hasDuration(t3) || (this.hasAutoDuration(t3) && (e2.block.contents = e2.block.contents.replace("auto", "    ")), e2.block.contents = e2.block.contents.replace(t3, " 1s " + t3), a2 = true));
      }), a2 && this.replacePart(e2.block.startIndex, e2.block.endIndex, e2.block.contents, t2)), this.saveRelationInList(e2, o2, s2);
    }
    saveSourceSelectorToScrollTimeline(e2) {
      const t2 = e2.block.contents.includes("scroll-timeline:"), n2 = e2.block.contents.includes("scroll-timeline-name:"), i2 = e2.block.contents.includes("scroll-timeline-axis:");
      if (!t2 && !n2)
        return;
      let r2 = [];
      if (t2) {
        const t3 = this.extractMatches(e2.block.contents, kt.SCROLL_TIMELINE);
        for (const n3 of t3) {
          const t4 = this.split(n3);
          let i3 = { selector: e2.selector, name: "" };
          1 == t4.length ? i3.name = t4[0] : 2 == t4.length && (Mt.includes(t4[0]) ? (i3.axis = t4[0], i3.name = t4[1]) : (i3.axis = t4[1], i3.name = t4[0])), r2.push(i3);
        }
      }
      if (n2) {
        const t3 = this.extractMatches(e2.block.contents, kt.SCROLL_TIMELINE_NAME);
        for (let n3 = 0; n3 < t3.length; n3++)
          if (n3 < r2.length)
            r2[n3].name = t3[n3];
          else {
            let i3 = { selector: e2.selector, name: t3[n3] };
            r2.push(i3);
          }
      }
      let o2 = [];
      if (i2) {
        const t3 = this.extractMatches(e2.block.contents, kt.SCROLL_TIMELINE_AXIS);
        if (o2 = t3.filter((e3) => Mt.includes(e3)), o2.length != t3.length)
          throw new Error("Invalid axis");
      }
      for (let s2 = 0; s2 < r2.length; s2++)
        o2.length && (r2[s2].axis = o2[s2 % r2.length]);
      this.sourceSelectorToScrollTimeline.push(...r2);
    }
    saveSubjectSelectorToViewTimeline(e2) {
      const t2 = e2.block.contents.includes("view-timeline:"), n2 = e2.block.contents.includes("view-timeline-name:"), i2 = e2.block.contents.includes("view-timeline-axis:"), r2 = e2.block.contents.includes("view-timeline-inset:");
      if (!t2 && !n2)
        return;
      let o2 = [];
      if (t2) {
        const t3 = this.extractMatches(e2.block.contents, kt.VIEW_TIMELINE);
        for (let n3 of t3) {
          const t4 = this.split(n3);
          let i3 = { selector: e2.selector, name: "", inset: null };
          1 == t4.length ? i3.name = t4[0] : 2 == t4.length && (Mt.includes(t4[0]) ? (i3.axis = t4[0], i3.name = t4[1]) : (i3.axis = t4[1], i3.name = t4[0])), o2.push(i3);
        }
      }
      if (n2) {
        const t3 = this.extractMatches(e2.block.contents, kt.VIEW_TIMELINE_NAME);
        for (let n3 = 0; n3 < t3.length; n3++)
          if (n3 < o2.length)
            o2[n3].name = t3[n3];
          else {
            let i3 = { selector: e2.selector, name: t3[n3], inset: null };
            o2.push(i3);
          }
      }
      let s2 = [], a2 = [];
      if (r2 && (s2 = this.extractMatches(e2.block.contents, kt.VIEW_TIMELINE_INSET)), i2) {
        const t3 = this.extractMatches(e2.block.contents, kt.VIEW_TIMELINE_AXIS);
        if (a2 = t3.filter((e3) => Mt.includes(e3)), a2.length != t3.length)
          throw new Error("Invalid axis");
      }
      for (let l2 = 0; l2 < o2.length; l2++)
        s2.length && (o2[l2].inset = s2[l2 % o2.length]), a2.length && (o2[l2].axis = a2[l2 % o2.length]);
      this.subjectSelectorToViewTimeline.push(...o2);
    }
    hasDuration(e2) {
      return e2.split(" ").filter((e3) => {
        return t2 = e3, kt.TIME.exec(t2);
        var t2;
      }).length >= 1;
    }
    hasAutoDuration(e2) {
      return e2.split(" ").filter((e3) => "auto" === e3).length >= 1;
    }
    saveRelationInList(e2, t2, n2) {
      let i2 = [];
      e2.block.contents.includes("animation-range:") && (i2 = this.extractMatches(e2.block.contents, kt.ANIMATION_TIME_RANGE));
      const r2 = Math.max(t2.length, n2.length, i2.length);
      for (let o2 = 0; o2 < r2; o2++)
        this.cssRulesWithTimelineName.push({ selector: e2.selector, "animation-timeline": t2[o2 % t2.length], ...n2.length ? { "animation-name": n2[o2 % n2.length] } : {}, ...i2.length ? { "animation-range": i2[o2 % i2.length] } : {} });
    }
    extractScrollTimelineNames(e2) {
      const t2 = kt.ANIMATION_TIMELINE.exec(e2)[1].trim(), n2 = [];
      return t2.split(",").map((e3) => e3.trim()).forEach((e3) => {
        if (function(e4) {
          return (e4.startsWith("scroll") || e4.startsWith("view")) && e4.includes("(");
        }(e3)) {
          const t3 = this.saveAnonymousTimelineName(e3);
          n2.push(t3);
        } else
          n2.push(e3);
      }), n2;
    }
    saveAnonymousTimelineName(e2) {
      const t2 = ":t" + this.nextAnonymousTimelineNameIndex++;
      return e2.startsWith("scroll(") ? this.anonymousScrollTimelineOptions.set(t2, this.parseAnonymousScrollTimeline(e2)) : this.anonymousViewTimelineOptions.set(t2, this.parseAnonymousViewTimeline(e2)), t2;
    }
    parseAnonymousScrollTimeline(e2) {
      const t2 = kt.ANONYMOUS_SCROLL_TIMELINE.exec(e2);
      if (!t2)
        return null;
      const n2 = t2[1], i2 = {};
      return n2.split(" ").forEach((e3) => {
        Mt.includes(e3) ? i2.axis = e3 : Pt.includes(e3) && (i2.source = e3);
      }), i2;
    }
    parseAnonymousViewTimeline(e2) {
      const t2 = kt.ANONYMOUS_VIEW_TIMELINE.exec(e2);
      if (!t2)
        return null;
      const n2 = t2[1], i2 = {};
      return n2.split(" ").forEach((e3) => {
        Mt.includes(e3) ? i2.axis = e3 : i2.inset = i2.inset ? `${i2.inset} ${e3}` : e3;
      }), i2;
    }
    extractAnimationName(e2) {
      return this.findMatchingEntryInContainer(e2, this.keyframeNamesSelectors);
    }
    findMatchingEntryInContainer(e2, t2) {
      const n2 = e2.split(" ").filter((e3) => t2.has(e3));
      return n2 ? n2[0] : null;
    }
    parseIdentifier(e2) {
      kt.IDENTIFIER.lastIndex = e2.index;
      const t2 = kt.IDENTIFIER.exec(e2.sheetSrc);
      if (!t2)
        throw this.parseError(e2, "Expected an identifier");
      return e2.index += t2[0].length, t2[0];
    }
    parseKeyframesAndSaveNameMapping(e2, t2) {
      if (e2.selector.startsWith("@keyframes")) {
        const n2 = this.replaceKeyframesAndGetMapping(e2, t2);
        e2.selector.split(" ").forEach((e3, t3) => {
          t3 > 0 && this.keyframeNamesSelectors.set(e3, n2);
        });
      }
    }
    replaceKeyframesAndGetMapping(e2, t2) {
      function n2(e3) {
        return ye.some((t3) => e3.startsWith(t3));
      }
      const i2 = e2.block.contents, r2 = function(e3) {
        let t3 = 0, n3 = -1, i3 = -1;
        const r3 = [];
        for (let o3 = 0; o3 < e3.length; o3++)
          "{" == e3[o3] ? t3++ : "}" == e3[o3] && t3--, 1 == t3 && "{" != e3[o3] && "}" != e3[o3] && -1 == n3 && (n3 = o3), 2 == t3 && "{" == e3[o3] && (i3 = o3, r3.push({ start: n3, end: i3 }), n3 = i3 = -1);
        return r3;
      }(i2);
      if (0 == r2.length)
        return /* @__PURE__ */ new Map();
      const o2 = /* @__PURE__ */ new Map();
      let s2 = false;
      const a2 = [];
      a2.push(i2.substring(0, r2[0].start));
      for (let l2 = 0; l2 < r2.length; l2++) {
        const e3 = i2.substring(r2[l2].start, r2[l2].end);
        let t3 = [];
        e3.split(",").forEach((e4) => {
          const i3 = e4.split(" ").map((e5) => e5.trim()).filter((e5) => "" != e5).join(" ");
          const r3 = o2.size;
          o2.set(r3, i3), t3.push(`${r3}%`), n2(i3) && (s2 = true);
        }), a2.push(t3.join(",")), l2 == r2.length - 1 ? a2.push(i2.substring(r2[l2].end)) : a2.push(i2.substring(r2[l2].end, r2[l2 + 1].start));
      }
      return s2 ? (e2.block.contents = a2.join(""), this.replacePart(e2.block.startIndex, e2.block.endIndex, e2.block.contents, t2), o2) : /* @__PURE__ */ new Map();
    }
    parseQualifiedRule(e2) {
      const t2 = e2.index, n2 = this.parseSelector(e2).trim();
      if (!n2)
        return;
      return { selector: n2, block: this.eatBlock(e2), startIndex: t2, endIndex: e2.index };
    }
    removeEnclosingDoubleQuotes(e2) {
      let t2 = '"' == e2[0] ? 1 : 0, n2 = '"' == e2[e2.length - 1] ? e2.length - 1 : e2.length;
      return e2.substring(t2, n2);
    }
    assertString(e2, t2) {
      if (e2.sheetSrc.substr(e2.index, t2.length) != t2)
        throw this.parseError(e2, `Did not find expected sequence ${t2}`);
      e2.index += t2.length;
    }
    replacePart(e2, t2, n2, i2) {
      if (i2.sheetSrc = i2.sheetSrc.slice(0, e2) + n2 + i2.sheetSrc.slice(t2), i2.index >= t2) {
        const r2 = i2.index - t2;
        i2.index = e2 + n2.length + r2;
      }
    }
    eatComment(e2) {
      this.assertString(e2, "/*"), this.eatUntil("*/", e2, true), this.assertString(e2, "*/");
    }
    eatBlock(e2) {
      const t2 = e2.index;
      this.assertString(e2, "{");
      let n2 = 1;
      for (; 0 != n2; )
        this.lookAhead("/*", e2) ? this.eatComment(e2) : ("{" === e2.sheetSrc[e2.index] ? n2++ : "}" === e2.sheetSrc[e2.index] && n2--, this.advance(e2));
      const i2 = e2.index;
      return { startIndex: t2, endIndex: i2, contents: e2.sheetSrc.slice(t2, i2) };
    }
    advance(e2) {
      if (e2.index++, e2.index > e2.sheetSrc.length)
        throw this.parseError(e2, "Advanced beyond the end");
    }
    parseError(e2, t2) {
      return Error(`(${e2.name ? e2.name : "<anonymous file>"}): ${t2}`);
    }
    eatUntil(e2, t2, n2 = false) {
      const i2 = t2.index;
      for (; !this.lookAhead(e2, t2); )
        this.advance(t2);
      return n2 && (t2.sheetSrc = t2.sheetSrc.slice(0, i2) + " ".repeat(t2.index - i2) + t2.sheetSrc.slice(t2.index)), t2.sheetSrc.slice(i2, t2.index);
    }
    parseSelector(e2) {
      let t2 = e2.index;
      if (this.eatUntil("{", e2), t2 === e2.index)
        throw Error("Empty selector");
      return e2.sheetSrc.slice(t2, e2.index);
    }
    eatWhitespace(e2) {
      kt.WHITE_SPACE.lastIndex = e2.index;
      const t2 = kt.WHITE_SPACE.exec(e2.sheetSrc);
      t2 && (e2.index += t2[0].length);
    }
    lookAhead(e2, t2) {
      return t2.sheetSrc.substr(t2.index, e2.length) == e2;
    }
    peek(e2) {
      return e2.sheetSrc[e2.index];
    }
    extractMatches(e2, t2, n2 = ",") {
      return t2.exec(e2)[1].trim().split(n2).map((e3) => e3.trim());
    }
    split(e2) {
      return e2.split(" ").map((e3) => e3.trim()).filter((e3) => "" != e3);
    }
  }();
  function Rt(e2, t2, n2, i2, r2, o2) {
    const s2 = Me(t2), a2 = Pe(t2, n2);
    return He(De(e2, s2, a2, i2, r2), o2, De("cover", s2, a2, i2, r2), n2);
  }
  function Nt(e2, t2, n2) {
    const i2 = It.getAnimationTimelineOptions(t2, n2);
    if (!i2)
      return null;
    const r2 = i2["animation-timeline"];
    if (!r2)
      return null;
    let o2 = It.getScrollTimelineOptions(r2, n2) || It.getViewTimelineOptions(r2, n2);
    return o2 ? (o2.subject && function(e3, t3) {
      const n3 = We(t3.subject), i3 = t3.axis || t3.axis;
      function r3(e4, r4) {
        let o4 = null;
        for (const [s2, a2] of e4)
          if (s2 == 100 * r4.offset) {
            if ("from" == a2)
              o4 = 0;
            else if ("to" == a2)
              o4 = 100;
            else {
              const e5 = a2.split(" ");
              o4 = 1 == e5.length ? parseFloat(e5[0]) : 100 * Rt(e5[0], n3, t3.subject, i3, t3.inset, CSS.percent(parseFloat(e5[1])));
            }
            break;
          }
        return o4;
      }
      const o3 = It.keyframeNamesSelectors.get(e3.animationName);
      if (o3 && o3.size) {
        const t4 = [];
        e3.effect.getKeyframes().forEach((e4) => {
          const n5 = r3(o3, e4);
          null !== n5 && n5 >= 0 && n5 <= 100 && (e4.offset = n5 / 100, t4.push(e4));
        });
        const n4 = t4.sort((e4, t5) => e4.offset < t5.offset ? -1 : e4.affset > t5.offset ? 1 : 0);
        e3.effect.setKeyframes(n4);
      }
    }(e2, o2), { timeline: o2.source ? new ScrollTimeline(o2) : new $e(o2), animOptions: i2 }) : null;
  }
  function At() {
    if (CSS.supports("animation-timeline: --works"))
      return true;
    !function() {
      function e3(e4) {
        if (0 === e4.innerHTML.trim().length || "aphrodite" in e4.dataset)
          return;
        let t3 = It.transpileStyleSheet(e4.innerHTML, true);
        t3 = It.transpileStyleSheet(t3, false), e4.innerHTML = t3;
      }
      function t2(e4) {
        "text/css" != e4.type && "stylesheet" != e4.rel || !e4.href || new URL(e4.href, document.baseURI).origin == location.origin && fetch(e4.getAttribute("href")).then(async (t3) => {
          const n2 = await t3.text();
          let i2 = It.transpileStyleSheet(n2, true);
          if (i2 = It.transpileStyleSheet(n2, false), i2 != n2) {
            const t4 = new Blob([i2], { type: "text/css" }), n3 = URL.createObjectURL(t4);
            e4.setAttribute("href", n3);
          }
        });
      }
      new MutationObserver((n2) => {
        for (const i2 of n2)
          for (const n3 of i2.addedNodes)
            n3 instanceof HTMLStyleElement && e3(n3), n3 instanceof HTMLLinkElement && t2(n3);
      }).observe(document.documentElement, { childList: true, subtree: true }), document.querySelectorAll("style").forEach((t3) => e3(t3)), document.querySelectorAll("link").forEach((e4) => t2(e4));
    }();
    const e2 = CSS.supports;
    CSS.supports = (t2) => (t2 = t2.replaceAll(/(animation-timeline|scroll-timeline(-(name|axis))?|view-timeline(-(name|axis|inset))?|timeline-scope)\s*:/g, "--supported-property:"), e2(t2)), window.addEventListener("animationstart", (e3) => {
      e3.target.getAnimations().filter((t2) => t2.animationName === e3.animationName).forEach((t2) => {
        const n2 = Nt(t2, t2.animationName, e3.target);
        if (n2)
          if (!n2.timeline || t2 instanceof wt)
            t2.timeline = n2.timeline;
          else {
            const e4 = new wt(t2, n2.timeline, n2.animOptions);
            t2.pause(), e4.play();
          }
      });
    });
  }
  !function() {
    if (!At()) {
      if (!Reflect.defineProperty(window, "ScrollTimeline", { value: ScrollTimeline }))
        throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");
      if (!Reflect.defineProperty(window, "ViewTimeline", { value: $e }))
        throw Error("Error installing ViewTimeline polyfill: could not attach ViewTimeline to window");
      if (!Reflect.defineProperty(Element.prototype, "animate", { value: xt }))
        throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");
      if (!Reflect.defineProperty(window, "Animation", { value: wt }))
        throw Error("Error installing Animation constructor.");
      if (!Reflect.defineProperty(Element.prototype, "getAnimations", { value: Ct }))
        throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's getAnimations to DOM Element");
      if (!Reflect.defineProperty(document, "getAnimations", { value: Et }))
        throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's getAnimations to document");
    }
  }();
}();
