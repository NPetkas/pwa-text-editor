(()=>{var e={167:(e,t,s)=>{"use strict";s.d(t,{c:()=>a}),s(288),s(178),s(694),s(142),s(535);class a{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}},336:(e,t,s)=>{"use strict";s.d(t,{F:()=>n});var a=s(167);s(535);class n{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new a.c(e)}}},535:()=>{"use strict";try{self["workbox:cacheable-response:6.5.4"]&&_()}catch(e){}},178:(e,t,s)=>{"use strict";s.d(t,{R:()=>a}),s(136);class a extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}},288:(e,t,s)=>{"use strict";s(178),s(136)},540:(e,t,s)=>{"use strict";s.d(t,{n:()=>r}),s(136);const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),r={updateDetails:e=>{(e=>{for(const t of Object.keys(a))e(t)})((t=>{"string"==typeof e[t]&&(a[t]=e[t])}))},getGoogleAnalyticsName:e=>e||n(a.googleAnalytics),getPrecacheName:e=>e||n(a.precache),getPrefix:()=>a.prefix,getRuntimeName:e=>e||n(a.runtime),getSuffix:()=>a.suffix}},489:(e,t,s)=>{"use strict";function a(e){e.then((()=>{}))}s.d(t,{S:()=>a}),s(136)},694:(e,t,s)=>{"use strict";s.d(t,{R:()=>a}),s(136);const a=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")},142:(e,t,s)=>{"use strict";s.d(t,{v:()=>a}),s(136);const a=null},791:(e,t,s)=>{"use strict";function a(e){return new Promise((t=>setTimeout(t,e)))}s.d(t,{w:()=>a}),s(136)},136:()=>{"use strict";try{self["workbox:core:6.5.4"]&&_()}catch(e){}},988:(e,t,s)=>{"use strict";s.d(t,{j:()=>a}),s(136);const a=new Set},38:(e,t,s)=>{"use strict";s.d(t,{A:()=>C}),s(288);var a=s(489);s(142),s(178);const n=(e,t)=>t.some((t=>e instanceof t));let r,i;const c=new WeakMap,o=new WeakMap,h=new WeakMap,l=new WeakMap,u=new WeakMap;let d={get(e,t,s){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return p(e[t])},set:(e,t,s)=>(e[t]=s,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function f(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),p(c.get(this))}:function(...e){return p(t.apply(g(this),e))}:function(e,...s){const a=t.call(g(this),e,...s);return h.set(a,e.sort?e.sort():[e]),p(a)}:(e instanceof IDBTransaction&&function(e){if(o.has(e))return;const t=new Promise(((t,s)=>{const a=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",r),e.removeEventListener("abort",r)},n=()=>{t(),a()},r=()=>{s(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",n),e.addEventListener("error",r),e.addEventListener("abort",r)}));o.set(e,t)}(e),n(e,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,d):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,s)=>{const a=()=>{e.removeEventListener("success",n),e.removeEventListener("error",r)},n=()=>{t(p(e.result)),a()},r=()=>{s(e.error),a()};e.addEventListener("success",n),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&c.set(t,e)})).catch((()=>{})),u.set(t,e),t}(e);if(l.has(e))return l.get(e);const t=f(e);return t!==e&&(l.set(e,t),u.set(t,e)),t}const g=e=>u.get(e),m=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],y=new Map;function _(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(y.get(t))return y.get(t);const s=t.replace(/FromIndex$/,""),a=t!==s,n=w.includes(s);if(!(s in(a?IDBIndex:IDBObjectStore).prototype)||!n&&!m.includes(s))return;const r=async function(e,...t){const r=this.transaction(e,n?"readwrite":"readonly");let i=r.store;return a&&(i=i.index(t.shift())),(await Promise.all([i[s](...t),n&&r.done]))[0]};return y.set(t,r),r}var R;R=d,d={...R,get:(e,t,s)=>_(e,t)||R.get(e,t,s),has:(e,t)=>!!_(e,t)||R.has(e,t)},s(626);const v="cache-entries",b=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class x{constructor(e){this._db=null,this._cacheName=e}_upgradeDb(e){const t=e.createObjectStore(v,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&function(e,{blocked:t}={}){const s=indexedDB.deleteDatabase(e);t&&s.addEventListener("blocked",(e=>t(e.oldVersion,e))),p(s).then((()=>{}))}(this._cacheName)}async setTimestamp(e,t){const s={url:e=b(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=(await this.getDb()).transaction(v,"readwrite",{durability:"relaxed"});await a.store.put(s),await a.done}async getTimestamp(e){const t=await this.getDb(),s=await t.get(v,this._getId(e));return null==s?void 0:s.timestamp}async expireEntries(e,t){const s=await this.getDb();let a=await s.transaction(v).store.index("timestamp").openCursor(null,"prev");const n=[];let r=0;for(;a;){const s=a.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&r>=t?n.push(a.value):r++),a=await a.continue()}const i=[];for(const e of n)await s.delete(v,e.id),i.push(e.url);return i}_getId(e){return this._cacheName+"|"+b(e)}async getDb(){return this._db||(this._db=await function(e,t,{blocked:s,upgrade:a,blocking:n,terminated:r}={}){const i=indexedDB.open(e,t),c=p(i);return a&&i.addEventListener("upgradeneeded",(e=>{a(p(i.result),e.oldVersion,e.newVersion,p(i.transaction),e)})),s&&i.addEventListener("blocked",(e=>s(e.oldVersion,e.newVersion,e))),c.then((e=>{r&&e.addEventListener("close",(()=>r())),n&&e.addEventListener("versionchange",(e=>n(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),c}("workbox-expiration",1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}}class C{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new x(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),s=await self.caches.open(this._cacheName);for(const e of t)await s.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,(0,a.S)(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){const t=await this._timestampModel.getTimestamp(e),s=Date.now()-1e3*this._maxAgeSeconds;return void 0===t||t<s}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}},437:(e,t,s)=>{"use strict";s.d(t,{V:()=>o}),s(288);var a=s(540),n=s(489),r=(s(694),s(142),s(988));s(136);var i=s(178),c=s(38);s(626);class o{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:a})=>{if(!a)return null;const r=this._isResponseDateFresh(a),i=this._getCacheExpiration(s);(0,n.S)(i.expireEntries());const c=i.updateTimestamp(t.url);if(e)try{e.waitUntil(c)}catch(e){}return r?a:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this._getCacheExpiration(e);await s.updateTimestamp(t.url),await s.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),r.j.add(t))}_getCacheExpiration(e){if(e===a.n.getRuntimeName())throw new i.R("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new c.A(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);return null===t||t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}},626:()=>{"use strict";try{self["workbox:expiration:6.5.4"]&&_()}catch(e){}},447:()=>{"use strict";try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},816:(e,t,s)=>{"use strict";s.r(t),s.d(t,{precacheAndRoute:()=>c});var a=s(656),n=s(584),r=(s(142),s(694),s(147));s(447);class i extends r.q{constructor(e,t){super((({request:s})=>{const a=e.getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:a=!0,urlManipulation:n}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(a){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(n){const e=n({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=a.get(n);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}function c(e,t){!function(e){(0,n.V)().precache(e)}(e),function(e){const t=(0,n.V)(),s=new i(t,e);(0,a.R)(s)}(t)}},584:(e,t,s)=>{"use strict";s.d(t,{V:()=>p}),s(288);var a=s(540),n=(s(142),s(178));function r(e,t){const s=t();return e.waitUntil(s),s}function i(e){if(!e)throw new n.R("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:s}=e;if(!s)throw new n.R("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(s,location.href),r=new URL(s,location.href);return a.searchParams.set("__WB_REVISION__",t),{cacheKey:a.href,url:r.href}}s(136),s(447);class c{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class o{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let h;s(694);var l=s(12);class u extends l.q{constructor(e={}){e.cacheName=a.n.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(u.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(!this._fallbackToNetwork)throw new n.R("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const n=a.integrity,r=e.integrity,i=!r||r===n;s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||n:void 0})),n&&i&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new n.R("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==u.copyRedirectedCacheableResponsesPlugin&&(a===u.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(u.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}u.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},u.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await async function(e,t){let s=null;if(e.url&&(s=new URL(e.url).origin),s!==self.location.origin)throw new n.R("cross-origin-copy-response",{origin:s});const a=e.clone(),r={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=t?t(r):r,c=function(){if(void 0===h){const e=new Response("");if("body"in e)try{new Response(e.body),h=!0}catch(e){h=!1}h=!1}return h}()?a.body:await a.blob();return new Response(c,i)}(e):e};class d{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new u({cacheName:a.n.getPrecacheName(e),plugins:[...t,new o({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const t=[];for(const s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);const{cacheKey:e,url:a}=i(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==e)throw new n.R("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new n.R("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(e,s.integrity)}if(this._urlsToCacheKeys.set(a,e),this._urlsToCacheModes.set(a,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return r(e,(async()=>{const t=new c;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),r=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return r(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new n.R("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let f;const p=()=>(f||(f=new d),f)},152:()=>{"use strict";try{self["workbox:recipes:6.5.4"]&&_()}catch(e){}},872:(e,t,s)=>{"use strict";s.d(t,{b:()=>n}),s(288),s(142);var a=s(147);s(227);class n extends a.q{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}},147:(e,t,s)=>{"use strict";s.d(t,{q:()=>r}),s(288);var a=s(797),n=s(511);s(227);class r{constructor(e,t,s=a.l){this.handler=(0,n.q)(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=(0,n.q)(e)}}},101:(e,t,s)=>{"use strict";s.d(t,{I:()=>i}),s(288),s(694);var a=s(797),n=(s(142),s(511)),r=s(178);s(227);class i{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const a=s.origin===location.origin,{params:n,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let i=r&&r.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:n})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async a=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:n})}catch(e){e instanceof Error&&(a=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw a}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const r of n){let n;const i=r.match({url:e,sameOrigin:t,request:s,event:a});if(i)return n=i,(Array.isArray(n)&&0===n.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(n=void 0),{route:r,params:n}}return{}}setDefaultHandler(e,t=a.l){this._defaultHandlerMap.set(t,(0,n.q)(e))}setCatchHandler(e){this._catchHandler=(0,n.q)(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new r.R("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new r.R("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}},227:()=>{"use strict";try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},656:(e,t,s)=>{"use strict";s.d(t,{R:()=>c}),s(142);var a=s(178),n=s(147),r=s(872),i=s(621);function c(e,t,s){let c;if("string"==typeof e){const a=new URL(e,location.href),r=({url:e})=>e.href===a.href;c=new n.q(r,t,s)}else if(e instanceof RegExp)c=new r.b(e,t,s);else if("function"==typeof e)c=new n.q(e,t,s);else{if(!(e instanceof n.q))throw new a.R("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=e}return(0,i.G)().registerRoute(c),c}s(227)},111:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var a=s(621);function n(e){(0,a.G)().setCatchHandler(e)}s(227)},797:(e,t,s)=>{"use strict";s.d(t,{l:()=>a}),s(227);const a="GET"},621:(e,t,s)=>{"use strict";s.d(t,{G:()=>r});var a=s(101);let n;s(227);const r=()=>(n||(n=new a.I,n.addFetchListener(),n.addCacheListener()),n)},511:(e,t,s)=>{"use strict";s.d(t,{q:()=>a}),s(288),s(227);const a=e=>e&&"object"==typeof e?e:{handle:e}},925:(e,t,s)=>{"use strict";s.d(t,{h:()=>r}),s(288),s(142);var a=s(178),n=s(12);s(991),s(390);class r extends n.q{async _handle(e,t){let s,n=await t.cacheMatch(e);if(n);else try{n=await t.fetchAndCachePut(e)}catch(e){e instanceof Error&&(s=e)}if(!n)throw new a.R("no-response",{url:e.url,error:s});return n}}},205:(e,t,s)=>{"use strict";s.d(t,{d:()=>i}),s(288),s(142);var a=s(178),n=s(113),r=s(12);s(991),s(390);class i extends r.q{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(n.e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){const s=[],n=[];let r;if(this._networkTimeoutSeconds){const{id:a,promise:i}=this._getTimeoutPromise({request:e,logs:s,handler:t});r=a,n.push(i)}const i=this._getNetworkPromise({timeoutId:r,request:e,logs:s,handler:t});n.push(i);const c=await t.waitUntil((async()=>await t.waitUntil(Promise.race(n))||await i)());if(!c)throw new a.R("no-response",{url:e.url});return c}_getTimeoutPromise({request:e,logs:t,handler:s}){let a;return{promise:new Promise((t=>{a=setTimeout((async()=>{t(await s.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:a}}async _getNetworkPromise({timeoutId:e,request:t,logs:s,handler:a}){let n,r;try{r=await a.fetchAndCachePut(t)}catch(e){e instanceof Error&&(n=e)}return e&&clearTimeout(e),!n&&r||(r=await a.cacheMatch(t)),r}}},456:(e,t,s)=>{"use strict";s.d(t,{k:()=>i}),s(288),s(142);var a=s(178),n=s(113),r=s(12);s(991),s(390);class i extends r.q{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(n.e)}async _handle(e,t){const s=t.fetchAndCachePut(e).catch((()=>{}));t.waitUntil(s);let n,r=await t.cacheMatch(e);if(r);else try{r=await s}catch(e){e instanceof Error&&(n=e)}if(!r)throw new a.R("no-response",{url:e.url,error:n});return r}}},12:(e,t,s)=>{"use strict";s.d(t,{q:()=>i});var a=s(540),n=s(178),r=(s(142),s(694),s(86));s(390);class i{constructor(e={}){this.cacheName=a.n.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new r.s(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,t,s){let a;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(a=await this._handle(t,e),!a||"error"===a.type)throw new n.R("no-response",{url:t.url})}catch(n){if(n instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(a=await r({error:n,event:s,request:t}),a)break;if(!a)throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,r;try{n=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:r}),t.destroy(),r)throw r}}},86:(e,t,s)=>{"use strict";function a(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}s.d(t,{s:()=>l}),s(288),s(136);class n{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}s(142);var r=s(988),i=s(694),c=s(791),o=s(178);function h(e){return"string"==typeof e?new Request(e):e}s(390);class l{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new n,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=h(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new o.R("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const n=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:n,response:e});return e}catch(e){throw a&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:a.clone(),request:n.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=h(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,r=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(r,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,t){const s=h(e);await(0,c.w)(0);const n=await this.getCacheKey(s,"write");if(!t)throw new o.R("cache-put-with-no-response",{url:(0,i.R)(n.url)});const l=await this._ensureResponseSafeToCache(t);if(!l)return!1;const{cacheName:u,matchOptions:d}=this._strategy,f=await self.caches.open(u),p=this.hasCallback("cacheDidUpdate"),g=p?await async function(e,t,s,n){const r=a(t.url,s);if(t.url===r)return e.match(t,n);const i=Object.assign(Object.assign({},n),{ignoreSearch:!0}),c=await e.keys(t,i);for(const t of c)if(r===a(t.url,s))return e.match(t,n)}(f,n.clone(),["__WB_REVISION__"],d):null;try{await f.put(n,p?l.clone():l)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of r.j)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:u,oldResponse:g,newResponse:l.clone(),request:n,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=h(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}},390:()=>{"use strict";try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}},113:(e,t,s)=>{"use strict";s.d(t,{e:()=>a}),s(390);const a={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null}},991:(e,t,s)=>{"use strict";s(142),s(694),s(390)},174:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CacheableResponse:()=>a.c,CacheableResponsePlugin:()=>n.F});var a=s(167),n=s(336);s(535)},821:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CacheExpiration:()=>a.A,ExpirationPlugin:()=>n.V});var a=s(38),n=s(437);s(626)},422:(e,t,s)=>{"use strict";s.r(t),s.d(t,{googleFontsCache:()=>o,imageCache:()=>l,offlineFallback:()=>w,pageCache:()=>f,staticResourceCache:()=>u,warmStrategyCache:()=>h});var a=s(656),n=s(456),r=s(925),i=s(336),c=s(437);function o(e={}){const t=`${e.cachePrefix||"google-fonts"}-stylesheets`,s=`${e.cachePrefix||"google-fonts"}-webfonts`,o=e.maxAgeSeconds||31536e3,h=e.maxEntries||30;(0,a.R)((({url:e})=>"https://fonts.googleapis.com"===e.origin),new n.k({cacheName:t})),(0,a.R)((({url:e})=>"https://fonts.gstatic.com"===e.origin),new r.h({cacheName:s,plugins:[new i.F({statuses:[0,200]}),new c.V({maxAgeSeconds:o,maxEntries:h})]}))}function h(e){self.addEventListener("install",(t=>{const s=e.urls.map((s=>e.strategy.handleAll({event:t,request:new Request(s)})[1]));t.waitUntil(Promise.all(s))}))}function l(e={}){const t=e.cacheName||"images",s=e.matchCallback||(({request:e})=>"image"===e.destination),n=e.maxAgeSeconds||2592e3,o=e.maxEntries||60,l=e.plugins||[];l.push(new i.F({statuses:[0,200]})),l.push(new c.V({maxEntries:o,maxAgeSeconds:n}));const u=new r.h({cacheName:t,plugins:l});(0,a.R)(s,u),e.warmCache&&h({urls:e.warmCache,strategy:u})}function u(e={}){const t=e.cacheName||"static-resources",s=e.matchCallback||(({request:e})=>"style"===e.destination||"script"===e.destination||"worker"===e.destination),r=e.plugins||[];r.push(new i.F({statuses:[0,200]}));const c=new n.k({cacheName:t,plugins:r});(0,a.R)(s,c),e.warmCache&&h({urls:e.warmCache,strategy:c})}s(152);var d=s(205);function f(e={}){const t=e.cacheName||"pages",s=e.matchCallback||(({request:e})=>"navigate"===e.mode),n=e.networkTimeoutSeconds||3,r=e.plugins||[];r.push(new i.F({statuses:[0,200]}));const c=new d.d({networkTimeoutSeconds:n,cacheName:t,plugins:r});(0,a.R)(s,c),e.warmCache&&h({urls:e.warmCache,strategy:c})}var p=s(111),g=s(584);function m(e){return(0,g.V)().matchPrecache(e)}function w(e={}){const t=e.pageFallback||"offline.html",s=e.imageFallback||!1,a=e.fontFallback||!1;self.addEventListener("install",(e=>{const n=[t];s&&n.push(s),a&&n.push(a),e.waitUntil(self.caches.open("workbox-offline-fallbacks").then((e=>e.addAll(n))))})),(0,p.A)((async e=>{const n=e.request.destination,r=await self.caches.open("workbox-offline-fallbacks");return"document"===n?await m(t)||await r.match(t)||Response.error():"image"===n&&!1!==s?await m(s)||await r.match(s)||Response.error():"font"===n&&!1!==a&&(await m(a)||await r.match(a))||Response.error()}))}s(447)},507:(e,t,s)=>{"use strict";s.r(t),s.d(t,{NavigationRoute:()=>n,RegExpRoute:()=>r.b,Route:()=>a.q,Router:()=>c.I,registerRoute:()=>i.R,setCatchHandler:()=>o.A,setDefaultHandler:()=>l}),s(288),s(142);var a=s(147);s(227);class n extends a.q{constructor(e,{allowlist:t=[/./],denylist:s=[]}={}){super((e=>this._match(e)),e),this._allowlist=t,this._denylist=s}_match({url:e,request:t}){if(t&&"navigate"!==t.mode)return!1;const s=e.pathname+e.search;for(const e of this._denylist)if(e.test(s))return!1;return!!this._allowlist.some((e=>e.test(s)))}}var r=s(872),i=s(656),c=s(101),o=s(111),h=s(621);function l(e){(0,h.G)().setDefaultHandler(e)}},233:(e,t,s)=>{"use strict";s.r(t),s.d(t,{CacheFirst:()=>a.h,CacheOnly:()=>i,NetworkFirst:()=>c.d,NetworkOnly:()=>h,StaleWhileRevalidate:()=>l.k,Strategy:()=>r.q,StrategyHandler:()=>u.s});var a=s(925),n=(s(288),s(142),s(178)),r=s(12);s(991),s(390);class i extends r.q{async _handle(e,t){const s=await t.cacheMatch(e);if(!s)throw new n.R("no-response",{url:e.url});return s}}var c=s(205),o=s(791);class h extends r.q{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,t){let s,a;try{const s=[t.fetch(e)];if(this._networkTimeoutSeconds){const e=(0,o.w)(1e3*this._networkTimeoutSeconds);s.push(e)}if(a=await Promise.race(s),!a)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(s=e)}if(!a)throw new n.R("no-response",{url:e.url,error:s});return a}}var l=s(456),u=s(86)}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=s(422),t=(e.offlineFallback,e.warmStrategyCache),a=s(233).CacheFirst,n=s(507).registerRoute,r=s(174).CacheableResponsePlugin,i=s(821).ExpirationPlugin;(0,s(816).precacheAndRoute)([{'revision':'856e09e755f18cfa3934164d36a3e379','url':'index.html'},{'revision':'367927c40ec642058f9f5a6fc1767281','url':'install.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'install.bundle.js.LICENSE.txt'},{'revision':'4f8ece5164ee38e37b24d69f710db81b','url':'main.bundle.js'},{'revision':'4e0e34f265fae8f33b01b27ae29d9d6f','url':'main.bundle.js.LICENSE.txt'}]);var c=new a({cacheName:"page-cache",plugins:[new r({statuses:[0,200]}),new i({maxAgeSeconds:2592e3})]});t({urls:["/index.html","/"],strategy:c}),n((function(e){return"navigate"===e.request.mode}),c),n((function(e){var t=e.request;return"style"===t.destination||"script"===t.destination}),new a({cacheName:"asset-cache",plugins:[new r({statuses:[0,200]}),new i({maxAgeSeconds:2592e3})]}))})()})();