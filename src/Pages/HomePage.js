import React, { startTransition } from 'react'
import AlbumList from '../Components/AlbumList'

export default function HomePage() {
  return (
    <div>
      <div className='top_div'>
      <h1>GABI.</h1>
      </div>
      <AlbumList/>
    </div>
  )
}
