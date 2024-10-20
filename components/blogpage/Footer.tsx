
import React from "react";
import { Link } from "react-router-dom";

type FooterLink = {
  title: string;
  links: { name: string; url: string }[];
};

type FooterProps = {
  description: string;
  companyLinks: FooterLink;
  supportLinks: FooterLink;
  contactLinks: FooterLink;
};

const Footer: React.FC<FooterProps> = ({
  description,
  companyLinks,
  supportLinks,
  contactLinks,
}) => {
  return (
    <footer className="flex flex-col px-20 py-14 w-full text-base text-white bg-blue-400 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
        <p className="leading-6 w-[230px]">{description}</p>
        <div className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-start min-w-[240px] max-md:max-w-full">
            <FooterLinkSection
              title={companyLinks.title}
              links={companyLinks.links}
            />
            <FooterLinkSection
              title={supportLinks.title}
              links={supportLinks.links}
            />
            <FooterLinkSection
              title={contactLinks.title}
              links={contactLinks.links}
            />
          </div>
          <div className="flex flex-col min-w-[240px]">
            <div className="flex flex-col self-start">
              <h3 className="font-bold">Newsletter</h3>
              <p className="mt-6 opacity-75">
                Subscribe to get monthly promo updates.
              </p>
            </div>
            <form className="flex gap-10 items-start pb-4 mt-24 border-b border-solid border-b-white max-md:mt-10">
              <label htmlFor="emailInput" className="sr-only">
                Email Address
              </label>
              <input
                id="emailInput"
                type="email"
                placeholder="Email Address ..."
                className="opacity-50 bg-transparent border-none outline-none"
              />
              <button type="submit" className="font-bold text-right">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <p className="opacity-50">Copyright © 2023. All rights reserved.</p>
        <p className="text-right opacity-50">
          <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
          <Link to="/terms">Terms & Condition</Link>
        </p>
      </div>
    </footer>
  );
};

type FooterLinkSectionProps = {
  title: string;
  links: { name: string; url: string }[];
};

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  links,
}) => (
  <div className="flex flex-col">
    <h3 className="font-bold">{title}</h3>
    <div className="flex flex-col mt-6">
      {links.map((link, index) => (
        <Link key={index} to={link.url} className="mt-2 opacity-75">
          {link.name}
        </Link>
      ))}
    </div>
  </div>
);

export default Footer;
