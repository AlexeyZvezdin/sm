export default ({ statusCode }) => (
  <div className="_error">
    <h1>Ошибка</h1>
    {statusCode
      ? `Could not load your user data: Status code ${statusCode}`
      : ''}
    <img src="/img/pic-404.svg" alt="404" />
    <p>Страница не найдена, либо еще не создана</p>
    <style jsx>{`
      ._error {
        height: 80vh;
        padding: 50px;
        margin: 0 auto;
      }
      h1 {
        padding: 20px;
      }
    `}</style>
  </div>
);
