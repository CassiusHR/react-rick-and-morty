import React from 'react';
import Menu from './components/Menu'
import Inicio from './components/Inicio'
import Characters from './components/Characters'
import Episodes from './components/Episodes'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="page-container">
        <Menu/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              classNames="fade"
              key={location.key}
              timeout={500}
            >
              <Switch location={location}>
                <Route path="/" exact component={Inicio}/>
                <Route path="/Episodes" component={Episodes}/>
                <Route path="/Characters" component={Characters}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
