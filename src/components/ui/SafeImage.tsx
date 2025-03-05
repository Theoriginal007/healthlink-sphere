
import React, { useState } from 'react';
import { placeholders } from '@/assets/placeholders';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  placeholderType?: keyof typeof placeholders;
}

const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  fallback, 
  placeholderType = 'feature',
  className,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      // Try the provided fallback first
      if (fallback) {
        setImgSrc(fallback);
      } else {
        // If no fallback, use placeholder
        setImgSrc(placeholders[placeholderType] || placeholders.feature);
      }
      setHasError(true);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || "Image"}
      onError={handleError}
      className={className}
      {...props}
    />
  );
};

export default SafeImage;
