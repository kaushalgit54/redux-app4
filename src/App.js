import React from "react";
import classes from './App.module.css';
import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritePage from './containers/Favorites';
import { Route } from "react-router-dom";
function App(){
  return(
    <React.Fragment>
      <Navigation>
        <main>
          <Route path='/' component={ProductsPage} exact='xyz'/>
          <Route path='/favorites' component={FavoritePage}/>
        </main>
      </Navigation>
    </React.Fragment>
  );
};

export default App;