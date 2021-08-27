import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Legacy</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='Checkout our Web Solutions'
              path='/services'
            />
            <CardItem
              src='images/img2.jpg'
              text='Recognitions'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img3.jpg'
              text='Checkout our collaborations'
              path='/services'
            />
            <CardItem
              src='images/img4.jpg'
              text='Future Plans'
              path='/services'
            />
            <CardItem
              src='images/img6.jpg'
              text='Our security is second to none'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
