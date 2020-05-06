import Link from 'next/link';
import Router from 'next/router';
import styles from './index.module.scss';
// import loader from '../public/img/loader.gif';
import Header from './Basic/Header';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  // state = {
  //   loaded: 'no',
  // };
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       loaded: 'yes',
  //     });
  //   }, 500);
  // }

  render() {
    return (
      <>
        <Header />
        <main>
          {/* возможно в будущем уберу отсюда */}
          <div className={styles['container__full']}>
            {/* {this.state.loaded === 'no' ? (
              <div
                style={{
                  margin: '50px',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <img src="/img/loader.gif" alt="loader" />
              </div>
            ) : ( */}
            <>{this.props.children}</>
            {/* )} */}
          </div>
        </main>
        <footer className="container">
          <div>&copy; {new Date().getFullYear()}</div>
          <div>
            <h3>FOOTER</h3>
          </div>
        </footer>
        <style jsx global>{`
          body {
            // overflow: hidden; сделать надо для модалки потом будет
          }
        `}</style>
      </>
    );
  }
}
