import React from 'react'
import { Card } from 'react-bootstrap'

export default function AlbumCard(album) {

  return (
    <Card style={{ width: '25rem', borderRadius: '2rem', background: '#2a1760' }} text="light" className="mx-1 my-3">

        <Card.Img
            variant="top"
            src="/Users/adembessam/Desktop/Projet personnel/gabi./public/logo192.png"
            className="rounded-5"
        />
    <Card.Body>

        <Card.Title className="fs-2">{album.name}</Card.Title>

        <Card.Text>

        </Card.Text>
    </Card.Body>
    <Card.Footer style={{ display: 'flex', justifyContent: 'space-between' }}>
    </Card.Footer>
</Card>
  )
}
