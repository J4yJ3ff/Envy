import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal"; // Assuming your folder structure is like this
// Adjust the import path according to your folder structure if necessary

const HowItWorks = () => {
  // Define your content array
  const content = [
    {
      title: "Discover Us",
      description: "Step 1: Discover who we are.",
      content: <div className=" text-secondary-400 pt-16 pb-8 pl-8 pr-8">The first step is discovering everything that we offer. This can be studying our site, our previous projects, referals, and more!</div>,
    },
    {
      title: "Reach Out",
      description: "Step 2: Let us Talk.",
      content: <div className=" text-secondary-100 pt-16 pb-8 pl-8 pr-8">Once you discover us, reach out to use and we can talk.</div>,
    },
    {
      title: "Strategy",
      description: "Step 3: Discover who we are.",
      content: <div className=" text-secondary-100 pt-16 pb-8 pl-8 pr-8">This is part where we go over your requirements and outline everything your project needs.</div>,
    },
    {
      title: "Design",
      description: "Step 4: Develop your project.",
      content: <div className=" text-secondary-100 pt-16 pb-8 pl-8 pr-8">We dive in and start building everything your site needs.</div>,
    },
    {
      title: "Development",
      description: "Step 5: Discover who we are.",
      content: <div className=" text-secondary-100 pt-16 pb-8 pl-8 pr-8">We stick our faces in the monitors and start building you the amazing project that you need.</div>,
    },
    {
      title: "Deployment",
      description: "Step 6: Discover who we are.",
      content: <div className=" text-secondary-100 pt-16 pb-8 pl-8 pr-8">We stick our faces in the monitors and start building you the amazing project that you need.</div>,
    },
  ];

  return (
    <div>
      {/* Utilize the StickyScroll component */}
      <StickyScroll content={content} />
    </div>
  );
  
};

export default HowItWorks;
