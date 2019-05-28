import React from 'react';
import Header from './components/Header'
import Inicio from './components/Inicio'
import News from './components/News'
import About from './components/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="page-container">
        <Header/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              classNames="fade"
              key={location.key}
              timeout={500}
            >
              <Switch location={location}>
                <Route path="/" exact component={Inicio}/>
                <Route path="/about" exact component={About}/>
                <Route path="/news" exact component={News}/>
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
