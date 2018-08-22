import React, { Component } from 'react';
import { Link } from 'react-router';
import EditCategoryForm from '../forms/EditCategoryForm';

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
            <div className = "row justify-content-center" key={category.id}>
              <li className = "list-group-item col-xl-5" key = {category.id}>
                <Link className = "row justify-content-center" to = {`/categories/${category.id}`}>
                  Category:{category.name}
                </Link>
                <br/>
                <span>Description: {category.description}</span>
                <br/>
                <span className = "float-right">
                  <a onClick={() => this.props.editingCategory(category.id)} className="btn btn-primary">Edit</a>
                  <a onClick={() => this.props.removeCategory(category.id)} className="btn btn-danger">Delete</a>
                </span>
              </li> 
            </div>
          )
        }
      })
    )
  }
}

export default CategoryList;
