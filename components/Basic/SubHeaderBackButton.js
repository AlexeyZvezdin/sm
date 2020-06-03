import Router from 'next/router';

// styles is in the delivery for now
export default function () {
  const handleGoBack = () => {
    Router.back();
  };
  return (
    <div className="">
      <button
        className="back-button-container__button"
        onClick={handleGoBack}
      ></button>
    </div>
  );
}
