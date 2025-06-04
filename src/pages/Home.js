import React from 'react'
import ProjectCollage from "../assests/project-collage.png"
function Home() {
    return (
        <div id="home" className="heropage-container">
            <div className="heropage-inner">
                <div className="heropage-content">
                    <h2>Become a better frontend developer.</h2>
                    <p>Take your frontend skills to the next level by recreating <strong>real
                        websites</strong><strong>real companies</strong></p>
                    <p>The perfect type of practice for developers of all skill levels. Are you up for the
                        challenge?
                    </p>
                    <div className="heropage-links">
                        <a href="#view-projects">View Projects</a>
                        <a href="#learn-more">Learn More</a>
                    </div>
                </div>
                <div className="heropage-image">
                    <img src={ProjectCollage} alt="project-collage" />
                </div>
            </div>
        </div>
    )
}

export default Home
