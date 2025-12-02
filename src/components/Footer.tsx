// components/Footer.tsx

import React from "react";
import Link from "next/link";
// Import only the used icons
import { FaAngleRight, FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { LiaLinkedinIn } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
// Assuming logo is imported from '@/assets/logo3.avif' in a real Next.js setup
// Since 'logo' is used as a string path in the original code, we'll keep the import for context
// and assume it resolves correctly in the Next.js build process.
import logo from "../assets/logo.png";

// --- TypeScript Interfaces ---

interface LinkItem {
  name: string;
  link: string;
}

// --- Component Definition ---

// Define the component using React.FC (Functional Component)
export default function Footer(): React.ReactElement {
  // Explicitly type the arrays
  const Quicllinks: LinkItem[] = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Testimonials", link: "/testimonial" },
    { name: "Blog", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  const services: LinkItem[] = [
    { name: "Safety & Maintenance Services", link: "safety-maintenance" },
    { name: "Dispatch Services", link: "dispatch" },
    { name: "Freight Brokerage Services", link: "freight-brokerage" },
    { name: "Warehousing Solutions", link: "warehousing" },
    { name: "Container & Drayage Services", link: "container-drayage" },
    { name: "Intermodal Logistics", link: "intermodal" },
  ];

  // Use React.Fragment shorthand <></> for the return
  return (
    <>
      <footer className="px-4 md:px-12 py-12 bg-black text-white border-t-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 lg:gap-8 justify-start ">
          {/* Company Info */}
          <div className="flex flex-col justify-center items-start gap-4 p-4">
            <Image
              src={logo.src || logo}
              width={500} // Use logo.src if using Next/Image static import, otherwise just logo
              height={500}
              alt="brand logo"
              className="h-28 md:h-32 w-auto object-contain"
              loading="lazy"
              // Consider using Next.js <Image> component for optimized image handling
            />

            <p className="text-sm text-gray-300">
              Your trusted partner in complete logistics, transportation, and
              fleet management services across North America since 2016.{" "}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 items-center mt-2">
              <a
                href="#" // Replace '#' with actual WhatsApp link
                className="hover:text-yellow-500 transition duration-300"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="#" // Replace '#' with actual LinkedIn link
                className="hover:text-yellow-500 transition duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-4">
            <h3 className="text-xl font-bold mb-6 text-yellow-500">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {Quicllinks.map(({ name, link }: LinkItem, index: number) => (
                <li key={index}>
                  <Link
                    href={link}
                    className="hover:text-yellow-500 transition duration-300 flex items-center gap-2 text-gray-300"
                    aria-label={`Go to ${name} page`}
                  >
                    <FaAngleRight className="text-yellow-500" /> {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="p-4">
            <h3 className="text-xl font-bold mb-6 text-yellow-500">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map(({ name, link }: LinkItem, index: number) => (
                <li key={index}>
                  <Link
                    href={`/services/${link}`}
                    className="hover:text-yellow-500 transition duration-300 flex items-center gap-2 text-gray-300"
                    aria-label={`Learn more about ${name}`}
                  >
                    <FaAngleRight className="text-yellow-500" /> {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="p-4">
            <h3 className="text-xl font-bold mb-6 text-yellow-500">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <FaPhone size={20} className="text-yellow-400 shrink-0" />
                <a
                  href="tel:+918580466164"
                  title="Call +91 85804-66164"
                  aria-label="Call us at +91 85804-66164"
                  className="hover:text-yellow-500"
                >
                  +91 xxxxx-xxxxx
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MdOutlineEmail
                  size={22}
                  className="text-yellow-400 shrink-0"
                />
                <a
                  href="mailto:Rahulwalia@gmail.com"
                  title="Email Rahulwalia@gmail.com"
                  aria-label="Email Rahulwalia@gmail.com"
                  className="hover:text-yellow-500"
                >
                  xxxxxxx@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <CiLocationOn
                  size={25}
                  className="text-yellow-400 shrink-0 mt-1"
                />
                <span className="pt-1">North America</span>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 flex gap-3 items-start text-gray-300">
              <IoIosTime size={25} className="text-yellow-400 shrink-0 mt-1" />
              <ul className="text-sm">
                <li> Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 3:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} The Walia Group of Company. All
            rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
