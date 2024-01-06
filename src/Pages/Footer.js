import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faSpotify, faTwitter} from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <div>
            <footer id="footer">

                <a href="" className='links'><FontAwesomeIcon icon={faFacebook} beat  /></a>
                <a href="" className='links'><FontAwesomeIcon icon={faTwitter} beat /></a>
                <a href="https://www.instagram.com/Nineteen.ninety.v" className='links'><FontAwesomeIcon icon={faInstagram} beat /></a>
                <a href="" className='links'><FontAwesomeIcon icon={faEnvelope} beat/></a>
                <a href="https://open.spotify.com/artist/7GJYItBw6A5skqnKs9Bbrz" className='links'><FontAwesomeIcon icon={faSpotify} beat/></a>


            </footer>
        </div>
    )
}
