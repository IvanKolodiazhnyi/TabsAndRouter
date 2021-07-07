import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { Todos } from './components/Todos';
import { Users } from './components/Users';

/*
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
const TabsPage: TabsPageProps = ({ match }) => {...};

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

const App = () => (
  <div className="App">
    <Navigation />
    
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/todos" exact component={Todos}/>

      <Route path="/users" exact component={Users}/>

    </Switch>
  </div>
);

export default App;
