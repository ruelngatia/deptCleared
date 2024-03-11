import React from "react";
import { Banner } from "../componets/Banner";

export default function Accessibility() {
  return (
    <div className=" bg-[#F4F7FF] py-14 lg:py-20 dark:bg-dark ">
      <Banner title="Accessibility" currentPage="Accessibility" />
      <div className="flex-1 px-10 text-body-color dark:text-dark-6">
        <section id="cookie-policy" className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Linking to our website
          </h2>
          <p>
          Debtscleared  is endeavouring to meet all AA accessibility
            checkpoints as defined by the{" "}
            <b> World Wide Web Consortium's (W3C)</b> guidelines and the
            <b> W3C Web Accessibility Initiative</b> (WAI).
            <br />
            This includes:
            <ul className="list-disc ml-6">
              <li>Providing text alternatives for non-text content.</li>
              <li>
                Making content adaptable and available to assistive
                technologies.
              </li>
              <li>
                Ensuring text associated with links makes sense out of context.
              </li>
              <li>Using sufficient contrast to make things easy to see.</li>
              <li>Making all functionality keyboard accessible.</li>
              <li>Making text readable and understandable.</li>
              <li>Helping users avoid and correct mistakes.</li>
              <li>Maximizing compatibility with current technologies.</li>
            </ul>
            Please send any comments to{" "}
            <a
              className="hover:underline text-primary"
              href="support@debtscleared.co.uk"
            >
              support@debtscleared.co.uk
            </a>
            . It would be helpful to include the web address of any pages where
            you have experienced difficulties. The web page can be found in the
            browser address bar at the top of the screen and begins with
            https://
          </p>
        </section>
      </div>
    </div>
  );
}
