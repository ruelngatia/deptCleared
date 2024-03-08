import React from "react";
import star from "../assets/svg/star.svg";
import { TestimonialInterface } from "../models/TestimonialInterface";

export const TestiomnialCard: React.FC<TestimonialInterface> = ({
  description,
  image,
  name,
  role,
  stars,
}): JSX.Element => {
  return (
    <div className="rounded-xl bg-white px-4 py-[30px] shadow-testimonial dark:bg-dark sm:px-[30px]">
      <div className="mb-[18px] flex items-center gap-[2px]">
        {
            [...Array(star)].map(()=> <img src={star} alt="star icon" />)
        }
      </div>

      <p className="mb-6 text-base text-body-color dark:text-dark-6">
        “{description}’’
      </p>

      <a href="#" className="flex items-center gap-4">
        <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
          <img
            src="./assets/images/testimonials/author-01.jpg"
            alt="author"
            className="h-[50px] w-[50px] overflow-hidden rounded-full"
          />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-dark dark:text-white">
            {name}
          </h3>
          <p className="text-xs text-body-secondary">{role}</p>
        </div>
      </a>
    </div>
  );
};
