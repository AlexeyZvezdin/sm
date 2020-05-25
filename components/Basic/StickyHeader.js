import { connect } from 'react-redux';

import StickyHeaderView from './StickyHeaderView';
class StickyHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <StickyHeaderView tabs={this.props.stickyTabs} />;
  }
}

const mapStateToProps = ({ store }) => ({
  categories: store.categories,
  catalogStructure: store.catalogStructure,
});

export default connect(mapStateToProps)(StickyHeader);
// Это всё тут не работает тем же образом
// const placeholderLengths = [5, 6, 8, 5, 7, 5, 9];

// {
//   showPlaceholder
//     ? placeholderLengths.map((item, index) => (
//         <div className={styles['sticky-header__categories__item']} key={index}>
//           <div
//             style={{ width: `${item * 18}px` }}
//             className={styles['sticky-header__categories__placeholder']}
//           />
//         </div>
//       ))
//     : '';
// }
