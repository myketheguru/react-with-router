import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div id="about">
            <h1>About Astroweb</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate maxime beatae molestiae laudantium inventore, sed vero quis unde molestias veniam.
            </p>
            <button onClick={() => navigate('/contact')}>
                Contact us Now
            </button>
        </div>
    )
}

export default About
