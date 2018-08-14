import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryList from '../components/category-list';
import NewCategoryForm from '../components/NewCategoryForm';
import * as categoryApi from '../API/categoryApi';
import * as postApi from '../API/postApi';

class CategoriesContainer extends Component {
  componentDidMount() {
    categoryApi.getCategories();
  }

  render() {
    return (
      <div className="container-fluid">
        <ul className = "list-group">
          <CategoryList 
            categories={this.props.categories}
            oneditingCategoryId={this.props.editingCategoryId}
            removeCategory={categoryApi.removeCategory} 
            editCategory={categoryApi.editCategory} 
            editingCategory={categoryApi.editingCategory} />
          <NewCategoryForm onNewCategory={categoryApi.addNewCategory} />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    categories: store.categoryState.categories,
    editingCategoryId: store.categoryState.editingCategoryId
  };
};

export default connect(mapStateToProps)(CategoriesContainer);
 