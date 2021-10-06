'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "dbd53e58534afd6fa021237aa61d9ea8",
"version.json": "7acc3e6cb06e9705da1364dd7c9b6e86",
"assets/assets/images/background.png": "b608cabcc6a11eb60cf7f2225cb7f59d",
"assets/assets/images/buy_car.png": "95cac006051da760dcc4c558da3fe12a",
"assets/assets/images/buy_atm.png": "180fbf70c3a0f00616e4e8749eaafa41",
"assets/assets/images/buy_card.png": "790f3630e79d82be735f6f1b591141c5",
"assets/assets/images/buy_station.png": "9175d7094ca49dabd02980395e3a303d",
"assets/assets/images/buy_ticket.png": "2ace97cbeb1c7e58e97454612b6175db",
"assets/assets/images/tab_station.png": "4d7a1276d0bf92919f963811345cbf61",
"assets/assets/images/buy_mobilebanking.png": "04355825dbb3210c3183e6b5997f304d",
"assets/assets/images/detail_noti.png": "9c128406b979d544cb81036d72a7ce99",
"assets/assets/images/loading.gif": "584b607f5c2ff075429dc0e7b8d142ef",
"assets/assets/images/guide.png": "dc4f32adbaaa353109fe5313f493adf9",
"assets/assets/images/home_car.png": "89793051d5d88ce5fccd58078151d45a",
"assets/assets/images/tab_home_line.png": "3e11e8951096530ca15d85f172667707",
"assets/assets/images/napas_logo_fn.png": "a78a4f0d5a8770c3dc5516ad6dc198e3",
"assets/assets/images/tab_gift_line.png": "9fa8e31975e3d7c72ee085a284768ca7",
"assets/assets/images/tab_station_line.png": "6f5e1a753e516d25095452985f9f6786",
"assets/assets/images/home_nap.png": "141dfe3e46376aeaafc6d4f87940a7fb",
"assets/assets/images/no_image.png": "988b34c0f72d43091c7052b321eb3b23",
"assets/assets/images/visa_logo.png": "60f64a77221509829ccdbe6b5d984260",
"assets/assets/images/home_setting.png": "7824da25651f7abc8f0977589038f5dd",
"assets/assets/images/home_history.png": "1c321c8b2b8c953ac60411b3157f8c6c",
"assets/assets/images/home_ticket.png": "05e39b75ac3a9f2b74a276dbda1eb208",
"assets/assets/images/icon.png": "a4972c6ccd73153a486d901abc75b488",
"assets/assets/images/home_station.png": "841abefb095aaa860c8b996319c5a18d",
"assets/assets/images/visa_master_logo.png": "1752ae3967e245bf29bf846d47cb64bf",
"assets/assets/images/inactive_ticket.png": "990733f10b0d2a67cc9a0e19adabad8e",
"assets/assets/images/info_phone.png": "b5fdfd12dca1bb11357ce52e46dd41dc",
"assets/assets/images/lg_call.png": "afdb6a0e7b38f839de3929f5dcfaeffb",
"assets/assets/images/lg_gift.png": "f1cb74b5ac641cfe1b6a344f8f3d1f54",
"assets/assets/images/lg_pass.png": "8dbfbef7e047b4bc15b1a9c0af9d090c",
"assets/assets/images/lg_station.png": "66458d97cc258dbb9c4803f1a6b32a11",
"assets/assets/images/lg_support.png": "8cdcb02f80077a3dcc17397864ed085e",
"assets/assets/images/logo_home.png": "cdf4c6e04d2b4ca562ce6c72c61460b6",
"assets/assets/images/logo_login.png": "1b623e7d5bbd0130151321743fe8f0aa",
"assets/assets/images/noti_unread.png": "bd97420c145ee4351c2365e4f17e889b",
"assets/assets/images/noti_read.png": "6d1933d24751611ead5923b1f19f2b4e",
"assets/assets/images/tab_account.png": "e44b7da263bfdf89fff8886dadceb6cd",
"assets/assets/images/switch_off.png": "20d92d8ea8bc316a6b21c294354e403f",
"assets/assets/images/tab_gift.png": "52250f61af8b4f587533fb2b322ab555",
"assets/assets/images/station_icon.png": "fc0e29c56d20e4ead8a8d526666cc3d6",
"assets/assets/images/tab_account_line.png": "40825166f1326e0427f9e89a50931541",
"assets/assets/images/tab_home.png": "d8b1e0bb03bfb08cb5cbbc20aa9c91d3",
"assets/assets/cfg/app_settings.json": "76a75dc6a01f137ceaec95f302fc9f03",
"assets/assets/promotion/promotion.json": "2d060d81c2ddc952d255823fff18251f",
"assets/assets/service/service.json": "738b3c945d88ef42d05a145b07347f17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "a55f81d64486cd9da0f09dafc6be6b57",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "bca1fb292ea1f1df3af6d25d450afea8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "6cde6207ead7128acc6b29fe43152ee1",
"assets/NOTICES": "c6db94319af8102a08c6b34ddd27d750",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c3d2f265a67962193f890e351f3b17ca",
"/": "c3d2f265a67962193f890e351f3b17ca",
"manifest.json": "d474018397fd5d6ff234e8df38c1e6af"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
