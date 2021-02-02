import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/homepage/home';
import './App.css';
import './index.css';


function App() {
  return (
    <Router>
    <Navbar/>	
    <Switch>
      <Route exact path="/" component= {Home}/>
      <Route exact path="/commands" component= {Home}/>
      <Route exact path="/ideas" component= {Home}/>
    </Switch>
    </Router>
  );
}

export default App;
