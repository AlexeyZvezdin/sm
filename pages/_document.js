import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  // TODO: Подрубить наверное свайпер и джскуки сюда
  render() {
    return (
      <Html lang="ru">
        {/* dont add title here */}
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          {/* закрыл от индексации */}
          <meta name="robots" content="noindex, nofollow" />
          <meta name="description" content="sushi-master" />
          <meta charSet="UTF-8" />
          {/* в след раз попробуй его убрать */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="preconnect"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
          ></link>
          <meta name="apple-itunes-app" content="app-id=1119016991" />
          <meta name="google-play-app" content="app-id=com.ub.sushimaster" />

          <link rel="icon" href="./favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./favicons/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="./favicons/safari-pinned-tab.svg"
            color="#da532c"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="stylesheet" href="/css/index.css" />
          <link rel="stylesheet" href="/css/fonts.css" />
          {/* <script
            id="danger"
            dangerouslySetInnerHTML={{
              __html: `console.log('hello');
              if (typeof window !== 'undefined') {
                document.addEventListener(
                  'DOMContentLoaded',
                  function () {
                    var imgs = document.querySelectorAll('img');
                    var iframes = document.querySelectorAll('iframe');
                    var sources = document.querySelectorAll('source');
                    var elements = Array.from(imgs)
                      .concat(Array.from(iframes))
                      .concat(Array.from(sources));
                    elements.forEach(function (el) {
                      if ('src' in el.dataset || 'srcset' in el.dataset) {
                        imageObserver.observe(el);
                      }
                    });
                  },
                  false
                );
                var imageObserver = new IntersectionObserver(function (entries, imgObserver) {
                  entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                      var lazyImage = entry.target;
                      if ('src' in lazyImage.dataset) {
                        lazyImage.src = lazyImage.dataset.src;
                        delete lazyImage.dataset.src;
                      }
                      if ('srcset' in lazyImage.dataset) {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.type = lazyImage.dataset.type;
                        delete lazyImage.dataset.srcset;
                        delete lazyImage.dataset.type;
                      }
                    }
                  });
                });
              }
              `,
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" src="/js/lazyImage.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
