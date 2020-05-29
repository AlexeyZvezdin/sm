import s from './footer.module.scss';

const Footer = (props) => {
  return <footer className="footer">{JSON.stringify(props) + 'footer'}</footer>;
};

export default Footer;
