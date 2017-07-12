import React from 'react';

const ValueComponent = (props) => {
  function onChangeHandler(event) {
    props.onChangeHandler(props.name, event.target.value)
  }

  return (
    <input placeholder={ props.name } onChange={ onChangeHandler }/>
  )
}

export default ValueComponent
