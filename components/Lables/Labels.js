import "./labels.module.scss";

export const Labels = ({label}) => {
    switch (label) {
      case "5d4bea412dd260249172e4d6":
        return <div className={"label label_chip"}>СТАЛО ДЕШЕВЛЕ</div>;
      case "5d63bb660f2a8608d3278666":
        return <div className={"label label_tempura"}>ТЕМПУРА</div>;
      case "5d4bebeb2dd260249172e4d9":
        return <div className={"label label_promotion"}>АКЦИЯ</div>;
      case "5dcaa4580f2a8604a657cf10":
        return <div className={"label label_recommended"}>РЕКОМЕНДУЕМ!</div>;
      case "5d63bce80f2a8608d3278861":
        return <div className={"label label_baked"}>ЗАПЕЧЕННЫЙ</div>;
      case "5c8a4cbb59201a03f6ea4df5":
        return <div className={"label label_veg"}>VEG</div>;
      case "5dc872880f2a86d4d9c3695c":
        return <div className={"label label_mini"}>МИНИ</div>;
      case "5dcaa48a0f2a8604a657cf2c":
        return <div className={"label label_sushirrito"}>СУШИРРИТО</div>;
      case "5c8a4ca259201a03f6ea4df4":
        return <div className={"label label_new"}>NEW</div>;
      case "5ddd47320f2a8608859aaa80":
        return <div className={"label label_special"}>СПЕЦПРЕДЛОЖЕНИЕ</div>;
      case "5dcaca7a0f2a8604a657fdce":
        return <div className={"label label_top"}>ТОП ПРОДАЖ</div>;
      case "5d4beb0f2dd260249172e4d7":
        return <div className={"label label_spicy"}>ОЧЕНЬ ОСТРОЕ</div>;
      default:
        return null;
    }
}
