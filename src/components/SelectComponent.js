import React from 'react';

const SelectComponent = (props) => {
  function onChangeHandler(event) {
    let value

    if (props.multiple) {
      const options = event.target.options
      const maxOptions = options.length
      let i

      value = []

      for (i = 0; i < maxOptions; i++) {
        if (options[i].selected) {
          value.push(options[i].value)
        }
      }
    } else {
      value = event.target.value
    }

    props.onChangeHandler(event, props.name, value)
  }

  return (
    <div className="column is-3 control">
      <span className={ 'select' + (props.multiple ? ' multiple' : '') }>
        <select onChange={ onChangeHandler }
                value={ props.currentValue }
                multiple={ props.multiple || false }>
          {
            !props.multiple && (
              <option key="0">
                { props.name }
              </option>
            )
          }
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
