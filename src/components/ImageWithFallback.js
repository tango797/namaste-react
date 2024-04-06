import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, fallbackImage }) => {


  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <img  className=" w-52 h-36 rounded-lg"
      src={imageError ? fallbackImage : src}
      alt={alt}
      onError={handleImageError}
    />
  );
};

export default ImageWithFallback;
