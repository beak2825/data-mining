! function() {
	var o = {},
		e = {};

	function r(t) {
		var n = e[t];
		if (void 0 !== n) return n.exports;
		var i = e[t] = {
			exports: {}
		};
		return o[t](i, i.exports, r), i.exports
	}
	r.rv = function() {
		return "1.2.8"
	}, r.ruid = "bundler=rspack@1.2.8"
}(), window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CoreRobloxUtilities");