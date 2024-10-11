import React, { useEffect, useState } from 'react';
import AlbumList from '../Components/AlbumList';
import { parseString } from 'xml2js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {

  return (
    <div>
      <div className='top_div'>
        <h1 className='main_title'>G  A  B  I.</h1>
        <div className='containerCenter'>
          <div className='LinkContainer'>
            <a href={artist.facebookProfile} className='links'>
              <FontAwesomeIcon icon={faFacebook} beat />
            </a>
            <a href={artist.twitterProfile} className='links'>
              <FontAwesomeIcon icon={faTwitter} beat />
            </a>
            <a href={artist.instagramProfile} className='links'>
              <FontAwesomeIcon icon={faInstagram} beat />
            </a>
            <a href={`mailto:${artist.mail}`} className='links'>
              <FontAwesomeIcon icon={faEnvelope} beat />
            </a>
            <a href={artist.spotifyProfile} className='links'>
              <FontAwesomeIcon icon={faSpotify} beat />
            </a>
          </div>
        </div>
      </div>
      <AlbumList />
    </div>
  );
};
