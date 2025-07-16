import {
	q as c,
	aS as a,
	l as u,
	d4 as l
} from "./egb2c0f6p1ew61vt.js";
import {
	u as d
} from "./euyyz74sa52ztdnb.js";
import {
	r as b
} from "./fyeo2h7okrqcf3nz.js";

function A() {
	const n = u(),
		{
			isUnauthenticated: t
		} = l(),
		e = c(),
		r = a(e, "766296922"),
		s = a(e, "3148583717");
	if (!r) return {
		isEnabled: s,
		reason: s ? "none" : "disabled"
	};
	if (t) return {
		isEnabled: s,
		reason: s ? "none" : "disabled"
	};
	const i = n?.isDelinquent,
		o = n?.ssoConnectionName;
	return {
		isEnabled: s && !i && !o,
		reason: s ? i ? "delinquent" : o ? "sso" : "none" : "disabled"
	}
}

function E() {
	const n = c();
	return a(n, "1759425419")
}

function S() {
	const n = u(),
		{
			initialBillingDetails: t
		} = d(n, !0),
		e = b.useMemo(() => n?.subscriptionAnalyticsParams ?? {}, [n]);
	return {
		billingDetails: t,
		plusAnalyticsParams: e
	}
}
export {
	A as a, E as b, S as u
};
//# sourceMappingURL=navzkdkdtbvnrmqv.js.map