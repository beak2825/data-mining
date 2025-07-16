var _ = (N => (N.READY = "ready", N.LOG = "log", N.RUN_START = "run_start", N.ENVIRONMENT_STATUS = "environment_status", N.ENVIRONMENT_ERROR = "environment_error", N.SET_BACKGROUND_COLOR = "set_background_color", N.SET_INTRINSIC_HEIGHT = "set_intrinsic_height", N.INSTRUMENT = "instrument", N.OUTPUT = "output", N.ERROR = "error", N.RUN_COMPLETE = "run_complete", N))(_ || {}),
	t = (N => (N.SW_RECONNECT = "sw_reconnect", N.SW_NOT_SUPPORTED = "sw_not_supported", N))(t || {});
const E = ["python", "javascript", "typescript", "html", "react"];

function A(N) {
	return E.includes(N)
}
var O = (N => (N[N.INITIALIZING = 0] = "INITIALIZING", N[N.INSTALLING_PACKAGES = 1] = "INSTALLING_PACKAGES", N[N.RUNNING_CODE = 2] = "RUNNING_CODE", N))(O || {}),
	I = (N => (N.RUN_CODE = "run", N.STOP_CODE = "stop", N.PREPARE_ENVIRONMENT = "prepare_environment", N))(I || {}),
	n = (N => (N.SW_RECONNECT_RESPONSE = "sw_reconnect_response", N))(n || {}),
	R = (N => (N.FLUSH = "flush", N.SW_RECONNECT_RESPONSE = "sw_reconnect_response", N.FETCH_RESPONSE = "fetch_response", N.INIT = "init", N.PING = "ping", N.DISCONNECT = "disconnect", N))(R || {});
const c = "web-sandbox.oaiusercontent.com",
	C = `https://${c}`,
	{
		origin: r
	} = new URL(C),
	L = [r, "https://cdn.jsdelivr.net", "https://cdn.tailwindcss.com", "https://esm.sh", "https://unpkg.com", "https://pypi.org", "https://files.pythonhosted.org"];
export {
	L as C, O as E, C as L, _ as M, R as a, t as b, n as c, I as d, A as i
};
//# sourceMappingURL=jazub75ldxizbo1c.js.map