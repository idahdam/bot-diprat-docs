import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/homepage/home';
import './App.css';
import './index.css';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component= {Home}/>
    </Switch>
    </Router>
  );
}

export default App;
