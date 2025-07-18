import {
	e as D,
	k as B,
	r as N,
	j as g,
	f as O
} from "./fyeo2h7okrqcf3nz.js";
import {
	y as _,
	A as x,
	E as Y,
	B as A,
	F as b,
	G as M,
	P,
	H as L,
	I as v
} from "./f7j18j5u52u1pnnk.js";
import {
	u as I
} from "./euyyz74sa52ztdnb.js";
import {
	L as f,
	b as p,
	l as U,
	P as h,
	bp as y,
	eP as R,
	eL as k,
	eJ as w
} from "./egb2c0f6p1ew61vt.js";
const S = x.hasDismissedPromoRedemption,
	C = "month",
	F = "year",
	E = "hour";

function q() {
	const {
		eligible: e
	} = _(S);
	return f.getItem(p.PromoCode) ? e : !1
}

function z() {
	const e = D(),
		{
			markAsViewed: t
		} = _(S),
		n = B(),
		o = U(),
		{
			initialBillingDetails: r
		} = I(o, !0),
		l = f.getItem(p.PromoCode),
		{
			promoMetadata: a
		} = Y(l),
		i = a != null;
	if (N.useEffect(() => {
			i && (h.logEvent("Promo Redemption Banner Shown", {
				promoCode: l
			}), y.logEvent("chatgpt_promo_redemption_banner_shown"))
		}, [i, l]), !i) return null;
	const d = j(e, r, a),
		m = H(e, r, a),
		s = g.jsxs("div", {
			className: "grow",
			children: [g.jsx("div", {
				className: "mb-0.5 font-semibold",
				children: d
			}), g.jsx("span", {
				className: "text-token-text-secondary",
				children: m
			})]
		});
	return g.jsx(A, {
		onPrimaryCtaClick: () => {
			const u = f.getItem(p.PromoCode);
			f.removeItem(p.PromoCode), t(), n(`/p/${u}#pricing`), h.logEvent("Promo Redemption Banner Redeem Button Clicked", {
				promoCode: u
			}), y.logEvent("chatgpt_promo_redemption_banner_redeem_button_clicked")
		},
		primaryCtaText: e.formatMessage(c.bannerPrimaryCta),
		onDismiss: t,
		content: s
	})
}

function G(e) {
	const t = e.currency;
	let n;
	switch (t) {
		case w:
			n = L;
			break;
		case k:
			n = P;
			break;
		default:
			n = P
	}
	return n
}

function T(e, t) {
	const {
		discount: n
	} = t;
	let o = G(e);
	if ("percentage" in n) o = (1 - n?.percentage / 100) * v;
	else if ("value" in n) {
		const r = n?.value;
		o -= r
	}
	return o
}

function j(e, t, n) {
	const {
		discount: o,
		duration: r
	} = n, {
		currencySymbol: l
	} = b(M(), t.currency), a = r ? r.period : C, i = r ? r.num_periods : 1;
	if ("percentage" in o) {
		const d = o?.percentage;
		return e.formatMessage(c.bannerTitleForPercentageDiscount, {
			discount: d
		})
	} else if ("value" in o) {
		const d = T(t, n),
			m = l.code.defaultMessage?.toString() ?? R,
			s = e.formatNumber(d, {
				style: "currency",
				currency: m,
				minimumFractionDigits: 0,
				maximumFractionDigits: 2
			});
		let u;
		switch (a) {
			case C:
				i === 1 ? u = e.formatMessage(c.bannerTitleForSingleMonth, {
					cost: s
				}) : u = e.formatMessage(c.bannerTitleForPluralMonths, {
					cost: s,
					num_months: i
				});
				break;
			case F:
				i === 1 ? u = e.formatMessage(c.bannerTitleForSingleYear, {
					cost: s
				}) : u = e.formatMessage(c.bannerTitleForPluralYears, {
					cost: s,
					num_years: i
				});
				break;
			case E:
				throw new Error("Period 'hour' is not supported")
		}
		return u
	}
}

function H(e, t, n) {
	const {
		duration: o
	} = n, {
		currencySymbol: r
	} = b(M(), t.currency), l = o ? o.period : C, a = o ? o.num_periods : 1, i = r.code.defaultMessage?.toString() ?? R, d = T(t, n), m = e.formatNumber(d, {
		style: "currency",
		currency: i,
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	});
	let s;
	switch (l) {
		case C:
			a === 1 ? s = e.formatMessage(c.bannerContentForSingleMonth, {
				cost: m
			}) : s = e.formatMessage(c.bannerContentForPluralMonths, {
				num_months: a,
				cost: m
			});
			break;
		case F:
			a === 1 ? s = e.formatMessage(c.bannerContentForSingleYear, {
				cost: m
			}) : s = e.formatMessage(c.bannerContentForPluralYears, {
				num_years: a,
				cost: m
			});
			break;
		case E:
			throw new Error("Period 'hour' is not supported")
	}
	return s
}
const c = O({
	bannerTitleForPluralMonths: {
		id: "promoRedemptionBannerTitleForPluralMonths",
		defaultMessage: "Get Plus for {cost}/month for the first {num_months} months"
	},
	bannerTitleForSingleMonth: {
		id: "promoRedemptionBannerTitleForSingleMonth",
		defaultMessage: "Get Plus for {cost}/month for the first month"
	},
	bannerTitleForPluralYears: {
		id: "promoRedemptionBannerTitleForPluralYears",
		defaultMessage: "Get Plus for {cost}/year for the first {num_years} years"
	},
	bannerTitleForSingleYear: {
		id: "promoRedemptionBannerTitleForSingleYear",
		defaultMessage: "Get Plus for {cost}/year for the first year"
	},
	bannerTitleForPercentageDiscount: {
		id: "promoRedemptionBannerTitleForPercentageDiscount",
		defaultMessage: "Finish redeeming your {discount}% off code for Plus"
	},
	bannerContentForPluralMonths: {
		id: "promoRedemptionBannerContentForPluralMonths",
		defaultMessage: "Get {num_months} months of expanded access for only {cost} per month."
	},
	bannerContentForSingleMonth: {
		id: "promoRedemptionBannerContentForSingleMonth",
		defaultMessage: "Get 1 month of expanded access for only {cost} per month."
	},
	bannerContentForPluralYears: {
		id: "promoRedemptionBannerContentForPluralYears",
		defaultMessage: "Get {num_years} years of expanded access for only {cost} per year."
	},
	bannerContentForSingleYear: {
		id: "promoRedemptionBannerContentForSingleYear",
		defaultMessage: "Get 1 year of expanded access for only {cost} per year."
	},
	bannerPrimaryCta: {
		id: "promoRedemptionBannerPrimaryCta",
		defaultMessage: "Redeem"
	}
});
export {
	z as P, S as a, q as u
};
//# sourceMappingURL=jrm7m26zzbmpv5fw.js.map