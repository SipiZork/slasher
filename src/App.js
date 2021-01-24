import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import MainMenu from './components/menu/main-menu/MainMenu';
import SelectHero from './components/menu/select-hero/SelectHero';
import SelectRoute from './components/route/SelectRoute';
import Fight from './components/game/Fight';
import NoMatch from './components/errors/NoMatch';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="container">
            <Switch>
              <Route exact path="/" component={MainMenu}></Route>
              <Route exact path="/start" component={SelectHero}></Route>
              <Route path="/select-route" component={SelectRoute}></Route>
              <Route path="/fight" component={Fight}></Route>
              <Route path="*" component={NoMatch}></Route>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
    );
}

export default App;
