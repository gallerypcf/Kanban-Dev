import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import KanbanBoardView from './views/KanbanBoardView';

const App: React.FC = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={KanbanBoardView} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
