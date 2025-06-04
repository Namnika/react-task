import React from 'react'
import IdeaImage from "../assests/idea-image.avif"
import DomainImage from "../assests/domain-image.avif"
import LayoutImage from "../assests/layout-image.avif"
import PantoneImage from "../assests/pantone-image.avif"

function Project() {
    return (
        <div id="project" className="learnmore-page">
            <h2>Frontend Practice provides you with the inspiration and resources to create beautiful websites.</h2>
            <p>Here are some ways you can benefit from using our platform:</p>
            <div className="features-container">
                <div className="features-inner">
                    <div className="feature1">
                        <img src={DomainImage} alt="domain-image" />
                        <p>Enhance your skills by building real websites selected for their educational value.</p>
                    </div>
                    <div className="feature2">
                        <img src={LayoutImage} alt="layout-image" />
                        <p>Test and improve your frontend knowledge through various challenges.</p>
                    </div>
                    <div className="feature3">
                        <img src={PantoneImage} alt="pantone-image" />
                        <p>Use the provided color palettes for each project to save time.</p>
                    </div>
                    <div className="feature4">
                        <img src={IdeaImage} alt="idea-image" />
                        <p>Find helpful, curated resources to tackle challenging elements.</p>
                    </div>
                </div>
            </div>
            <div id="faq" className="learnmore-cta">
                <h2>Ready to become a better frontend developer?</h2>
                <a href="#cta">Get Started</a>
            </div>
        </div>
    )
}

export default Project
