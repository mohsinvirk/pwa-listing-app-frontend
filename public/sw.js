/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js"
);
workbox.setConfig({ modulePathPrefix: "workbox-v3.4.1" });

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: "asset-manifest.json",
    revision: "1d2de0977e0906c89133c1b2dc0acf10"
  },
  {
    url: "favicon.ico",
    revision: "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    url: "index.html",
    revision: "881aa432d719a690ba9d483cf0aa99a2"
  },
  {
    url: "manifest.json",
    revision: "730915ec2725cf6721080a6516b23f15"
  },
  {
    url: "service-worker.js",
    revision: "a545d79eb7b1087ab7297692cb756bdf"
  },
  {
    url: "static/css/main.edbdffa2.chunk.css",
    revision: "0ff0f29ec04b354acc60a44a26d0bc0f"
  },
  {
    url: "static/js/main.2b484c8d.chunk.js",
    revision: "f817657b9ed003b6a81b7bb79d5166ba"
  },
  {
    url: "static/js/runtime~main.41117e05.js",
    revision: "b7addbf5607266c9e5e708aaef0ad942"
  },
  {
    url: "static/js/vendors.e427fbce.chunk.js",
    revision: "6c4f9270341b8943808a3f151b9594a1"
  },
  {
    url: "static/media/car.130c758b.png",
    revision: "130c758b58543f3850943fc590e2f7dc"
  },
  {
    url: "static/media/home.6fedfd2f.png",
    revision: "6fedfd2f4311ae981b567f5400593065"
  },
  {
    url: "static/media/logo.5d5d9eef.svg",
    revision: "5d5d9eefa31e5e13a6610d9fa7a283bb"
  },
  {
    url: "static/media/phone.078e4099.png",
    revision: "078e4099958ec114547bd5e5cd28ee7f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst(),
  "GET"
);
