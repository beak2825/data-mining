class h {
	capacity;
	cache;
	dispose;
	constructor({
		capacity: e,
		dispose: t
	}) {
		this.capacity = e, this.cache = new Map, this.dispose = t
	}
	get(e) {
		if (!this.cache.has(e)) return null;
		const t = this.cache.get(e);
		return this.cache.delete(e), this.cache.set(e, t), t
	}
	set(e, t) {
		if (this.cache.has(e)) {
			this.cache.delete(e), this.cache.set(e, t);
			return
		}
		if (this.cache.size >= this.capacity) {
			const s = this.cache.keys().next().value;
			s != null && this.delete(s)
		}
		this.cache.set(e, t)
	}
	delete(e) {
		const t = this.cache.get(e);
		this.cache.delete(e), this.dispose && this.dispose(t)
	}
}
export {
	h as L
};
//# sourceMappingURL=gy64pge8qevmvg7e.js.map