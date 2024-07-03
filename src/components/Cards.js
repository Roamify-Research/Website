import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import pic1 from '../images/Macbook1.png';
import pic2 from '../images/Macbook2.png';
import pic3 from '../images/map1.png';
import pic4 from '../images/neural1.jpg';

import pic5 from '../images/webscrap2.png';




function Cards() {
  return (
    <div className='cards'>
      <h1>What do we offer?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
            <CardItem
              src={pic3}
              text="Revolutionize travel planning with Roamify's AI-generated itineraries. Personalized recommendations tailored to your preferences, ensuring seamless exploration without the hassle of extensive planning."
              path='/services'
              label='Adrenaline'
            />
            <CardItem
              src={pic1}
              text='Integrates seamlessly with your web browser, leveraging your browsing behavior to offer intelligent travel suggestions. Enhance efficiency and personalize your travel experience effortlessly.'
              path='/services'
              label='Adrenaline'
            />
          </div>
          <div className='cards__items'>
            <CardItem
              src={pic4}
              text='Powered by advanced NLP models like BERT, T5, and RoBERTa, Roamify delivers precise and contextually accurate travel recommendations. Stay ahead with cutting-edge technology.'
              path='/services'
              label='Adrenaline'
            />
            <CardItem
              src={pic2}
              text='Designed for modern travelers—youngsters, families, and adventurers seeking memorable experiences. Simplify travel decisions with curated itineraries and real-time insights.'
              path='/products'
              label='Adrenaline'
            />
            <CardItem
              src={pic5}
              text='Harnesses data scraping capabilities to gather real-time information from multiple sources. Provides up-to-date recommendations and insights, ensuring informed travel choices.'
              label='Adrenaline'
              path='/sign-up'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
