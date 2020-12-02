import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Route Component Index compontent
const HomePageIndex = React.lazy(() => import("./components/HomePageComponents/HomePageIndex"))
const SingleItemPageIndex = React.lazy(() => import("./components/SingleItemPageComponents/SingleItemPageIndex"))
const CheckoutPageIndex = React.lazy(() => import("./components/CheckoutPageComponents/CheckoutPageIndex"))
const ShoppingCart = React.lazy(() => import("./components/ShoppingCartPage/ShoppingCartIndex"))
// import { reduceEachLeadingCommentRange } from 'typescript';

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading Beep boop!......</div>}>
      <Switch>
        <Route exact path="/" component={HomePageIndex} />
        <Route exact path="/item/:id" component={SingleItemPageIndex} />
        <Route exact path="/shoppingcart" component={ShoppingCart} />
        <Route exact path="/checkout" component={CheckoutPageIndex} />
        <Route path="" render={() => <h1>404 Not Found</h1>} />
      </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
