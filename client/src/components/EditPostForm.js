import React, { Component } from 'react';

class EditPostForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        id: this.props.post.id,
        name: this.props.post.name,
        status: this.props.post.status,
        project_id: this.props.post.project_id
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    const { id, name, status, project_id } = this.state;
    this.props.editPost(id, name, status, project_id);
  }
  
  render(){
    return(
      <div className="col-lg-offset-2 col-lg-8 task-change">
        <form className="change-task inputtop" onSubmit={this.handleSubmit}>
          <input  name="name"
            className="edit-task-input"
            type="text"
            placeholder="Title..."
            value={this.state.name}
            onChange={this.handleChange} required />
          <button className="add-task-btn-task">Update Post</button>
        </form> 
      </div>
    )
  }
}

export default EditPostForm;
 