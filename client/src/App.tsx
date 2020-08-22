import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Route Component Index compontent
import { HomePageIndex } from './components/HomePageComponents/HomePageIndex';
import { SingleItemPageIndex } from './components/SingleItemPageComponents/SingleItemPageIndex';
import { CheckoutPageIndex } from './components/CheckoutPageComponents/CheckoutPageIndex';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePageIndex} />
        <Route exact path="/item/:id" component={SingleItemPageIndex} />
        <Route exact path="/checkout" component={CheckoutPageIndex} />
        <Route path="" render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
