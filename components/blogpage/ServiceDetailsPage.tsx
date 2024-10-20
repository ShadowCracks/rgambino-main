
import React from "react";

import Hero from "./Hero";
import ServiceDetails from "./ServiceDetails";
import ReviewSection from "./ReviewSection";
import WhatWeAreDoing from "./WhatWeAreDoing";


const ServiceDetailsPage: React.FC = () => {
  const reviews = [
    {
      name: "Dyna Lopez",
      title: "CEO Revenue",
      content:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc nul viverra Aenean pulvinar maximus leo",
      rating: 4,
    },
    {
      name: "Dyna Lopez",
      title: "CEO Revenue",
      content:
        "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc nul viverra Aenean pulvinar maximus leo",
      rating: 4,
    },
  ];

  const features = [
    "Nibh dolor consectetuer fermentum hendrerit",
    "Facilisi purus aliquam nullam tristique",
    "Malesuada si faucibus torquent",
  ];

  const footerLinks = {
    companyLinks: {
      title: "Company",
      links: [
        { name: "About Us", url: "/about" },
        { name: "Our Services", url: "/services" },
        { name: "Pricing Plan", url: "/pricing" },
        { name: "Work with Us", url: "/careers" },
        { name: "Automotive Blog", url: "/blog" },
      ],
    },
    supportLinks: {
      title: "Support",
      links: [
        { name: "Service FAQ", url: "/faq" },
        { name: "User Policy", url: "/user-policy" },
        { name: "Privacy Policy", url: "/privacy" },
        { name: "Members Policy", url: "/members" },
        { name: "Customer Support", url: "/support" },
      ],
    },
    contactLinks: {
      title: "Contact",
      links: [
        { name: "Phone Number", url: "/contact" },
        { name: "Email Address", url: "/contact" },
        { name: "Our Locations", url: "/locations" },
        { name: "Social Media", url: "/social" },
        { name: "Message Form", url: "/contact" },
      ],
    },
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Hero
        title="Services Details"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
        backgroundSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/63f429d985c5226a5a75e2be3d321ff6fd027d123e92b1989eb4929afa3ac9ca?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
      />
      <ServiceDetails
        title="Interior Detailing"
        description="Efficitur dis in diam posuere nisi. Efficitur dictumst litora facilisis feugiat sed quisque tellus pede. Cubilia luctus lacus metus diam dolor mus lorem. Ligula nibh rutrum faucibus mollis sem sed blandit. Euismod egestas pede adipiscing arcu nibh dui imperdiet. Ridiculus ligula scelerisque tortor accumsan per pellentesque tempus cras venenatis. Tortor pharetra conubia purus pretium duis primis vivamus scelerisque."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7761b77f86050e4de343c7d224de1af4b93bf21fee94b593ee50d0350a61d727?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
        features={features}
      />
      <ReviewSection reviews={reviews} />
      <WhatWeAreDoing
        title="What we are Doing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna enim, quis nostrud laboris."
        features={[
          "Lorem ipsum dolor sit amet, consectetu",
          "Lorem ipsum dolor",
          "Lorem ipsum dolor sit",
        ]}
        expertName="Alex Brown"
        expertImageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1b43a5a1ebb8143b00bb43d49e646eb05ae6f5cc13e3972e80d81d457737a92e?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11"
      />
    </div>
  );
};

export default ServiceDetailsPage;
