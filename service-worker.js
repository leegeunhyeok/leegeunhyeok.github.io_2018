/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/dist/css/app.01adc7de.css","7c3dea54eda7afb8653bccc1c2ca656f"],["/dist/img/background.d39c48be.svg","d39c48beefc4b624c3e2dfe2969d5fad"],["/dist/img/google.8f9327db.png","8f9327db2597fa57d2f42b4a6c5a9855"],["/dist/img/lgh.24fe6a8a.png","24fe6a8aa008f04725e234e747ebe4c3"],["/dist/img/logo.c2a605fb.png","c2a605fbc0e687b2e1b4b90a7c445cdd"],["/dist/img/poweroff.b2f417c1.png","b2f417c173872cbbb09f352b04f1047b"],["/dist/index.html","4648b35b5a59f57e280187d7aa0ef278"],["/dist/js/app.ab4871b4.js","ae90b10ac7703632ba68c99fa75c15c6"],["/dist/js/chunk-vendors.b92b2fe7.js","3fb5181d514da30fd73583bedfccb254"],["/fonts/NanumSquareRoundB.eot","8292e5eec8bc25c2390a53bed291119d"],["/fonts/NanumSquareRoundB.ttf","ecc61bfabe0637e8367a734e718a4f8e"],["/fonts/NanumSquareRoundB.woff","ef427507ccca96d4d1ec42f9f47cd358"],["/fonts/NanumSquareRoundEB.eot","72ac1ebaf03ebaa4036c1f4ebee89f44"],["/fonts/NanumSquareRoundEB.ttf","00f73012c2e65950de3d7fa2be640c95"],["/fonts/NanumSquareRoundEB.woff","6c9d9230bfee073c7fabb6943ddf3410"],["/fonts/NanumSquareRoundL.eot","6a301d288255a400f9ea9114f85bc7ca"],["/fonts/NanumSquareRoundL.ttf","924b9ea5f0305f8dc6371fc4f12da37a"],["/fonts/NanumSquareRoundL.woff","e6e1d4f1a51dcf5a2fb2dac885d04e20"],["/fonts/NanumSquareRoundR.eot","246e46763776d6a70c47d5e3243da4d2"],["/fonts/NanumSquareRoundR.ttf","4ba97a2a508f59611d45c41e7414ba66"],["/fonts/NanumSquareRoundR.woff","7a830270064eb28e6ab5a9f81d9dbe25"],["/img/favicon.ico","bdcd09ff61a7fb7b160cfc3e64f03d61"],["/img/icons/icon-128x128.png","c531db33b14a2cfecebc73f531da811b"],["/img/icons/icon-144x144.png","dddbada2fd84cec29e0c6ecfe129ad8c"],["/img/icons/icon-152x152.png","6651812e47fca4864a9b7fa1e5e4b830"],["/img/icons/icon-192x192.png","b0000b6e2308d30f8b77da8776a5a237"],["/img/icons/icon-384x384.png","6a9ddc400bacd56646168975fab57c07"],["/img/icons/icon-512x512.png","6a9ddc400bacd56646168975fab57c07"],["/img/icons/icon-72x72.png","f6b042d0c1d5c4292f5adfa9909a75ad"],["/img/icons/icon-96x96.png","4668a9b78bc9a8ecb02bb10d385e2082"],["/img/power.png","988c5fa8d4271d0725aa6674fc5f4f7e"],["/img/project/bit_miner.png","e0cc2051b0b775892b62e0ca328c1ce2"],["/img/project/coidroid.png","d5554f8f2ef54c0224d463b80a426fbb"],["/img/project/gmma.png","9461fde3ad5e23401bd99f01095d68df"],["/img/project/gmma_kakao.png","06b558232ce51c60b5d368de4e65abad"],["/img/project/lotto.png","4f82764c4616d73660c1059d450a3ba9"],["/img/project/visual-electron.png","5e15ef18e6363a666d2f23c1c7ce0c36"],["/img/refresh.png","888e8148579c2da83aa85748386041e7"],["/img/shortcut/browser.png","75d0092f038d1d6c48cc132f77b370c4"],["/img/shortcut/email.png","41a754188719e34a29cfa97ce304155e"],["/img/shortcut/folder.png","c696b25a325a7633755d90d3900cfbf6"],["/img/shortcut/github.png","1645fddd05bd562dca2d8e3aa720f012"],["/img/shortcut/information.png","32be8f2f77d877735ba42b80d3ee4744"],["/img/shortcut/terminal.png","afe83a955791a4f193c412039d903d11"],["/img/start.png","dbb12d51f4293ee18c9d29635c5f5d12"]];
var cacheName = 'sw-precache-v3-v1-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







