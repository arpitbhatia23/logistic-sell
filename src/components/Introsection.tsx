// components/IntroductionSection.tsx

import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

// Assuming these are local static imports handled by Next.js Image
import istimg from "../assets/home.webp";
import sectimg from "../assets/second.webp";
import thiedimg from "../assets/third.webp";

// --- TypeScript Interfaces ---

interface Point {
  title: string;
  desc: string;
}

interface Stat {
  value: string;
  label: string;
}

// Data typed using the interfaces
const keyPoints: Point[] = [
  {
    title: "Professional Team",
    desc: "Industry experts with specialized knowledge in logistics and transportation",
  },
  {
    title: "Nationwide Coverage",
    desc: "Complete logistics solutions throughout North America",
  },
  {
    title: "Client-Centered Approach",
    desc: "Customized solutions tailored to your specific business needs",
  },
];

const stats: Stat[] = [
  { value: "7+", label: "Years Experience" },
  { value: "500+", label: "Clients Served" },
  { value: "24/7", label: "Support Available" },
  { value: "100%", label: "Client Satisfaction" },
];

// --- Next.js Component (TSX) ---

const IntroductionSection: React.FC = () => {
  return (
    <section id="introduction" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black font-barlow">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Main Content: Text and Images */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-black font-barlow">
              Your Trusted Logistics Partner
            </h3>
            <p className="text-gray-700 mb-6 font-roboto">
              With over **7 years of experience**, Walia Group of Companies
              delivers end-to-end transportation, dispatch, brokerage, and
              maintenance solutions across **North America**.
            </p>
            <p className="text-gray-700 mb-8 font-roboto">
              Our commitment to **reliability, safety, and customer
              satisfaction** has established us as a leading provider in the
              logistics industry.
            </p>

            {/* Key points */}
            <div className="space-y-4">
              {keyPoints.map((point: Point, index: number) => (
                <div key={index} className="flex items-start">
                  <div className="shrink-0 mr-3">
                    {/* Replaced generic SVG with an icon or stylized check */}
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black font-barlow">
                      {point.title}
                    </h4>
                    <p className="text-gray-600 font-roboto text-sm">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn more button (Fixed Link usage) */}
            <div className="mt-8">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-lg font-semibold text-black hover:text-yellow-600 transition duration-300"
              >
                Learn More About Us <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Image grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            {/* Image components require explicit width and height when not using 'fill' */}
            <div className="col-span-2">
              <Image
                src={istimg}
                alt="Professional business meeting"
                className="w-full h-52 object-cover rounded-lg shadow-md"
                width={700} // Approximate width for full column span
                height={208} // 52 * 4 (Tailwind h-52)
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src={sectimg}
                alt="Logistics professional at work"
                className="w-full h-48 object-cover rounded-lg shadow-md"
                width={340} // Approximate half-column width
                height={192} // 48 * 4 (Tailwind h-48)
                loading="lazy"
              />
            </div>
            <div>
              <Image
                src={thiedimg}
                alt="Professional executive"
                className="w-full h-48 object-cover rounded-lg shadow-md"
                width={340} // Approximate half-column width
                height={192} // 48 * 4 (Tailwind h-48)
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat: Stat, index: number) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg text-center transform transition-transform hover:scale-105"
            >
              <div className="text-yellow-400 text-4xl font-bold mb-2 font-barlow">
                {stat.value}
              </div>
              <div className="text-white font-medium font-barlow">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
