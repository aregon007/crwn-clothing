import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.componet'

import { Route, Switch} from 'react-router-dom'
import ShopComponent from './pages/shop/shop.component';



function App() {
  return (
    <div className="App">

      <Switch>

        <Route exact={true} path='/' component={Homepage}/>
        <Route exact={true} path='/shop' component={ShopComponent}/>

      </Switch>

      
    </div>
  );
}

export default App;
