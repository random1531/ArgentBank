import React from 'react'
import './feature.css'
export default function Feature({logopictures, Title, TextContent}) {
  return (
    <div className="feature-item">
    <img src={logopictures} alt="Chat Icon" className="feature-icon" />
    <h3 className="feature-item-title">{Title}</h3>
    <p>
     {TextContent}
    </p>
  </div>
  )
}
