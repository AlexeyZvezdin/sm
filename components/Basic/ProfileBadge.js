import React, { Component } from 'react'
import { connect } from 'react-redux'

import './profileBadge.scss'
// import { toggleLoginForm } from '../../redux/actions/ui/login'
// import { toggleProfilePanel } from '../../redux/actions/ui/profilePanel'
// import { getImageUrl } from '../../api/image'
// import { tokenModelIsActive } from '../../utils/User'
import DefaultProfileImage from '../../public/img/icons/ic-profile-placeholder.svg'

// const mapStateToProps = state => {
//   return {
//     pictureId: state.user.pictureId,
//     accessToken: state.user.accessToken,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     toggleLoginForm: () => dispatch(toggleLoginForm()),
//     toggleProfilePanel: () => dispatch(toggleProfilePanel()),
//   }
// }

export default class ProfileBadge extends Component {
  render() {
    // const authorized = tokenModelIsActive(this.props.accessToken)
    return (
      <div className="profile-badge-block">
        {/*{!authorized && (*/}
          <div
            className="profile-badge-block__login"
            // onClick={this.props.toggleLoginForm}
          >
            Войти
          </div>
        {/*)}*/}
        {/*{!authorized && (*/}
          <div
            className="profile-badge-block__login-footer"
            // onClick={this.props.toggleLoginForm}
          />
        {/*)}*/}
        {/*{authorized && (*/}
          <img
            alt="Аватар"
            src={DefaultProfileImage}
              // this.props.pictureId
              //   ? getImageUrl(this.props.pictureId)
              //   : DefaultProfileImage
           // }
            // onClick={this.props.toggleProfilePanel}
          />
      </div>
    )
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProfileBadge)
