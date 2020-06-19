import { Component } from "react";
import "./labels.module.scss";

export class Labels extends Component {
  render() {
    switch (this.props.label) {
      case "chip":
        return <div className={"label label_chip"}>СТАЛО ДЕШЕВЛЕ</div>;
      case "tempura":
        return <div className={"label label_tempura"}>ТЕМПУРА</div>;
      case "promotion":
        return <div className={"label label_promotion"}>АКЦИЯ</div>;
      case "recommended":
        return <div className={"label label_recommended"}>РЕКОМЕНДУЕМ!</div>;
      default:
        return;
    }
  }
}
