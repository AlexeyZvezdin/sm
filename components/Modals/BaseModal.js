import React, { Component } from 'react';
import s from './css/base_modal.module.scss';
import PropTypes from 'prop-types';
import close from '../../public/img/icons/ic-round-close-24-px-white.svg';

const Modal = (props) => <div>{props.children}</div>;

class BaseModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        centered
        dialogClassName={s[`base-modal ${this.props.dialogClassName}`]}
      >
        <Modal.Header>
          <img
            className={s['close-button']}
            src={close}
            alt=""
            onClick={this.props.onHide}
          />
          {!this.props.header && (
            <Modal.Title id={s['contained-modal-title-vcenter']}>
              {this.props.title}
            </Modal.Title>
          )}
          {this.props.header && this.props.header}
        </Modal.Header>
        <Modal.Body>{this.props.children}</Modal.Body>
        <Modal.Footer>{this.props.footer && this.props.footer}</Modal.Footer>
      </Modal>
    );
  }
}

BaseModal.propTypes = {
  title: PropTypes.string,
  header: PropTypes.any,
  footer: PropTypes.any,
};

export default BaseModal;
