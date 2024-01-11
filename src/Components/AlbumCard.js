import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function AlbumCard(props) {
  const { name, spotify, spotifyLink, appleMusicLink, ytmLink } = props.album;

  return (
    <Container>
      <Row className='pt-4' >
        <Col xs={12} md={6}>
          <iframe
            style={{ borderRadius: '20px' }}
            src={spotify}
            width="100%"
            height="352"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Col>

        <Col xs={12} md={6}>
          <h1 className='album_title pt-3 text-center'>{name}</h1>


          <Row className='Music_Row mt-3'>
            <Col className="text-center">
              <a href={spotifyLink} >
                <FontAwesomeIcon icon={faSpotify} className='fs-2 ' />

                <span className="Music_text">Spotify</span>
              </a>
            </Col>
          </Row>

          <Row className='Music_Row mt-4'>
            <Col className="text-center">
              <a href={ytmLink} >
                <FontAwesomeIcon icon={faYoutube} className='fs-2 ' />

                <span className="Music_text">Youtube Music</span>
              </a>
            </Col>
          </Row>

          <Row className='Music_Row mt-4'>
            <Col className="text-center">
              <a href={appleMusicLink} >
                <FontAwesomeIcon icon={faMusic} className='fs-2 ' />

                <span className="Music_text">Apple Music</span>
              </a>
            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  )
}
