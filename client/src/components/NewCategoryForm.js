import React from 'react';

const NewCategoryForm = ({onNewCategory = f => f}) => {
  let name
  let description
  const submit = e => {
    e.preventDefault()
    onNewCategory(name.value, description.value)
    name.value = ''
    description.value = ''
    name.focus()
  }

  return (
    <div className = "row justify-content-center">
      <form onSubmit={submit}>
        <br/>
        <input
          className = "form-control"
          ref={input => name = input}
          type="text"
          placeholder="Add category..." required />  
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description..." required ref={input => description = input}></textarea>
        <button className = "form-control btn btn-primary">Add Category</button>
      </form>
    </div>
  )
}

export default NewCategoryForm;  