import React, { Component } from 'react';
import { queryQuestion } from './service.js';
import './App.css';

class App extends Component {
  state = {
    data:[],
    title:'jincan'
  }

  componentDidMount() {
    var that = this;
    that.getJsonData();
  }
  getJsonData = () => {
    queryQuestion().then(res => {
      var titles = 123;
      res.map(function(item){
        return(
          titles = item.title
        );
      })
      this.setState({title:titles})
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.title}
      </div>
    );
  }
}

export default App;
