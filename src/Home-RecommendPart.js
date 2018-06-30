import React, { Component } from 'react';
import { Card } from 'antd';
import {Link} from 'react-router-dom';
import { queryLessons } from './server'
import CardList from './CardList'
import './CardList.css';
import './Home-RecommendPart.css';

class RecommendPart extends Component{
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
				<div className="title">精品推荐</div>
				<div className="cardRecommend">
					<CardList imagecard={this.state.lessons} />
				</div>
			</div>
		);
	}
}

export default RecommendPart;