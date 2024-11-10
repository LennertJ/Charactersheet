
/*self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./img/192x192.png",
        "./img/512x512.png",
        "./js/attack.js",
        "./js/book.js",
        "./style/index.css",
        "./style/attack.css",
        "./style/book.css",
        "picture.png"
      ])
    })
  )
})


self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request)
    })
  )
});
*/