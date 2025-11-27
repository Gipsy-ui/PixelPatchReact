import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable component to display reference/assessment images
 */
const ReferenceImages = ({ images, title = "Reference Images", imageClassName = "w-24 h-32" }) => {
  if (!images || images.length === 0) return null;
  
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt || `Image ${index + 1}`}
            className={`${imageClassName} object-contain border border-gray-200 bg-white rounded-lg p-1`}
          />
        ))}
      </div>
    </div>
  );
};

ReferenceImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string,
  imageClassName: PropTypes.string,
};

export default ReferenceImages;
