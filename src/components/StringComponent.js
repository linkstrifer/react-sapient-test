import React, { Component } from 'react'

import store from '../core/store/store'

class StringComponent extends Component {
  state = {
    queries: []
  }

  componentWillMount() {
    store.subscribe(() => {
      this.setState({
        queries: store.getState().queries
      })
    })
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
