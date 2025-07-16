import {
	r as O,
	R as nt,
	j as C
} from "./fyeo2h7okrqcf3nz.js";
import {
	q as W,
	r as V,
	k$ as ot,
	l0 as st,
	x as lt,
	h5 as at,
	l1 as G,
	kx as Y
} from "./egb2c0f6p1ew61vt.js";
import {
	fR as ct,
	fS as ut,
	fT as B,
	fU as F,
	a0 as b
} from "./f7j18j5u52u1pnnk.js";
var dt = typeof performance == "object" && typeof performance.now == "function",
	$ = dt ? function() {
		return performance.now()
	} : function() {
		return Date.now()
	};

function q(i) {
	cancelAnimationFrame(i.id)
}

function ht(i, e) {
	var o = $();

	function s() {
		$() - o >= e ? i.call(null) : u.id = requestAnimationFrame(s)
	}
	var u = {
		id: requestAnimationFrame(s)
	};
	return u
}
var L = -1;

function A(i) {
	if (i === void 0 && (i = !1), L === -1 || i) {
		var e = document.createElement("div"),
			o = e.style;
		o.width = "50px", o.height = "50px", o.overflow = "scroll", document.body.appendChild(e), L = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
	}
	return L
}
var R = null;

function H(i) {
	if (i === void 0 && (i = !1), R === null || i) {
		var e = document.createElement("div"),
			o = e.style;
		o.width = "50px", o.height = "50px", o.overflow = "scroll", o.direction = "rtl";
		var s = document.createElement("div"),
			u = s.style;
		return u.width = "100px", u.height = "100px", e.appendChild(s), document.body.appendChild(e), e.scrollLeft > 0 ? R = "positive-descending" : (e.scrollLeft = 1, e.scrollLeft === 0 ? R = "negative" : R = "positive-ascending"), document.body.removeChild(e), R
	}
	return R
}
var mt = 150,
	ft = function(e, o) {
		return e
	};

function pt(i) {
	var e, o = i.getItemOffset,
		s = i.getEstimatedTotalSize,
		u = i.getItemSize,
		g = i.getOffsetForIndexAndAlignment,
		y = i.getStartIndexForOffset,
		p = i.getStopIndexForStartIndex,
		I = i.initInstanceProps,
		S = i.shouldResetStyleCacheOnItemSizeChange,
		x = i.validateProps;
	return e = function(_) {
		ct(w, _);

		function w(f) {
			var t;
			return t = _.call(this, f) || this, t._instanceProps = I(t.props, B(t)), t._outerRef = void 0, t._resetIsScrollingTimeoutId = null, t.state = {
				instance: B(t),
				isScrolling: !1,
				scrollDirection: "forward",
				scrollOffset: typeof t.props.initialScrollOffset == "number" ? t.props.initialScrollOffset : 0,
				scrollUpdateWasRequested: !1
			}, t._callOnItemsRendered = void 0, t._callOnItemsRendered = F(function(r, n, l, c) {
				return t.props.onItemsRendered({
					overscanStartIndex: r,
					overscanStopIndex: n,
					visibleStartIndex: l,
					visibleStopIndex: c
				})
			}), t._callOnScroll = void 0, t._callOnScroll = F(function(r, n, l) {
				return t.props.onScroll({
					scrollDirection: r,
					scrollOffset: n,
					scrollUpdateWasRequested: l
				})
			}), t._getItemStyle = void 0, t._getItemStyle = function(r) {
				var n = t.props,
					l = n.direction,
					c = n.itemSize,
					h = n.layout,
					a = t._getItemStyleCache(S && c, S && h, S && l),
					d;
				if (a.hasOwnProperty(r)) d = a[r];
				else {
					var m = o(t.props, r, t._instanceProps),
						z = u(t.props, r, t._instanceProps),
						T = l === "horizontal" || h === "horizontal",
						D = l === "rtl",
						M = T ? m : 0;
					a[r] = d = {
						position: "absolute",
						left: D ? void 0 : M,
						right: D ? M : void 0,
						top: T ? 0 : m,
						height: T ? "100%" : z,
						width: T ? z : "100%"
					}
				}
				return d
			}, t._getItemStyleCache = void 0, t._getItemStyleCache = F(function(r, n, l) {
				return {}
			}), t._onScrollHorizontal = function(r) {
				var n = r.currentTarget,
					l = n.clientWidth,
					c = n.scrollLeft,
					h = n.scrollWidth;
				t.setState(function(a) {
					if (a.scrollOffset === c) return null;
					var d = t.props.direction,
						m = c;
					if (d === "rtl") switch (H()) {
						case "negative":
							m = -c;
							break;
						case "positive-descending":
							m = h - l - c;
							break
					}
					return m = Math.max(0, Math.min(m, h - l)), {
						isScrolling: !0,
						scrollDirection: a.scrollOffset < m ? "forward" : "backward",
						scrollOffset: m,
						scrollUpdateWasRequested: !1
					}
				}, t._resetIsScrollingDebounced)
			}, t._onScrollVertical = function(r) {
				var n = r.currentTarget,
					l = n.clientHeight,
					c = n.scrollHeight,
					h = n.scrollTop;
				t.setState(function(a) {
					if (a.scrollOffset === h) return null;
					var d = Math.max(0, Math.min(h, c - l));
					return {
						isScrolling: !0,
						scrollDirection: a.scrollOffset < d ? "forward" : "backward",
						scrollOffset: d,
						scrollUpdateWasRequested: !1
					}
				}, t._resetIsScrollingDebounced)
			}, t._outerRefSetter = function(r) {
				var n = t.props.outerRef;
				t._outerRef = r, typeof n == "function" ? n(r) : n != null && typeof n == "object" && n.hasOwnProperty("current") && (n.current = r)
			}, t._resetIsScrollingDebounced = function() {
				t._resetIsScrollingTimeoutId !== null && q(t._resetIsScrollingTimeoutId), t._resetIsScrollingTimeoutId = ht(t._resetIsScrolling, mt)
			}, t._resetIsScrolling = function() {
				t._resetIsScrollingTimeoutId = null, t.setState({
					isScrolling: !1
				}, function() {
					t._getItemStyleCache(-1, null)
				})
			}, t
		}
		w.getDerivedStateFromProps = function(t, r) {
			return gt(t, r), x(t), null
		};
		var v = w.prototype;
		return v.scrollTo = function(t) {
			t = Math.max(0, t), this.setState(function(r) {
				return r.scrollOffset === t ? null : {
					scrollDirection: r.scrollOffset < t ? "forward" : "backward",
					scrollOffset: t,
					scrollUpdateWasRequested: !0
				}
			}, this._resetIsScrollingDebounced)
		}, v.scrollToItem = function(t, r) {
			r === void 0 && (r = "auto");
			var n = this.props,
				l = n.itemCount,
				c = n.layout,
				h = this.state.scrollOffset;
			t = Math.max(0, Math.min(t, l - 1));
			var a = 0;
			if (this._outerRef) {
				var d = this._outerRef;
				c === "vertical" ? a = d.scrollWidth > d.clientWidth ? A() : 0 : a = d.scrollHeight > d.clientHeight ? A() : 0
			}
			this.scrollTo(g(this.props, t, r, h, this._instanceProps, a))
		}, v.componentDidMount = function() {
			var t = this.props,
				r = t.direction,
				n = t.initialScrollOffset,
				l = t.layout;
			if (typeof n == "number" && this._outerRef != null) {
				var c = this._outerRef;
				r === "horizontal" || l === "horizontal" ? c.scrollLeft = n : c.scrollTop = n
			}
			this._callPropsCallbacks()
		}, v.componentDidUpdate = function() {
			var t = this.props,
				r = t.direction,
				n = t.layout,
				l = this.state,
				c = l.scrollOffset,
				h = l.scrollUpdateWasRequested;
			if (h && this._outerRef != null) {
				var a = this._outerRef;
				if (r === "horizontal" || n === "horizontal")
					if (r === "rtl") switch (H()) {
						case "negative":
							a.scrollLeft = -c;
							break;
						case "positive-ascending":
							a.scrollLeft = c;
							break;
						default:
							var d = a.clientWidth,
								m = a.scrollWidth;
							a.scrollLeft = m - d - c;
							break
					} else a.scrollLeft = c;
					else a.scrollTop = c
			}
			this._callPropsCallbacks()
		}, v.componentWillUnmount = function() {
			this._resetIsScrollingTimeoutId !== null && q(this._resetIsScrollingTimeoutId)
		}, v.render = function() {
			var t = this.props,
				r = t.children,
				n = t.className,
				l = t.direction,
				c = t.height,
				h = t.innerRef,
				a = t.innerElementType,
				d = t.innerTagName,
				m = t.itemCount,
				z = t.itemData,
				T = t.itemKey,
				D = T === void 0 ? ft : T,
				M = t.layout,
				J = t.outerElementType,
				Q = t.outerTagName,
				X = t.style,
				Z = t.useIsScrolling,
				tt = t.width,
				k = this.state.isScrolling,
				E = l === "horizontal" || M === "horizontal",
				et = E ? this._onScrollHorizontal : this._onScrollVertical,
				N = this._getRangeToRender(),
				rt = N[0],
				it = N[1],
				j = [];
			if (m > 0)
				for (var P = rt; P <= it; P++) j.push(O.createElement(r, {
					data: z,
					key: D(P, z),
					index: P,
					isScrolling: Z ? k : void 0,
					style: this._getItemStyle(P)
				}));
			var U = s(this.props, this._instanceProps);
			return O.createElement(J || Q || "div", {
				className: n,
				onScroll: et,
				ref: this._outerRefSetter,
				style: ut({
					position: "relative",
					height: c,
					width: tt,
					overflow: "auto",
					WebkitOverflowScrolling: "touch",
					willChange: "transform",
					direction: l
				}, X)
			}, O.createElement(a || d || "div", {
				children: j,
				ref: h,
				style: {
					height: E ? "100%" : U,
					pointerEvents: k ? "none" : void 0,
					width: E ? U : "100%"
				}
			}))
		}, v._callPropsCallbacks = function() {
			if (typeof this.props.onItemsRendered == "function") {
				var t = this.props.itemCount;
				if (t > 0) {
					var r = this._getRangeToRender(),
						n = r[0],
						l = r[1],
						c = r[2],
						h = r[3];
					this._callOnItemsRendered(n, l, c, h)
				}
			}
			if (typeof this.props.onScroll == "function") {
				var a = this.state,
					d = a.scrollDirection,
					m = a.scrollOffset,
					z = a.scrollUpdateWasRequested;
				this._callOnScroll(d, m, z)
			}
		}, v._getRangeToRender = function() {
			var t = this.props,
				r = t.itemCount,
				n = t.overscanCount,
				l = this.state,
				c = l.isScrolling,
				h = l.scrollDirection,
				a = l.scrollOffset;
			if (r === 0) return [0, 0, 0, 0];
			var d = y(this.props, a, this._instanceProps),
				m = p(this.props, d, a, this._instanceProps),
				z = !c || h === "backward" ? Math.max(1, n) : 1,
				T = !c || h === "forward" ? Math.max(1, n) : 1;
			return [Math.max(0, d - z), Math.max(0, Math.min(r - 1, m + T)), d, m]
		}, w
	}(O.PureComponent), e.defaultProps = {
		direction: "ltr",
		itemData: void 0,
		layout: "vertical",
		overscanCount: 2,
		useIsScrolling: !1
	}, e
}
var gt = function(e, o) {
		e.children, e.direction, e.height, e.layout, e.innerTagName, e.outerTagName, e.width, o.instance
	},
	St = pt({
		getItemOffset: function(e, o) {
			var s = e.itemSize;
			return o * s
		},
		getItemSize: function(e, o) {
			var s = e.itemSize;
			return s
		},
		getEstimatedTotalSize: function(e) {
			var o = e.itemCount,
				s = e.itemSize;
			return s * o
		},
		getOffsetForIndexAndAlignment: function(e, o, s, u, g, y) {
			var p = e.direction,
				I = e.height,
				S = e.itemCount,
				x = e.itemSize,
				_ = e.layout,
				w = e.width,
				v = p === "horizontal" || _ === "horizontal",
				f = v ? w : I,
				t = Math.max(0, S * x - f),
				r = Math.min(t, o * x),
				n = Math.max(0, o * x - f + x + y);
			switch (s === "smart" && (u >= n - f && u <= r + f ? s = "auto" : s = "center"), s) {
				case "start":
					return r;
				case "end":
					return n;
				case "center": {
					var l = Math.round(n + (r - n) / 2);
					return l < Math.ceil(f / 2) ? 0 : l > t + Math.floor(f / 2) ? t : l
				}
				case "auto":
				default:
					return u >= n && u <= r ? u : u < n ? n : r
			}
		},
		getStartIndexForOffset: function(e, o) {
			var s = e.itemCount,
				u = e.itemSize;
			return Math.max(0, Math.min(s - 1, Math.floor(o / u)))
		},
		getStopIndexForStartIndex: function(e, o, s) {
			var u = e.direction,
				g = e.height,
				y = e.itemCount,
				p = e.itemSize,
				I = e.layout,
				S = e.width,
				x = u === "horizontal" || I === "horizontal",
				_ = o * p,
				w = x ? S : g,
				v = Math.ceil((w + s - _) / p);
			return Math.max(0, Math.min(y - 1, o + v - 1))
		},
		initInstanceProps: function(e) {},
		shouldResetStyleCacheOnItemSizeChange: !0,
		validateProps: function(e) {
			e.itemSize
		}
	});

function vt({
	onChange: i,
	value: e
}) {
	const o = W(),
		s = V(o),
		u = O.useMemo(() => ot(s.locale), [s.locale]),
		g = O.useMemo(() => st.filter(p => p !== e), [e]),
		y = 480;
	return C.jsx("div", {
		children: C.jsxs(b.Root, {
			value: e,
			onValueChange: i,
			children: [C.jsxs(b.Trigger, {
				children: [C.jsx(b.Value, {}), C.jsx(b.Icon, {})]
			}), C.jsx(b.Portal, {
				children: C.jsxs(b.Content, {
					position: "popper",
					style: {
						maxHeight: y,
						width: 200
					},
					children: [C.jsx(b.Item, {
						value: e,
						children: u(e)
					}), C.jsx(b.Separator, {}), C.jsx(St, {
						className: "no-scrollbar",
						height: y - 80,
						itemCount: g.length,
						itemSize: 50,
						layout: "vertical",
						width: "100%",
						overscanCount: 20,
						itemKey: p => g[p],
						children: ({
							index: p,
							style: I
						}) => {
							const S = g[p];
							return C.jsx(b.Item, {
								value: S,
								style: I,
								children: u(S)
							})
						}
					})]
				})
			})]
		})
	})
}
const _t = nt.memo(vt);

function zt(i, e) {
	const o = W(),
		u = lt(o, "3768341700").get("is_country_selector_enabled", !1),
		g = u,
		y = at();
	let p = "";
	"userCountry" in y && (p = y.userCountry);
	const I = G({
		country: p,
		shouldUseDefaultCountryCode: !g
	});
	let S = {
		country: I,
		currency: Y(I)
	};
	if (i?.hasPaidSubscription() && e) {
		const _ = i?.mustGetSubscriptionBillingCurrency("AccountPaymentModal");
		_ && (S = {
			currency: _
		})
	}
	return {
		userCountry: p,
		isCountrySelectorEnabled: g,
		countryWithFallback: I,
		initialBillingDetails: S
	}
}

function Tt({
	country: i,
	currentAccount: e,
	location: o,
	shouldUsePaidSubscriptionBillingCurrency: s = !0
}) {
	const [u, g] = O.useState(() => K({
		country: i,
		currentAccount: e,
		location: o,
		shouldUsePaidSubscriptionBillingCurrency: s
	}));
	return O.useEffect(() => {
		g(K({
			country: i,
			currentAccount: e,
			location: o,
			shouldUsePaidSubscriptionBillingCurrency: s
		}))
	}, [i, e, o, s]), u
}

function bt() {
	const i = W(),
		e = V(i),
		o = "userCountry" in e ? e.userCountry : null,
		[s, u] = O.useState(G({
			country: o,
			shouldUseDefaultCountryCode: !1
		}));
	return {
		country: s,
		setCountry: u,
		userCountry: o
	}
}

function K({
	country: i,
	currentAccount: e,
	location: o,
	shouldUsePaidSubscriptionBillingCurrency: s
}) {
	return e.hasPaidSubscription() && s ? {
		currency: e.mustGetSubscriptionBillingCurrency(o)
	} : yt(i)
}

function yt(i) {
	return {
		country: i,
		currency: Y(i)
	}
}
export {
	_t as M, bt as a, Tt as b, zt as u
};
//# sourceMappingURL=euyyz74sa52ztdnb.js.map