// components/About.tsx

import React from "react";
// Next.js uses 'next/image' for optimized image handling
import Image from "next/image";
// Assuming the asset is in the public folder or a subfolder like 'public/assets'
// If 'bg' is in the 'public' directory, you reference it like this:
// const BG_IMAGE_PATH = "/assets/home.webp";
// If it's a local import like in React, you'll import it:
import bg from "../assets/home.webp";

/**
 * Interface for a leadership team member's data.
 * This provides type safety for the member objects.
 */
interface TeamMember {
  initials: string;
  name: string;
  title: string;
  description: string;
  // Optional: Add social links if you plan to re-enable them
  // linkedin?: string;
  // whatsapp?: string;
}

const leadershipTeam: TeamMember[] = [
  {
    initials: "RW",
    name: "xxxx xxxxx",
    title: "Founder & Safety Expert",
    description:
      "Expert in fleet operations, safety, and DOT compliance with a passion for building safer transportation systems.",
  },
  {
    initials: "KD",
    name: "xxxx xxxxxx",
    title: "Logistics Strategist",
    description:
      "Expert in dispatching, intermodal logistics, and warehousing with a focus on optimizing end-to-end supply chains.",
  },
  {
    initials: "TM",
    name: "xxxxx xxxxxxx",
    title: "Logistics Expert",
    description:
      "Expert in dispatching, intermodal logistics, and warehousing with a focus on optimizing end-to-end supply chains.",
  },
];

// Next.js components are typically defined as React.FC (Functional Component)
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-barlow">
            About
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto font-roboto">
            Learn about our journey, our leadership, and what makes Walia Group
            your ideal logistics partner.
          </p>
        </div>

        {/* About Us Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            {/* Next.js Image component for performance optimization (lazy loading,
              automatic resizing, and format conversion).
              The 'src' prop must be an imported image object for local files,
              and 'width' and 'height' are mandatory.
            */}
            <Image
              src={bg}
              alt="Professional business environment representing our company culture"
              // The original component had width/height attributes, using them here.
              width={5066}
              height={3377}
              // 'layout' is deprecated, using 'fill' or standard layout with 'sizes'
              // or just providing width/height if the size is known/fixed.
              // object-cover and w-full/h-full is better achieved with 'fill' and 'parent 'relative'
              // but since width/height are provided, setting 'className' to match original:
              className="w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
            />
            {/* NOTE: Error handling for Next/Image is done differently, 
                often via the 'unoptimized' prop for external sources, but for local 
                imports, the path should be correct.
            */}
            <p className="text-xs text-gray-500 mt-1">Photo by Hunters Race</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-black font-barlow">
              Our Journey
            </h3>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-700 mb-4 font-roboto">
              Founded with a vision to transform the logistics industry, Walia
              Group of Companies has grown from a small operation to a
              comprehensive logistics provider servicing clients across North
              America.
            </p>
            <p className="text-gray-700 mb-6 font-roboto">
              With 7+ years of industry knowledge, we bring tailored logistics
              solutions from port to door. Our integrated approach combines
              dispatch services, safety management, freight brokerage, and more
              to offer complete supply chain solutions.
            </p>
            <p className="text-gray-700 font-roboto">
              Our mission is simple: to provide reliable, efficient, and
              cost-effective logistics services that help our clients succeed in
              their business operations while maintaining the highest standards
              of safety and compliance.
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <div className="bg-gray-200 py-16 px-2 md:px-10 rounded-xl mb-20 ">
          <h3 className="text-2xl font-bold mb-10 text-center text-black font-barlow">
            Leadership Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
            {/* Using Array.map() for cleaner, dynamic rendering of team members.
              This is a standard React pattern.
            */}
            {leadershipTeam.map((member) => (
              <div
                key={member.name} // Unique key for list items
                className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center md:items-start"
              >
                <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center shrink-0">
                  <span className="text-yellow-400 text-4xl font-bold font-barlow">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2 font-barlow">
                    {member.name}
                  </h4>
                  <p className="text-black font-medium mb-3 font-barlow">
                    {member.title}
                  </p>
                  <p className="text-gray-700 mb-4 font-roboto">
                    {member.description}
                  </p>
                  {/* Social links (currently commented out in the original)
                  <div className="flex space-x-3"> 
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-xl" aria-label={`LinkedIn Profile for ${member.name}`}>
                      <FaLinkedin />
                    </a>
                    <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-xl" aria-label={`WhatsApp contact for ${member.name}`}>
                      <FaWhatsapp />
                    </a>
                  </div> 
                  */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
