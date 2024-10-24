"use client";

import {
  CircleStackIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  StarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Data Collection",
    description:
      "Collect valuable data from users accessing WiFi. This includes demographics, browsing behavior, and more, which can be used to optimize marketing strategies.",
    icon: <CircleStackIcon className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Customer Engagement",
    description:
      "Engage customers through personalized content and notifications when they connect to WiFi, increasing interaction with your brand.",
    icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Location-based Targeting",
    description:
      "Use location data to deliver relevant, geo-targeted advertisements. Target customers based on their proximity to specific locations or events.",
    icon: <MapPinIcon className="h-8 w-8 text-red-600" />,
  },
];

const caseStudies = [
  {
    title: "Retail Chain Success",
    description:
      "A major retail chain saw a 20% increase in sales through targeted WiFi marketing, driving in-store promotions and increasing foot traffic.",
    roi: "20% Sales Increase",
  },
  {
    title: "Event-based Targeting",
    description:
      "At a large conference, WiFi marketing was used to deliver personalized messages, leading to a 15% engagement boost with event sponsors.",
    roi: "15% Engagement Boost",
  },
];

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "WiFi marketing helped us target customers directly within our stores. We saw a huge increase in sales, and the data insights were invaluable.",
    role: "Marketing Director, RetailCo",
  },
  {
    name: "Jane Smith",
    feedback:
      "We used location-based targeting at our event and saw higher engagement from attendees. This was a game-changer for our sponsors.",
    role: "Event Coordinator, EventX",
  },
];

export default function Advertisers() {
  const controls = useAnimation();
  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: caseStudiesRef, inView: caseStudiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: pricingRef, inView: pricingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (benefitsInView) controls.start("visible");
    if (caseStudiesInView) controls.start("visible");
    if (testimonialsInView) controls.start("visible");
    if (pricingInView) controls.start("visible");
  }, [
    controls,
    benefitsInView,
    caseStudiesInView,
    testimonialsInView,
    pricingInView,
  ]);

  return (
    <div className="container mx-auto py-16 px-4">
      {/* Introduction */}
      <section className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Advertise with WiFi Marketing
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          WiFi marketing allows advertisers to engage with their audience in
          real-time, providing targeted, data-driven campaigns that deliver
          results.
        </p>
      </section>

      {/* Key Benefits */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="flex justify-center mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Case Studies */}
      <motion.section
        ref={caseStudiesRef}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
        className="mt-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Success Stories
        </h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-lg shadow-md p-6"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-4">
                {study.title}
              </h4>
              <p className="text-gray-600 mb-4">{study.description}</p>
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium">
                {study.roi}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
        className="mt-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          What Our Clients Say
        </h3>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <h4 className="text-xl font-semibold text-blue-600 mb-4">
                {testimonial.name}
              </h4>
              <p className="text-gray-600 italic mb-4">
                "{testimonial.feedback}"
              </p>
              <p className="text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        ref={pricingRef}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
        className="mt-16 py-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Pricing
        </h3>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600">Basic Plan</CardTitle>
                <CardDescription className="text-3xl font-semibold">
                  $99/month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>Up to 10 Locations</li>
                  <li>Email Support</li>
                  <li>Basic Analytics</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 text-white w-full hover:bg-blue-700">
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-green-600">Pro Plan</CardTitle>
                <CardDescription className="text-3xl font-semibold">
                  $199/month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>Up to 50 Locations</li>
                  <li>Priority Support</li>
                  <li>Advanced Analytics</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-green-600 text-white w-full hover:bg-green-700">
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-red-600">Enterprise Plan</CardTitle>
                <CardDescription className="text-3xl font-semibold">
                  Custom Pricing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>Unlimited Locations</li>
                  <li>Dedicated Support</li>
                  <li>Full Analytics</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-red-600 text-white w-full hover:bg-red-700">
                  Contact Us
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
