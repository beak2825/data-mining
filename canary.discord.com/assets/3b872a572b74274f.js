(() => {
	var e = {},
		r = {};

	function t(s) {
		var a = r[s];
		if (void 0 !== a) return a.exports;
		var n = r[s] = {
			exports: {}
		};
		return e[s](n, n.exports, t), n.exports
	}
	t.rv = () => "1.3.1", t.ruid = "bundler=rspack@1.3.1", self.addEventListener("message", async e => {
		let {
			data: {
				url: r
			}
		} = e, t = !1;
		try {
			await fetch(r)
		} catch (e) {
			t = !0
		}
		self.postMessage({
			url: r,
			error: t
		})
	})
})();
//# sourceMappingURL=3b872a572b74274f.js.map