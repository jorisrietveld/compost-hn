const functions = require('firebase-functions');
const fetch = require('node-fetch');

exports.preload = functions.https.onRequest((req, res) => {
  fetch(url)
    .then(response => response.json())
    .then((items) => {
      const now = Date.now();

      res.status(200).send(`
<!DOCTYPE html>
<html lang="en-GB" dir="ltr">
  <head>
    <title>CompostHN</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="/manifest.json">

    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="application-name" content="CompostHN">
    <meta name="apple-mobile-web-app-title" content="CompostHN">
    <meta name="theme-color" content="#87aa84">
    <meta name="msapplication-navbutton-color" content="#87aa84">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="msapplication-starturl" content="/">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="icon" href="/images/icon-512.png">

    <script>
      /*
      var compostHnPreload = {
        time: ${now},
        list: ${items}
      }
      */;
    </script>
    <script async src="/build/app.js"></script>

    <style>
      html {
        font-family: Roboto, -apple-system, sans-serif;
        font-size: 16px;
        font-weight: 300;
        color: #333;
      }

      body {
        margin: 0;
      }

      #no-js #content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

      }

      #no-js #content img {
        width: 80px;
        height: 80px;
        margin: 2rem 0;
      }

      #no-js #nav {
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #86AB83;
        margin-bottom: 1rem;
      }

      #no-js #nav #logo {
        padding: 5px;
        background-color: white;
        margin-left: 1rem;
        display: flex;
        align-items: center;
        border-radius: 3px;
      }

      #no-js #nav #logo img {
        height: 20px;
        width: 20px;
      }

      #no-js .nav-item {
        display: flex;
        flex-grow: 0;
      }

      #no-js .nav-item:last-child {
        flex-grow: 1;
        justify-content: flex-end;
      }

      #no-js .nav-item a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 1rem 0.5rem;
        border-bottom: 3px solid transparent;
      }

      #no-js .nav-item.first a {
        margin-left: 1rem;
      }

      #no-js .nav-item:last-child a {
        margin-right: 1rem;
      }
    </style>
  </head>
  <body>
    <x-router
      default-page="top"
    >
      <x-app>
        <div id="no-js">
          <div id="nav">
            <div id="logo"><img src="/images/logo.svg" alt=""></div>
            <div class="nav-item first"><a href="/top">top</a></div>
            <div class="nav-item"><a href="/new">new</a></div>
            <div class="nav-item"><a href="/show">show</a></div>
            <div class="nav-item"><a href="/ask">ask</a></div>
            <div class="nav-item"><a href="/jobs">jobs</a></div>
            <div class="nav-item"><a href="/about">about</a></div>
          </div>

          <main>
            <div id="content">
              <img src="/images/logo.svg" alt="">
              <p>A HackerNews reader built using <a href="https://github.com/lamplightdev/compost">compost</a></p>
            </div>
          </main>
        </div>
      </x-app>
    </x-router>

    <script>
      var loadScript = function (scriptName) {
        const script = document.createElement('script');
        script.src = scriptName;
        document.querySelector('head').appendChild(script);
      }

      if (document.head.createShadowRoot || document.head.attachShadow) {
        // loadScript('/build/app.js');
      } else {
        loadScript('/build/libs/webcomponentsjs/webcomponents-loader.js');
        window.addEventListener('WebComponentsReady', function () {
          loadScript('/build/app.js');
        });
      }

      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js');
        });
      }
    </script>
  </body>
</html>

      `);
    });

});
