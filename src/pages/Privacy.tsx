import React from "react";
import { Banner } from "../componets/Banner";

export default function Privacy() {
  return (
    <div>
      <div className="flex-1 px-10 text-body-color dark:text-dark-6 mb-8">
        <Banner currentPage="Privacy policy" title="Privacy policy" />
        <section id="cookie-policy" className="">
          <h2 className="text-2xl font-semibold mb-4">
            Linking to our website
          </h2>
          <p>
            Debtscleared  ("we", “us”) is committed to protecting and
            respecting your privacy. This notice is made available to you on our
            homepage and on every other page of{" "}
            <a
              className="hover:underline text-primary"
              href="https://debtscleared.co.uk/"
            >
              debtscleared.co.uk
            </a>{" "}
            (our site). This notice (together with our Terms of Website Use and
            any other documents referred to in it) sets out the basis on which
            any personal data we collect from you or that you provide to us, via
            our site, will be processed by us. Please read the following
            carefully to understand our views and practices regarding your
            personal data and how we will treat it. For the purpose of
            applicable data protection law, the data controller is Debtscleared 
             Ltd of 4 Durham Workspace, Abbey Road, Pity Me, Durham DH1
            5JZ.
          </p>
        </section>
      </div>
    </div>
  );
}
