import React, { Component } from 'react';
// import logo from './images/logo.svg';
// import './styles/App.css';
import data from './data/data.json'

import FormContainer from './containers/FormContainer'
import HeroComponent from './components/HeroComponent'
import QueryComponent from './components/QueryComponent'
import StringComponent from './components/StringComponent'

class App extends Component {
  state = {
    queries: []
  }

  addQuery = (query) => {
    if (this.state.queries.length > 0 &&
        query.entity !== this.state.queries[0].entity) {
      this.setState({
        queries: [query]
      })
    } else {
      this.setState((prevState) => {
        prevState.queries.push(query)
      })
    }
  }

  removeQuery = (queryIndex) => {
    this.setState((prevState) => {
      const newState = prevState.queries.filter((query, index) => (
        index !== queryIndex
      ))

      return {
        queries: newState
      }
    })
  }

  render() {
    return (
      <div className="section">
        <HeroComponent />
        <div className="container">
          <FormContainer data={ data } addQuery={ this.addQuery } queriesCount={ this.state.queries.length } />
          <QueryComponent queries={ this.state.queries } removeQuery={ this.removeQuery } />
          {
            this.state.queries.length > 0 && (
              <StringComponent queries={ this.state.queries } />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
