// components/Founders.tsx

import React from "react";
// Import next/image for optimized image loading
import Image from "next/image";
// Import icons
import { FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

// Assuming 'bg' is a static image import in a Next.js environment,
// which typically returns an object with 'src', 'height', and 'width'.
import bg from "../assets/home.webp";

// --- TypeScript Interface for Founder Data ---
interface Founder {
  name: string;
  role: string;
  title: string;
  image: typeof bg; // Use typeof the imported image for correct type if using next/image
  alt: string;
  expertise: string[];
  linkdenlink: string;
  whatapplink: string;
  photoCredit?: string; // Add optional photoCredit field (used in JSX but missing in data)
}

// --- Founder Data (Typed) ---
const founders: Founder[] = [
  {
    name: "xxxx xxxxx",
    role: "Founder",
    title: "Safety Expert",
    image: bg,
    alt: "Rahul Walia - Founder & Safety Expert",
    expertise: [
      "Fleet Operations & Management",
      "DOT Compliance",
      "Safety Training Programs",
    ],
    linkdenlink: "https://linkedin.com/in/rahul-walia-a48a51176",
    whatapplink:
      "https://wa.me/+917018953717?text=Hello%20I%20am%20interested%20in%20your%20logistics%20services.",
    // photoCredit: "Credit: John Doe", // Example of missing field
  },
  {
    name: "xxxx xxxx",
    role: "Co-Founder",
    title: "Logistics Strategist",
    image: bg,
    alt: "Karan Dhatwalia - Co-Founder & Operations Head",
    expertise: [
      "Dispatching Systems",
      "Intermodal Logistics",
      "Warehousing & Distribution",
    ],
    linkdenlink: "",
    whatapplink:
      "https://wa.me/+917018953717?text=Hello%20I%20am%20interested%20in%20your%20logistics%20services.",
    // photoCredit: "Credit: Jane Smith", // Example of missing field
  },
];

// --- Next.js Component (TSX) ---
const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-barlow">
            Founders
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto font-roboto">
            Meet the visionary leaders behind Walia Group of Companies who have
            transformed the logistics landscape.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {founders.map((founder: Founder, index: number) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                {/* Image Section */}
                <div className="md:w-2/5">
                  <div className="h-64 md:h-full bg-black relative overflow-hidden flex items-center justify-center">
                    <Image
                      src={founder.image}
                      alt={founder.alt}
                      // layout='fill' and objectFit='cover' are preferred in newer Next.js versions
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      // The 'onError' logic is no longer used directly on <Image>
                      // as it handles broken images more gracefully or should be handled by an API fallback.
                      priority={index === 0} // Prioritize the first image
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent h-24 z-10"></div>
                    {/* Photo Credit is kept but will only render if data is present */}
                    {founder.photoCredit && (
                      <div className="absolute bottom-4 left-4 text-xs text-white opacity-70 z-10">
                        {founder.photoCredit}
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-8 md:w-3/5">
                  {/* Name and Role */}
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-black font-barlow">
                      {founder.name}
                    </h3>
                    <div className="ml-3 px-3 py-1 bg-yellow-400 rounded-full text-xs font-medium text-black">
                      {founder.role}
                    </div>
                  </div>

                  {/* Title */}
                  <p className="text-black font-semibold mb-4 font-barlow">
                    {founder.title}
                  </p>

                  {/* Description */}
                  <div className="mb-6">
                    {/* Note: I added a simple descriptive paragraph based on the existing template. */}
                    <p className="text-gray-700 mb-4 font-roboto">
                      {founder.name} brings a wealth of experience in **
                      {founder.title}**. Their leadership has been vital in
                      steering the company’s success in{" "}
                      {founder.role.toLowerCase()} operations.
                    </p>
                    <p className="text-gray-700 font-roboto">
                      Their expertise in operational excellence and strategic
                      vision continues to inspire the team and drive innovation
                      in the logistics sector.
                    </p>
                  </div>

                  {/* Areas of Expertise */}
                  <div className="mb-6">
                    <h4 className="text-black font-bold mb-2 font-barlow">
                      Areas of Expertise:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {founder.expertise.map((item: string, i: number) => (
                        <li key={i} className="flex items-start text-gray-700">
                          {/* Replaced generic SVG with an icon for better visual consistency */}
                          <svg
                            className="w-5 h-5 text-black mr-2 shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="font-roboto">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 mt-6 pt-4 border-t border-gray-100">
                    {founder.linkdenlink && (
                      <a
                        href={founder.linkdenlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-300"
                        aria-label={`LinkedIn Profile of ${founder.name}`}
                      >
                        <FaLinkedin className="w-7 h-7" />
                      </a>
                    )}
                    {founder.whatapplink && (
                      <a
                        href={founder.whatapplink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#25D366] transition-colors duration-300"
                        aria-label={`WhatsApp message to ${founder.name}`}
                      >
                        <FaWhatsapp className="w-7 h-7" />
                      </a>
                    )}
                    {/* Add X/Twitter if a link were available */}
                    {/* <a href="#" className="text-gray-600 hover:text-black transition-colors duration-300" aria-label="Twitter Profile">
                        <FaXTwitter className="w-7 h-7" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
