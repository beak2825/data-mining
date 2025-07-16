import {
	s as o,
	N as r,
	P as s,
	R as p,
	o as i
} from "./egb2c0f6p1ew61vt.js";
import {
	d as n,
	r as u,
	p as m
} from "./fyeo2h7okrqcf3nz.js";
const t = {
		logCouponCheck(a, e) {
			o.count(r.TEAMS, "promo_campaign.web.check_coupon", [{
				key: "coupon",
				value: a
			}, {
				key: "outcome",
				value: e
			}]), s.logEvent("Promo Campaign: Check Coupon", {
				coupon: a,
				outcome: e
			})
		},
		logCouponApplied(a) {
			o.count(r.TEAMS, "promo_campaign.web.coupon_applied", [{
				key: "coupon",
				value: a
			}]), s.logEvent("Promo Campaign: Coupon Applied", {
				coupon: a
			})
		}
	},
	l = a => {
		const e = n({
			queryKey: ["promoCampaignEligibility", a],
			queryFn: () => p.safeGet("/promo_campaign/check_coupon", {
				parameters: {
					query: {
						coupon: a
					}
				},
				authOption: i.SendIfAvailable
			}),
			enabled: !!a
		});
		return u.useEffect(() => {
			e.isSuccess && e.data ? t.logCouponCheck(a, e.data.state) : e.isError && t.logCouponCheck(a, "error")
		}, [e.isSuccess, e.isError, e.data, a]), e
	};

function C() {
	const [a] = m();
	return a.get("promo_campaign")
}
export {
	t as P, l as a, C as u
};
//# sourceMappingURL=moeip5yn7z08hyho.js.map