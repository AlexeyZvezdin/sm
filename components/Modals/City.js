import { Component } from 'react';
import './css/city.module.scss';
import { connect } from 'react-redux';
import { closeModalCity } from '../../redux/actions/modalActions';

class City extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.showModalCity && (
        <div
          onClick={() => this.props.closeModalCity()}
          className={'modal-window'}
        >
          {this.props.children}
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModalCity: state.modal.openModalCity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModalCity: () => dispatch(closeModalCity()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
