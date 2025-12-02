import React from "react";
// Replacing react-icons with lucide-react for better compatibility and consistency
import { Truck, Globe, Clock, ShieldCheck } from "lucide-react";

/**
 * Renders the "Why Choose Us" section, featuring core benefits and a company timeline.
 * Designed to be highly responsive and visually engaging using Tailwind CSS.
 */
const Whyus: React.FC = () => {
  const features = [
    {
      title: "Nationwide Coverage",
      description:
        "Complete dispatch and brokerage coverage across North America, connecting you with the best carriers.",
      icons: Truck, // Replaced AiFillTruck
    },
    {
      title: "24/7 Fleet Support",
      description:
        "Around-the-clock assistance for your fleet operations, ensuring minimal downtime and maximum efficiency.",
      icons: Clock, // Replaced IoMdTime
    },
    {
      title: "Intermodal Expertise",
      description:
        "Specialized knowledge in drayage, warehousing, and intermodal logistics for seamless supply chain management.",
      icons: Globe, // Replaced FaGlobeAmericas
    },
    {
      title: "100% Transparency",
      description:
        "Complete visibility into your logistics operations with real-time tracking, reporting, and communication.",
      icons: ShieldCheck, // Replaced BsShieldCheck
    },
  ];

  const timelineEvents = [
    {
      year: "2016",
      title: "Company Founded",
      description:
        "Walia Group was established with a focus on dispatch services and fleet safety management.",
    },
    {
      year: "2018",
      title: "Expanded to Freight Brokerage",
      description:
        "Added freight brokerage services to offer more comprehensive logistics solutions.",
    },
    {
      year: "2020",
      title: "Warehousing & Intermodal Division",
      description:
        "Launched warehousing solutions and intermodal logistics services to complement existing offerings.",
    },
    {
      year: "2023",
      title: "North America Expansion",
      description:
        "Extended operations across all of North America with enhanced technological capabilities.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center py-12 sm:py-20 bg-white font-sans">
      <div className=" mx-auto px-4 max-w-7xl">
        {/* heading: Why Choose Us */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why Choose Us
          </h1>
          <div className="h-1.5 w-24 bg-yellow-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Features grid - improved for mobile and aesthetics */}
        <div className="flex flex-wrap justify-center gap-2">
          {features.map((item, index) => (
            <div
              key={index}
              // 🛑 FIX: Updated width for 4 columns on large screens
              // w-full: Always 1 column on small screens (100% width)
              // sm:w-[calc(50%-4px)]: 2 columns on medium screens (50% width minus half the gap)
              // lg:w-[calc(25%-6px)]: 4 columns on large screens (25% width minus gap)
              className="
        w-full 
        sm:w-[calc(50%-4px)] 
        lg:w-[calc(25%-6px)] 
        bg-gray-800 text-white p-6 rounded-xl flex flex-col items-center justify-start text-center h-full 
        transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl
      "
            >
              {/* Using React.createElement to dynamically render the Lucide icon */}
              {React.createElement(item.icons, {
                className:
                  "w-7 h-7 text-gray-900 bg-yellow-400 rounded-full h-14 w-14 p-3 sm:p-3.5 mb-4 shadow-lg",
              })}
              <div className="text-yellow-400 text-xl font-bold mb-2 tracking-wide">
                {item.title}
              </div>
              <div className="text-sm text-gray-300">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Journey - improved timeline with centered timestamps and alternating cards */}
      <div className="bg-neutral-100 rounded-2xl p-6 sm:p-12 w-full max-w-7xl mx-auto shadow-inner">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 sm:mb-16 text-center text-gray-900">
          Our Journey
        </h2>

        <div className="relative py-8">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-1 bg-yellow-500 transform sm:-translate-x-1/2 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-16 sm:space-y-24 relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Year Marker - Centered on the line */}
                <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-full flex items-center justify-center border-4 border-yellow-500 shadow-xl">
                    <span className="text-yellow-400 font-extrabold text-sm sm:text-lg">
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Content Cards - Proper alternating layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 sm:mt-0">
                  {/* Mobile: Always right of line (using ml-14) */}
                  {/* Desktop: Alternate left and right columns */}
                  <div
                    className={`
                    col-span-1
                    ${index % 2 === 0 ? "sm:col-start-2" : "sm:col-start-1"}
                    ml-14 sm:ml-0
                  `}
                  >
                    <div
                      className={`
                      bg-white p-5 sm:p-7 rounded-xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-xl
                      ${index % 2 === 1 ? "sm:text-right sm:pr-10" : "sm:pl-10"}
                      relative
                    `}
                    >
                      {/* Arrow pointer for desktop */}
                      <div
                        className={`
                        hidden sm:block absolute top-1/2 w-4 h-4 transform -translate-y-1/2 rotate-45 bg-white border-b border-r border-gray-200 z-20
                        ${
                          index % 2 === 1
                            ? "sm:right-2"
                            : "sm:left-2 border-l border-t"
                        }
                      `}
                      ></div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-700 text-base">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty column for alternating layout on desktop */}
                  <div
                    className={`hidden sm:block col-span-1 ${
                      index % 2 === 0 ? "sm:col-start-1" : "sm:col-start-2"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
