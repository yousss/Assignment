import { Container } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import CustomAppBar from './components/CustomAppBar';
import { ListUser } from './domain/User/ListUser';
import { UserInfo } from './domain/User/User';
import './index.scss';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <CustomAppBar />
    <Router>
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={ListUser} />
          <Route exact path="/users/:login/:id" component={UserInfo} />
        </Switch>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
