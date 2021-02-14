import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/homepage/home';
import Commands from './pages/commands/commands';
import SubmitIdeas from './pages/submit-ideas/submit-ideas';
import NotFound from './pages/notfound/notfoundpls';
import Releases from './pages/releases/releases';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>	
      <Switch>
        <Route exact path="/" component= {Home}/>
        <Route exact path="/commands" component= {Commands}/>
        <Route exact path="/releases" component= {Releases}/>
        <Route exact path="/submit-ideas" component= {SubmitIdeas}/>
        <Route component= {NotFound}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
