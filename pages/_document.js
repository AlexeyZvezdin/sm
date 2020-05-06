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
          {/* <h1
            style={{
              color: 'pink',
              paddingTop: '10px',
              top: '10px',
              height: 'auto',
              position: 'fixed',
              zIndex: '10001',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'lightpink',
              opacity: '0.5',
              outline: '0',
              overflow: 'hidden',
            }}
          >
            does portal is going to work?
          </h1> */}
          <Main />
          <NextScript />
          <script type="text/javascript" src="/js/lazyImage.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
