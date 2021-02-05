import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/homepage/home';


function App() {
  return (
    <Router>
    <Navbar/>	
    <Switch>
      <Route exact path="/" component= {Home}/>
      <Route exact path="/commands" component= {Home}/>
      <Route exact path="/ideas" component= {Home}/>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
