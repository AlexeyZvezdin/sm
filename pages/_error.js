import Router from 'next/router';

export default ({ statusCode }) => {
  // Потом обернуть в юзэффект чтобы рендерить на клиенте
  // Router.push('/404');
  return (
    <div className="_error">
      <h1>Ошибка</h1>
      {statusCode
        ? `Could not load your user data: Status code ${statusCode}`
        : ''}
      <img src="/img/404/pic-404.svg" alt="404" />
      <p>Страница не найдена, либо еще не создана</p>
      <style jsx>{`
        ._error {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          height: 80vh;
          padding: 50px;
          margin: 0 auto;
        }
        h1 {
          padding: 20px;
          font-family: Pusia;
        }
        p {
          padding-top: 50px;
        }
      `}</style>
    </div>
  );
};
