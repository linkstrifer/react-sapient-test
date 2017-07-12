import React from 'react'

const StringComponent = (props) => (
  <div className="section title is-6">
    <strong>Final query: </strong>
    <i>
      {
        props.queries.map((query, index) => (
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

export default StringComponent
