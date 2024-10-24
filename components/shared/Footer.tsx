import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="container mx-auto px-4 flex justify-between">
          {/* Legal Links */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-300">Legal</h3>
            <ul>
              <li>
                <Link href="/privacy-policy" passHref>
                  <p className="hover:text-white">Privacy Policy</p>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" passHref>
                  <p className="hover:text-white">Terms of Service</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-300">Contact Us</h3>
            <ul>
              <li>
                Email:{" "}
                <Link
                  href="mailto:info@synconex.com"
                  className="hover:text-white"
                >
                  info@synconex.com
                </Link>
              </li>
              <li>
                Phone:{" "}
                <Link href="tel:+1234567890" className="hover:text-white">
                  +1 (234) 567-890
                </Link>
              </li>
              <li>Address: 123 Synconex St, City, Country</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
