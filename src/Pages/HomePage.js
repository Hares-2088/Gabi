import React, { useEffect, useState } from 'react';
import AlbumList from '../Components/AlbumList';
import { parseString } from 'xml2js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function HomePage() {
  const [artist, setArtist] = useState(null);

  const fetchXmlData = async () => {
    try {
      const response = await fetch('/albums.xml');
      const xmlData = await response.text();

      parseString(xmlData, (err, result) => {
        if (err) {
          console.error('Error parsing XML:', err);
        } else {
          const artistData = result?.Library?.Artist?.[0];  // Fetch the first artist object
          if (artistData) {
            const mappedArtist = {
              name: artistData?.Name?.[0] || '',
              spotifyProfile: artistData?.SpotifyProfile?.[0] || '',
              facebookProfile: artistData?.FacebookProfile?.[0] || '',
              instagramProfile: artistData?.InstagramProfile?.[0] || '',
              twitterProfile: artistData?.TwitterProfile?.[0] || '',
              mail: artistData?.Mail?.[0] || ''
            };
            setArtist(mappedArtist);
          }
        }
      });
    } catch (error) {
      console.error('Error fetching XML:', error);
    }
  };

  useEffect(() => {
    fetchXmlData();
  }, []);

  if (!artist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='top_div'>
        <h1 className='main_title'>{artist.name}</h1>
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
