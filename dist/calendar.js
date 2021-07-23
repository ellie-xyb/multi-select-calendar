(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f;
  var e = {};
  var c = [];
  var s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function a(n2, l4) {
    for (var u4 in l4)
      n2[u4] = l4[u4];
    return n2;
  }
  function h(n2) {
    var l4 = n2.parentNode;
    l4 && l4.removeChild(n2);
  }
  function v(l4, u4, i4) {
    var t3, o3, r4, f3 = {};
    for (r4 in u4)
      r4 == "key" ? t3 = u4[r4] : r4 == "ref" ? o3 = u4[r4] : f3[r4] = u4[r4];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i4), typeof l4 == "function" && l4.defaultProps != null)
      for (r4 in l4.defaultProps)
        f3[r4] === void 0 && (f3[r4] = l4.defaultProps[r4]);
    return y(l4, f3, t3, o3, null);
  }
  function y(n2, i4, t3, o3, r4) {
    var f3 = { type: n2, props: i4, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r4 == null ? ++u : r4 };
    return l.vnode != null && l.vnode(f3), f3;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function k(n2, l4) {
    if (l4 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u4; l4 < n2.__k.length; l4++)
      if ((u4 = n2.__k[l4]) != null && u4.__e != null)
        return u4.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l4, u4;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
        if ((u4 = n2.__k[l4]) != null && u4.__e != null) {
          n2.__e = n2.__c.base = u4.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l4) {
        return n3.__v.__b - l4.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l4, u4, i4, t3, o3, r4;
        n3.__d && (o3 = (t3 = (l4 = n3).__v).__e, (r4 = l4.__P) && (u4 = [], (i4 = a({}, t3)).__v = t3.__v + 1, j(r4, t3, i4, l4.__n, r4.ownerSVGElement !== void 0, t3.__h != null ? [o3] : null, u4, o3 == null ? k(t3) : o3, t3.__h), z(u4, t3), t3.__e != o3 && b(t3)));
      });
  }
  function w(n2, l4, u4, i4, t3, o3, r4, f3, s3, a4) {
    var h2, v3, p2, _2, b3, m3, g3, w3 = i4 && i4.__k || c, A = w3.length;
    for (u4.__k = [], h2 = 0; h2 < l4.length; h2++)
      if ((_2 = u4.__k[h2] = (_2 = l4[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
        if (_2.__ = u4, _2.__b = u4.__b + 1, (p2 = w3[h2]) === null || p2 && _2.key == p2.key && _2.type === p2.type)
          w3[h2] = void 0;
        else
          for (v3 = 0; v3 < A; v3++) {
            if ((p2 = w3[v3]) && _2.key == p2.key && _2.type === p2.type) {
              w3[v3] = void 0;
              break;
            }
            p2 = null;
          }
        j(n2, _2, p2 = p2 || e, t3, o3, r4, f3, s3, a4), b3 = _2.__e, (v3 = _2.ref) && p2.ref != v3 && (g3 || (g3 = []), p2.ref && g3.push(p2.ref, null, _2), g3.push(v3, _2.__c || b3, _2)), b3 != null ? (m3 == null && (m3 = b3), typeof _2.type == "function" && _2.__k != null && _2.__k === p2.__k ? _2.__d = s3 = x(_2, s3, n2) : s3 = P(n2, _2, p2, w3, b3, s3), a4 || u4.type !== "option" ? typeof u4.type == "function" && (u4.__d = s3) : n2.value = "") : s3 && p2.__e == s3 && s3.parentNode != n2 && (s3 = k(p2));
      }
    for (u4.__e = m3, h2 = A; h2--; )
      w3[h2] != null && (typeof u4.type == "function" && w3[h2].__e != null && w3[h2].__e == u4.__d && (u4.__d = k(i4, h2 + 1)), N(w3[h2], w3[h2]));
    if (g3)
      for (h2 = 0; h2 < g3.length; h2++)
        M(g3[h2], g3[++h2], g3[++h2]);
  }
  function x(n2, l4, u4) {
    var i4, t3;
    for (i4 = 0; i4 < n2.__k.length; i4++)
      (t3 = n2.__k[i4]) && (t3.__ = n2, l4 = typeof t3.type == "function" ? x(t3, l4, u4) : P(u4, t3, t3, n2.__k, t3.__e, l4));
    return l4;
  }
  function P(n2, l4, u4, i4, t3, o3) {
    var r4, f3, e3;
    if (l4.__d !== void 0)
      r4 = l4.__d, l4.__d = void 0;
    else if (u4 == null || t3 != o3 || t3.parentNode == null)
      n:
        if (o3 == null || o3.parentNode !== n2)
          n2.appendChild(t3), r4 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i4.length; e3 += 2)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r4 = o3;
        }
    return r4 !== void 0 ? r4 : t3.nextSibling;
  }
  function C(n2, l4, u4, i4, t3) {
    var o3;
    for (o3 in u4)
      o3 === "children" || o3 === "key" || o3 in l4 || H(n2, o3, null, u4[o3], i4);
    for (o3 in l4)
      t3 && typeof l4[o3] != "function" || o3 === "children" || o3 === "key" || o3 === "value" || o3 === "checked" || u4[o3] === l4[o3] || H(n2, o3, l4[o3], u4[o3], i4);
  }
  function $(n2, l4, u4) {
    l4[0] === "-" ? n2.setProperty(l4, u4) : n2[l4] = u4 == null ? "" : typeof u4 != "number" || s.test(l4) ? u4 : u4 + "px";
  }
  function H(n2, l4, u4, i4, t3) {
    var o3;
    n:
      if (l4 === "style")
        if (typeof u4 == "string")
          n2.style.cssText = u4;
        else {
          if (typeof i4 == "string" && (n2.style.cssText = i4 = ""), i4)
            for (l4 in i4)
              u4 && l4 in u4 || $(n2.style, l4, "");
          if (u4)
            for (l4 in u4)
              i4 && u4[l4] === i4[l4] || $(n2.style, l4, u4[l4]);
        }
      else if (l4[0] === "o" && l4[1] === "n")
        o3 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n2 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o3] = u4, u4 ? i4 || n2.addEventListener(l4, o3 ? T : I, o3) : n2.removeEventListener(l4, o3 ? T : I, o3);
      else if (l4 !== "dangerouslySetInnerHTML") {
        if (t3)
          l4 = l4.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l4 !== "href" && l4 !== "list" && l4 !== "form" && l4 !== "tabIndex" && l4 !== "download" && l4 in n2)
          try {
            n2[l4] = u4 == null ? "" : u4;
            break n;
          } catch (n3) {
          }
        typeof u4 == "function" || (u4 != null && (u4 !== false || l4[0] === "a" && l4[1] === "r") ? n2.setAttribute(l4, u4) : n2.removeAttribute(l4));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u4, i4, t3, o3, r4, f3, e3, c4) {
    var s3, h2, v3, y2, p2, k2, b3, m3, g3, x3, A, P2 = u4.type;
    if (u4.constructor !== void 0)
      return null;
    i4.__h != null && (c4 = i4.__h, e3 = u4.__e = i4.__e, u4.__h = null, r4 = [e3]), (s3 = l.__b) && s3(u4);
    try {
      n:
        if (typeof P2 == "function") {
          if (m3 = u4.props, g3 = (s3 = P2.contextType) && t3[s3.__c], x3 = s3 ? g3 ? g3.props.value : s3.__ : t3, i4.__c ? b3 = (h2 = u4.__c = i4.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u4.__c = h2 = new P2(m3, x3) : (u4.__c = h2 = new _(m3, x3), h2.constructor = P2, h2.render = O), g3 && g3.sub(h2), h2.props = m3, h2.state || (h2.state = {}), h2.context = x3, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m3, h2.__s))), y2 = h2.props, p2 = h2.state, v3)
            P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
          else {
            if (P2.getDerivedStateFromProps == null && m3 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m3, x3), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m3, h2.__s, x3) === false || u4.__v === i4.__v) {
              h2.props = m3, h2.state = h2.__s, u4.__v !== i4.__v && (h2.__d = false), h2.__v = u4, u4.__e = i4.__e, u4.__k = i4.__k, u4.__k.forEach(function(n3) {
                n3 && (n3.__ = u4);
              }), h2.__h.length && f3.push(h2);
              break n;
            }
            h2.componentWillUpdate != null && h2.componentWillUpdate(m3, h2.__s, x3), h2.componentDidUpdate != null && h2.__h.push(function() {
              h2.componentDidUpdate(y2, p2, k2);
            });
          }
          h2.context = x3, h2.props = m3, h2.state = h2.__s, (s3 = l.__r) && s3(u4), h2.__d = false, h2.__v = u4, h2.__P = n2, s3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t3 = a(a({}, t3), h2.getChildContext())), v3 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, p2)), A = s3 != null && s3.type === d && s3.key == null ? s3.props.children : s3, w(n2, Array.isArray(A) ? A : [A], u4, i4, t3, o3, r4, f3, e3, c4), h2.base = u4.__e, u4.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          r4 == null && u4.__v === i4.__v ? (u4.__k = i4.__k, u4.__e = i4.__e) : u4.__e = L(i4.__e, u4, i4, t3, o3, r4, f3, c4);
      (s3 = l.diffed) && s3(u4);
    } catch (n3) {
      u4.__v = null, (c4 || r4 != null) && (u4.__e = e3, u4.__h = !!c4, r4[r4.indexOf(e3)] = null), l.__e(n3, u4, i4);
    }
  }
  function z(n2, u4) {
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function L(l4, u4, i4, t3, o3, r4, f3, c4) {
    var s3, a4, v3, y2 = i4.props, p2 = u4.props, d2 = u4.type, _2 = 0;
    if (d2 === "svg" && (o3 = true), r4 != null) {
      for (; _2 < r4.length; _2++)
        if ((s3 = r4[_2]) && (s3 === l4 || (d2 ? s3.localName == d2 : s3.nodeType == 3))) {
          l4 = s3, r4[_2] = null;
          break;
        }
    }
    if (l4 == null) {
      if (d2 === null)
        return document.createTextNode(p2);
      l4 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r4 = null, c4 = false;
    }
    if (d2 === null)
      y2 === p2 || c4 && l4.data === p2 || (l4.data = p2);
    else {
      if (r4 = r4 && n.call(l4.childNodes), a4 = (y2 = i4.props || e).dangerouslySetInnerHTML, v3 = p2.dangerouslySetInnerHTML, !c4) {
        if (r4 != null)
          for (y2 = {}, _2 = 0; _2 < l4.attributes.length; _2++)
            y2[l4.attributes[_2].name] = l4.attributes[_2].value;
        (v3 || a4) && (v3 && (a4 && v3.__html == a4.__html || v3.__html === l4.innerHTML) || (l4.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l4, p2, y2, o3, c4), v3)
        u4.__k = [];
      else if (_2 = u4.props.children, w(l4, Array.isArray(_2) ? _2 : [_2], u4, i4, t3, o3 && d2 !== "foreignObject", r4, f3, r4 ? r4[0] : i4.__k && k(i4, 0), c4), r4 != null)
        for (_2 = r4.length; _2--; )
          r4[_2] != null && h(r4[_2]);
      c4 || ("value" in p2 && (_2 = p2.value) !== void 0 && (_2 !== l4.value || d2 === "progress" && !_2) && H(l4, "value", _2, y2.value, false), "checked" in p2 && (_2 = p2.checked) !== void 0 && _2 !== l4.checked && H(l4, "checked", _2, y2.checked, false));
    }
    return l4;
  }
  function M(n2, u4, i4) {
    try {
      typeof n2 == "function" ? n2(u4) : n2.current = u4;
    } catch (n3) {
      l.__e(n3, i4);
    }
  }
  function N(n2, u4, i4) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u4)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u4);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u4, typeof n2.type != "function");
    i4 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l4, u4) {
    return this.constructor(n2, u4);
  }
  function S(u4, i4, t3) {
    var o3, r4, f3;
    l.__ && l.__(u4, i4), r4 = (o3 = typeof t3 == "function") ? null : t3 && t3.__k || i4.__k, f3 = [], j(i4, u4 = (!o3 && t3 || i4).__k = v(d, null, [u4]), r4 || e, e, i4.ownerSVGElement !== void 0, !o3 && t3 ? [t3] : r4 ? null : i4.firstChild ? n.call(i4.childNodes) : null, f3, !o3 && t3 ? t3 : r4 ? r4.__e : i4.firstChild, o3), z(f3, u4);
  }
  function q(n2, l4) {
    S(n2, l4, q);
  }
  function B(l4, u4, i4) {
    var t3, o3, r4, f3 = a({}, l4.props);
    for (r4 in u4)
      r4 == "key" ? t3 = u4[r4] : r4 == "ref" ? o3 = u4[r4] : f3[r4] = u4[r4];
    return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i4), y(l4.type, f3, t3 || l4.key, o3 || l4.ref, null);
  }
  n = c.slice, l = { __e: function(n2, l4) {
    for (var u4, i4, t3; l4 = l4.__; )
      if ((u4 = l4.__c) && !u4.__)
        try {
          if ((i4 = u4.constructor) && i4.getDerivedStateFromError != null && (u4.setState(i4.getDerivedStateFromError(n2)), t3 = u4.__d), u4.componentDidCatch != null && (u4.componentDidCatch(n2), t3 = u4.__d), t3)
            return u4.__E = u4;
        } catch (l5) {
          n2 = l5;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return n2 != null && n2.constructor === void 0;
  }, _.prototype.setState = function(n2, l4) {
    var u4;
    u4 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u4), this.props)), n2 && a(u4, n2), n2 != null && this.__v && (l4 && this.__h.push(l4), m(this));
  }, _.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, _.prototype.render = d, t = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

  // node_modules/preact-custom-element/dist/preact-custom-element.esm.js
  function r2() {
    return (r2 = Object.assign || function(t3) {
      for (var e3 = 1; e3 < arguments.length; e3++) {
        var n2 = arguments[e3];
        for (var o3 in n2)
          Object.prototype.hasOwnProperty.call(n2, o3) && (t3[o3] = n2[o3]);
      }
      return t3;
    }).apply(this, arguments);
  }
  function i2(t3) {
    this.getChildContext = function() {
      return t3.context;
    };
    var e3 = t3.children, n2 = function(t4, e4) {
      if (t4 == null)
        return {};
      var n3, o3, r4 = {}, i4 = Object.keys(t4);
      for (o3 = 0; o3 < i4.length; o3++)
        e4.indexOf(n3 = i4[o3]) >= 0 || (r4[n3] = t4[n3]);
      return r4;
    }(t3, ["context", "children"]);
    return B(e3, n2);
  }
  function a2() {
    var o3 = new CustomEvent("_preact", { detail: {}, bubbles: true, cancelable: true });
    this.dispatchEvent(o3), this._vdom = v(i2, r2({}, this._props, { context: o3.detail.context }), function e3(n2, o4) {
      if (n2.nodeType === 3)
        return n2.data;
      if (n2.nodeType !== 1)
        return null;
      var r4 = [], i4 = {}, a4 = 0, c4 = n2.attributes, l4 = n2.childNodes;
      for (a4 = c4.length; a4--; )
        c4[a4].name !== "slot" && (i4[c4[a4].name] = c4[a4].value, i4[s2(c4[a4].name)] = c4[a4].value);
      for (a4 = l4.length; a4--; ) {
        var p2 = e3(l4[a4], null), d2 = l4[a4].slot;
        d2 ? i4[d2] = v(u2, { name: d2 }, p2) : r4[a4] = p2;
      }
      var h2 = o4 ? v(u2, null, r4) : r4;
      return v(o4 || n2.nodeName.toLowerCase(), i4, h2);
    }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? q : S)(this._vdom, this._root);
  }
  function s2(t3) {
    return t3.replace(/-(\w)/g, function(t4, e3) {
      return e3 ? e3.toUpperCase() : "";
    });
  }
  function c2(t3, e3, r4) {
    if (this._vdom) {
      var i4 = {};
      i4[t3] = r4 = r4 == null ? void 0 : r4, i4[s2(t3)] = r4, this._vdom = B(this._vdom, i4), S(this._vdom, this._root);
    }
  }
  function l2() {
    S(this._vdom = null, this._root);
  }
  function u2(e3, n2) {
    var o3 = this;
    return v("slot", r2({}, e3, { ref: function(t3) {
      t3 ? (o3.ref = t3, o3._listener || (o3._listener = function(t4) {
        t4.stopPropagation(), t4.detail.context = n2;
      }, t3.addEventListener("_preact", o3._listener))) : o3.ref.removeEventListener("_preact", o3._listener);
    } }));
  }
  function preact_custom_element_esm_default(t3, e3, n2, o3) {
    function r4() {
      var e4 = Reflect.construct(HTMLElement, [], r4);
      return e4._vdomComponent = t3, e4._root = o3 && o3.shadow ? e4.attachShadow({ mode: "open" }) : e4, e4;
    }
    return (r4.prototype = Object.create(HTMLElement.prototype)).constructor = r4, r4.prototype.connectedCallback = a2, r4.prototype.attributeChangedCallback = c2, r4.prototype.disconnectedCallback = l2, n2 = n2 || t3.observedAttributes || Object.keys(t3.propTypes || {}), r4.observedAttributes = n2, n2.forEach(function(t4) {
      Object.defineProperty(r4.prototype, t4, { get: function() {
        return this._vdom.props[t4];
      }, set: function(e4) {
        this._vdom ? this.attributeChangedCallback(t4, null, e4) : (this._props || (this._props = {}), this._props[t4] = e4, this.connectedCallback());
        var n3 = typeof e4;
        e4 != null && n3 !== "string" && n3 !== "boolean" && n3 !== "number" || this.setAttribute(t4, e4);
      } });
    }), customElements.define(e3 || t3.tagName || t3.displayName || t3.name, r4);
  }

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var u3;
  var r3;
  var o2 = 0;
  var i3 = [];
  var c3 = l.__b;
  var f2 = l.__r;
  var e2 = l.diffed;
  var a3 = l.__c;
  var v2 = l.unmount;
  function m2(t3, r4) {
    l.__h && l.__h(u3, t3, o2 || r4), o2 = 0;
    var i4 = u3.__H || (u3.__H = { __: [], __h: [] });
    return t3 >= i4.__.length && i4.__.push({}), i4.__[t3];
  }
  function l3(n2) {
    return o2 = 1, p(w2, n2);
  }
  function p(n2, r4, o3) {
    var i4 = m2(t2++, 2);
    return i4.t = n2, i4.__c || (i4.__ = [o3 ? o3(r4) : w2(void 0, r4), function(n3) {
      var t3 = i4.t(i4.__[0], n3);
      i4.__[0] !== t3 && (i4.__ = [t3, i4.__[1]], i4.__c.setState({}));
    }], i4.__c = u3), i4.__;
  }
  function x2() {
    i3.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u4) {
          t3.__H.__h = [], l.__e(u4, t3.__v);
        }
    }), i3 = [];
  }
  l.__b = function(n2) {
    u3 = null, c3 && c3(n2);
  }, l.__r = function(n2) {
    f2 && f2(n2), t2 = 0;
    var r4 = (u3 = n2.__c).__H;
    r4 && (r4.__h.forEach(g2), r4.__h.forEach(j2), r4.__h = []);
  }, l.diffed = function(t3) {
    e2 && e2(t3);
    var o3 = t3.__c;
    o3 && o3.__H && o3.__H.__h.length && (i3.push(o3) !== 1 && r3 === l.requestAnimationFrame || ((r3 = l.requestAnimationFrame) || function(n2) {
      var t4, u4 = function() {
        clearTimeout(r4), b2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, r4 = setTimeout(u4, 100);
      b2 && (t4 = requestAnimationFrame(u4));
    })(x2)), u3 = void 0;
  }, l.__c = function(t3, u4) {
    u4.some(function(t4) {
      try {
        t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || j2(n2);
        });
      } catch (r4) {
        u4.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u4 = [], l.__e(r4, t4.__v);
      }
    }), a3 && a3(t3, u4);
  }, l.unmount = function(t3) {
    v2 && v2(t3);
    var u4 = t3.__c;
    if (u4 && u4.__H)
      try {
        u4.__H.__.forEach(g2);
      } catch (t4) {
        l.__e(t4, u4.__v);
      }
  };
  var b2 = typeof requestAnimationFrame == "function";
  function g2(n2) {
    var t3 = u3;
    typeof n2.__c == "function" && n2.__c(), u3 = t3;
  }
  function j2(n2) {
    var t3 = u3;
    n2.__c = n2.__(), u3 = t3;
  }
  function w2(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
  }

  // src/index.jsx
  function Calendar({ availableDates = "", outputName = "selected-dates" }) {
    const [selectedDates, setSelectedDates] = l3([]);
    const [activeDate, setActiveDate] = l3(new Date());
    let month = activeDate.toLocaleString("default", { month: "long" });
    let year = activeDate.toLocaleString("default", { year: "numeric" });
    return /* @__PURE__ */ v("div", {
      class: "calendarbox"
    }, /* @__PURE__ */ v("div", {
      class: "month-year-title"
    }, /* @__PURE__ */ v("p", null, month, " ", year), /* @__PURE__ */ v("p", {
      class: "right-arr"
    }, "<"), /* @__PURE__ */ v("p", {
      class: "left-arr"
    }, ">")), /* @__PURE__ */ v("input", {
      type: "hidden",
      value: selectedDates.join(","),
      name: outputName
    }));
  }
  preact_custom_element_esm_default(Calendar, "x-calendar", ["available-dates", "output-name"]);
})();
