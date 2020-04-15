import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
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
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/index.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
