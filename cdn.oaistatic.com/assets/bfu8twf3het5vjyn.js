import {
	iR as f,
	ay as y,
	L as i,
	b as l,
	l as _,
	bp as C,
	P,
	f5 as d
} from "./egb2c0f6p1ew61vt.js";
import {
	mQ as E,
	oM as h
} from "./f7j18j5u52u1pnnk.js";
import {
	k as T,
	p as R,
	e as v,
	u as S,
	r as I,
	f as M
} from "./fyeo2h7okrqcf3nz.js";
var L = {};
const p = {
		oiw216z: `${L.VITE_OIW216Z_SERVICE_URL??"https://sora.com"}/subscription`,
		vza493q: d,
		students: h(!0)
	},
	A = f(function() {
		const o = T(),
			[n] = R(),
			c = y(),
			r = v(),
			u = S(),
			e = i.getItem(l.CheckoutFrom),
			s = _();
		return I.useEffect(() => {
			const m = "free",
				t = n.get("plan_type") ?? "plus",
				g = E(t);
			if (t === "plus" && C.logEvent("chatgpt_plus_payment_success_page"), P.logPaymentSuccess({
					plan_type: t
				}), s != null)
				if (s.planType === m) u.invalidateQueries({
					queryKey: ["account-status"]
				});
				else {
					let a = r.formatMessage(b.paymentConfirmationToastMessage, {
						planName: g
					});
					e && p[e] ? (i.removeItem(l.CheckoutFrom), e === "students" && (a = null), window.location.href = p[e]) : o("/#pricing"), a && c.success(a, {
						duration: 5
					})
				}
		}, [o, n, c, r, u, e, s]), null
	}),
	b = M({
		paymentConfirmationToastMessage: {
			id: "Payments.success.toast",
			defaultMessage: "You're now subscribed to ChatGPT {planName}"
		}
	});
export {
	p as C, A as p
};
//# sourceMappingURL=bfu8twf3het5vjyn.js.map