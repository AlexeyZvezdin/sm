import Link from 'next/link';
import Router from 'next/router';
import './index.scss';
// import loader from '../public/img/loader.gif';
import Header from './Header';
export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    loaded: 'no',
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: 'yes',
      });
    }, 500);
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <div className="container">
            {this.state.loaded === 'no' ? (
              <div
                style={{
                  margin: '50px',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <img src="/img/loader.gif" alt="loader" />
              </div>
            ) : (
              <>{this.props.children}</>
            )}
          </div>
        </main>
        <footer className="container">
          <div>&copy; {new Date().getFullYear()}</div>
          <div>
            <Link href="/">
              <a style={{ display: 'block' }}>Go to home</a>
            </Link>
            <Link href="./about">
              <a style={{ display: 'block' }}>Go to About</a>
            </Link>
            <Link href="./hireme">
              <a style={{ display: 'block' }}>Hire me</a>
            </Link>
            <Link href="./blog">
              <a style={{ display: 'block' }}>Blog</a>
            </Link>
          </div>
        </footer>
        <style jsx>
          {`
            // it can work but I dont see a purpose because shortcuts doesnt work here
          `}
        </style>
      </>
    );
  }
}
