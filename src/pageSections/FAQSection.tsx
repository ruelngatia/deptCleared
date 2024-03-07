import React from "react";
import grid from "../assets/svg/grid.svg";
import { FAQInterface } from "../models/FAQInterface";
import { FAQCard } from "../componets/FAQCard";

export default function FAQSection() {
  const questions: FAQInterface[] = [
    {
      question: "How does DebtsCleared help with debt relief?",
      answer: `DebtsCleared offers automated form assistance, a 24/7 chatbot for instant query resolution, and educational content to help you navigate the debt relief process efficiently.`,
    },
    {
      question: "Is DebtsCleared free to use?",
      answer:
        "We offer a Free Access tier with basic features. For more advanced support, our Standard and Premium tiers are available at affordable monthly rates.",
    },
    {
      question: "Can DebtsCleared help me understand complex legal terms?",
      answer:
        "Yes, we provide educational content that includes explanations of legal terminology to help you better understand the debt relief process.",
    },
    {
      question: "How does the Debt Query Chatbot work?",
      answer: `Our chatbot offers real-time assistance for your debt-related queries, available 24/7 to provide instant support and information.`,
    },
    {
      question: " What makes DebtsCleared different from other debt relief services?",
      answer:
        "Our focus on user empowerment, innovative technology, and personalised support sets us apart, making the debt relief process more accessible and efficient.",
    },
    {
      question: "Can I access DebtsCleared on my mobile device?",
      answer:
        "We offer a range of support options including a responsive chatbot, personalised guidance, and comprehensive educational resources to assist you throughout your debt relief journey.",
    },
  ];

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                {/* Making the Most of Your InsightAI Experience: */}
              </h2>
              <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                {/* Get tips on how to effectively use InsightAI to enhance your
                job-seeking or recruitment process. */}
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 grid grid-cols-1 md:grid-cols-2">
          {questions.map((question) => (
            <FAQCard question={question.question} answer={question.answer} />
          ))}
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <img src={grid} alt="start" />
        </span>
        <img src={grid} alt="end" />
      </div>
    </section>
  );
}
