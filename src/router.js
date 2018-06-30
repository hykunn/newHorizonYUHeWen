import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Question from './Question'
import ShowQuestion from './ShowQuestion'
import HomePage from './HomePage';
import Classfication from './Classfication';
import classDetail from'./ClassDetail'
import Media from './Media'
import Shop from './Shop'
import Login from './Login'
import Register from './Register'
import About from './About/About'
import {BasedNewsCenter}   from './NewsCenter/index'
import {ShoppingCart} from './ShoppingCart/shoppingcart'
class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/app' component={App}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/questions' component={Question}/>
          <Route path='/showquestions' component={ShowQuestion}/>
          <Route path='/aboutus' component={About}/>
          <Route path='/login' component={Login}/>
          <Route path='/regist' component={Register}/>
          <Route path="/NewsCenter" component={BasedNewsCenter}/>
          <Route path="/ShoppingCart" component={ShoppingCart}/>
	        <Route path='/classfication' component={Classfication} />
          <Route path='/classDetail' component={classDetail} />
          <Route path='/Media' component={Media} />
          <Route path='/Shop' component={Shop} />
          <Redirect from='/' to='/home'></Redirect>
        </Switch>
      </Router>
    );
  }
}
export default Root;
