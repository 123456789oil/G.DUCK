(this.workbox = this.workbox || {}),
  (this.workbox.core = (function(e) {
    "use strict";
    try {
      self["workbox:core:4.3.1"] && _();
    } catch (e) {}
    const t = (e, ...t) => {
      let n = e;
      return t.length > 0 && (n += ` :: ${JSON.stringify(t)}`), n;
    };
    class n extends Error {
      constructor(e, n) {
        super(t(e, n)), (this.name = e), (this.details = n);
      }
    }
    const s = new Set();
    const r = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: self.registration.scope
      },
      a = e => [r.prefix, e, r.suffix].filter(e => e.length > 0).join("-"),
      i = {
        updateDetails: e => {
          Object.keys(r).forEach(t => {
            void 0 !== e[t] && (r[t] = e[t]);
          });
        },
        getGoogleAnalyticsName: e => e || a(r.googleAnalytics),
        getPrecacheName: e => e || a(r.precache),
        getPrefix: () => r.prefix,
        getRuntimeName: e => e || a(r.runtime),
        getSuffix: () => r.suffix
      },
      c = e => {
        const t = new URL(e, location);
        return t.origin === location.origin ? t.pathname : t.href;
      };
    async function o() {
      for (const e of s) await e();
    }
    const l = "cacheDidUpdate",
      u = "cacheKeyWillBeUsed",
      h = "cacheWillUpdate",
      f = "cachedResponseWillBeUsed",
      w = "fetchDidFail",
      g = "fetchDidSucceed",
      d = "requestWillFetch",
      p = (e, t) => e.filter(e => t in e),
      y = async ({
        cacheName: e,
        request: t,
        event: n,
        matchOptions: s,
        plugins: r = []
      }) => {
        const a = await caches.open(e),
          i = await q({ plugins: r, request: t, mode: "read" });
        let c = await a.match(i, s);
        for (const t of r)
          f in t &&
            (c = await t[f].call(t, {
              cacheName: e,
              event: n,
              matchOptions: s,
              cachedResponse: c,
              request: i
            }));
        return c;
      },
      m = async ({ request: e, response: t, event: n, plugins: s }) => {
        let r = t,
          a = !1;
        for (let t of s)
          if (
            h in t &&
            ((a = !0),
            !(r = await t[h].call(t, { request: e, response: r, event: n })))
          )
            break;
        return a || (r = 200 === r.status ? r : null), r || null;
      },
      q = async ({ request: e, mode: t, plugins: n }) => {
        const s = p(n, u);
        let r = e;
        for (const e of s)
          "string" ==
            typeof (r = await e[u].call(e, { mode: t, request: r })) &&
            (r = new Request(r));
        return r;
      },
      v = {
        put: async ({
          cacheName: e,
          request: t,
          response: s,
          event: r,
          plugins: a = [],
          matchOptions: i
        } = {}) => {
          const u = await q({ plugins: a, request: t, mode: "write" });
          if (!s) throw new n("cache-put-with-no-response", { url: c(u.url) });
          let h = await m({ event: r, plugins: a, response: s, request: u });
          if (!h) return;
          const f = await caches.open(e),
            w = p(a, l);
          let g =
            w.length > 0
              ? await y({ cacheName: e, matchOptions: i, request: u })
              : null;
          try {
            await f.put(u, h);
          } catch (e) {
            throw ("QuotaExceededError" === e.name && (await o()), e);
          }
          for (let t of w)
            await t[l].call(t, {
              cacheName: e,
              event: r,
              oldResponse: g,
              newResponse: h,
              request: u
            });
        },
        match: y
      };
    class x {
      constructor(
        e,
        t,
        { onupgradeneeded: n, onversionchange: s = this.t } = {}
      ) {
        (this.s = e), (this.i = t), (this.o = n), (this.t = s), (this.l = null);
      }
      get db() {
        return this.l;
      }
      async open() {
        if (!this.l)
          return (
            (this.l = await new Promise((e, t) => {
              let n = !1;
              setTimeout(() => {
                (n = !0),
                  t(new Error("The open request was blocked and timed out"));
              }, this.OPEN_TIMEOUT);
              const s = indexedDB.open(this.s, this.i);
              (s.onerror = () => t(s.error)),
                (s.onupgradeneeded = e => {
                  n
                    ? (s.transaction.abort(), e.target.result.close())
                    : this.o && this.o(e);
                }),
                (s.onsuccess = ({ target: t }) => {
                  const s = t.result;
                  n
                    ? s.close()
                    : ((s.onversionchange = this.t.bind(this)), e(s));
                });
            })),
            this
          );
      }
      async getKey(e, t) {
        return (await this.getAllKeys(e, t, 1))[0];
      }
      async getAll(e, t, n) {
        return await this.getAllMatching(e, { query: t, count: n });
      }
      async getAllKeys(e, t, n) {
        return (
          await this.getAllMatching(e, { query: t, count: n, includeKeys: !0 })
        ).map(({ key: e }) => e);
      }
      async getAllMatching(
        e,
        {
          index: t,
          query: n = null,
          direction: s = "next",
          count: r,
          includeKeys: a
        } = {}
      ) {
        return await this.transaction([e], "readonly", (i, c) => {
          const o = i.objectStore(e),
            l = t ? o.index(t) : o,
            u = [];
          l.openCursor(n, s).onsuccess = ({ target: e }) => {
            const t = e.result;
            if (t) {
              const { primaryKey: e, key: n, value: s } = t;
              u.push(a ? { primaryKey: e, key: n, value: s } : s),
                r && u.length >= r ? c(u) : t.continue();
            } else c(u);
          };
        });
      }
      async transaction(e, t, n) {
        return (
          await this.open(),
          await new Promise((s, r) => {
            const a = this.l.transaction(e, t);
            (a.onabort = ({ target: e }) => r(e.error)),
              (a.oncomplete = () => s()),
              n(a, e => s(e));
          })
        );
      }
      async u(e, t, n, ...s) {
        return await this.transaction([t], n, (n, r) => {
          n.objectStore(t)[e](...s).onsuccess = ({ target: e }) => {
            r(e.result);
          };
        });
      }
      t() {
        this.close();
      }
      close() {
        this.l && (this.l.close(), (this.l = null));
      }
    }
    x.prototype.OPEN_TIMEOUT = 2e3;
    const b = {
      readonly: ["get", "count", "getKey", "getAll", "getAllKeys"],
      readwrite: ["add", "put", "clear", "delete"]
    };
    for (const [e, t] of Object.entries(b))
      for (const n of t)
        n in IDBObjectStore.prototype &&
          (x.prototype[n] = async function(t, ...s) {
            return await this.u(n, t, e, ...s);
          });
    const D = {
      fetch: async ({
        request: e,
        fetchOptions: t,
        event: s,
        plugins: r = []
      }) => {
        if (s && s.preloadResponse) {
          const e = await s.preloadResponse;
          if (e) return e;
        }
        "string" == typeof e && (e = new Request(e));
        const a = p(r, w),
          i = a.length > 0 ? e.clone() : null;
        try {
          for (let t of r)
            d in t &&
              (e = await t[d].call(t, { request: e.clone(), event: s }));
        } catch (e) {
          throw new n("plugin-error-request-will-fetch", { thrownError: e });
        }
        let c = e.clone();
        try {
          let n;
          n = "navigate" === e.mode ? await fetch(e) : await fetch(e, t);
          for (const e of r)
            g in e &&
              (n = await e[g].call(e, { event: s, request: c, response: n }));
          return n;
        } catch (e) {
          for (const t of a)
            await t[w].call(t, {
              error: e,
              event: s,
              originalRequest: i.clone(),
              request: c.clone()
            });
          throw e;
        }
      }
    };
    var E = Object.freeze({
      assert: null,
      cacheNames: i,
      cacheWrapper: v,
      DBWrapper: x,
      Deferred: class {
        constructor() {
          this.promise = new Promise((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      },
      deleteDatabase: async e => {
        await new Promise((t, n) => {
          const s = indexedDB.deleteDatabase(e);
          (s.onerror = ({ target: e }) => {
            n(e.error);
          }),
            (s.onblocked = () => {
              n(new Error("Delete blocked"));
            }),
            (s.onsuccess = () => {
              t();
            });
        });
      },
      executeQuotaErrorCallbacks: o,
      fetchWrapper: D,
      getFriendlyURL: c,
      logger: null,
      WorkboxError: n
    });
    const N = {
      get googleAnalytics() {
        return i.getGoogleAnalyticsName();
      },
      get precache() {
        return i.getPrecacheName();
      },
      get prefix() {
        return i.getPrefix();
      },
      get runtime() {
        return i.getRuntimeName();
      },
      get suffix() {
        return i.getSuffix();
      }
    };
    try {
      self.workbox.v = self.workbox.v || {};
    } catch (e) {}
    return (
      (e._private = E),
      (e.clientsClaim = () => {
        addEventListener("activate", () => clients.claim());
      }),
      (e.cacheNames = N),
      (e.registerQuotaErrorCallback = function(e) {
        s.add(e);
      }),
      (e.setCacheNameDetails = e => {
        i.updateDetails(e);
      }),
      (e.skipWaiting = () => {
        addEventListener("install", () => self.skipWaiting());
      }),
      e
    );
  })({}));
//# sourceMappingURL=workbox-core.prod.js.map
