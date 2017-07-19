import React, { Component } from 'react';

import SelectComponent from '../components/SelectComponent'
import ValueComponent from '../components/ValueComponent'

import store from '../core/store/store'
import { inputChange, clear } from '../core/actions/ui'
import { add as addQuery } from '../core/actions/queries'

/*
  Form container

  Just a container to control some stateless components using his state

  state {
    ui: to control all the input values
    defaults: some defaults values for the inputs
    queriesCount: self explanatory...
  }
*/

class FormContainer extends Component {
  state = {
    ui: {},
    defaults: {},
    queriesCount: 0
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        ui: store.getState().ui,
        defaults: store.getState().defaults,
        queriesCount: store.getState().queries.length
      })
    })
  }

  changeState = (event, name, value) => {
    store.dispatch(inputChange({ name, value }))
  }

  getAttribute = () => {
    return this.state.defaults.attribute.filter((attr) => (
      attr[this.state.ui.entity]
    ))[0][this.state.ui.entity]
  }

  getOperators = () => {
    return Object.getOwnPropertyNames(this.state.defaults.operator).map((operator) => (
      {
        id: operator,
        label: this.state.defaults.operator[operator]
      }
    ))
  }

  clearState = () => {
    store.dispatch(clear())
  }

  submitHandler = (event) => {
    event.preventDefault()

    store.dispatch(addQuery(this.state.ui))

    this.clearState()
  }

  render() {
    return (
      <form onSubmit={ this.submitHandler } className="box">
        <div className="columns">
          <SelectComponent name="entity"
                           options={ this.state.defaults.entity }
                           onChangeHandler={ this.changeState }
                           currentValue={ this.state.ui.entity } />
        </div>
        <div className="columns">
          {
            this.state.queriesCount > 0 && (
              <SelectComponent name="combinator"
                               options={ this.state.defaults.combinator }
                               onChangeHandler={ this.changeState }
                               currentValue={ this.state.ui.combinator }/>
            )
          }
          { this.state.ui.entity && (
            <SelectComponent name="attribute"
                             options={ this.getAttribute() }
                             onChangeHandler={ this.changeState }
                             currentValue={ this.state.ui.attribute } />
          ) }
          {
            this.state.ui.attribute && (
              <SelectComponent name="operator"
                               options={ this.getOperators() }
                               onChangeHandler={ this.changeState }
                               currentValue={ this.state.ui.operator } />
            )
          }
          {
            this.state.ui.attribute && (
              <ValueComponent name="value"
                              type={ this.state.ui.attribute }
                              enumValues={ this.state.defaults.enum }
                              onChangeHandler={ this.changeState }/>
            )
          }
        </div>
        <div className="contaner">
          {
            (this.state.ui.operator && this.state.ui.value) && (
              <button type="submit" className="button is-success">
                add
              </button>
            )
          }
          <button type="button" onClick={ this.clearState } className="button is-danger">
            clear
          </button>
        </div>
      </form>
    )
  }
}

export default FormContainer
