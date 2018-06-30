import React, { Component } from 'react';
import { Card } from 'antd';
import { queryLessons } from './server'
import CardList from './CardList'
import './CardList.css';
import './Home-ExplainPart.css';

class ExplainPart extends Component{
	state = {
		lessons:[]
	}
	
	componentDidMount() {
    var that = this;
    that.getJsonData();
   }
	
	getJsonData = () => {
    queryLessons().then(res => {
      this.setState({lessons:res})
      console.log(res)
    });
  	};
  	
	render(){
		return (
			<div>
				<div className="title">知识详解</div>
				<div className="cardExplain">
					<CardList imagecard={this.state.lessons} />
				</div>
			</div>
		);
	}
}

export default ExplainPart;