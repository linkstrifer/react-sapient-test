import React, { Component } from 'react';
// import logo from './images/logo.svg';
// import './styles/App.css';
import data from './data/data.json'

import FormContainer from './containers/FormContainer'
import HeroComponent from './components/HeroComponent'
import QueryComponent from './components/QueryComponent'
import StringComponent from './components/StringComponent'

import store from './core/store/store'
import { dataLoaded } from './core/actions/data'

class App extends Component {
  state = {
    queries: []
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        queries: store.getState().queries
      })
    })

    store.dispatch(dataLoaded(data))
  }

  render() {
    return (
      <div className="section">
        <HeroComponent />
        <div className="container">
          <FormContainer />
          <QueryComponent />
          {
            this.state.queries.length > 0 && (
              <StringComponent />
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
