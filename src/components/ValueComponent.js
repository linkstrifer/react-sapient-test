import React from 'react';

import SelectComponent from '../components/SelectComponent'

const ValueComponent = (props) => {
  let input
  const type = props.type.split('_')[1]

  function onChangeHandler(event, name = props.name, value = event.target.value) {
    props.onChangeHandler(event, name, value)
  }

  switch (type) {
    case 'DATE':
      input = <div className="control column is-3">
                <input placeholder={ props.name }
                       type="date"
                       onChange={ onChangeHandler }
                       className="input" />
              </div>
      break;
    case 'BOOLEAN':
      input = <SelectComponent name={ props.name }
                               options={ ['true', 'false'] }
                               onChangeHandler={ onChangeHandler } />
      break;
    case 'ENUM':
      input = <SelectComponent name={ props.name }
                               options={ props.enumValues }
                               onChangeHandler={ onChangeHandler }
                               multiple={ true }/>
      break;
    default:
      input = <div className="control column is-2">
                <input placeholder={ props.name }
                       type="text"
                       onChange={ onChangeHandler }
                       className="input" />
              </div>
  }

  return input
}

export default ValueComponent
