import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Question from './Question'
import ShowQuestion from './ShowQuestion'
import HomePage from './HomePage';
import Classfication from './Classfication';
import classDetail from'./ClassDetail'
import Media from './Media'
import Shop from './Shop'
import {ShoppingCart} from './ShoppingCart/shoppingcart'
import {Shopping} from './ShoppingCart/shopping'
import {ShoppingOrder} from './ShoppingCart/shoppingOrder'
class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={HomePage}/>
          <Route path='/questions' component={Question}/>
          <Route path='/showquestions' component={ShowQuestion}/>
          <Route path="/ShoppingCart" component={ShoppingCart}/>
	        <Route path='/classfication' component={Classfication} />
          <Route path='/classDetail' component={classDetail} />
          <Route path='/Media' component={Media} />
          <Route path='/Shop' component={Shop} />
          {/******************kun***************************/}
          <Route path="/Shopping" component={Shopping}/>
          <Route path="/ShoppingOrder/:orderid" component={ShoppingOrder}/>
          {/*********************************************/}
          <Redirect from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    );
  }
}
export default Root;
