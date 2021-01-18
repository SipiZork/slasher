import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import MainMenu from './components/menu/main-menu/MainMenu';
import SelectHero from './components/menu/select-hero/SelectHero';
import SelectRoute from './components/route/SelectRoute';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="container">
            <Switch>
              <Route exact path="/" component={MainMenu}></Route>
              <Route exact path="/start" component={SelectHero}></Route>
              <Route exact path="/game" component={SelectRoute}></Route>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
    );
}

export default App;
