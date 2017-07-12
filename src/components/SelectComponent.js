import React from 'react';

const SelectComponent = (props) => {
  function onChangeHandler(event) {
    props.onChangeHandler(props.name, event.target.value)
  }

  return (
    <div className="column is-2 control">
      <span className="select">
        <select onChange={ onChangeHandler }
                value={ props.currentValue }>
          <option key="0">
            { props.name }
          </option>
          {
            props.options && props.options.map((optionData) => (
              <option value={ optionData.id || optionData } key={ optionData.id || optionData }>
                { optionData.label || optionData }
              </option>
            ))
          }
        </select>
      </span>
    </div>
  )
}

export default SelectComponent
