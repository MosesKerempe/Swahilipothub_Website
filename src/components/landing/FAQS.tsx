"use client";
import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What programs and services does SwahiliPot Hub offer?",
    answer:
      "SwahiliPot Hub offers a range of programs and services, including training workshops, mentorship programs, networking events, access to co-working spaces, and maker labs. These initiatives empower individuals by providing them with the necessary resources and skills to participate in the digital economy.",
  },
  {
    question: "Who can benefit from SwahiliPot Hub?",
    answer:
      "SwahiliPot Hub is open to entrepreneurs, developers, creatives, and anyone interested in technology and innovation. It connects individuals looking to enhance their digital skills and collaborate on projects.",
  },
  {
    question: "Can I visit SwahiliPot Hub as a visitor?",
    answer:
      "Yes, SwahiliPot Hub welcomes visitors interested in learning more about its initiatives. You can attend events, participate in workshops, or network with professionals in the tech and creative communities.",
  },
];

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="faq-bottom">
        {/* Use the absolute path for the image */}
        <Image
          src="/public/icons/oc-looking-for-answers.svg"
          alt="Looking for answers?"
          width={120}
          height={120}
        />
        <p>Still have questions?</p>
        <a href="#" className="faq-contact">Contact our friendly support team →</a>
      </div>
    </section>
  );
};

export default FAQS;
