import React, { Component } from 'react'

import store from '../core/store/store'

let unsubscribe

class StringComponent extends Component {
  state = {
    queries: []
  }

  componentWillMount() {
    const getReduxData = () => {
      this.setState({
        queries: store.getState().queries
      })
    }
    unsubscribe = store.subscribe(() => {
      getReduxData()
    })

    getReduxData()
  }

  componentWillUnmount() {
    unsubscribe()
  }

  render() {
    return (
      <div className="section title is-6">
        <strong>Final query: </strong>
        <i>
          {
            this.state.queries.map((query, index) => (
              <span key={ index }>
                {
                  index > 0 ? `${query.combinator} ` : null
                }
                {
                  `${query.entity}.${query.attribute} ${query.operator} ${query.value} `
                }
              </span>
            ))
          }
        </i>
      </div>
    )
  }
}

export default StringComponent
