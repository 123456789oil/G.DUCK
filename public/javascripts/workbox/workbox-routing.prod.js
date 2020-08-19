(this.workbox = this.workbox || {}),
  (this.workbox.routing = (function(t, e, r) {
    "use strict";
    try {
      self["workbox:routing:4.3.1"] && _();
    } catch (t) {}
    const s = "GET",
      n = t => (t && "object" == typeof t ? t : { handle: t });
    class o {
      constructor(t, e, r) {
        (this.handler = n(e)), (this.match = t), (this.method = r || s);
      }
    }
    class i extends o {
      constructor(t, { whitelist: e = [/./], blacklist: r = [] } = {}) {
        super(t => this.t(t), t), (this.s = e), (this.o = r);
      }
      t({ url: t, request: e }) {
        if ("navigate" !== e.mode) return !1;
        const r = t.pathname + t.search;
        for (const t of this.o) if (t.test(r)) return !1;
        return !!this.s.some(t => t.test(r));
      }
    }
    class u extends o {
      constructor(t, e, r) {
        super(
          ({ url: e }) => {
            const r = t.exec(e.href);
            return r
              ? e.origin !== location.origin && 0 !== r.index
                ? null
                : r.slice(1)
              : null;
          },
          e,
          r
        );
      }
    }
    class c {
      constructor() {
        this.i = new Map();
      }
      get routes() {
        return this.i;
      }
      addFetchListener() {
        self.addEventListener("fetch", t => {
          const { request: e } = t,
            r = this.handleRequest({ request: e, event: t });
          r && t.respondWith(r);
        });
      }
      addCacheListener() {
        self.addEventListener("message", async t => {
          if (t.data && "CACHE_URLS" === t.data.type) {
            const { payload: e } = t.data,
              r = Promise.all(
                e.urlsToCache.map(t => {
                  "string" == typeof t && (t = [t]);
                  const e = new Request(...t);
                  return this.handleRequest({ request: e });
                })
              );
            t.waitUntil(r),
              t.ports && t.ports[0] && (await r, t.ports[0].postMessage(!0));
          }
        });
      }
      handleRequest({ request: t, event: e }) {
        const r = new URL(t.url, location);
        if (!r.protocol.startsWith("http")) return;
        let s,
          { params: n, route: o } = this.findMatchingRoute({
            url: r,
            request: t,
            event: e
          }),
          i = o && o.handler;
        if ((!i && this.u && (i = this.u), i)) {
          try {
            s = i.handle({ url: r, request: t, event: e, params: n });
          } catch (t) {
            s = Promise.reject(t);
          }
          return (
            s &&
              this.h &&
              (s = s.catch(t => this.h.handle({ url: r, event: e, err: t }))),
            s
          );
        }
      }
      findMatchingRoute({ url: t, request: e, event: r }) {
        const s = this.i.get(e.method) || [];
        for (const n of s) {
          let s,
            o = n.match({ url: t, request: e, event: r });
          if (o)
            return (
              Array.isArray(o) && o.length > 0
                ? (s = o)
                : o.constructor === Object &&
                  Object.keys(o).length > 0 &&
                  (s = o),
              { route: n, params: s }
            );
        }
        return {};
      }
      setDefaultHandler(t) {
        this.u = n(t);
      }
      setCatchHandler(t) {
        this.h = n(t);
      }
      registerRoute(t) {
        this.i.has(t.method) || this.i.set(t.method, []),
          this.i.get(t.method).push(t);
      }
      unregisterRoute(t) {
        if (!this.i.has(t.method))
          throw new r.WorkboxError(
            "unregister-route-but-not-found-with-method",
            { method: t.method }
          );
        const e = this.i.get(t.method).indexOf(t);
        if (!(e > -1))
          throw new r.WorkboxError("unregister-route-route-not-registered");
        this.i.get(t.method).splice(e, 1);
      }
    }
    let a;
    const h = () => (
      a || ((a = new c()).addFetchListener(), a.addCacheListener()), a
    );
    return (
      (t.NavigationRoute = i),
      (t.RegExpRoute = u),
      (t.registerNavigationRoute = (t, r = {}) => {
        const s = e.cacheNames.getPrecacheName(r.cacheName),
          n = new i(
            async () => {
              try {
                const e = await caches.match(t, { cacheName: s });
                if (e) return e;
                throw new Error(
                  `The cache ${s} did not have an entry for ` + `${t}.`
                );
              } catch (e) {
                return fetch(t);
              }
            },
            { whitelist: r.whitelist, blacklist: r.blacklist }
          );
        return h().registerRoute(n), n;
      }),
      (t.registerRoute = (t, e, s = "GET") => {
        let n;
        if ("string" == typeof t) {
          const r = new URL(t, location);
          n = new o(({ url: t }) => t.href === r.href, e, s);
        } else if (t instanceof RegExp) n = new u(t, e, s);
        else if ("function" == typeof t) n = new o(t, e, s);
        else {
          if (!(t instanceof o))
            throw new r.WorkboxError("unsupported-route-type", {
              moduleName: "workbox-routing",
              funcName: "registerRoute",
              paramName: "capture"
            });
          n = t;
        }
        return h().registerRoute(n), n;
      }),
      (t.Route = o),
      (t.Router = c),
      (t.setCatchHandler = t => {
        h().setCatchHandler(t);
      }),
      (t.setDefaultHandler = t => {
        h().setDefaultHandler(t);
      }),
      t
    );
  })({}, workbox.core._private, workbox.core._private));
//# sourceMappingURL=workbox-routing.prod.js.map
