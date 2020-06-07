import { connect } from 'react-redux';
// import fetcher from '../../utils/fetcher';

import s from './css/modal_template.module.scss';
// import { selectCity } from '../../redux/actions/selectCity';

class ModalTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  handleModalBG = async (e) => {
    e.stopPropagation();
    await this.props.dispatchModalStatus();
  };

  render() {
    return (
      <>
        <div className={s['modal-backdrop']}></div>
        <div
          className={s['template_modal']}
          role="dialog"
          onClick={(e) => this.handleModalBG(e)}
        ></div>
        {/* ref */}
        <div className={s['template_modal-center_container']}>
          {/* main modal */}
          {this.props.children}
        </div>
        <style jsx>{`
          .modal-backdrop {
            display: ${this.props.modalBg ? 'block' : 'none'};
          }
          .template_modal {
            display: ${this.props.modalBg ? 'block' : 'none'};
          }
          .template_modal-center_container {
            display: ${this.props.modalBg ? 'block' : 'none'};
          }
        `}</style>
      </>
    );
  }
}
const mapStateToProps = ({ modalReducer }) => {
  // console.log(modal.openModalBg, ' STATE modal');
  const modalBg = modalReducer.openModalBg;
  return { modalBg };
};
const dispatchToProps = (dispatch) => ({
  dispatchModalStatus: (status) => dispatch({ type: 'CLOSE_MODAL' }),
});
export default connect(mapStateToProps, dispatchToProps)(ModalTemplate);
