import React from 'react';

const NewPostForm = ({onNewPost = f => f, categoryId}) => {
  let name
  let content
  let file
  const submit = e => {
    e.preventDefault()
    onNewPost(categoryId, name.value, content.value, file.value)
    name.value = ''
    content.value = ''
    file.value = ''
    name.focus()
  }

  return (
    <div className="row justify-content-center">
      <form onSubmit={submit}>
        <input
          className = "form-control"
          ref={input => name = input}
          type="text"
          placeholder="Name post..." required />
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Content..." required ref={input => content = input}></textarea>
        <br/>
        <input type="file" className="form-control-file" id="exampleFormControlFile1" ref={input =>file = input}></input>
        <br/>
        <button className="form-control btn btn-primary">Add Post</button>
      </form>
    </div>
  )
}

export default NewPostForm;
     