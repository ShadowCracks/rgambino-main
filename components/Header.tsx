import React from "react";

interface HeaderProps {
  navItems: string[];
}

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <header className="flex flex-col justify-center items-center px-5 py-3 w-full text-base text-white border border-black border-solid bg-neutral-900">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-full">
        <a
          href="https://www.instagram.com/the_galactic_shine?igsh=MTQwbnA3bjA3YzE2ZQ%3D%3D" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c4bc369c732b4bf6c2901ab1bca691d6d2e06d1de98a4dfca45c66314e542b8?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
            alt="Company logo"
            className="object-contain shrink-0 w-[71px] h-auto" // Use h-auto for responsive height
          />
        </a>
        <nav className="flex flex-wrap gap-10 items-start self-start mt-5">
          {navItems.map((item, index) => (
            <a key={index} href={item.replace(/\s+/g, '')}>{item}</a>
          ))}
          <a
            href="/ContactUs"
            className="self-stretch px-8 py-2.5 text-blue-400 border border-blue-400 border-solid rounded-[100px]"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

