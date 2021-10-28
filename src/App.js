
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';

import Inquire from './pages/inquire';

function App() {
  return (
    <Router>
     <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/inquire" component={Inquire} exact />
     </Switch>
    </Router>
  );
}

export default App;
