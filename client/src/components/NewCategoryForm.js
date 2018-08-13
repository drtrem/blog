import React from 'react';

const NewCategoryForm = ({onNewCategory = f => f}) => {
  let name
  const submit = e => {
    e.preventDefault()
    onNewCategory(name.value)
    name.value = ''
    name.focus()
  }

  return (
    <div className="col-lg-offset-2 col-lg-8">
      <form onSubmit={submit}>
        <input className="input-project center-block"
          ref={input => name = input}
          type="text"
          placeholder="Add category..." required />
        <input className="input-project center-block"
          ref={input => description = input}
          type="text"
          placeholder="Add description..." required />
        <button className="add center-block add-project">Add Category</button>
      </form>
    </div>
  )
}

export default NewCategoryForm;