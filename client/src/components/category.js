import React, { Component } from 'react';

class Category extends Component {
  render() {
    return (<h1>User Profile for categoryId: {this.props.params.categoryId}</h1>);
  }
};

export default Category;