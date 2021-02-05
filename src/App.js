import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/homepage/home';
import Commands from './pages/commands/commands';
import SubmitIdeas from './pages/submit-ideas/submit-ideas';


function App() {
  return (
    <Router>
    <Navbar/>	
    <Switch>
      <Route exact path="/" component= {Home}/>
      <Route exact path="/commands" component= {Commands}/>
      <Route exact path="/commands/math" component= {Commands}/>
      <Route exact path="/commands/math" component= {Commands}/>
      <Route exact path="/submit-ideas" component= {SubmitIdeas}/>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
