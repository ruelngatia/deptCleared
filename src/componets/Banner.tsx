import React from "react";
import { BannerInterface } from "../models/BannerInterface";

export const Banner: React.FC<BannerInterface> = ({
  title,
  currentPage,
}): JSX.Element => {
  return (
    <div className="relative z-10 overflow-hidden pt-[120px] pb-[60px] md:pt-[130px] lg:pt-[140px] dark:bg-dark">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-stroke/0 via-stroke dark:via-dark-3 to-stroke/0"></div>
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                {title}
              </h1>
              <ul className="flex items-center justify-center gap-[10px]">
                <li>
                  <a
                    href="index.html"
                    className="flex items-center gap-[10px] text-base font-medium text-dark dark:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="flex items-center gap-[10px] text-base font-medium text-body-color"
                  >
                    <span className="text-body-color dark:text-dark-6">
                      {" "}
                      /{" "}
                    </span>
                    {currentPage}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
