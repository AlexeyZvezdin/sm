import Link from "next/link";
import * as UrlBuilder from "../../utils/UrlBuilder";
import { connect } from "react-redux";
//import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'

//import * as UrlBuilder from '../../utils/UrlBuilder'

import "./cartIcon.scss";
import React, { Component } from "react";
//import { CurrencySymbol } from '../Basic/CurrencySymbol'

// const mapStateToProps = state => {
//   return {
//     cart: state.cart.info
//   }
// }

export default class CartIcon extends Component {
  constructor(props) {
    super(props);
    this.stopAnimation = this.stopAnimation.bind(this);
    this.state = {
      animateIcon: false,
    };
  }

  // animationTimer
  componentDidUpdate(prevProps) {
    // if (prevProps.cart !== this.props.cart) {
    this.setState({ animateIcon: true });
    clearTimeout(this.animationTimer);
    this.animationTimer = setTimeout(this.stopAnimation, 500);
    // }
  }

  componentWillUnmount() {
    //window.clearTimeout(this.animationTimer)
  }

  stopAnimation() {
    this.setState({ animateIcon: false });
  }

  render() {
    // const { count, productsPrice } = this.props.cart

    return (
      <div className="cart-block">
        <Link href={UrlBuilder.cart()}>
          <a>
            <div className="cart-block__price">
              {/*{Math.round(productsPrice * 100) / 100} <CurrencySymbol />*/}
            </div>
            <div
              className={`cart-block__icon ${
                this.state.animateIcon ? "wiggle" : ""
              }`}
            >
              <div
              // className={`cart-block__icon__count ${count > 0 ? 'red' : ''}`}
              >
                {/*{count}*/}
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}

//export default connect(mapStateToProps)(CartIcon)
