module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,ico,html,js,css,png,svg}"],
  swDest: "build/sw.js",
  maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
  importWorkboxFrom: "local",

  // Define runtime caching rules.
  runtimeCaching: [
    {
      // Match any request ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: "cacheFirst"
    }
  ]
};
