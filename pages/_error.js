export default ({ statusCode }) => (
  <>
    <h1>Error</h1>
    {statusCode
      ? `Could not load your user data: Status code ${statusCode}`
      : ''}
    <p>Couldn't get that page, sorry</p>
  </>
);
