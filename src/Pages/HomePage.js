import React, { useEffect } from 'react'
import AlbumList from '../Components/AlbumList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons'
import anime from 'animejs/lib/anime.es.js';
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function HomePage() {

  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <div>
      <div className='top_div'>
        <h1 className='main_title'>G  A  B  I.</h1>

        {/* <div className='arrow-container' onClick={() => scrollToBottom()}>
          <FontAwesomeIcon icon={faCircleDown} className='arrowDown' />
        </div> */}
        <div className='containerCenter'>
          <div className='LinkContainer'>
            <a href="" className='links'><FontAwesomeIcon icon={faFacebook} beat /></a>
            <a href="" className='links'><FontAwesomeIcon icon={faTwitter} beat /></a>
            <a href="https://www.instagram.com/Nineteen.ninety.v" className='links'><FontAwesomeIcon icon={faInstagram} beat /></a>
            <a href="" className='links'><FontAwesomeIcon icon={faEnvelope} beat /></a>
            <a href="https://open.spotify.com/artist/7GJYItBw6A5skqnKs9Bbrz" className='links'><FontAwesomeIcon icon={faSpotify} beat /></a>
          </div>
        </div>
      </div>
      <AlbumList />
    </div>
  )
}
