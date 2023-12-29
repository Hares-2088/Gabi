import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard';
import { parseString } from 'xml2js';
import XMLParser from 'xml2js';
import { Container, Row } from 'react-bootstrap';

export default function AlbumList() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchXmlData = async () => {
            try {
                const response = await fetch('/albums.xml');
                const xmlData = await response.text();

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

                            // Create an object representing the album
                            const albumObject = {
                                name: name,
                                spotify: spotify,
                                spotifyLink: album.Link?.find((link) => link.$.type === 'Spotify')?._ || '',
                                appleMusicLink: album.Link?.find((link) => link.$.type === 'AppleMusic')?._ || '',
                                ytmLink: album.Link?.find((link) => link.$.type === 'YTM')?._ || ''
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

        fetchXmlData();
    }, []);

    useEffect(() => {
        console.log(albums);
    }, [albums]);

    return (
        <Container fluid>
            <h1 className="title">Albums</h1>
            <Row className='justify-content-evenly'>

                {albums && albums.map((album) =>
                    <AlbumCard key={album.name}
                        album={album} />
                )}

            </Row>
        </Container>
    )
}
