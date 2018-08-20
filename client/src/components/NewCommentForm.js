import React, { Component } from 'react';
import * as commentApi from '../API/commentApi';

class NewCommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      contentComment: '',
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
    const errors = commentApi.validateComment(this.state.author, this.state.ccontentComment);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    commentApi.addNewComment(this.props.categoryId, this.state.author, this.state.contentComment);
    this.state.author = ''
    this.state.contentComment = ''
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
          <input name="author"
            className = "form-control"
            type="text"
            placeholder="Author..."
            value={this.state.author}
            onChange={this.handleChange} required/>
          <textarea name="contentComment" 
            className="form-control" 
            id="exampleFormControlTextareaComment" 
            rows="3" 
            placeholder="Content..." 
            value={this.state.contentComment} 
            onChange={this.handleChange} 
            required></textarea>
          <button className=" form-control btn btn-primary">Add Comment</button>
        </form> 
      </div>
    )
  }
}

export default NewCommentForm;
