import React from 'react';

const ValueComponent = (props) => {
  function onChangeHandler(event) {
    props.onChangeHandler(props.name, event.target.value)
  }

  return (
    <div className="control column is-2">
      <input placeholder={ props.name }
             onChange={ onChangeHandler }
             className="input" />
    </div>
  )
}

export default ValueComponent
