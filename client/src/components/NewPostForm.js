import React from 'react';

const NewPostForm = ({id, onNewPost = f => f}) => {
  let name
  const submit = e => {
    e.preventDefault()
    onNewPost(id, name.value)
    name.value = ''
    name.focus()
  }

  return (
    <div className="col-lg-offset-2 col-lg-8">
      <form onSubmit={submit}>
        <input className="input-project center-block"
          ref={input => name = input}
          type="text"
          placeholder="Add post..." required />
        <button className="add center-block add-project">Add Post</button>
      </form>
    </div>
  )
}

export default NewPostForm;
