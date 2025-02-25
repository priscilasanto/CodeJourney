import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ModulesPage from './pages/ModulesPage';
import GamesPage from './pages/GamesPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/modules" component={ModulesPage} />
          <Route path="/games" component={GamesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;