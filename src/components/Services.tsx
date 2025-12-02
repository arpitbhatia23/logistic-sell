"use client";

import safety from "../assets/matainece.webp";
import Dispatch from "../assets/dispacth.webp";
import Freight from "../assets/brokrege.webp";
import warehouse from "../assets/warehouse.webp";
import container from "../assets/containers.webp";
import intermodal from "../assets/intermodal.webp";

import React from "react";
import Link from "next/link";
// Importing icons from lucide-react for a modern look
import {
  Truck,
  Wrench,
  Zap,
  Warehouse,
  Box,
  Train,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

// --- TypeScript Interfaces ---

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: any; // Placeholder URL
  alt: string;
  icon: React.ElementType;
}

interface ServiceCardProps extends Service {
  isReversed: boolean;
}

// --- Service Data (using placeholder images and lucide icons) ---

const services: Service[] = [
  {
    id: "safety-maintenance",
    title: "Safety & Maintenance Services",
    subtitle: "Keeping Your Fleet Compliant, Road-Ready & Risk-Free",
    description:
      "We provide 24/7 safety and preventive maintenance to help fleets minimize downtime, avoid fines, and maintain peak vehicle performance.",
    points: [
      "Preventive maintenance (brakes, tires, fluids, etc.)",
      "DOT compliance inspections & CSA readiness",
      "24/7 roadside assistance & towing",
      "Reefer unit maintenance and diagnostics",
      "Maintenance record management",
    ],
    image: safety,
    alt: "Fleet maintenance service",
    icon: Wrench,
  },
  {
    id: "dispatch",
    title: "Dispatch Services",
    subtitle: "Reliable, Revenue-Driven Dispatch for Owner-Operators & Fleets",
    description:
      "Our dispatch team acts as your virtual office, ensuring you're always loaded, compliant, and paid on time.",
    points: [
      "Load sourcing & negotiation for best rates",
      "24/7 communication and live driver tracking",
      "Carrier setup, paperwork & rate confirmations",
      "Route planning and fuel optimization",
      "Maximize profits and reduce deadhead miles",
    ],
    image: Dispatch,
    alt: "Dispatch services",
    icon: Zap,
  },
  {
    id: "freight-brokerage",
    title: "Freight Brokerage Services",
    subtitle: "Connecting Shippers & Carriers Through Strategic Coordination",
    description:
      "As a licensed freight broker, we bridge the gap between reliable carriers and cargo-ready shippers.",
    points: [
      "Full Truckload (FTL) & Less Than Truckload (LTL) coordination",
      "Carrier vetting and compliance checks",
      "Competitive rate negotiation & volume discounts",
      "Real-time freight tracking",
      "Customized freight solutions",
    ],
    image: Freight,
    alt: "Freight brokerage",
    icon: Truck,
  },
  {
    id: "warehousing",
    title: "Warehousing Solutions",
    subtitle: "Secure, Scalable Storage for Modern Supply Chains",
    description:
      "Perfect for businesses needing storage, fulfillment, or inventory staging—short or long-term.",
    points: [
      "Temperature-controlled and ambient facilities",
      "Cross-docking & transloading",
      "Real-time inventory tracking and reporting",
      "E-commerce pick & pack fulfillment",
      "Bonded and insured storage facilities",
    ],
    image: warehouse,
    alt: "Warehouse storage",
    icon: Warehouse,
  },
  {
    id: "container-drayage",
    title: "Container & Drayage Services",
    subtitle: "Efficient Movement of Port Cargo — On Time, Every Time",
    description:
      "We specialize in container drayage and port logistics, ensuring fast, reliable cargo transfers.",
    points: [
      "Port pickups & delivery for containers",
      "FCL and LCL drayage",
      "Chassis provision & heavy-load handling",
      "Customs clearance support",
      "We simplify complex port logistics",
    ],
    image: container,
    alt: "Container logistics",
    icon: Box,
  },
  {
    id: "intermodal",
    title: "Intermodal Logistics",
    subtitle: "Eco-Friendly & Cost-Effective Multi-Modal Freight Movement",
    description:
      "Our intermodal services combine truck, rail, and port transport into a seamless logistics solution.",
    points: [
      "Direct rail and terminal access",
      "First and last mile truck movement",
      "Cross-border compliance (U.S. & Canada)",
      "Load consolidation and transloading",
      "Complete tracking from origin to destination",
    ],
    image: intermodal,
    alt: "Intermodal transport",
    icon: Train,
  },
];

// --- Service Card Component ---
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  image,
  description,
  alt,
  isReversed,
  icon: IconComponent, // Destructure and rename icon to IconComponent
  points,
  id,
}) => (
  <div
    className={`flex flex-col md:flex-row ${
      isReversed ? "md:flex-row-reverse" : ""
    } items-center md:items-stretch gap-0 bg-white 
    rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-yellow-400/50 max-w-7xl mx-auto`}
  >
    {/* Image Section */}
    <div className="md:w-1/2 w-full h-64 md:h-auto">
      <Image
        src={image}
        height={500}
        width={500}
        alt={alt || title}
        className="w-full h-full object-cover"
        loading="lazy"
        unoptimized
        // Fallback for image loading error
        onError={(e) => {
          (e.target as HTMLImageElement).onerror = null;
          (
            e.target as HTMLImageElement
          ).src = `https://placehold.co/800x600/94A3B8/FFFFFF?text=Image+Loading+Failed`;
        }}
      />
    </div>

    {/* Text Section */}
    <div className="md:w-1/2 w-full flex flex-col justify-center p-8 text-gray-800">
      <div className="flex items-center mb-3">
        {/* Render the dynamic Icon Component */}
        <IconComponent className="w-8 h-8 text-yellow-500 mr-3 shrink-0" />
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      <div className="mb-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700">
          {points?.slice(0, 4).map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-yellow-500 mr-2 mt-1">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/services/${id}`}
        className="inline-flex items-center group mt-auto"
      >
        <span
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-sm 
          group-hover:bg-yellow-500 transition-colors inline-flex items-center shadow-md transform hover:scale-[1.02] duration-200"
        >
          View Full Details
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </div>
  </div>
);

// --- Main Services Section Component ---
const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold uppercase tracking-wider">
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Comprehensive Logistics Services
          </h2>
          <div className="h-1.5 w-32 bg-yellow-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
            Providing tailored, end-to-end supply chain management and transport
            solutions for maximum efficiency and reliability.
          </p>
        </div>

        {/* Services Grid/List */}
        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              isReversed={index % 2 !== 0} // Alternate layout for visual appeal
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
