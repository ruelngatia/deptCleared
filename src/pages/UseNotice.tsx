import React from "react";
import { Banner } from "../componets/Banner";

export default function UseNotice() {
  return (
    <div className="flex-1 px-10 text-body-color dark:text-dark-6 mb-8">
      <Banner currentPage="user notice" title="Use notice" />
      <section id="terms-of-use text-body-color dark:text-dark-6">
        <p>
          This acceptable use notice sets out the terms between you and us under
          which you may access our website{" "}
          <a
            className="hover:underline text-primary"
            href="https://debtscleared.co.uk/"
          >
            debtscleared.co.uk
          </a>{" "}
          (our site). This acceptable use notice applies to all users of, and
          visitors to, our site. Your use of our site means that you accept, and
          agree to abide by, all the terms and notices in this acceptable use
          notice, which supplement our terms of website use.
          <a
            className="hover:underline text-primary"
            href="https://debtscleared.co.uk/"
          >
            debtscleared.co.uk
          </a>{" "}
          is a site operated by Debtscleared Limited (we or us). We are
          registered in England and Wales under company number 15398624 and we
          have our registered office at 4 Durham Workspace, Abbey Road, Pity Me,
          Durham DH1 5JZ.
        </p>
      </section>

      <section id="terms-of-use text-body-color dark:text-dark-6">
        <h2 className="text-2xl font-semibold mb-4">Prohibited uses</h2>
        <div>
          You may use our site only for lawful purposes. You may not use our
          site:
          <ul className="list-disc ml-6">
            <li>
              In any way that breaches any applicable local, national, or
              international law or regulation.
            </li>
            <li>
              In any way that is unlawful or fraudulent or has any unlawful or
              fraudulent purpose or effect.
            </li>
            <li>
              For the purpose of harming or attempting to harm minors in any
              way.
            </li>
            <li>
              To send, knowingly receive, upload, download, use, or re-use any
              material which does not comply with our content standards (see
              below).
            </li>
            <li>
              To transmit, or procure the sending of, any unsolicited or
              unauthorized advertising or promotional material or any other form
              of similar solicitation (spam).
            </li>
            <li>
              To knowingly transmit any data, send or upload any material that
              contains viruses, Trojan horses, worms, time-bombs, keystroke
              loggers, spyware, adware, or any other harmful programs or similar
              computer code designed to adversely affect the operation of any
              computer software or hardware.
            </li>
          </ul>
          You also agree:
          <ul className="list-disc ml-6">
            <li>
              Not to reproduce, duplicate, copy, or re-sell any part of our site
              in contravention of the provisions of our terms of website use.
            </li>
            <li>
              Not to access without authority, interfere with, damage, or
              disrupt:
              <ul className="list-disc ml-6">
                <li>Any part of our site;</li>
                <li>Any equipment or network on which our site is stored;</li>
                <li>Any software used in the provision of our site; or</li>
                <li>
                  Any equipment, network, or software owned or used by any
                  third-party.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section id="terms-of-use text-body-color dark:text-dark-6">
        <h2 className="text-2xl font-semibold mb-4">Interactive services</h2>
        <div>
          We may from time to time provide interactive services on our site,
          including, without limitation:
          <ul>
            <li>Chat rooms.</li>
            <li>Bulletin boards.</li>
            <li>Comments</li>
          </ul>
          Where we do provide any interactive service, we will provide clear
          information to you about the kind of service offered, if it is
          moderated and what form of moderation is used (including whether it is
          human or technical). We will do our best to assess any possible risks
          for users (and in particular, for children) from third parties when
          they use any interactive service provided on our site, and we will
          decide in each case whether it is appropriate to use moderation of the
          relevant service (including what kind of moderation to use) in the
          light of those risks. However, we are under no obligation to oversee,
          monitor or moderate any interactive service we provide on our site,
          and we expressly exclude our liability for any loss or damage arising
          from the use of any interactive service by a user in contravention of
          our content standards, whether the service is moderated or not. The
          use of any of our interactive services by a minor is subject to the
          consent of their parent or guardian. We advise parents who permit
          their children to use an interactive service that it is important that
          they communicate with their children about their safety online, as
          moderation is not foolproof. Minors who are using any interactive
          service should be made aware of the potential risks to them. Where we
          do moderate an interactive service, we will normally provide you with
          a means of contacting the moderator, should a concern or difficulty
          arise.
        </div>
      </section>

      <section id="terms-of-use text-body-color dark:text-dark-6">
        <h2 className="text-2xl font-semibold mb-4">Content standards</h2>
        <div>
          These content standards apply to any and all material which you
          contribute to our site (contributions), and to any interactive
          services associated with it. You must comply with the spirit and the
          letter of the following standards. The standards apply to each part of
          any contribution as well as to its whole.
          <ul>
            <li>Be accurate (where they state facts).</li>
            <li>Be genuinely held (where they state opinions).</li>
            <li>
              Comply with applicable law in the UK and in any country from which
              they are posted.
            </li>
          </ul>
          Contributions must not:
          <ul className="list-disc ml-6">
            <li>Contain any material which is defamatory of any person.</li>
            <li>
              Contain any material which is obscene, offensive, hateful or
              inflammatory.
            </li>
            <li>Promote sexually explicit material.</li>
            <li>Promote violence.</li>
            <li>
              Promote discrimination based on race, sex, religion, nationality,
              disability, sexual orientation or age.
            </li>
            <li>
              Infringe any copyright, database right or trademark of any other
              person.
            </li>
            <li>Be likely to deceive any person.</li>
            <li>
              Be made in breach of any legal duty owed to a third-party, such as
              a contractual duty or a duty of confidence.
            </li>
            <li>Promote any illegal activity.</li>
            <li>
              Be threatening, abusive or invade another’s privacy, or cause
              annoyance, inconvenience or needless anxiety.
            </li>
            <li>
              Be likely to harass, upset, embarrass, alarm or annoy any other
              person.
            </li>
            <li>
              Be used to impersonate any person, or to misrepresent your
              identity or affiliation with any person.
            </li>
            <li>
              Give the impression that they emanate from us, if this is not the
              case.
            </li>
            <li>
              Advocate, promote or assist any unlawful act such as (by way of
              example only) copyright infringement or computer misuse.
            </li>
          </ul>
        </div>
      </section>

      <section id="terms-of-use text-body-color dark:text-dark-6">
        <h2 className="text-2xl font-semibold mb-4">
          Suspension and termination
        </h2>
        <div>
          We will determine, at our discretion, whether there has been a breach
          of this acceptable use notice through your use of our site. When a
          breach of this notice has occurred, we may take such action as we deem
          appropriate. Failure to comply with this acceptable use notice
          constitutes a material breach of the terms of website use upon which
          you are permitted to use our site, and may result in our taking all or
          any of the following actions:
          <ul className="list-disc ml-6">
            <li>
              Immediate, temporary, or permanent withdrawal of your right to use
              our site.
            </li>
            <li>
              Immediate, temporary, or permanent removal of any posting or
              material uploaded by you to our site.
            </li>
            <li>Issue of a warning to you.</li>
            <li>
              Legal proceedings against you for reimbursement of all costs on an
              indemnity basis (including, but not limited to, reasonable
              administrative and legal costs) resulting from the breach.
            </li>
            <li>Further legal action against you.</li>
            <li>
              Disclosure of such information to law enforcement authorities as
              we reasonably feel is necessary. We exclude liability for actions
              taken in response to breaches of this acceptable use notice. The
              responses described in this notice are not limited, and we may
              take any other action we reasonably deem appropriate.
            </li>
          </ul>
          Where we do provide any interactive service, we will provide clear
          information to you about the kind of service offered, if it is
          moderated and what form of moderation is used (including whether it is
          human or technical). We will do our best to assess any possible risks
          for users (and in particular, for children) from third parties when
          they use any interactive service provided on our site, and we will
          decide in each case whether it is appropriate to use moderation of the
          relevant service (including what kind of moderation to use) in the
          light of those risks. However, we are under no obligation to oversee,
          monitor or moderate any interactive service we provide on our site,
          and we expressly exclude our liability for any loss or damage arising
          from the use of any interactive service by a user in contravention of
          our content standards, whether the service is moderated or not. The
          use of any of our interactive services by a minor is subject to the
          consent of their parent or guardian. We advise parents who permit
          their children to use an interactive service that it is important that
          they communicate with their children about their safety online, as
          moderation is not foolproof. Minors who are using any interactive
          service should be made aware of the potential risks to them. Where we
          do moderate an interactive service, we will normally provide you with
          a means of contacting the moderator, should a concern or difficulty
          arise.
        </div>
      </section>

      <section id="terms-of-use text-body-color dark:text-dark-6">
        <h2 className="text-2xl font-semibold mb-4">
          Changes to the Acceptable Use Notice
        </h2>
        <div>
          We may revise this acceptable use notice at any time by amending this
          page. You are expected to check this page from time to time to take
          notice of any changes we make, as they are legally binding on you.
          Some of the provisions contained in this acceptable use notice may
          also be superseded by provisions or notices published elsewhere on our
          site.
        </div>
      </section>
    </div>
  );
}
