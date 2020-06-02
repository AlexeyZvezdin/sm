import { connect } from 'react-redux';

import StickyHeaderView from './StickyHeaderView';
import CartIcon from './CartIcon'
class StickyHeader extends React.Component {
  constructor (props) {
    super(props);
    //this.showPlaceholder = false
  }

  render () {
    return <StickyHeaderView tabs={this.props.stickyTabs}/>;
    //   if (
    //     !props.headerCategoryIds ||
    //     props.headerCategoryIds.length === 0 ||
    //     Object.values(props.categories).length === 0
    //   ) {
    //     this.showPlaceholder = true
    //   }
    //
    //   let categories = []
    //   if (props.headerCategoryIds) {
    //     props.headerCategoryIds.map(item =>
    //       props.categories[item] ? categories.push(props.categories[item]) : false,
    //     )
    //   }
    //   categories.forEach(cat => {
    //     cat.subcats = []
    //     if (cat.subcategories != null) {
    //       cat.subcategories.forEach(subCatIndex => {
    //         cat.subcats.push(props.categories[subCatIndex.id])
    //       })
    //     }
    //   })
    //   return (
    //   <div
    //     className={`sticky-header ${props.sticky ? 'sticky' : ''} ${
    //       props.location.pathname === '/cart/order' ||
    //       props.location.pathname === '/cart'
    //         ? 'sticky-header_order-mobile'
    //         : ''
    //     }`}
    //     ref={props.headerRef}
    //   >
    //     <Link to="/">
    //       <div className="header__logo">
    //         Заказать еду на дом с Суши мастер, {props.location.cityName}
    //       </div>
    //     </Link>
    //     <div className="sticky-header__categories">
    //       {showPlaceholder
    //         ? placeholderLengths.map((item, index) => (
    //           <div className="sticky-header__categories__item" key={index}>
    //             <div
    //               className="sticky-header__categories__placeholder"
    //               style={{ width: `${item * 18}px` }}
    //             />
    //           </div>
    //         ))
    //         : Object.values(categories)
    //           .filter(category => !category.mainPage)
    //           .map((item, index) => {
    //             let isSelectedCategory = props.selectedCategory === item.name
    //
    //             item.subcats
    //               .filter(i => Boolean(i))
    //               .forEach(subC => {
    //                 if (subC.name === props.selectedCategory) {
    //                   isSelectedCategory = true
    //                 }
    //               })
    //
    //             return (
    //               <div
    //                 key={index}
    //                 className={`sticky-header__categories__item ${
    //                   isSelectedCategory ? 'selected' : ''
    //                 }`}
    //               >
    //                 {item.cityClick &&
    //                 item.cityClick.format === 'REDIRECT' &&
    //                 item.cityClick.url ? (
    //                   <a
    //                     target="_blank"
    //                     className={
    //                       item.name === 'Монопицца'
    //                         ? 'sticky-header__categories__item-monopizza'
    //                         : ''
    //                     }
    //                     href={item.cityClick.url}
    //                   >
    //                     {item.name}
    //                   </a>
    //                 ) : (
    //                   <Link
    //                     className={
    //                       item.name === 'Монопицца'
    //                         ? 'sticky-header__categories__item-monopizza'
    //                         : ''
    //                     }
    //                     to={UrlBuilder.category(item)}
    //                     key={index}
    //                   >
    //                     {item.name}
    //                   </Link>
    //                 )}
    //                 {item.subcats.length !== 0 && (
    //                   <div
    //                     className={`sticky-header__categories__item__sub-menu`}
    //                   >
    //                     {item.subcats
    //                       .filter(i => Boolean(i))
    //                       .map((subCat, subIndex) => {
    //                         return (
    //                           <div
    //                             className={`sticky-header__categories__item__sub-menu__item`}
    //                             key={subIndex}
    //                           >
    //                             <NavLink
    //                               to={UrlBuilder.category(subCat)}
    //                               key={subIndex}
    //                               activeClassName="selected"
    //                             >
    //                               {subCat.name}
    //                             </NavLink>
    //                           </div>
    //                         )
    //                       })}
    //                   </div>
    //                 )}
    //               </div>
    //             )
    //           })}
    //     </div>
    //     {props.sticky && <CartIcon />}
    //   </div>
    // )
    // }
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


//
// import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { NavLink, Link, withRouter } from 'react-router-dom'
// import CartIcon from '../../Cart/CartIcon'
//
// import './_sticky-header.scss'
//
// import * as UrlBuilder from '../../../utils/UrlBuilder'
//
// const mapStateToProps = state => {
//   return {
//     categories: state.catalog.categories.items,
//     headerCategoryIds: state.catalog.structure.categories,
//     location: state.location,
//   }
// }
//
// const placeholderLengths = [5, 6, 8, 5, 7, 5, 9]
//
// function StickyHeader(props) {
//   let showPlaceholder = false
//   if (
//     !props.headerCategoryIds ||
//     props.headerCategoryIds.length === 0 ||
//     Object.values(props.categories).length === 0
//   ) {
//     showPlaceholder = true
//   }
//
//   let categories = []
//   if (props.headerCategoryIds) {
//     props.headerCategoryIds.map(item =>
//       props.categories[item] ? categories.push(props.categories[item]) : false,
//     )
//   }
//   categories.forEach(cat => {
//     cat.subcats = []
//     if (cat.subcategories != null) {
//       cat.subcategories.forEach(subCatIndex => {
//         cat.subcats.push(props.categories[subCatIndex.id])
//       })
//     }
//   })
//   return (
//     <div
//       className={`sticky-header ${props.sticky ? 'sticky' : ''} ${
//         props.location.pathname === '/cart/order' ||
//         props.location.pathname === '/cart'
//           ? 'sticky-header_order-mobile'
//           : ''
//       }`}
//       ref={props.headerRef}
//     >
//       <Link to="/">
//         <div className="header__logo">
//           Заказать еду на дом с Суши мастер, {props.location.cityName}
//         </div>
//       </Link>
//       <div className="sticky-header__categories">
//         {showPlaceholder
//           ? placeholderLengths.map((item, index) => (
//             <div className="sticky-header__categories__item" key={index}>
//               <div
//                 className="sticky-header__categories__placeholder"
//                 style={{ width: `${item * 18}px` }}
//               />
//             </div>
//           ))
//           : Object.values(categories)
//             .filter(category => !category.mainPage)
//             .map((item, index) => {
//               let isSelectedCategory = props.selectedCategory === item.name
//
//               item.subcats
//                 .filter(i => Boolean(i))
//                 .forEach(subC => {
//                   if (subC.name === props.selectedCategory) {
//                     isSelectedCategory = true
//                   }
//                 })
//
//               return (
//                 <div
//                   key={index}
//                   className={`sticky-header__categories__item ${
//                     isSelectedCategory ? 'selected' : ''
//                   }`}
//                 >
//                   {item.cityClick &&
//                   item.cityClick.format === 'REDIRECT' &&
//                   item.cityClick.url ? (
//                     <a
//                       target="_blank"
//                       className={
//                         item.name === 'Монопицца'
//                           ? 'sticky-header__categories__item-monopizza'
//                           : ''
//                       }
//                       href={item.cityClick.url}
//                     >
//                       {item.name}
//                     </a>
//                   ) : (
//                     <Link
//                       className={
//                         item.name === 'Монопицца'
//                           ? 'sticky-header__categories__item-monopizza'
//                           : ''
//                       }
//                       to={UrlBuilder.category(item)}
//                       key={index}
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                   {item.subcats.length !== 0 && (
//                     <div
//                       className={`sticky-header__categories__item__sub-menu`}
//                     >
//                       {item.subcats
//                         .filter(i => Boolean(i))
//                         .map((subCat, subIndex) => {
//                           return (
//                             <div
//                               className={`sticky-header__categories__item__sub-menu__item`}
//                               key={subIndex}
//                             >
//                               <NavLink
//                                 to={UrlBuilder.category(subCat)}
//                                 key={subIndex}
//                                 activeClassName="selected"
//                               >
//                                 {subCat.name}
//                               </NavLink>
//                             </div>
//                           )
//                         })}
//                     </div>
//                   )}
//                 </div>
//               )
//             })}
//       </div>
//       {props.sticky && <CartIcon />}
//     </div>
//   )
// }
//
// StickyHeader.propTypes = {
//   selectedCategory: PropTypes.string,
//   sticky: PropTypes.bool,
//   categories: PropTypes.object,
//   headerRef: PropTypes.object,
// }
//
// // eslint-disable-next-line import/no-default-export
// export default withRouter(connect(mapStateToProps)(StickyHeader))
