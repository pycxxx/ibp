import { useEffect, useState } from 'react';

export const useDeviceType = () => {
  const [width, setWidth] = useState(typeof window === 'undefined' ? 0 : window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  const isMobile = width <= 768;

  return { isMobile };
};