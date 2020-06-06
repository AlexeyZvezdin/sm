import { connect } from 'react-redux';
import fetcher from '../../utils/fetcher';
import SubHeader from '../../components/Basic/SubHeader';

export default connect(({ store: { city } }) => city)(function (props) {
  const cityId = props.cityId;
  const [state, setState] = React.useState({
    privacyPolicy: '',
    titlePrivacyPolicy: '',
  });
  React.useEffect(() => {
    async function fetchData() {
      if (cityId) {
        const data = await fetcher(
          `https://client-api.sushi-master.ru/api/v1/city/privacy-policy?id=${cityId}`
        );
        setState(data.result);
      }
    }
    fetchData();
  }, [cityId]);
  return (
    <>
      <div>
        <SubHeader>
          <h1>{state.titlePrivacyPolicy}</h1>
        </SubHeader>
        <div
          className="privacy-policy"
          dangerouslySetInnerHTML={{ __html: state.privacyPolicy }}
        />
        <style jsx>{`
          .privacy-policy {
            max-width: 992px;
            margin: 0 auto;
            margin-top: 34px;
          }
          p {
            margin: auto;
            padding: 10px;
          }
          .privacy-policy > p {
            margin-bottom: 1rem;
            padding: 14px;
          }
          a {
            padding: 10px;
          }
        `}</style>
      </div>
    </>
  );
});
