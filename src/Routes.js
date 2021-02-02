import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import BeerItem from './components/BeerItem';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/BeerItem/:id" component={BeerItem} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
