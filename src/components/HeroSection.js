import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import videos from '../videos/vid2.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='videos/video-1.mp4' autoPlay loop muted /> */}
      <video src={videos} autoPlay loop muted />
      <h1>ROAMING REDEFINED</h1>
      <p>Break free from planning woes</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          DOWNLOAD <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
