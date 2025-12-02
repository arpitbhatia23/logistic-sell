"use client";

import React, { useEffect, useState } from "react";
// Use Link from next/link for client-side navigation
import Link from "next/link";
// Using lucide-react for the icons
import {
  ArrowLeft,
  Check,
  Truck,
  Warehouse,
  Box,
  Wrench,
  Zap,
} from "lucide-react";

import safety from "../assets/matainece.webp";
import Dispatch from "../assets/dispacth.webp";
import Freight from "../assets/brokrege.webp";
import warehouse from "../assets/warehouse.webp";
import container from "../assets/containers.webp";
import intermodal from "../assets/intermodal.webp";
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

// --- Service Data (using placeholder images and lucide icons) ---

const services: Service[] = [
  {
    id: "safety-maintenance",
    title: "Safety & Maintenance Services",
    subtitle: "Keeping Your Fleet Compliant, Road-Ready & Risk-Free",
    description:
      "We provide 24/7 safety and preventive maintenance to help fleets minimize downtime, avoid fines, and maintain peak vehicle performance.",
    points: [
      "Preventive maintenance (brakes, tires, filters, fluids, etc.)",
      "DOT compliance inspections & CSA readiness",
      "24/7 roadside assistance & towing",
      "Reefer unit maintenance and diagnostics",
      "Trailer & chassis repairs",
      "Maintenance record management",
      "Fully FMCSA & DOT compliant",
      "Emergency and scheduled services available",
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
      "Route planning, fuel optimization, and HOS management",
      "Multilingual support and professional dispatchers",
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
      "Damage claims management and resolution",
      "Customized freight solutions for all industries",
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
      "Conveniently located near major ports and highways",
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
      "Port pickups & delivery for dry and reefer containers",
      "FCL and LCL drayage",
      "Chassis provision & heavy-load handling",
      "Detention, demurrage & customs clearance support",
      "Bonded drayage available",
      "We simplify the complex port logistics process",
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
      "A smarter, greener way to ship freight long-distance",
    ],
    image: intermodal,
    alt: "Intermodal transport",
    icon: Truck,
  },
];

// --- Main Component ---

interface ServiceDetailProps {
  slug: any; // Expect the slug to be passed as a prop
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug }) => {
  // State for the service ID, loaded service, loading status, and related services
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedServices, setRelatedServices] = useState<Service[]>([]);

  useEffect(() => {
    // 1. Extract serviceId from the URL (simulating Next.js dynamic routing in a client component)
    // In a real Next.js app, this would typically come from `params` in the server component wrapper.
    const currentServiceId = slug;
    console.log(currentServiceId);
    setServiceId(currentServiceId || null);

    // 2. Find the service
    const foundService = services.find((s) => s.id === currentServiceId);
    setService(foundService || null);

    // 3. Get 3 related services (excluding current one)
    if (foundService) {
      const related = services
        .filter((s) => s.id !== currentServiceId)
        .slice(0, 3);
      setRelatedServices(related);
    } else {
      setRelatedServices([]);
    }

    setLoading(false);

    // Scroll to top when service changes
    window.scrollTo(0, 0);
  }, [serviceId]); // Rerun if serviceId changes (e.g., in a real app with proper routing)

  // --- Loading State ---
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-neutral-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-400"></div>
      </div>
    );
  }

  // --- Service Not Found (404) State ---
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-32 text-center min-h-screen bg-white rounded-xl shadow-2xl mt-10">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          404 - Service Not Found
        </h1>
        <p className="mb-8 text-lg text-gray-700">
          The service you're looking for does not exist on our list.
        </p>
        <Link
          href="/services" // Adjusted Link target for a typical services page path
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors shadow-lg"
        >
          <ArrowLeft className="inline w-5 h-5 mr-2" /> Back to All Services
        </Link>
      </div>
    );
  }

  // --- Service Detail View ---
  const ServiceIcon = service.icon; // Component alias for dynamic icon rendering

  return (
    <div className="bg-neutral-100 min-h-screen pt-12 pb-12">
      {/* Hero Section */}
      <div className="bg-white text-gray-900 shadow-xl rounded-b-xl">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
          {/* Back Button */}
          <Link
            href="/services" // Adjusted Link target for a typical services page path
            className="inline-flex items-center mb-8 text-base font-semibold text-yellow-300 hover:text-yellow-500 transition-colors gap-2 group"
          >
            <ArrowLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" />{" "}
            Back to Services
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              {/* Dynamic Icon in Header */}
              <ServiceIcon
                className="w-12 h-12 text-yellow-500 mb-4"
                aria-hidden="true"
              />

              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                {service.title}
              </h1>
              <div className="h-1.5 w-24 bg-yellow-400 rounded-full mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-6 italic">
                {service.subtitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Request Service CTA */}
              <Link
                href="/contact"
                className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-700 transition-colors shadow-lg transform hover:scale-[1.02] duration-300"
              >
                Request Service
              </Link>
            </div>

            {/* Image */}
            <div className="hidden md:block">
              <Image
                src={service.image}
                alt={service.alt}
                height={400}
                width={400}
                className="w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-yellow-100"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Details & Benefits */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
            Key Benefits & Offerings
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {service.points.map((point, index) => (
              <div
                key={index}
                className="flex items-start p-3 bg-yellow-50 rounded-lg shadow-sm"
              >
                <span className="mr-3 shrink-0 mt-1 text-green-600">
                  <Check className="w-5 h-5" />
                </span>
                <span className="text-gray-700 text-base leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Our {service.title}
            </h3>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-yellow-400 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <h4 className="text-xl font-bold mb-3 text-white">
                  Experience & Expertise
                </h4>
                <p className="text-white">
                  Our team brings years of specialized experience in{" "}
                  {service.title.toLowerCase()}, ensuring top-quality service
                  delivery and compliance.
                </p>
              </div>

              <div className="bg-yellow-400 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <h4 className="text-xl font-bold mb-3 text-yellow-400">
                  Tailored Solutions
                </h4>
                <p className="text-white">
                  We customize our approach to meet your specific needs,
                  building strategies that optimize your unique logistics chain.
                </p>
              </div>

              <div className="bg-yellow-400 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <h4 className="text-xl font-bold mb-3 text-yellow-400">
                  24/7 Support
                </h4>
                <p className="text-white">
                  Our commitment to your success means we're available around
                  the clock, providing continuous support and problem
                  resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-black text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Optimize Your Logistics?
          </h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-yellow-200">
            Get in touch with our **{service.title}** specialists today and
            discover how we can help streamline your operations and maximize
            efficiency.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-white px-10 py-4 rounded-full font-extrabold text-xl hover:bg-yellow-500 transition-colors shadow-2xl transform hover:scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">
            You Might Also Need...
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((related) => (
              <Link
                key={related.id}
                href={`/services/${related.id}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow h-full flex flex-col">
                  {/* Image/Icon Header */}
                  <div className="w-full h-32 bg-yellow-400 flex items-center justify-center p-4">
                    <related.icon
                      className="w-16 h-16 text-white"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <h4 className="text-xl text-gray-600 font-semibold mb-2 group-hover:text-yellow-600 transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 grow">
                      {related.description}
                    </p>
                    <span className="text-yellow-300 hover:text-yellow-400 font-medium inline-flex items-center mt-auto">
                      Explore Service{" "}
                      <span className="ml-1 group-hover:ml-2 transition-all">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
