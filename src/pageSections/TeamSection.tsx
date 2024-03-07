import React from "react";
import { TeamMemberInterface } from "../models/TeamMemberInterface";
import memberPhoto from "../assets/team/said.jpg";
import memberPhotoone from "../assets/team/user-one.jpg";
import memberPhototwo from "../assets/team/user-six.jpg";
import memberPhotothree from "../assets/team/user-seven.jpg";
import { TeamMemberCard } from "../componets/TeamMemberCard";

export default function TeamSection() {
  const teamMemebers: TeamMemberInterface[] = [
    {
      image: memberPhoto,
      title: "Saidi Mustapha, CEO and Founder",
      description:
        " With extensive experience in financial technology, Saidi Mustapha leads DebtsCleared with a vision to make debt relief accessible and efficient for everyone. His expertise drives the company's innovation and user-focused approach.",
    },
    {
      image: memberPhotoone,
      title: "Emily Smith, Chief Technology Officer",
      description:
        "Emily Smith spearheads the technological advancements at DebtsCleared. Her leadership in developing the intelligent form structuring and chatbot integration has been pivotal in enhancing user experience.",
    },
    {
      image: memberPhototwo,
      title: "David Johnson, Chief Financial Officer",
      description: `David Johnson manages the financial strategies of DebtsCleared, ensuring sustainable growth and affordability of services. His insights are crucial in shaping the company's pricing models and financial planning.`,
    },
    {
      image: memberPhotothree,
      title: "Laura Brown, Head of Customer Support",
      description:
        "Laura Brown leads the customer support team at DebtsCleared, focusing on providing exceptional service and support. Her dedication to user satisfaction is reflected in the comprehensive and empathetic assistance offered.",
    },
  ];

  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[486px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our management team combines strategic, technical, operational,
                marketing, financial, and security expertise
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMemebers.map((member) => (
            <TeamMemberCard
              image={member.image}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
