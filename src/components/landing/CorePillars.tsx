import React from 'react';
import Image from 'next/image';

const CorePillars: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Swahilipot Core Pillars</h2>
        <p className="text-lg text-gray-500">Tech | Arts | Heritage</p>
      </div>

      {/* Three-Column Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Technology Card */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <Image
            src="/src/public/icons/frame-layouts.jpg" // Update with your actual icon name
            alt="Technology Icon"
            width={64}
            height={64}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Technology</h3>
          <p className="text-center text-gray-700">
            Swahilipot Hub empowers young individuals in technology through
            programs like Data and Research, Digital Literacy, Industrial
            Attachment, Campus Ambassador, and Pitching Thursday.
          </p>
        </div>

        {/* Creatives & Arts Card */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <Image
            src="/src/public/icons/oc-money-profits .jpg" // Update with your actual icon name
            alt="Creatives & Arts Icon"
            width={64}
            height={64}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Creatives & Arts</h3>
          <p className="text-center text-gray-700">
            The Creative Department brings imagination to life through
            initiatives like Sanaa Show, nurturing talents in acting, voice
            arts, and various artistic expressions.
          </p>
        </div>

        {/* Heritage Card */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <Image
            src="/src/public/icons/oc-maintenance .jpg" // Update with your actual icon name
            alt="Heritage Icon"
            width={64}
            height={64}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Heritage</h3>
          <p className="text-center text-gray-700">
            Connecting the past and the future by preserving cultural values and
            traditions. Our heritage initiatives highlight the importance of
            cultural awareness in modern development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
