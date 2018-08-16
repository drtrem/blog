import React, { Component } from 'react';
import * as postApi from '../API/postApi';

class NewPostForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '',
        content: '',
        file: null,
        files: null,
        errors: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.readFile = this.readFile.bind(this)
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    const { name, content, file } = this.state;
    const errors = postApi.validate(this.state.name, this.state.content, this.state.files);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    this.props.onNewPost(this.props.categoryId, name, content, file)
    this.state.name = ''
    this.state.content = ''
    this.state.file = null
    this.state.errors = []
  }
  readFile(e){
    e.preventDefault()
    let fd = new FormData();
    this.state.files = e.target.files[0]
    fd.append('file', e.target.files[0]);
    fd.append('name', this.state.name);
    fd.append('content', this.state.content);
    fd.append('category_id', this.props.categoryId);
    console.log(fd)
    this.state.file = fd
  }
  
  render(){
    const { errors } = this.state;
    return(
      <div className="row justify-content-center">
        <form onSubmit={this.handleSubmit}>
          {errors.map(error => (
            <p className='text-danger' key={error}>Error: {error}</p>
          ))}
          <input name="name"
            className="form-control"
            type="text"
            placeholder="Title..."
            value={this.state.name}
            onChange={this.handleChange} required />
          <textarea name="content" 
            className="form-control"
            id="exampleFormControlTextarea1" 
            rows="3" 
            placeholder="Content..." 
            value={this.state.content} 
            onChange={this.handleChange} 
            required></textarea>
          <br/>
          <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={(e)=> { this.readFile(e) }} required></input>
          <br/>
          <button className="form-control btn btn-primary">Add Post</button>
        </form> 
      </div>
    )
  }
}

export default NewPostForm;
