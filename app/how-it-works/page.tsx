"use client"

import {
  CheckCircleIcon,
  UserPlusIcon,
  LightBulbIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion"; // Import framer-motion

const steps = [
  {
    title: "Discover",
    description:
      "Find out about our service through our website, social media, or word of mouth.",
    icon: <LightBulbIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Sign Up",
    description:
      "Create an account in just a few simple steps. Fill out your details, and you're ready to go!",
    icon: <UserPlusIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Explore",
    description:
      "Dive into our platform and discover features designed to enhance your experience.",
    icon: <CheckCircleIcon className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Support",
    description:
      "If you have any questions or need assistance, our support team is here to help you.",
    icon: <InformationCircleIcon className="h-6 w-6 text-blue-500" />,
  },
];

const features = [
  {
    title: "Seamless Integration",
    description:
      "Easily integrate our services with your existing systems and workflows.",
    icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
  },
  {
    title: "Data Security",
    description:
      "We prioritize your data security with advanced encryption and protocols.",
    icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is available around the clock to assist you.",
    icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
  },
];

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="text-black py-16 md:py-20 flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to Our Service
        </h1>
        <p className="text-base md:text-lg mb-8 max-w-md text-center">
          Experience seamless, sustainable connectivity with our innovative
          solutions designed for everyone.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        className="container mx-auto py-10 px-5"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 md:p-5 transition-transform transform hover:scale-105"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                {step.icon}
                <h3 className="text-lg font-semibold ml-3">{step.title}</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <h4 className="text-xl font-semibold">Why Choose Us?</h4>
          <p className="text-gray-600">
            User-Friendly | Comprehensive Support | Innovative Solutions
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="bg-gray-100 py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 md:p-6 transition-transform transform hover:scale-105"
                initial="hidden"
                whileInView="visible"
                variants={sectionVariants}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Page;
