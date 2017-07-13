import React, { Component } from 'react';

import store from '../core/store/store'
import { remove as removeQuery } from '../core/actions/queries'

/*
  This component takes state.queries and map it into some links

  The clickHandler deletes a query from the state
*/

class QueryComponent extends Component {
  state = {
    queries: []
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        queries: store.getState().queries
      })
    })
  }

  onClickHandler = (index) => {
    store.dispatch(removeQuery({ index }))
  }

  render() {
    return (
      <div className="container">
        {
          this.state.queries.map((query, index) => (
            <a key={ index }
               onClick={ () => {
                 this.onClickHandler(index)
               }}
               className="tag is-dark is-medium">
              {
                index > 0 ? `${query.combinator} ` : null
              }
              {
                `${query.entity}.${query.attribute} ${query.operator} ${query.value} `
              }
              <span className="delete"></span>
            </a>
          ))
        }
      </div>
    )
  }
}

export default QueryComponent
