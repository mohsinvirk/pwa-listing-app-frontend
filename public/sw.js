const static_cache = "static-cache-01";
const dynaimcCache = "dynamic-cache-01";
const filesToCache = [
  "/",
  "/index.html",
  "/bundle.js",
  "/offline.html",
  "/style.css",
  "/6fedfd2f4311ae981b567f5400593065.png",
  "/130c758b58543f3850943fc590e2f7dc.png",
  "078e4099958ec114547bd5e5cd28ee7f.png",
  "/images/favicon.png",
  "sw.js",
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
          e.request.url.indexOf(
            "https://api.github.com/users/defunkt/followers"
          ) !== -1
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

let deferredPrompt;
window.addEventListener("beforeinstallprompt", e => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  btnAdd.style.display = "block";
});

btnAdd.addEventListener("click", e => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = "none";
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
    } else {
      console.log("User dismissed the A2HS prompt");
    }
    deferredPrompt = null;
  });
});
