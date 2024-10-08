import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import MainContent from "./MainContent";
import Footer from "../Footer";

const ServiceDetailsPage: React.FC = () => {
  const headerProps = {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c4bc369c732b4bf6c2901ab1bca691d6d2e06d1de98a4dfca45c66314e542b8?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11",
    navItems: ["About", "Services", "Pricing", "Blog"], // You should use 'navItems' instead of 'menuItems'
  };

  const heroProps = {
    title: "Services Details",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has",
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/63f429d985c5226a5a75e2be3d321ff6fd027d123e92b1989eb4929afa3ac9ca?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11",
  };

  const serviceDetailsProps = {
    title: "Interior Detailing",
    description:
      "Efficitur dis in diam posuere nisi. Efficitur dictumst litora facilisis feugiat sed quisque tellus pede. Cubilia luctus lacus metus diam dolor mus lorem. Ligula nibh rutrum faucibus mollis sem sed blandit. Euismod egestas pede adipiscing arcu nibh dui imperdiet. Ridiculus ligula scelerisque tortor accumsan per pellentesque tempus cras venenatis. Tortor pharetra conubia purus pretium duis primis vivamus scelerisque.",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7761b77f86050e4de343c7d224de1af4b93bf21fee94b593ee50d0350a61d727?placeholderIfAbsent=true&apiKey=a9e86b264a2b427cb02fa9112891bf11",
    features: [
      "Nibh dolor consectetuer fermentum hendrerit",
      "Facilisi purus aliquam nullam tristique",
      "Malesuada si faucibus torquent",
      "Nibh dolor consectetuer fermentum hendrerit",
      "Facilisi purus aliquam nullam tristique",
      "Malesuada si faucibus torquent",
    ],
  };

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

  const whatWeAreDoingProps = {
    title: "What we are Doing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna enim, quis nostrud laboris.",
    bulletPoints: [
      "Lorem ipsum dolor sit amet, consectetu",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor sit",
    ],
  };

  const footerProps = {
    companyDescription:
      "We make sure to give your car the pampering it deserves in BubBlast.",
    companyLinks: [
      "About Us",
      "Our Services",
      "Pricing Plan",
      "Work with Us",
      "Automotive Blog",
    ],
    supportLinks: [
      "Service FAQ",
      "User Policy",
      "Privacy Policy",
      "Members Policy",
      "Customer Support",
    ],
    contactLinks: [
      "Phone Number",
      "Email Address",
      "Our Locations",
      "Social Media",
      "Message Form",
    ],
  };

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      {/* Pass headerProps to Header */}
      <Header {...headerProps} />
      <Hero {...heroProps} />
      <MainContent
        serviceDetails={serviceDetailsProps}
        reviews={reviews}
        whatWeAreDoing={whatWeAreDoingProps}
      />
      <Footer />
    </div>
  );
};

export default ServiceDetailsPage;

