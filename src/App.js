import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Routes from './routes';        

class App extends React.Component {
  render() {
    const routecomp = Routes.map((key, ind) => {
      return <Route path={key.path} component={key.component} />
    })
    return (
      <BrowserRouter>
        {routecomp}
      </BrowserRouter>
    )
  }
}

export default App;
