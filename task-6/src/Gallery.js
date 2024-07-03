// src/Gallery.js
import React from 'react';
import './Gallery.css'; // Make sure to import the CSS file

const Gallery = ({ data }) => {
    return (
        <div className="gallery">
            {data.map((image) => (
                <div key={image.id} className="gallery-item">
                    <img
                        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                        alt={image.title}
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
