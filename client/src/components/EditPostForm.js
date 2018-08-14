import React, { Component } from 'react';

class EditPostForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        id: this.props.post.id,
        name: this.props.post.name,
        content: this.props.post.content || '',
        file: this.props.post.file || ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    const { id, name, content, file } = this.state;
    this.props.editPost(id, name, content, file);
  }
  
  render(){
    return(
      <div className="row justify-content-center">
        <form onSubmit={this.handleSubmit}>
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
          <button className="form-control btn btn-primary">Update Post</button>
        </form> 
      </div>
    )
  }
}

export default EditPostForm;
  