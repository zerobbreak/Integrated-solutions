"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UsersIcon,
  BanknotesIcon,
  ChartBarIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const page = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Bus Operators Love Our WiFi
          </h2>
          <p className="text-lg mb-12 text-gray-600">
            Our WiFi solutions offer numerous benefits that enhance the overall
            experience for both operators and passengers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* Increased Customer Satisfaction */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <UsersIcon className="h-16 w-16 text-blue-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Increased Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Providing free WiFi keeps passengers entertained and satisfied
                during their journeys.
              </p>
            </motion.div>

            {/* Potential Revenue Streams from Ads */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BanknotesIcon className="h-16 w-16 text-green-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Potential Revenue Streams
              </h3>
              <p className="text-gray-600">
                Generate additional income through targeted advertising on the
                WiFi login page and throughout the service.
              </p>
            </motion.div>

            {/* Enhanced Operational Insights */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ChartBarIcon className="h-16 w-16 text-purple-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Enhanced Operational Insights
              </h3>
              <p className="text-gray-600">
                Analyze passenger data to improve services and operational
                efficiency.
              </p>
            </motion.div>

            {/* Unique Marketing Opportunities */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <LightBulbIcon className="h-16 w-16 text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Unique Marketing Opportunities
              </h3>
              <p className="text-gray-600">
                Leverage WiFi to promote special offers and services directly to
                passengers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-8 sm:py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            What Operators Are Saying
          </h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-12 text-gray-600">
            Hear directly from bus operators who have seen the benefits of our
            WiFi service.
          </p>

          {/* Testimonial Blocks */}
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-8 justify-center">
            <motion.div
              className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-base sm:text-lg text-gray-700 italic mb-4">
                "The WiFi has transformed the travel experience for our
                passengers. They love it!"
              </p>
              <p className="font-bold text-blue-600">- Lisa, Bus Operator</p>
            </motion.div>

            <motion.div
              className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-base sm:text-lg text-gray-700 italic mb-4">
                "Adding WiFi has allowed us to increase our revenue through
                advertising!"
              </p>
              <p className="font-bold text-blue-600">- Mark, Transit Manager</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Getting Started is Easy!</h2>
          <p className="text-lg mb-12 text-gray-600">
            Join us in enhancing the passenger experience. Here’s how to get
            started:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <StarIcon className="h-16 w-16 text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Reach out to our team for a personalized consultation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StarIcon className="h-16 w-16 text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Setup & Installation
              </h3>
              <p className="text-gray-600">
                Our experts will guide you through the installation process.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StarIcon className="h-16 w-16 text-yellow-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Launch & Enjoy</h3>
              <p className="text-gray-600">
                Start offering free WiFi to your passengers and watch
                satisfaction soar!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
