import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import BeerItem from './containers/BeerItem';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/beerItem/:id" component={BeerItem} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
