import {
	mv as so,
	mw as oo,
	hG as lo,
	t as ao,
	dP as bi,
	bl as co,
	mx as cr,
	K as Tt,
	q as Ci,
	aS as wi,
	hV as ho,
	dG as fo,
	aw as uo,
	bE as po,
	P as mo,
	s as $e,
	N as Ue,
	bn as Mi,
	H as je,
	R as go,
	o as yo,
	a0 as So,
	Q as hr,
	i5 as ko,
	fc as xo,
	bD as fr,
	my as bo,
	mz as Co,
	cI as wo,
	mA as Mo,
	cf as To,
	mB as No,
	bI as Oo,
	fq as Do,
	br as ur,
	S as on,
	by as Eo,
	aa as Ao,
	em as Ro,
	mC as Io,
	l8 as Po,
	h7 as dr,
	kd as pr,
	es as zo,
	a9 as vo,
	ce as Fo,
	D as Bo,
	mD as Lo,
	mE as Vo,
	cX as qo
} from "./egb2c0f6p1ew61vt.js";
import {
	rb as mr,
	j6 as Ko,
	rc as Jo,
	d as Wo,
	rd as _o,
	re as Ho,
	rf as $o,
	rg as gr,
	rh as Uo,
	ri as jo,
	lH as Go,
	rj as Yo,
	rk as Xo,
	rl as Qo,
	rm as Zo,
	rn as el,
	hD as yr,
	ro as tl,
	rp as nl,
	rq as rl,
	rr as il,
	rs as sl,
	gu as ol,
	gv as ll
} from "./f7j18j5u52u1pnnk.js";
import {
	r as re
} from "./fyeo2h7okrqcf3nz.js";

function Ti(r, e, t) {
	for (let n = 0;; n++) {
		if (n == r.childCount || n == e.childCount) return r.childCount == e.childCount ? null : t;
		let i = r.child(n),
			s = e.child(n);
		if (i == s) {
			t += i.nodeSize;
			continue
		}
		if (!i.sameMarkup(s)) return t;
		if (i.isText && i.text != s.text) {
			for (let o = 0; i.text[o] == s.text[o]; o++) t++;
			return t
		}
		if (i.content.size || s.content.size) {
			let o = Ti(i.content, s.content, t + 1);
			if (o != null) return o
		}
		t += i.nodeSize
	}
}

function Ni(r, e, t, n) {
	for (let i = r.childCount, s = e.childCount;;) {
		if (i == 0 || s == 0) return i == s ? null : {
			a: t,
			b: n
		};
		let o = r.child(--i),
			l = e.child(--s),
			a = o.nodeSize;
		if (o == l) {
			t -= a, n -= a;
			continue
		}
		if (!o.sameMarkup(l)) return {
			a: t,
			b: n
		};
		if (o.isText && o.text != l.text) {
			let c = 0,
				h = Math.min(o.text.length, l.text.length);
			for (; c < h && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1];) c++, t--, n--;
			return {
				a: t,
				b: n
			}
		}
		if (o.content.size || l.content.size) {
			let c = Ni(o.content, l.content, t - 1, n - 1);
			if (c) return c
		}
		t -= a, n -= a
	}
}
class y {
	constructor(e, t) {
		if (this.content = e, this.size = t || 0, t == null)
			for (let n = 0; n < e.length; n++) this.size += e[n].nodeSize
	}
	nodesBetween(e, t, n, i = 0, s) {
		for (let o = 0, l = 0; l < t; o++) {
			let a = this.content[o],
				c = l + a.nodeSize;
			if (c > e && n(a, i + l, s || null, o) !== !1 && a.content.size) {
				let h = l + 1;
				a.nodesBetween(Math.max(0, e - h), Math.min(a.content.size, t - h), n, i + h)
			}
			l = c
		}
	}
	descendants(e) {
		this.nodesBetween(0, this.size, e)
	}
	textBetween(e, t, n, i) {
		let s = "",
			o = !0;
		return this.nodesBetween(e, t, (l, a) => {
			let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
			l.isBlock && (l.isLeaf && c || l.isTextblock) && n && (o ? o = !1 : s += n), s += c
		}, 0), s
	}
	append(e) {
		if (!e.size) return this;
		if (!this.size) return e;
		let t = this.lastChild,
			n = e.firstChild,
			i = this.content.slice(),
			s = 0;
		for (t.isText && t.sameMarkup(n) && (i[i.length - 1] = t.withText(t.text + n.text), s = 1); s < e.content.length; s++) i.push(e.content[s]);
		return new y(i, this.size + e.size)
	}
	cut(e, t = this.size) {
		if (e == 0 && t == this.size) return this;
		let n = [],
			i = 0;
		if (t > e)
			for (let s = 0, o = 0; o < t; s++) {
				let l = this.content[s],
					a = o + l.nodeSize;
				a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), n.push(l), i += l.nodeSize), o = a
			}
		return new y(n, i)
	}
	cutByIndex(e, t) {
		return e == t ? y.empty : e == 0 && t == this.content.length ? this : new y(this.content.slice(e, t))
	}
	replaceChild(e, t) {
		let n = this.content[e];
		if (n == t) return this;
		let i = this.content.slice(),
			s = this.size + t.nodeSize - n.nodeSize;
		return i[e] = t, new y(i, s)
	}
	addToStart(e) {
		return new y([e].concat(this.content), this.size + e.nodeSize)
	}
	addToEnd(e) {
		return new y(this.content.concat(e), this.size + e.nodeSize)
	}
	eq(e) {
		if (this.content.length != e.content.length) return !1;
		for (let t = 0; t < this.content.length; t++)
			if (!this.content[t].eq(e.content[t])) return !1;
		return !0
	}
	get firstChild() {
		return this.content.length ? this.content[0] : null
	}
	get lastChild() {
		return this.content.length ? this.content[this.content.length - 1] : null
	}
	get childCount() {
		return this.content.length
	}
	child(e) {
		let t = this.content[e];
		if (!t) throw new RangeError("Index " + e + " out of range for " + this);
		return t
	}
	maybeChild(e) {
		return this.content[e] || null
	}
	forEach(e) {
		for (let t = 0, n = 0; t < this.content.length; t++) {
			let i = this.content[t];
			e(i, n, t), n += i.nodeSize
		}
	}
	findDiffStart(e, t = 0) {
		return Ti(this, e, t)
	}
	findDiffEnd(e, t = this.size, n = e.size) {
		return Ni(this, e, t, n)
	}
	findIndex(e, t = -1) {
		if (e == 0) return It(0, e);
		if (e == this.size) return It(this.content.length, e);
		if (e > this.size || e < 0) throw new RangeError(`Position ${e} outside of fragment (${this})`);
		for (let n = 0, i = 0;; n++) {
			let s = this.child(n),
				o = i + s.nodeSize;
			if (o >= e) return o == e || t > 0 ? It(n + 1, o) : It(n, i);
			i = o
		}
	}
	toString() {
		return "<" + this.toStringInner() + ">"
	}
	toStringInner() {
		return this.content.join(", ")
	}
	toJSON() {
		return this.content.length ? this.content.map(e => e.toJSON()) : null
	}
	static fromJSON(e, t) {
		if (!t) return y.empty;
		if (!Array.isArray(t)) throw new RangeError("Invalid input for Fragment.fromJSON");
		return new y(t.map(e.nodeFromJSON))
	}
	static fromArray(e) {
		if (!e.length) return y.empty;
		let t, n = 0;
		for (let i = 0; i < e.length; i++) {
			let s = e[i];
			n += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s)
		}
		return new y(t || e, n)
	}
	static from(e) {
		if (!e) return y.empty;
		if (e instanceof y) return e;
		if (Array.isArray(e)) return this.fromArray(e);
		if (e.attrs) return new y([e], e.nodeSize);
		throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""))
	}
}
y.empty = new y([], 0);
const ln = {
	index: 0,
	offset: 0
};

function It(r, e) {
	return ln.index = r, ln.offset = e, ln
}

function qt(r, e) {
	if (r === e) return !0;
	if (!(r && typeof r == "object") || !(e && typeof e == "object")) return !1;
	let t = Array.isArray(r);
	if (Array.isArray(e) != t) return !1;
	if (t) {
		if (r.length != e.length) return !1;
		for (let n = 0; n < r.length; n++)
			if (!qt(r[n], e[n])) return !1
	} else {
		for (let n in r)
			if (!(n in e) || !qt(r[n], e[n])) return !1;
		for (let n in e)
			if (!(n in r)) return !1
	}
	return !0
}
class T {
	constructor(e, t) {
		this.type = e, this.attrs = t
	}
	addToSet(e) {
		let t, n = !1;
		for (let i = 0; i < e.length; i++) {
			let s = e[i];
			if (this.eq(s)) return e;
			if (this.type.excludes(s.type)) t || (t = e.slice(0, i));
			else {
				if (s.type.excludes(this.type)) return e;
				!n && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), n = !0), t && t.push(s)
			}
		}
		return t || (t = e.slice()), n || t.push(this), t
	}
	removeFromSet(e) {
		for (let t = 0; t < e.length; t++)
			if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
		return e
	}
	isInSet(e) {
		for (let t = 0; t < e.length; t++)
			if (this.eq(e[t])) return !0;
		return !1
	}
	eq(e) {
		return this == e || this.type == e.type && qt(this.attrs, e.attrs)
	}
	toJSON() {
		let e = {
			type: this.type.name
		};
		for (let t in this.attrs) {
			e.attrs = this.attrs;
			break
		}
		return e
	}
	static fromJSON(e, t) {
		if (!t) throw new RangeError("Invalid input for Mark.fromJSON");
		let n = e.marks[t.type];
		if (!n) throw new RangeError(`There is no mark type ${t.type} in this schema`);
		let i = n.create(t.attrs);
		return n.checkAttrs(i.attrs), i
	}
	static sameSet(e, t) {
		if (e == t) return !0;
		if (e.length != t.length) return !1;
		for (let n = 0; n < e.length; n++)
			if (!e[n].eq(t[n])) return !1;
		return !0
	}
	static setFrom(e) {
		if (!e || Array.isArray(e) && e.length == 0) return T.none;
		if (e instanceof T) return [e];
		let t = e.slice();
		return t.sort((n, i) => n.type.rank - i.type.rank), t
	}
}
T.none = [];
class Kt extends Error {}
class S {
	constructor(e, t, n) {
		this.content = e, this.openStart = t, this.openEnd = n
	}
	get size() {
		return this.content.size - this.openStart - this.openEnd
	}
	insertAt(e, t) {
		let n = Di(this.content, e + this.openStart, t);
		return n && new S(n, this.openStart, this.openEnd)
	}
	removeBetween(e, t) {
		return new S(Oi(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd)
	}
	eq(e) {
		return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd
	}
	toString() {
		return this.content + "(" + this.openStart + "," + this.openEnd + ")"
	}
	toJSON() {
		if (!this.content.size) return null;
		let e = {
			content: this.content.toJSON()
		};
		return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e
	}
	static fromJSON(e, t) {
		if (!t) return S.empty;
		let n = t.openStart || 0,
			i = t.openEnd || 0;
		if (typeof n != "number" || typeof i != "number") throw new RangeError("Invalid input for Slice.fromJSON");
		return new S(y.fromJSON(e, t.content), n, i)
	}
	static maxOpen(e, t = !0) {
		let n = 0,
			i = 0;
		for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild) n++;
		for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild) i++;
		return new S(e, n, i)
	}
}
S.empty = new S(y.empty, 0, 0);

function Oi(r, e, t) {
	let {
		index: n,
		offset: i
	} = r.findIndex(e), s = r.maybeChild(n), {
		index: o,
		offset: l
	} = r.findIndex(t);
	if (i == e || s.isText) {
		if (l != t && !r.child(o).isText) throw new RangeError("Removing non-flat range");
		return r.cut(0, e).append(r.cut(t))
	}
	if (n != o) throw new RangeError("Removing non-flat range");
	return r.replaceChild(n, s.copy(Oi(s.content, e - i - 1, t - i - 1)))
}

function Di(r, e, t, n) {
	let {
		index: i,
		offset: s
	} = r.findIndex(e), o = r.maybeChild(i);
	if (s == e || o.isText) return r.cut(0, e).append(t).append(r.cut(e));
	let l = Di(o.content, e - s - 1, t);
	return l && r.replaceChild(i, o.copy(l))
}

function al(r, e, t) {
	if (t.openStart > r.depth) throw new Kt("Inserted content deeper than insertion position");
	if (r.depth - t.openStart != e.depth - t.openEnd) throw new Kt("Inconsistent open depths");
	return Ei(r, e, t, 0)
}

function Ei(r, e, t, n) {
	let i = r.index(n),
		s = r.node(n);
	if (i == e.index(n) && n < r.depth - t.openStart) {
		let o = Ei(r, e, t, n + 1);
		return s.copy(s.content.replaceChild(i, o))
	} else if (t.content.size)
		if (!t.openStart && !t.openEnd && r.depth == n && e.depth == n) {
			let o = r.parent,
				l = o.content;
			return ze(o, l.cut(0, r.parentOffset).append(t.content).append(l.cut(e.parentOffset)))
		} else {
			let {
				start: o,
				end: l
			} = cl(t, r);
			return ze(s, Ri(r, o, l, e, n))
		}
	else return ze(s, Jt(r, e, n))
}

function Ai(r, e) {
	if (!e.type.compatibleContent(r.type)) throw new Kt("Cannot join " + e.type.name + " onto " + r.type.name)
}

function bn(r, e, t) {
	let n = r.node(t);
	return Ai(n, e.node(t)), n
}

function Pe(r, e) {
	let t = e.length - 1;
	t >= 0 && r.isText && r.sameMarkup(e[t]) ? e[t] = r.withText(e[t].text + r.text) : e.push(r)
}

function pt(r, e, t, n) {
	let i = (e || r).node(t),
		s = 0,
		o = e ? e.index(t) : i.childCount;
	r && (s = r.index(t), r.depth > t ? s++ : r.textOffset && (Pe(r.nodeAfter, n), s++));
	for (let l = s; l < o; l++) Pe(i.child(l), n);
	e && e.depth == t && e.textOffset && Pe(e.nodeBefore, n)
}

function ze(r, e) {
	return r.type.checkContent(e), r.copy(e)
}

function Ri(r, e, t, n, i) {
	let s = r.depth > i && bn(r, e, i + 1),
		o = n.depth > i && bn(t, n, i + 1),
		l = [];
	return pt(null, r, i, l), s && o && e.index(i) == t.index(i) ? (Ai(s, o), Pe(ze(s, Ri(r, e, t, n, i + 1)), l)) : (s && Pe(ze(s, Jt(r, e, i + 1)), l), pt(e, t, i, l), o && Pe(ze(o, Jt(t, n, i + 1)), l)), pt(n, null, i, l), new y(l)
}

function Jt(r, e, t) {
	let n = [];
	if (pt(null, r, t, n), r.depth > t) {
		let i = bn(r, e, t + 1);
		Pe(ze(i, Jt(r, e, t + 1)), n)
	}
	return pt(e, null, t, n), new y(n)
}

function cl(r, e) {
	let t = e.depth - r.openStart,
		i = e.node(t).copy(r.content);
	for (let s = t - 1; s >= 0; s--) i = e.node(s).copy(y.from(i));
	return {
		start: i.resolveNoCache(r.openStart + t),
		end: i.resolveNoCache(i.content.size - r.openEnd - t)
	}
}
class St {
	constructor(e, t, n) {
		this.pos = e, this.path = t, this.parentOffset = n, this.depth = t.length / 3 - 1
	}
	resolveDepth(e) {
		return e == null ? this.depth : e < 0 ? this.depth + e : e
	}
	get parent() {
		return this.node(this.depth)
	}
	get doc() {
		return this.node(0)
	}
	node(e) {
		return this.path[this.resolveDepth(e) * 3]
	}
	index(e) {
		return this.path[this.resolveDepth(e) * 3 + 1]
	}
	indexAfter(e) {
		return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1)
	}
	start(e) {
		return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1
	}
	end(e) {
		return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size
	}
	before(e) {
		if (e = this.resolveDepth(e), !e) throw new RangeError("There is no position before the top-level node");
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1]
	}
	after(e) {
		if (e = this.resolveDepth(e), !e) throw new RangeError("There is no position after the top-level node");
		return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize
	}
	get textOffset() {
		return this.pos - this.path[this.path.length - 1]
	}
	get nodeAfter() {
		let e = this.parent,
			t = this.index(this.depth);
		if (t == e.childCount) return null;
		let n = this.pos - this.path[this.path.length - 1],
			i = e.child(t);
		return n ? e.child(t).cut(n) : i
	}
	get nodeBefore() {
		let e = this.index(this.depth),
			t = this.pos - this.path[this.path.length - 1];
		return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1)
	}
	posAtIndex(e, t) {
		t = this.resolveDepth(t);
		let n = this.path[t * 3],
			i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
		for (let s = 0; s < e; s++) i += n.child(s).nodeSize;
		return i
	}
	marks() {
		let e = this.parent,
			t = this.index();
		if (e.content.size == 0) return T.none;
		if (this.textOffset) return e.child(t).marks;
		let n = e.maybeChild(t - 1),
			i = e.maybeChild(t);
		if (!n) {
			let l = n;
			n = i, i = l
		}
		let s = n.marks;
		for (var o = 0; o < s.length; o++) s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
		return s
	}
	marksAcross(e) {
		let t = this.parent.maybeChild(this.index());
		if (!t || !t.isInline) return null;
		let n = t.marks,
			i = e.parent.maybeChild(e.index());
		for (var s = 0; s < n.length; s++) n[s].type.spec.inclusive === !1 && (!i || !n[s].isInSet(i.marks)) && (n = n[s--].removeFromSet(n));
		return n
	}
	sharedDepth(e) {
		for (let t = this.depth; t > 0; t--)
			if (this.start(t) <= e && this.end(t) >= e) return t;
		return 0
	}
	blockRange(e = this, t) {
		if (e.pos < this.pos) return e.blockRange(this);
		for (let n = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); n >= 0; n--)
			if (e.pos <= this.end(n) && (!t || t(this.node(n)))) return new ul(this, e, n);
		return null
	}
	sameParent(e) {
		return this.pos - this.parentOffset == e.pos - e.parentOffset
	}
	max(e) {
		return e.pos > this.pos ? e : this
	}
	min(e) {
		return e.pos < this.pos ? e : this
	}
	toString() {
		let e = "";
		for (let t = 1; t <= this.depth; t++) e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
		return e + ":" + this.parentOffset
	}
	static resolve(e, t) {
		if (!(t >= 0 && t <= e.content.size)) throw new RangeError("Position " + t + " out of range");
		let n = [],
			i = 0,
			s = t;
		for (let o = e;;) {
			let {
				index: l,
				offset: a
			} = o.content.findIndex(s), c = s - a;
			if (n.push(o, l, i + a), !c || (o = o.child(l), o.isText)) break;
			s = c - 1, i += a + 1
		}
		return new St(t, n, s)
	}
	static resolveCached(e, t) {
		let n = Sr.get(e);
		if (n)
			for (let s = 0; s < n.elts.length; s++) {
				let o = n.elts[s];
				if (o.pos == t) return o
			} else Sr.set(e, n = new hl);
		let i = n.elts[n.i] = St.resolve(e, t);
		return n.i = (n.i + 1) % fl, i
	}
}
class hl {
	constructor() {
		this.elts = [], this.i = 0
	}
}
const fl = 12,
	Sr = new WeakMap;
class ul {
	constructor(e, t, n) {
		this.$from = e, this.$to = t, this.depth = n
	}
	get start() {
		return this.$from.before(this.depth + 1)
	}
	get end() {
		return this.$to.after(this.depth + 1)
	}
	get parent() {
		return this.$from.node(this.depth)
	}
	get startIndex() {
		return this.$from.index(this.depth)
	}
	get endIndex() {
		return this.$to.indexAfter(this.depth)
	}
}
const dl = Object.create(null);
class oe {
	constructor(e, t, n, i = T.none) {
		this.type = e, this.attrs = t, this.marks = i, this.content = n || y.empty
	}
	get nodeSize() {
		return this.isLeaf ? 1 : 2 + this.content.size
	}
	get childCount() {
		return this.content.childCount
	}
	child(e) {
		return this.content.child(e)
	}
	maybeChild(e) {
		return this.content.maybeChild(e)
	}
	forEach(e) {
		this.content.forEach(e)
	}
	nodesBetween(e, t, n, i = 0) {
		this.content.nodesBetween(e, t, n, i, this)
	}
	descendants(e) {
		this.nodesBetween(0, this.content.size, e)
	}
	get textContent() {
		return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "")
	}
	textBetween(e, t, n, i) {
		return this.content.textBetween(e, t, n, i)
	}
	get firstChild() {
		return this.content.firstChild
	}
	get lastChild() {
		return this.content.lastChild
	}
	eq(e) {
		return this == e || this.sameMarkup(e) && this.content.eq(e.content)
	}
	sameMarkup(e) {
		return this.hasMarkup(e.type, e.attrs, e.marks)
	}
	hasMarkup(e, t, n) {
		return this.type == e && qt(this.attrs, t || e.defaultAttrs || dl) && T.sameSet(this.marks, n || T.none)
	}
	copy(e = null) {
		return e == this.content ? this : new oe(this.type, this.attrs, e, this.marks)
	}
	mark(e) {
		return e == this.marks ? this : new oe(this.type, this.attrs, this.content, e)
	}
	cut(e, t = this.content.size) {
		return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t))
	}
	slice(e, t = this.content.size, n = !1) {
		if (e == t) return S.empty;
		let i = this.resolve(e),
			s = this.resolve(t),
			o = n ? 0 : i.sharedDepth(t),
			l = i.start(o),
			c = i.node(o).content.cut(i.pos - l, s.pos - l);
		return new S(c, i.depth - o, s.depth - o)
	}
	replace(e, t, n) {
		return al(this.resolve(e), this.resolve(t), n)
	}
	nodeAt(e) {
		for (let t = this;;) {
			let {
				index: n,
				offset: i
			} = t.content.findIndex(e);
			if (t = t.maybeChild(n), !t) return null;
			if (i == e || t.isText) return t;
			e -= i + 1
		}
	}
	childAfter(e) {
		let {
			index: t,
			offset: n
		} = this.content.findIndex(e);
		return {
			node: this.content.maybeChild(t),
			index: t,
			offset: n
		}
	}
	childBefore(e) {
		if (e == 0) return {
			node: null,
			index: 0,
			offset: 0
		};
		let {
			index: t,
			offset: n
		} = this.content.findIndex(e);
		if (n < e) return {
			node: this.content.child(t),
			index: t,
			offset: n
		};
		let i = this.content.child(t - 1);
		return {
			node: i,
			index: t - 1,
			offset: n - i.nodeSize
		}
	}
	resolve(e) {
		return St.resolveCached(this, e)
	}
	resolveNoCache(e) {
		return St.resolve(this, e)
	}
	rangeHasMark(e, t, n) {
		let i = !1;
		return t > e && this.nodesBetween(e, t, s => (n.isInSet(s.marks) && (i = !0), !i)), i
	}
	get isBlock() {
		return this.type.isBlock
	}
	get isTextblock() {
		return this.type.isTextblock
	}
	get inlineContent() {
		return this.type.inlineContent
	}
	get isInline() {
		return this.type.isInline
	}
	get isText() {
		return this.type.isText
	}
	get isLeaf() {
		return this.type.isLeaf
	}
	get isAtom() {
		return this.type.isAtom
	}
	toString() {
		if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
		let e = this.type.name;
		return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Ii(this.marks, e)
	}
	contentMatchAt(e) {
		let t = this.type.contentMatch.matchFragment(this.content, 0, e);
		if (!t) throw new Error("Called contentMatchAt on a node with invalid content");
		return t
	}
	canReplace(e, t, n = y.empty, i = 0, s = n.childCount) {
		let o = this.contentMatchAt(e).matchFragment(n, i, s),
			l = o && o.matchFragment(this.content, t);
		if (!l || !l.validEnd) return !1;
		for (let a = i; a < s; a++)
			if (!this.type.allowsMarks(n.child(a).marks)) return !1;
		return !0
	}
	canReplaceWith(e, t, n, i) {
		if (i && !this.type.allowsMarks(i)) return !1;
		let s = this.contentMatchAt(e).matchType(n),
			o = s && s.matchFragment(this.content, t);
		return o ? o.validEnd : !1
	}
	canAppend(e) {
		return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type)
	}
	check() {
		this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
		let e = T.none;
		for (let t = 0; t < this.marks.length; t++) {
			let n = this.marks[t];
			n.type.checkAttrs(n.attrs), e = n.addToSet(e)
		}
		if (!T.sameSet(e, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(t=>t.type.name)}`);
		this.content.forEach(t => t.check())
	}
	toJSON() {
		let e = {
			type: this.type.name
		};
		for (let t in this.attrs) {
			e.attrs = this.attrs;
			break
		}
		return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map(t => t.toJSON())), e
	}
	static fromJSON(e, t) {
		if (!t) throw new RangeError("Invalid input for Node.fromJSON");
		let n;
		if (t.marks) {
			if (!Array.isArray(t.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
			n = t.marks.map(e.markFromJSON)
		}
		if (t.type == "text") {
			if (typeof t.text != "string") throw new RangeError("Invalid text node in JSON");
			return e.text(t.text, n)
		}
		let i = y.fromJSON(e, t.content),
			s = e.nodeType(t.type).create(t.attrs, i, n);
		return s.type.checkAttrs(s.attrs), s
	}
}
oe.prototype.text = void 0;
class Wt extends oe {
	constructor(e, t, n, i) {
		if (super(e, t, null, i), !n) throw new RangeError("Empty text nodes are not allowed");
		this.text = n
	}
	toString() {
		return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Ii(this.marks, JSON.stringify(this.text))
	}
	get textContent() {
		return this.text
	}
	textBetween(e, t) {
		return this.text.slice(e, t)
	}
	get nodeSize() {
		return this.text.length
	}
	mark(e) {
		return e == this.marks ? this : new Wt(this.type, this.attrs, this.text, e)
	}
	withText(e) {
		return e == this.text ? this : new Wt(this.type, this.attrs, e, this.marks)
	}
	cut(e = 0, t = this.text.length) {
		return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t))
	}
	eq(e) {
		return this.sameMarkup(e) && this.text == e.text
	}
	toJSON() {
		let e = super.toJSON();
		return e.text = this.text, e
	}
}

function Ii(r, e) {
	for (let t = r.length - 1; t >= 0; t--) e = r[t].type.name + "(" + e + ")";
	return e
}
class Be {
	constructor(e) {
		this.validEnd = e, this.next = [], this.wrapCache = []
	}
	static parse(e, t) {
		let n = new pl(e, t);
		if (n.next == null) return Be.empty;
		let i = Pi(n);
		n.next && n.err("Unexpected trailing text");
		let s = bl(xl(i));
		return Cl(s, n), s
	}
	matchType(e) {
		for (let t = 0; t < this.next.length; t++)
			if (this.next[t].type == e) return this.next[t].next;
		return null
	}
	matchFragment(e, t = 0, n = e.childCount) {
		let i = this;
		for (let s = t; i && s < n; s++) i = i.matchType(e.child(s).type);
		return i
	}
	get inlineContent() {
		return this.next.length != 0 && this.next[0].type.isInline
	}
	get defaultType() {
		for (let e = 0; e < this.next.length; e++) {
			let {
				type: t
			} = this.next[e];
			if (!(t.isText || t.hasRequiredAttrs())) return t
		}
		return null
	}
	compatible(e) {
		for (let t = 0; t < this.next.length; t++)
			for (let n = 0; n < e.next.length; n++)
				if (this.next[t].type == e.next[n].type) return !0;
		return !1
	}
	fillBefore(e, t = !1, n = 0) {
		let i = [this];

		function s(o, l) {
			let a = o.matchFragment(e, n);
			if (a && (!t || a.validEnd)) return y.from(l.map(c => c.createAndFill()));
			for (let c = 0; c < o.next.length; c++) {
				let {
					type: h,
					next: f
				} = o.next[c];
				if (!(h.isText || h.hasRequiredAttrs()) && i.indexOf(f) == -1) {
					i.push(f);
					let u = s(f, l.concat(h));
					if (u) return u
				}
			}
			return null
		}
		return s(this, [])
	}
	findWrapping(e) {
		for (let n = 0; n < this.wrapCache.length; n += 2)
			if (this.wrapCache[n] == e) return this.wrapCache[n + 1];
		let t = this.computeWrapping(e);
		return this.wrapCache.push(e, t), t
	}
	computeWrapping(e) {
		let t = Object.create(null),
			n = [{
				match: this,
				type: null,
				via: null
			}];
		for (; n.length;) {
			let i = n.shift(),
				s = i.match;
			if (s.matchType(e)) {
				let o = [];
				for (let l = i; l.type; l = l.via) o.push(l.type);
				return o.reverse()
			}
			for (let o = 0; o < s.next.length; o++) {
				let {
					type: l,
					next: a
				} = s.next[o];
				!l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (n.push({
					match: l.contentMatch,
					type: l,
					via: i
				}), t[l.name] = !0)
			}
		}
		return null
	}
	get edgeCount() {
		return this.next.length
	}
	edge(e) {
		if (e >= this.next.length) throw new RangeError(`There's no ${e}th edge in this content match`);
		return this.next[e]
	}
	toString() {
		let e = [];

		function t(n) {
			e.push(n);
			for (let i = 0; i < n.next.length; i++) e.indexOf(n.next[i].next) == -1 && t(n.next[i].next)
		}
		return t(this), e.map((n, i) => {
			let s = i + (n.validEnd ? "*" : " ") + " ";
			for (let o = 0; o < n.next.length; o++) s += (o ? ", " : "") + n.next[o].type.name + "->" + e.indexOf(n.next[o].next);
			return s
		}).join(`
`)
	}
}
Be.empty = new Be(!0);
class pl {
	constructor(e, t) {
		this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift()
	}
	get next() {
		return this.tokens[this.pos]
	}
	eat(e) {
		return this.next == e && (this.pos++ || !0)
	}
	err(e) {
		throw new SyntaxError(e + " (in content expression '" + this.string + "')")
	}
}

function Pi(r) {
	let e = [];
	do e.push(ml(r)); while (r.eat("|"));
	return e.length == 1 ? e[0] : {
		type: "choice",
		exprs: e
	}
}

function ml(r) {
	let e = [];
	do e.push(gl(r)); while (r.next && r.next != ")" && r.next != "|");
	return e.length == 1 ? e[0] : {
		type: "seq",
		exprs: e
	}
}

function gl(r) {
	let e = kl(r);
	for (;;)
		if (r.eat("+")) e = {
			type: "plus",
			expr: e
		};
		else if (r.eat("*")) e = {
		type: "star",
		expr: e
	};
	else if (r.eat("?")) e = {
		type: "opt",
		expr: e
	};
	else if (r.eat("{")) e = yl(r, e);
	else break;
	return e
}

function kr(r) {
	/\D/.test(r.next) && r.err("Expected number, got '" + r.next + "'");
	let e = Number(r.next);
	return r.pos++, e
}

function yl(r, e) {
	let t = kr(r),
		n = t;
	return r.eat(",") && (r.next != "}" ? n = kr(r) : n = -1), r.eat("}") || r.err("Unclosed braced range"), {
		type: "range",
		min: t,
		max: n,
		expr: e
	}
}

function Sl(r, e) {
	let t = r.nodeTypes,
		n = t[e];
	if (n) return [n];
	let i = [];
	for (let s in t) {
		let o = t[s];
		o.groups.indexOf(e) > -1 && i.push(o)
	}
	return i.length == 0 && r.err("No node type or group '" + e + "' found"), i
}

function kl(r) {
	if (r.eat("(")) {
		let e = Pi(r);
		return r.eat(")") || r.err("Missing closing paren"), e
	} else if (/\W/.test(r.next)) r.err("Unexpected token '" + r.next + "'");
	else {
		let e = Sl(r, r.next).map(t => (r.inline == null ? r.inline = t.isInline : r.inline != t.isInline && r.err("Mixing inline and block content"), {
			type: "name",
			value: t
		}));
		return r.pos++, e.length == 1 ? e[0] : {
			type: "choice",
			exprs: e
		}
	}
}

function xl(r) {
	let e = [
		[]
	];
	return i(s(r, 0), t()), e;

	function t() {
		return e.push([]) - 1
	}

	function n(o, l, a) {
		let c = {
			term: a,
			to: l
		};
		return e[o].push(c), c
	}

	function i(o, l) {
		o.forEach(a => a.to = l)
	}

	function s(o, l) {
		if (o.type == "choice") return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
		if (o.type == "seq")
			for (let a = 0;; a++) {
				let c = s(o.exprs[a], l);
				if (a == o.exprs.length - 1) return c;
				i(c, l = t())
			} else if (o.type == "star") {
				let a = t();
				return n(l, a), i(s(o.expr, a), a), [n(a)]
			} else if (o.type == "plus") {
			let a = t();
			return i(s(o.expr, l), a), i(s(o.expr, a), a), [n(a)]
		} else {
			if (o.type == "opt") return [n(l)].concat(s(o.expr, l));
			if (o.type == "range") {
				let a = l;
				for (let c = 0; c < o.min; c++) {
					let h = t();
					i(s(o.expr, a), h), a = h
				}
				if (o.max == -1) i(s(o.expr, a), a);
				else
					for (let c = o.min; c < o.max; c++) {
						let h = t();
						n(a, h), i(s(o.expr, a), h), a = h
					}
				return [n(a)]
			} else {
				if (o.type == "name") return [n(l, void 0, o.value)];
				throw new Error("Unknown expr type")
			}
		}
	}
}

function zi(r, e) {
	return e - r
}

function xr(r, e) {
	let t = [];
	return n(e), t.sort(zi);

	function n(i) {
		let s = r[i];
		if (s.length == 1 && !s[0].term) return n(s[0].to);
		t.push(i);
		for (let o = 0; o < s.length; o++) {
			let {
				term: l,
				to: a
			} = s[o];
			!l && t.indexOf(a) == -1 && n(a)
		}
	}
}

function bl(r) {
	let e = Object.create(null);
	return t(xr(r, 0));

	function t(n) {
		let i = [];
		n.forEach(o => {
			r[o].forEach(({
				term: l,
				to: a
			}) => {
				if (!l) return;
				let c;
				for (let h = 0; h < i.length; h++) i[h][0] == l && (c = i[h][1]);
				xr(r, a).forEach(h => {
					c || i.push([l, c = []]), c.indexOf(h) == -1 && c.push(h)
				})
			})
		});
		let s = e[n.join(",")] = new Be(n.indexOf(r.length - 1) > -1);
		for (let o = 0; o < i.length; o++) {
			let l = i[o][1].sort(zi);
			s.next.push({
				type: i[o][0],
				next: e[l.join(",")] || t(l)
			})
		}
		return s
	}
}

function Cl(r, e) {
	for (let t = 0, n = [r]; t < n.length; t++) {
		let i = n[t],
			s = !i.validEnd,
			o = [];
		for (let l = 0; l < i.next.length; l++) {
			let {
				type: a,
				next: c
			} = i.next[l];
			o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), n.indexOf(c) == -1 && n.push(c)
		}
		s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)")
	}
}

function vi(r) {
	let e = Object.create(null);
	for (let t in r) {
		let n = r[t];
		if (!n.hasDefault) return null;
		e[t] = n.default
	}
	return e
}

function Fi(r, e) {
	let t = Object.create(null);
	for (let n in r) {
		let i = e && e[n];
		if (i === void 0) {
			let s = r[n];
			if (s.hasDefault) i = s.default;
			else throw new RangeError("No value supplied for attribute " + n)
		}
		t[n] = i
	}
	return t
}

function Bi(r, e, t, n) {
	for (let i in e)
		if (!(i in r)) throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
	for (let i in r) {
		let s = r[i];
		s.validate && s.validate(e[i])
	}
}

function Li(r, e) {
	let t = Object.create(null);
	if (e)
		for (let n in e) t[n] = new Ml(r, n, e[n]);
	return t
}
let br = class Vi {
	constructor(e, t, n) {
		this.name = e, this.schema = t, this.spec = n, this.markSet = null, this.groups = n.group ? n.group.split(" ") : [], this.attrs = Li(e, n.attrs), this.defaultAttrs = vi(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(n.inline || e == "text"), this.isText = e == "text"
	}
	get isInline() {
		return !this.isBlock
	}
	get isTextblock() {
		return this.isBlock && this.inlineContent
	}
	get isLeaf() {
		return this.contentMatch == Be.empty
	}
	get isAtom() {
		return this.isLeaf || !!this.spec.atom
	}
	get whitespace() {
		return this.spec.whitespace || (this.spec.code ? "pre" : "normal")
	}
	hasRequiredAttrs() {
		for (let e in this.attrs)
			if (this.attrs[e].isRequired) return !0;
		return !1
	}
	compatibleContent(e) {
		return this == e || this.contentMatch.compatible(e.contentMatch)
	}
	computeAttrs(e) {
		return !e && this.defaultAttrs ? this.defaultAttrs : Fi(this.attrs, e)
	}
	create(e = null, t, n) {
		if (this.isText) throw new Error("NodeType.create can't construct text nodes");
		return new oe(this, this.computeAttrs(e), y.from(t), T.setFrom(n))
	}
	createChecked(e = null, t, n) {
		return t = y.from(t), this.checkContent(t), new oe(this, this.computeAttrs(e), t, T.setFrom(n))
	}
	createAndFill(e = null, t, n) {
		if (e = this.computeAttrs(e), t = y.from(t), t.size) {
			let o = this.contentMatch.fillBefore(t);
			if (!o) return null;
			t = o.append(t)
		}
		let i = this.contentMatch.matchFragment(t),
			s = i && i.fillBefore(y.empty, !0);
		return s ? new oe(this, e, t.append(s), T.setFrom(n)) : null
	}
	validContent(e) {
		let t = this.contentMatch.matchFragment(e);
		if (!t || !t.validEnd) return !1;
		for (let n = 0; n < e.childCount; n++)
			if (!this.allowsMarks(e.child(n).marks)) return !1;
		return !0
	}
	checkContent(e) {
		if (!this.validContent(e)) throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0,50)}`)
	}
	checkAttrs(e) {
		Bi(this.attrs, e, "node", this.name)
	}
	allowsMarkType(e) {
		return this.markSet == null || this.markSet.indexOf(e) > -1
	}
	allowsMarks(e) {
		if (this.markSet == null) return !0;
		for (let t = 0; t < e.length; t++)
			if (!this.allowsMarkType(e[t].type)) return !1;
		return !0
	}
	allowedMarks(e) {
		if (this.markSet == null) return e;
		let t;
		for (let n = 0; n < e.length; n++) this.allowsMarkType(e[n].type) ? t && t.push(e[n]) : t || (t = e.slice(0, n));
		return t ? t.length ? t : T.none : e
	}
	static compile(e, t) {
		let n = Object.create(null);
		e.forEach((s, o) => n[s] = new Vi(s, t, o));
		let i = t.spec.topNode || "doc";
		if (!n[i]) throw new RangeError("Schema is missing its top node type ('" + i + "')");
		if (!n.text) throw new RangeError("Every schema needs a 'text' type");
		for (let s in n.text.attrs) throw new RangeError("The text node type should not have attributes");
		return n
	}
};

function wl(r, e, t) {
	let n = t.split("|");
	return i => {
		let s = i === null ? "null" : typeof i;
		if (n.indexOf(s) < 0) throw new RangeError(`Expected value of type ${n} for attribute ${e} on type ${r}, got ${s}`)
	}
}
class Ml {
	constructor(e, t, n) {
		this.hasDefault = Object.prototype.hasOwnProperty.call(n, "default"), this.default = n.default, this.validate = typeof n.validate == "string" ? wl(e, t, n.validate) : n.validate
	}
	get isRequired() {
		return !this.hasDefault
	}
}
class Yt {
	constructor(e, t, n, i) {
		this.name = e, this.rank = t, this.schema = n, this.spec = i, this.attrs = Li(e, i.attrs), this.excluded = null;
		let s = vi(this.attrs);
		this.instance = s ? new T(this, s) : null
	}
	create(e = null) {
		return !e && this.instance ? this.instance : new T(this, Fi(this.attrs, e))
	}
	static compile(e, t) {
		let n = Object.create(null),
			i = 0;
		return e.forEach((s, o) => n[s] = new Yt(s, i++, t, o)), n
	}
	removeFromSet(e) {
		for (var t = 0; t < e.length; t++) e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
		return e
	}
	isInSet(e) {
		for (let t = 0; t < e.length; t++)
			if (e[t].type == this) return e[t]
	}
	checkAttrs(e) {
		Bi(this.attrs, e, "mark", this.name)
	}
	excludes(e) {
		return this.excluded.indexOf(e) > -1
	}
}
class Eh {
	constructor(e) {
		this.linebreakReplacement = null, this.cached = Object.create(null);
		let t = this.spec = {};
		for (let i in e) t[i] = e[i];
		t.nodes = mr.from(e.nodes), t.marks = mr.from(e.marks || {}), this.nodes = br.compile(this.spec.nodes, this), this.marks = Yt.compile(this.spec.marks, this);
		let n = Object.create(null);
		for (let i in this.nodes) {
			if (i in this.marks) throw new RangeError(i + " can not be both a node and a mark");
			let s = this.nodes[i],
				o = s.spec.content || "",
				l = s.spec.marks;
			if (s.contentMatch = n[o] || (n[o] = Be.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
				if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
				if (!s.isInline || !s.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
				this.linebreakReplacement = s
			}
			s.markSet = l == "_" ? null : l ? Cr(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null
		}
		for (let i in this.marks) {
			let s = this.marks[i],
				o = s.spec.excludes;
			s.excluded = o == null ? [s] : o == "" ? [] : Cr(this, o.split(" "))
		}
		this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = Object.create(null)
	}
	node(e, t = null, n, i) {
		if (typeof e == "string") e = this.nodeType(e);
		else if (e instanceof br) {
			if (e.schema != this) throw new RangeError("Node type from different schema used (" + e.name + ")")
		} else throw new RangeError("Invalid node type: " + e);
		return e.createChecked(t, n, i)
	}
	text(e, t) {
		let n = this.nodes.text;
		return new Wt(n, n.defaultAttrs, e, T.setFrom(t))
	}
	mark(e, t) {
		return typeof e == "string" && (e = this.marks[e]), e.create(t)
	}
	nodeFromJSON(e) {
		return oe.fromJSON(this, e)
	}
	markFromJSON(e) {
		return T.fromJSON(this, e)
	}
	nodeType(e) {
		let t = this.nodes[e];
		if (!t) throw new RangeError("Unknown node type: " + e);
		return t
	}
}

function Cr(r, e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let i = e[n],
			s = r.marks[i],
			o = s;
		if (s) t.push(s);
		else
			for (let l in r.marks) {
				let a = r.marks[l];
				(i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a)
			}
		if (!o) throw new SyntaxError("Unknown mark type: '" + e[n] + "'")
	}
	return t
}

function Tl(r) {
	return r.tag != null
}

function Nl(r) {
	return r.style != null
}
class kt {
	constructor(e, t) {
		this.schema = e, this.rules = t, this.tags = [], this.styles = [];
		let n = this.matchedStyles = [];
		t.forEach(i => {
			if (Tl(i)) this.tags.push(i);
			else if (Nl(i)) {
				let s = /[^=]*/.exec(i.style)[0];
				n.indexOf(s) < 0 && n.push(s), this.styles.push(i)
			}
		}), this.normalizeLists = !this.tags.some(i => {
			if (!/^(ul|ol)\b/.test(i.tag) || !i.node) return !1;
			let s = e.nodes[i.node];
			return s.contentMatch.matchType(s)
		})
	}
	parse(e, t = {}) {
		let n = new Mr(this, t, !1);
		return n.addAll(e, t.from, t.to), n.finish()
	}
	parseSlice(e, t = {}) {
		let n = new Mr(this, t, !0);
		return n.addAll(e, t.from, t.to), S.maxOpen(n.finish())
	}
	matchTag(e, t, n) {
		for (let i = n ? this.tags.indexOf(n) + 1 : 0; i < this.tags.length; i++) {
			let s = this.tags[i];
			if (El(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
				if (s.getAttrs) {
					let o = s.getAttrs(e);
					if (o === !1) continue;
					s.attrs = o || void 0
				}
				return s
			}
		}
	}
	matchStyle(e, t, n, i) {
		for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
			let o = this.styles[s],
				l = o.style;
			if (!(l.indexOf(e) != 0 || o.context && !n.matchesContext(o.context) || l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
				if (o.getAttrs) {
					let a = o.getAttrs(t);
					if (a === !1) continue;
					o.attrs = a || void 0
				}
				return o
			}
		}
	}
	static schemaRules(e) {
		let t = [];

		function n(i) {
			let s = i.priority == null ? 50 : i.priority,
				o = 0;
			for (; o < t.length; o++) {
				let l = t[o];
				if ((l.priority == null ? 50 : l.priority) < s) break
			}
			t.splice(o, 0, i)
		}
		for (let i in e.marks) {
			let s = e.marks[i].spec.parseDOM;
			s && s.forEach(o => {
				n(o = Tr(o)), o.mark || o.ignore || o.clearMark || (o.mark = i)
			})
		}
		for (let i in e.nodes) {
			let s = e.nodes[i].spec.parseDOM;
			s && s.forEach(o => {
				n(o = Tr(o)), o.node || o.ignore || o.mark || (o.node = i)
			})
		}
		return t
	}
	static fromSchema(e) {
		return e.cached.domParser || (e.cached.domParser = new kt(e, kt.schemaRules(e)))
	}
}
const qi = {
		address: !0,
		article: !0,
		aside: !0,
		blockquote: !0,
		canvas: !0,
		dd: !0,
		div: !0,
		dl: !0,
		fieldset: !0,
		figcaption: !0,
		figure: !0,
		footer: !0,
		form: !0,
		h1: !0,
		h2: !0,
		h3: !0,
		h4: !0,
		h5: !0,
		h6: !0,
		header: !0,
		hgroup: !0,
		hr: !0,
		li: !0,
		noscript: !0,
		ol: !0,
		output: !0,
		p: !0,
		pre: !0,
		section: !0,
		table: !0,
		tfoot: !0,
		ul: !0
	},
	Ol = {
		head: !0,
		noscript: !0,
		object: !0,
		script: !0,
		style: !0,
		title: !0
	},
	Ki = {
		ol: !0,
		ul: !0
	},
	_t = 1,
	Ht = 2,
	vt = 4;

function wr(r, e, t) {
	return e != null ? (e ? _t : 0) | (e === "full" ? Ht : 0) : r && r.whitespace == "pre" ? _t | Ht : t & -5
}
class Pt {
	constructor(e, t, n, i, s, o, l) {
		this.type = e, this.attrs = t, this.marks = n, this.pendingMarks = i, this.solid = s, this.options = l, this.content = [], this.activeMarks = T.none, this.stashMarks = [], this.match = o || (l & vt ? null : e.contentMatch)
	}
	findWrapping(e) {
		if (!this.match) {
			if (!this.type) return [];
			let t = this.type.contentMatch.fillBefore(y.from(e));
			if (t) this.match = this.type.contentMatch.matchFragment(t);
			else {
				let n = this.type.contentMatch,
					i;
				return (i = n.findWrapping(e.type)) ? (this.match = n, i) : null
			}
		}
		return this.match.findWrapping(e.type)
	}
	finish(e) {
		if (!(this.options & _t)) {
			let n = this.content[this.content.length - 1],
				i;
			if (n && n.isText && (i = /[ \t\r\n\u000c]+$/.exec(n.text))) {
				let s = n;
				n.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length))
			}
		}
		let t = y.from(this.content);
		return !e && this.match && (t = t.append(this.match.fillBefore(y.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t
	}
	popFromStashMark(e) {
		for (let t = this.stashMarks.length - 1; t >= 0; t--)
			if (e.eq(this.stashMarks[t])) return this.stashMarks.splice(t, 1)[0]
	}
	applyPending(e) {
		for (let t = 0, n = this.pendingMarks; t < n.length; t++) {
			let i = n[t];
			(this.type ? this.type.allowsMarkType(i.type) : Al(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks))
		}
	}
	inlineContext(e) {
		return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !qi.hasOwnProperty(e.parentNode.nodeName.toLowerCase())
	}
}
class Mr {
	constructor(e, t, n) {
		this.parser = e, this.options = t, this.isOpen = n, this.open = 0;
		let i = t.topNode,
			s, o = wr(null, t.preserveWhitespace, 0) | (n ? vt : 0);
		i ? s = new Pt(i.type, i.attrs, T.none, T.none, !0, t.topMatch || i.type.contentMatch, o) : n ? s = new Pt(null, null, T.none, T.none, !0, null, o) : s = new Pt(e.schema.topNodeType, null, T.none, T.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1
	}
	get top() {
		return this.nodes[this.open]
	}
	addDOM(e) {
		e.nodeType == 3 ? this.addTextNode(e) : e.nodeType == 1 && this.addElement(e)
	}
	withStyleRules(e, t) {
		let n = e.style;
		if (!n || !n.length) return t();
		let i = this.readStyles(e.style);
		if (!i) return;
		let [s, o] = i, l = this.top;
		for (let a = 0; a < o.length; a++) this.removePendingMark(o[a], l);
		for (let a = 0; a < s.length; a++) this.addPendingMark(s[a]);
		t();
		for (let a = 0; a < s.length; a++) this.removePendingMark(s[a], l);
		for (let a = 0; a < o.length; a++) this.addPendingMark(o[a])
	}
	addTextNode(e) {
		let t = e.nodeValue,
			n = this.top;
		if (n.options & Ht || n.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
			if (n.options & _t) n.options & Ht ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
			else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
				let i = n.content[n.content.length - 1],
					s = e.previousSibling;
				(!i || s && s.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1))
			}
			t && this.insertNode(this.parser.schema.text(t)), this.findInText(e)
		} else this.findInside(e)
	}
	addElement(e, t) {
		let n = e.nodeName.toLowerCase(),
			i;
		Ki.hasOwnProperty(n) && this.parser.normalizeLists && Dl(e);
		let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
		if (s ? s.ignore : Ol.hasOwnProperty(n)) this.findInside(e), this.ignoreFallback(e);
		else if (!s || s.skip || s.closeParent) {
			s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
			let o, l = this.top,
				a = this.needsBlock;
			if (qi.hasOwnProperty(n)) l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), o = !0, l.type || (this.needsBlock = !0);
			else if (!e.firstChild) {
				this.leafFallback(e);
				return
			}
			s && s.skip ? this.addAll(e) : this.withStyleRules(e, () => this.addAll(e)), o && this.sync(l), this.needsBlock = a
		} else this.withStyleRules(e, () => {
			this.addElementByRule(e, s, s.consuming === !1 ? i : void 0)
		})
	}
	leafFallback(e) {
		e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`))
	}
	ignoreFallback(e) {
		e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"))
	}
	readStyles(e) {
		let t = T.none,
			n = T.none;
		if (e.length)
			for (let i = 0; i < this.parser.matchedStyles.length; i++) {
				let s = this.parser.matchedStyles[i],
					o = e.getPropertyValue(s);
				if (o)
					for (let l = void 0;;) {
						let a = this.parser.matchStyle(s, o, this, l);
						if (!a) break;
						if (a.ignore) return null;
						if (a.clearMark ? this.top.pendingMarks.concat(this.top.activeMarks).forEach(c => {
								a.clearMark(c) && (n = c.addToSet(n))
							}) : t = this.parser.schema.marks[a.mark].create(a.attrs).addToSet(t), a.consuming === !1) l = a;
						else break
					}
			}
		return [t, n]
	}
	addElementByRule(e, t, n) {
		let i, s, o;
		t.node ? (s = this.parser.schema.nodes[t.node], s.isLeaf ? this.insertNode(s.create(t.attrs)) || this.leafFallback(e) : i = this.enter(s, t.attrs || null, t.preserveWhitespace)) : (o = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(o));
		let l = this.top;
		if (s && s.isLeaf) this.findInside(e);
		else if (n) this.addElement(e, n);
		else if (t.getContent) this.findInside(e), t.getContent(e, this.parser.schema).forEach(a => this.insertNode(a));
		else {
			let a = e;
			typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a)
		}
		i && this.sync(l) && this.open--, o && this.removePendingMark(o, l)
	}
	addAll(e, t, n) {
		let i = t || 0;
		for (let s = t ? e.childNodes[t] : e.firstChild, o = n == null ? null : e.childNodes[n]; s != o; s = s.nextSibling, ++i) this.findAtPoint(e, i), this.addDOM(s);
		this.findAtPoint(e, i)
	}
	findPlace(e) {
		let t, n;
		for (let i = this.open; i >= 0; i--) {
			let s = this.nodes[i],
				o = s.findWrapping(e);
			if (o && (!t || t.length > o.length) && (t = o, n = s, !o.length) || s.solid) break
		}
		if (!t) return !1;
		this.sync(n);
		for (let i = 0; i < t.length; i++) this.enterInner(t[i], null, !1);
		return !0
	}
	insertNode(e) {
		if (e.isInline && this.needsBlock && !this.top.type) {
			let t = this.textblockFromContext();
			t && this.enterInner(t)
		}
		if (this.findPlace(e)) {
			this.closeExtra();
			let t = this.top;
			t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
			let n = t.activeMarks;
			for (let i = 0; i < e.marks.length; i++)(!t.type || t.type.allowsMarkType(e.marks[i].type)) && (n = e.marks[i].addToSet(n));
			return t.content.push(e.mark(n)), !0
		}
		return !1
	}
	enter(e, t, n) {
		let i = this.findPlace(e.create(t));
		return i && this.enterInner(e, t, !0, n), i
	}
	enterInner(e, t = null, n = !1, i) {
		this.closeExtra();
		let s = this.top;
		s.applyPending(e), s.match = s.match && s.match.matchType(e);
		let o = wr(e, i, s.options);
		s.options & vt && s.content.length == 0 && (o |= vt), this.nodes.push(new Pt(e, t, s.activeMarks, s.pendingMarks, n, null, o)), this.open++
	}
	closeExtra(e = !1) {
		let t = this.nodes.length - 1;
		if (t > this.open) {
			for (; t > this.open; t--) this.nodes[t - 1].content.push(this.nodes[t].finish(e));
			this.nodes.length = this.open + 1
		}
	}
	finish() {
		return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen)
	}
	sync(e) {
		for (let t = this.open; t >= 0; t--)
			if (this.nodes[t] == e) return this.open = t, !0;
		return !1
	}
	get currentPos() {
		this.closeExtra();
		let e = 0;
		for (let t = this.open; t >= 0; t--) {
			let n = this.nodes[t].content;
			for (let i = n.length - 1; i >= 0; i--) e += n[i].nodeSize;
			t && e++
		}
		return e
	}
	findAtPoint(e, t) {
		if (this.find)
			for (let n = 0; n < this.find.length; n++) this.find[n].node == e && this.find[n].offset == t && (this.find[n].pos = this.currentPos)
	}
	findInside(e) {
		if (this.find)
			for (let t = 0; t < this.find.length; t++) this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos)
	}
	findAround(e, t, n) {
		if (e != t && this.find)
			for (let i = 0; i < this.find.length; i++) this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (n ? 2 : 4) && (this.find[i].pos = this.currentPos)
	}
	findInText(e) {
		if (this.find)
			for (let t = 0; t < this.find.length; t++) this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset))
	}
	matchesContext(e) {
		if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
		let t = e.split("/"),
			n = this.options.context,
			i = !this.isOpen && (!n || n.parent.type == this.nodes[0].type),
			s = -(n ? n.depth + 1 : 0) + (i ? 0 : 1),
			o = (l, a) => {
				for (; l >= 0; l--) {
					let c = t[l];
					if (c == "") {
						if (l == t.length - 1 || l == 0) continue;
						for (; a >= s; a--)
							if (o(l - 1, a)) return !0;
						return !1
					} else {
						let h = a > 0 || a == 0 && i ? this.nodes[a].type : n && a >= s ? n.node(a - s).type : null;
						if (!h || h.name != c && h.groups.indexOf(c) == -1) return !1;
						a--
					}
				}
				return !0
			};
		return o(t.length - 1, this.open)
	}
	textblockFromContext() {
		let e = this.options.context;
		if (e)
			for (let t = e.depth; t >= 0; t--) {
				let n = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
				if (n && n.isTextblock && n.defaultAttrs) return n
			}
		for (let t in this.parser.schema.nodes) {
			let n = this.parser.schema.nodes[t];
			if (n.isTextblock && n.defaultAttrs) return n
		}
	}
	addPendingMark(e) {
		let t = Rl(e, this.top.pendingMarks);
		t && this.top.stashMarks.push(t), this.top.pendingMarks = e.addToSet(this.top.pendingMarks)
	}
	removePendingMark(e, t) {
		for (let n = this.open; n >= 0; n--) {
			let i = this.nodes[n];
			if (i.pendingMarks.lastIndexOf(e) > -1) i.pendingMarks = e.removeFromSet(i.pendingMarks);
			else {
				i.activeMarks = e.removeFromSet(i.activeMarks);
				let o = i.popFromStashMark(e);
				o && i.type && i.type.allowsMarkType(o.type) && (i.activeMarks = o.addToSet(i.activeMarks))
			}
			if (i == t) break
		}
	}
}

function Dl(r) {
	for (let e = r.firstChild, t = null; e; e = e.nextSibling) {
		let n = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
		n && Ki.hasOwnProperty(n) && t ? (t.appendChild(e), e = t) : n == "li" ? t = e : n && (t = null)
	}
}

function El(r, e) {
	return (r.matches || r.msMatchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector).call(r, e)
}

function Tr(r) {
	let e = {};
	for (let t in r) e[t] = r[t];
	return e
}

function Al(r, e) {
	let t = e.schema.nodes;
	for (let n in t) {
		let i = t[n];
		if (!i.allowsMarkType(r)) continue;
		let s = [],
			o = l => {
				s.push(l);
				for (let a = 0; a < l.edgeCount; a++) {
					let {
						type: c,
						next: h
					} = l.edge(a);
					if (c == e || s.indexOf(h) < 0 && o(h)) return !0
				}
			};
		if (o(i.contentMatch)) return !0
	}
}

function Rl(r, e) {
	for (let t = 0; t < e.length; t++)
		if (r.eq(e[t])) return e[t]
}
class rt {
	constructor(e, t) {
		this.nodes = e, this.marks = t
	}
	serializeFragment(e, t = {}, n) {
		n || (n = an(t).createDocumentFragment());
		let i = n,
			s = [];
		return e.forEach(o => {
			if (s.length || o.marks.length) {
				let l = 0,
					a = 0;
				for (; l < s.length && a < o.marks.length;) {
					let c = o.marks[a];
					if (!this.marks[c.type.name]) {
						a++;
						continue
					}
					if (!c.eq(s[l][0]) || c.type.spec.spanning === !1) break;
					l++, a++
				}
				for (; l < s.length;) i = s.pop()[1];
				for (; a < o.marks.length;) {
					let c = o.marks[a++],
						h = this.serializeMark(c, o.isInline, t);
					h && (s.push([c, i]), i.appendChild(h.dom), i = h.contentDOM || h.dom)
				}
			}
			i.appendChild(this.serializeNodeInner(o, t))
		}), n
	}
	serializeNodeInner(e, t) {
		let {
			dom: n,
			contentDOM: i
		} = Ft(an(t), this.nodes[e.type.name](e), null, e.attrs);
		if (i) {
			if (e.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
			this.serializeFragment(e.content, t, i)
		}
		return n
	}
	serializeNode(e, t = {}) {
		let n = this.serializeNodeInner(e, t);
		for (let i = e.marks.length - 1; i >= 0; i--) {
			let s = this.serializeMark(e.marks[i], e.isInline, t);
			s && ((s.contentDOM || s.dom).appendChild(n), n = s.dom)
		}
		return n
	}
	serializeMark(e, t, n = {}) {
		let i = this.marks[e.type.name];
		return i && Ft(an(n), i(e, t), null, e.attrs)
	}
	static renderSpec(e, t, n = null, i) {
		return Ft(e, t, n, i)
	}
	static fromSchema(e) {
		return e.cached.domSerializer || (e.cached.domSerializer = new rt(this.nodesFromSchema(e), this.marksFromSchema(e)))
	}
	static nodesFromSchema(e) {
		let t = Nr(e.nodes);
		return t.text || (t.text = n => n.text), t
	}
	static marksFromSchema(e) {
		return Nr(e.marks)
	}
}

function Nr(r) {
	let e = {};
	for (let t in r) {
		let n = r[t].spec.toDOM;
		n && (e[t] = n)
	}
	return e
}

function an(r) {
	return r.document || window.document
}
const Or = new WeakMap;

function Il(r) {
	let e = Or.get(r);
	return e === void 0 && Or.set(r, e = Pl(r)), e
}

function Pl(r) {
	let e = null;

	function t(n) {
		if (n && typeof n == "object")
			if (Array.isArray(n))
				if (typeof n[0] == "string") e || (e = []), e.push(n);
				else
					for (let i = 0; i < n.length; i++) t(n[i]);
		else
			for (let i in n) t(n[i])
	}
	return t(r), e
}

function Ft(r, e, t, n) {
	if (typeof e == "string") return {
		dom: r.createTextNode(e)
	};
	if (e.nodeType != null) return {
		dom: e
	};
	if (e.dom && e.dom.nodeType != null) return e;
	let i = e[0],
		s;
	if (typeof i != "string") throw new RangeError("Invalid array passed to renderSpec");
	if (n && (s = Il(n)) && s.indexOf(e) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
	let o = i.indexOf(" ");
	o > 0 && (t = i.slice(0, o), i = i.slice(o + 1));
	let l, a = t ? r.createElementNS(t, i) : r.createElement(i),
		c = e[1],
		h = 1;
	if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
		h = 2;
		for (let f in c)
			if (c[f] != null) {
				let u = f.indexOf(" ");
				u > 0 ? a.setAttributeNS(f.slice(0, u), f.slice(u + 1), c[f]) : a.setAttribute(f, c[f])
			}
	}
	for (let f = h; f < e.length; f++) {
		let u = e[f];
		if (u === 0) {
			if (f < e.length - 1 || f > h) throw new RangeError("Content hole must be the only child of its parent node");
			return {
				dom: a,
				contentDOM: a
			}
		} else {
			let {
				dom: p,
				contentDOM: d
			} = Ft(r, u, t, n);
			if (a.appendChild(p), d) {
				if (l) throw new RangeError("Multiple content holes");
				l = d
			}
		}
	}
	return {
		dom: a,
		contentDOM: l
	}
}
const Ji = 65535,
	Wi = Math.pow(2, 16);

function zl(r, e) {
	return r + e * Wi
}

function Dr(r) {
	return r & Ji
}

function vl(r) {
	return (r - (r & Ji)) / Wi
}
const _i = 1,
	Hi = 2,
	Bt = 4,
	$i = 8;
class Cn {
	constructor(e, t, n) {
		this.pos = e, this.delInfo = t, this.recover = n
	}
	get deleted() {
		return (this.delInfo & $i) > 0
	}
	get deletedBefore() {
		return (this.delInfo & (_i | Bt)) > 0
	}
	get deletedAfter() {
		return (this.delInfo & (Hi | Bt)) > 0
	}
	get deletedAcross() {
		return (this.delInfo & Bt) > 0
	}
}
class U {
	constructor(e, t = !1) {
		if (this.ranges = e, this.inverted = t, !e.length && U.empty) return U.empty
	}
	recover(e) {
		let t = 0,
			n = Dr(e);
		if (!this.inverted)
			for (let i = 0; i < n; i++) t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
		return this.ranges[n * 3] + t + vl(e)
	}
	mapResult(e, t = 1) {
		return this._map(e, t, !1)
	}
	map(e, t = 1) {
		return this._map(e, t, !0)
	}
	_map(e, t, n) {
		let i = 0,
			s = this.inverted ? 2 : 1,
			o = this.inverted ? 1 : 2;
		for (let l = 0; l < this.ranges.length; l += 3) {
			let a = this.ranges[l] - (this.inverted ? i : 0);
			if (a > e) break;
			let c = this.ranges[l + s],
				h = this.ranges[l + o],
				f = a + c;
			if (e <= f) {
				let u = c ? e == a ? -1 : e == f ? 1 : t : t,
					p = a + i + (u < 0 ? 0 : h);
				if (n) return p;
				let d = e == (t < 0 ? a : f) ? null : zl(l / 3, e - a),
					m = e == a ? Hi : e == f ? _i : Bt;
				return (t < 0 ? e != a : e != f) && (m |= $i), new Cn(p, m, d)
			}
			i += h - c
		}
		return n ? e + i : new Cn(e + i, 0, null)
	}
	touches(e, t) {
		let n = 0,
			i = Dr(t),
			s = this.inverted ? 2 : 1,
			o = this.inverted ? 1 : 2;
		for (let l = 0; l < this.ranges.length; l += 3) {
			let a = this.ranges[l] - (this.inverted ? n : 0);
			if (a > e) break;
			let c = this.ranges[l + s],
				h = a + c;
			if (e <= h && l == i * 3) return !0;
			n += this.ranges[l + o] - c
		}
		return !1
	}
	forEach(e) {
		let t = this.inverted ? 2 : 1,
			n = this.inverted ? 1 : 2;
		for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
			let o = this.ranges[i],
				l = o - (this.inverted ? s : 0),
				a = o + (this.inverted ? 0 : s),
				c = this.ranges[i + t],
				h = this.ranges[i + n];
			e(l, l + c, a, a + h), s += h - c
		}
	}
	invert() {
		return new U(this.ranges, !this.inverted)
	}
	toString() {
		return (this.inverted ? "-" : "") + JSON.stringify(this.ranges)
	}
	static offset(e) {
		return e == 0 ? U.empty : new U(e < 0 ? [0, -e, 0] : [0, 0, e])
	}
}
U.empty = new U([]);
class mt {
	constructor(e = [], t, n = 0, i = e.length) {
		this.maps = e, this.mirror = t, this.from = n, this.to = i
	}
	slice(e = 0, t = this.maps.length) {
		return new mt(this.maps, this.mirror, e, t)
	}
	copy() {
		return new mt(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to)
	}
	appendMap(e, t) {
		this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t)
	}
	appendMapping(e) {
		for (let t = 0, n = this.maps.length; t < e.maps.length; t++) {
			let i = e.getMirror(t);
			this.appendMap(e.maps[t], i != null && i < t ? n + i : void 0)
		}
	}
	getMirror(e) {
		if (this.mirror) {
			for (let t = 0; t < this.mirror.length; t++)
				if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)]
		}
	}
	setMirror(e, t) {
		this.mirror || (this.mirror = []), this.mirror.push(e, t)
	}
	appendMappingInverted(e) {
		for (let t = e.maps.length - 1, n = this.maps.length + e.maps.length; t >= 0; t--) {
			let i = e.getMirror(t);
			this.appendMap(e.maps[t].invert(), i != null && i > t ? n - i - 1 : void 0)
		}
	}
	invert() {
		let e = new mt;
		return e.appendMappingInverted(this), e
	}
	map(e, t = 1) {
		if (this.mirror) return this._map(e, t, !0);
		for (let n = this.from; n < this.to; n++) e = this.maps[n].map(e, t);
		return e
	}
	mapResult(e, t = 1) {
		return this._map(e, t, !1)
	}
	_map(e, t, n) {
		let i = 0;
		for (let s = this.from; s < this.to; s++) {
			let o = this.maps[s],
				l = o.mapResult(e, t);
			if (l.recover != null) {
				let a = this.getMirror(s);
				if (a != null && a > s && a < this.to) {
					s = a, e = this.maps[a].recover(l.recover);
					continue
				}
			}
			i |= l.delInfo, e = l.pos
		}
		return n ? e : new Cn(e, i, null)
	}
}
const cn = Object.create(null);
class V {
	getMap() {
		return U.empty
	}
	merge(e) {
		return null
	}
	static fromJSON(e, t) {
		if (!t || !t.stepType) throw new RangeError("Invalid input for Step.fromJSON");
		let n = cn[t.stepType];
		if (!n) throw new RangeError(`No step type ${t.stepType} defined`);
		return n.fromJSON(e, t)
	}
	static jsonID(e, t) {
		if (e in cn) throw new RangeError("Duplicate use of step JSON ID " + e);
		return cn[e] = t, t.prototype.jsonID = e, t
	}
}
class E {
	constructor(e, t) {
		this.doc = e, this.failed = t
	}
	static ok(e) {
		return new E(e, null)
	}
	static fail(e) {
		return new E(null, e)
	}
	static fromReplace(e, t, n, i) {
		try {
			return E.ok(e.replace(t, n, i))
		} catch (s) {
			if (s instanceof Kt) return E.fail(s.message);
			throw s
		}
	}
}

function Bn(r, e, t) {
	let n = [];
	for (let i = 0; i < r.childCount; i++) {
		let s = r.child(i);
		s.content.size && (s = s.copy(Bn(s.content, e, s))), s.isInline && (s = e(s, t, i)), n.push(s)
	}
	return y.fromArray(n)
}
class Se extends V {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n
	}
	apply(e) {
		let t = e.slice(this.from, this.to),
			n = e.resolve(this.from),
			i = n.node(n.sharedDepth(this.to)),
			s = new S(Bn(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
		return E.fromReplace(e, this.from, this.to, s)
	}
	invert() {
		return new se(this.from, this.to, this.mark)
	}
	map(e) {
		let t = e.mapResult(this.from, 1),
			n = e.mapResult(this.to, -1);
		return t.deleted && n.deleted || t.pos >= n.pos ? null : new Se(t.pos, n.pos, this.mark)
	}
	merge(e) {
		return e instanceof Se && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Se(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null
	}
	toJSON() {
		return {
			stepType: "addMark",
			mark: this.mark.toJSON(),
			from: this.from,
			to: this.to
		}
	}
	static fromJSON(e, t) {
		if (typeof t.from != "number" || typeof t.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
		return new Se(t.from, t.to, e.markFromJSON(t.mark))
	}
}
V.jsonID("addMark", Se);
class se extends V {
	constructor(e, t, n) {
		super(), this.from = e, this.to = t, this.mark = n
	}
	apply(e) {
		let t = e.slice(this.from, this.to),
			n = new S(Bn(t.content, i => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
		return E.fromReplace(e, this.from, this.to, n)
	}
	invert() {
		return new Se(this.from, this.to, this.mark)
	}
	map(e) {
		let t = e.mapResult(this.from, 1),
			n = e.mapResult(this.to, -1);
		return t.deleted && n.deleted || t.pos >= n.pos ? null : new se(t.pos, n.pos, this.mark)
	}
	merge(e) {
		return e instanceof se && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new se(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null
	}
	toJSON() {
		return {
			stepType: "removeMark",
			mark: this.mark.toJSON(),
			from: this.from,
			to: this.to
		}
	}
	static fromJSON(e, t) {
		if (typeof t.from != "number" || typeof t.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
		return new se(t.from, t.to, e.markFromJSON(t.mark))
	}
}
V.jsonID("removeMark", se);
class ke extends V {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return E.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
		return E.fromReplace(e, this.pos, this.pos + 1, new S(y.from(n), 0, t.isLeaf ? 0 : 1))
	}
	invert(e) {
		let t = e.nodeAt(this.pos);
		if (t) {
			let n = this.mark.addToSet(t.marks);
			if (n.length == t.marks.length) {
				for (let i = 0; i < t.marks.length; i++)
					if (!t.marks[i].isInSet(n)) return new ke(this.pos, t.marks[i]);
				return new ke(this.pos, this.mark)
			}
		}
		return new Ze(this.pos, this.mark)
	}
	map(e) {
		let t = e.mapResult(this.pos, 1);
		return t.deletedAfter ? null : new ke(t.pos, this.mark)
	}
	toJSON() {
		return {
			stepType: "addNodeMark",
			pos: this.pos,
			mark: this.mark.toJSON()
		}
	}
	static fromJSON(e, t) {
		if (typeof t.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
		return new ke(t.pos, e.markFromJSON(t.mark))
	}
}
V.jsonID("addNodeMark", ke);
class Ze extends V {
	constructor(e, t) {
		super(), this.pos = e, this.mark = t
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return E.fail("No node at mark step's position");
		let n = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
		return E.fromReplace(e, this.pos, this.pos + 1, new S(y.from(n), 0, t.isLeaf ? 0 : 1))
	}
	invert(e) {
		let t = e.nodeAt(this.pos);
		return !t || !this.mark.isInSet(t.marks) ? this : new ke(this.pos, this.mark)
	}
	map(e) {
		let t = e.mapResult(this.pos, 1);
		return t.deletedAfter ? null : new Ze(t.pos, this.mark)
	}
	toJSON() {
		return {
			stepType: "removeNodeMark",
			pos: this.pos,
			mark: this.mark.toJSON()
		}
	}
	static fromJSON(e, t) {
		if (typeof t.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
		return new Ze(t.pos, e.markFromJSON(t.mark))
	}
}
V.jsonID("removeNodeMark", Ze);
class B extends V {
	constructor(e, t, n, i = !1) {
		super(), this.from = e, this.to = t, this.slice = n, this.structure = i
	}
	apply(e) {
		return this.structure && wn(e, this.from, this.to) ? E.fail("Structure replace would overwrite content") : E.fromReplace(e, this.from, this.to, this.slice)
	}
	getMap() {
		return new U([this.from, this.to - this.from, this.slice.size])
	}
	invert(e) {
		return new B(this.from, this.from + this.slice.size, e.slice(this.from, this.to))
	}
	map(e) {
		let t = e.mapResult(this.from, 1),
			n = e.mapResult(this.to, -1);
		return t.deletedAcross && n.deletedAcross ? null : new B(t.pos, Math.max(t.pos, n.pos), this.slice)
	}
	merge(e) {
		if (!(e instanceof B) || e.structure || this.structure) return null;
		if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
			let t = this.slice.size + e.slice.size == 0 ? S.empty : new S(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
			return new B(this.from, this.to + (e.to - e.from), t, this.structure)
		} else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
			let t = this.slice.size + e.slice.size == 0 ? S.empty : new S(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
			return new B(e.from, this.to, t, this.structure)
		} else return null
	}
	toJSON() {
		let e = {
			stepType: "replace",
			from: this.from,
			to: this.to
		};
		return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e
	}
	static fromJSON(e, t) {
		if (typeof t.from != "number" || typeof t.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
		return new B(t.from, t.to, S.fromJSON(e, t.slice), !!t.structure)
	}
}
V.jsonID("replace", B);
class j extends V {
	constructor(e, t, n, i, s, o, l = !1) {
		super(), this.from = e, this.to = t, this.gapFrom = n, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l
	}
	apply(e) {
		if (this.structure && (wn(e, this.from, this.gapFrom) || wn(e, this.gapTo, this.to))) return E.fail("Structure gap-replace would overwrite content");
		let t = e.slice(this.gapFrom, this.gapTo);
		if (t.openStart || t.openEnd) return E.fail("Gap is not a flat range");
		let n = this.slice.insertAt(this.insert, t.content);
		return n ? E.fromReplace(e, this.from, this.to, n) : E.fail("Content does not fit in gap")
	}
	getMap() {
		return new U([this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert])
	}
	invert(e) {
		let t = this.gapTo - this.gapFrom;
		return new j(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure)
	}
	map(e) {
		let t = e.mapResult(this.from, 1),
			n = e.mapResult(this.to, -1),
			i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1),
			s = this.to == this.gapTo ? n.pos : e.map(this.gapTo, 1);
		return t.deletedAcross && n.deletedAcross || i < t.pos || s > n.pos ? null : new j(t.pos, n.pos, i, s, this.slice, this.insert, this.structure)
	}
	toJSON() {
		let e = {
			stepType: "replaceAround",
			from: this.from,
			to: this.to,
			gapFrom: this.gapFrom,
			gapTo: this.gapTo,
			insert: this.insert
		};
		return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e
	}
	static fromJSON(e, t) {
		if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
		return new j(t.from, t.to, t.gapFrom, t.gapTo, S.fromJSON(e, t.slice), t.insert, !!t.structure)
	}
}
V.jsonID("replaceAround", j);

function wn(r, e, t) {
	let n = r.resolve(e),
		i = t - e,
		s = n.depth;
	for (; i > 0 && s > 0 && n.indexAfter(s) == n.node(s).childCount;) s--, i--;
	if (i > 0) {
		let o = n.node(s).maybeChild(n.indexAfter(s));
		for (; i > 0;) {
			if (!o || o.isLeaf) return !0;
			o = o.firstChild, i--
		}
	}
	return !1
}

function Fl(r, e, t, n) {
	let i = [],
		s = [],
		o, l;
	r.doc.nodesBetween(e, t, (a, c, h) => {
		if (!a.isInline) return;
		let f = a.marks;
		if (!n.isInSet(f) && h.type.allowsMarkType(n.type)) {
			let u = Math.max(c, e),
				p = Math.min(c + a.nodeSize, t),
				d = n.addToSet(f);
			for (let m = 0; m < f.length; m++) f[m].isInSet(d) || (o && o.to == u && o.mark.eq(f[m]) ? o.to = p : i.push(o = new se(u, p, f[m])));
			l && l.to == u ? l.to = p : s.push(l = new Se(u, p, n))
		}
	}), i.forEach(a => r.step(a)), s.forEach(a => r.step(a))
}

function Bl(r, e, t, n) {
	let i = [],
		s = 0;
	r.doc.nodesBetween(e, t, (o, l) => {
		if (!o.isInline) return;
		s++;
		let a = null;
		if (n instanceof Yt) {
			let c = o.marks,
				h;
			for (; h = n.isInSet(c);)(a || (a = [])).push(h), c = h.removeFromSet(c)
		} else n ? n.isInSet(o.marks) && (a = [n]) : a = o.marks;
		if (a && a.length) {
			let c = Math.min(l + o.nodeSize, t);
			for (let h = 0; h < a.length; h++) {
				let f = a[h],
					u;
				for (let p = 0; p < i.length; p++) {
					let d = i[p];
					d.step == s - 1 && f.eq(i[p].style) && (u = d)
				}
				u ? (u.to = c, u.step = s) : i.push({
					style: f,
					from: Math.max(l, e),
					to: c,
					step: s
				})
			}
		}
	}), i.forEach(o => r.step(new se(o.from, o.to, o.style)))
}

function Ui(r, e, t, n = t.contentMatch, i = !0) {
	let s = r.doc.nodeAt(e),
		o = [],
		l = e + 1;
	for (let a = 0; a < s.childCount; a++) {
		let c = s.child(a),
			h = l + c.nodeSize,
			f = n.matchType(c.type);
		if (!f) o.push(new B(l, h, S.empty));
		else {
			n = f;
			for (let u = 0; u < c.marks.length; u++) t.allowsMarkType(c.marks[u].type) || r.step(new se(l, h, c.marks[u]));
			if (i && c.isText && t.whitespace != "pre") {
				let u, p = /\r?\n|\r/g,
					d;
				for (; u = p.exec(c.text);) d || (d = new S(y.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new B(l + u.index, l + u.index + u[0].length, d))
			}
		}
		l = h
	}
	if (!n.validEnd) {
		let a = n.fillBefore(y.empty, !0);
		r.replace(l, l, new S(a, 0, 0))
	}
	for (let a = o.length - 1; a >= 0; a--) r.step(o[a])
}

function Ll(r, e, t) {
	return (e == 0 || r.canReplace(e, r.childCount)) && (t == r.childCount || r.canReplace(0, t))
}

function Ln(r) {
	let t = r.parent.content.cutByIndex(r.startIndex, r.endIndex);
	for (let n = r.depth;; --n) {
		let i = r.$from.node(n),
			s = r.$from.index(n),
			o = r.$to.indexAfter(n);
		if (n < r.depth && i.canReplace(s, o, t)) return n;
		if (n == 0 || i.type.spec.isolating || !Ll(i, s, o)) break
	}
	return null
}

function Vl(r, e, t) {
	let {
		$from: n,
		$to: i,
		depth: s
	} = e, o = n.before(s + 1), l = i.after(s + 1), a = o, c = l, h = y.empty, f = 0;
	for (let d = s, m = !1; d > t; d--) m || n.index(d) > 0 ? (m = !0, h = y.from(n.node(d).copy(h)), f++) : a--;
	let u = y.empty,
		p = 0;
	for (let d = s, m = !1; d > t; d--) m || i.after(d + 1) < i.end(d) ? (m = !0, u = y.from(i.node(d).copy(u)), p++) : c++;
	r.step(new j(a, c, o, l, new S(h.append(u), f, p), h.size - f, !0))
}

function ql(r, e, t = null, n = r) {
	let i = Kl(r, e),
		s = i && Jl(n, e);
	return s ? i.map(Er).concat({
		type: e,
		attrs: t
	}).concat(s.map(Er)) : null
}

function Er(r) {
	return {
		type: r,
		attrs: null
	}
}

function Kl(r, e) {
	let {
		parent: t,
		startIndex: n,
		endIndex: i
	} = r, s = t.contentMatchAt(n).findWrapping(e);
	if (!s) return null;
	let o = s.length ? s[0] : e;
	return t.canReplaceWith(n, i, o) ? s : null
}

function Jl(r, e) {
	let {
		parent: t,
		startIndex: n,
		endIndex: i
	} = r, s = t.child(n), o = e.contentMatch.findWrapping(s.type);
	if (!o) return null;
	let a = (o.length ? o[o.length - 1] : e).contentMatch;
	for (let c = n; a && c < i; c++) a = a.matchType(t.child(c).type);
	return !a || !a.validEnd ? null : o
}

function Wl(r, e, t) {
	let n = y.empty;
	for (let o = t.length - 1; o >= 0; o--) {
		if (n.size) {
			let l = t[o].type.contentMatch.matchFragment(n);
			if (!l || !l.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper")
		}
		n = y.from(t[o].type.create(t[o].attrs, n))
	}
	let i = e.start,
		s = e.end;
	r.step(new j(i, s, i, s, new S(n, 0, 0), t.length, !0))
}

function _l(r, e, t, n, i) {
	if (!n.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
	let s = r.steps.length;
	r.doc.nodesBetween(e, t, (o, l) => {
		if (o.isTextblock && !o.hasMarkup(n, i) && Ul(r.doc, r.mapping.slice(s).map(l), n)) {
			let a = null;
			if (n.schema.linebreakReplacement) {
				let u = n.whitespace == "pre",
					p = !!n.contentMatch.matchType(n.schema.linebreakReplacement);
				u && !p ? a = !1 : !u && p && (a = !0)
			}
			a === !1 && $l(r, o, l, s), Ui(r, r.mapping.slice(s).map(l, 1), n, void 0, a === null);
			let c = r.mapping.slice(s),
				h = c.map(l, 1),
				f = c.map(l + o.nodeSize, 1);
			return r.step(new j(h, f, h + 1, f - 1, new S(y.from(n.create(i, null, o.marks)), 0, 0), 1, !0)), a === !0 && Hl(r, o, l, s), !1
		}
	})
}

function Hl(r, e, t, n) {
	e.forEach((i, s) => {
		if (i.isText) {
			let o, l = /\r?\n|\r/g;
			for (; o = l.exec(i.text);) {
				let a = r.mapping.slice(n).map(t + 1 + s + o.index);
				r.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create())
			}
		}
	})
}

function $l(r, e, t, n) {
	e.forEach((i, s) => {
		if (i.type == i.type.schema.linebreakReplacement) {
			let o = r.mapping.slice(n).map(t + 1 + s);
			r.replaceWith(o, o + 1, e.type.schema.text(`
`))
		}
	})
}

function Ul(r, e, t) {
	let n = r.resolve(e),
		i = n.index();
	return n.parent.canReplaceWith(i, i + 1, t)
}

function jl(r, e, t, n, i) {
	let s = r.doc.nodeAt(e);
	if (!s) throw new RangeError("No node at given position");
	t || (t = s.type);
	let o = t.create(n, null, i || s.marks);
	if (s.isLeaf) return r.replaceWith(e, e + s.nodeSize, o);
	if (!t.validContent(s.content)) throw new RangeError("Invalid content for node type " + t.name);
	r.step(new j(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new S(y.from(o), 0, 0), 1, !0))
}

function Lt(r, e, t = 1, n) {
	let i = r.resolve(e),
		s = i.depth - t,
		o = n && n[n.length - 1] || i.parent;
	if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount))) return !1;
	for (let c = i.depth - 1, h = t - 2; c > s; c--, h--) {
		let f = i.node(c),
			u = i.index(c);
		if (f.type.spec.isolating) return !1;
		let p = f.content.cutByIndex(u, f.childCount),
			d = n && n[h + 1];
		d && (p = p.replaceChild(0, d.type.create(d.attrs)));
		let m = n && n[h] || f;
		if (!f.canReplace(u + 1, f.childCount) || !m.type.validContent(p)) return !1
	}
	let l = i.indexAfter(s),
		a = n && n[0];
	return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type)
}

function Gl(r, e, t = 1, n) {
	let i = r.doc.resolve(e),
		s = y.empty,
		o = y.empty;
	for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
		s = y.from(i.node(l).copy(s));
		let h = n && n[c];
		o = y.from(h ? h.type.create(h.attrs, o) : i.node(l).copy(o))
	}
	r.step(new B(e, e, new S(s.append(o), t, t), !0))
}

function ji(r, e) {
	let t = r.resolve(e),
		n = t.index();
	return Yl(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(n, n + 1)
}

function Yl(r, e) {
	return !!(r && e && !r.isLeaf && r.canAppend(e))
}

function Xl(r, e, t) {
	let n = new B(e - t, e + t, S.empty, !0);
	r.step(n)
}

function Ql(r, e, t) {
	let n = r.resolve(e);
	if (n.parent.canReplaceWith(n.index(), n.index(), t)) return e;
	if (n.parentOffset == 0)
		for (let i = n.depth - 1; i >= 0; i--) {
			let s = n.index(i);
			if (n.node(i).canReplaceWith(s, s, t)) return n.before(i + 1);
			if (s > 0) return null
		}
	if (n.parentOffset == n.parent.content.size)
		for (let i = n.depth - 1; i >= 0; i--) {
			let s = n.indexAfter(i);
			if (n.node(i).canReplaceWith(s, s, t)) return n.after(i + 1);
			if (s < n.node(i).childCount) return null
		}
	return null
}

function Zl(r, e, t) {
	let n = r.resolve(e);
	if (!t.content.size) return e;
	let i = t.content;
	for (let s = 0; s < t.openStart; s++) i = i.firstChild.content;
	for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
		for (let o = n.depth; o >= 0; o--) {
			let l = o == n.depth ? 0 : n.pos <= (n.start(o + 1) + n.end(o + 1)) / 2 ? -1 : 1,
				a = n.index(o) + (l > 0 ? 1 : 0),
				c = n.node(o),
				h = !1;
			if (s == 1) h = c.canReplace(a, a, i);
			else {
				let f = c.contentMatchAt(a).findWrapping(i.firstChild.type);
				h = f && c.canReplaceWith(a, a, f[0])
			}
			if (h) return l == 0 ? n.pos : l < 0 ? n.before(o + 1) : n.after(o + 1)
		}
	return null
}

function Vn(r, e, t = e, n = S.empty) {
	if (e == t && !n.size) return null;
	let i = r.resolve(e),
		s = r.resolve(t);
	return Gi(i, s, n) ? new B(e, t, n) : new ea(i, s, n).fit()
}

function Gi(r, e, t) {
	return !t.openStart && !t.openEnd && r.start() == e.start() && r.parent.canReplace(r.index(), e.index(), t.content)
}
class ea {
	constructor(e, t, n) {
		this.$from = e, this.$to = t, this.unplaced = n, this.frontier = [], this.placed = y.empty;
		for (let i = 0; i <= e.depth; i++) {
			let s = e.node(i);
			this.frontier.push({
				type: s.type,
				match: s.contentMatchAt(e.indexAfter(i))
			})
		}
		for (let i = e.depth; i > 0; i--) this.placed = y.from(e.node(i).copy(this.placed))
	}
	get depth() {
		return this.frontier.length - 1
	}
	fit() {
		for (; this.unplaced.size;) {
			let c = this.findFittable();
			c ? this.placeNodes(c) : this.openMore() || this.dropNode()
		}
		let e = this.mustMoveInline(),
			t = this.placed.size - this.depth - this.$from.depth,
			n = this.$from,
			i = this.close(e < 0 ? this.$to : n.doc.resolve(e));
		if (!i) return null;
		let s = this.placed,
			o = n.depth,
			l = i.depth;
		for (; o && l && s.childCount == 1;) s = s.firstChild.content, o--, l--;
		let a = new S(s, o, l);
		return e > -1 ? new j(n.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || n.pos != this.$to.pos ? new B(n.pos, i.pos, a) : null
	}
	findFittable() {
		let e = this.unplaced.openStart;
		for (let t = this.unplaced.content, n = 0, i = this.unplaced.openEnd; n < e; n++) {
			let s = t.firstChild;
			if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= n) {
				e = n;
				break
			}
			t = s.content
		}
		for (let t = 1; t <= 2; t++)
			for (let n = t == 1 ? e : this.unplaced.openStart; n >= 0; n--) {
				let i, s = null;
				n ? (s = hn(this.unplaced.content, n - 1).firstChild, i = s.content) : i = this.unplaced.content;
				let o = i.firstChild;
				for (let l = this.depth; l >= 0; l--) {
					let {
						type: a,
						match: c
					} = this.frontier[l], h, f = null;
					if (t == 1 && (o ? c.matchType(o.type) || (f = c.fillBefore(y.from(o), !1)) : s && a.compatibleContent(s.type))) return {
						sliceDepth: n,
						frontierDepth: l,
						parent: s,
						inject: f
					};
					if (t == 2 && o && (h = c.findWrapping(o.type))) return {
						sliceDepth: n,
						frontierDepth: l,
						parent: s,
						wrap: h
					};
					if (s && c.matchType(s.type)) break
				}
			}
	}
	openMore() {
		let {
			content: e,
			openStart: t,
			openEnd: n
		} = this.unplaced, i = hn(e, t);
		return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new S(e, t + 1, Math.max(n, i.size + t >= e.size - n ? t + 1 : 0)), !0)
	}
	dropNode() {
		let {
			content: e,
			openStart: t,
			openEnd: n
		} = this.unplaced, i = hn(e, t);
		if (i.childCount <= 1 && t > 0) {
			let s = e.size - t <= t + i.size;
			this.unplaced = new S(ct(e, t - 1, 1), t - 1, s ? t - 1 : n)
		} else this.unplaced = new S(ct(e, t, 1), t, n)
	}
	placeNodes({
		sliceDepth: e,
		frontierDepth: t,
		parent: n,
		inject: i,
		wrap: s
	}) {
		for (; this.depth > t;) this.closeFrontierNode();
		if (s)
			for (let m = 0; m < s.length; m++) this.openFrontierNode(s[m]);
		let o = this.unplaced,
			l = n ? n.content : o.content,
			a = o.openStart - e,
			c = 0,
			h = [],
			{
				match: f,
				type: u
			} = this.frontier[t];
		if (i) {
			for (let m = 0; m < i.childCount; m++) h.push(i.child(m));
			f = f.matchFragment(i)
		}
		let p = l.size + e - (o.content.size - o.openEnd);
		for (; c < l.childCount;) {
			let m = l.child(c),
				g = f.matchType(m.type);
			if (!g) break;
			c++, (c > 1 || a == 0 || m.content.size) && (f = g, h.push(Yi(m.mark(u.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? p : -1)))
		}
		let d = c == l.childCount;
		d || (p = -1), this.placed = ht(this.placed, t, y.from(h)), this.frontier[t].match = f, d && p < 0 && n && n.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
		for (let m = 0, g = l; m < p; m++) {
			let k = g.lastChild;
			this.frontier.push({
				type: k.type,
				match: k.contentMatchAt(k.childCount)
			}), g = k.content
		}
		this.unplaced = d ? e == 0 ? S.empty : new S(ct(o.content, e - 1, 1), e - 1, p < 0 ? o.openEnd : e - 1) : new S(ct(o.content, e, c), o.openStart, o.openEnd)
	}
	mustMoveInline() {
		if (!this.$to.parent.isTextblock) return -1;
		let e = this.frontier[this.depth],
			t;
		if (!e.type.isTextblock || !fn(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
		let {
			depth: n
		} = this.$to, i = this.$to.after(n);
		for (; n > 1 && i == this.$to.end(--n);) ++i;
		return i
	}
	findCloseLevel(e) {
		e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
			let {
				match: n,
				type: i
			} = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = fn(e, t, i, n, s);
			if (o) {
				for (let l = t - 1; l >= 0; l--) {
					let {
						match: a,
						type: c
					} = this.frontier[l], h = fn(e, l, c, a, !0);
					if (!h || h.childCount) continue e
				}
				return {
					depth: t,
					fit: o,
					move: s ? e.doc.resolve(e.after(t + 1)) : e
				}
			}
		}
	}
	close(e) {
		let t = this.findCloseLevel(e);
		if (!t) return null;
		for (; this.depth > t.depth;) this.closeFrontierNode();
		t.fit.childCount && (this.placed = ht(this.placed, t.depth, t.fit)), e = t.move;
		for (let n = t.depth + 1; n <= e.depth; n++) {
			let i = e.node(n),
				s = i.type.contentMatch.fillBefore(i.content, !0, e.index(n));
			this.openFrontierNode(i.type, i.attrs, s)
		}
		return e
	}
	openFrontierNode(e, t = null, n) {
		let i = this.frontier[this.depth];
		i.match = i.match.matchType(e), this.placed = ht(this.placed, this.depth, y.from(e.create(t, n))), this.frontier.push({
			type: e,
			match: e.contentMatch
		})
	}
	closeFrontierNode() {
		let t = this.frontier.pop().match.fillBefore(y.empty, !0);
		t.childCount && (this.placed = ht(this.placed, this.frontier.length, t))
	}
}

function ct(r, e, t) {
	return e == 0 ? r.cutByIndex(t, r.childCount) : r.replaceChild(0, r.firstChild.copy(ct(r.firstChild.content, e - 1, t)))
}

function ht(r, e, t) {
	return e == 0 ? r.append(t) : r.replaceChild(r.childCount - 1, r.lastChild.copy(ht(r.lastChild.content, e - 1, t)))
}

function hn(r, e) {
	for (let t = 0; t < e; t++) r = r.firstChild.content;
	return r
}

function Yi(r, e, t) {
	if (e <= 0) return r;
	let n = r.content;
	return e > 1 && (n = n.replaceChild(0, Yi(n.firstChild, e - 1, n.childCount == 1 ? t - 1 : 0))), e > 0 && (n = r.type.contentMatch.fillBefore(n).append(n), t <= 0 && (n = n.append(r.type.contentMatch.matchFragment(n).fillBefore(y.empty, !0)))), r.copy(n)
}

function fn(r, e, t, n, i) {
	let s = r.node(e),
		o = i ? r.indexAfter(e) : r.index(e);
	if (o == s.childCount && !t.compatibleContent(s.type)) return null;
	let l = n.fillBefore(s.content, !0, o);
	return l && !ta(t, s.content, o) ? l : null
}

function ta(r, e, t) {
	for (let n = t; n < e.childCount; n++)
		if (!r.allowsMarks(e.child(n).marks)) return !0;
	return !1
}

function na(r) {
	return r.spec.defining || r.spec.definingForContent
}

function ra(r, e, t, n) {
	if (!n.size) return r.deleteRange(e, t);
	let i = r.doc.resolve(e),
		s = r.doc.resolve(t);
	if (Gi(i, s, n)) return r.step(new B(e, t, n));
	let o = Qi(i, r.doc.resolve(t));
	o[o.length - 1] == 0 && o.pop();
	let l = -(i.depth + 1);
	o.unshift(l);
	for (let u = i.depth, p = i.pos - 1; u > 0; u--, p--) {
		let d = i.node(u).type.spec;
		if (d.defining || d.definingAsContext || d.isolating) break;
		o.indexOf(u) > -1 ? l = u : i.before(u) == p && o.splice(1, 0, -u)
	}
	let a = o.indexOf(l),
		c = [],
		h = n.openStart;
	for (let u = n.content, p = 0;; p++) {
		let d = u.firstChild;
		if (c.push(d), p == n.openStart) break;
		u = d.content
	}
	for (let u = h - 1; u >= 0; u--) {
		let p = c[u],
			d = na(p.type);
		if (d && !p.sameMarkup(i.node(Math.abs(l) - 1))) h = u;
		else if (d || !p.type.isTextblock) break
	}
	for (let u = n.openStart; u >= 0; u--) {
		let p = (u + h + 1) % (n.openStart + 1),
			d = c[p];
		if (d)
			for (let m = 0; m < o.length; m++) {
				let g = o[(m + a) % o.length],
					k = !0;
				g < 0 && (k = !1, g = -g);
				let O = i.node(g - 1),
					z = i.index(g - 1);
				if (O.canReplaceWith(z, z, d.type, d.marks)) return r.replace(i.before(g), k ? s.after(g) : t, new S(Xi(n.content, 0, n.openStart, p), p, n.openEnd))
			}
	}
	let f = r.steps.length;
	for (let u = o.length - 1; u >= 0 && (r.replace(e, t, n), !(r.steps.length > f)); u--) {
		let p = o[u];
		p < 0 || (e = i.before(p), t = s.after(p))
	}
}

function Xi(r, e, t, n, i) {
	if (e < t) {
		let s = r.firstChild;
		r = r.replaceChild(0, s.copy(Xi(s.content, e + 1, t, n, s)))
	}
	if (e > n) {
		let s = i.contentMatchAt(0),
			o = s.fillBefore(r).append(r);
		r = o.append(s.matchFragment(o).fillBefore(y.empty, !0))
	}
	return r
}

function ia(r, e, t, n) {
	if (!n.isInline && e == t && r.doc.resolve(e).parent.content.size) {
		let i = Ql(r.doc, e, n.type);
		i != null && (e = t = i)
	}
	r.replaceRange(e, t, new S(y.from(n), 0, 0))
}

function sa(r, e, t) {
	let n = r.doc.resolve(e),
		i = r.doc.resolve(t),
		s = Qi(n, i);
	for (let o = 0; o < s.length; o++) {
		let l = s[o],
			a = o == s.length - 1;
		if (a && l == 0 || n.node(l).type.contentMatch.validEnd) return r.delete(n.start(l), i.end(l));
		if (l > 0 && (a || n.node(l - 1).canReplace(n.index(l - 1), i.indexAfter(l - 1)))) return r.delete(n.before(l), i.after(l))
	}
	for (let o = 1; o <= n.depth && o <= i.depth; o++)
		if (e - n.start(o) == n.depth - o && t > n.end(o) && i.end(o) - t != i.depth - o) return r.delete(n.before(o), t);
	r.delete(e, t)
}

function Qi(r, e) {
	let t = [],
		n = Math.min(r.depth, e.depth);
	for (let i = n; i >= 0; i--) {
		let s = r.start(i);
		if (s < r.pos - (r.depth - i) || e.end(i) > e.pos + (e.depth - i) || r.node(i).type.spec.isolating || e.node(i).type.spec.isolating) break;
		(s == e.start(i) || i == r.depth && i == e.depth && r.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i)
	}
	return t
}
class Xe extends V {
	constructor(e, t, n) {
		super(), this.pos = e, this.attr = t, this.value = n
	}
	apply(e) {
		let t = e.nodeAt(this.pos);
		if (!t) return E.fail("No node at attribute step's position");
		let n = Object.create(null);
		for (let s in t.attrs) n[s] = t.attrs[s];
		n[this.attr] = this.value;
		let i = t.type.create(n, null, t.marks);
		return E.fromReplace(e, this.pos, this.pos + 1, new S(y.from(i), 0, t.isLeaf ? 0 : 1))
	}
	getMap() {
		return U.empty
	}
	invert(e) {
		return new Xe(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr])
	}
	map(e) {
		let t = e.mapResult(this.pos, 1);
		return t.deletedAfter ? null : new Xe(t.pos, this.attr, this.value)
	}
	toJSON() {
		return {
			stepType: "attr",
			pos: this.pos,
			attr: this.attr,
			value: this.value
		}
	}
	static fromJSON(e, t) {
		if (typeof t.pos != "number" || typeof t.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
		return new Xe(t.pos, t.attr, t.value)
	}
}
V.jsonID("attr", Xe);
class xt extends V {
	constructor(e, t) {
		super(), this.attr = e, this.value = t
	}
	apply(e) {
		let t = Object.create(null);
		for (let i in e.attrs) t[i] = e.attrs[i];
		t[this.attr] = this.value;
		let n = e.type.create(t, e.content, e.marks);
		return E.ok(n)
	}
	getMap() {
		return U.empty
	}
	invert(e) {
		return new xt(this.attr, e.attrs[this.attr])
	}
	map(e) {
		return this
	}
	toJSON() {
		return {
			stepType: "docAttr",
			attr: this.attr,
			value: this.value
		}
	}
	static fromJSON(e, t) {
		if (typeof t.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
		return new xt(t.attr, t.value)
	}
}
V.jsonID("docAttr", xt);
let et = class extends Error {};
et = function r(e) {
	let t = Error.call(this, e);
	return t.__proto__ = r.prototype, t
};
et.prototype = Object.create(Error.prototype);
et.prototype.constructor = et;
et.prototype.name = "TransformError";
class oa {
	constructor(e) {
		this.doc = e, this.steps = [], this.docs = [], this.mapping = new mt
	}
	get before() {
		return this.docs.length ? this.docs[0] : this.doc
	}
	step(e) {
		let t = this.maybeStep(e);
		if (t.failed) throw new et(t.failed);
		return this
	}
	maybeStep(e) {
		let t = e.apply(this.doc);
		return t.failed || this.addStep(e, t.doc), t
	}
	get docChanged() {
		return this.steps.length > 0
	}
	addStep(e, t) {
		this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t
	}
	replace(e, t = e, n = S.empty) {
		let i = Vn(this.doc, e, t, n);
		return i && this.step(i), this
	}
	replaceWith(e, t, n) {
		return this.replace(e, t, new S(y.from(n), 0, 0))
	}
	delete(e, t) {
		return this.replace(e, t, S.empty)
	}
	insert(e, t) {
		return this.replaceWith(e, e, t)
	}
	replaceRange(e, t, n) {
		return ra(this, e, t, n), this
	}
	replaceRangeWith(e, t, n) {
		return ia(this, e, t, n), this
	}
	deleteRange(e, t) {
		return sa(this, e, t), this
	}
	lift(e, t) {
		return Vl(this, e, t), this
	}
	join(e, t = 1) {
		return Xl(this, e, t), this
	}
	wrap(e, t) {
		return Wl(this, e, t), this
	}
	setBlockType(e, t = e, n, i = null) {
		return _l(this, e, t, n, i), this
	}
	setNodeMarkup(e, t, n = null, i) {
		return jl(this, e, t, n, i), this
	}
	setNodeAttribute(e, t, n) {
		return this.step(new Xe(e, t, n)), this
	}
	setDocAttribute(e, t) {
		return this.step(new xt(e, t)), this
	}
	addNodeMark(e, t) {
		return this.step(new ke(e, t)), this
	}
	removeNodeMark(e, t) {
		if (!(t instanceof T)) {
			let n = this.doc.nodeAt(e);
			if (!n) throw new RangeError("No node at position " + e);
			if (t = t.isInSet(n.marks), !t) return this
		}
		return this.step(new Ze(e, t)), this
	}
	split(e, t = 1, n) {
		return Gl(this, e, t, n), this
	}
	addMark(e, t, n) {
		return Fl(this, e, t, n), this
	}
	removeMark(e, t, n) {
		return Bl(this, e, t, n), this
	}
	clearIncompatible(e, t, n) {
		return Ui(this, e, t, n), this
	}
}
const un = Object.create(null);
class w {
	constructor(e, t, n) {
		this.$anchor = e, this.$head = t, this.ranges = n || [new la(e.min(t), e.max(t))]
	}
	get anchor() {
		return this.$anchor.pos
	}
	get head() {
		return this.$head.pos
	}
	get from() {
		return this.$from.pos
	}
	get to() {
		return this.$to.pos
	}
	get $from() {
		return this.ranges[0].$from
	}
	get $to() {
		return this.ranges[0].$to
	}
	get empty() {
		let e = this.ranges;
		for (let t = 0; t < e.length; t++)
			if (e[t].$from.pos != e[t].$to.pos) return !1;
		return !0
	}
	content() {
		return this.$from.doc.slice(this.from, this.to, !0)
	}
	replace(e, t = S.empty) {
		let n = t.content.lastChild,
			i = null;
		for (let l = 0; l < t.openEnd; l++) i = n, n = n.lastChild;
		let s = e.steps.length,
			o = this.ranges;
		for (let l = 0; l < o.length; l++) {
			let {
				$from: a,
				$to: c
			} = o[l], h = e.mapping.slice(s);
			e.replaceRange(h.map(a.pos), h.map(c.pos), l ? S.empty : t), l == 0 && Ir(e, s, (n ? n.isInline : i && i.isTextblock) ? -1 : 1)
		}
	}
	replaceWith(e, t) {
		let n = e.steps.length,
			i = this.ranges;
		for (let s = 0; s < i.length; s++) {
			let {
				$from: o,
				$to: l
			} = i[s], a = e.mapping.slice(n), c = a.map(o.pos), h = a.map(l.pos);
			s ? e.deleteRange(c, h) : (e.replaceRangeWith(c, h, t), Ir(e, n, t.isInline ? -1 : 1))
		}
	}
	static findFrom(e, t, n = !1) {
		let i = e.parent.inlineContent ? new M(e) : Ge(e.node(0), e.parent, e.pos, e.index(), t, n);
		if (i) return i;
		for (let s = e.depth - 1; s >= 0; s--) {
			let o = t < 0 ? Ge(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, n) : Ge(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, n);
			if (o) return o
		}
		return null
	}
	static near(e, t = 1) {
		return this.findFrom(e, t) || this.findFrom(e, -t) || new G(e.node(0))
	}
	static atStart(e) {
		return Ge(e, e, 0, 0, 1) || new G(e)
	}
	static atEnd(e) {
		return Ge(e, e, e.content.size, e.childCount, -1) || new G(e)
	}
	static fromJSON(e, t) {
		if (!t || !t.type) throw new RangeError("Invalid input for Selection.fromJSON");
		let n = un[t.type];
		if (!n) throw new RangeError(`No selection type ${t.type} defined`);
		return n.fromJSON(e, t)
	}
	static jsonID(e, t) {
		if (e in un) throw new RangeError("Duplicate use of selection JSON ID " + e);
		return un[e] = t, t.prototype.jsonID = e, t
	}
	getBookmark() {
		return M.between(this.$anchor, this.$head).getBookmark()
	}
}
w.prototype.visible = !0;
class la {
	constructor(e, t) {
		this.$from = e, this.$to = t
	}
}
let Ar = !1;

function Rr(r) {
	!Ar && !r.parent.inlineContent && (Ar = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + r.parent.type.name + ")"))
}
class M extends w {
	constructor(e, t = e) {
		Rr(e), Rr(t), super(e, t)
	}
	get $cursor() {
		return this.$anchor.pos == this.$head.pos ? this.$head : null
	}
	map(e, t) {
		let n = e.resolve(t.map(this.head));
		if (!n.parent.inlineContent) return w.near(n);
		let i = e.resolve(t.map(this.anchor));
		return new M(i.parent.inlineContent ? i : n, n)
	}
	replace(e, t = S.empty) {
		if (super.replace(e, t), t == S.empty) {
			let n = this.$from.marksAcross(this.$to);
			n && e.ensureMarks(n)
		}
	}
	eq(e) {
		return e instanceof M && e.anchor == this.anchor && e.head == this.head
	}
	getBookmark() {
		return new Xt(this.anchor, this.head)
	}
	toJSON() {
		return {
			type: "text",
			anchor: this.anchor,
			head: this.head
		}
	}
	static fromJSON(e, t) {
		if (typeof t.anchor != "number" || typeof t.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
		return new M(e.resolve(t.anchor), e.resolve(t.head))
	}
	static create(e, t, n = t) {
		let i = e.resolve(t);
		return new this(i, n == t ? i : e.resolve(n))
	}
	static between(e, t, n) {
		let i = e.pos - t.pos;
		if ((!n || i) && (n = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
			let s = w.findFrom(t, n, !0) || w.findFrom(t, -n, !0);
			if (s) t = s.$head;
			else return w.near(t, n)
		}
		return e.parent.inlineContent || (i == 0 ? e = t : (e = (w.findFrom(e, -n, !0) || w.findFrom(e, n, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new M(e, t)
	}
}
w.jsonID("text", M);
class Xt {
	constructor(e, t) {
		this.anchor = e, this.head = t
	}
	map(e) {
		return new Xt(e.map(this.anchor), e.map(this.head))
	}
	resolve(e) {
		return M.between(e.resolve(this.anchor), e.resolve(this.head))
	}
}
class b extends w {
	constructor(e) {
		let t = e.nodeAfter,
			n = e.node(0).resolve(e.pos + t.nodeSize);
		super(e, n), this.node = t
	}
	map(e, t) {
		let {
			deleted: n,
			pos: i
		} = t.mapResult(this.anchor), s = e.resolve(i);
		return n ? w.near(s) : new b(s)
	}
	content() {
		return new S(y.from(this.node), 0, 0)
	}
	eq(e) {
		return e instanceof b && e.anchor == this.anchor
	}
	toJSON() {
		return {
			type: "node",
			anchor: this.anchor
		}
	}
	getBookmark() {
		return new qn(this.anchor)
	}
	static fromJSON(e, t) {
		if (typeof t.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
		return new b(e.resolve(t.anchor))
	}
	static create(e, t) {
		return new b(e.resolve(t))
	}
	static isSelectable(e) {
		return !e.isText && e.type.spec.selectable !== !1
	}
}
b.prototype.visible = !1;
w.jsonID("node", b);
class qn {
	constructor(e) {
		this.anchor = e
	}
	map(e) {
		let {
			deleted: t,
			pos: n
		} = e.mapResult(this.anchor);
		return t ? new Xt(n, n) : new qn(n)
	}
	resolve(e) {
		let t = e.resolve(this.anchor),
			n = t.nodeAfter;
		return n && b.isSelectable(n) ? new b(t) : w.near(t)
	}
}
class G extends w {
	constructor(e) {
		super(e.resolve(0), e.resolve(e.content.size))
	}
	replace(e, t = S.empty) {
		if (t == S.empty) {
			e.delete(0, e.doc.content.size);
			let n = w.atStart(e.doc);
			n.eq(e.selection) || e.setSelection(n)
		} else super.replace(e, t)
	}
	toJSON() {
		return {
			type: "all"
		}
	}
	static fromJSON(e) {
		return new G(e)
	}
	map(e) {
		return new G(e)
	}
	eq(e) {
		return e instanceof G
	}
	getBookmark() {
		return aa
	}
}
w.jsonID("all", G);
const aa = {
	map() {
		return this
	},
	resolve(r) {
		return new G(r)
	}
};

function Ge(r, e, t, n, i, s = !1) {
	if (e.inlineContent) return M.create(r, t);
	for (let o = n - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
		let l = e.child(o);
		if (l.isAtom) {
			if (!s && b.isSelectable(l)) return b.create(r, t - (i < 0 ? l.nodeSize : 0))
		} else {
			let a = Ge(r, l, t + i, i < 0 ? l.childCount : 0, i, s);
			if (a) return a
		}
		t += l.nodeSize * i
	}
	return null
}

function Ir(r, e, t) {
	let n = r.steps.length - 1;
	if (n < e) return;
	let i = r.steps[n];
	if (!(i instanceof B || i instanceof j)) return;
	let s = r.mapping.maps[n],
		o;
	s.forEach((l, a, c, h) => {
		o == null && (o = h)
	}), r.setSelection(w.near(r.doc.resolve(o), t))
}
const Pr = 1,
	zr = 2,
	vr = 4;
class ca extends oa {
	constructor(e) {
		super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks
	}
	get selection() {
		return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection
	}
	setSelection(e) {
		if (e.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
		return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Pr) & -3, this.storedMarks = null, this
	}
	get selectionSet() {
		return (this.updated & Pr) > 0
	}
	setStoredMarks(e) {
		return this.storedMarks = e, this.updated |= zr, this
	}
	ensureMarks(e) {
		return T.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this
	}
	addStoredMark(e) {
		return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()))
	}
	removeStoredMark(e) {
		return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()))
	}
	get storedMarksSet() {
		return (this.updated & zr) > 0
	}
	addStep(e, t) {
		super.addStep(e, t), this.updated = this.updated & -3, this.storedMarks = null
	}
	setTime(e) {
		return this.time = e, this
	}
	replaceSelection(e) {
		return this.selection.replace(this, e), this
	}
	replaceSelectionWith(e, t = !0) {
		let n = this.selection;
		return t && (e = e.mark(this.storedMarks || (n.empty ? n.$from.marks() : n.$from.marksAcross(n.$to) || T.none))), n.replaceWith(this, e), this
	}
	deleteSelection() {
		return this.selection.replace(this), this
	}
	insertText(e, t, n) {
		let i = this.doc.type.schema;
		if (t == null) return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
		{
			if (n == null && (n = t), n = n ?? t, !e) return this.deleteRange(t, n);
			let s = this.storedMarks;
			if (!s) {
				let o = this.doc.resolve(t);
				s = n == t ? o.marks() : o.marksAcross(this.doc.resolve(n))
			}
			return this.replaceRangeWith(t, n, i.text(e, s)), this.selection.empty || this.setSelection(w.near(this.selection.$to)), this
		}
	}
	setMeta(e, t) {
		return this.meta[typeof e == "string" ? e : e.key] = t, this
	}
	getMeta(e) {
		return this.meta[typeof e == "string" ? e : e.key]
	}
	get isGeneric() {
		for (let e in this.meta) return !1;
		return !0
	}
	scrollIntoView() {
		return this.updated |= vr, this
	}
	get scrolledIntoView() {
		return (this.updated & vr) > 0
	}
}

function Fr(r, e) {
	return !e || !r ? r : r.bind(e)
}
class ft {
	constructor(e, t, n) {
		this.name = e, this.init = Fr(t.init, n), this.apply = Fr(t.apply, n)
	}
}
const ha = [new ft("doc", {
	init(r) {
		return r.doc || r.schema.topNodeType.createAndFill()
	},
	apply(r) {
		return r.doc
	}
}), new ft("selection", {
	init(r, e) {
		return r.selection || w.atStart(e.doc)
	},
	apply(r) {
		return r.selection
	}
}), new ft("storedMarks", {
	init(r) {
		return r.storedMarks || null
	},
	apply(r, e, t, n) {
		return n.selection.$cursor ? r.storedMarks : null
	}
}), new ft("scrollToSelection", {
	init() {
		return 0
	},
	apply(r, e) {
		return r.scrolledIntoView ? e + 1 : e
	}
})];
class dn {
	constructor(e, t) {
		this.schema = e, this.plugins = [], this.pluginsByKey = Object.create(null), this.fields = ha.slice(), t && t.forEach(n => {
			if (this.pluginsByKey[n.key]) throw new RangeError("Adding different instances of a keyed plugin (" + n.key + ")");
			this.plugins.push(n), this.pluginsByKey[n.key] = n, n.spec.state && this.fields.push(new ft(n.key, n.spec.state, n))
		})
	}
}
class ut {
	constructor(e) {
		this.config = e
	}
	get schema() {
		return this.config.schema
	}
	get plugins() {
		return this.config.plugins
	}
	apply(e) {
		return this.applyTransaction(e).state
	}
	filterTransaction(e, t = -1) {
		for (let n = 0; n < this.config.plugins.length; n++)
			if (n != t) {
				let i = this.config.plugins[n];
				if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this)) return !1
			} return !0
	}
	applyTransaction(e) {
		if (!this.filterTransaction(e)) return {
			state: this,
			transactions: []
		};
		let t = [e],
			n = this.applyInner(e),
			i = null;
		for (;;) {
			let s = !1;
			for (let o = 0; o < this.config.plugins.length; o++) {
				let l = this.config.plugins[o];
				if (l.spec.appendTransaction) {
					let a = i ? i[o].n : 0,
						c = i ? i[o].state : this,
						h = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, n);
					if (h && n.filterTransaction(h, o)) {
						if (h.setMeta("appendedTransaction", e), !i) {
							i = [];
							for (let f = 0; f < this.config.plugins.length; f++) i.push(f < o ? {
								state: n,
								n: t.length
							} : {
								state: this,
								n: 0
							})
						}
						t.push(h), n = n.applyInner(h), s = !0
					}
					i && (i[o] = {
						state: n,
						n: t.length
					})
				}
			}
			if (!s) return {
				state: n,
				transactions: t
			}
		}
	}
	applyInner(e) {
		if (!e.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
		let t = new ut(this.config),
			n = this.config.fields;
		for (let i = 0; i < n.length; i++) {
			let s = n[i];
			t[s.name] = s.apply(e, this[s.name], this, t)
		}
		return t
	}
	get tr() {
		return new ca(this)
	}
	static create(e) {
		let t = new dn(e.doc ? e.doc.type.schema : e.schema, e.plugins),
			n = new ut(t);
		for (let i = 0; i < t.fields.length; i++) n[t.fields[i].name] = t.fields[i].init(e, n);
		return n
	}
	reconfigure(e) {
		let t = new dn(this.schema, e.plugins),
			n = t.fields,
			i = new ut(t);
		for (let s = 0; s < n.length; s++) {
			let o = n[s].name;
			i[o] = this.hasOwnProperty(o) ? this[o] : n[s].init(e, i)
		}
		return i
	}
	toJSON(e) {
		let t = {
			doc: this.doc.toJSON(),
			selection: this.selection.toJSON()
		};
		if (this.storedMarks && (t.storedMarks = this.storedMarks.map(n => n.toJSON())), e && typeof e == "object")
			for (let n in e) {
				if (n == "doc" || n == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
				let i = e[n],
					s = i.spec.state;
				s && s.toJSON && (t[n] = s.toJSON.call(i, this[i.key]))
			}
		return t
	}
	static fromJSON(e, t, n) {
		if (!t) throw new RangeError("Invalid input for EditorState.fromJSON");
		if (!e.schema) throw new RangeError("Required config field 'schema' missing");
		let i = new dn(e.schema, e.plugins),
			s = new ut(i);
		return i.fields.forEach(o => {
			if (o.name == "doc") s.doc = oe.fromJSON(e.schema, t.doc);
			else if (o.name == "selection") s.selection = w.fromJSON(s.doc, t.selection);
			else if (o.name == "storedMarks") t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
			else {
				if (n)
					for (let l in n) {
						let a = n[l],
							c = a.spec.state;
						if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
							s[o.name] = c.fromJSON.call(a, e, t[l], s);
							return
						}
					}
				s[o.name] = o.init(e, s)
			}
		}), s
	}
}

function Zi(r, e, t) {
	for (let n in r) {
		let i = r[n];
		i instanceof Function ? i = i.bind(e) : n == "handleDOMEvents" && (i = Zi(i, e, {})), t[n] = i
	}
	return t
}
class Te {
	constructor(e) {
		this.spec = e, this.props = {}, e.props && Zi(e.props, this, this.props), this.key = e.key ? e.key.key : es("plugin")
	}
	getState(e) {
		return e[this.key]
	}
}
const pn = Object.create(null);

function es(r) {
	return r in pn ? r + "$" + ++pn[r] : (pn[r] = 0, r + "$")
}
class it {
	constructor(e = "key") {
		this.key = es(e)
	}
	get(e) {
		return e.config.pluginsByKey[this.key]
	}
	getState(e) {
		return e[this.key]
	}
}
const ts = new it("transactionEventPlugin"),
	Br = "prosemirrorDispatchTransaction";

function Lr(r, e) {
	const {
		eventTarget: t
	} = ts.getState(r.state);
	return t.addEventListener(Br, e), () => {
		t.removeEventListener(Br, e)
	}
}

function Ah(r) {
	return new Te({
		key: ts,
		state: {
			init() {
				return {
					eventTarget: r
				}
			},
			apply(e, t) {
				return t
			}
		}
	})
}
const Vt = new it("customKeymapPlugin");

function fa(r, e) {
	r.dispatch(r.state.tr.setMeta(Vt, {
		handlers: e
	}))
}

function Rh(r = {
	handlers: {}
}) {
	return new Te({
		key: Vt,
		state: {
			init() {
				return {
					...r
				}
			},
			apply(e, t) {
				const n = e.getMeta(Vt);
				return n ? {
					...t,
					...n
				} : t
			}
		},
		props: {
			handleKeyDown(e, t) {
				if (so(t)) return !1;
				const i = Vt.getState(e.state).handlers[t.key];
				return i ? i(t) : !1
			}
		}
	})
}
const ns = new it("contentReference"),
	Ih = r => {
		const e = oo(r).map(({
			newContentReference: t
		}) => t);
		return new Te({
			key: ns,
			state: {
				init: (t, {
					doc: n
				}) => ({
					displayedContentReferences: e
				}),
				apply: (t, n) => n
			},
			props: {}
		})
	},
	rs = (r, e) => r.selection.empty ? !1 : (e && e(r.tr.deleteSelection().scrollIntoView()), !0);

function ua(r, e) {
	let {
		$cursor: t
	} = r.selection;
	return !t || (e ? !e.endOfTextblock("backward", r) : t.parentOffset > 0) ? null : t
}
const Kn = (r, e, t) => {
	let n = ua(r, t);
	if (!n) return !1;
	let i = is(n);
	if (!i) {
		let o = n.blockRange(),
			l = o && Ln(o);
		return l == null ? !1 : (e && e(r.tr.lift(o, l).scrollIntoView()), !0)
	}
	let s = i.nodeBefore;
	if (!s.type.spec.isolating && hs(r, i, e)) return !0;
	if (n.parent.content.size == 0 && (tt(s, "end") || b.isSelectable(s))) {
		let o = Vn(r.doc, n.before(), n.after(), S.empty);
		if (o && o.slice.size < o.to - o.from) {
			if (e) {
				let l = r.tr.step(o);
				l.setSelection(tt(s, "end") ? w.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : b.create(l.doc, i.pos - s.nodeSize)), e(l.scrollIntoView())
			}
			return !0
		}
	}
	return s.isAtom && i.depth == n.depth - 1 ? (e && e(r.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1
};

function tt(r, e, t = !1) {
	for (let n = r; n; n = e == "start" ? n.firstChild : n.lastChild) {
		if (n.isTextblock) return !0;
		if (t && n.childCount != 1) return !1
	}
	return !1
}
const da = (r, e, t) => {
	let {
		$head: n,
		empty: i
	} = r.selection, s = n;
	if (!i) return !1;
	if (n.parent.isTextblock) {
		if (t ? !t.endOfTextblock("backward", r) : n.parentOffset > 0) return !1;
		s = is(n)
	}
	let o = s && s.nodeBefore;
	return !o || !b.isSelectable(o) ? !1 : (e && e(r.tr.setSelection(b.create(r.doc, s.pos - o.nodeSize)).scrollIntoView()), !0)
};

function is(r) {
	if (!r.parent.type.spec.isolating)
		for (let e = r.depth - 1; e >= 0; e--) {
			if (r.index(e) > 0) return r.doc.resolve(r.before(e + 1));
			if (r.node(e).type.spec.isolating) break
		}
	return null
}

function pa(r, e) {
	let {
		$cursor: t
	} = r.selection;
	return !t || (e ? !e.endOfTextblock("forward", r) : t.parentOffset < t.parent.content.size) ? null : t
}
const ma = (r, e, t) => {
		let n = pa(r, t);
		if (!n) return !1;
		let i = ss(n);
		if (!i) return !1;
		let s = i.nodeAfter;
		if (hs(r, i, e)) return !0;
		if (n.parent.content.size == 0 && (tt(s, "start") || b.isSelectable(s))) {
			let o = Vn(r.doc, n.before(), n.after(), S.empty);
			if (o && o.slice.size < o.to - o.from) {
				if (e) {
					let l = r.tr.step(o);
					l.setSelection(tt(s, "start") ? w.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : b.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView())
				}
				return !0
			}
		}
		return s.isAtom && i.depth == n.depth - 1 ? (e && e(r.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1
	},
	ga = (r, e, t) => {
		let {
			$head: n,
			empty: i
		} = r.selection, s = n;
		if (!i) return !1;
		if (n.parent.isTextblock) {
			if (t ? !t.endOfTextblock("forward", r) : n.parentOffset < n.parent.content.size) return !1;
			s = ss(n)
		}
		let o = s && s.nodeAfter;
		return !o || !b.isSelectable(o) ? !1 : (e && e(r.tr.setSelection(b.create(r.doc, s.pos)).scrollIntoView()), !0)
	};

function ss(r) {
	if (!r.parent.type.spec.isolating)
		for (let e = r.depth - 1; e >= 0; e--) {
			let t = r.node(e);
			if (r.index(e) + 1 < t.childCount) return r.doc.resolve(r.after(e + 1));
			if (t.type.spec.isolating) break
		}
	return null
}
const ya = (r, e) => {
	let {
		$head: t,
		$anchor: n
	} = r.selection;
	return !t.parent.type.spec.code || !t.sameParent(n) ? !1 : (e && e(r.tr.insertText(`
`).scrollIntoView()), !0)
};

function Jn(r) {
	for (let e = 0; e < r.edgeCount; e++) {
		let {
			type: t
		} = r.edge(e);
		if (t.isTextblock && !t.hasRequiredAttrs()) return t
	}
	return null
}
const Sa = (r, e) => {
		let {
			$head: t,
			$anchor: n
		} = r.selection;
		if (!t.parent.type.spec.code || !t.sameParent(n)) return !1;
		let i = t.node(-1),
			s = t.indexAfter(-1),
			o = Jn(i.contentMatchAt(s));
		if (!o || !i.canReplaceWith(s, s, o)) return !1;
		if (e) {
			let l = t.after(),
				a = r.tr.replaceWith(l, l, o.createAndFill());
			a.setSelection(w.near(a.doc.resolve(l), 1)), e(a.scrollIntoView())
		}
		return !0
	},
	ls = (r, e) => {
		let t = r.selection,
			{
				$from: n,
				$to: i
			} = t;
		if (t instanceof G || n.parent.inlineContent || i.parent.inlineContent) return !1;
		let s = Jn(i.parent.contentMatchAt(i.indexAfter()));
		if (!s || !s.isTextblock) return !1;
		if (e) {
			let o = (!n.parentOffset && i.index() < i.parent.childCount ? n : i).pos,
				l = r.tr.insert(o, s.createAndFill());
			l.setSelection(M.create(l.doc, o + 1)), e(l.scrollIntoView())
		}
		return !0
	},
	as = (r, e) => {
		let {
			$cursor: t
		} = r.selection;
		if (!t || t.parent.content.size) return !1;
		if (t.depth > 1 && t.after() != t.end(-1)) {
			let s = t.before();
			if (Lt(r.doc, s)) return e && e(r.tr.split(s).scrollIntoView()), !0
		}
		let n = t.blockRange(),
			i = n && Ln(n);
		return i == null ? !1 : (e && e(r.tr.lift(n, i).scrollIntoView()), !0)
	};

function ka(r) {
	return (e, t) => {
		let {
			$from: n,
			$to: i
		} = e.selection;
		if (e.selection instanceof b && e.selection.node.isBlock) return !n.parentOffset || !Lt(e.doc, n.pos) ? !1 : (t && t(e.tr.split(n.pos).scrollIntoView()), !0);
		if (!n.parent.isBlock) return !1;
		if (t) {
			let s = i.parentOffset == i.parent.content.size,
				o = e.tr;
			(e.selection instanceof M || e.selection instanceof G) && o.deleteSelection();
			let l = n.depth == 0 ? null : Jn(n.node(-1).contentMatchAt(n.indexAfter(-1))),
				a = s && l ? [{
					type: l
				}] : void 0,
				c = Lt(o.doc, o.mapping.map(n.pos), 1, a);
			if (!a && !c && Lt(o.doc, o.mapping.map(n.pos), 1, l ? [{
					type: l
				}] : void 0) && (l && (a = [{
					type: l
				}]), c = !0), c && (o.split(o.mapping.map(n.pos), 1, a), !s && !n.parentOffset && n.parent.type != l)) {
				let h = o.mapping.map(n.before()),
					f = o.doc.resolve(h);
				l && n.node(-1).canReplaceWith(f.index(), f.index() + 1, l) && o.setNodeMarkup(o.mapping.map(n.before()), l)
			}
			t(o.scrollIntoView())
		}
		return !0
	}
}
const cs = ka(),
	xa = (r, e) => (e && e(r.tr.setSelection(new G(r.doc))), !0);

function ba(r, e, t) {
	let n = e.nodeBefore,
		i = e.nodeAfter,
		s = e.index();
	return !n || !i || !n.type.compatibleContent(i.type) ? !1 : !n.content.size && e.parent.canReplace(s - 1, s) ? (t && t(r.tr.delete(e.pos - n.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || ji(r.doc, e.pos)) ? !1 : (t && t(r.tr.clearIncompatible(e.pos, n.type, n.contentMatchAt(n.childCount)).join(e.pos).scrollIntoView()), !0)
}

function hs(r, e, t) {
	let n = e.nodeBefore,
		i = e.nodeAfter,
		s, o;
	if (n.type.spec.isolating || i.type.spec.isolating) return !1;
	if (ba(r, e, t)) return !0;
	let l = e.parent.canReplace(e.index(), e.index() + 1);
	if (l && (s = (o = n.contentMatchAt(n.childCount)).findWrapping(i.type)) && o.matchType(s[0] || i.type).validEnd) {
		if (t) {
			let f = e.pos + i.nodeSize,
				u = y.empty;
			for (let m = s.length - 1; m >= 0; m--) u = y.from(s[m].create(null, u));
			u = y.from(n.copy(u));
			let p = r.tr.step(new j(e.pos - 1, f, e.pos, f, new S(u, 1, 0), s.length, !0)),
				d = f + 2 * s.length;
			ji(p.doc, d) && p.join(d), t(p.scrollIntoView())
		}
		return !0
	}
	let a = w.findFrom(e, 1),
		c = a && a.$from.blockRange(a.$to),
		h = c && Ln(c);
	if (h != null && h >= e.depth) return t && t(r.tr.lift(c, h).scrollIntoView()), !0;
	if (l && tt(i, "start", !0) && tt(n, "end")) {
		let f = n,
			u = [];
		for (; u.push(f), !f.isTextblock;) f = f.lastChild;
		let p = i,
			d = 1;
		for (; !p.isTextblock; p = p.firstChild) d++;
		if (f.canReplace(f.childCount, f.childCount, p.content)) {
			if (t) {
				let m = y.empty;
				for (let k = u.length - 1; k >= 0; k--) m = y.from(u[k].copy(m));
				let g = r.tr.step(new j(e.pos - u.length, e.pos + i.nodeSize, e.pos + d, e.pos + i.nodeSize - d, new S(m, u.length, 0), 0, !0));
				t(g.scrollIntoView())
			}
			return !0
		}
	}
	return !1
}

function fs(r) {
	return function(e, t) {
		let n = e.selection,
			i = r < 0 ? n.$from : n.$to,
			s = i.depth;
		for (; i.node(s).isInline;) {
			if (!s) return !1;
			s--
		}
		return i.node(s).isTextblock ? (t && t(e.tr.setSelection(M.create(e.doc, r < 0 ? i.start(s) : i.end(s)))), !0) : !1
	}
}
const Ca = fs(-1),
	wa = fs(1);

function Ph(r, e = null) {
	return function(t, n) {
		let {
			$from: i,
			$to: s
		} = t.selection, o = i.blockRange(s), l = o && ql(o, r, e);
		return l ? (n && n(t.tr.wrap(o, l).scrollIntoView()), !0) : !1
	}
}

function zh(r, e = null) {
	return function(t, n) {
		let i = !1;
		for (let s = 0; s < t.selection.ranges.length && !i; s++) {
			let {
				$from: {
					pos: o
				},
				$to: {
					pos: l
				}
			} = t.selection.ranges[s];
			t.doc.nodesBetween(o, l, (a, c) => {
				if (i) return !1;
				if (!(!a.isTextblock || a.hasMarkup(r, e)))
					if (a.type == r) i = !0;
					else {
						let h = t.doc.resolve(c),
							f = h.index();
						i = h.parent.canReplaceWith(f, f + 1, r)
					}
			})
		}
		if (!i) return !1;
		if (n) {
			let s = t.tr;
			for (let o = 0; o < t.selection.ranges.length; o++) {
				let {
					$from: {
						pos: l
					},
					$to: {
						pos: a
					}
				} = t.selection.ranges[o];
				s.setBlockType(l, a, r, e)
			}
			n(s.scrollIntoView())
		}
		return !0
	}
}

function Ma(r, e, t) {
	for (let n = 0; n < e.length; n++) {
		let {
			$from: i,
			$to: s
		} = e[n], o = i.depth == 0 ? r.inlineContent && r.type.allowsMarkType(t) : !1;
		if (r.nodesBetween(i.pos, s.pos, l => {
				if (o) return !1;
				o = l.inlineContent && l.type.allowsMarkType(t)
			}), o) return !0
	}
	return !1
}

function vh(r, e = null) {
	return function(t, n) {
		let {
			empty: i,
			$cursor: s,
			ranges: o
		} = t.selection;
		if (i && !s || !Ma(t.doc, o, r)) return !1;
		if (n)
			if (s) r.isInSet(t.storedMarks || s.marks()) ? n(t.tr.removeStoredMark(r)) : n(t.tr.addStoredMark(r.create(e)));
			else {
				let l = !1,
					a = t.tr;
				for (let c = 0; !l && c < o.length; c++) {
					let {
						$from: h,
						$to: f
					} = o[c];
					l = t.doc.rangeHasMark(h.pos, f.pos, r)
				}
				for (let c = 0; c < o.length; c++) {
					let {
						$from: h,
						$to: f
					} = o[c];
					if (l) a.removeMark(h.pos, f.pos, r);
					else {
						let u = h.pos,
							p = f.pos,
							d = h.nodeAfter,
							m = f.nodeBefore,
							g = d && d.isText ? /^\s*/.exec(d.text)[0].length : 0,
							k = m && m.isText ? /\s*$/.exec(m.text)[0].length : 0;
						u + g < p && (u += g, p -= k), a.addMark(u, p, r.create(e))
					}
				}
				n(a.scrollIntoView())
			} return !0
	}
}

function Qt(...r) {
	return function(e, t, n) {
		for (let i = 0; i < r.length; i++)
			if (r[i](e, t, n)) return !0;
		return !1
	}
}
let mn = Qt(rs, Kn, da),
	Vr = Qt(rs, ma, ga);
const fe = {
		Enter: Qt(ya, ls, as, cs),
		"Mod-Enter": Sa,
		Backspace: mn,
		"Mod-Backspace": mn,
		"Shift-Backspace": mn,
		Delete: Vr,
		"Mod-Delete": Vr,
		"Mod-a": xa
	},
	us = {
		"Ctrl-h": fe.Backspace,
		"Alt-Backspace": fe["Mod-Backspace"],
		"Ctrl-d": fe.Delete,
		"Ctrl-Alt-Backspace": fe["Mod-Delete"],
		"Alt-Delete": fe["Mod-Delete"],
		"Alt-d": fe["Mod-Delete"],
		"Ctrl-a": Ca,
		"Ctrl-e": wa
	};
for (let r in fe) us[r] = fe[r];
const Ta = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform ? os.platform() == "darwin" : !1,
	Fh = Ta ? us : fe;

function Na(r) {
	let e = "",
		t = !1;
	const n = [];

	function i(s) {
		if (t = !1, s.type.name === "paragraph") return s.descendants(o => i(o)), e += `
`, t = !0, !1;
		if (s.type.name === "command_token") {
			const o = s.textContent;
			return n.push({
				symbol: lo.SystemHint,
				startIndex: e.length,
				endIndex: e.length + o.length
			}), e += o, !1
		} else s.isText && s.text !== void 0 && (e += s.text)
	}
	return r.descendants(s => i(s)), t && e.endsWith(`
`) && (e = e.slice(0, -1)), {
		content: e,
		metadata: {
			custom_symbol_offsets: n
		}
	}
}

function Oa(r) {
	return Na(r.state.doc)
}
const Wn = Qt(ls, as, cs);
async function Bh(r, e, t = !1) {
	if (t) {
		Ea(r, e);
		return
	}
	const {
		schema: n
	} = r.state, i = e.split(`
`);
	if (r.dispatch(r.state.tr.deleteSelection()), r.dispatch(r.state.tr.insertText(i[0])), i.length > 1) {
		Wn(r.state, r.dispatch);
		const s = i.slice(1),
			o = y.fromArray(s.map(a => n.nodes.paragraph.create(null, a === "" ? null : n.text(a)))),
			l = new S(o, 0, 0);
		r.dispatch(r.state.tr.replaceSelection(l)), Kn(r.state, r.dispatch, r)
	}
}
const Da = /oaicite:(\d+)/g;
async function Ea(r, e) {
	const {
		schema: t
	} = r.state, n = e.split(`
`);
	r.dispatch(r.state.tr.deleteSelection());
	const {
		tr: i
	} = r.state, {
		$from: s
	} = i.selection;
	s.parent.isTextblock || (i.insert(s.pos, t.nodes.paragraph.create()), r.dispatch(i), r.focus());
	const {
		selection: o
	} = r.state, {
		$from: l
	} = o, a = n[0], c = qr(a, t, r), h = y.fromArray(c);
	let f = h;
	l.parent.type.validContent(h) || (f = t.nodes.paragraph.create(null, h));
	const u = new S(y.from(f), 0, 0);
	if (r.dispatch(r.state.tr.replaceSelection(u)), n.length > 1) {
		Wn(r.state, r.dispatch);
		const d = n.slice(1).map(k => {
				const O = qr(k, t, r);
				return t.nodes.paragraph.create(null, O)
			}),
			m = y.fromArray(d),
			g = new S(m, 0, 0);
		r.dispatch(r.state.tr.replaceSelection(g)), Kn(r.state, r.dispatch, r)
	}
}

function qr(r, e, t) {
	const n = [];
	let i = 0,
		s;
	if (!!!ns.get(t.state)) return [e.text(r)];
	for (;
		(s = Da.exec(r)) !== null;) {
		if (s.index > i) {
			const c = r.slice(i, s.index);
			n.push(e.text(c))
		}
		const l = s[1],
			a = Aa(l, e);
		n.push(a), i = s.index + s[0].length
	}
	if (i < r.length) {
		const l = r.slice(i);
		n.push(e.text(l))
	}
	return n
}

function Aa(r, e) {
	const t = Ko({
		value: "oaicite:" + r
	}, e);
	if (t == null) throw new Error("Failed to create text node for content reference");
	const n = {
			index: r,
			displayLayout: "inline"
		},
		i = y.fromArray([t]);
	return e.nodes.contentReference.create(n, i)
}
const Lh = r => ao(r).checkGate("223382091"),
	P = function(r) {
		for (var e = 0;; e++)
			if (r = r.previousSibling, !r) return e
	},
	bt = function(r) {
		let e = r.assignedSlot || r.parentNode;
		return e && e.nodeType == 11 ? e.host : e
	};
let Mn = null;
const he = function(r, e, t) {
		let n = Mn || (Mn = document.createRange());
		return n.setEnd(r, t ?? r.nodeValue.length), n.setStart(r, e || 0), n
	},
	Ra = function() {
		Mn = null
	},
	Le = function(r, e, t, n) {
		return t && (Kr(r, e, t, n, -1) || Kr(r, e, t, n, 1))
	},
	Ia = /^(img|br|input|textarea|hr)$/i;

function Kr(r, e, t, n, i) {
	for (;;) {
		if (r == t && e == n) return !0;
		if (e == (i < 0 ? 0 : ie(r))) {
			let s = r.parentNode;
			if (!s || s.nodeType != 1 || Nt(r) || Ia.test(r.nodeName) || r.contentEditable == "false") return !1;
			e = P(r) + (i < 0 ? 0 : 1), r = s
		} else if (r.nodeType == 1) {
			if (r = r.childNodes[e + (i < 0 ? -1 : 0)], r.contentEditable == "false") return !1;
			e = i < 0 ? ie(r) : 0
		} else return !1
	}
}

function ie(r) {
	return r.nodeType == 3 ? r.nodeValue.length : r.childNodes.length
}

function Pa(r, e) {
	for (;;) {
		if (r.nodeType == 3 && e) return r;
		if (r.nodeType == 1 && e > 0) {
			if (r.contentEditable == "false") return null;
			r = r.childNodes[e - 1], e = ie(r)
		} else if (r.parentNode && !Nt(r)) e = P(r), r = r.parentNode;
		else return null
	}
}

function za(r, e) {
	for (;;) {
		if (r.nodeType == 3 && e < r.nodeValue.length) return r;
		if (r.nodeType == 1 && e < r.childNodes.length) {
			if (r.contentEditable == "false") return null;
			r = r.childNodes[e], e = 0
		} else if (r.parentNode && !Nt(r)) e = P(r) + 1, r = r.parentNode;
		else return null
	}
}

function va(r, e, t) {
	for (let n = e == 0, i = e == ie(r); n || i;) {
		if (r == t) return !0;
		let s = P(r);
		if (r = r.parentNode, !r) return !1;
		n = n && s == 0, i = i && s == ie(r)
	}
}

function Nt(r) {
	let e;
	for (let t = r; t && !(e = t.pmViewDesc); t = t.parentNode);
	return e && e.node && e.node.isBlock && (e.dom == r || e.contentDOM == r)
}
const Zt = function(r) {
	return r.focusNode && Le(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset)
};

function Ee(r, e) {
	let t = document.createEvent("Event");
	return t.initEvent("keydown", !0, !0), t.keyCode = r, t.key = t.code = e, t
}

function Fa(r) {
	let e = r.activeElement;
	for (; e && e.shadowRoot;) e = e.shadowRoot.activeElement;
	return e
}

function Ba(r, e, t) {
	if (r.caretPositionFromPoint) try {
		let n = r.caretPositionFromPoint(e, t);
		if (n) return {
			node: n.offsetNode,
			offset: n.offset
		}
	} catch {}
	if (r.caretRangeFromPoint) {
		let n = r.caretRangeFromPoint(e, t);
		if (n) return {
			node: n.startContainer,
			offset: n.startOffset
		}
	}
}
const le = typeof navigator < "u" ? navigator : null,
	Jr = typeof document < "u" ? document : null,
	Ne = le && le.userAgent || "",
	Tn = /Edge\/(\d+)/.exec(Ne),
	ds = /MSIE \d/.exec(Ne),
	Nn = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Ne),
	H = !!(ds || Nn || Tn),
	be = ds ? document.documentMode : Nn ? +Nn[1] : Tn ? +Tn[1] : 0,
	te = !H && /gecko\/(\d+)/i.test(Ne);
te && +(/Firefox\/(\d+)/.exec(Ne) || [0, 0])[1];
const On = !H && /Chrome\/(\d+)/.exec(Ne),
	L = !!On,
	ps = On ? +On[1] : 0,
	K = !H && !!le && /Apple Computer/.test(le.vendor),
	nt = K && (/Mobile\/\w+/.test(Ne) || !!le && le.maxTouchPoints > 2),
	X = nt || (le ? /Mac/.test(le.platform) : !1),
	La = le ? /Win/.test(le.platform) : !1,
	ee = /Android \d/.test(Ne),
	Ot = !!Jr && "webkitFontSmoothing" in Jr.documentElement.style,
	Va = Ot ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;

function qa(r) {
	let e = r.defaultView && r.defaultView.visualViewport;
	return e ? {
		left: 0,
		right: e.width,
		top: 0,
		bottom: e.height
	} : {
		left: 0,
		right: r.documentElement.clientWidth,
		top: 0,
		bottom: r.documentElement.clientHeight
	}
}

function ce(r, e) {
	return typeof r == "number" ? r : r[e]
}

function Ka(r) {
	let e = r.getBoundingClientRect(),
		t = e.width / r.offsetWidth || 1,
		n = e.height / r.offsetHeight || 1;
	return {
		left: e.left,
		right: e.left + r.clientWidth * t,
		top: e.top,
		bottom: e.top + r.clientHeight * n
	}
}

function Wr(r, e, t) {
	let n = r.someProp("scrollThreshold") || 0,
		i = r.someProp("scrollMargin") || 5,
		s = r.dom.ownerDocument;
	for (let o = t || r.dom; o; o = bt(o)) {
		if (o.nodeType != 1) continue;
		let l = o,
			a = l == s.body,
			c = a ? qa(s) : Ka(l),
			h = 0,
			f = 0;
		if (e.top < c.top + ce(n, "top") ? f = -(c.top - e.top + ce(i, "top")) : e.bottom > c.bottom - ce(n, "bottom") && (f = e.bottom - e.top > c.bottom - c.top ? e.top + ce(i, "top") - c.top : e.bottom - c.bottom + ce(i, "bottom")), e.left < c.left + ce(n, "left") ? h = -(c.left - e.left + ce(i, "left")) : e.right > c.right - ce(n, "right") && (h = e.right - c.right + ce(i, "right")), h || f)
			if (a) s.defaultView.scrollBy(h, f);
			else {
				let u = l.scrollLeft,
					p = l.scrollTop;
				f && (l.scrollTop += f), h && (l.scrollLeft += h);
				let d = l.scrollLeft - u,
					m = l.scrollTop - p;
				e = {
					left: e.left - d,
					top: e.top - m,
					right: e.right - d,
					bottom: e.bottom - m
				}
			} if (a || /^(fixed|sticky)$/.test(getComputedStyle(o).position)) break
	}
}

function Ja(r) {
	let e = r.dom.getBoundingClientRect(),
		t = Math.max(0, e.top),
		n, i;
	for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
		let l = r.root.elementFromPoint(s, o);
		if (!l || l == r.dom || !r.dom.contains(l)) continue;
		let a = l.getBoundingClientRect();
		if (a.top >= t - 20) {
			n = l, i = a.top;
			break
		}
	}
	return {
		refDOM: n,
		refTop: i,
		stack: ms(r.dom)
	}
}

function ms(r) {
	let e = [],
		t = r.ownerDocument;
	for (let n = r; n && (e.push({
			dom: n,
			top: n.scrollTop,
			left: n.scrollLeft
		}), r != t); n = bt(n));
	return e
}

function Wa({
	refDOM: r,
	refTop: e,
	stack: t
}) {
	let n = r ? r.getBoundingClientRect().top : 0;
	gs(t, n == 0 ? 0 : n - e)
}

function gs(r, e) {
	for (let t = 0; t < r.length; t++) {
		let {
			dom: n,
			top: i,
			left: s
		} = r[t];
		n.scrollTop != i + e && (n.scrollTop = i + e), n.scrollLeft != s && (n.scrollLeft = s)
	}
}
let _e = null;

function _a(r) {
	if (r.setActive) return r.setActive();
	if (_e) return r.focus(_e);
	let e = ms(r);
	r.focus(_e == null ? {
		get preventScroll() {
			return _e = {
				preventScroll: !0
			}, !0
		}
	} : void 0), _e || (_e = !1, gs(e, 0))
}

function ys(r, e) {
	let t, n = 2e8,
		i, s = 0,
		o = e.top,
		l = e.top,
		a, c;
	for (let h = r.firstChild, f = 0; h; h = h.nextSibling, f++) {
		let u;
		if (h.nodeType == 1) u = h.getClientRects();
		else if (h.nodeType == 3) u = he(h).getClientRects();
		else continue;
		for (let p = 0; p < u.length; p++) {
			let d = u[p];
			if (d.top <= o && d.bottom >= l) {
				o = Math.max(d.bottom, o), l = Math.min(d.top, l);
				let m = d.left > e.left ? d.left - e.left : d.right < e.left ? e.left - d.right : 0;
				if (m < n) {
					t = h, n = m, i = m && t.nodeType == 3 ? {
						left: d.right < e.left ? d.right : d.left,
						top: e.top
					} : e, h.nodeType == 1 && m && (s = f + (e.left >= (d.left + d.right) / 2 ? 1 : 0));
					continue
				}
			} else d.top > e.top && !a && d.left <= e.left && d.right >= e.left && (a = h, c = {
				left: Math.max(d.left, Math.min(d.right, e.left)),
				top: d.top
			});
			!t && (e.left >= d.right && e.top >= d.top || e.left >= d.left && e.top >= d.bottom) && (s = f + 1)
		}
	}
	return !t && a && (t = a, i = c, n = 0), t && t.nodeType == 3 ? Ha(t, i) : !t || n && t.nodeType == 1 ? {
		node: r,
		offset: s
	} : ys(t, i)
}

function Ha(r, e) {
	let t = r.nodeValue.length,
		n = document.createRange();
	for (let i = 0; i < t; i++) {
		n.setEnd(r, i + 1), n.setStart(r, i);
		let s = me(n, 1);
		if (s.top != s.bottom && _n(e, s)) return {
			node: r,
			offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0)
		}
	}
	return {
		node: r,
		offset: 0
	}
}

function _n(r, e) {
	return r.left >= e.left - 1 && r.left <= e.right + 1 && r.top >= e.top - 1 && r.top <= e.bottom + 1
}

function $a(r, e) {
	let t = r.parentNode;
	return t && /^li$/i.test(t.nodeName) && e.left < r.getBoundingClientRect().left ? t : r
}

function Ua(r, e, t) {
	let {
		node: n,
		offset: i
	} = ys(e, t), s = -1;
	if (n.nodeType == 1 && !n.firstChild) {
		let o = n.getBoundingClientRect();
		s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1
	}
	return r.docView.posFromDOM(n, i, s)
}

function ja(r, e, t, n) {
	let i = -1;
	for (let s = e, o = !1; s != r.dom;) {
		let l = r.docView.nearestDesc(s, !0);
		if (!l) return null;
		if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM)) {
			let a = l.dom.getBoundingClientRect();
			if (l.node.isBlock && l.parent && (!o && a.left > n.left || a.top > n.top ? i = l.posBefore : (!o && a.right < n.left || a.bottom < n.top) && (i = l.posAfter), o = !0), !l.contentDOM && i < 0 && !l.node.isText) return (l.node.isBlock ? n.top < (a.top + a.bottom) / 2 : n.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter
		}
		s = l.dom.parentNode
	}
	return i > -1 ? i : r.docView.posFromDOM(e, t, -1)
}

function Ss(r, e, t) {
	let n = r.childNodes.length;
	if (n && t.top < t.bottom)
		for (let i = Math.max(0, Math.min(n - 1, Math.floor(n * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i;;) {
			let o = r.childNodes[s];
			if (o.nodeType == 1) {
				let l = o.getClientRects();
				for (let a = 0; a < l.length; a++) {
					let c = l[a];
					if (_n(e, c)) return Ss(o, e, c)
				}
			}
			if ((s = (s + 1) % n) == i) break
		}
	return r
}

function Ga(r, e) {
	let t = r.dom.ownerDocument,
		n, i = 0,
		s = Ba(t, e.left, e.top);
	s && ({
		node: n,
		offset: i
	} = s);
	let o = (r.root.elementFromPoint ? r.root : t).elementFromPoint(e.left, e.top),
		l;
	if (!o || !r.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
		let c = r.dom.getBoundingClientRect();
		if (!_n(e, c) || (o = Ss(r.dom, e, c), !o)) return null
	}
	if (K)
		for (let c = o; n && c; c = bt(c)) c.draggable && (n = void 0);
	if (o = $a(o, e), n) {
		if (te && n.nodeType == 1 && (i = Math.min(i, n.childNodes.length), i < n.childNodes.length)) {
			let h = n.childNodes[i],
				f;
			h.nodeName == "IMG" && (f = h.getBoundingClientRect()).right <= e.left && f.bottom > e.top && i++
		}
		let c;
		Ot && i && n.nodeType == 1 && (c = n.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, n == r.dom && i == n.childNodes.length - 1 && n.lastChild.nodeType == 1 && e.top > n.lastChild.getBoundingClientRect().bottom ? l = r.state.doc.content.size : (i == 0 || n.nodeType != 1 || n.childNodes[i - 1].nodeName != "BR") && (l = ja(r, n, i, e))
	}
	l == null && (l = Ua(r, o, e));
	let a = r.docView.nearestDesc(o, !0);
	return {
		pos: l,
		inside: a ? a.posAtStart - a.border : -1
	}
}

function _r(r) {
	return r.top < r.bottom || r.left < r.right
}

function me(r, e) {
	let t = r.getClientRects();
	if (t.length) {
		let n = t[e < 0 ? 0 : t.length - 1];
		if (_r(n)) return n
	}
	return Array.prototype.find.call(t, _r) || r.getBoundingClientRect()
}
const Ya = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;

function ks(r, e, t) {
	let {
		node: n,
		offset: i,
		atom: s
	} = r.docView.domFromPos(e, t < 0 ? -1 : 1), o = Ot || te;
	if (n.nodeType == 3)
		if (o && (Ya.test(n.nodeValue) || (t < 0 ? !i : i == n.nodeValue.length))) {
			let a = me(he(n, i, i), t);
			if (te && i && /\s/.test(n.nodeValue[i - 1]) && i < n.nodeValue.length) {
				let c = me(he(n, i - 1, i - 1), -1);
				if (c.top == a.top) {
					let h = me(he(n, i, i + 1), -1);
					if (h.top != a.top) return at(h, h.left < c.left)
				}
			}
			return a
		} else {
			let a = i,
				c = i,
				h = t < 0 ? 1 : -1;
			return t < 0 && !i ? (c++, h = -1) : t >= 0 && i == n.nodeValue.length ? (a--, h = 1) : t < 0 ? a-- : c++, at(me(he(n, a, c), h), h < 0)
		} if (!r.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
		if (s == null && i && (t < 0 || i == ie(n))) {
			let a = n.childNodes[i - 1];
			if (a.nodeType == 1) return gn(a.getBoundingClientRect(), !1)
		}
		if (s == null && i < ie(n)) {
			let a = n.childNodes[i];
			if (a.nodeType == 1) return gn(a.getBoundingClientRect(), !0)
		}
		return gn(n.getBoundingClientRect(), t >= 0)
	}
	if (s == null && i && (t < 0 || i == ie(n))) {
		let a = n.childNodes[i - 1],
			c = a.nodeType == 3 ? he(a, ie(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
		if (c) return at(me(c, 1), !1)
	}
	if (s == null && i < ie(n)) {
		let a = n.childNodes[i];
		for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords;) a = a.nextSibling;
		let c = a ? a.nodeType == 3 ? he(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
		if (c) return at(me(c, -1), !0)
	}
	return at(me(n.nodeType == 3 ? he(n) : n, -t), t >= 0)
}

function at(r, e) {
	if (r.width == 0) return r;
	let t = e ? r.left : r.right;
	return {
		top: r.top,
		bottom: r.bottom,
		left: t,
		right: t
	}
}

function gn(r, e) {
	if (r.height == 0) return r;
	let t = e ? r.top : r.bottom;
	return {
		top: t,
		bottom: t,
		left: r.left,
		right: r.right
	}
}

function xs(r, e, t) {
	let n = r.state,
		i = r.root.activeElement;
	n != e && r.updateState(e), i != r.dom && r.focus();
	try {
		return t()
	} finally {
		n != e && r.updateState(n), i != r.dom && i && i.focus()
	}
}

function Xa(r, e, t) {
	let n = e.selection,
		i = t == "up" ? n.$from : n.$to;
	return xs(r, e, () => {
		let {
			node: s
		} = r.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
		for (;;) {
			let l = r.docView.nearestDesc(s, !0);
			if (!l) break;
			if (l.node.isBlock) {
				s = l.contentDOM || l.dom;
				break
			}
			s = l.dom.parentNode
		}
		let o = ks(r, i.pos, 1);
		for (let l = s.firstChild; l; l = l.nextSibling) {
			let a;
			if (l.nodeType == 1) a = l.getClientRects();
			else if (l.nodeType == 3) a = he(l, 0, l.nodeValue.length).getClientRects();
			else continue;
			for (let c = 0; c < a.length; c++) {
				let h = a[c];
				if (h.bottom > h.top + 1 && (t == "up" ? o.top - h.top > (h.bottom - o.top) * 2 : h.bottom - o.bottom > (o.bottom - h.top) * 2)) return !1
			}
		}
		return !0
	})
}
const Qa = /[\u0590-\u08ac]/;

function Za(r, e, t) {
	let {
		$head: n
	} = e.selection;
	if (!n.parent.isTextblock) return !1;
	let i = n.parentOffset,
		s = !i,
		o = i == n.parent.content.size,
		l = r.domSelection();
	return !Qa.test(n.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : xs(r, e, () => {
		let {
			focusNode: a,
			focusOffset: c,
			anchorNode: h,
			anchorOffset: f
		} = r.domSelectionRange(), u = l.caretBidiLevel;
		l.modify("move", t, "character");
		let p = n.depth ? r.docView.domAfterPos(n.before()) : r.dom,
			{
				focusNode: d,
				focusOffset: m
			} = r.domSelectionRange(),
			g = d && !p.contains(d.nodeType == 1 ? d : d.parentNode) || a == d && c == m;
		try {
			l.collapse(h, f), a && (a != h || c != f) && l.extend && l.extend(a, c)
		} catch {}
		return u != null && (l.caretBidiLevel = u), g
	})
}
let Hr = null,
	$r = null,
	Ur = !1;

function ec(r, e, t) {
	return Hr == e && $r == t ? Ur : (Hr = e, $r = t, Ur = t == "up" || t == "down" ? Xa(r, e, t) : Za(r, e, t))
}
const Q = 0,
	jr = 1,
	Ae = 2,
	ae = 3;
class Dt {
	constructor(e, t, n, i) {
		this.parent = e, this.children = t, this.dom = n, this.contentDOM = i, this.dirty = Q, n.pmViewDesc = this
	}
	matchesWidget(e) {
		return !1
	}
	matchesMark(e) {
		return !1
	}
	matchesNode(e, t, n) {
		return !1
	}
	matchesHack(e) {
		return !1
	}
	parseRule() {
		return null
	}
	stopEvent(e) {
		return !1
	}
	get size() {
		let e = 0;
		for (let t = 0; t < this.children.length; t++) e += this.children[t].size;
		return e
	}
	get border() {
		return 0
	}
	destroy() {
		this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
		for (let e = 0; e < this.children.length; e++) this.children[e].destroy()
	}
	posBeforeChild(e) {
		for (let t = 0, n = this.posAtStart;; t++) {
			let i = this.children[t];
			if (i == e) return n;
			n += i.size
		}
	}
	get posBefore() {
		return this.parent.posBeforeChild(this)
	}
	get posAtStart() {
		return this.parent ? this.parent.posBeforeChild(this) + this.border : 0
	}
	get posAfter() {
		return this.posBefore + this.size
	}
	get posAtEnd() {
		return this.posAtStart + this.size - 2 * this.border
	}
	localPosFromDOM(e, t, n) {
		if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
			if (n < 0) {
				let s, o;
				if (e == this.contentDOM) s = e.childNodes[t - 1];
				else {
					for (; e.parentNode != this.contentDOM;) e = e.parentNode;
					s = e.previousSibling
				}
				for (; s && !((o = s.pmViewDesc) && o.parent == this);) s = s.previousSibling;
				return s ? this.posBeforeChild(o) + o.size : this.posAtStart
			} else {
				let s, o;
				if (e == this.contentDOM) s = e.childNodes[t];
				else {
					for (; e.parentNode != this.contentDOM;) e = e.parentNode;
					s = e.nextSibling
				}
				for (; s && !((o = s.pmViewDesc) && o.parent == this);) s = s.nextSibling;
				return s ? this.posBeforeChild(o) : this.posAtEnd
			} let i;
		if (e == this.dom && this.contentDOM) i = t > P(this.contentDOM);
		else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) i = e.compareDocumentPosition(this.contentDOM) & 2;
		else if (this.dom.firstChild) {
			if (t == 0)
				for (let s = e;; s = s.parentNode) {
					if (s == this.dom) {
						i = !1;
						break
					}
					if (s.previousSibling) break
				}
			if (i == null && t == e.childNodes.length)
				for (let s = e;; s = s.parentNode) {
					if (s == this.dom) {
						i = !0;
						break
					}
					if (s.nextSibling) break
				}
		}
		return i ?? n > 0 ? this.posAtEnd : this.posAtStart
	}
	nearestDesc(e, t = !1) {
		for (let n = !0, i = e; i; i = i.parentNode) {
			let s = this.getDesc(i),
				o;
			if (s && (!t || s.node))
				if (n && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e)) n = !1;
				else return s
		}
	}
	getDesc(e) {
		let t = e.pmViewDesc;
		for (let n = t; n; n = n.parent)
			if (n == this) return t
	}
	posFromDOM(e, t, n) {
		for (let i = e; i; i = i.parentNode) {
			let s = this.getDesc(i);
			if (s) return s.localPosFromDOM(e, t, n)
		}
		return -1
	}
	descAt(e) {
		for (let t = 0, n = 0; t < this.children.length; t++) {
			let i = this.children[t],
				s = n + i.size;
			if (n == e && s != n) {
				for (; !i.border && i.children.length;) i = i.children[0];
				return i
			}
			if (e < s) return i.descAt(e - n - i.border);
			n = s
		}
	}
	domFromPos(e, t) {
		if (!this.contentDOM) return {
			node: this.dom,
			offset: 0,
			atom: e + 1
		};
		let n = 0,
			i = 0;
		for (let s = 0; n < this.children.length; n++) {
			let o = this.children[n],
				l = s + o.size;
			if (l > e || o instanceof Cs) {
				i = e - s;
				break
			}
			s = l
		}
		if (i) return this.children[n].domFromPos(i - this.children[n].border, t);
		for (let s; n && !(s = this.children[n - 1]).size && s instanceof bs && s.side >= 0; n--);
		if (t <= 0) {
			let s, o = !0;
			for (; s = n ? this.children[n - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); n--, o = !1);
			return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : {
				node: this.contentDOM,
				offset: s ? P(s.dom) + 1 : 0
			}
		} else {
			let s, o = !0;
			for (; s = n < this.children.length ? this.children[n] : null, !(!s || s.dom.parentNode == this.contentDOM); n++, o = !1);
			return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : {
				node: this.contentDOM,
				offset: s ? P(s.dom) : this.contentDOM.childNodes.length
			}
		}
	}
	parseRange(e, t, n = 0) {
		if (this.children.length == 0) return {
			node: this.contentDOM,
			from: e,
			to: t,
			fromOffset: 0,
			toOffset: this.contentDOM.childNodes.length
		};
		let i = -1,
			s = -1;
		for (let o = n, l = 0;; l++) {
			let a = this.children[l],
				c = o + a.size;
			if (i == -1 && e <= c) {
				let h = o + a.border;
				if (e >= h && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM)) return a.parseRange(e, t, h);
				e = o;
				for (let f = l; f > 0; f--) {
					let u = this.children[f - 1];
					if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(1)) {
						i = P(u.dom) + 1;
						break
					}
					e -= u.size
				}
				i == -1 && (i = 0)
			}
			if (i > -1 && (c > t || l == this.children.length - 1)) {
				t = c;
				for (let h = l + 1; h < this.children.length; h++) {
					let f = this.children[h];
					if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(-1)) {
						s = P(f.dom);
						break
					}
					t += f.size
				}
				s == -1 && (s = this.contentDOM.childNodes.length);
				break
			}
			o = c
		}
		return {
			node: this.contentDOM,
			from: e,
			to: t,
			fromOffset: i,
			toOffset: s
		}
	}
	emptyChildAt(e) {
		if (this.border || !this.contentDOM || !this.children.length) return !1;
		let t = this.children[e < 0 ? 0 : this.children.length - 1];
		return t.size == 0 || t.emptyChildAt(e)
	}
	domAfterPos(e) {
		let {
			node: t,
			offset: n
		} = this.domFromPos(e, 0);
		if (t.nodeType != 1 || n == t.childNodes.length) throw new RangeError("No node after pos " + e);
		return t.childNodes[n]
	}
	setSelection(e, t, n, i = !1) {
		let s = Math.min(e, t),
			o = Math.max(e, t);
		for (let u = 0, p = 0; u < this.children.length; u++) {
			let d = this.children[u],
				m = p + d.size;
			if (s > p && o < m) return d.setSelection(e - p - d.border, t - p - d.border, n, i);
			p = m
		}
		let l = this.domFromPos(e, e ? -1 : 1),
			a = t == e ? l : this.domFromPos(t, t ? -1 : 1),
			c = n.getSelection(),
			h = !1;
		if ((te || K) && e == t) {
			let {
				node: u,
				offset: p
			} = l;
			if (u.nodeType == 3) {
				if (h = !!(p && u.nodeValue[p - 1] == `
`), h && p == u.nodeValue.length)
					for (let d = u, m; d; d = d.parentNode) {
						if (m = d.nextSibling) {
							m.nodeName == "BR" && (l = a = {
								node: m.parentNode,
								offset: P(m) + 1
							});
							break
						}
						let g = d.pmViewDesc;
						if (g && g.node && g.node.isBlock) break
					}
			} else {
				let d = u.childNodes[p - 1];
				h = d && (d.nodeName == "BR" || d.contentEditable == "false")
			}
		}
		if (te && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
			let u = c.focusNode.childNodes[c.focusOffset];
			u && u.contentEditable == "false" && (i = !0)
		}
		if (!(i || h && K) && Le(l.node, l.offset, c.anchorNode, c.anchorOffset) && Le(a.node, a.offset, c.focusNode, c.focusOffset)) return;
		let f = !1;
		if ((c.extend || e == t) && !h) {
			c.collapse(l.node, l.offset);
			try {
				e != t && c.extend(a.node, a.offset), f = !0
			} catch {}
		}
		if (!f) {
			if (e > t) {
				let p = l;
				l = a, a = p
			}
			let u = document.createRange();
			u.setEnd(a.node, a.offset), u.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(u)
		}
	}
	ignoreMutation(e) {
		return !this.contentDOM && e.type != "selection"
	}
	get contentLost() {
		return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM)
	}
	markDirty(e, t) {
		for (let n = 0, i = 0; i < this.children.length; i++) {
			let s = this.children[i],
				o = n + s.size;
			if (n == o ? e <= o && t >= n : e < o && t > n) {
				let l = n + s.border,
					a = o - s.border;
				if (e >= l && t <= a) {
					this.dirty = e == n || t == o ? Ae : jr, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = ae : s.markDirty(e - l, t - l);
					return
				} else s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? Ae : ae
			}
			n = o
		}
		this.dirty = Ae
	}
	markParentsDirty() {
		let e = 1;
		for (let t = this.parent; t; t = t.parent, e++) {
			let n = e == 1 ? Ae : jr;
			t.dirty < n && (t.dirty = n)
		}
	}
	get domAtom() {
		return !1
	}
	get ignoreForCoords() {
		return !1
	}
	isText(e) {
		return !1
	}
}
class bs extends Dt {
	constructor(e, t, n, i) {
		let s, o = t.type.toDOM;
		if (typeof o == "function" && (o = o(n, () => {
				if (!s) return i;
				if (s.parent) return s.parent.posBeforeChild(s)
			})), !t.type.spec.raw) {
			if (o.nodeType != 1) {
				let l = document.createElement("span");
				l.appendChild(o), o = l
			}
			o.contentEditable = "false", o.classList.add("ProseMirror-widget")
		}
		super(e, [], o, null), this.widget = t, this.widget = t, s = this
	}
	matchesWidget(e) {
		return this.dirty == Q && e.type.eq(this.widget.type)
	}
	parseRule() {
		return {
			ignore: !0
		}
	}
	stopEvent(e) {
		let t = this.widget.spec.stopEvent;
		return t ? t(e) : !1
	}
	ignoreMutation(e) {
		return e.type != "selection" || this.widget.spec.ignoreSelection
	}
	destroy() {
		this.widget.type.destroy(this.dom), super.destroy()
	}
	get domAtom() {
		return !0
	}
	get side() {
		return this.widget.type.side
	}
}
class tc extends Dt {
	constructor(e, t, n, i) {
		super(e, [], t, null), this.textDOM = n, this.text = i
	}
	get size() {
		return this.text.length
	}
	localPosFromDOM(e, t) {
		return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t
	}
	domFromPos(e) {
		return {
			node: this.textDOM,
			offset: e
		}
	}
	ignoreMutation(e) {
		return e.type === "characterData" && e.target.nodeValue == e.oldValue
	}
}
class Ve extends Dt {
	constructor(e, t, n, i) {
		super(e, [], n, i), this.mark = t
	}
	static create(e, t, n, i) {
		let s = i.nodeViews[t.type.name],
			o = s && s(t, i, n);
		return (!o || !o.dom) && (o = rt.renderSpec(document, t.type.spec.toDOM(t, n), null, t.attrs)), new Ve(e, t, o.dom, o.contentDOM || o.dom)
	}
	parseRule() {
		return this.dirty & ae || this.mark.type.spec.reparseInView ? null : {
			mark: this.mark.type.name,
			attrs: this.mark.attrs,
			contentElement: this.contentDOM
		}
	}
	matchesMark(e) {
		return this.dirty != ae && this.mark.eq(e)
	}
	markDirty(e, t) {
		if (super.markDirty(e, t), this.dirty != Q) {
			let n = this.parent;
			for (; !n.node;) n = n.parent;
			n.dirty < this.dirty && (n.dirty = this.dirty), this.dirty = Q
		}
	}
	slice(e, t, n) {
		let i = Ve.create(this.parent, this.mark, !0, n),
			s = this.children,
			o = this.size;
		t < o && (s = An(s, t, o, n)), e > 0 && (s = An(s, 0, e, n));
		for (let l = 0; l < s.length; l++) s[l].parent = i;
		return i.children = s, i
	}
}
class Ce extends Dt {
	constructor(e, t, n, i, s, o, l, a, c) {
		super(e, [], s, o), this.node = t, this.outerDeco = n, this.innerDeco = i, this.nodeDOM = l
	}
	static create(e, t, n, i, s, o) {
		let l = s.nodeViews[t.type.name],
			a, c = l && l(t, s, () => {
				if (!a) return o;
				if (a.parent) return a.parent.posBeforeChild(a)
			}, n, i),
			h = c && c.dom,
			f = c && c.contentDOM;
		if (t.isText) {
			if (!h) h = document.createTextNode(t.text);
			else if (h.nodeType != 3) throw new RangeError("Text must be rendered as a DOM text node")
		} else h || ({
			dom: h,
			contentDOM: f
		} = rt.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
		!f && !t.isText && h.nodeName != "BR" && (h.hasAttribute("contenteditable") || (h.contentEditable = "false"), t.type.spec.draggable && (h.draggable = !0));
		let u = h;
		return h = Ts(h, n, t), c ? a = new nc(e, t, n, i, h, f || null, u, c, s, o + 1) : t.isText ? new en(e, t, n, i, h, u, s) : new Ce(e, t, n, i, h, f || null, u, s, o + 1)
	}
	parseRule() {
		if (this.node.type.spec.reparseInView) return null;
		let e = {
			node: this.node.type.name,
			attrs: this.node.attrs
		};
		if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM) e.getContent = () => this.node.content;
		else if (!this.contentLost) e.contentElement = this.contentDOM;
		else {
			for (let t = this.children.length - 1; t >= 0; t--) {
				let n = this.children[t];
				if (this.dom.contains(n.dom.parentNode)) {
					e.contentElement = n.dom.parentNode;
					break
				}
			}
			e.contentElement || (e.getContent = () => y.empty)
		}
		return e
	}
	matchesNode(e, t, n) {
		return this.dirty == Q && e.eq(this.node) && En(t, this.outerDeco) && n.eq(this.innerDeco)
	}
	get size() {
		return this.node.nodeSize
	}
	get border() {
		return this.node.isLeaf ? 0 : 1
	}
	updateChildren(e, t) {
		let n = this.node.inlineContent,
			i = t,
			s = e.composing ? this.localCompositionInfo(e, t) : null,
			o = s && s.pos > -1 ? s : null,
			l = s && s.pos < 0,
			a = new ic(this, o && o.node, e);
		lc(this.node, this.innerDeco, (c, h, f) => {
			c.spec.marks ? a.syncToMarks(c.spec.marks, n, e) : c.type.side >= 0 && !f && a.syncToMarks(h == this.node.childCount ? T.none : this.node.child(h).marks, n, e), a.placeWidget(c, e, i)
		}, (c, h, f, u) => {
			a.syncToMarks(c.marks, n, e);
			let p;
			a.findNodeMatch(c, h, f, u) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (p = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, h, f, p, e) || a.updateNextNode(c, h, f, e, u, i) || a.addNode(c, h, f, e, i), i += c.nodeSize
		}), a.syncToMarks([], n, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == Ae) && (o && this.protectLocalComposition(e, o), ws(this.contentDOM, this.children, e), nt && ac(this.dom))
	}
	localCompositionInfo(e, t) {
		let {
			from: n,
			to: i
		} = e.state.selection;
		if (!(e.state.selection instanceof M) || n < t || i > t + this.node.content.size) return null;
		let s = e.input.compositionNode;
		if (!s || !this.dom.contains(s.parentNode)) return null;
		if (this.node.inlineContent) {
			let o = s.nodeValue,
				l = cc(this.node.content, o, n - t, i - t);
			return l < 0 ? null : {
				node: s,
				pos: l,
				text: o
			}
		} else return {
			node: s,
			pos: -1,
			text: ""
		}
	}
	protectLocalComposition(e, {
		node: t,
		pos: n,
		text: i
	}) {
		if (this.getDesc(t)) return;
		let s = t;
		for (; s.parentNode != this.contentDOM; s = s.parentNode) {
			for (; s.previousSibling;) s.parentNode.removeChild(s.previousSibling);
			for (; s.nextSibling;) s.parentNode.removeChild(s.nextSibling);
			s.pmViewDesc && (s.pmViewDesc = void 0)
		}
		let o = new tc(this, s, t, i);
		e.input.compositionNodes.push(o), this.children = An(this.children, n, n + i.length, e, o)
	}
	update(e, t, n, i) {
		return this.dirty == ae || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, n, i), !0)
	}
	updateInner(e, t, n, i) {
		this.updateOuterDeco(t), this.node = e, this.innerDeco = n, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Q
	}
	updateOuterDeco(e) {
		if (En(e, this.outerDeco)) return;
		let t = this.nodeDOM.nodeType != 1,
			n = this.dom;
		this.dom = Ms(this.dom, this.nodeDOM, Dn(this.outerDeco, this.node, t), Dn(e, this.node, t)), this.dom != n && (n.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e
	}
	selectNode() {
		this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0)
	}
	deselectNode() {
		this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"))
	}
	get domAtom() {
		return this.node.isAtom
	}
}

function Gr(r, e, t, n, i) {
	Ts(n, e, r);
	let s = new Ce(void 0, r, e, t, n, n, n, i, 0);
	return s.contentDOM && s.updateChildren(i, 0), s
}
class en extends Ce {
	constructor(e, t, n, i, s, o, l) {
		super(e, t, n, i, s, null, o, l, 0)
	}
	parseRule() {
		let e = this.nodeDOM.parentNode;
		for (; e && e != this.dom && !e.pmIsDeco;) e = e.parentNode;
		return {
			skip: e || !0
		}
	}
	update(e, t, n, i) {
		return this.dirty == ae || this.dirty != Q && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Q || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Q, !0)
	}
	inParent() {
		let e = this.parent.contentDOM;
		for (let t = this.nodeDOM; t; t = t.parentNode)
			if (t == e) return !0;
		return !1
	}
	domFromPos(e) {
		return {
			node: this.nodeDOM,
			offset: e
		}
	}
	localPosFromDOM(e, t, n) {
		return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, n)
	}
	ignoreMutation(e) {
		return e.type != "characterData" && e.type != "selection"
	}
	slice(e, t, n) {
		let i = this.node.cut(e, t),
			s = document.createTextNode(i.text);
		return new en(this.parent, i, this.outerDeco, this.innerDeco, s, s, n)
	}
	markDirty(e, t) {
		super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = ae)
	}
	get domAtom() {
		return !1
	}
	isText(e) {
		return this.node.text == e
	}
}
class Cs extends Dt {
	parseRule() {
		return {
			ignore: !0
		}
	}
	matchesHack(e) {
		return this.dirty == Q && this.dom.nodeName == e
	}
	get domAtom() {
		return !0
	}
	get ignoreForCoords() {
		return this.dom.nodeName == "IMG"
	}
}
class nc extends Ce {
	constructor(e, t, n, i, s, o, l, a, c, h) {
		super(e, t, n, i, s, o, l, c, h), this.spec = a
	}
	update(e, t, n, i) {
		if (this.dirty == ae) return !1;
		if (this.spec.update) {
			let s = this.spec.update(e, t, n);
			return s && this.updateInner(e, t, n, i), s
		} else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, n, i)
	}
	selectNode() {
		this.spec.selectNode ? this.spec.selectNode() : super.selectNode()
	}
	deselectNode() {
		this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode()
	}
	setSelection(e, t, n, i) {
		this.spec.setSelection ? this.spec.setSelection(e, t, n) : super.setSelection(e, t, n, i)
	}
	destroy() {
		this.spec.destroy && this.spec.destroy(), super.destroy()
	}
	stopEvent(e) {
		return this.spec.stopEvent ? this.spec.stopEvent(e) : !1
	}
	ignoreMutation(e) {
		return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e)
	}
}

function ws(r, e, t) {
	let n = r.firstChild,
		i = !1;
	for (let s = 0; s < e.length; s++) {
		let o = e[s],
			l = o.dom;
		if (l.parentNode == r) {
			for (; l != n;) n = Yr(n), i = !0;
			n = n.nextSibling
		} else i = !0, r.insertBefore(l, n);
		if (o instanceof Ve) {
			let a = n ? n.previousSibling : r.lastChild;
			ws(o.contentDOM, o.children, t), n = a ? a.nextSibling : r.firstChild
		}
	}
	for (; n;) n = Yr(n), i = !0;
	i && t.trackWrites == r && (t.trackWrites = null)
}
const gt = function(r) {
	r && (this.nodeName = r)
};
gt.prototype = Object.create(null);
const Re = [new gt];

function Dn(r, e, t) {
	if (r.length == 0) return Re;
	let n = t ? Re[0] : new gt,
		i = [n];
	for (let s = 0; s < r.length; s++) {
		let o = r[s].type.attrs;
		if (o) {
			o.nodeName && i.push(n = new gt(o.nodeName));
			for (let l in o) {
				let a = o[l];
				a != null && (t && i.length == 1 && i.push(n = new gt(e.isInline ? "span" : "div")), l == "class" ? n.class = (n.class ? n.class + " " : "") + a : l == "style" ? n.style = (n.style ? n.style + ";" : "") + a : l != "nodeName" && (n[l] = a))
			}
		}
	}
	return i
}

function Ms(r, e, t, n) {
	if (t == Re && n == Re) return e;
	let i = e;
	for (let s = 0; s < n.length; s++) {
		let o = n[s],
			l = t[s];
		if (s) {
			let a;
			l && l.nodeName == o.nodeName && i != r && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = Re[0]), i = a
		}
		rc(i, l || Re[0], o)
	}
	return i
}

function rc(r, e, t) {
	for (let n in e) n != "class" && n != "style" && n != "nodeName" && !(n in t) && r.removeAttribute(n);
	for (let n in t) n != "class" && n != "style" && n != "nodeName" && t[n] != e[n] && r.setAttribute(n, t[n]);
	if (e.class != t.class) {
		let n = e.class ? e.class.split(" ").filter(Boolean) : [],
			i = t.class ? t.class.split(" ").filter(Boolean) : [];
		for (let s = 0; s < n.length; s++) i.indexOf(n[s]) == -1 && r.classList.remove(n[s]);
		for (let s = 0; s < i.length; s++) n.indexOf(i[s]) == -1 && r.classList.add(i[s]);
		r.classList.length == 0 && r.removeAttribute("class")
	}
	if (e.style != t.style) {
		if (e.style) {
			let n = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
				i;
			for (; i = n.exec(e.style);) r.style.removeProperty(i[1])
		}
		t.style && (r.style.cssText += t.style)
	}
}

function Ts(r, e, t) {
	return Ms(r, r, Re, Dn(e, t, r.nodeType != 1))
}

function En(r, e) {
	if (r.length != e.length) return !1;
	for (let t = 0; t < r.length; t++)
		if (!r[t].type.eq(e[t].type)) return !1;
	return !0
}

function Yr(r) {
	let e = r.nextSibling;
	return r.parentNode.removeChild(r), e
}
class ic {
	constructor(e, t, n) {
		this.lock = t, this.view = n, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = sc(e.node.content, e)
	}
	destroyBetween(e, t) {
		if (e != t) {
			for (let n = e; n < t; n++) this.top.children[n].destroy();
			this.top.children.splice(e, t - e), this.changed = !0
		}
	}
	destroyRest() {
		this.destroyBetween(this.index, this.top.children.length)
	}
	syncToMarks(e, t, n) {
		let i = 0,
			s = this.stack.length >> 1,
			o = Math.min(s, e.length);
		for (; i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1;) i++;
		for (; i < s;) this.destroyRest(), this.top.dirty = Q, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
		for (; s < e.length;) {
			this.stack.push(this.top, this.index + 1);
			let l = -1;
			for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
				let c = this.top.children[a];
				if (c.matchesMark(e[s]) && !this.isLocked(c.dom)) {
					l = a;
					break
				}
			}
			if (l > -1) l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
			else {
				let a = Ve.create(this.top, e[s], t, n);
				this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0
			}
			this.index = 0, s++
		}
	}
	findNodeMatch(e, t, n, i) {
		let s = -1,
			o;
		if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, n)) s = this.top.children.indexOf(o, this.index);
		else
			for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
				let c = this.top.children[l];
				if (c.matchesNode(e, t, n) && !this.preMatch.matched.has(c)) {
					s = l;
					break
				}
			}
		return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0)
	}
	updateNodeAt(e, t, n, i, s) {
		let o = this.top.children[i];
		return o.dirty == ae && o.dom == o.contentDOM && (o.dirty = Ae), o.update(e, t, n, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1
	}
	findIndexWithChild(e) {
		for (;;) {
			let t = e.parentNode;
			if (!t) return -1;
			if (t == this.top.contentDOM) {
				let n = e.pmViewDesc;
				if (n) {
					for (let i = this.index; i < this.top.children.length; i++)
						if (this.top.children[i] == n) return i
				}
				return -1
			}
			e = t
		}
	}
	updateNextNode(e, t, n, i, s, o) {
		for (let l = this.index; l < this.top.children.length; l++) {
			let a = this.top.children[l];
			if (a instanceof Ce) {
				let c = this.preMatch.matched.get(a);
				if (c != null && c != s) return !1;
				let h = a.dom,
					f, u = this.isLocked(h) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != ae && En(t, a.outerDeco));
				if (!u && a.update(e, t, n, i)) return this.destroyBetween(this.index, l), a.dom != h && (this.changed = !0), this.index++, !0;
				if (!u && (f = this.recreateWrapper(a, e, t, n, i, o))) return this.top.children[this.index] = f, f.contentDOM && (f.dirty = Ae, f.updateChildren(i, o + 1), f.dirty = Q), this.changed = !0, this.index++, !0;
				break
			}
		}
		return !1
	}
	recreateWrapper(e, t, n, i, s, o) {
		if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content)) return null;
		let l = Ce.create(this.top, t, n, i, s, o);
		if (l.contentDOM) {
			l.children = e.children, e.children = [];
			for (let a of l.children) a.parent = l
		}
		return e.destroy(), l
	}
	addNode(e, t, n, i, s) {
		let o = Ce.create(this.top, e, t, n, i, s);
		o.contentDOM && o.updateChildren(i, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0
	}
	placeWidget(e, t, n) {
		let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
		if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode)) this.index++;
		else {
			let s = new bs(this.top, e, t, n);
			this.top.children.splice(this.index++, 0, s), this.changed = !0
		}
	}
	addTextblockHacks() {
		let e = this.top.children[this.index - 1],
			t = this.top;
		for (; e instanceof Ve;) t = e, e = t.children[t.children.length - 1];
		(!e || !(e instanceof en) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((K || L) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top))
	}
	addHackNode(e, t) {
		if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
		else {
			let n = document.createElement(e);
			e == "IMG" && (n.className = "ProseMirror-separator", n.alt = ""), e == "BR" && (n.className = "ProseMirror-trailingBreak");
			let i = new Cs(this.top, [], n, null);
			t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0
		}
	}
	isLocked(e) {
		return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode))
	}
}

function sc(r, e) {
	let t = e,
		n = t.children.length,
		i = r.childCount,
		s = new Map,
		o = [];
	e: for (; i > 0;) {
		let l;
		for (;;)
			if (n) {
				let c = t.children[n - 1];
				if (c instanceof Ve) t = c, n = c.children.length;
				else {
					l = c, n--;
					break
				}
			} else {
				if (t == e) break e;
				n = t.parent.children.indexOf(t), t = t.parent
			} let a = l.node;
		if (a) {
			if (a != r.child(i - 1)) break;
			--i, s.set(l, i), o.push(l)
		}
	}
	return {
		index: i,
		matched: s,
		matches: o.reverse()
	}
}

function oc(r, e) {
	return r.type.side - e.type.side
}

function lc(r, e, t, n) {
	let i = e.locals(r),
		s = 0;
	if (i.length == 0) {
		for (let c = 0; c < r.childCount; c++) {
			let h = r.child(c);
			n(h, i, e.forChild(s, h), c), s += h.nodeSize
		}
		return
	}
	let o = 0,
		l = [],
		a = null;
	for (let c = 0;;) {
		let h, f;
		for (; o < i.length && i[o].to == s;) {
			let g = i[o++];
			g.widget && (h ? (f || (f = [h])).push(g) : h = g)
		}
		if (h)
			if (f) {
				f.sort(oc);
				for (let g = 0; g < f.length; g++) t(f[g], c, !!a)
			} else t(h, c, !!a);
		let u, p;
		if (a) p = -1, u = a, a = null;
		else if (c < r.childCount) p = c, u = r.child(c++);
		else break;
		for (let g = 0; g < l.length; g++) l[g].to <= s && l.splice(g--, 1);
		for (; o < i.length && i[o].from <= s && i[o].to > s;) l.push(i[o++]);
		let d = s + u.nodeSize;
		if (u.isText) {
			let g = d;
			o < i.length && i[o].from < g && (g = i[o].from);
			for (let k = 0; k < l.length; k++) l[k].to < g && (g = l[k].to);
			g < d && (a = u.cut(g - s), u = u.cut(0, g - s), d = g, p = -1)
		} else
			for (; o < i.length && i[o].to < d;) o++;
		let m = u.isInline && !u.isLeaf ? l.filter(g => !g.inline) : l.slice();
		n(u, m, e.forChild(s, u), p), s = d
	}
}

function ac(r) {
	if (r.nodeName == "UL" || r.nodeName == "OL") {
		let e = r.style.cssText;
		r.style.cssText = e + "; list-style: square !important", window.getComputedStyle(r).listStyle, r.style.cssText = e
	}
}

function cc(r, e, t, n) {
	for (let i = 0, s = 0; i < r.childCount && s <= n;) {
		let o = r.child(i++),
			l = s;
		if (s += o.nodeSize, !o.isText) continue;
		let a = o.text;
		for (; i < r.childCount;) {
			let c = r.child(i++);
			if (s += c.nodeSize, !c.isText) break;
			a += c.text
		}
		if (s >= t) {
			if (s >= n && a.slice(n - e.length - l, n - l) == e) return n - e.length;
			let c = l < n ? a.lastIndexOf(e, n - l - 1) : -1;
			if (c >= 0 && c + e.length + l >= t) return l + c;
			if (t == n && a.length >= n + e.length - l && a.slice(n - l, n - l + e.length) == e) return n
		}
	}
	return -1
}

function An(r, e, t, n, i) {
	let s = [];
	for (let o = 0, l = 0; o < r.length; o++) {
		let a = r[o],
			c = l,
			h = l += a.size;
		c >= t || h <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, n)), i && (s.push(i), i = void 0), h > t && s.push(a.slice(t - c, a.size, n)))
	}
	return s
}

function Hn(r, e = null) {
	let t = r.domSelectionRange(),
		n = r.state.doc;
	if (!t.focusNode) return null;
	let i = r.docView.nearestDesc(t.focusNode),
		s = i && i.size == 0,
		o = r.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
	if (o < 0) return null;
	let l = n.resolve(o),
		a, c;
	if (Zt(t)) {
		for (a = l; i && !i.node;) i = i.parent;
		let h = i.node;
		if (i && h.isAtom && b.isSelectable(h) && i.parent && !(h.isInline && va(t.focusNode, t.focusOffset, i.dom))) {
			let f = i.posBefore;
			c = new b(o == f ? l : n.resolve(f))
		}
	} else {
		let h = r.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
		if (h < 0) return null;
		a = n.resolve(h)
	}
	if (!c) {
		let h = e == "pointer" || r.state.selection.head < l.pos && !s ? 1 : -1;
		c = $n(r, a, l, h)
	}
	return c
}

function Ns(r) {
	return r.editable ? r.hasFocus() : Ds(r) && document.activeElement && document.activeElement.contains(r.dom)
}

function ue(r, e = !1) {
	let t = r.state.selection;
	if (Os(r, t), !!Ns(r)) {
		if (!e && r.input.mouseDown && r.input.mouseDown.allowDefault && L) {
			let n = r.domSelectionRange(),
				i = r.domObserver.currentSelection;
			if (n.anchorNode && i.anchorNode && Le(n.anchorNode, n.anchorOffset, i.anchorNode, i.anchorOffset)) {
				r.input.mouseDown.delayedSelectionSync = !0, r.domObserver.setCurSelection();
				return
			}
		}
		if (r.domObserver.disconnectSelection(), r.cursorWrapper) fc(r);
		else {
			let {
				anchor: n,
				head: i
			} = t, s, o;
			Xr && !(t instanceof M) && (t.$from.parent.inlineContent || (s = Qr(r, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Qr(r, t.to))), r.docView.setSelection(n, i, r.root, e), Xr && (s && Zr(s), o && Zr(o)), t.visible ? r.dom.classList.remove("ProseMirror-hideselection") : (r.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && hc(r))
		}
		r.domObserver.setCurSelection(), r.domObserver.connectSelection()
	}
}
const Xr = K || L && ps < 63;

function Qr(r, e) {
	let {
		node: t,
		offset: n
	} = r.docView.domFromPos(e, 0), i = n < t.childNodes.length ? t.childNodes[n] : null, s = n ? t.childNodes[n - 1] : null;
	if (K && i && i.contentEditable == "false") return yn(i);
	if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
		if (i) return yn(i);
		if (s) return yn(s)
	}
}

function yn(r) {
	return r.contentEditable = "true", K && r.draggable && (r.draggable = !1, r.wasDraggable = !0), r
}

function Zr(r) {
	r.contentEditable = "false", r.wasDraggable && (r.draggable = !0, r.wasDraggable = null)
}

function hc(r) {
	let e = r.dom.ownerDocument;
	e.removeEventListener("selectionchange", r.input.hideSelectionGuard);
	let t = r.domSelectionRange(),
		n = t.anchorNode,
		i = t.anchorOffset;
	e.addEventListener("selectionchange", r.input.hideSelectionGuard = () => {
		(t.anchorNode != n || t.anchorOffset != i) && (e.removeEventListener("selectionchange", r.input.hideSelectionGuard), setTimeout(() => {
			(!Ns(r) || r.state.selection.visible) && r.dom.classList.remove("ProseMirror-hideselection")
		}, 20))
	})
}

function fc(r) {
	let e = r.domSelection(),
		t = document.createRange(),
		n = r.cursorWrapper.dom,
		i = n.nodeName == "IMG";
	i ? t.setEnd(n.parentNode, P(n) + 1) : t.setEnd(n, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !r.state.selection.visible && H && be <= 11 && (n.disabled = !0, n.disabled = !1)
}

function Os(r, e) {
	if (e instanceof b) {
		let t = r.docView.descAt(e.from);
		t != r.lastSelectedViewDesc && (ei(r), t && t.selectNode(), r.lastSelectedViewDesc = t)
	} else ei(r)
}

function ei(r) {
	r.lastSelectedViewDesc && (r.lastSelectedViewDesc.parent && r.lastSelectedViewDesc.deselectNode(), r.lastSelectedViewDesc = void 0)
}

function $n(r, e, t, n) {
	return r.someProp("createSelectionBetween", i => i(r, e, t)) || M.between(e, t, n)
}

function ti(r) {
	return r.editable && !r.hasFocus() ? !1 : Ds(r)
}

function Ds(r) {
	let e = r.domSelectionRange();
	if (!e.anchorNode) return !1;
	try {
		return r.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (r.editable || r.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode))
	} catch {
		return !1
	}
}

function uc(r) {
	let e = r.docView.domFromPos(r.state.selection.anchor, 0),
		t = r.domSelectionRange();
	return Le(e.node, e.offset, t.anchorNode, t.anchorOffset)
}

function Rn(r, e) {
	let {
		$anchor: t,
		$head: n
	} = r.selection, i = e > 0 ? t.max(n) : t.min(n), s = i.parent.inlineContent ? i.depth ? r.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
	return s && w.findFrom(s, e)
}

function ge(r, e) {
	return r.dispatch(r.state.tr.setSelection(e).scrollIntoView()), !0
}

function ni(r, e, t) {
	let n = r.state.selection;
	if (n instanceof M)
		if (t.indexOf("s") > -1) {
			let {
				$head: i
			} = n, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
			if (!s || s.isText || !s.isLeaf) return !1;
			let o = r.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1));
			return ge(r, new M(n.$anchor, o))
		} else if (n.empty) {
		if (r.endOfTextblock(e > 0 ? "forward" : "backward")) {
			let i = Rn(r.state, e);
			return i && i instanceof b ? ge(r, i) : !1
		} else if (!(X && t.indexOf("m") > -1)) {
			let i = n.$head,
				s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter,
				o;
			if (!s || s.isText) return !1;
			let l = e < 0 ? i.pos - s.nodeSize : i.pos;
			return s.isAtom || (o = r.docView.descAt(l)) && !o.contentDOM ? b.isSelectable(s) ? ge(r, new b(e < 0 ? r.state.doc.resolve(i.pos - s.nodeSize) : i)) : Ot ? ge(r, new M(r.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1
		}
	} else return !1;
	else {
		if (n instanceof b && n.node.isInline) return ge(r, new M(e > 0 ? n.$to : n.$from));
		{
			let i = Rn(r.state, e);
			return i ? ge(r, i) : !1
		}
	}
}

function $t(r) {
	return r.nodeType == 3 ? r.nodeValue.length : r.childNodes.length
}

function yt(r, e) {
	let t = r.pmViewDesc;
	return t && t.size == 0 && (e < 0 || r.nextSibling || r.nodeName != "BR")
}

function He(r, e) {
	return e < 0 ? dc(r) : pc(r)
}

function dc(r) {
	let e = r.domSelectionRange(),
		t = e.focusNode,
		n = e.focusOffset;
	if (!t) return;
	let i, s, o = !1;
	for (te && t.nodeType == 1 && n < $t(t) && yt(t.childNodes[n], -1) && (o = !0);;)
		if (n > 0) {
			if (t.nodeType != 1) break;
			{
				let l = t.childNodes[n - 1];
				if (yt(l, -1)) i = t, s = --n;
				else if (l.nodeType == 3) t = l, n = t.nodeValue.length;
				else break
			}
		} else {
			if (Es(t)) break;
			{
				let l = t.previousSibling;
				for (; l && yt(l, -1);) i = t.parentNode, s = P(l), l = l.previousSibling;
				if (l) t = l, n = $t(t);
				else {
					if (t = t.parentNode, t == r.dom) break;
					n = 0
				}
			}
		} o ? In(r, t, n) : i && In(r, i, s)
}

function pc(r) {
	let e = r.domSelectionRange(),
		t = e.focusNode,
		n = e.focusOffset;
	if (!t) return;
	let i = $t(t),
		s, o;
	for (;;)
		if (n < i) {
			if (t.nodeType != 1) break;
			let l = t.childNodes[n];
			if (yt(l, 1)) s = t, o = ++n;
			else break
		} else {
			if (Es(t)) break;
			{
				let l = t.nextSibling;
				for (; l && yt(l, 1);) s = l.parentNode, o = P(l) + 1, l = l.nextSibling;
				if (l) t = l, n = 0, i = $t(t);
				else {
					if (t = t.parentNode, t == r.dom) break;
					n = i = 0
				}
			}
		} s && In(r, s, o)
}

function Es(r) {
	let e = r.pmViewDesc;
	return e && e.node && e.node.isBlock
}

function mc(r, e) {
	for (; r && e == r.childNodes.length && !Nt(r);) e = P(r) + 1, r = r.parentNode;
	for (; r && e < r.childNodes.length;) {
		let t = r.childNodes[e];
		if (t.nodeType == 3) return t;
		if (t.nodeType == 1 && t.contentEditable == "false") break;
		r = t, e = 0
	}
}

function gc(r, e) {
	for (; r && !e && !Nt(r);) e = P(r), r = r.parentNode;
	for (; r && e;) {
		let t = r.childNodes[e - 1];
		if (t.nodeType == 3) return t;
		if (t.nodeType == 1 && t.contentEditable == "false") break;
		r = t, e = r.childNodes.length
	}
}

function In(r, e, t) {
	if (e.nodeType != 3) {
		let s, o;
		(o = mc(e, t)) ? (e = o, t = 0) : (s = gc(e, t)) && (e = s, t = s.nodeValue.length)
	}
	let n = r.domSelection();
	if (Zt(n)) {
		let s = document.createRange();
		s.setEnd(e, t), s.setStart(e, t), n.removeAllRanges(), n.addRange(s)
	} else n.extend && n.extend(e, t);
	r.domObserver.setCurSelection();
	let {
		state: i
	} = r;
	setTimeout(() => {
		r.state == i && ue(r)
	}, 50)
}

function ri(r, e) {
	let t = r.state.doc.resolve(e);
	if (!(L || La) && t.parent.inlineContent) {
		let i = r.coordsAtPos(e);
		if (e > t.start()) {
			let s = r.coordsAtPos(e - 1),
				o = (s.top + s.bottom) / 2;
			if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1) return s.left < i.left ? "ltr" : "rtl"
		}
		if (e < t.end()) {
			let s = r.coordsAtPos(e + 1),
				o = (s.top + s.bottom) / 2;
			if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1) return s.left > i.left ? "ltr" : "rtl"
		}
	}
	return getComputedStyle(r.dom).direction == "rtl" ? "rtl" : "ltr"
}

function ii(r, e, t) {
	let n = r.state.selection;
	if (n instanceof M && !n.empty || t.indexOf("s") > -1 || X && t.indexOf("m") > -1) return !1;
	let {
		$from: i,
		$to: s
	} = n;
	if (!i.parent.inlineContent || r.endOfTextblock(e < 0 ? "up" : "down")) {
		let o = Rn(r.state, e);
		if (o && o instanceof b) return ge(r, o)
	}
	if (!i.parent.inlineContent) {
		let o = e < 0 ? i : s,
			l = n instanceof G ? w.near(o, e) : w.findFrom(o, e);
		return l ? ge(r, l) : !1
	}
	return !1
}

function si(r, e) {
	if (!(r.state.selection instanceof M)) return !0;
	let {
		$head: t,
		$anchor: n,
		empty: i
	} = r.state.selection;
	if (!t.sameParent(n)) return !0;
	if (!i) return !1;
	if (r.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
	let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
	if (s && !s.isText) {
		let o = r.state.tr;
		return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), r.dispatch(o), !0
	}
	return !1
}

function oi(r, e, t) {
	r.domObserver.stop(), e.contentEditable = t, r.domObserver.start()
}

function yc(r) {
	if (!K || r.state.selection.$head.parentOffset > 0) return !1;
	let {
		focusNode: e,
		focusOffset: t
	} = r.domSelectionRange();
	if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
		let n = e.firstChild;
		oi(r, n, "true"), setTimeout(() => oi(r, n, "false"), 20)
	}
	return !1
}

function Sc(r) {
	let e = "";
	return r.ctrlKey && (e += "c"), r.metaKey && (e += "m"), r.altKey && (e += "a"), r.shiftKey && (e += "s"), e
}

function kc(r, e) {
	let t = e.keyCode,
		n = Sc(e);
	if (t == 8 || X && t == 72 && n == "c") return si(r, -1) || He(r, -1);
	if (t == 46 && !e.shiftKey || X && t == 68 && n == "c") return si(r, 1) || He(r, 1);
	if (t == 13 || t == 27) return !0;
	if (t == 37 || X && t == 66 && n == "c") {
		let i = t == 37 ? ri(r, r.state.selection.from) == "ltr" ? -1 : 1 : -1;
		return ni(r, i, n) || He(r, i)
	} else if (t == 39 || X && t == 70 && n == "c") {
		let i = t == 39 ? ri(r, r.state.selection.from) == "ltr" ? 1 : -1 : 1;
		return ni(r, i, n) || He(r, i)
	} else {
		if (t == 38 || X && t == 80 && n == "c") return ii(r, -1, n) || He(r, -1);
		if (t == 40 || X && t == 78 && n == "c") return yc(r) || ii(r, 1, n) || He(r, 1);
		if (n == (X ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90)) return !0
	}
	return !1
}

function As(r, e) {
	r.someProp("transformCopied", p => {
		e = p(e, r)
	});
	let t = [],
		{
			content: n,
			openStart: i,
			openEnd: s
		} = e;
	for (; i > 1 && s > 1 && n.childCount == 1 && n.firstChild.childCount == 1;) {
		i--, s--;
		let p = n.firstChild;
		t.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null), n = p.content
	}
	let o = r.someProp("clipboardSerializer") || rt.fromSchema(r.state.schema),
		l = Fs(),
		a = l.createElement("div");
	a.appendChild(o.serializeFragment(n, {
		document: l
	}));
	let c = a.firstChild,
		h, f = 0;
	for (; c && c.nodeType == 1 && (h = vs[c.nodeName.toLowerCase()]);) {
		for (let p = h.length - 1; p >= 0; p--) {
			let d = l.createElement(h[p]);
			for (; a.firstChild;) d.appendChild(a.firstChild);
			a.appendChild(d), f++
		}
		c = a.firstChild
	}
	c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${f?` -${f}`:""} ${JSON.stringify(t)}`);
	let u = r.someProp("clipboardTextSerializer", p => p(e, r)) || e.content.textBetween(0, e.content.size, `

`);
	return {
		dom: a,
		text: u,
		slice: e
	}
}

function Rs(r, e, t, n, i) {
	let s = i.parent.type.spec.code,
		o, l;
	if (!t && !e) return null;
	let a = e && (n || s || !t);
	if (a) {
		if (r.someProp("transformPastedText", u => {
				e = u(e, s || n, r)
			}), s) return e ? new S(y.from(r.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : S.empty;
		let f = r.someProp("clipboardTextParser", u => u(e, i, n, r));
		if (f) l = f;
		else {
			let u = i.marks(),
				{
					schema: p
				} = r.state,
				d = rt.fromSchema(p);
			o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach(m => {
				let g = o.appendChild(document.createElement("p"));
				m && g.appendChild(d.serializeNode(p.text(m, u)))
			})
		}
	} else r.someProp("transformPastedHTML", f => {
		t = f(t, r)
	}), o = Cc(t), Ot && wc(o);
	let c = o && o.querySelector("[data-pm-slice]"),
		h = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
	if (h && h[3])
		for (let f = +h[3]; f > 0; f--) {
			let u = o.firstChild;
			for (; u && u.nodeType != 1;) u = u.nextSibling;
			if (!u) break;
			o = u
		}
	if (l || (l = (r.someProp("clipboardParser") || r.someProp("domParser") || kt.fromSchema(r.state.schema)).parseSlice(o, {
			preserveWhitespace: !!(a || h),
			context: i,
			ruleFromNode(u) {
				return u.nodeName == "BR" && !u.nextSibling && u.parentNode && !xc.test(u.parentNode.nodeName) ? {
					ignore: !0
				} : null
			}
		})), h) l = Mc(li(l, +h[1], +h[2]), h[4]);
	else if (l = S.maxOpen(bc(l.content, i), !0), l.openStart || l.openEnd) {
		let f = 0,
			u = 0;
		for (let p = l.content.firstChild; f < l.openStart && !p.type.spec.isolating; f++, p = p.firstChild);
		for (let p = l.content.lastChild; u < l.openEnd && !p.type.spec.isolating; u++, p = p.lastChild);
		l = li(l, f, u)
	}
	return r.someProp("transformPasted", f => {
		l = f(l, r)
	}), l
}
const xc = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;

function bc(r, e) {
	if (r.childCount < 2) return r;
	for (let t = e.depth; t >= 0; t--) {
		let i = e.node(t).contentMatchAt(e.index(t)),
			s, o = [];
		if (r.forEach(l => {
				if (!o) return;
				let a = i.findWrapping(l.type),
					c;
				if (!a) return o = null;
				if (c = o.length && s.length && Ps(a, s, l, o[o.length - 1], 0)) o[o.length - 1] = c;
				else {
					o.length && (o[o.length - 1] = zs(o[o.length - 1], s.length));
					let h = Is(l, a);
					o.push(h), i = i.matchType(h.type), s = a
				}
			}), o) return y.from(o)
	}
	return r
}

function Is(r, e, t = 0) {
	for (let n = e.length - 1; n >= t; n--) r = e[n].create(null, y.from(r));
	return r
}

function Ps(r, e, t, n, i) {
	if (i < r.length && i < e.length && r[i] == e[i]) {
		let s = Ps(r, e, t, n.lastChild, i + 1);
		if (s) return n.copy(n.content.replaceChild(n.childCount - 1, s));
		if (n.contentMatchAt(n.childCount).matchType(i == r.length - 1 ? t.type : r[i + 1])) return n.copy(n.content.append(y.from(Is(t, r, i + 1))))
	}
}

function zs(r, e) {
	if (e == 0) return r;
	let t = r.content.replaceChild(r.childCount - 1, zs(r.lastChild, e - 1)),
		n = r.contentMatchAt(r.childCount).fillBefore(y.empty, !0);
	return r.copy(t.append(n))
}

function Pn(r, e, t, n, i, s) {
	let o = e < 0 ? r.firstChild : r.lastChild,
		l = o.content;
	return r.childCount > 1 && (s = 0), i < n - 1 && (l = Pn(l, e, t, n, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(y.empty, !0))), r.replaceChild(e < 0 ? 0 : r.childCount - 1, o.copy(l))
}

function li(r, e, t) {
	return e < r.openStart && (r = new S(Pn(r.content, -1, e, r.openStart, 0, r.openEnd), e, r.openEnd)), t < r.openEnd && (r = new S(Pn(r.content, 1, t, r.openEnd, 0, 0), r.openStart, t)), r
}
const vs = {
	thead: ["table"],
	tbody: ["table"],
	tfoot: ["table"],
	caption: ["table"],
	colgroup: ["table"],
	col: ["table", "colgroup"],
	tr: ["table", "tbody"],
	td: ["table", "tbody", "tr"],
	th: ["table", "tbody", "tr"]
};
let ai = null;

function Fs() {
	return ai || (ai = document.implementation.createHTMLDocument("title"))
}

function Cc(r) {
	let e = /^(\s*<meta [^>]*>)*/.exec(r);
	e && (r = r.slice(e[0].length));
	let t = Fs().createElement("div"),
		n = /<([a-z][^>\s]+)/i.exec(r),
		i;
	if ((i = n && vs[n[1].toLowerCase()]) && (r = i.map(s => "<" + s + ">").join("") + r + i.map(s => "</" + s + ">").reverse().join("")), t.innerHTML = r, i)
		for (let s = 0; s < i.length; s++) t = t.querySelector(i[s]) || t;
	return t
}

function wc(r) {
	let e = r.querySelectorAll(L ? "span:not([class]):not([style])" : "span.Apple-converted-space");
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		n.childNodes.length == 1 && n.textContent == " " && n.parentNode && n.parentNode.replaceChild(r.ownerDocument.createTextNode(" "), n)
	}
}

function Mc(r, e) {
	if (!r.size) return r;
	let t = r.content.firstChild.type.schema,
		n;
	try {
		n = JSON.parse(e)
	} catch {
		return r
	}
	let {
		content: i,
		openStart: s,
		openEnd: o
	} = r;
	for (let l = n.length - 2; l >= 0; l -= 2) {
		let a = t.nodes[n[l]];
		if (!a || a.hasRequiredAttrs()) break;
		i = y.from(a.create(n[l + 1], i)), s++, o++
	}
	return new S(i, s, o)
}
const J = {},
	W = {},
	Tc = {
		touchstart: !0,
		touchmove: !0
	};
class Nc {
	constructor() {
		this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
			time: 0,
			x: 0,
			y: 0,
			type: ""
		}, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = Object.create(null), this.hideSelectionGuard = null
	}
}

function Oc(r) {
	for (let e in J) {
		let t = J[e];
		r.dom.addEventListener(e, r.input.eventHandlers[e] = n => {
			Ec(r, n) && !Un(r, n) && (r.editable || !(n.type in W)) && t(r, n)
		}, Tc[e] ? {
			passive: !0
		} : void 0)
	}
	K && r.dom.addEventListener("input", () => null), zn(r)
}

function xe(r, e) {
	r.input.lastSelectionOrigin = e, r.input.lastSelectionTime = Date.now()
}

function Dc(r) {
	r.domObserver.stop();
	for (let e in r.input.eventHandlers) r.dom.removeEventListener(e, r.input.eventHandlers[e]);
	clearTimeout(r.input.composingTimeout), clearTimeout(r.input.lastIOSEnterFallbackTimeout)
}

function zn(r) {
	r.someProp("handleDOMEvents", e => {
		for (let t in e) r.input.eventHandlers[t] || r.dom.addEventListener(t, r.input.eventHandlers[t] = n => Un(r, n))
	})
}

function Un(r, e) {
	return r.someProp("handleDOMEvents", t => {
		let n = t[e.type];
		return n ? n(r, e) || e.defaultPrevented : !1
	})
}

function Ec(r, e) {
	if (!e.bubbles) return !0;
	if (e.defaultPrevented) return !1;
	for (let t = e.target; t != r.dom; t = t.parentNode)
		if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e)) return !1;
	return !0
}

function Ac(r, e) {
	!Un(r, e) && J[e.type] && (r.editable || !(e.type in W)) && J[e.type](r, e)
}
W.keydown = (r, e) => {
	let t = e;
	if (r.input.shiftKey = t.keyCode == 16 || t.shiftKey, !Ls(r, t) && (r.input.lastKeyCode = t.keyCode, r.input.lastKeyCodeTime = Date.now(), !(ee && L && t.keyCode == 13)))
		if (t.keyCode != 229 && r.domObserver.forceFlush(), nt && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
			let n = Date.now();
			r.input.lastIOSEnter = n, r.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
				r.input.lastIOSEnter == n && (r.someProp("handleKeyDown", i => i(r, Ee(13, "Enter"))), r.input.lastIOSEnter = 0)
			}, 200)
		} else r.someProp("handleKeyDown", n => n(r, t)) || kc(r, t) ? t.preventDefault() : xe(r, "key")
};
W.keyup = (r, e) => {
	e.keyCode == 16 && (r.input.shiftKey = !1)
};
W.keypress = (r, e) => {
	let t = e;
	if (Ls(r, t) || !t.charCode || t.ctrlKey && !t.altKey || X && t.metaKey) return;
	if (r.someProp("handleKeyPress", i => i(r, t))) {
		t.preventDefault();
		return
	}
	let n = r.state.selection;
	if (!(n instanceof M) || !n.$from.sameParent(n.$to)) {
		let i = String.fromCharCode(t.charCode);
		!/[\r\n]/.test(i) && !r.someProp("handleTextInput", s => s(r, n.$from.pos, n.$to.pos, i)) && r.dispatch(r.state.tr.insertText(i).scrollIntoView()), t.preventDefault()
	}
};

function tn(r) {
	return {
		left: r.clientX,
		top: r.clientY
	}
}

function Rc(r, e) {
	let t = e.x - r.clientX,
		n = e.y - r.clientY;
	return t * t + n * n < 100
}

function jn(r, e, t, n, i) {
	if (n == -1) return !1;
	let s = r.state.doc.resolve(n);
	for (let o = s.depth + 1; o > 0; o--)
		if (r.someProp(e, l => o > s.depth ? l(r, t, s.nodeAfter, s.before(o), i, !0) : l(r, t, s.node(o), s.before(o), i, !1))) return !0;
	return !1
}

function Qe(r, e, t) {
	r.focused || r.focus();
	let n = r.state.tr.setSelection(e);
	n.setMeta("pointer", !0), r.dispatch(n)
}

function Ic(r, e) {
	if (e == -1) return !1;
	let t = r.state.doc.resolve(e),
		n = t.nodeAfter;
	return n && n.isAtom && b.isSelectable(n) ? (Qe(r, new b(t)), !0) : !1
}

function Pc(r, e) {
	if (e == -1) return !1;
	let t = r.state.selection,
		n, i;
	t instanceof b && (n = t.node);
	let s = r.state.doc.resolve(e);
	for (let o = s.depth + 1; o > 0; o--) {
		let l = o > s.depth ? s.nodeAfter : s.node(o);
		if (b.isSelectable(l)) {
			n && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
			break
		}
	}
	return i != null ? (Qe(r, b.create(r.state.doc, i)), !0) : !1
}

function zc(r, e, t, n, i) {
	return jn(r, "handleClickOn", e, t, n) || r.someProp("handleClick", s => s(r, e, n)) || (i ? Pc(r, t) : Ic(r, t))
}

function vc(r, e, t, n) {
	return jn(r, "handleDoubleClickOn", e, t, n) || r.someProp("handleDoubleClick", i => i(r, e, n))
}

function Fc(r, e, t, n) {
	return jn(r, "handleTripleClickOn", e, t, n) || r.someProp("handleTripleClick", i => i(r, e, n)) || Bc(r, t, n)
}

function Bc(r, e, t) {
	if (t.button != 0) return !1;
	let n = r.state.doc;
	if (e == -1) return n.inlineContent ? (Qe(r, M.create(n, 0, n.content.size)), !0) : !1;
	let i = n.resolve(e);
	for (let s = i.depth + 1; s > 0; s--) {
		let o = s > i.depth ? i.nodeAfter : i.node(s),
			l = i.before(s);
		if (o.inlineContent) Qe(r, M.create(n, l + 1, l + 1 + o.content.size));
		else if (b.isSelectable(o)) Qe(r, b.create(n, l));
		else continue;
		return !0
	}
}

function Gn(r) {
	return Ut(r)
}
const Bs = X ? "metaKey" : "ctrlKey";
J.mousedown = (r, e) => {
	let t = e;
	r.input.shiftKey = t.shiftKey;
	let n = Gn(r),
		i = Date.now(),
		s = "singleClick";
	i - r.input.lastClick.time < 500 && Rc(t, r.input.lastClick) && !t[Bs] && (r.input.lastClick.type == "singleClick" ? s = "doubleClick" : r.input.lastClick.type == "doubleClick" && (s = "tripleClick")), r.input.lastClick = {
		time: i,
		x: t.clientX,
		y: t.clientY,
		type: s
	};
	let o = r.posAtCoords(tn(t));
	o && (s == "singleClick" ? (r.input.mouseDown && r.input.mouseDown.done(), r.input.mouseDown = new Lc(r, o, t, !!n)) : (s == "doubleClick" ? vc : Fc)(r, o.pos, o.inside, t) ? t.preventDefault() : xe(r, "pointer"))
};
class Lc {
	constructor(e, t, n, i) {
		this.view = e, this.pos = t, this.event = n, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!n[Bs], this.allowDefault = n.shiftKey;
		let s, o;
		if (t.inside > -1) s = e.state.doc.nodeAt(t.inside), o = t.inside;
		else {
			let h = e.state.doc.resolve(t.pos);
			s = h.parent, o = h.depth ? h.before() : 0
		}
		const l = i ? null : n.target,
			a = l ? e.docView.nearestDesc(l, !0) : null;
		this.target = a && a.dom.nodeType == 1 ? a.dom : null;
		let {
			selection: c
		} = e.state;
		(n.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof b && c.from <= o && c.to > o) && (this.mightDrag = {
			node: s,
			pos: o,
			addAttr: !!(this.target && !this.target.draggable),
			setUneditable: !!(this.target && te && !this.target.hasAttribute("contentEditable"))
		}), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
			this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false")
		}, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), xe(e, "pointer")
	}
	done() {
		this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => ue(this.view)), this.view.input.mouseDown = null
	}
	up(e) {
		if (this.done(), !this.view.dom.contains(e.target)) return;
		let t = this.pos;
		this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(tn(e))), this.updateAllowDefault(e), this.allowDefault || !t ? xe(this.view, "pointer") : zc(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || K && this.mightDrag && !this.mightDrag.node.isAtom || L && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Qe(this.view, w.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : xe(this.view, "pointer")
	}
	move(e) {
		this.updateAllowDefault(e), xe(this.view, "pointer"), e.buttons == 0 && this.done()
	}
	updateAllowDefault(e) {
		!this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0)
	}
}
J.touchstart = r => {
	r.input.lastTouch = Date.now(), Gn(r), xe(r, "pointer")
};
J.touchmove = r => {
	r.input.lastTouch = Date.now(), xe(r, "pointer")
};
J.contextmenu = r => Gn(r);

function Ls(r, e) {
	return r.composing ? !0 : K && Math.abs(e.timeStamp - r.input.compositionEndedAt) < 500 ? (r.input.compositionEndedAt = -2e8, !0) : !1
}
const Vc = ee ? 5e3 : -1;
W.compositionstart = W.compositionupdate = r => {
	if (!r.composing) {
		r.domObserver.flush();
		let {
			state: e
		} = r, t = e.selection.$from;
		if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some(n => n.type.spec.inclusive === !1))) r.markCursor = r.state.storedMarks || t.marks(), Ut(r, !0), r.markCursor = null;
		else if (Ut(r), te && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
			let n = r.domSelectionRange();
			for (let i = n.focusNode, s = n.focusOffset; i && i.nodeType == 1 && s != 0;) {
				let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
				if (!o) break;
				if (o.nodeType == 3) {
					r.domSelection().collapse(o, o.nodeValue.length);
					break
				} else i = o, s = -1
			}
		}
		r.input.composing = !0
	}
	Vs(r, Vc)
};
W.compositionend = (r, e) => {
	r.composing && (r.input.composing = !1, r.input.compositionEndedAt = e.timeStamp, r.input.compositionPendingChanges = r.domObserver.pendingRecords().length ? r.input.compositionID : 0, r.input.compositionNode = null, r.input.compositionPendingChanges && Promise.resolve().then(() => r.domObserver.flush()), r.input.compositionID++, Vs(r, 20))
};

function Vs(r, e) {
	clearTimeout(r.input.composingTimeout), e > -1 && (r.input.composingTimeout = setTimeout(() => Ut(r), e))
}

function qs(r) {
	for (r.composing && (r.input.composing = !1, r.input.compositionEndedAt = Kc()); r.input.compositionNodes.length > 0;) r.input.compositionNodes.pop().markParentsDirty()
}

function qc(r) {
	let e = r.domSelectionRange();
	if (!e.focusNode) return null;
	let t = Pa(e.focusNode, e.focusOffset),
		n = za(e.focusNode, e.focusOffset);
	if (t && n && t != n) {
		let i = n.pmViewDesc,
			s = r.domObserver.lastChangedTextNode;
		if (t == s || n == s) return s;
		if (!i || !i.isText(n.nodeValue)) return n;
		if (r.input.compositionNode == n) {
			let o = t.pmViewDesc;
			if (!(!o || !o.isText(t.nodeValue))) return n
		}
	}
	return t || n
}

function Kc() {
	let r = document.createEvent("Event");
	return r.initEvent("event", !0, !0), r.timeStamp
}

function Ut(r, e = !1) {
	if (!(ee && r.domObserver.flushingSoon >= 0)) {
		if (r.domObserver.forceFlush(), qs(r), e || r.docView && r.docView.dirty) {
			let t = Hn(r);
			return t && !t.eq(r.state.selection) ? r.dispatch(r.state.tr.setSelection(t)) : r.updateState(r.state), !0
		}
		return !1
	}
}

function Jc(r, e) {
	if (!r.dom.parentNode) return;
	let t = r.dom.parentNode.appendChild(document.createElement("div"));
	t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
	let n = getSelection(),
		i = document.createRange();
	i.selectNodeContents(e), r.dom.blur(), n.removeAllRanges(), n.addRange(i), setTimeout(() => {
		t.parentNode && t.parentNode.removeChild(t), r.focus()
	}, 50)
}
const Ct = H && be < 15 || nt && Va < 604;
J.copy = W.cut = (r, e) => {
	let t = e,
		n = r.state.selection,
		i = t.type == "cut";
	if (n.empty) return;
	let s = Ct ? null : t.clipboardData,
		o = n.content(),
		{
			dom: l,
			text: a
		} = As(r, o);
	s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : Jc(r, l), i && r.dispatch(r.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"))
};

function Wc(r) {
	return r.openStart == 0 && r.openEnd == 0 && r.content.childCount == 1 ? r.content.firstChild : null
}

function _c(r, e) {
	if (!r.dom.parentNode) return;
	let t = r.input.shiftKey || r.state.selection.$from.parent.type.spec.code,
		n = r.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
	t || (n.contentEditable = "true"), n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus();
	let i = r.input.shiftKey && r.input.lastKeyCode != 45;
	setTimeout(() => {
		r.focus(), n.parentNode && n.parentNode.removeChild(n), t ? wt(r, n.value, null, i, e) : wt(r, n.textContent, n.innerHTML, i, e)
	}, 50)
}

function wt(r, e, t, n, i) {
	let s = Rs(r, e, t, n, r.state.selection.$from);
	if (r.someProp("handlePaste", a => a(r, i, s || S.empty))) return !0;
	if (!s) return !1;
	let o = Wc(s),
		l = o ? r.state.tr.replaceSelectionWith(o, n) : r.state.tr.replaceSelection(s);
	return r.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0
}

function Ks(r) {
	let e = r.getData("text/plain") || r.getData("Text");
	if (e) return e;
	let t = r.getData("text/uri-list");
	return t ? t.replace(/\r?\n/g, " ") : ""
}
W.paste = (r, e) => {
	let t = e;
	if (r.composing && !ee) return;
	let n = Ct ? null : t.clipboardData,
		i = r.input.shiftKey && r.input.lastKeyCode != 45;
	n && wt(r, Ks(n), n.getData("text/html"), i, t) ? t.preventDefault() : _c(r, t)
};
class Js {
	constructor(e, t, n) {
		this.slice = e, this.move = t, this.node = n
	}
}
const Ws = X ? "altKey" : "ctrlKey";
J.dragstart = (r, e) => {
	let t = e,
		n = r.input.mouseDown;
	if (n && n.done(), !t.dataTransfer) return;
	let i = r.state.selection,
		s = i.empty ? null : r.posAtCoords(tn(t)),
		o;
	if (!(s && s.pos >= i.from && s.pos <= (i instanceof b ? i.to - 1 : i.to))) {
		if (n && n.mightDrag) o = b.create(r.state.doc, n.mightDrag.pos);
		else if (t.target && t.target.nodeType == 1) {
			let f = r.docView.nearestDesc(t.target, !0);
			f && f.node.type.spec.draggable && f != r.docView && (o = b.create(r.state.doc, f.posBefore))
		}
	}
	let l = (o || r.state.selection).content(),
		{
			dom: a,
			text: c,
			slice: h
		} = As(r, l);
	(!t.dataTransfer.files.length || !L || ps > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Ct ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Ct || t.dataTransfer.setData("text/plain", c), r.dragging = new Js(h, !t[Ws], o)
};
J.dragend = r => {
	let e = r.dragging;
	window.setTimeout(() => {
		r.dragging == e && (r.dragging = null)
	}, 50)
};
W.dragover = W.dragenter = (r, e) => e.preventDefault();
W.drop = (r, e) => {
	let t = e,
		n = r.dragging;
	if (r.dragging = null, !t.dataTransfer) return;
	let i = r.posAtCoords(tn(t));
	if (!i) return;
	let s = r.state.doc.resolve(i.pos),
		o = n && n.slice;
	o ? r.someProp("transformPasted", d => {
		o = d(o, r)
	}) : o = Rs(r, Ks(t.dataTransfer), Ct ? null : t.dataTransfer.getData("text/html"), !1, s);
	let l = !!(n && !t[Ws]);
	if (r.someProp("handleDrop", d => d(r, t, o || S.empty, l))) {
		t.preventDefault();
		return
	}
	if (!o) return;
	t.preventDefault();
	let a = o ? Zl(r.state.doc, s.pos, o) : s.pos;
	a == null && (a = s.pos);
	let c = r.state.tr;
	if (l) {
		let {
			node: d
		} = n;
		d ? d.replace(c) : c.deleteSelection()
	}
	let h = c.mapping.map(a),
		f = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1,
		u = c.doc;
	if (f ? c.replaceRangeWith(h, h, o.content.firstChild) : c.replaceRange(h, h, o), c.doc.eq(u)) return;
	let p = c.doc.resolve(h);
	if (f && b.isSelectable(o.content.firstChild) && p.nodeAfter && p.nodeAfter.sameMarkup(o.content.firstChild)) c.setSelection(new b(p));
	else {
		let d = c.mapping.map(a);
		c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, k, O) => d = O), c.setSelection($n(r, p, c.doc.resolve(d)))
	}
	r.focus(), r.dispatch(c.setMeta("uiEvent", "drop"))
};
J.focus = r => {
	r.input.lastFocus = Date.now(), r.focused || (r.domObserver.stop(), r.dom.classList.add("ProseMirror-focused"), r.domObserver.start(), r.focused = !0, setTimeout(() => {
		r.docView && r.hasFocus() && !r.domObserver.currentSelection.eq(r.domSelectionRange()) && ue(r)
	}, 20))
};
J.blur = (r, e) => {
	let t = e;
	r.focused && (r.domObserver.stop(), r.dom.classList.remove("ProseMirror-focused"), r.domObserver.start(), t.relatedTarget && r.dom.contains(t.relatedTarget) && r.domObserver.currentSelection.clear(), r.focused = !1)
};
J.beforeinput = (r, e) => {
	if (L && ee && e.inputType == "deleteContentBackward") {
		r.domObserver.flushSoon();
		let {
			domChangeCount: n
		} = r.input;
		setTimeout(() => {
			if (r.input.domChangeCount != n || (r.dom.blur(), r.focus(), r.someProp("handleKeyDown", s => s(r, Ee(8, "Backspace"))))) return;
			let {
				$cursor: i
			} = r.state.selection;
			i && i.pos > 0 && r.dispatch(r.state.tr.delete(i.pos - 1, i.pos).scrollIntoView())
		}, 50)
	}
};
for (let r in W) J[r] = W[r];

function Mt(r, e) {
	if (r == e) return !0;
	for (let t in r)
		if (r[t] !== e[t]) return !1;
	for (let t in e)
		if (!(t in r)) return !1;
	return !0
}
class jt {
	constructor(e, t) {
		this.toDOM = e, this.spec = t || ve, this.side = this.spec.side || 0
	}
	map(e, t, n, i) {
		let {
			pos: s,
			deleted: o
		} = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
		return o ? null : new _(s - n, s - n, this)
	}
	valid() {
		return !0
	}
	eq(e) {
		return this == e || e instanceof jt && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Mt(this.spec, e.spec))
	}
	destroy(e) {
		this.spec.destroy && this.spec.destroy(e)
	}
}
class we {
	constructor(e, t) {
		this.attrs = e, this.spec = t || ve
	}
	map(e, t, n, i) {
		let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - n,
			o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - n;
		return s >= o ? null : new _(s, o, this)
	}
	valid(e, t) {
		return t.from < t.to
	}
	eq(e) {
		return this == e || e instanceof we && Mt(this.attrs, e.attrs) && Mt(this.spec, e.spec)
	}
	static is(e) {
		return e.type instanceof we
	}
	destroy() {}
}
class Yn {
	constructor(e, t) {
		this.attrs = e, this.spec = t || ve
	}
	map(e, t, n, i) {
		let s = e.mapResult(t.from + i, 1);
		if (s.deleted) return null;
		let o = e.mapResult(t.to + i, -1);
		return o.deleted || o.pos <= s.pos ? null : new _(s.pos - n, o.pos - n, this)
	}
	valid(e, t) {
		let {
			index: n,
			offset: i
		} = e.content.findIndex(t.from), s;
		return i == t.from && !(s = e.child(n)).isText && i + s.nodeSize == t.to
	}
	eq(e) {
		return this == e || e instanceof Yn && Mt(this.attrs, e.attrs) && Mt(this.spec, e.spec)
	}
	destroy() {}
}
class _ {
	constructor(e, t, n) {
		this.from = e, this.to = t, this.type = n
	}
	copy(e, t) {
		return new _(e, t, this.type)
	}
	eq(e, t = 0) {
		return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
	}
	map(e, t, n) {
		return this.type.map(e, this, t, n)
	}
	static widget(e, t, n) {
		return new _(e, e, new jt(t, n))
	}
	static inline(e, t, n, i) {
		return new _(e, t, new we(n, i))
	}
	static node(e, t, n, i) {
		return new _(e, t, new Yn(n, i))
	}
	get spec() {
		return this.type.spec
	}
	get inline() {
		return this.type instanceof we
	}
	get widget() {
		return this.type instanceof jt
	}
}
const Ye = [],
	ve = {};
class N {
	constructor(e, t) {
		this.local = e.length ? e : Ye, this.children = t.length ? t : Ye
	}
	static create(e, t) {
		return t.length ? Gt(t, e, 0, ve) : F
	}
	find(e, t, n) {
		let i = [];
		return this.findInner(e ?? 0, t ?? 1e9, i, 0, n), i
	}
	findInner(e, t, n, i, s) {
		for (let o = 0; o < this.local.length; o++) {
			let l = this.local[o];
			l.from <= t && l.to >= e && (!s || s(l.spec)) && n.push(l.copy(l.from + i, l.to + i))
		}
		for (let o = 0; o < this.children.length; o += 3)
			if (this.children[o] < t && this.children[o + 1] > e) {
				let l = this.children[o] + 1;
				this.children[o + 2].findInner(e - l, t - l, n, i + l, s)
			}
	}
	map(e, t, n) {
		return this == F || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, n || ve)
	}
	mapInner(e, t, n, i, s) {
		let o;
		for (let l = 0; l < this.local.length; l++) {
			let a = this.local[l].map(e, n, i);
			a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec)
		}
		return this.children.length ? Hc(this.children, o || [], e, t, n, i, s) : o ? new N(o.sort(Fe), Ye) : F
	}
	add(e, t) {
		return t.length ? this == F ? N.create(e, t) : this.addInner(e, t, 0) : this
	}
	addInner(e, t, n) {
		let i, s = 0;
		e.forEach((l, a) => {
			let c = a + n,
				h;
			if (h = Hs(t, l, c)) {
				for (i || (i = this.children.slice()); s < i.length && i[s] < a;) s += 3;
				i[s] == a ? i[s + 2] = i[s + 2].addInner(l, h, c + 1) : i.splice(s, 0, a, a + l.nodeSize, Gt(h, l, c + 1, ve)), s += 3
			}
		});
		let o = _s(s ? $s(t) : t, -n);
		for (let l = 0; l < o.length; l++) o[l].type.valid(e, o[l]) || o.splice(l--, 1);
		return new N(o.length ? this.local.concat(o).sort(Fe) : this.local, i || this.children)
	}
	remove(e) {
		return e.length == 0 || this == F ? this : this.removeInner(e, 0)
	}
	removeInner(e, t) {
		let n = this.children,
			i = this.local;
		for (let s = 0; s < n.length; s += 3) {
			let o, l = n[s] + t,
				a = n[s + 1] + t;
			for (let h = 0, f; h < e.length; h++)(f = e[h]) && f.from > l && f.to < a && (e[h] = null, (o || (o = [])).push(f));
			if (!o) continue;
			n == this.children && (n = this.children.slice());
			let c = n[s + 2].removeInner(o, l + 1);
			c != F ? n[s + 2] = c : (n.splice(s, 3), s -= 3)
		}
		if (i.length) {
			for (let s = 0, o; s < e.length; s++)
				if (o = e[s])
					for (let l = 0; l < i.length; l++) i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1))
		}
		return n == this.children && i == this.local ? this : i.length || n.length ? new N(i, n) : F
	}
	forChild(e, t) {
		if (this == F) return this;
		if (t.isLeaf) return N.empty;
		let n, i;
		for (let l = 0; l < this.children.length; l += 3)
			if (this.children[l] >= e) {
				this.children[l] == e && (n = this.children[l + 2]);
				break
			} let s = e + 1,
			o = s + t.content.size;
		for (let l = 0; l < this.local.length; l++) {
			let a = this.local[l];
			if (a.from < o && a.to > s && a.type instanceof we) {
				let c = Math.max(s, a.from) - s,
					h = Math.min(o, a.to) - s;
				c < h && (i || (i = [])).push(a.copy(c, h))
			}
		}
		if (i) {
			let l = new N(i.sort(Fe), Ye);
			return n ? new ye([l, n]) : l
		}
		return n || F
	}
	eq(e) {
		if (this == e) return !0;
		if (!(e instanceof N) || this.local.length != e.local.length || this.children.length != e.children.length) return !1;
		for (let t = 0; t < this.local.length; t++)
			if (!this.local[t].eq(e.local[t])) return !1;
		for (let t = 0; t < this.children.length; t += 3)
			if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2])) return !1;
		return !0
	}
	locals(e) {
		return Xn(this.localsInner(e))
	}
	localsInner(e) {
		if (this == F) return Ye;
		if (e.inlineContent || !this.local.some(we.is)) return this.local;
		let t = [];
		for (let n = 0; n < this.local.length; n++) this.local[n].type instanceof we || t.push(this.local[n]);
		return t
	}
}
N.empty = new N([], []);
N.removeOverlap = Xn;
const F = N.empty;
class ye {
	constructor(e) {
		this.members = e
	}
	map(e, t) {
		const n = this.members.map(i => i.map(e, t, ve));
		return ye.from(n)
	}
	forChild(e, t) {
		if (t.isLeaf) return N.empty;
		let n = [];
		for (let i = 0; i < this.members.length; i++) {
			let s = this.members[i].forChild(e, t);
			s != F && (s instanceof ye ? n = n.concat(s.members) : n.push(s))
		}
		return ye.from(n)
	}
	eq(e) {
		if (!(e instanceof ye) || e.members.length != this.members.length) return !1;
		for (let t = 0; t < this.members.length; t++)
			if (!this.members[t].eq(e.members[t])) return !1;
		return !0
	}
	locals(e) {
		let t, n = !0;
		for (let i = 0; i < this.members.length; i++) {
			let s = this.members[i].localsInner(e);
			if (s.length)
				if (!t) t = s;
				else {
					n && (t = t.slice(), n = !1);
					for (let o = 0; o < s.length; o++) t.push(s[o])
				}
		}
		return t ? Xn(n ? t : t.sort(Fe)) : Ye
	}
	static from(e) {
		switch (e.length) {
			case 0:
				return F;
			case 1:
				return e[0];
			default:
				return new ye(e.every(t => t instanceof N) ? e : e.reduce((t, n) => t.concat(n instanceof N ? n : n.members), []))
		}
	}
}

function Hc(r, e, t, n, i, s, o) {
	let l = r.slice();
	for (let c = 0, h = s; c < t.maps.length; c++) {
		let f = 0;
		t.maps[c].forEach((u, p, d, m) => {
			let g = m - d - (p - u);
			for (let k = 0; k < l.length; k += 3) {
				let O = l[k + 1];
				if (O < 0 || u > O + h - f) continue;
				let z = l[k] + h - f;
				p >= z ? l[k + 1] = u <= z ? -2 : -1 : u >= h && g && (l[k] += g, l[k + 1] += g)
			}
			f += g
		}), h = t.maps[c].map(h, -1)
	}
	let a = !1;
	for (let c = 0; c < l.length; c += 3)
		if (l[c + 1] < 0) {
			if (l[c + 1] == -2) {
				a = !0, l[c + 1] = -1;
				continue
			}
			let h = t.map(r[c] + s),
				f = h - i;
			if (f < 0 || f >= n.content.size) {
				a = !0;
				continue
			}
			let u = t.map(r[c + 1] + s, -1),
				p = u - i,
				{
					index: d,
					offset: m
				} = n.content.findIndex(f),
				g = n.maybeChild(d);
			if (g && m == f && m + g.nodeSize == p) {
				let k = l[c + 2].mapInner(t, g, h + 1, r[c] + s + 1, o);
				k != F ? (l[c] = f, l[c + 1] = p, l[c + 2] = k) : (l[c + 1] = -2, a = !0)
			} else a = !0
		} if (a) {
		let c = $c(l, r, e, t, i, s, o),
			h = Gt(c, n, 0, o);
		e = h.local;
		for (let f = 0; f < l.length; f += 3) l[f + 1] < 0 && (l.splice(f, 3), f -= 3);
		for (let f = 0, u = 0; f < h.children.length; f += 3) {
			let p = h.children[f];
			for (; u < l.length && l[u] < p;) u += 3;
			l.splice(u, 0, h.children[f], h.children[f + 1], h.children[f + 2])
		}
	}
	return new N(e.sort(Fe), l)
}

function _s(r, e) {
	if (!e || !r.length) return r;
	let t = [];
	for (let n = 0; n < r.length; n++) {
		let i = r[n];
		t.push(new _(i.from + e, i.to + e, i.type))
	}
	return t
}

function $c(r, e, t, n, i, s, o) {
	function l(a, c) {
		for (let h = 0; h < a.local.length; h++) {
			let f = a.local[h].map(n, i, c);
			f ? t.push(f) : o.onRemove && o.onRemove(a.local[h].spec)
		}
		for (let h = 0; h < a.children.length; h += 3) l(a.children[h + 2], a.children[h] + c + 1)
	}
	for (let a = 0; a < r.length; a += 3) r[a + 1] == -1 && l(r[a + 2], e[a] + s + 1);
	return t
}

function Hs(r, e, t) {
	if (e.isLeaf) return null;
	let n = t + e.nodeSize,
		i = null;
	for (let s = 0, o; s < r.length; s++)(o = r[s]) && o.from > t && o.to < n && ((i || (i = [])).push(o), r[s] = null);
	return i
}

function $s(r) {
	let e = [];
	for (let t = 0; t < r.length; t++) r[t] != null && e.push(r[t]);
	return e
}

function Gt(r, e, t, n) {
	let i = [],
		s = !1;
	e.forEach((l, a) => {
		let c = Hs(r, l, a + t);
		if (c) {
			s = !0;
			let h = Gt(c, l, t + a + 1, n);
			h != F && i.push(a, a + l.nodeSize, h)
		}
	});
	let o = _s(s ? $s(r) : r, -t).sort(Fe);
	for (let l = 0; l < o.length; l++) o[l].type.valid(e, o[l]) || (n.onRemove && n.onRemove(o[l].spec), o.splice(l--, 1));
	return o.length || i.length ? new N(o, i) : F
}

function Fe(r, e) {
	return r.from - e.from || r.to - e.to
}

function Xn(r) {
	let e = r;
	for (let t = 0; t < e.length - 1; t++) {
		let n = e[t];
		if (n.from != n.to)
			for (let i = t + 1; i < e.length; i++) {
				let s = e[i];
				if (s.from == n.from) {
					s.to != n.to && (e == r && (e = r.slice()), e[i] = s.copy(s.from, n.to), ci(e, i + 1, s.copy(n.to, s.to)));
					continue
				} else {
					s.from < n.to && (e == r && (e = r.slice()), e[t] = n.copy(n.from, s.from), ci(e, i, n.copy(s.from, n.to)));
					break
				}
			}
	}
	return e
}

function ci(r, e, t) {
	for (; e < r.length && Fe(t, r[e]) > 0;) e++;
	r.splice(e, 0, t)
}

function Sn(r) {
	let e = [];
	return r.someProp("decorations", t => {
		let n = t(r.state);
		n && n != F && e.push(n)
	}), r.cursorWrapper && e.push(N.create(r.state.doc, [r.cursorWrapper.deco])), ye.from(e)
}
const Uc = {
		childList: !0,
		characterData: !0,
		characterDataOldValue: !0,
		attributes: !0,
		attributeOldValue: !0,
		subtree: !0
	},
	jc = H && be <= 11;
class Gc {
	constructor() {
		this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0
	}
	set(e) {
		this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset
	}
	clear() {
		this.anchorNode = this.focusNode = null
	}
	eq(e) {
		return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset
	}
}
class Yc {
	constructor(e, t) {
		this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Gc, this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver(n => {
			for (let i = 0; i < n.length; i++) this.queue.push(n[i]);
			H && be <= 11 && n.some(i => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush()
		}), jc && (this.onCharData = n => {
			this.queue.push({
				target: n.target,
				type: "characterData",
				oldValue: n.prevValue
			}), this.flushSoon()
		}), this.onSelectionChange = this.onSelectionChange.bind(this)
	}
	flushSoon() {
		this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
			this.flushingSoon = -1, this.flush()
		}, 20))
	}
	forceFlush() {
		this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush())
	}
	start() {
		this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Uc)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection()
	}
	stop() {
		if (this.observer) {
			let e = this.observer.takeRecords();
			if (e.length) {
				for (let t = 0; t < e.length; t++) this.queue.push(e[t]);
				window.setTimeout(() => this.flush(), 20)
			}
			this.observer.disconnect()
		}
		this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection()
	}
	connectSelection() {
		this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange)
	}
	disconnectSelection() {
		this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange)
	}
	suppressSelectionUpdates() {
		this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50)
	}
	onSelectionChange() {
		if (ti(this.view)) {
			if (this.suppressingSelectionUpdates) return ue(this.view);
			if (H && be <= 11 && !this.view.state.selection.empty) {
				let e = this.view.domSelectionRange();
				if (e.focusNode && Le(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon()
			}
			this.flush()
		}
	}
	setCurSelection() {
		this.currentSelection.set(this.view.domSelectionRange())
	}
	ignoreSelectionChange(e) {
		if (!e.focusNode) return !0;
		let t = new Set,
			n;
		for (let s = e.focusNode; s; s = bt(s)) t.add(s);
		for (let s = e.anchorNode; s; s = bt(s))
			if (t.has(s)) {
				n = s;
				break
			} let i = n && this.view.docView.nearestDesc(n);
		if (i && i.ignoreMutation({
				type: "selection",
				target: n.nodeType == 3 ? n.parentNode : n
			})) return this.setCurSelection(), !0
	}
	pendingRecords() {
		if (this.observer)
			for (let e of this.observer.takeRecords()) this.queue.push(e);
		return this.queue
	}
	flush() {
		let {
			view: e
		} = this;
		if (!e.docView || this.flushingSoon > -1) return;
		let t = this.pendingRecords();
		t.length && (this.queue = []);
		let n = e.domSelectionRange(),
			i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(n) && ti(e) && !this.ignoreSelectionChange(n),
			s = -1,
			o = -1,
			l = !1,
			a = [];
		if (e.editable)
			for (let h = 0; h < t.length; h++) {
				let f = this.registerMutation(t[h], a);
				f && (s = s < 0 ? f.from : Math.min(f.from, s), o = o < 0 ? f.to : Math.max(f.to, o), f.typeOver && (l = !0))
			}
		if (te && a.length) {
			let h = a.filter(f => f.nodeName == "BR");
			if (h.length == 2) {
				let [f, u] = h;
				f.parentNode && f.parentNode.parentNode == u.parentNode ? u.remove() : f.remove()
			} else {
				let {
					focusNode: f
				} = this.currentSelection;
				for (let u of h) {
					let p = u.parentNode;
					p && p.nodeName == "LI" && (!f || Zc(e, f) != p) && u.remove()
				}
			}
		}
		let c = null;
		s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Zt(n) && (c = Hn(e)) && c.eq(w.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, ue(e), this.currentSelection.set(n), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), Xc(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(n) || ue(e), this.currentSelection.set(n))
	}
	registerMutation(e, t) {
		if (t.indexOf(e.target) > -1) return null;
		let n = this.view.docView.nearestDesc(e.target);
		if (e.type == "attributes" && (n == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !n || n.ignoreMutation(e)) return null;
		if (e.type == "childList") {
			for (let h = 0; h < e.addedNodes.length; h++) {
				let f = e.addedNodes[h];
				t.push(f), f.nodeType == 3 && (this.lastChangedTextNode = f)
			}
			if (n.contentDOM && n.contentDOM != n.dom && !n.contentDOM.contains(e.target)) return {
				from: n.posBefore,
				to: n.posAfter
			};
			let i = e.previousSibling,
				s = e.nextSibling;
			if (H && be <= 11 && e.addedNodes.length)
				for (let h = 0; h < e.addedNodes.length; h++) {
					let {
						previousSibling: f,
						nextSibling: u
					} = e.addedNodes[h];
					(!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (i = f), (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (s = u)
				}
			let o = i && i.parentNode == e.target ? P(i) + 1 : 0,
				l = n.localPosFromDOM(e.target, o, -1),
				a = s && s.parentNode == e.target ? P(s) : e.target.childNodes.length,
				c = n.localPosFromDOM(e.target, a, 1);
			return {
				from: l,
				to: c
			}
		} else return e.type == "attributes" ? {
			from: n.posAtStart - n.border,
			to: n.posAtEnd + n.border
		} : (this.lastChangedTextNode = e.target, {
			from: n.posAtStart,
			to: n.posAtEnd,
			typeOver: e.target.nodeValue == e.oldValue
		})
	}
}
let hi = new WeakMap,
	fi = !1;

function Xc(r) {
	if (!hi.has(r) && (hi.set(r, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(r.dom).whiteSpace) !== -1)) {
		if (r.requiresGeckoHackNode = te, fi) return;
		console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), fi = !0
	}
}

function ui(r, e) {
	let t = e.startContainer,
		n = e.startOffset,
		i = e.endContainer,
		s = e.endOffset,
		o = r.domAtPos(r.state.selection.anchor);
	return Le(o.node, o.offset, i, s) && ([t, n, i, s] = [i, s, t, n]), {
		anchorNode: t,
		anchorOffset: n,
		focusNode: i,
		focusOffset: s
	}
}

function Qc(r, e) {
	if (e.getComposedRanges) {
		let i = e.getComposedRanges(r.root)[0];
		if (i) return ui(r, i)
	}
	let t;

	function n(i) {
		i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0]
	}
	return r.dom.addEventListener("beforeinput", n, !0), document.execCommand("indent"), r.dom.removeEventListener("beforeinput", n, !0), t ? ui(r, t) : null
}

function Zc(r, e) {
	for (let t = e.parentNode; t && t != r.dom; t = t.parentNode) {
		let n = r.docView.nearestDesc(t, !0);
		if (n && n.node.isBlock) return t
	}
	return null
}

function eh(r, e, t) {
	let {
		node: n,
		fromOffset: i,
		toOffset: s,
		from: o,
		to: l
	} = r.docView.parseRange(e, t), a = r.domSelectionRange(), c, h = a.anchorNode;
	if (h && r.dom.contains(h.nodeType == 1 ? h : h.parentNode) && (c = [{
			node: h,
			offset: a.anchorOffset
		}], Zt(a) || c.push({
			node: a.focusNode,
			offset: a.focusOffset
		})), L && r.input.lastKeyCode === 8)
		for (let g = s; g > i; g--) {
			let k = n.childNodes[g - 1],
				O = k.pmViewDesc;
			if (k.nodeName == "BR" && !O) {
				s = g;
				break
			}
			if (!O || O.size) break
		}
	let f = r.state.doc,
		u = r.someProp("domParser") || kt.fromSchema(r.state.schema),
		p = f.resolve(o),
		d = null,
		m = u.parse(n, {
			topNode: p.parent,
			topMatch: p.parent.contentMatchAt(p.index()),
			topOpen: !0,
			from: i,
			to: s,
			preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
			findPositions: c,
			ruleFromNode: th,
			context: p
		});
	if (c && c[0].pos != null) {
		let g = c[0].pos,
			k = c[1] && c[1].pos;
		k == null && (k = g), d = {
			anchor: g + o,
			head: k + o
		}
	}
	return {
		doc: m,
		sel: d,
		from: o,
		to: l
	}
}

function th(r) {
	let e = r.pmViewDesc;
	if (e) return e.parseRule();
	if (r.nodeName == "BR" && r.parentNode) {
		if (K && /^(ul|ol)$/i.test(r.parentNode.nodeName)) {
			let t = document.createElement("div");
			return t.appendChild(document.createElement("li")), {
				skip: t
			}
		} else if (r.parentNode.lastChild == r || K && /^(tr|table)$/i.test(r.parentNode.nodeName)) return {
			ignore: !0
		}
	} else if (r.nodeName == "IMG" && r.getAttribute("mark-placeholder")) return {
		ignore: !0
	};
	return null
}
const nh = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;

function rh(r, e, t, n, i) {
	let s = r.input.compositionPendingChanges || (r.composing ? r.input.compositionID : 0);
	if (r.input.compositionPendingChanges = 0, e < 0) {
		let x = r.input.lastSelectionTime > Date.now() - 50 ? r.input.lastSelectionOrigin : null,
			v = Hn(r, x);
		if (v && !r.state.selection.eq(v)) {
			if (L && ee && r.input.lastKeyCode === 13 && Date.now() - 100 < r.input.lastKeyCodeTime && r.someProp("handleKeyDown", Y => Y(r, Ee(13, "Enter")))) return;
			let I = r.state.tr.setSelection(v);
			x == "pointer" ? I.setMeta("pointer", !0) : x == "key" && I.scrollIntoView(), s && I.setMeta("composition", s), r.dispatch(I)
		}
		return
	}
	let o = r.state.doc.resolve(e),
		l = o.sharedDepth(t);
	e = o.before(l + 1), t = r.state.doc.resolve(t).after(l + 1);
	let a = r.state.selection,
		c = eh(r, e, t),
		h = r.state.doc,
		f = h.slice(c.from, c.to),
		u, p;
	r.input.lastKeyCode === 8 && Date.now() - 100 < r.input.lastKeyCodeTime ? (u = r.state.selection.to, p = "end") : (u = r.state.selection.from, p = "start"), r.input.lastKeyCode = null;
	let d = oh(f.content, c.doc.content, c.from, u, p);
	if ((nt && r.input.lastIOSEnter > Date.now() - 225 || ee) && i.some(x => x.nodeType == 1 && !nh.test(x.nodeName)) && (!d || d.endA >= d.endB) && r.someProp("handleKeyDown", x => x(r, Ee(13, "Enter")))) {
		r.input.lastIOSEnter = 0;
		return
	}
	if (!d)
		if (n && a instanceof M && !a.empty && a.$head.sameParent(a.$anchor) && !r.composing && !(c.sel && c.sel.anchor != c.sel.head)) d = {
			start: a.from,
			endA: a.to,
			endB: a.to
		};
		else {
			if (c.sel) {
				let x = di(r, r.state.doc, c.sel);
				if (x && !x.eq(r.state.selection)) {
					let v = r.state.tr.setSelection(x);
					s && v.setMeta("composition", s), r.dispatch(v)
				}
			}
			return
		} r.input.domChangeCount++, r.state.selection.from < r.state.selection.to && d.start == d.endB && r.state.selection instanceof M && (d.start > r.state.selection.from && d.start <= r.state.selection.from + 2 && r.state.selection.from >= c.from ? d.start = r.state.selection.from : d.endA < r.state.selection.to && d.endA >= r.state.selection.to - 2 && r.state.selection.to <= c.to && (d.endB += r.state.selection.to - d.endA, d.endA = r.state.selection.to)), H && be <= 11 && d.endB == d.start + 1 && d.endA == d.start && d.start > c.from && c.doc.textBetween(d.start - c.from - 1, d.start - c.from + 1) == "  " && (d.start--, d.endA--, d.endB--);
	let m = c.doc.resolveNoCache(d.start - c.from),
		g = c.doc.resolveNoCache(d.endB - c.from),
		k = h.resolve(d.start),
		O = m.sameParent(g) && m.parent.inlineContent && k.end() >= d.endA,
		z;
	if ((nt && r.input.lastIOSEnter > Date.now() - 225 && (!O || i.some(x => x.nodeName == "DIV" || x.nodeName == "P")) || !O && m.pos < c.doc.content.size && !m.sameParent(g) && (z = w.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && z.head == g.pos) && r.someProp("handleKeyDown", x => x(r, Ee(13, "Enter")))) {
		r.input.lastIOSEnter = 0;
		return
	}
	if (r.state.selection.anchor > d.start && sh(h, d.start, d.endA, m, g) && r.someProp("handleKeyDown", x => x(r, Ee(8, "Backspace")))) {
		ee && L && r.domObserver.suppressSelectionUpdates();
		return
	}
	L && ee && d.endB == d.start && (r.input.lastAndroidDelete = Date.now()), ee && !O && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == d.endA && (d.endB -= 2, g = c.doc.resolveNoCache(d.endB - c.from), setTimeout(() => {
		r.someProp("handleKeyDown", function(x) {
			return x(r, Ee(13, "Enter"))
		})
	}, 20));
	let $ = d.start,
		q = d.endA,
		A, de, R;
	if (O) {
		if (m.pos == g.pos) H && be <= 11 && m.parentOffset == 0 && (r.domObserver.suppressSelectionUpdates(), setTimeout(() => ue(r), 20)), A = r.state.tr.delete($, q), de = h.resolve(d.start).marksAcross(h.resolve(d.endA));
		else if (d.endA == d.endB && (R = ih(m.parent.content.cut(m.parentOffset, g.parentOffset), k.parent.content.cut(k.parentOffset, d.endA - k.start())))) A = r.state.tr, R.type == "add" ? A.addMark($, q, R.mark) : A.removeMark($, q, R.mark);
		else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
			let x = m.parent.textBetween(m.parentOffset, g.parentOffset);
			if (r.someProp("handleTextInput", v => v(r, $, q, x))) return;
			A = r.state.tr.insertText(x, $, q)
		}
	}
	if (A || (A = r.state.tr.replace($, q, c.doc.slice(d.start - c.from, d.endB - c.from))), c.sel) {
		let x = di(r, A.doc, c.sel);
		x && !(L && ee && r.composing && x.empty && (d.start != d.endB || r.input.lastAndroidDelete < Date.now() - 100) && (x.head == $ || x.head == A.mapping.map(q) - 1) || H && x.empty && x.head == $) && A.setSelection(x)
	}
	de && A.ensureMarks(de), s && A.setMeta("composition", s), r.dispatch(A.scrollIntoView())
}

function di(r, e, t) {
	return Math.max(t.anchor, t.head) > e.content.size ? null : $n(r, e.resolve(t.anchor), e.resolve(t.head))
}

function ih(r, e) {
	let t = r.firstChild.marks,
		n = e.firstChild.marks,
		i = t,
		s = n,
		o, l, a;
	for (let h = 0; h < n.length; h++) i = n[h].removeFromSet(i);
	for (let h = 0; h < t.length; h++) s = t[h].removeFromSet(s);
	if (i.length == 1 && s.length == 0) l = i[0], o = "add", a = h => h.mark(l.addToSet(h.marks));
	else if (i.length == 0 && s.length == 1) l = s[0], o = "remove", a = h => h.mark(l.removeFromSet(h.marks));
	else return null;
	let c = [];
	for (let h = 0; h < e.childCount; h++) c.push(a(e.child(h)));
	if (y.from(c).eq(r)) return {
		mark: l,
		type: o
	}
}

function sh(r, e, t, n, i) {
	if (t - e <= i.pos - n.pos || kn(n, !0, !1) < i.pos) return !1;
	let s = r.resolve(e);
	if (!n.parent.isTextblock) {
		let l = s.nodeAfter;
		return l != null && t == e + l.nodeSize
	}
	if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock) return !1;
	let o = r.resolve(kn(s, !0, !0));
	return !o.parent.isTextblock || o.pos > t || kn(o, !0, !1) < t ? !1 : n.parent.content.cut(n.parentOffset).eq(o.parent.content)
}

function kn(r, e, t) {
	let n = r.depth,
		i = e ? r.end() : r.pos;
	for (; n > 0 && (e || r.indexAfter(n) == r.node(n).childCount);) n--, i++, e = !1;
	if (t) {
		let s = r.node(n).maybeChild(r.indexAfter(n));
		for (; s && !s.isLeaf;) s = s.firstChild, i++
	}
	return i
}

function oh(r, e, t, n, i) {
	let s = r.findDiffStart(e, t);
	if (s == null) return null;
	let {
		a: o,
		b: l
	} = r.findDiffEnd(e, t + r.size, t + e.size);
	if (i == "end") {
		let a = Math.max(0, s - Math.min(o, l));
		n -= o + a - s
	}
	if (o < s && r.size < e.size) {
		let a = n <= s && n >= o ? s - n : 0;
		s -= a, s && s < e.size && pi(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), l = s + (l - o), o = s
	} else if (l < s) {
		let a = n <= s && n >= l ? s - n : 0;
		s -= a, s && s < r.size && pi(r.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), o = s + (o - l), l = s
	}
	return {
		start: s,
		endA: o,
		endB: l
	}
}

function pi(r) {
	if (r.length != 2) return !1;
	let e = r.charCodeAt(0),
		t = r.charCodeAt(1);
	return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319
}
class Vh {
	constructor(e, t) {
		this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Nc, this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(ki), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = yi(this), gi(this), this.nodeViews = Si(this), this.docView = Gr(this.state.doc, mi(this), Sn(this), this.dom, this), this.domObserver = new Yc(this, (n, i, s, o) => rh(this, n, i, s, o)), this.domObserver.start(), Oc(this), this.updatePluginViews()
	}
	get composing() {
		return this.input.composing
	}
	get props() {
		if (this._props.state != this.state) {
			let e = this._props;
			this._props = {};
			for (let t in e) this._props[t] = e[t];
			this._props.state = this.state
		}
		return this._props
	}
	update(e) {
		e.handleDOMEvents != this._props.handleDOMEvents && zn(this);
		let t = this._props;
		this._props = e, e.plugins && (e.plugins.forEach(ki), this.directPlugins = e.plugins), this.updateStateInner(e.state, t)
	}
	setProps(e) {
		let t = {};
		for (let n in this._props) t[n] = this._props[n];
		t.state = this.state;
		for (let n in e) t[n] = e[n];
		this.update(t)
	}
	updateState(e) {
		this.updateStateInner(e, this._props)
	}
	updateStateInner(e, t) {
		var n;
		let i = this.state,
			s = !1,
			o = !1;
		e.storedMarks && this.composing && (qs(this), o = !0), this.state = e;
		let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
		if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
			let p = Si(this);
			ah(p, this.nodeViews) && (this.nodeViews = p, s = !0)
		}(l || t.handleDOMEvents != this._props.handleDOMEvents) && zn(this), this.editable = yi(this), gi(this);
		let a = Sn(this),
			c = mi(this),
			h = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve",
			f = s || !this.docView.matchesNode(e.doc, c, a);
		(f || !e.selection.eq(i.selection)) && (o = !0);
		let u = h == "preserve" && o && this.dom.style.overflowAnchor == null && Ja(this);
		if (o) {
			this.domObserver.stop();
			let p = f && (H || L) && !this.composing && !i.selection.empty && !e.selection.empty && lh(i.selection, e.selection);
			if (f) {
				let d = L ? this.trackWrites = this.domSelectionRange().focusNode : null;
				this.composing && (this.input.compositionNode = qc(this)), (s || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = Gr(e.doc, c, a, this.dom, this)), d && !this.trackWrites && (p = !0)
			}
			p || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && uc(this)) ? ue(this, p) : (Os(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start()
		}
		this.updatePluginViews(i), !((n = this.dragging) === null || n === void 0) && n.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), h == "reset" ? this.dom.scrollTop = 0 : h == "to selection" ? this.scrollToSelection() : u && Wa(u)
	}
	scrollToSelection() {
		let e = this.domSelectionRange().focusNode;
		if (!this.someProp("handleScrollToSelection", t => t(this)))
			if (this.state.selection instanceof b) {
				let t = this.docView.domAfterPos(this.state.selection.from);
				t.nodeType == 1 && Wr(this, t.getBoundingClientRect(), e)
			} else Wr(this, this.coordsAtPos(this.state.selection.head, 1), e)
	}
	destroyPluginViews() {
		let e;
		for (; e = this.pluginViews.pop();) e.destroy && e.destroy()
	}
	updatePluginViews(e) {
		if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
			this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
			for (let t = 0; t < this.directPlugins.length; t++) {
				let n = this.directPlugins[t];
				n.spec.view && this.pluginViews.push(n.spec.view(this))
			}
			for (let t = 0; t < this.state.plugins.length; t++) {
				let n = this.state.plugins[t];
				n.spec.view && this.pluginViews.push(n.spec.view(this))
			}
		} else
			for (let t = 0; t < this.pluginViews.length; t++) {
				let n = this.pluginViews[t];
				n.update && n.update(this, e)
			}
	}
	updateDraggedNode(e, t) {
		let n = e.node,
			i = -1;
		if (this.state.doc.nodeAt(n.from) == n.node) i = n.from;
		else {
			let s = n.from + (this.state.doc.content.size - t.doc.content.size);
			(s > 0 && this.state.doc.nodeAt(s)) == n.node && (i = s)
		}
		this.dragging = new Js(e.slice, e.move, i < 0 ? void 0 : b.create(this.state.doc, i))
	}
	someProp(e, t) {
		let n = this._props && this._props[e],
			i;
		if (n != null && (i = t ? t(n) : n)) return i;
		for (let o = 0; o < this.directPlugins.length; o++) {
			let l = this.directPlugins[o].props[e];
			if (l != null && (i = t ? t(l) : l)) return i
		}
		let s = this.state.plugins;
		if (s)
			for (let o = 0; o < s.length; o++) {
				let l = s[o].props[e];
				if (l != null && (i = t ? t(l) : l)) return i
			}
	}
	hasFocus() {
		if (H) {
			let e = this.root.activeElement;
			if (e == this.dom) return !0;
			if (!e || !this.dom.contains(e)) return !1;
			for (; e && this.dom != e && this.dom.contains(e);) {
				if (e.contentEditable == "false") return !1;
				e = e.parentElement
			}
			return !0
		}
		return this.root.activeElement == this.dom
	}
	focus() {
		this.domObserver.stop(), this.editable && _a(this.dom), ue(this), this.domObserver.start()
	}
	get root() {
		let e = this._root;
		if (e == null) {
			for (let t = this.dom.parentNode; t; t = t.parentNode)
				if (t.nodeType == 9 || t.nodeType == 11 && t.host) return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t
		}
		return e || document
	}
	updateRoot() {
		this._root = null
	}
	posAtCoords(e) {
		return Ga(this, e)
	}
	coordsAtPos(e, t = 1) {
		return ks(this, e, t)
	}
	domAtPos(e, t = 0) {
		return this.docView.domFromPos(e, t)
	}
	nodeDOM(e) {
		let t = this.docView.descAt(e);
		return t ? t.nodeDOM : null
	}
	posAtDOM(e, t, n = -1) {
		let i = this.docView.posFromDOM(e, t, n);
		if (i == null) throw new RangeError("DOM position not inside the editor");
		return i
	}
	endOfTextblock(e, t) {
		return ec(this, t || this.state, e)
	}
	pasteHTML(e, t) {
		return wt(this, "", e, !1, t || new ClipboardEvent("paste"))
	}
	pasteText(e, t) {
		return wt(this, e, null, !0, t || new ClipboardEvent("paste"))
	}
	destroy() {
		this.docView && (Dc(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Sn(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Ra())
	}
	get isDestroyed() {
		return this.docView == null
	}
	dispatchEvent(e) {
		return Ac(this, e)
	}
	dispatch(e) {
		let t = this._props.dispatchTransaction;
		t ? t.call(this, e) : this.updateState(this.state.apply(e))
	}
	domSelectionRange() {
		let e = this.domSelection();
		return K && this.root.nodeType === 11 && Fa(this.dom.ownerDocument) == this.dom && Qc(this, e) || e
	}
	domSelection() {
		return this.root.getSelection()
	}
}

function mi(r) {
	let e = Object.create(null);
	return e.class = "ProseMirror", e.contenteditable = String(r.editable), r.someProp("attributes", t => {
		if (typeof t == "function" && (t = t(r.state)), t)
			for (let n in t) n == "class" ? e.class += " " + t[n] : n == "style" ? e.style = (e.style ? e.style + ";" : "") + t[n] : !e[n] && n != "contenteditable" && n != "nodeName" && (e[n] = String(t[n]))
	}), e.translate || (e.translate = "no"), [_.node(0, r.state.doc.content.size, e)]
}

function gi(r) {
	if (r.markCursor) {
		let e = document.createElement("img");
		e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), r.cursorWrapper = {
			dom: e,
			deco: _.widget(r.state.selection.head, e, {
				raw: !0,
				marks: r.markCursor
			})
		}
	} else r.cursorWrapper = null
}

function yi(r) {
	return !r.someProp("editable", e => e(r.state) === !1)
}

function lh(r, e) {
	let t = Math.min(r.$anchor.sharedDepth(r.head), e.$anchor.sharedDepth(e.head));
	return r.$anchor.start(t) != e.$anchor.start(t)
}

function Si(r) {
	let e = Object.create(null);

	function t(n) {
		for (let i in n) Object.prototype.hasOwnProperty.call(e, i) || (e[i] = n[i])
	}
	return r.someProp("nodeViews", t), r.someProp("markViews", t), e
}

function ah(r, e) {
	let t = 0,
		n = 0;
	for (let i in r) {
		if (r[i] != e[i]) return !0;
		t++
	}
	for (let i in e) n++;
	return t != n
}

function ki(r) {
	if (r.spec.state || r.spec.filterTransaction || r.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component")
}
const qh = r => r ? {
	enabled: !!bi(r, "463092697").value?.softmentionEnabled
} : {
	enabled: !1
};

function ch() {
	return {
		trackingKeywordsRegex: void 0,
		decorations: N.empty,
		highlightedKeywords: new Set,
		matchedKeywords: new Set
	}
}
const Us = ({
		tr: r,
		regex: e,
		prevHighlightedKeywords: t,
		prevMatchedKeywords: n
	}) => {
		const i = [],
			s = new Set,
			o = new Set;
		return e ? (r.doc.descendants((l, a) => {
			if (!l.isText || !l.text) return;
			const c = l.text;
			for (const h of c.matchAll(e)) {
				if (s.add(h[1]), !t.has(h[1]) && n.has(h[1])) continue;
				o.add(h[1]);
				const f = a + h.index,
					u = f + h[0].length;
				i.push(_.inline(f, u, {
					class: "hint-pill"
				}, {
					keyword: h[1]
				}))
			}
		}), {
			decorations: N.create(r.doc, i),
			matchedKeywords: s,
			highlightedKeywords: o
		}) : {
			decorations: N.empty,
			matchedKeywords: s,
			highlightedKeywords: o
		}
	},
	hh = (r, e) => {
		const {
			state: t,
			dispatch: n
		} = e, i = t.tr, s = Me.getState(t);
		if (s) {
			const o = r.length > 0 ? new RegExp(`\\b(${r.join("|")})\\b`, "gi") : void 0,
				{
					decorations: l,
					highlightedKeywords: a,
					matchedKeywords: c
				} = Us({
					tr: i,
					regex: o,
					prevHighlightedKeywords: s.highlightedKeywords,
					prevMatchedKeywords: s.matchedKeywords
				});
			i.setMeta(Me, {
				...s,
				trackingKeywordsRegex: o,
				decorations: l,
				highlightedKeywords: a,
				matchedKeywords: c
			})
		}
		n(i)
	},
	fh = (r, e) => {
		if (r.length === 0) return;
		const {
			state: t,
			dispatch: n
		} = e, i = t.tr, s = Me.getState(t);
		if (s) {
			const o = s.decorations.remove(s.decorations.find(void 0, void 0, l => l.keyword && r.includes(l.keyword)));
			i.setMeta(Me, {
				...s,
				decorations: o,
				highlightedKeywords: new Set([...s.highlightedKeywords].filter(l => !r.includes(l)))
			})
		}
		n(i)
	},
	Me = new it("keywordPlugin");

function Kh() {
	return new Te({
		key: Me,
		state: {
			init() {
				return ch()
			},
			apply(r, e) {
				if (r.getMeta(Me)) return {
					...e,
					...r.getMeta(Me)
				};
				if (!r.docChanged) return e;
				const {
					decorations: t,
					matchedKeywords: n,
					highlightedKeywords: i
				} = Us({
					tr: r,
					regex: e.trackingKeywordsRegex,
					prevHighlightedKeywords: e.highlightedKeywords,
					prevMatchedKeywords: e.matchedKeywords
				});
				return {
					...e,
					decorations: t,
					highlightedKeywords: i,
					matchedKeywords: n
				}
			}
		},
		props: {
			decorations(r) {
				const e = this.getState(r);
				return e ? e.decorations : N.empty
			}
		}
	})
}
const Ie = new it("menuSelectorPlugin");

function xi(r) {
	r.dispatch(r.state.tr.setMeta(Ie, {
		active: !1,
		onMenuAction: void 0
	}))
}

function Jh(r, e) {
	r.dispatch(r.state.tr.setMeta(Ie, {
		active: !0,
		onMenuAction: e
	}))
}

function Wh(r = {
	submitKeys: ["Enter", "Tab"],
	cancelKeys: ["Escape"],
	checkStrictMatchKeys: [" "]
}) {
	return new Te({
		key: Ie,
		state: {
			init() {
				return {
					...r,
					active: !1
				}
			},
			apply(e, t) {
				const n = e.getMeta(Ie);
				return n ? {
					...t,
					...n
				} : t
			}
		},
		props: {
			handleKeyDown(e, t) {
				const n = Ie.getState(e.state);
				if (!n.active) return !1;
				if (!t.isComposing) return n.submitKeys.includes(t.key) ? (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), xi(e), n.onMenuAction?.("submit") ?? !0) : n.cancelKeys.includes(t.key) ? (t.preventDefault(), n.onMenuAction?.("cancel"), xi(e), !0) : t.key === "ArrowUp" ? (t.preventDefault(), n.onMenuAction?.("up"), !0) : t.key === "ArrowDown" ? (t.preventDefault(), n.onMenuAction?.("down"), !0) : n.checkStrictMatchKeys.includes(t.key) && n.onMenuAction?.("checkMatch") ? (t.preventDefault(), !0) : !1
			},
			handleDOMEvents: {
				blur: e => {
					Ie.getState(e.state).onMenuAction?.("cancel")
				}
			}
		}
	})
}
const dt = new it("placeholderPlugin");

function _h(r) {
	return new Te({
		key: dt,
		state: {
			init() {
				return {
					placeholder: r
				}
			},
			apply(e, t) {
				return e.getMeta(dt) ? {
					placeholder: e.getMeta(dt).placeholder
				} : t
			}
		},
		props: {
			decorations(e) {
				const {
					doc: t
				} = e;
				if (t.childCount === 1 && t.firstChild?.isTextblock && t.firstChild.content.size === 0) {
					const i = [],
						{
							placeholder: s
						} = dt.getState(e);
					return e.doc.descendants((o, l) => {
						const a = _.node(l, l + o.nodeSize, {
							class: "placeholder",
							"data-placeholder": s
						});
						i.push(a)
					}), N.create(t, i)
				}
			}
		}
	})
}
class uh extends Jo {
	constructor(e, t) {
		super(), this.view = e, this.storeOverrides = t, this._store = co(() => ({
			isFocused: !1,
			autocompletions: [],
			showTaggingDropdown: !1,
			waveWidth: 300,
			rateLimitBannerFeature: null,
			isExpanded: !0,
			...t
		})), this.subscribe("focus", () => this._store.setState({
			isFocused: !0
		})), this.subscribe("blur", () => this._store.setState({
			isFocused: !1
		}))
	}
	fileInputHandle = null;
	_store;
	get store() {
		return this._store
	}
	_usedDictation = !1;
	_dictationEdited = !1;
	_dictationAssetPointer = null;
	_dictationAssetTTL = null;
	get usedDictation() {
		return this._usedDictation
	}
	set usedDictation(e) {
		this._usedDictation = e
	}
	get dictationEdited() {
		return this._dictationEdited
	}
	set dictationEdited(e) {
		this._dictationEdited = e
	}
	get dictationAssetPointer() {
		return this._dictationAssetPointer
	}
	set dictationAssetPointer(e) {
		this._dictationAssetPointer = e
	}
	get dictationAssetTTL() {
		return this._dictationAssetTTL
	}
	set dictationAssetTTL(e) {
		this._dictationAssetTTL = e
	}
	get element() {
		return this.view.dom
	}
	get document() {
		return this.view.dom.ownerDocument
	}
	isEmpty() {
		const e = this.view.state.doc;
		if (e.childCount === 0) return !0;
		if (e.childCount === 1 && e.firstChild?.isTextblock) {
			const t = e.firstChild.content;
			if (t.size === 0) return !0;
			if (t.childCount === 1 && t.firstChild?.isText) return /^\s*$/.test(t.firstChild.text ?? "")
		}
		return !1
	}
	isEmpty$ = cr("composer-empty", e => this.subscribe("change", e), () => this.isEmpty());
	isFocused() {
		return this.view.hasFocus()
	}
	isFocused$ = cr("composer-focused", e => {
		const t = this.subscribe("focus", e),
			n = this.subscribe("blur", e);
		return () => {
			n(), t()
		}
	}, () => this.isFocused());
	trimLeadingText(e) {
		const n = this.view.state.tr;
		let i = 0;
		return n.doc.descendants((s, o) => {
			if (s.isText && s.text) {
				if (typeof e == "string" && s.text.startsWith(e)) i = e.length;
				else if (e instanceof RegExp) {
					const l = s.text.match(e);
					l?.index === 0 && (i = l[0].length)
				}
				if (i) {
					const l = s.text.substring(i).trimStart();
					i = s.text.length - l.length, n.delete(o, o + i)
				}
			}
			return !s.isLeaf
		}), i > 0 ? (this.view.dispatch(n), !0) : !1
	}
	replaceAll(e, t) {
		const i = this.view.state.tr,
			s = [];
		i.doc.descendants((o, l) => {
			!o.isText || o.text === void 0 || s.push({
				node: o,
				pos: l
			})
		}), s.reverse(), s.forEach(({
			node: o,
			pos: l
		}) => {
			!o.isText || o.text === void 0 || o.text.includes(e) && i.insertText(o.text.replaceAll(e, t), l, l + o.text.length)
		}), this.view.dispatch(i)
	}
	appendText(e) {
		this.view.dispatch(this.view.state.tr.insertText(e))
	}
	prependParagraph(e) {
		this.view.dispatch(this.view.state.tr.setSelection(M.create(this.view.state.doc, 0))), Wn(this.view.state, this.view.dispatch), this.view.dispatch(this.view.state.tr.insertText(e, 0))
	}
	delete(e, t) {
		this.view.dispatch(this.view.state.tr.delete(e, t))
	}
	focus() {
		this.view.hasFocus() || (this.view.focus(), this.view.dispatch(this.view.state.tr.setSelection(M.atEnd(this.view.state.doc)).scrollIntoView()))
	}
	setText(e) {
		const {
			tr: t,
			schema: n
		} = this.view.state, i = e ? n.nodes.paragraph.create(null, n.text(e)) : n.nodes.paragraph.create();
		this.view.dispatch(t.replaceWith(0, this.view.state.doc.content.size, i)), this.view.hasFocus() && this.view.dispatch(this.view.state.tr.setSelection(M.atEnd(this.view.state.doc)))
	}
	getContentLength() {
		return this.view.state.doc.content.size
	}
	getCurrentText() {
		return this.view.state.doc.textContent
	}
	hasMultipleLines() {
		let e = 0;
		return this.view.state.doc.descendants(t => {
			t.isBlock && e++
		}), e > 1
	}
	getContentToSend() {
		return Oa(this.view)
	}
	resize() {}
	isReady() {
		return !!this.view.state.doc
	}
	setPlaceholder(e) {
		this.view.dispatch(this.view.state.tr.setMeta(dt, {
			placeholder: e
		}))
	}
	getSelectionStart() {
		return this.view.state.selection.ranges[0].$from.pos
	}
	setSelection(e, t) {
		this.view.dispatch(this.view.state.tr.setSelection(M.create(this.view.state.doc, e, t))), this.view.focus()
	}
	isMenuSelectorActive() {
		return Ie.getState(this.view.state).active
	}
	registerKeyHandlers(e) {
		fa(this.view, e)
	}
	registerFileInput(e) {
		this.fileInputHandle = e
	}
	openFileDialog() {
		this.fileInputHandle?.openFileDialog()
	}
	subscribe(e, t) {
		if (e === "change") {
			const n = () => {
				this.usedDictation && (this._dictationEdited = !0), t(void 0)
			};
			return Lr(this.view, n)
		}
		return this.view.dom?.addEventListener(e, t, {
			capture: !0
		}), () => {
			this.view.dom?.removeEventListener(e, t, {
				capture: !0
			})
		}
	}
	useState(e) {
		return re.useSyncExternalStore(t => Lr(this.view, t), () => e(this), () => e(this))
	}
	getKeywords() {
		return [...Me.getState(this.view.state)?.matchedKeywords ?? []]
	}
	removeKeywordDecorations(e) {
		e.length !== 0 && fh(e, this.view)
	}
	resetTrackingKeywords(e) {
		hh(e, this.view)
	}
	canShowAutocompletion() {
		return !this.isMenuSelectorActive()
	}
}
const js = Tt({}),
	Gs = Tt(void 0),
	dh = Tt(void 0),
	vn = Tt(0),
	Fn = Tt(0),
	Hh = ({
		serverThreadId: r,
		clientThreadId: e,
		getIsDisabled: t,
		composerController: n,
		currentModelId: i,
		account: s,
		onReset: o,
		onInfer: l,
		isInferEnabledForModel: a
	}) => {
		const [c, h] = re.useState(!1), f = Ci(), u = bi(f, "657118093").value, p = Number(u?.web_debounce_ms ?? 400), m = wi(f, "209963048") && ["gpt-4o", "auto"].includes(i), g = ho(), k = re.useRef(null), z = fo(({
			enableInferredJuice: I
		}) => I) || m || a, $ = re.useRef(l);
		$.current = l;
		const q = re.useRef(0),
			A = re.useRef(0),
			de = uo(() => dh()),
			R = po(e, I => I?.modelId),
			x = re.useCallback(Wo(I => {
				if (t()) return;
				mo.logEventWithStatsig("chatgpt_web_autoswitch_infer_called", "chatgpt_web_autoswitch_infer_called", {
					is_paid_user: s?.hasPaidSubscription()
				});
				const Y = I.length,
					qe = Y < 5 ? "<5" : Y <= 10 ? "5-10" : Y <= 20 ? "10-20" : Y <= 50 ? "30-50" : "50+";
				if ($e.count(Ue.DEFAULT, "chatgpt_web_autoswitch_infer_called", {
						prompt_length: qe,
						is_paid_user: s?.hasPaidSubscription() ? "true" : "false"
					}), m) return;
				const st = ++q.current,
					Et = Date.now();
				h(Et);
				const nn = Mi(e),
					At = je.getCurrentNode(nn);
				go.safePost("/conversation/infer", {
					requestBody: {
						prompt: I,
						conversation_id: r ?? null,
						is_history_and_training_disabled: g,
						parent_message_id: At.message.id,
						auto_switcher_treatment_override: de,
						model_id: R
					},
					additionalHeaders: {
						"x-conduit-token": k.current ?? ""
					},
					authOption: yo.SendIfAvailable
				}).then(Z => {
					if (k.current = Z.conduit_token ?? null, t() || A.current > st || n.getContentToSend().content.length < I.length) return;
					A.current = st;
					const {
						effort_mode: ot,
						debug_info: Ke,
						request_id: pe
					} = Z;
					Ke && js.set(Ke), pe && Gs.set(pe), vn.set(Rt => Rt + 1), Fn.set(I.length), $.current(ot)
				}).finally(() => {
					h(Z => Z && Et < Z ? Z : !1)
				})
			}, p), [t, r, de, R]),
			v = re.useRef(void 0);
		return re.useEffect(() => {
			if (!z || !(n instanceof uh)) {
				R && R !== v.current && (v.current = R);
				return
			}
			const I = () => {
				const {
					content: Y
				} = n.getContentToSend();
				t() || !z || (Y ? x(Y) : (k.current = null, o(), h(!1), ++q.current, A.current = q.current))
			};
			return R && R !== v.current && (v.current = R, I()), n.subscribe("change", () => {
				I()
			})
		}, [z, t, n, x, l, o, r, g, R]), c !== !1
	};
async function ph({
	ctx: r,
	clientThreadId: e,
	requestedModelId: t,
	completionType: n = Oo.Next,
	sourceEvent: i,
	eventSource: s,
	completionMetadata: o,
	extraStreamParams: l,
	parentMessageId: a,
	promptMessage: c,
	existingMessages: h,
	prependMessages: f,
	appendMessages: u,
	profiler: p,
	skipNotification: d,
	effortMode: m,
	isReasoningSkipped: g,
	parentMessageIdPromise: k
}) {
	const O = So(r),
		z = i?.timeStamp ?? performance.now(),
		$ = s ?? (i ? _o(i) : "mouse"),
		q = new AbortController,
		A = Co(),
		de = hr(e),
		R = `request-${e}-${A}`,
		x = Mi(e),
		{
			conduitToken: v = null,
			prepareState: I = "none",
			lastPrepareTimestamp: Y = null
		} = x ?? {},
		qe = t ?? x?.modelId ?? ko(xo(O)).id,
		st = je.findNode(x, C => C.message.author.role === fr.Assistant || C.message.author.role === fr.Tool) == null,
		Et = x?.continuingFromSharedConversationId != null,
		nn = !!x?.continuingFromSharedPostId,
		At = a ? je.getNode(x, a) : h?.[0] ? je.getParentNode(x, h[0].id) : je.getCurrentNode(x);
	let Z = At.message.id ?? At.id;
	const ot = [...h ?? [], ...f ?? [], ...c ? [c] : [], ...u ?? []],
		Ke = Ho(r, e),
		pe = new $o({
			clientRequestId: R,
			gizmoType: Ke,
			preflightTime: z,
			isTemporaryChat: bo()
		});
	if (pe.onUserMessages(ot), Ke === gr.PROJECT && st && !wo(r, "269676899", {
			disableExposureLog: !0
		}).get("clear_all", !1)) {
		const C = o?.systemHints;
		Mo(r).set(lt => ({
			...lt,
			[e]: C ?? []
		}))
	}
	const Rt = To(r),
		Zn = No(),
		Je = new Uo(r, R, O, x, e, a, f, c, u, n, qe, m, $, Rt, z, Ke === gr.PROJECT, st, Et, pe, d ?? !1, Zn, nn, g);
	if (Do() && c) {
		const C = ur(c);
		jo({
			ctx: r,
			query: C,
			classifier: !0,
			attributions: !0,
			profiler: p
		})
	}
	const er = Go(e),
		tr = Yo(r, e)?.value === on.REALTIME,
		nr = je.getConversationLastTurn(x)?.messages.some(C => C.metadata?.n7jupd_message);
	if (tr && !nr) {
		const C = await er;
		C?.last_message_id && (Z = C.last_message_id)
	}
	if (Eo.publish({
			kind: "requestCompletion"
		}), Xo(e, {
			source: Ao.CLIENT,
			value: o?.systemHints?.includes(Ro) ? on.REALTIME : on.STREAMING
		}), Qo.addRequest(R, q, pe), Zo.onCompletionRequestStarted(R), Je.updateBeforeRequest(), tr && nr) {
		const C = await er;
		C?.last_message_id && (Z = C.last_message_id)
	}
	if (k) {
		const C = await k;
		C && (Z = C)
	}
	const Xs = wi(r, "3530414009"),
		rr = !!o?.prefetchIds?.length,
		Qs = performance.now(),
		Oe = [],
		We = Io() ?? (Oe.push("chatReq"), await Po());
	We.force_login && el(r, {
		authType: "login"
	});
	const Zs = yr.getEnforcementTokenSync(We) ?? (Oe.push("turnstile"), await yr.getEnforcementToken(We)),
		eo = performance.now(),
		to = dr.getEnforcementTokenSync(We) ?? (Oe.push("proofofwork"), await dr.getEnforcementToken(We, {
			forceSync: rr && Xs
		})),
		no = String(performance.now() - eo);
	O.getQueriesData(pr) == null && await O.ensureQueryData(pr);
	const ir = Oe.includes("chatReq") ? "false" : "true",
		sr = Oe.includes("turnstile") ? "false" : "true",
		or = Oe.includes("proofofwork") ? "false" : "true";
	$e.hist(Ue.DEFAULT, "chat_req_time", [{
		key: "wasChatReqSync",
		value: ir
	}, {
		key: "wasTurnstileSync",
		value: sr
	}, {
		key: "wasProofofworkSync",
		value: or
	}], performance.now() - Qs), zo(vo(), {
		eventName: "chatgpt_web_completion_integrity_checks",
		value: Oe.length === 0 ? "true" : "false",
		metadata: {
			wasChatReqSync: ir,
			wasTurnstileSync: sr,
			wasProofofworkSync: or,
			isPrefetchInitialLoad: rr ? "true" : "false",
			powTime: no
		}
	}), tl() && (await nl()).forEach(De => {
		De.status === "fulfilled" && De.value && ot.unshift(De.value)
	});
	const ne = Fo();
	pe.onCompletionStarted(n, qe), Je.preflightTime = performance.now() - z;
	const ro = rl(),
		rn = il(r);
	Bo.addFeatureFlagEvaluation("fast_convo", rn);
	const lr = C => {
		qo.setState(De => {
			const lt = De.threads[e];
			if (lt) lt.prepareRequestBlocked = C, C || (lt.lastCompletionFinishedTimestamp = performance.now());
			else {
				const ar = hr(e);
				if (ar) {
					const sn = De.threads[ar];
					sn && (sn.prepareRequestBlocked = C, C || (sn.lastCompletionFinishedTimestamp = performance.now()))
				}
			}
		})
	};
	if (rn && Y != null) {
		const C = performance.now() - Y;
		C <= 6e4 && $e.hist(Ue.DEFAULT, "fast_conversation_last_prepare_to_convo_client", [{
			key: "model_id",
			value: qe
		}, {
			key: "prepare_state",
			value: String(I)
		}, {
			key: "has_conduit_token",
			value: v != null ? "true" : "false"
		}], C)
	}
	if (m) {
		$e.hist(Ue.DEFAULT, "chatgpt_web_autoswitcher_infer_calls_per_message", [], vn()), vn.set(0);
		const C = Fn();
		C !== 0 && c ? $e.hist(Ue.DEFAULT, "chatgpt_web_autoswitcher_prompt_length_difference", [], ur(c).length - C) : $e.count(Ue.DEFAULT, "chatgpt_web_autoswitcher_message_before_infer_completed"), Fn.set(0)
	}
	lr(!0);
	const io = sl(r, {
		conversationOrigin: x?.conversationOrigin ?? null,
		model: qe,
		completionType: n,
		prepareState: I,
		conduitToken: v,
		threadId: de,
		effortMode: m ?? void 0,
		isReasoningSkipped: g,
		inferRequestId: Gs(),
		inferDebugInfo: js(),
		continueFromSharedConversationId: x?.continuingFromSharedConversationId,
		continueFromSharedPostId: x?.continuingFromSharedPostId,
		forkFromSharedPost: x?.forkFromSharedPost,
		historyDisabled: Rt,
		isAnonModeEnabled: Zn,
		parentMessageId: Z,
		messages: ot,
		chatReq: We,
		turnstileToken: Zs,
		proofToken: to,
		completionMetadata: o,
		contextualInfo: {
			is_dark_mode: Lo(),
			time_since_loaded: Math.floor(performance.now() / 1e3),
			page_height: window.innerHeight,
			page_width: window.innerWidth,
			pixel_ratio: window.devicePixelRatio,
			screen_height: window.screen.height,
			screen_width: window.screen.width
		},
		isOnboardingConversation: o?.isOnboardingConversation,
		forceParagen: ne.forceParagen,
		forceParagenModel: ne.forceParagen ? ne.forceParagenModel.value : void 0,
		forceRateLimit: ne.forceRateLimit,
		resetRateLimits: ne.resetRateLimits,
		recordRendering: ne.recordRendering,
		disableSystemContentToggling: ne.rebaseSystemMessageContent != null,
		forceUseSearch: ne.forceUseSearch ?? void 0,
		paragenStreamType: ne.paragenStreamType,
		paragenCotSummaryDisplay: ne.paragenCotSummaryDisplay,
		...rn ? {
			f_completion: !0
		} : {},
		...ro ? {
			f_search: !0
		} : {},
		...l
	}, pe, p, q.signal, e);
	try {
		for await (const C of io) C.type === "connected" ? Je.handleStreamConnected(C) : C.type !== "perf_stats" && C.type !== "server_ste_metadata" && C.type !== "message_marker" && Je.handleResponse(C)
	} catch (C) {
		Vo(C) || q.signal.aborted ? Je.handleAbort(C) : Je.handleError(C)
	} finally {
		lr(!1)
	}
}

function $h(r) {
	const e = Ci();
	return re.useCallback(t => ph({
		ctx: e,
		clientThreadId: r,
		...t
	}), [e, r])
}
const mh = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;

function gh(r) {
	let e = r.split(/-(?!$)/),
		t = e[e.length - 1];
	t == "Space" && (t = " ");
	let n, i, s, o;
	for (let l = 0; l < e.length - 1; l++) {
		let a = e[l];
		if (/^(cmd|meta|m)$/i.test(a)) o = !0;
		else if (/^a(lt)?$/i.test(a)) n = !0;
		else if (/^(c|ctrl|control)$/i.test(a)) i = !0;
		else if (/^s(hift)?$/i.test(a)) s = !0;
		else if (/^mod$/i.test(a)) mh ? o = !0 : i = !0;
		else throw new Error("Unrecognized modifier name: " + a)
	}
	return n && (t = "Alt-" + t), i && (t = "Ctrl-" + t), o && (t = "Meta-" + t), s && (t = "Shift-" + t), t
}

function yh(r) {
	let e = Object.create(null);
	for (let t in r) e[gh(t)] = r[t];
	return e
}

function xn(r, e, t = !0) {
	return e.altKey && (r = "Alt-" + r), e.ctrlKey && (r = "Ctrl-" + r), e.metaKey && (r = "Meta-" + r), t && e.shiftKey && (r = "Shift-" + r), r
}

function Uh(r) {
	return new Te({
		props: {
			handleKeyDown: Ys(r)
		}
	})
}

function Ys(r) {
	let e = yh(r);
	return function(t, n) {
		let i = ol(n),
			s, o = e[xn(i, n)];
		if (o && o(t.state, t.dispatch, t)) return !0;
		if (i.length == 1 && i != " ") {
			if (n.shiftKey) {
				let l = e[xn(i, n, !1)];
				if (l && l(t.state, t.dispatch, t)) return !0
			}
			if ((n.shiftKey || n.altKey || n.metaKey || i.charCodeAt(0) > 127) && (s = ll[n.keyCode]) && s != i) {
				let l = e[xn(s, n)];
				if (l && l(t.state, t.dispatch, t)) return !0
			}
		}
		return !1
	}
}
class D extends w {
	constructor(e) {
		super(e, e)
	}
	map(e, t) {
		let n = e.resolve(t.map(this.head));
		return D.valid(n) ? new D(n) : w.near(n)
	}
	content() {
		return S.empty
	}
	eq(e) {
		return e instanceof D && e.head == this.head
	}
	toJSON() {
		return {
			type: "gapcursor",
			pos: this.head
		}
	}
	static fromJSON(e, t) {
		if (typeof t.pos != "number") throw new RangeError("Invalid input for GapCursor.fromJSON");
		return new D(e.resolve(t.pos))
	}
	getBookmark() {
		return new Qn(this.anchor)
	}
	static valid(e) {
		let t = e.parent;
		if (t.isTextblock || !Sh(e) || !kh(e)) return !1;
		let n = t.type.spec.allowGapCursor;
		if (n != null) return n;
		let i = t.contentMatchAt(e.index()).defaultType;
		return i && i.isTextblock
	}
	static findGapCursorFrom(e, t, n = !1) {
		e: for (;;) {
			if (!n && D.valid(e)) return e;
			let i = e.pos,
				s = null;
			for (let o = e.depth;; o--) {
				let l = e.node(o);
				if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
					s = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
					break
				} else if (o == 0) return null;
				i += t;
				let a = e.doc.resolve(i);
				if (D.valid(a)) return a
			}
			for (;;) {
				let o = t > 0 ? s.firstChild : s.lastChild;
				if (!o) {
					if (s.isAtom && !s.isText && !b.isSelectable(s)) {
						e = e.doc.resolve(i + s.nodeSize * t), n = !1;
						continue e
					}
					break
				}
				s = o, i += t;
				let l = e.doc.resolve(i);
				if (D.valid(l)) return l
			}
			return null
		}
	}
}
D.prototype.visible = !1;
D.findFrom = D.findGapCursorFrom;
w.jsonID("gapcursor", D);
class Qn {
	constructor(e) {
		this.pos = e
	}
	map(e) {
		return new Qn(e.map(this.pos))
	}
	resolve(e) {
		let t = e.resolve(this.pos);
		return D.valid(t) ? new D(t) : w.near(t)
	}
}

function Sh(r) {
	for (let e = r.depth; e >= 0; e--) {
		let t = r.index(e),
			n = r.node(e);
		if (t == 0) {
			if (n.type.spec.isolating) return !0;
			continue
		}
		for (let i = n.child(t - 1);; i = i.lastChild) {
			if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating) return !0;
			if (i.inlineContent) return !1
		}
	}
	return !0
}

function kh(r) {
	for (let e = r.depth; e >= 0; e--) {
		let t = r.indexAfter(e),
			n = r.node(e);
		if (t == n.childCount) {
			if (n.type.spec.isolating) return !0;
			continue
		}
		for (let i = n.child(t);; i = i.firstChild) {
			if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating) return !0;
			if (i.inlineContent) return !1
		}
	}
	return !0
}

function jh() {
	return new Te({
		props: {
			decorations: wh,
			createSelectionBetween(r, e, t) {
				return e.pos == t.pos && D.valid(t) ? new D(t) : null
			},
			handleClick: bh,
			handleKeyDown: xh,
			handleDOMEvents: {
				beforeinput: Ch
			}
		}
	})
}
const xh = Ys({
	ArrowLeft: zt("horiz", -1),
	ArrowRight: zt("horiz", 1),
	ArrowUp: zt("vert", -1),
	ArrowDown: zt("vert", 1)
});

function zt(r, e) {
	const t = r == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
	return function(n, i, s) {
		let o = n.selection,
			l = e > 0 ? o.$to : o.$from,
			a = o.empty;
		if (o instanceof M) {
			if (!s.endOfTextblock(t) || l.depth == 0) return !1;
			a = !1, l = n.doc.resolve(e > 0 ? l.after() : l.before())
		}
		let c = D.findGapCursorFrom(l, e, a);
		return c ? (i && i(n.tr.setSelection(new D(c))), !0) : !1
	}
}

function bh(r, e, t) {
	if (!r || !r.editable) return !1;
	let n = r.state.doc.resolve(e);
	if (!D.valid(n)) return !1;
	let i = r.posAtCoords({
		left: t.clientX,
		top: t.clientY
	});
	return i && i.inside > -1 && b.isSelectable(r.state.doc.nodeAt(i.inside)) ? !1 : (r.dispatch(r.state.tr.setSelection(new D(n))), !0)
}

function Ch(r, e) {
	if (e.inputType != "insertCompositionText" || !(r.state.selection instanceof D)) return !1;
	let {
		$from: t
	} = r.state.selection, n = t.parent.contentMatchAt(t.index()).findWrapping(r.state.schema.nodes.text);
	if (!n) return !1;
	let i = y.empty;
	for (let o = n.length - 1; o >= 0; o--) i = y.from(n[o].createAndFill(null, i));
	let s = r.state.tr.replace(t.pos, t.pos, new S(i, 0, 0));
	return s.setSelection(M.near(s.doc.resolve(t.pos + 1))), r.dispatch(s), !1
}

function wh(r) {
	if (!(r.selection instanceof D)) return null;
	let e = document.createElement("div");
	return e.className = "ProseMirror-gapcursor", N.create(r.doc, [_.widget(r.selection.head, e, {
		key: "gapcursor"
	})])
}
export {
	Qt as A, Sa as B, vh as C, N as D, Vh as E, y as F, S as G, j as H, w as I, Lt as J, Ln as K, Lh as L, mt as M, ul as N, Se as O, uh as P, se as Q, B as R, Eh as S, M as T, b as U, G as V, ns as W, Zl as X, Ih as Y, kt as Z, Te as a, it as b, ji as c, ut as d, Rh as e, ql as f, qh as g, Uh as h, Bh as i, Ah as j, Kh as k, jh as l, Wh as m, Na as n, Fh as o, _h as p, _ as q, ph as r, zh as s, Br as t, $h as u, Jh as v, xi as w, Hh as x, Ph as y, la as z
};
//# sourceMappingURL=ixsisjuxwij5x7d3.js.map