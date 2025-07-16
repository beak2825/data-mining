"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
	["80960"], {
		223455: function(e, t, r) {
			r.r(t), r.d(t, {
				default: () => D
			});
			var n = r(255367),
				a = r(120356),
				i = r.n(a),
				l = r(512722),
				o = r.n(l),
				s = r(399606),
				c = r(721037),
				d = r(561472),
				u = r(317381),
				m = r(617552),
				p = r(372900),
				h = r(238246),
				y = r(592125),
				f = r(703558),
				g = r(677601),
				v = r(87390);

			function D(e) {
				let {
					windowKey: t,
					channelId: r
				} = e, a = (0, s.e7)([y.Z], () => y.Z.getChannel(r));
				o()(null != a, "channel cannot be null for popout");
				let l = (0, s.e7)([u.ZP], () => u.ZP.getSelfEmbeddedActivityForChannel(a.id), [a]);
				return (0, n.jsx)(h.Z, {
					withTitleBar: !0,
					windowKey: t,
					title: a.name,
					channelId: a.id,
					onBeforeUnload: e => {
						let {
							e: t,
							unmountWindow: r
						} = e;
						null != l ? (t.preventDefault(), (0, m.Z)({
							onConfirm: () => {
								r()
							},
							usesPopoutContext: !0
						})) : r()
					},
					children: (0, n.jsx)("div", {
						className: i()("root", v.rootPopout),
						children: (0, n.jsxs)(p.Z.Provider, {
							value: a.guild_id,
							children: [(0, n.jsx)(d.Z, {
								channel: a,
								draftType: f.d.ChannelMessage
							}), (0, n.jsx)(g.Z, {
								channel: a
							}), (0, n.jsx)(c.Z, {
								inPopoutWindow: !0
							})]
						})
					})
				})
			}
		},
		945778: function(e, t, r) {
			r.r(t), r.d(t, {
				default: () => o
			});
			var n = r(255367);
			r(73800);
			var a = r(238246),
				i = r(153731),
				l = r(388032);

			function o(e) {
				let {
					windowKey: t
				} = e;
				return (0, n.jsx)(a.Z, {
					withTitleBar: !0,
					windowKey: t,
					title: l.intl.string(l.t["5I/1fn"]),
					children: (0, n.jsx)(i.Z, {})
				})
			}
		},
		153731: function(e, t, r) {
			r.d(t, {
				Z: () => B
			}), r(539854), r(388685), r(361932), r(187205), r(290780);
			var n = r(255367),
				a = r(73800),
				i = r(392711),
				l = r.n(i),
				o = r(442837),
				s = r(481060),
				c = r(304680),
				d = r(503089),
				u = r(493544),
				m = r(600164),
				p = r(210887),
				h = r(592125),
				y = r(271383),
				f = r(19780),
				g = r(226961),
				v = r(594174),
				D = r(51144),
				b = r(189648),
				C = r(775194),
				E = r(499848),
				P = r(724392),
				j = r(442580),
				R = r(770800),
				Z = r(981631),
				N = r(65154),
				x = r(388032),
				F = r(442122);
			let S = (e, t, r) => (0, n.jsx)(m.Z, {
					align: m.Z.Align.CENTER,
					children: (0, n.jsx)(m.Z.Child, {
						children: (0, n.jsxs)(m.Z, {
							align: m.Z.Align.CENTER,
							children: [(0, n.jsx)(s.qEK, {
								size: s.EFr.SIZE_24,
								src: e.getAvatarURL(r, 24),
								"aria-label": e.username,
								className: F.avatar
							}), (0, n.jsx)("span", {
								className: F.username,
								children: null != t ? t : D.ZP.getName(e)
							})]
						})
					})
				}),
				I = e => (0, n.jsx)(m.Z, {
					align: m.Z.Align.CENTER,
					children: (0, n.jsx)(m.Z.Child, {
						children: (0, n.jsx)(m.Z, {
							align: m.Z.Align.CENTER,
							children: (0, n.jsx)("span", {
								className: F.username,
								children: e
							})
						})
					})
				});

			function k(e, t, r, n, a) {
				let i = [];
				if (null == t) return i;
				let {
					transport: o,
					rtp: {
						inbound: s,
						outbound: d
					},
					camera: m
				} = t;
				if (i.push({
						section: u.ID.HEADER,
						label: x.intl.formatToPlainString(x.t.PK5fOD, {
							context: e
						})
					}), null != o && i.push({
						section: (0, g.J$)(e, Z._s_.TRANSPORT, r),
						label: x.intl.string(x.t.wU9INz),
						element: R.Z,
						elementProps: {
							context: e,
							index: r
						}
					}), null == d || l().isEmpty(d) || i.push({
						section: (0, g.J$)(e, Z._s_.OUTBOUND, r),
						label: x.intl.string(x.t["3u0gIC"]),
						element: P.Z,
						elementProps: {
							context: e,
							index: r
						}
					}), null != m && i.push({
						section: (0, g.J$)(e, Z._s_.CAMERA, r),
						label: x.intl.string(x.t["2AGBWF"]),
						element: b.Z,
						elementProps: {
							context: e,
							index: r,
							camera: m
						}
					}), null != s && !l().isEmpty(s)) {
					let t = [];
					Object.keys(s).forEach(i => {
						let l = v.default.getUser(i),
							o = y.ZP.getNick(a, i),
							d = (0, g.J$)(e, i, r);
						null != s[i] && s[i].length > 0 && t.push({
							section: d,
							label: null != l ? S(l, o, a) : I(null != o ? o : i),
							ariaLabel: null != l ? l.tag : i,
							onClick: () => {
								c.zc(d)
							},
							element: E.Z,
							elementProps: {
								context: e,
								index: r,
								videoStreams: n
							}
						})
					}), t.length > 0 && (i.push({
						section: u.ID.HEADER,
						label: x.intl.string(x.t.SJmZam)
					}), i.push(...t))
				}
				return i
			}

			function B() {
				var e, t;
				let {
					defaultStats: r,
					streamStats: i
				} = (0, o.e7)([g.ZP], () => ({
					defaultStats: g.ZP.getAllStats(N.Yn.DEFAULT),
					streamStats: g.ZP.getAllStats(N.Yn.STREAM)
				}), [], o.pF), l = (0, o.e7)([f.Z, h.Z], () => h.Z.getChannel(f.Z.getChannelId())), m = null == (e = r.concat(i).find(e => null != e.screenshare)) ? void 0 : e.screenshare, y = null == (t = i.find(e => null != e.clips)) ? void 0 : t.clips, v = (0, o.e7)([p.Z], () => p.Z.theme), D = (0, o.e7)([p.Z], () => p.Z.darkSidebar ? Z.BRd.DARK : void 0), b = (0, o.e7)([g.ZP], () => g.ZP.getSection()), E = function(e) {
					let {
						defaultStats: t,
						streamStats: r,
						videoStreams: a,
						screenshare: i,
						clips: l,
						channel: o,
						connectionState: c
					} = e, d = t.flatMap((e, t) => k(N.Yn.DEFAULT, e, t, a, null == o ? void 0 : o.getGuildId())), m = r.flatMap((e, t) => k(N.Yn.STREAM, e, t, a, null == o ? void 0 : o.getGuildId())), p = [], h = [], y = {
						section: u.ID.DIVIDER
					};
					return null != i && (p.push(y), p.push({
						section: Z._s_.SCREENSHARE,
						label: x.intl.string(x.t["gWbr/f"]),
						element: j.Z,
						elementProps: {
							screenshare: i
						}
					})), null != l && (h.push(y), h.push({
						section: Z._s_.CLIPS,
						label: x.intl.string(x.t.MKrFKC),
						element: C.Z,
						elementProps: {
							clips: l
						}
					})), m.length > 0 && m.unshift(y), [...null != o ? [{
						section: u.ID.CUSTOM,
						label: "Channel Name",
						element: () => (0, n.jsx)(s.X6q, {
							className: F.channelName,
							variant: "heading-lg/semibold",
							children: o.name
						})
					}] : [], {
						section: u.ID.CUSTOM,
						label: "Connection State",
						element: () => (0, n.jsx)(s.X6q, {
							className: F.channelName,
							variant: "heading-md/normal",
							children: c === Z.hes.RTC_CONNECTED ? "Connected" : "Disconnected"
						})
					}, ...d, ...m, ...p, ...h]
				}({
					defaultStats: r,
					streamStats: i,
					videoStreams: (0, o.e7)([g.ZP], () => g.ZP.getVideoStreams()),
					screenshare: m,
					clips: y,
					channel: l,
					connectionState: (0, o.e7)([f.Z], () => f.Z.getState())
				});
				return a.useEffect(() => () => {
					c.xv()
				}, []), (0, n.jsx)(d.ZP, {
					theme: v,
					sidebarTheme: D,
					section: b,
					onSetSection: c.zc,
					sections: E
				})
			}
		},
		189648: function(e, t, r) {
			r.d(t, {
				Z: () => d
			});
			var n = r(255367);
			r(73800);
			var a = r(392711),
				i = r.n(a),
				l = r(481060),
				o = r(481250),
				s = r(513547),
				c = r(388032);

			function d(e) {
				let {
					camera: t
				} = e;
				if (null == t) return (0, n.jsx)(l.$jN, {
					type: l.$jN.Type.SPINNING_CIRCLE
				});
				let r = i().map(t, (e, t) => {
					if (!(s.al[t] || void 0 === e)) return (0, n.jsx)(s.ck, {
						label: t,
						value: e
					}, t)
				});
				return (0, n.jsx)(l.hjN, {
					tag: l.RB0.H2,
					title: c.intl.string(c.t["2AGBWF"]),
					children: (0, o.a)(r)
				})
			}
		},
		775194: function(e, t, r) {
			r.d(t, {
				Z: () => p
			}), r(642613), r(539854), r(388685);
			var n = r(255367);
			r(73800);
			var a = r(392711),
				i = r.n(a),
				l = r(481060),
				o = r(481250),
				s = r(513547),
				c = r(388032),
				d = r(442122),
				u = r(20493);
			let m = {
				userId: 1,
				dataType: 2,
				savedKB: 3,
				numFrames: 4,
				startTimestampMs: 5,
				endTimestampMs: 6,
				width: 7,
				height: 8,
				audioChannels: 9,
				sampleRate: 10
			};

			function p(e) {
				let {
					clips: t
				} = e;
				if (null == t) return (0, n.jsx)(l.$jN, {
					type: l.$jN.Type.SPINNING_CIRCLE
				});
				let r = i().map(t, (e, t) => {
					if (void 0 !== e && "buffers" !== t) return (0, n.jsx)(s.ck, {
						label: t,
						value: e
					}, t)
				});
				return r.push((0, n.jsx)(s.ck, {
					label: "Frames Per Second",
					value: t.recentEncodedFrames / (t.recentDurationMs / 1e3)
				}, "framerate")), (0, n.jsxs)(l.hjN, {
					tag: l.RB0.H2,
					title: c.intl.string(c.t.MKrFKC),
					children: [(0, o.a)(r), function(e) {
						if (null != e.buffers) return e.buffers.map(e => {
							let t = [];
							for (let r of Object.keys(e).sort((e, t) => {
									let r = m[e],
										n = m[t];
									return r !== n ? void 0 === r ? 1 : void 0 === n ? -1 : r - n : e > t ? 1 : -1
								})) {
								let a = e[r];
								null !== a && "key" !== r && t.push((0, n.jsx)(s.ck, {
									label: r,
									value: a
								}, r))
							}
							return (0, n.jsx)(l.hjN, {
								className: u.marginBottom40,
								title: "Buffer: ".concat(e.key),
								titleClassName: d.title,
								children: (0, o.a)(t)
							}, "Buffer: ".concat(e.key))
						})
					}(t)]
				})
			}
		},
		481250: function(e, t, r) {
			r.d(t, {
				V: () => b,
				a: () => v
			}), r(539854), r(642613), r(388685);
			var n = r(255367);
			r(73800);
			var a = r(120356),
				i = r.n(a),
				l = r(481060),
				o = r(304680),
				s = r(763520),
				c = r(600164),
				d = r(352978),
				u = r(131951),
				m = r(226961),
				p = r(513547),
				h = r(65154),
				y = r(442122),
				f = r(20493);
			let g = {
				[h.Z.NO_OVERRIDE]: "None",
				[h.Z.LOW]: "Low Quality Stream",
				[h.Z.HIGH]: "High Quality Stream"
			};

			function v(e) {
				let t = [],
					r = 0;
				for (e.length % 2 != 0 && e.push((0, n.jsx)(c.Z, {
						basis: "50%",
						grow: 0
					}, r++)); e.length > 0;) t.push((0, n.jsx)(c.Z, {
					basis: "50%",
					grow: 0,
					children: e.splice(0, 2)
				}, r++));
				return t
			}
			let D = {
				ssrc: 1,
				codec: 2
			};

			function b(e, t, r, a, b) {
				return e.map((C, E) => {
					let P = [];
					for (let e of Object.keys(C).sort((e, t) => {
							let r = D[e],
								n = D[t];
							return r !== n ? void 0 === r ? 1 : void 0 === n ? -1 : r - n : m.Pz[e] !== m.Pz[t] ? m.Pz[e] ? 1 : -1 : e > t ? 1 : -1
						})) {
						let t = C[e];
						p.al[e] || void 0 === t || P.push((0, n.jsx)(p.ck, {
							section: a,
							label: e,
							value: t
						}, e))
					}
					return (0, n.jsxs)(l.hjN, {
						className: f.marginBottom40,
						title: C.type,
						titleClassName: y.sectionHeader,
						children: ["video" === C.type && null != r && null != a && null != b && function(e, t, r, a) {
							let l = a.get(t, r, e.ssrc);
							return null != l ? (0, n.jsx)("div", {
								className: i()(y.videoWrapper, f.marginBottom40),
								children: (0, n.jsx)(d.Z, {
									streamId: l,
									videoComponent: u.Z.getMediaEngine().Video,
									paused: !1,
									videoSpinnerContext: s.m.REPLAY_VIDEO_STREAM,
									userId: r
								})
							}) : null
						}(C, r, a, b), v(P), "video" === C.type && E === e.length - 1 && null != r && null != a && null != b && (0, n.jsx)(c.Z, {
							className: f.marginBottom20,
							children: (0, n.jsxs)(c.Z.Child, {
								basis: "100%",
								children: [(0, n.jsx)(l.vwX, {
									tag: l.RB0.H5,
									className: f.marginBottom8,
									children: "Simulcast Override"
								}), (0, n.jsx)(l.q4e, {
									value: m.ZP.getSimulcastDebugOverride(a, t),
									onChange: e => {
										o.MS(a, t, e)
									},
									options: Object.values(h.Z).map(e => ({
										value: e,
										label: g[e]
									}))
								})]
							})
						})]
					}, "".concat(C.type, " + ").concat(C.ssrc))
				})
			}
		},
		499848: function(e, t, r) {
			r.d(t, {
				Z: () => y
			}), r(415506);
			var n = r(255367),
				a = r(73800),
				i = r(442837),
				l = r(481060),
				o = r(271383),
				s = r(19780),
				c = r(226961),
				d = r(594174),
				u = r(51144),
				m = r(481250),
				p = r(388032);
			class h extends a.PureComponent {
				render() {
					let {
						streams: e,
						context: t,
						userId: r,
						mediaEngineConnectionId: a,
						videoStreams: i
					} = this.props;
					if (null == r || null == e || 0 === e.length) return (0, n.jsx)(l.$jN, {
						type: l.$jN.Type.SPINNING_CIRCLE
					});
					let c = s.Z.getGuildId(),
						h = d.default.getUser(r),
						y = o.ZP.getNick(c, r),
						f = null == h ? p.intl.string(p.t.SJmZam) : "".concat(p.intl.string(p.t.SJmZam), " — ").concat(null != y ? y : u.ZP.getName(h));
					return (0, n.jsx)(l.hjN, {
						tag: l.RB0.H2,
						title: f,
						children: (0, m.V)(e, t, a, r, i)
					})
				}
			}
			let y = i.ZP.connectStores([c.ZP], e => {
				let {
					context: t,
					index: r,
					videoStreams: n
				} = e, a = c.ZP.getAllStats(t)[r], {
					section: i
				} = (0, c.fZ)(c.ZP.getSection());
				if (null == i) throw Error("Unrecognized section format");
				let l = null;
				if (null != a && null != a.rtp.inbound) {
					var o;
					l = null != (o = a.rtp.inbound[i]) ? o : []
				}
				return {
					mediaEngineConnectionId: null == a ? void 0 : a.mediaEngineConnectionId,
					userId: i,
					streams: l,
					videoStreams: n
				}
			})(h)
		},
		206314: function(e, t, r) {
			r.d(t, {
				Z: () => p
			});
			var n = r(255367),
				a = r(73800),
				i = r(120356),
				l = r.n(i),
				o = r(692547),
				s = r(481060),
				c = r(600164),
				d = r(4912),
				u = r(442122);
			let m = ["firCount", "nackCount"];
			class p extends a.PureComponent {
				renderValueIcon() {
					let {
						label: e
					} = this.props;
					return m.includes(e) ? (0, n.jsx)(d.Z, {
						color: o.Z.unsafe_rawColors.YELLOW_300.css,
						className: u.valueIcon
					}) : null
				}
				render() {
					let {
						children: e,
						className: t,
						valueRendered: r,
						section: a,
						label: i,
						renderGraph: o
					} = this.props;
					return (0, n.jsxs)(c.Z, {
						className: l()(u.item, t),
						direction: c.Z.Direction.VERTICAL,
						basis: "50%",
						children: [(0, n.jsxs)(c.Z, {
							className: u.kvContainer,
							align: c.Z.Align.START,
							children: [(0, n.jsx)(c.Z.Child, {
								children: (0, n.jsx)(s.H, {
									className: u.title,
									children: e
								})
							}), Array.isArray(r) ? (0, n.jsx)(c.Z.Child, {
								grow: 1,
								children: r
							}) : (0, n.jsxs)(c.Z.Child, {
								grow: 0,
								shrink: 0,
								children: [this.renderValueIcon(), (0, n.jsx)("span", {
									className: u.itemValue,
									title: r,
									children: r
								})]
							})]
						}), null !== o && (0, n.jsx)(c.Z.Child, {
							className: u.graph,
							children: (0, n.jsx)(s.R94, {
								type: s.geA.DESCRIPTION,
								children: o
							})
						}, null != a ? "".concat(a, "-").concat(i) : i), (0, n.jsx)(s.$i$, {
							className: u.divider
						})]
					})
				}
			}
		},
		513547: function(e, t, r) {
			r.d(t, {
				al: () => b,
				ck: () => j
			}), r(388685), r(539854), r(784620), r(973216);
			var n = r(255367),
				a = r(73800),
				i = r(112456),
				l = r.n(i),
				o = r(226961),
				s = r(706619),
				c = r(206314);
			let d = {
				accelerateRate: "Accelerate Rate",
				audioDetected: "Audio Detected",
				audioLevel: "Audio Level",
				availableOutgoingBitrate: "Available Outgoing Bitrate",
				averageDecodeTime: "Average Decode Time",
				averageEncodeTime: "Average Encode Time",
				bandwidthLimitedFrameRate: "Bandwidth Limited Frame Rate",
				bandwidthLimitedResolution: "Bandwidth Limited Resolution",
				bitrate: "Bitrate",
				bitrateTarget: "Bitrate (Target)",
				bytesReceived: "Bytes Received",
				bytesSent: "Bytes Sent",
				capturedFramesCount: "Captured Frames per Second",
				capturedFramesDropped: "Captured Frames Dropped",
				capturedFramesMean: "Captured Frames Mean (ms)",
				capturedFramesStdev: "Captured Frames Standard Deviation (ms)",
				codec: "Codec",
				cpuLimitedResolution: "CPU Limited Resolution",
				currentSampleRate: "Current Sample Rate",
				currentDelay: "Current Delay",
				decoderImplementationName: "Decoder",
				decodingCNG: "Decoding CNG",
				decodingMutedOutput: "Decoding Muted Output",
				decodingNormal: "Decoding Normal",
				decodingPLC: "Decoding PLC",
				decodingPLCCNG: "Decoding PLC CNG",
				decryptFailureCount: "Decrypt Failures",
				decryptionFailures: "Decryption Failures",
				decryptSuccessCount: "Decrypt Successes",
				delayEstimate: "Delay Estimate",
				encoderImplementationName: "Encoder",
				encoderQualityPsnr: "Encoder PSNR (dB)",
				encoderQualityVmaf: "Encoder VMAF",
				encodeUsage: "Encode Usage",
				encryptFailureCount: "Encrypt Failures",
				encryptSuccessCount: "Encrypt Successes",
				expandRate: "Expand Rate",
				fecPacketsDiscarded: "FEC Packets Discarded",
				fecPacketsReceived: "FEC Packets Received",
				filter: "Filter",
				firCount: "FIR",
				fractionLost: "Packet Loss",
				frameRateDecode: "Frame Rate (Decode)",
				frameRateEncode: "Frame Rate (Encode)",
				frameRateInput: "Frame Rate (Input)",
				frameRateNetwork: "Frame Rate (Network)",
				frameRateRender: "Frame Rate (Render)",
				framesDecoded: "Frames Decoded",
				framesDecodeErrors: "Decoder Error Count",
				framesDropped: "Frames Dropped",
				framesDroppedCongestionWindow: "Frames Dropped by Congestion Window",
				framesDroppedEncoder: "Frames Dropped by Encoder",
				framesDroppedEncoderQueue: "Frames Dropped by Encoder Queue",
				framesDroppedRateLimiter: "Frames Dropped by Bitrate Limiter",
				framesEncoded: "Frames Encoded",
				framesReceived: "Frames Received",
				framesSent: "Frames Sent",
				freezeCount: "Freeze Count",
				hostname: "Hostname",
				hybridCaptureMethodSwitches: "Hybrid Capture Method Switches",
				hybridDxgiFrames: "Hybrid DXGI Frames",
				hybridGdiBitBltFrames: "Hybrid GDI BitBlt Frames",
				hybridGdiFrames: "Hybrid GDI Frames",
				hybridGdiPrintWindowFrames: "Hybrid GDI PrintWindow Frames",
				hybridGraphicsCaptureFrames: "Hybrid Graphics Capture Frames",
				hybridVideohookFrames: "Hybrid Videohook Frames",
				inboundBitrateEstimate: "Inbound Bitrate Estimate",
				jitter: "Jitter",
				jitterBuffer: "Jitter Buffer",
				jitterBufferPreferred: "Jitter Buffer (Preferred)",
				keyFrameInterval: "Key Frame Interval",
				keyFramesDecoded: "Key Frames Decoded",
				keyFramesEncoded: "Key Frames Encoded",
				localAddress: "Local Address",
				minPlayoutDelay: "Minimum Playout Delay",
				nackCount: "NACK",
				networkFramesDropped: "Frames Dropped By Network",
				opAccelerate: "Accelerated Frames",
				opCNG: "CNG Frames",
				opExpand: "Expand Frames",
				opMerge: "Merge Frames",
				opNormal: "Normal Frames",
				opPreemptiveExpand: "Preemptive Expand Frames",
				opSilence: "Silent Frames",
				outboundBitrateEstimate: "Outbound Bitrate Estimate",
				pacerDelay: "Pacer Delay",
				packetsLost: "Packets Lost",
				packetsReceived: "Packets Received",
				packetsSent: "Packets Sent",
				passthroughCount: "Passthrough",
				pauseCount: "Pause Count",
				ping: "Ping",
				pliCount: "PLI",
				preemptiveExpandRate: "Pre-emptive Expand Rate",
				qpSum: "QP Sum",
				qualityDecodeErrors: "Encoder Quality Decode Errors",
				qualityDecoderReboots: "Encoder Quality Decoder Reboots",
				qualityFrameDrops: "Encoder Quality Frame Drops",
				qualityScoreErrors: "Encoder Quality Score Errors",
				qualitySizeMismatches: "Encoder Quality Size Mismatches",
				quartzFrames: "Quartz Frames",
				receiverBitrateEstimate: "Receiver Bitrate Estimate (REMB)",
				relativePlayoutDelay: "Relative Playout Delay",
				relativeReceptionDelay: "Relative Reception Delay",
				renderDelay: "Render Delay",
				resolution: "Resolution",
				routingFailures: "Routing Failures",
				sampleRateMismatchPercent: "Sample Rate Mismatch",
				screenCaptureKitFrames: "ScreenCaptureKit frames",
				screenshareFrames: "WebRTC Frames",
				secondaryDecodedRate: "Secondary Decode Rate",
				secureFramesProtocolVersion: "DAVE Protocol",
				sinkWant: "Sink Quality Level (Remote)",
				sinkWantLocal: "Sink Quality Level (Local)",
				speechExpandRate: "Speech Expand Rate",
				ssrc: "SSRC",
				targetDelay: "Target Delay",
				totalFramesDuration: "Frames Duration (ms)",
				totalFreezesDuration: "Freezes Duration (ms)",
				totalPausesDuration: "Pauses Duration (ms)",
				videoEntropy: "Video Entropy",
				videohookBackend: "Videohook Backend",
				videohookFrames: "Videohook Frames"
			};

			function u(e) {
				return "".concat((e / 1e3).toFixed(2), " Kbps")
			}

			function m(e) {
				return l().filesize(e)
			}

			function p(e) {
				return e
			}

			function h(e) {
				return "".concat(e, " ms")
			}

			function y(e) {
				return "".concat(e.toFixed(0), "%")
			}

			function f(e) {
				return e ? "Yes" : "No"
			}

			function g(e) {
				return "".concat(Math.max(e, 0).toFixed(2), " dB")
			}

			function v(e) {
				let {
					last: t
				} = e;
				return "".concat(t, " ms")
			}

			function D(e) {
				return e.toFixed(2)
			}
			let b = {
					audioJitterBuffer: !0,
					audioJitterDelay: !0,
					audioJitterTarget: !0,
					audioPlayoutUnderruns: !0,
					decryptAttempts: !0,
					decryptDuration: !0,
					decryptInvalidNonceCount: !0,
					decryptMissingKeyCount: !0,
					encryptAttempts: !0,
					encryptDuration: !0,
					encryptMaxAttempts: !0,
					encryptMissingKeyCount: !0,
					fractionLost: !0,
					framesCaptured: !0,
					framesRendered: !0,
					hqSimulcastStreamEncoded: !0,
					lqSimulcastStreamEncoded: !0,
					noiseCancellerFrames: !0,
					noiseCancellerProcessTime: !0,
					sinkWantAsInt: !0,
					sumOfSquaredFramesDurations: !0,
					timestamp: !0,
					type: !0,
					videoJitterBuffer: !0,
					videoJitterDelay: !0,
					videoJitterTarget: !0,
					voiceActivityDetectorProcessTime: !0
				},
				C = {
					accelerateRate: y,
					audioDetected: f,
					audioLevel: g,
					availableOutgoingBitrate: u,
					averageDecodeTime: h,
					averageEncodeTime: h,
					bandwidthLimitedFrameRate: f,
					bandwidthLimitedResolution: f,
					bitrate: u,
					bitrateTarget: u,
					bytesReceived: m,
					bytesSent: m,
					codec: function(e) {
						let {
							id: t,
							name: r
						} = e;
						return r = null != (r = "" === r ? "unknown" : r) ? r : "unknown", "".concat(r[0].toUpperCase()).concat(r.slice(1), " (").concat(t, ")")
					},
					cpuLimitedResolution: f,
					currentSampleRate: function(e) {
						return e % 100 == 0 ? "".concat(e / 1e3, " kHz") : "".concat(e, " Hz")
					},
					currentDelay: h,
					decoderImplementationName: p,
					delayEstimate: h,
					encoderImplementationName: p,
					encoderQualityPsnr: g,
					encoderQualityVmaf: D,
					encodeUsage: y,
					expandRate: y,
					filter: p,
					fractionLost: y,
					inboundBitrateEstimate: u,
					jitter: h,
					jitterBuffer: h,
					jitterBufferPreferred: h,
					keyFrameInterval: h,
					minPlayoutDelay: h,
					outboundBitrateEstimate: u,
					pacerDelay: h,
					ping: h,
					preemptiveExpandRate: y,
					receiverBitrateEstimate: u,
					relativePlayoutDelay: v,
					relativeReceptionDelay: v,
					renderDelay: h,
					resolution: e => {
						let {
							width: t,
							height: r
						} = e;
						return "".concat(t, "x").concat(r)
					},
					sampleRateMismatchPercent: y,
					secondaryDecodedRate: y,
					secureFramesProtocolVersion: function(e) {
						return e > 0 ? "Version ".concat(e) : "Disabled"
					},
					speechExpandRate: y,
					targetDelay: h,
					videoEntropy: D,
					videohookBackend: function(e) {
						let t = ["N/A", "Direct3D 9", "Direct3D 10", "Direct3D 11", "Direct3D 12", "OpenGL", "Vulkan"];
						return e < t.length ? t[e] : "Unknown"
					}
				},
				E = e => e,
				P = e => {
					let [t] = a.useState([]);
					return t.push({
						value: e.value,
						time: Date.now()
					}), t.length > 600 && t.shift(), (0, n.jsx)(s.Z, {
						dataPoints: t,
						width: e.width,
						height: e.height
					})
				};

			function j(e) {
				var t, r, a;
				let {
					label: i,
					value: l,
					section: u
				} = e, m = null != (r = C[i]) ? r : E, p = o.Pz[i] && (Array.isArray(l) && l.length > 0 && "number" == typeof l[0].value ? (0, n.jsx)(s.Z, {
					dataPoints: l,
					width: 300,
					height: 100
				}) : "number" == typeof l ? (0, n.jsx)(P, {
					value: l,
					width: 300,
					height: 100
				}) : void 0), h = Array.isArray(l) ? null == (t = l.at(-1)) ? void 0 : t.value : l;
				return (0, n.jsx)(c.Z, {
					label: i,
					valueRendered: m(h),
					section: u,
					renderGraph: p,
					children: null != (a = d[i]) ? a : i
				})
			}
		},
		724392: function(e, t, r) {
			r.d(t, {
				Z: () => u
			});
			var n = r(255367),
				a = r(73800),
				i = r(442837),
				l = r(481060),
				o = r(226961),
				s = r(481250),
				c = r(388032);
			class d extends a.PureComponent {
				render() {
					let {
						outbound: e,
						context: t
					} = this.props;
					return null == e ? (0, n.jsx)(l.$jN, {
						type: l.$jN.Type.SPINNING_CIRCLE
					}) : (0, n.jsx)(l.hjN, {
						tag: l.RB0.H2,
						title: c.intl.string(c.t["3u0gIC"]),
						children: (0, s.V)(e, t)
					})
				}
			}
			let u = i.ZP.connectStores([o.ZP], e => {
				let {
					context: t,
					index: r
				} = e, n = o.ZP.getAllStats(t)[r];
				return {
					outbound: null != n ? n.rtp.outbound : null
				}
			})(d)
		},
		442580: function(e, t, r) {
			r.d(t, {
				Z: () => m
			});
			var n = r(255367),
				a = r(73800),
				i = r(392711),
				l = r.n(i),
				o = r(481060),
				s = r(481250),
				c = r(513547),
				d = r(388032);
			class u extends a.PureComponent {
				render() {
					let {
						screenshare: e
					} = this.props;
					if (null == e) return (0, n.jsx)(o.$jN, {
						type: o.$jN.Type.SPINNING_CIRCLE
					});
					let t = l().map(e, (e, t) => {
						if (!(c.al[t] || void 0 === e)) return (0, n.jsx)(c.ck, {
							label: t,
							value: e
						}, t)
					});
					return (0, n.jsx)(o.hjN, {
						tag: o.RB0.H2,
						title: d.intl.string(d.t["gWbr/f"]),
						children: (0, s.a)(t)
					})
				}
			}
			let m = u
		},
		770800: function(e, t, r) {
			r.d(t, {
				Z: () => Z
			}), r(784620), r(973216);
			var n = r(255367),
				a = r(73800),
				i = r(392711),
				l = r.n(i),
				o = r(442837),
				s = r(481060),
				c = r(600164),
				d = r(19780),
				u = r(226961),
				m = r(914010),
				p = r(959457),
				h = r(246946),
				y = r(594174),
				f = r(5192),
				g = r(476221),
				v = r(481250),
				D = r(206314),
				b = r(513547),
				C = r(65154),
				E = r(388032),
				P = r(442122),
				j = r(20493);
			class R extends a.PureComponent {
				render() {
					var e, t;
					let {
						transport: r,
						mediaSessionId: a,
						hidePersonalInformation: i,
						hostname: o
					} = this.props;
					if (null == r) return (0, n.jsx)(s.$jN, {
						type: s.$jN.Type.SPINNING_CIRCLE
					});
					let d = (e = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var r = null != arguments[t] ? arguments[t] : {},
									n = Object.keys(r);
								"function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
									return Object.getOwnPropertyDescriptor(r, e).enumerable
								}))), n.forEach(function(t) {
									var n;
									n = r[t], t in e ? Object.defineProperty(e, t, {
										value: n,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : e[t] = n
								})
							}
							return e
						}({}, r), t = t = {
							hostname: o
						}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
							var r = Object.keys(e);
							if (Object.getOwnPropertySymbols) {
								var n = Object.getOwnPropertySymbols(e);
								r.push.apply(r, n)
							}
							return r
						})(Object(t)).forEach(function(r) {
							Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
						}), e),
						u = l().map(d, (e, t) => {
							if ("receiverReports" !== t && (!i || "localAddress" !== t)) return (0, n.jsx)(b.ck, {
								label: t,
								value: e
							}, t)
						}),
						p = l().map(d.receiverReports, e => {
							let t = Array.isArray(e.bitrate) ? null == (n = e.bitrate.at(-1)) ? void 0 : n.value : e.bitrate,
								r = y.default.getUser(e.id);
							var n, a = f.ZP.getNickname(m.Z.getGuildId(), void 0, r);
							return null == a && (a = null != r ? r.username : e.id), {
								displayName: a,
								bitrate: t / 1e3,
								lost: 100 * e.fractionLost / 256
							}
						}),
						h = l().sortBy(p, e => e.displayName),
						g = l().map(h, e => (function(e, t, r) {
							let a = (0, n.jsxs)(c.Z, {
									id: "bitrate-".concat(e),
									justify: c.Z.Justify.BETWEEN,
									children: [(0, n.jsx)("span", {
										children: "Bitrate:"
									}), (0, n.jsxs)("span", {
										children: [t.toFixed(2), " Kbps"]
									})]
								}),
								i = (0, n.jsxs)(c.Z, {
									id: "lost-".concat(e),
									justify: c.Z.Justify.BETWEEN,
									children: [(0, n.jsx)("span", {
										children: "Packet Loss:"
									}), (0, n.jsxs)("span", {
										children: [r.toFixed(0), "%"]
									})]
								});
							return (0, n.jsx)(D.Z, {
								label: e,
								valueRendered: [a, i],
								children: e
							}, e)
						})(e.displayName, e.bitrate, e.lost));
					return (0, n.jsxs)(s.hjN, {
						tag: s.RB0.H2,
						title: E.intl.string(E.t.wU9INz) + (null != a ? " - " + a : ""),
						className: P.allowSelection,
						children: [(0, v.a)(u), 0 === g.length ? null : (0, n.jsx)(s.$i$, {
							className: j.marginBottom20
						}), (0, v.a)(g)]
					})
				}
			}
			let Z = o.ZP.connectStores([u.ZP, d.Z, h.Z, p.Z], e => {
				var t;
				let {
					context: r,
					index: n
				} = e, a = u.ZP.getAllStats(r)[n], i = r === C.Yn.STREAM ? Object.values(p.Z.getRTCConnections()).find(e => e.getMediaEngineConnectionId() === a.mediaEngineConnectionId) : null, l = null != (t = null == i ? void 0 : i.hostname) ? t : "";
				return {
					hidePersonalInformation: h.Z.hidePersonalInformation,
					transport: null != a ? a.transport : null,
					mediaSessionId: d.Z.getMediaSessionId(),
					hostname: g.Z.getShortHostname(l)
				}
			})(R)
		},
		87390: function(e, t, r) {
			e.exports = {
				rootPopout: "rootPopout_b5970a"
			}
		}
	}
]);
//# sourceMappingURL=8fad667e520fbfe6.js.map