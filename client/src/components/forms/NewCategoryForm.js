import React, { Component } from 'react';
import * as postApi from '../../API/postApi';

class NewCategoryForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      errors: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    const errors = postApi.validate(this.state.name, this.state.description);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    this.props.onNewCategory(this.state.name, this.state.description);
    this.state.name = ''
    this.state.description = ''
    this.state.errors = []
  }
  
  render(){
    const { errors } = this.state;
    return(
      <div className = "row justify-content-center">
        <form onSubmit={this.handleSubmit}>
          {errors.map(error => (
            <p className='text-danger' key={error}>Error: {error}</p>
          ))}
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
          <button className=" form-control btn btn-primary">Add Category</button>
        </form> 
      </div>
    )
  }
}

export default NewCategoryForm;
