import React from 'react';

const QueryComponent = (props) => (
  <div className="container">
    {
      props.queries.map((query, index) => (
        <a key={ index }
           onClick={ () => {
             props.removeQuery(index)
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


export default QueryComponent
