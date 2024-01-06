import React from 'react'
import { Card } from 'react-bootstrap'

export default function AlbumCard(props) {
    const { name, spotify, appleMusicLink, ytmLink } = props.album;
  
  return (
    <div>
    <iframe
        style={{ borderRadius: '20px' }} 
        src={spotify}
        width="100%"
        height="352"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
    />
    </div>
  )
}
