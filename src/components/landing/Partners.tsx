'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partners } from "@/components/partners/partners-logos";


interface Partner {
  name: string;
  logo: string;
  link: string;
}

const Partners = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust based on design
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="partners-section py-10 bg-gray-100">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Our Partners</h2>
      <Slider {...sliderSettings} className="partners-slider">
        {partners.map((partner: Partner, index: number) => (
          <div key={index} className="flex justify-centre items-centre p-4">
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <img
              src={partner.logo}
              alt={partner.name}
              className="w-40 h-auto object-contain transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;
