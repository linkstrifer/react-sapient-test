import React, { Component } from 'react';

import SelectComponent from '../components/SelectComponent'
import ValueComponent from '../components/ValueComponent'

const initialState = {
  combinator: '',
  entity: '',
  attribute: '',
  operator: '',
  value: ''
}

class FormContainer extends Component {
  state = initialState

  changeState = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  getAttribute = () => {
    return this.props.data.attribute.filter((attr) => (
      attr[this.state.entity]
    ))[0][this.state.entity]
  }

  getOperators = () => {
    return Object.getOwnPropertyNames(this.props.data.operator)
  }

  clearState = () => {
    this.setState(initialState)
  }

  submitHandler = (event) => {
    this.props.addQuery(this.state)
    this.clearState()

    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={ this.submitHandler }>
        {
          this.props.queriesCount > 0 && (
            <SelectComponent name="combinator"
                             options={ this.props.data.combinator }
                             onChangeHandler={ this.changeState }
                             currentValue={ this.state.combinator }/>
          )
        }
        <SelectComponent name="entity"
                         options={ this.props.data.entity }
                         onChangeHandler={ this.changeState }
                         currentValue={ this.state.entity } />
        { this.state.entity && (
          <SelectComponent name="attribute"
                           options={ this.getAttribute() }
                           onChangeHandler={ this.changeState }
                           currentValue={ this.state.attribute } />
        ) }
        {
          this.state.attribute && (
            <SelectComponent name="operator"
                             options={ this.getOperators() }
                             onChangeHandler={ this.changeState }
                             currentValue={ this.state.operator } />
          )
        }
        {
          this.state.attribute && (
            <ValueComponent name="value"
                            onChangeHandler={ this.changeState }/>
          )
        }
        {
          (this.state.operator && this.state.value) && (
            <button type="submit">
              add
            </button>
          )
        }
        <button type="button" onClick={ this.clearState }>
          clear
        </button>
      </form>
    )
  }
}

export default FormContainer
