import { Component } from 'react'

export class Labels extends Component {
  render() {
      switch (this.props.label) {
      case "chip":
        return <div className={"label-chip"}>СТАЛО ДЕШЕВЛЕ</div>;
      default:
        return;
    }
  }
}
