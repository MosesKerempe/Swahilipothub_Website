"use client";
import React from "react";
import Image from "next/image"; // Using Next.js Image optimization

const CaseManagement: React.FC = () => {
  return (
    <div className="case-management">
      {/* About Case Management Section */}
      <section className="about-section">
        <div className="about-header">
          <h1>About Case Management</h1>
        </div>
        <div className="about-content">
          <p>
            At the Swahili Pot Hub Foundation (SPH), we are committed to making a
            positive impact on the lives of young individuals in Mombasa County and
            its six sub-counties. For the past seven years, we have been dedicated
            to helping youth overcome challenges and thrive. Through strategic
            partnerships with communities, government entities, CSOs, and local
            leaders, SPH has been a beacon of hope for young people from diverse
            backgrounds.
          </p>
          <h2>The Case Management Project: A Path to Empowerment</h2>
          <p>
            The primary objective of the Case Management Project is to connect
            60,000 youth in Mombasa County and its sub-counties to a wide range of
            opportunities and sustainable employment. We understand that each young
            person is unique, and to empower them effectively, we emphasize a
            personalized case management approach. This approach allows us to offer
            customized support and guidance, helping young individuals access and
            thrive in various educational, vocational, and entrepreneurial pathways.
          </p>
        </div>
      </section>

      {/* Case Management Hero Section */}
      <section className="hero">
        <div className="text-content">
          <h1>Case Management</h1>
          <p>Anyone, Anywhere</p>
        </div>
        <div className="image-container">
          <Image
            src="/public/image/case-management.jpg" 
            alt="Case Management"
            width={500}
            height={400}
            className="hero-image"
          />
        </div>
      </section>

      {/* Google Form Section */}
      <div className="form-container">
        <iframe
          src="YOUR_GOOGLE_FORM_URL_HERE"
          width="100%"
          height="1200px"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default CaseManagement;
