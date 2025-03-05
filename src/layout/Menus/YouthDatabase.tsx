import React from 'react';
import Image from 'next/image';

const YouthDatabase: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-16 flex flex-col md:flex-row items-center gap-12 bg-white">
      {/* Left Column: Image */}
      <div className="flex-1">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/image/youth_database.jpg"
            alt="Youth Database"
            width={650}
            height={430}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Column: Text & Button */}
      <div className="flex-1 text-left">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Join Our Youth Database
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Be part of an innovative community empowering the youth! Sign up today 
          to stay informed and access opportunities.
        </p>
        <a
          href="/joinus"
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md text-lg font-medium 
                     hover:bg-blue-700 transition-all duration-300"
        >
          Join Our Youth Database
        </a>
      </div>
    </section>
  );
};

export default YouthDatabase;
