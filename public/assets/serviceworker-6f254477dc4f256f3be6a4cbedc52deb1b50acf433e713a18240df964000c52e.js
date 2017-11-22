function onInstall(e){console.log("[Serviceworker]","Installing!",e),e.waitUntil(caches.open(CACHE_NAME).then(function(e){return e.addAll(["/assets/application-f1789fc86be4a983c33d3a6c1b7751b71a3f2839f31815f619d348ae7b3d2dae.js","/assets/application-d1fd3e643dc656f0296317dac9339321b5136ae4014bf7381a5c357ec77d1a1f.css","/offline.html"])}))}function onActivate(e){console.log("[Serviceworker]","Activating!",e),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return 0!==e.indexOf(CACHE_VERSION)}).map(function(e){return caches["delete"](e)}))}))}function onFetch(e){e.respondWith(fetch(e.request)["catch"](function(){return caches.match(e.request).then(function(t){return t||("navigate"===e.request.mode||"GET"===e.request.method&&e.request.headers.get("accept").includes("text/html")?(console.log("[Serviceworker]","Fetching offline content",e),caches.match("/offline.html")):void 0)})}))}console.log("[Service Worker] Hello world!");var CACHE_VERSION="v1",CACHE_NAME=CACHE_VERSION+":sw-cache-";self.addEventListener("install",onInstall),self.addEventListener("activate",onActivate),self.addEventListener("fetch",onFetch);