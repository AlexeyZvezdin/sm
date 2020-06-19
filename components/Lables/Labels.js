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
      case "baked":
        return <div className={"label label_baked"}>ЗАПЕЧЕННЫЙ</div>;
      case "veg":
        return <div className={"label label_veg"}>VEG</div>;
      case "mini":
        return <div className={"label label_mini"}>МИНИ</div>;
      case "sushirrito":
        return <div className={"label label_sushirrito"}>СУШИРРИТО</div>;
      case "new":
        return <div className={"label label_new"}>NEW</div>;
      case "special":
        return <div className={"label label_special"}>СПЕЦПРЕДЛОЖЕНИЕ</div>;
      case "top":
        return <div className={"label label_top"}>ТОП ПРОДАЖ</div>;
      case "spicy":
        return <div className={"label label_spicy"}>ОЧЕНЬ ОСТРОЕ</div>;
      default:
        return null;
    }
  }
}
