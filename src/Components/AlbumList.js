import React, { useEffect, useState } from 'react'
import AlbumCard from './AlbumCard';
import xmlData from '../Utils/Albums.xml';
import { parseString } from 'xml2js';
import { Container, Row } from 'react-bootstrap';

export default function AlbumList() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // Parsing XML using parseString inside the useEffect
        parseString(xmlData, (err, result) => {
            if (err) {
                console.error('Error parsing XML:', err);
            } else {
                const xmlAlbums = result?.Library?.Album || [];

                const albumList = xmlAlbums.map((album) => ({
                    name: album.Name?.[0] || '',
                    spotifyLink: album.Link?.find((link) => link.$.type === 'Spotify')?._[0] || '',
                    appleMusic: album.Link?.find((link) => link.$.type === 'AppleMusic')?._[0] || '',
                    ytm: album.Link?.find((link) => link.$.type === 'YTM')?._[0] || '',
                }));

                console.log(albumList);
                setAlbums(albumList);
            }
        });
    }, []);

    console.log(xmlData);

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
