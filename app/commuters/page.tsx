"use client"

import {
  ChatBubbleOvalLeftEllipsisIcon,
  SignalIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Testimonials data remains unchanged
const testimonials = [
  {
    name: "Jane Doe",
    message:
      "The free WiFi made my long commute much more enjoyable! I was able to stay productive and connected without any interruptions.",
    location: "New York City",
  },
  {
    name: "John Smith",
    message:
      "Super fast WiFi! I stream music and catch up on emails without any problems. It's an awesome feature for frequent travelers.",
    location: "San Francisco",
  },
  {
    name: "Emily Johnson",
    message:
      "As someone who often travels for work, the WiFi on the bus has been a game-changer. It’s reliable and makes my commute fly by!",
    location: "Chicago",
  },
];

const page = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Hero Section */}
      <section className="text-black text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Fast, Free WiFi for Commuters
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Stay connected on the go! Enjoy seamless, fast, and reliable internet
          connectivity on your commute.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto py-16 px-5">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why You'll Love Our WiFi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <SignalIcon className="h-10 w-10 text-blue-500 mx-auto mb-4" />,
              title: "Fast Connection",
              description:
                "Stream, browse, and stay productive with high-speed WiFi designed for commuters.",
            },
            {
              icon: <DevicePhoneMobileIcon className="h-10 w-10 text-green-500 mx-auto mb-4" />,
              title: "Mobile-Friendly",
              description:
                "Connect easily with your smartphone, tablet, or laptop — no complicated setup required.",
            },
            {
              icon: <ChatBubbleOvalLeftEllipsisIcon className="h-10 w-10 text-purple-500 mx-auto mb-4" />,
              title: "Stay Connected",
              description:
                "Whether it's for work, social media, or entertainment, you can stay connected throughout your journey.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }} // Initial position
              animate={{ opacity: 1, y: 0 }}   // Final position
              exit={{ opacity: 0, y: 20 }}      // Exit animation
              transition={{ duration: 0.5 }}     // Transition settings
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Commuters Say</h2>
          <motion.div
            className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
            key={currentTestimonial}
          >
            <p className="text-lg text-gray-700 mb-4 italic">
              "{testimonials[currentTestimonial].message}"
            </p>
            <p className="font-bold text-blue-600">
              {testimonials[currentTestimonial].name}
            </p>
            <p className="text-gray-500">
              {testimonials[currentTestimonial].location}
            </p>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={handlePrevTestimonial}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={handleNextTestimonial}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
