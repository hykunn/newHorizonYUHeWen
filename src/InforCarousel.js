import React from 'react';
import { Carousel } from 'antd';
import './InforCarousel.css';

class InforCarousel extends React.Component{
  render () {
    // const { inforimage } = this.props;
    return (
      <Carousel autoplay>
        {/* {
          inforimage && inforimage.map((item) => {
            return(
              <div>
                <img src={item.img} alt=""/>
              </div>
            )
          })
        } */}
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Carousel>
    )
  }
}

export default InforCarousel
