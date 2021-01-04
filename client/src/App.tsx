import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ShoppingCart Context
import { ShoppingCartContextProvider } from "./components/ShoppingCartContext"

// Loading Spinner
import "./components/LoadingSpinner.css"

// Route Component Index compontent
const HomePageIndex = React.lazy(() => import("./components/HomePageComponents/HomePageIndex"))
const SingleItemPageIndex = React.lazy(() => import("./components/SingleItemPageComponents/SingleItemPageIndex"))
const CheckoutPageIndex = React.lazy(() => import("./components/CheckoutPageComponents/CheckoutPageIndex"))
const ShoppingCart = React.lazy(() => import("./components/ShoppingCartPage/ShoppingCartIndex"))

function App() {
  
  return (  
    <BrowserRouter>
      <React.Suspense fallback={
        <div className="AppLoadingContainer">
          <div className="loader">Loadig...</div>
        </div>
      }>
        <Switch>
          <ShoppingCartContextProvider>
            <Route exact path="/" component={HomePageIndex} />
            <Route exact path="/item/:id" component={SingleItemPageIndex} />
            <Route exact path="/shoppingcart" component={ShoppingCart} />
            <Route exact path="/checkout" component={CheckoutPageIndex} />
          </ShoppingCartContextProvider>
          <Route exact path="/404" render={() => <h1>404 NOT FOUND</h1>} />
          <Route path="" render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
