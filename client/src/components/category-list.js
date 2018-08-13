import React, { Component } from 'react';
import { Link } from 'react-router';
import EditCategoryForm from './EditCategoryForm';

class CategoryList extends Component {
  render() {
    return (
      this.props.categories.map( category => {
        if ( this.props.oneditingCategoryId === category.id ) {
          return (<EditCategoryForm 
            category={category} 
            key={category.id} 
            editCategory={this.props.editCategory}/>
          )
        } else {
          return (
            <div key={category.id}>
              <div className="category col-lg-offset-2 col-lg-8 task">
                <img src="img/icon-top.png" alt=""/>
                <span className="colorwhite"><Link className="colorwhite" to="categories/${category.id}">{category.name}</Link></span>
                <a onClick={() => this.props.removeCategory(category.id)} className="delete-button-top taska"><img src="img/delete-top.png" alt=""/></a>
                <a onClick={() => this.props.editingCategory(category.id)} className="edit-button-top taska"><img src="img/edit-top.png" alt=""/></a>
              </div>
            </div>
          )
        }
      })
    )
  }
}

export default CategoryList;
