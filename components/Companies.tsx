import React from "react";
import { Button } from "./primitives/Button";
import { companyLogos } from "@/constants/index";

const Companies = () => {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <span className="text-primary-400 text-center font-medium mb-4 block">
              Our Clients
            </span>
            <h1 className="text-4xl text-secondary-400 text-center font-bold">
              We have worked with the following clients.
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {companyLogos.map((company) => (
              <a
                key={company.id}
                href={company.target ? company.target : "#"}
                className="flex justify-center items-center relative overflow-hidden rounded-lg p-2 shadow shadow-primary-100"
              >
                <img
                  className="h-9"
                  src={company.asset}
                  alt={company.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
