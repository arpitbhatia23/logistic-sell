// components/LeadershipValues.tsx

import React from "react";

// --- TypeScript Interfaces ---

// Define the type for the SVG path element within the icon prop
type SVGIcon = React.ReactElement<SVGPathElement>;

interface CardData {
  title: string;
  description: string;
  icon: SVGIcon;
}

interface LeadershipCardProps extends CardData {}

// --- Component Data (Typed) ---

const cardData: CardData[] = [
  {
    title: "Safety First",
    description:
      "We believe safety is the foundation of successful logistics. Our leadership prioritizes safety in every aspect of our operations.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        // Shield with a checkmark for safety
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Innovation",
    description:
      "Our founders continuously seek innovative solutions to streamline logistics processes and improve operational efficiency.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        // Lightning bolt for innovation/speed
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "Client Partnership",
    description:
      "We view our relationship with clients as partnerships, working collaboratively to achieve mutual success and long-term growth.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        // Two people connecting for partnership/collaboration
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
];

// --- Leadership Card Component (TSX) ---

const LeadershipCard: React.FC<LeadershipCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="bg-black p-6 md:p-8 rounded-xl text-center shadow-lg transition duration-300 hover:shadow-yellow-500/50 hover:scale-[1.02] mx-4 lg:mx-2 flex-1 max-w-sm">
    <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-full flex items-center justify-center mb-6">
      <svg
        className="w-8 h-8 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true" // Added for accessibility
      >
        {icon}
      </svg>
    </div>
    <h4 className="text-xl font-bold text-yellow-400 mb-4 font-barlow">
      {title}
    </h4>
    <p className="text-gray-300 font-roboto">{description}</p>
  </div>
);

// --- Main Component (TSX) ---

const LeadershipValues: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold mb-4 text-black font-barlow">
          Our Leadership Values
        </h3>
        <div className="h-1 w-20 bg-yellow-400 mx-auto" />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
        {cardData.map((card: CardData, index: number) => (
          <LeadershipCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default LeadershipValues;
