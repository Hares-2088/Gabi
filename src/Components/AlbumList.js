import React, { useState } from 'react'
import AlbumCard from './AlbumCard';
import xmlData from '/Users/adembessam/Desktop/Projet personnel/gabi./src/Albums.xml';
import { parseString } from 'xml2js';
import { Container, Row } from 'react-bootstrap';

export default function AlbumList() {

    const [albums, setAlbums] = useState([])

    parseString(xmlData, (err, result) => {
        if (err) {
          console.error('Error parsing XML:', err);
        } else {
          // Extract the array of albums from the parsed XML
          const xmlAlbums = result?.Library?.Album || [];
      
          // Create a list of album objects
          const albumList = xmlAlbums.map(album => ({
            name: album.Name?.[0] || '',
            spotifyLink: album.SpotifyLink?.[0] || '',
            appleMusic: album.AppleMusic?.[0] || '',
            ytm: album.YTM?.[0] || '',
          }));
      
          // Now 'albumList' is an array of album objects
          console.log(albumList);
          setAlbums(albumList);
        }
      });

  return (
    <div>
        <Container fluid>
            <h1 className="title">Albums</h1>
            <Row className='justify-content-evenly'>

                {albums && albums.map((album) => 
                    <AlbumCard key={album.AlbumName} 
                    album={album} />
                )}

            </Row>
       </Container>
    </div>
  )
}
