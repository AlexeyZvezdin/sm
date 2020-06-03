import './subheader.module.scss';
import SubHeaderBackButton from './SubHeaderBackButton';

export default function (props) {
  return (
    <div className="subheader_wrapper">
      <div className="sub-header-delivery">
        <SubHeaderBackButton />
        {props.children}
      </div>
    </div>
  );
}
