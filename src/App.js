import React, { Component } from 'react';
// import logo from './images/logo.svg';
// import './styles/App.css';
import data from './data/data.json'

import FormContainer from './containers/FormContainer'
import QueryComponent from './components/QueryComponent'

class App extends Component {
  state = {
    queries: []
  }

  addQuery = (query) => {
    this.setState((prevState) => {
      prevState.queries.push(query)
    })
  }

  render() {
    return (
      <div>
        <FormContainer data={ data } addQuery={ this.addQuery } queriesCount={ this.state.queries.length }/>
        <QueryComponent queries={ this.state.queries }/>
      </div>
    );
  }
}

export default App;
