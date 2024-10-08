/**
 * This code was generated by Builder.io.
 */
import React from "react";
import ServiceDetails from "./ServiceDetails";
import ReviewSection from "./ReviewSection";
import WhatWeAreDoing from "../About/ServicesSection";
import ServicesSection from "../About/ServicesSection";

interface MainContentProps {
  serviceDetails: {
    title: string;
    description: string;
    image: string;
    features: string[];
  };
  reviews: {
    name: string;
    title: string;
    content: string;
    rating: number;
  }[];
  whatWeAreDoing: {
    title: string;
    description: string;
    bulletPoints: string[];
  };
}

const MainContent: React.FC<MainContentProps> = ({
  serviceDetails,
  reviews,
  whatWeAreDoing,
}) => {
  return (
    <main className="flex flex-col items-center">
      <ServiceDetails {...serviceDetails} />
      <ReviewSection reviews={reviews} />
      <ServicesSection />
    </main>
  );
};

export default MainContent;
