/**
 * ServiceWorker 등록
 */

(function () {
  'use strict'

  console.log('%c  _     _   _______   _        _         _____', 'font-weight: bold;color: red')
  console.log('%c | |   | | |  _____| | |      | |       / ___ \\', 'font-weight: bold;color: red')
  console.log('%c | |___| | | |____   | |      | |      / /   \\ \\', 'font-weight: bold;color: orange')
  console.log('%c |  ___  | |  ____|  | |      | |     | |     | |', 'font-weight: bold;color: green')
  console.log('%c | |   | | | |       | |      | |     | |     | |', 'font-weight: bold;color: dodgerblue')
  console.log('%c | |   | | | |_____  | |____  | |____  \\ \\___/ /', 'font-weight: bold;color: navy')
  console.log('%c |_|   |_| |_______| |______| |______|  \\_____/', 'font-weight: bold;color: purple')
  console.log('%c leegeunhyeok@pc:~$ echo "WELCOME TO Geunhyeok LEE\'s WEB PAGE!" ', 'background-color:#000;color:#fff;border-radius:3px;')
  console.log('%c PWA %c x %c Vue.js %c Base web page','background:#35495e;padding:1px;border-radius:3px;color:#fff', 'background:transparent', 'background:#41b883;padding:1px;border-radius:3px;color:#fff', 'background:transparent')

  /**
   * @description OS 정보, 브라우저 정보 조회
   */
  var system = function () {
    var nAgt = navigator.userAgent
    var browserName  = navigator.appName
    var fullVersion  = '' + parseFloat(navigator.appVersion)
    var majorVersion = parseInt(navigator.appVersion, 10)
    var nameOffset
    var verOffset
    var ix
    var OSName = 'Unknown OS'
    if (navigator.appVersion.indexOf('Win') !== -1) OSName = 'Windows'
    if (navigator.appVersion.indexOf('Mac') !== -1) OSName = 'MacOS'
    if (navigator.appVersion.indexOf('X11') !== -1) OSName = 'UNIX'
    if (navigator.appVersion.indexOf('Linux') !== -1) OSName = 'Linux'

    // Opera
    if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
      browserName = 'Opera'
      fullVersion = nAgt.substring(verOffset + 6)
      if ((verOffset = nAgt.indexOf('Version')) !== -1) {
        fullVersion = nAgt.substring(verOffset + 8)
      }
    } else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) { // MSIE
      browserName = 'Microsoft Internet Explorer'
      fullVersion = nAgt.substring(verOffset + 5)
    } else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) { // Chrome
      browserName = 'Chrome'
      fullVersion = nAgt.substring(verOffset + 7)
    } else if ((verOffset = nAgt.indexOf('Safari')) !== -1) { // Safari
      browserName = 'Safari'
      fullVersion = nAgt.substring(verOffset + 7)
      if ((verOffset=nAgt.indexOf('Version')) !== -1) {
        fullVersion = nAgt.substring(verOffset + 8)
      }
    } else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) { // FireFox
      browserName = 'Firefox'
      fullVersion = nAgt.substring(verOffset + 8)
    } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <  (verOffset = nAgt.lastIndexOf('/'))) { // Other
      browserName = nAgt.substring(nameOffset, verOffset)
      fullVersion = nAgt.substring(verOffset + 1)
      if (browserName.toLowerCase() === browserName.toUpperCase()) {
        browserName = navigator.appName
      }
    }

    if ((ix = fullVersion.indexOf(';')) !== -1) {
      fullVersion = fullVersion.substring(0, ix)
    }

    if ((ix = fullVersion.indexOf(' ')) !== -1) {
      fullVersion = fullVersion.substring(0, ix)
    }

    majorVersion = parseInt('' + fullVersion, 10)
    if (isNaN(majorVersion)) {
      fullVersion  = '' + parseFloat(navigator.appVersion)
      majorVersion = parseInt(navigator.appVersion, 10)
    }

    // OS
    console.log('\n%c %c OS Information %c ', 'background:#41b883;padding:1px;border-radius:3px 0 0 3px', 'background:#35495e;padding:1px;color:#fff', 'background:#41b883;padding:1px;border-radius:0 3px 3px 0')
    console.log('Your OS:', OSName)

    // Browser
    console.log('\n%c %c BROWSER Information %c ', 'background:#41b883;padding:1px;border-radius:3px 0 0 3px', 'background:#35495e;padding:1px;color:#fff', 'background:#41b883;padding:1px;border-radius:0 3px 3px 0')
    console.log('Browser name:', browserName)
    console.log('Full version:', fullVersion)
    console.log('Major version:', majorVersion)
    console.log('')
  }

  system()

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(regist => {
      console.log('😀 Service Worker Registered')
      regist.addEventListener('updatefound', () => {
        const newWorker = regist.installing
        console.log('💡 Service Worker update found!')

        newWorker.addEventListener('statechange', function () {
          console.log('ℹ️ Service Worker state:', this.state)
        })
      })
    })
  } else {
    console.log('😢 This browser is not support ServiceWorker')
  }
})()
