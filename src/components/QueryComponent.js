import React from 'react';

const QueryComponent = (props) => (
  <div>
    {
      props.queries.map((query, index) => (
        <span key={ index }>
          {
            `${query.combinator} ${query.entity}.${query.attribute} ${query.operator} ${query.value} `
          }
        </span>
      ))
    }
  </div>
)


export default QueryComponent
