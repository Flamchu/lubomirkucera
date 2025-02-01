// src/components/PhotoGallery.tsx
import React, { useEffect, useState } from 'react';
import images from '../imageLoader';

const PhotoGallery: React.FC = () => {
  const [imageSources, setImageSources] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: { [key: string]: string } = {};
      for (const key in images) {
        // Await the promise to get the image URL
        const imageUrl = await images[key]();
        // Store the image URL in the loadedImages object
        loadedImages[key.replace('./assets/images/', '')] = imageUrl;
      }
      setImageSources(loadedImages);
    };

    loadImages();
  }, []);

  const imageKeys = Object.keys(imageSources);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {imageKeys.map((key) => (
        <div key={key} style={{ flex: '0 0 48%', marginBottom: '10px' }}>
          <img src={imageSources[key]} alt={`Image ${key.replace('.jpg', '')}`} style={{ width: '100%', height: 'auto' }} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;