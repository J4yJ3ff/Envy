import React from "react";
import { Button } from "./primitives/Button";

const Hero = () => {
  return (
    <>
      <section className="m-4 flex items-center justify-center space-y-6 pb-8 pt-6 text-secondary-100 md:pt-10 lg:pt-32">
        <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Supercharging Startup Success with{" "}
            <span className="text-primary-400">Exceptional Design</span>
          </h1>
          <p className="max-w-2xl leading-normal text-secondary-400 sm:text-xl sm:leading-8">
            I help turn your ambitious ideas into reality by creating
            high-converting and eye-catching brand identities and websites.
            Unlock your startup success today and rise above the noise with a
            powerful brand.
          </p>
          <div className="flex gap-4 pt-12">
            <Button
              variant="default"
              label="View Demo"
              type="button"
              styles="text-secondary-950"
            />
            <Button variant="outline" label="Book a Call" type="button" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
