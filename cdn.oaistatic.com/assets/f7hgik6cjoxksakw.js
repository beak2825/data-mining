import {
	g as b,
	j as o,
	n as v
} from "./fyeo2h7okrqcf3nz.js";
import {
	C as j,
	lM as D,
	iv as S,
	f as A,
	ip as O
} from "./egb2c0f6p1ew61vt.js";
import {
	di as T,
	nq as M,
	dj as w,
	a4 as _,
	nr as P
} from "./f7j18j5u52u1pnnk.js";
var p, E;

function F() {
	if (E) return p;
	E = 1;
	var s = j();

	function t(r) {
		return typeof r == "function" ? r : s
	}
	return p = t, p
}
var h, f;

function q() {
	if (f) return h;
	f = 1;
	var s = D(),
		t = F(),
		r = S(),
		i = 9007199254740991,
		e = 4294967295,
		l = Math.min;

	function m(n, a) {
		if (n = r(n), n < 1 || n > i) return [];
		var u = e,
			I = l(n, e);
		a = t(a), n -= e;
		for (var N = s(I, a); ++u < n;) a(u);
		return N
	}
	return h = m, h
}
var H = q();
const k = b(H),
	Z = ({
		gap: s,
		padding: t = 4,
		size: r = 3
	}) => o.jsx(v.div, {
		className: A("grid h-full max-w-full flex-1 grid-cols-3 items-center"),
		style: {
			gap: s,
			padding: t
		},
		children: k(3, i => o.jsx(v.div, {
			className: "dark:bg-white-400 aspect-square rounded-full bg-gray-400",
			animate: {
				translateY: ["0%", "-50%", "0%", "0%", "0%"]
			},
			style: {
				translateX: .5,
				width: r,
				height: r
			},
			transition: {
				repeat: 1 / 0,
				type: "keyframes",
				delay: i / 10,
				duration: .7
			}
		}, i))
	});
var R = (s => (s.javascript = "javascript", s.typescript = "typescript", s.bash = "bash", s.zsh = "zsh", s.html = "html", s.css = "css", s.python = "python", s.json = "json", s.sql = "sql", s.go = "go", s.yaml = "yaml", s.java = "java", s.rust = "rust", s.cpp = "cpp", s.swift = "swift", s.php = "php", s.xml = "xml", s.ruby = "ruby", s.haskell = "haskell", s.kotlin = "kotlin", s.csharp = "csharp", s.c = "c", s.objectivec = "objectivec", s.r = "r", s.lua = "lua", s.dart = "dart", s.scala = "scala", s.perl = "perl", s.commonlisp = "commonlisp", s.clojure = "clojure", s.ocaml = "ocaml", s.powershell = "powershell", s.verilog = "verilog", s.dockerfile = "dockerfile", s.vue = "vue", s.other = "other", s))(R || {});

function x(s) {
	if (T(s)) switch (s) {
		case w.CODE_REACT:
			return "typescript";
		default:
			return M(s.replace(/^code\//, ""), Object.values(R), "other")
	}
}
const V = 36,
	C = -24,
	G = 280,
	g = G + V,
	d = 40;
var X = (s => (s.COLLAPSED = "collapsed", s.EXPANDED = "expanded", s))(X || {});

function U(s) {
	return "children" in s
}
const $ = s => s.type === "text" && "value" in s && typeof s.value == "string",
	c = "hiveTranscript",
	y = /(::hiveTranscript\{([^}]+)\})/g,
	W = /\btimestamp\s*=\s*["']?(\d+)["']?(?=\s|,|$)/,
	z = () => s => {
		_(s, t => {
			if (t.type !== "paragraph" && t.type !== "tableCell" || !U(t) || !Array.isArray(t.children)) return;
			const r = [];
			for (const i of t.children)
				if ($(i) && i.value.includes(`::${c}`)) {
					let e = 0,
						l;
					for (;
						(l = y.exec(i.value)) != null;) {
						l.index > e && r.push({
							type: "text",
							value: i.value.slice(e, l.index)
						});
						const m = l[2],
							a = W.exec(m)?.[1];
						a && Number.isInteger(Number(a)) && r.push({
							type: "textDirective",
							name: c,
							attributes: {
								timestamp: a
							},
							data: {
								hName: c,
								hProperties: {
									timestamp: a
								}
							},
							children: [],
							position: i.position
						}), e = y.lastIndex
					}
					e < i.value.length && r.push({
						type: "text",
						value: i.value.slice(e)
					})
				} else r.push(i);
			t.children = r
		})
	},
	L = Object.freeze(Object.defineProperty({
		__proto__: null,
		HIVE_LOG_DIRECTIVE_NAME: c,
		hiveLogDirectivePlugin: z
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	Q = [O, c],
	ss = () => s => {
		_(s, "textDirective", t => {
			Q.includes(t.name) || (t.type = "text", t.value = `:${t.name}`)
		})
	};
class Y {
	constructor(t) {
		this.params = t
	}
	get isReadonly() {
		return Object.values(this.params).some(t => !!t)
	}
	get isHistoricalVersion() {
		return !!this.params.isHistoricalVersion
	}
	get isStreaming() {
		return !!this.params.isTextdocStreaming || !!this.params.isRequestActive
	}
	get isTextdocStreaming() {
		return !!this.params.isTextdocStreaming
	}
	get isStreamingFromNative() {
		return this.isStreaming && this.params.streamingSource === P.NATIVE
	}
	get isRestoring() {
		return !!this.params.isRestoring
	}
	get isShowingChanges() {
		return !!this.params.isShowingChanges
	}
	get isReadonlyFromQueryParam() {
		return !!this.params.isReadonlyFromQueryParam
	}
}
const ts = s => new Y(s);
export {
	d as C, G as E, X as G, c as H, Z as T, x as a, g as b, R as c, C as d, V as e, ss as f, ts as g, Q as h, U as i, z as j, L as k
};
//# sourceMappingURL=f7hgik6cjoxksakw.js.map