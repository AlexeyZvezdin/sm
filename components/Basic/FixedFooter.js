import React, { Component } from "react";
//import { withRouter } from 'react-router-dom'
//import { connect } from 'react-redux'
//import { toggleLoginForm } from '../../../redux/actions/ui/login'

// import CartIcon from '../../Cart/CartIcon'
//import Login from '../../Modals/Login'
import "./fixedFooter.module.scss";
import ProfileBadge from './ProfileBadge'
//import ProfileBadge from '../../Profile/ProfileBadge'
//import { SideMenu } from './SideMenu'

// const mapDispatchToProps = dispatch => {
//   return {
//     toggleLoginForm: () => dispatch(toggleLoginForm()),
//   }
// }
export default class FixedFooter extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.resizeWindow = this.resizeWindow.bind(this);
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  resizeWindow = () => {
    this.setState({ menuOpen: false });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname)
      this.setState({ menuOpen: false });
  }


  render() {
    return (
      <>
        {/*<SideMenu toggleMenu={this.toggleMenu} open={this.state.menuOpen} />*/}
        <div className="fixed_footer_container">
          <div className="fixed_footer">
            <div
              className={`fixed_footer__button fixed_footer__${
                this.state.menuOpen ? "icon-close-menu" : "icon-open-menu"
              }`}
              onClick={this.toggleMenu}
            />
            <div>
              <ProfileBadge />
              {/*<CartIcon />*/}
            </div>
          </div>
          {/*<Login />*/}
        </div>
      </>
    );
  }
}

//eslint-disable-next-line
// export default withRouter(
//   connect(
//     null,
//     mapDispatchToProps
//   )(FixedFooter)
// )
