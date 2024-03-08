import React from "react";
import { Banner } from "../componets/Banner";

export default function CookiePolicy() {
  return (
    <div className="flex-1 px-10 text-body-color dark:text-dark-6">
      <Banner title="Cookie policy" currentPage="cookie policy" />
      <section id="cookie-policy" className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Cookie policy</h2>
        <p>
          Cookies are small text files that are placed on your computer by
          websites that you visit. They are widely used in order to make
          websites work, or work more efficiently, as well as to provide
          information to the owners of the site. Our aim in using Cookies is to
          be able to make the site better for you.
          <br />
          The cookies may identify the following information when you use our
          website:
          <ul className="list-disc ml-6">
            <li>
              Technical information, including the Internet protocol (IP)
              address used to connect your computer to the Internet, your login
              information, browser type and version, time zone setting, browser
              plug-in types and versions, operating system type, version and
              platform, device type, version or serial number, screen
              resolution, and number of CPU cores;
            </li>
            <li>
              Information about your visit, including the full Uniform Resource
              Locators (URL) clickstream to, through and from our site
              (including date and time stamps).
            </li>
            <li>Products you viewed or searched for;</li>
            <li>
              Page response times, download errors, length of visits to certain
              pages, page interaction information (such as scrolling, clicks,
              and mouse-overs);
            </li>
            <li>
              Methods used to browse away from the page and any phone number
              used to call our customer service number.
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
}
