import React from 'react';

import SelectComponent from '../components/SelectComponent'

/*
  Multipurpose uncontroled component

  Takes some props, create a input based on those props and attach some events
    - name [string]
    - type [string]
    - enumValues [array]
    - onChangeHandler [function]

  Possible types:
    - DATE: input type date
    - BOOLEAN: mount a SelectComponent with [name, options = [true, false], onChangeHandler] props
    - ENUM: mount a SelectComponent with [name, options = props.enumValues, onChangeHandler] props
    - default: input type text
*/

const ValueComponent = (props) => {
  let input
  const type = props.type.split('_')[1]

  function onChangeHandler(event, name = props.name, value = event.target.value) {
    props.onChangeHandler(event, name, value)
  }

  switch (type) {
    case 'DATE':
      input = <div className="control column is-2">
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
