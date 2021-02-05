import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CommandContainer, CommandSideBar, CommandContent, CommandUnorderedList } from './commands.elements';

const commandsComponent = ({routes, data}) => {
    return(
        <>
    <Router>
      <CommandContainer>
        <CommandSideBar>
          <CommandUnorderedList>
            <li>
              <Link to="/Math">Math</Link>
            </li>
            <li>
              <Link to="/Random">Random</Link>
            </li>
            <li>
              <Link to="/FML">FML</Link>
            </li>
          </CommandUnorderedList>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                data={data}
                children={<route.sidebar />}
              />
              
            ))}
          </Switch>
        </CommandSideBar>

        <CommandContent>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </CommandContent>
      </CommandContainer>
    </Router>
        </>
    )
};

export default commandsComponent;