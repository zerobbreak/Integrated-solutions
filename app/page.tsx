"use client";

import Link from "next/link";
import React from "react";
import { mon, rale } from "./fonts/font";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TinyBarChart from "@/components/shared/tinyBarChart";
import {
  WifiIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import NumberTicker from "@/components/ui/number-ticker";
import { FadeText } from "@/components/ui/fade-text";
import { motion } from "framer-motion"; // Import framer-motion

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/assets/hero-2.svg')", // Replace with the actual image path
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 ">
            Synchronised Connectivity, Seamless Engagement
          </h1>

          <div className="space-x-4 mt-6">
            <Link href="#join" passHref>
              <Button className={`${rale.className} ${mon.className} p-6 bg-brandPrimary hover:bg-brandPrimary-dark`}>
                Get Connected
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Sections */}
      <motion.section
        className="py-10 md:py-20 bg-white text-center"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }} // Animates only once when in view
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
          Seamless Connectivity. Sustainable Growth.
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-8 md:mb-12">
          Synconex is transforming the travel experience with sustainable,
          Wi-Fi-enabled connectivity. Our goal is to enhance commuter journeys,
          empower advertisers with data-driven insights, and foster
          collaboration with bus operators.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
          {/* Connectivity Section */}
          <motion.div
            className="w-full md:w-1/3 px-4"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            <WifiIcon className="w-16 h-16 text-gold mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4">
              Seamless Connectivity
            </h3>
            <FadeText
              className="text-sm md:text-md text-gray-600 mt-2"
              direction="left"
              framerProps={{
                show: { transition: { delay: 0.5 } },
              }}
              text="Our advanced Wi-Fi solutions ensure commuters stay connected
        during long journeys, offering reliable and fast internet access
        across bus routes."
            />
          </motion.div>

          {/* Data Insights Section */}
          <motion.div
            className="w-full md:w-1/3 px-4"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            <ChartBarIcon className="w-16 h-16 text-gold mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4">
              Data-Driven Insights
            </h3>
            <FadeText
              className="text-sm md:text-md text-gray-600 mt-2"
              direction="left"
              framerProps={{
                show: { transition: { delay: 0.5 } },
              }}
              text="Through real-time data analytics, advertisers and partners gain
        insights into commuter behavior, offering targeted marketing
        opportunities for enhanced engagement."
            />
          </motion.div>

          {/* Collaboration Section */}
          <motion.div
            className="w-full md:w-1/3 px-4"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true }}
          >
            <UserGroupIcon className="w-16 h-16 text-gold mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4">
              Collaboration
            </h3>
            <FadeText
              className="text-sm md:text-md text-gray-600 mt-2"
              direction="left"
              framerProps={{
                show: { transition: { delay: 0.5 } },
              }}
              text="We foster seamless partnerships with bus operators to deliver
        integrated, user-centric solutions that enhance the overall
        commuter experience."
            />
          </motion.div>
        </div>

        {/* Statistics Section - Hidden on mobile */}
        <motion.div
          className="hidden md:flex justify-around mt-8 md:mt-12"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6 md:mb-0">
            <p className="text-2xl md:text-3xl font-bold">
              <NumberTicker value={5000000} />
              <span>+</span>
            </p>
            <p className="text-gray-600">Connected Commuters</p>
          </div>
          <div className="text-center mb-6 md:mb-0">
            <p className="text-2xl md:text-3xl font-bold">
              <NumberTicker value={1000} />
              <span>+</span>
            </p>
            <p className="text-gray-600">Partnered Bus Routes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold">
              <NumberTicker value={5000} />
              <span>+</span>
            </p>
            <p className="text-gray-600">Campaigns Run</p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="advertisers"
        className="py-10 md:py-20"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
          {/* Left: Bar Chart */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
            <div className="flex items-center justify-center h-full">
              <TinyBarChart />
            </div>
          </div>

          {/* Right: Advertiser Info */}
          <div className="w-full lg:w-1/2 text-left lg:pl-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Advertiser Benefits
            </h2>
            <p className="text-md md:text-lg text-gray-600 mb-6">
              Reach a captive audience of engaged commuters with dynamic,
              real-time ads.
            </p>
            <ul className="list-disc list-inside text-sm md:text-md text-gray-600">
              <li className="mb-2">
                Targeted advertising for higher engagement
              </li>
              <li className="mb-2">Real-time campaign performance tracking</li>
              <li className="mb-2">
                Access to exclusive commuter demographics
              </li>
              <li className="mb-2">
                Flexible, location-based ad opportunities
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="vision"
        className="py-20 flex flex-col lg:flex-row items-center justify-between px-8"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        {/* Left: Vision Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <Image
            src="/assets/hero-image.jpeg"
            width={500}
            height={500}
            alt="Synconex Vision"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Vision Content */}
        <div className="lg:w-1/2 text-left lg:pl-12">
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600 mb-6">
            At Synconex, we envision a future where every journey is connected,
            sustainable, and enriching. Our commitment to providing seamless,
            Wi-Fi-enabled experiences will revolutionize travel, empowering
            commuters and advertisers alike.
          </p>
          <Link href="#join" passHref>
            <Button className={`${rale.className} ${mon.className} p-6 bg-brandPrimary hover:bg-brandPrimary-dark`}>
              Join Us
            </Button>
          </Link>
        </div>
      </motion.section>
    </>
  );
}
