import {
	c as S,
	j as s
} from "./fyeo2h7okrqcf3nz.js";
import {
	C as w
} from "./lqc3mxovgoy4h7eq.js";
import {
	k4 as R,
	fE as F,
	aR as G
} from "./egb2c0f6p1ew61vt.js";
import {
	aX as H,
	aY as b,
	aZ as k,
	a_ as q,
	a$ as D
} from "./f7j18j5u52u1pnnk.js";
import {
	P as $
} from "./mzdwbfzlwdoj9187.js";

function A(y) {
	"use forget";
	const e = S.c(26),
		{
			clientThreadId: t,
			currentModelId: u,
			onRequestCompletion: o,
			onClose: g,
			activeImage: h
		} = y;
	let l;
	e[0] !== h ? (l = h ?? {}, e[0] = h, e[1] = l) : l = e[1];
	const {
		assetPointer: E,
		transformationId: m,
		height: _,
		width: j
	} = l, x = _ === void 0 ? 0 : _, C = j === void 0 ? 0 : j;
	let T;
	const P = E ?? "";
	let c;
	e[2] !== m ? (c = {
		dalle: {
			gen_id: m
		},
		generation: {
			gen_id: m
		}
	}, e[2] = m, e[3] = c) : c = e[3];
	const I = c;
	let d;
	e[4] !== x || e[5] !== P || e[6] !== I || e[7] !== C ? (d = {
		image: {
			asset_pointer: P,
			metadata: I,
			height: x,
			width: C
		},
		currentDrawnShape: null,
		onCleared: N,
		getImageData: M
	}, e[4] = x, e[5] = P, e[6] = I, e[7] = C, e[8] = d) : d = e[8], T = d, H(T);
	let p;
	e[9] === Symbol.for("react.memo_cache_sentinel") ? (p = {
		isImageGenEditor: !1,
		isInpainting: !1,
		onCancelInpaint: L
	}, e[9] = p) : p = e[9];
	let r;
	e[10] !== o ? (r = v => o(b(v)), e[10] = o, e[11] = r) : r = e[11];
	let n;
	e[12] !== g || e[13] !== o ? (n = async v => {
		o(await k(v)), g()
	}, e[12] = g, e[13] = o, e[14] = n) : n = e[14];
	let i;
	e[15] !== t || e[16] !== u || e[17] !== r || e[18] !== n ? (i = s.jsx(q, {
		children: s.jsx($, {
			clientThreadId: t,
			isNewThread: !0,
			currentModelId: u,
			onContinueGenerating: r,
			onRequestCompletion: n,
			hideHeader: !0
		})
	}), e[15] = t, e[16] = u, e[17] = r, e[18] = n, e[19] = i) : i = e[19];
	let a;
	e[20] !== t || e[21] !== i ? (a = s.jsx(R, {
		children: s.jsx(F, {
			clientThreadId: t,
			forcedSystemHintType: G.PictureV2,
			children: i
		})
	}), e[20] = t, e[21] = i, e[22] = a) : a = e[22];
	let f;
	return e[23] !== t || e[24] !== a ? (f = s.jsx(D, {
		value: p,
		children: s.jsx(w, {
			clientThreadId: t,
			children: a
		})
	}), e[23] = t, e[24] = a, e[25] = f) : f = e[25], f
}

function L() {}

function M() {}

function N() {}
export {
	A as I
};
//# sourceMappingURL=iu7w9vyyt43hbo7k.js.map