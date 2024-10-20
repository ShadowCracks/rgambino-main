
import React from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
  logoSrc: string;
};

const Header: React.FC<HeaderProps> = ({ logoSrc }) => {
  return (
    <header className="flex relative z-10 flex-col justify-center items-center self-stretch px-16 py-3 w-full text-base bg-neutral-900 max-md:px-5 max-md:max-w-full">
      <nav className="flex flex-wrap gap-10 w-full max-w-[1157px] max-md:max-w-full">
        <div className="flex flex-wrap flex-auto gap-7 text-white whitespace-nowrap max-md:max-w-full">
          <img
            loading="lazy"
            src={logoSrc}
            alt="Company Logo"
            className="object-contain shrink-0 aspect-square w-[71px]"
          />
          <div className="flex flex-wrap flex-auto gap-10 items-start px-48 my-auto max-md:px-5 max-md:max-w-full">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
        <Link
          to="/contact"
          className="self-start px-8 py-2.5 mt-5 text-blue-400 border border-blue-400 border-solid rounded-[100px] max-md:px-5"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
