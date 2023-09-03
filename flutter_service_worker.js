'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "51a338658a0ad2368b284cae6ad55b7c",
"assets/AssetManifest.json": "bd9a3173f20d7d7ca880f480161e22c7",
"assets/assets/fonts/reem/ReemKufiInk-Regular.ttf": "6701897574bdd92835841fa5be04295d",
"assets/assets/fonts/rubik/Rubik-Black.ttf": "a454459ef6f005383832c5aa33f22ebc",
"assets/assets/fonts/rubik/Rubik-BlackItalic.ttf": "347d040ac267266eab7ac5b3a4168a35",
"assets/assets/fonts/rubik/Rubik-Bold.ttf": "3e84b9e91636be0299ae44f99135b6d2",
"assets/assets/fonts/rubik/Rubik-BoldItalic.ttf": "235b2d876c4b9f3f12a7c439c74e5729",
"assets/assets/fonts/rubik/Rubik-ExtraBold.ttf": "74419db6af12e95b035beb3a2f2ddaee",
"assets/assets/fonts/rubik/Rubik-ExtraBoldItalic.ttf": "31e8a641be3b2de534cba8f023481544",
"assets/assets/fonts/rubik/Rubik-Italic.ttf": "4ac4d8c3ca41d91fe0224e04e6657995",
"assets/assets/fonts/rubik/Rubik-Light.ttf": "5f5803d6512478bbd7abbe8eb0d3891a",
"assets/assets/fonts/rubik/Rubik-LightItalic.ttf": "214e6aabb7a28d8cee7215f734790498",
"assets/assets/fonts/rubik/Rubik-Medium.ttf": "149ba9762e7abdc233e6917fafb8a651",
"assets/assets/fonts/rubik/Rubik-MediumItalic.ttf": "1baf188046a8716970f39834eca16eac",
"assets/assets/fonts/rubik/Rubik-Regular.ttf": "7dad6ed352aa899d584ce33989a5ddab",
"assets/assets/fonts/rubik/Rubik-SemiBold.ttf": "67a1f1242b6467e905b32ba521228454",
"assets/assets/fonts/rubik/Rubik-SemiBoldItalic.ttf": "500548c19634d9ce3cf959f1915c866a",
"assets/assets/images/accepted-request.png": "0ed3d52207dfb6cbcb2f05e6b89eae50",
"assets/assets/images/complete.png": "9d8e1e71cc94c3b3a387ff1b9f643df1",
"assets/assets/images/default_profile_picture.png": "22d55e3395a4159c17d6420a591dec6a",
"assets/assets/images/denied-request.png": "d8b7363781a70f36efb2937e03c5bff7",
"assets/assets/images/driver.png": "72f67677683389890531a99a2a50a4ae",
"assets/assets/images/fast-food.png": "ae79ee1914ad738d5871d9bd8b0c03ae",
"assets/assets/images/gradient_background.jpg": "3e5823a4f1e75b69fd3d3169a7a47bf6",
"assets/assets/images/header_image.png": "545ffbfb3c3fc4725e834637c9c281f1",
"assets/assets/images/icon1.png": "afe5d361e1cf79b2e758f99fee5b43a6",
"assets/assets/images/icon2.png": "66384068713ab405925f8dab1dd0f249",
"assets/assets/images/icon3.png": "a556e20a1fb894eab5a663693c5c7285",
"assets/assets/images/icon4.png": "ba0261ddc496ded71e1795891ec4bb24",
"assets/assets/images/Location.png": "ac8f460951bff8709de8521e4c6a137e",
"assets/assets/images/logo.png": "c30ff34e6477fc0736b6a7d01cdb188f",
"assets/assets/images/map.png": "97f79f018dbe10b6b709e7b1199f29e7",
"assets/assets/images/ok.png": "3e2d61dfb9f453beceae3ec65764b7f1",
"assets/assets/images/Piquele%2520Reports.png": "0459fe7e34eea4ce91ee806fe88b499b",
"assets/assets/images/piquele_logo.png": "eb16ef0afda1be7cbfd284f8d97054df",
"assets/assets/images/piquele_orange.png": "e76b1dd51917351d8f38ded80177bac2",
"assets/assets/images/piquele_reports_logo.png": "ff0ddd33b40b90e869114e81cd039494",
"assets/assets/images/product.jpg": "41b7626a92c74cb05f89d9e2e41afda7",
"assets/assets/images/restaurant.png": "baf4a3a4ab91b573dd824279f133f794",
"assets/assets/images/Start_Screen_Image_1.png": "189c19bc48212bd79f52e796b3e30fda",
"assets/assets/images/Start_Screen_Image_2.png": "90f3cb03c1dd7bb710821b9acc9b1ed7",
"assets/assets/images/Start_Screen_Image_3.png": "a1741cabfd5549da690c62ffa21d2bba",
"assets/assets/images/store.png": "bcad2c4652c885eedf6a529ed40a7bfc",
"assets/assets/images/succesful.png": "cc8ee302779b1531e9c638068d11db06",
"assets/assets/images/user.png": "ee2b8cfc02750dbf1a193dc1d0e2f28f",
"assets/assets/images/wait-request.png": "163d66c685d82d9d4509e9338edb2eb7",
"assets/assets/images/wallpaper.jpg": "bed8140df001faa753aaee8feb6416ba",
"assets/assets/images/warning.png": "fa659ce915c2e186b558969178e4c0f5",
"assets/assets/images/wrong.png": "489de08428a19381fce7f109792e22f1",
"assets/assets/vectors/cancel.svg": "d3dc7392aa2e7f35860e7208ad8fa269",
"assets/assets/vectors/codeRecovery_vector_1.svg": "a364d3b3fadd22c5a7549fe2dc75384f",
"assets/assets/vectors/codeRecovery_vector_2.svg": "4a02d14ff46b09e7f7cf0e9e42355005",
"assets/assets/vectors/email_check.svg": "146b5c8d5fa9d3e990a982965422123e",
"assets/assets/vectors/home_vector_1.svg": "6f421c308c8d0454ba5698e77431575b",
"assets/assets/vectors/home_vector_2.svg": "ae6278e8360d64bb94633a65fa149a1c",
"assets/assets/vectors/orderAdded_vector_1.svg": "62c5eb920cdcc8ecbec0354f426c7cbb",
"assets/assets/vectors/orderAdded_vector_2.svg": "6929b236a0147a0a976d7eb7b90e332d",
"assets/assets/vectors/passwordRecovery_vector_1.svg": "a9e2088fb256fa23259b785470979e6c",
"assets/assets/vectors/passwordRecovery_vector_2.svg": "2ce25cc187b0c8d7fba3f86fe994e447",
"assets/assets/vectors/Piquele%2520Reports.svg": "17935aa46391e738c1806416fd5d8580",
"assets/assets/vectors/piquele_orange.svg": "ffe9e7a18d59aa952fabf62fb0bb5911",
"assets/assets/vectors/piquele_reports_logo.svg": "63cb68a221d8953f3e59766d36a17386",
"assets/assets/vectors/registerDriver_vector.svg": "b3548de55b383d571a95aceae9a4646f",
"assets/assets/vectors/register_business_intro_illustration.svg": "481bbf4572efc25651f9140eb9121373",
"assets/assets/vectors/register_vector_1.svg": "5ff40e6c26a381e526994944487ad61d",
"assets/assets/vectors/register_vector_2.svg": "bcd80db610be6ecbeadac9d7adff46ec",
"assets/assets/vectors/splash_vector_1.svg": "da877da1afecdf6557958d4823299f59",
"assets/assets/vectors/splash_vector_2.svg": "bbb203a962f880498a7fef8a0a6e91ab",
"assets/assets/vectors/start_screen_vector_1.svg": "eacde39bcc186f3fe3522780e96338d7",
"assets/assets/vectors/start_screen_vector_2.svg": "1f6b21038ad761b1098167d797309183",
"assets/assets/vectors/start_screen_vector_3.svg": "7f6a54e2356d099b483f5e68b81f0ac3",
"assets/assets/vectors/success.svg": "80fabfe129291f8181d996daff7f059b",
"assets/assets/vectors/wait.svg": "bcf642081fa2f0a8f6d14ce1dc4bdc55",
"assets/assets/videos/cooking.mp4": "b795f8aef62b9ba42624d601b513bea8",
"assets/FontManifest.json": "74f6751dcaa6e876bb7a8ce779b36b2f",
"assets/fonts/MaterialIcons-Regular.otf": "c7159198b86466c990539eab6896349a",
"assets/NOTICES": "653e954deafcb2bf88e8832e36083d6e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5ac99533bd9dc46227434b4853c3e532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "093d2cde7075fcffb24ab215668d0da2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1e17b1ec3152f29bf783bd42db8b6023",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "9fc0005453e5274f9483b69dd10017b7",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ba99e47543522dc7d8d97cd812263e12",
"/": "ba99e47543522dc7d8d97cd812263e12",
"main.dart.js": "e7faec8d9e669650b0b80da0c6bb0f01",
"manifest.json": "fc6a5ee790923d7e0f70ced83a6277e7",
"pdfGenerator.js": "81051bcc2cf1bedf378224b0a93e2877",
"version.json": "da6616fad85644be45b8b3d9894e3e8c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
