import Image from "next/image";

export default function CorePillars() {
  const pillars = [
    {
      title: "Technology",
      description:
        "Swahilipot Hub empowers young individuals in technology through programs like Data and Research, Digital Literacy, Industrial Attachment, Campus Ambassador, and Pitching Thursday.",
      imageSrc: "/icons/tech.jpg",
      bgColor: "bg-blue-100",
    },
    {
      title: "Creatives & Arts",
      description:
        "The Creative Department brings imagination to life through initiatives like Sanaa Show and Saanart Shop, nurturing talents in acting, voice arts, and diverse artistic expressions, empowering artists to make a difference in the community.",
      imageSrc: "/icons/creative&arts.jpg",
      bgColor: "bg-orange-100",
    },
    {
      title: "Heritage",
      description: "Connecting the past and the future.",
      imageSrc: "/icons/heritage.jpg",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Swahilipot Core Pillars</h2>
          <p className="text-lg text-gray-600">Tech | Arts | Heritage</p>
        </div>

        {/* Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md ${pillar.bgColor} flex flex-col justify-between h-full`}>
              <div>
                <h3 className="text-lg font-bold text-blue-900">{pillar.title}</h3>
                <p className="text-gray-700">{pillar.description}</p>
              </div>
              <div className="flex justify-center mt-6">
                <Image src={pillar.imageSrc} alt={pillar.title} width={120} height={120} className="object-contain" />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12">
          <p className="text-gray-700">Have a question?</p>
          <a href="#" className="text-blue-600 hover:underline">
            Contact Us &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
