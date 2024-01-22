import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard';
import { parseString } from 'xml2js';
import { Container, Row } from 'react-bootstrap';

export default function AlbumList() {
    const [albums, setAlbums] = useState([]);

    const fetchXmlData = async () => {
        try {
            const response = await fetch('/albums.xml');
            const xmlData = await response.text();

            console.log()

            parseString(xmlData, (err, result) => {
                if (err) {  
                    console.error('Error parsing XML:', err);
                }
                else {
                    const xmlAlbums = result?.Library?.Album || [];

                    // Iterate over each album in xmlAlbums
                    const albumList = xmlAlbums.map((album) => {

                        // Extract properties from each album
                        const name = album.Name?.[0] || '';
                        const spotify = album.Spotify?.[0] || '';
                        const spotifyLink = album.SpotifyLink?.[0] || '';
                        const appleMusicLink = album.AppleMusic?.[0] || '';
                        const ytmLink = album.YTM?.[0] || '';
                        const id = album.Id?.[0] || '';

                        // Create an object representing the album
                    const albumObject = {
                            id: id,
                            name: name,
                            spotify: spotify,
                            spotifyLink: spotifyLink,
                            appleMusicLink: appleMusicLink,
                            ytmLink: ytmLink
                        };

                        return albumObject;
                    });

                    // console.log(albumList);
                    setAlbums(albumList);
                }
            });
        } catch (error) {
            console.error('Error fetching XML:', error);
        }
    };

    useEffect(() => {
        console.log(albums);
        fetchXmlData();
    }, [albums]);

    return (
        <Container fluid className='mt-4'>
            {/* <h1 className="title">Albums</h1> */}
            <Row className='justify-content-evenly'>

                {albums && albums.map((album) =>
                    <AlbumCard key={album.id}
                        album={album} />
                )}

            </Row>
        </Container>
    )
}
