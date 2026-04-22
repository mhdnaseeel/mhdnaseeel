import { useEffect } from 'react';

/**
 * Dynamically creates a round favicon from the profile image.
 * Draws the image on a canvas with circular clip and sets it as the page favicon.
 */
const useFavicon = (imageSrc) => {
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const size = 64;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

      // Draw circular clip
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      // Draw image centered & cropped to fill circle with a small padding
      const padding = 4;
      const drawSize = size - (padding * 2);
      const cropSize = Math.min(img.naturalWidth, img.naturalHeight);
      const sx = (img.naturalWidth - cropSize) / 2;
      const sy = 0; // Start from top to capture the face
      ctx.drawImage(img, sx, sy, cropSize, cropSize, padding, padding, drawSize, drawSize);

      // Set as favicon
      const dataUrl = canvas.toDataURL('image/png');
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.type = 'image/png';
      link.href = dataUrl;
    };
    img.src = imageSrc;
  }, [imageSrc]);
};

export default useFavicon;
