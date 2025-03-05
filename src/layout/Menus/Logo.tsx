import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-2">
      <Image
        src="/image/logo.png" 
        alt="Swahilipot Logo"
        width={250}
        height={60}
        className="hover:opacity-80 transition-opacity duration-300"
        priority
      />
    </div>
  );
};

export default Logo;
