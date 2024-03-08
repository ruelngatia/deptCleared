import React from "react";
import { FeatureCardInterface } from "../models/FeatureCardInterface";
import frame from "../assets/svg/frame.svg";
import layers from "../assets/svg/layers.svg";
import present from "../assets/svg/present.svg";
import window from "../assets/svg/window.svg";
import { FeatureCard } from "../componets/FeatureCard";

export default function FeaturesSection() {
  const features: FeatureCardInterface[] = [
    {
      svg: layers,
      title: "Intelligent Form Structuring for Error-Free",
      content:
        "Our Intelligent Form Structuring ensures your applications are accurate and processed quickly, minimising errors and delays.",
    },
    {
      svg: frame,
      title: "24/7 Debt Query Chatbot for Instant, Real-Time Assistance",
      content:
        "Access our Debt Query Chatbot anytime for immediate answers to your questions, enhancing the efficiency of your application process."
    },
    {
      svg: present,
      title: "Comprehensive User Support with Detailed, Step-by-Step Guidance",
      content:
        "Receive thorough guidance with our comprehensive support, walking you through each step of the debt relief application.",
    },
    {
      svg: window,
      title: "Educational Resources for Empowered, Informed Decision-Making",
      content:
        "Gain crucial insights with our educational resources, equipping you with the knowledge for smart, confident decisions in debt management.",
    },
  ];

  return (
    <section
      id="features"
      className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[650px] text-center lg:mb-[70px]">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Features
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Streamlining Your Debt Application
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
              Our intelligent form structuring reduces errors and expedites the application process, ensuring precision and efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {features.map((feature) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/4 rounded-lg shadow-2">
              <FeatureCard
                svg={feature.svg}
                title={feature.title}
                content={feature.content}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
