"use client";
import Image from "next/image";

const Numbers = () => {
  return (
    <div>
      {/* Vision Section */}
      <div className="vision-section">
        <Image
          src="/image/fingerprint.png.jpg"
          alt="Fingerprint Scan"
          width={150}
          height={150}
          className="vision-image"
        />
        <p className="vision-text">We work with everyone who shares our vision</p>
      </div>

      {/* Numbers Section */}
      <div className="numbers-section">
        <h2 className="numbers-title">Swahilipot Hub in Numbers</h2>
        <p className="numbers-subtitle">Our Impacts in Numbers</p>
        <div className="numbers-grid">
          <div className="numbers-item">
            <span className="numbers-value">4000+</span>
            <p className="numbers-label">Community Members</p>
          </div>
          <div className="numbers-divider"></div>
          <div className="numbers-item">
            <span className="numbers-value">25</span>
            <p className="numbers-label">Programs and Activities</p>
          </div>
          <div className="numbers-divider"></div>
          <div className="numbers-item">
            <span className="numbers-value">65%</span>
            <p className="numbers-label">of our members are Youth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
