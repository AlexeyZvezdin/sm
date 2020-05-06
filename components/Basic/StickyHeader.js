import { connect } from 'react-redux';
import styles from './sticky.module.scss';

class StickyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles[`sticky-header`]}>Hello Header Sticky</div>;
  }
}

export default connect()(StickyHeader);
