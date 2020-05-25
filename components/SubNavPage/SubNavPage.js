import React, { Component } from 'react';
import fetcher from '../../utils/fetcher';

export default class SubNavPage extends Component {
  state = {
    products: {},
  };

  async componentDidMount() {
    let products = await fetcher(
      `https://client-api.sushi-master.ru/api/v1/catalog/categories/${this.props.fetchID}/products`,
      { cityId: this.props.cityID }
    );
    this.setState({
      products: products,
    });
  }

  render() {
    console.log(this.state, ' SUBNAVPAGE');
    return <div>da</div>;
  }
}
