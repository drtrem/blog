import React, { Component } from 'react';

class EditCategoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.category.id,
      name: this.props.category.name,
      description: this.props.category.description || ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    const { id, name, description } = this.state;
    this.props.editCategory(id, name, description);
  }
  
  render(){
    return(
      <div className = "row justify-content-center">
        <form onSubmit={this.handleSubmit}>
          <input name="name"
            className = "form-control"
            type="text"
            placeholder="Name..."
            value={this.state.name}
            onChange={this.handleChange} required/>
          <textarea name="description" 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Description..." 
            value={this.state.description} 
            onChange={this.handleChange} 
            required></textarea>
          <button className=" form-control btn btn-primary">Update Category</button>
        </form> 
      </div>
    )
  }
}

export default EditCategoryForm;
 