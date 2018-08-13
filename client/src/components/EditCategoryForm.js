import React, { Component } from 'react';

class EditCategoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.category.id,
      name: this.props.category.name
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    const { id, name } = this.state;
    this.props.editCategory(id, name);
  }
  
  render(){
    return(
      <div className="col-lg-offset-2 col-lg-8 task">
        <form className="change-project inputtop" onSubmit={this.handleSubmit}>
          <input  name="name"
            className="change-project-input"
            type="text"
            placeholder="Title..."
            value={this.state.name}
            onChange={this.handleChange} required/>
          <button className="add-task-btn edit">Update Category</button>
        </form> 
      </div>
    )
  }
}

export default EditCategoryForm;
 