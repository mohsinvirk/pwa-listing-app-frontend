importScripts("/firebase-messaging-sw.js");
const static_cache = "static-cache-01";
const dynaimcCache = "dynamic-cache-01";
const filesToCache = [
  "/",
  "/index.html",
  "/bundle.js",
  "/offline.html",
  "/6fedfd2f4311ae981b567f5400593065.png",
  "/130c758b58543f3850943fc590e2f7dc.png",
  "078e4099958ec114547bd5e5cd28ee7f.png",
  "/images/favicon.png",
  "/sw.js",
  "https://olx-backend.herokuapp.com/ads"
];

self.addEventListener("install", e => {
  console.log("SW Registered!");
  e.waitUntil(
    caches.open(static_cache).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", e => {
  console.log("SW Activated");
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== static_cache && key !== dynaimcCache) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        const clonedResponse = response.clone();
        if (
          e.request.url.indexOf("https://olx-backend.herokuapp.com/ads") !== -1
        ) {
          caches.open(dynaimcCache).then(cache => {
            cache.put(e.request, clonedResponse);
          });
        }
        if (e.request.destination === "image") {
          caches.open(dynaimcCache).then(cache => {
            cache.put(e.request, clonedResponse);
          });
        }
        console.log("Direct from Network", e.request);
        return response;
      })
      .catch(_ => {
        return caches.match(e.request).then(response => {
          if (response) {
            console.log("Direct from Cache", e.request);
            return response;
          }
          console.log("Offline", e.request);
          return caches.match("offline.html");
        });
      })
  );
});
