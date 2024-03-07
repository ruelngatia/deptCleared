import React from "react";
import { PricingCardInterface } from "../models/PricingCardInterface";
import { PricingCard } from "../componets/PricingCard";

export default function PricingSection() {
  const pricing: PricingCardInterface[] = [
    {
      title: "Basic Plan",
      amount: "0.00",
      features: [
        "Basic Debt Query Chatbot Access.",
        "Automated Form Assistance.",
        "Access to Educational Content.",
        "Basic Real-Time Information Updates.",
      ],
      recommended: false,
    },
    {
      title: "Standard Plan",
      amount: "9.99",
      features: [
        "Enhanced Debt Query Chatbot Support.",
        "Advanced Automated Form Assistance.",
        "Comprehensive Educational Resources.",
        "Real-Time Information and Updates.",
        "Personalised User Support."
      ],
      recommended: true,
    },
    {
      title: "Enterprise Tier",
      amount: "19.99",
      features: [
        "Premium 24/7 Chatbot Support.",
        "Intelligent Form Structuring.",
        "In-Depth Educational Materials.",
        "Personalised User Support and Guidance.",
        "Advanced Real-Time Information Delivery.",
        "Access to Legal Terminology Explanations.",
        "Seamless Integration of Forms and Chatbot.",
      ],
      recommended: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Affordable Solutions: Understanding Our Pricing
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Our pricing is designed with affordability in mind, making sure
                that quality debt relief services are accessible to everyone who
                needs them.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {pricing.map((price) => (
            <PricingCard
              amount={price.amount}
              title={price.title}
              recommended={price.recommended}
              features={price.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
