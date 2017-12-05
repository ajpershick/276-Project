function onInstall(e){console.log("[Serviceworker]","Installing!",e),e.waitUntil(caches.open(CACHE_NAME).then(function(e){return e.addAll(["/assets/application-85ffe917dac6e89f888a4f345b7cf3d87a43ff803a8bd16b8ee8fb7b1afca3f1.js","/assets/application-e207a6b28518531bdd1f83fa151c83acee867b090e9a94a614d9b33350970fbd.css","/offline.html"])}))}function onActivate(e){console.log("[Serviceworker]","Activating!",e),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return 0!==e.indexOf(CACHE_VERSION)}).map(function(e){return caches["delete"](e)}))}))}function onFetch(e){e.respondWith(fetch(e.request)["catch"](function(){return caches.match(e.request).then(function(t){return t||("navigate"===e.request.mode||"GET"===e.request.method&&e.request.headers.get("accept").includes("text/html")?(console.log("[Serviceworker]","Fetching offline content",e),caches.match("/offline.html")):void 0)})}))}console.log("[Service Worker] Hello world!");var CACHE_VERSION="v1",CACHE_NAME=CACHE_VERSION+":sw-cache-";self.addEventListener("install",onInstall),self.addEventListener("activate",onActivate),self.addEventListener("fetch",onFetch);