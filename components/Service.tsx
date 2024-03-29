import { Badge } from "@/components/ui/badge";
import Card from "./primitives/Card";
import { cardInfo } from "@/constants/index";

const Service = () => {
  return (
    <section
      id="services"
      className="container space-y-6 py-8 md:py-12 lg:pt-[20]"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center text-secondary-100">
        <Badge variant="outline" className="text-secondary-100">
          Services
        </Badge>

        <h2 className="max-w-[85%] text-xl leading-normal text-secondary-200 sm:text-2xl md:text-4xl">
          Design Services that
          <span className="text-primary-400">
            Supercharge <br />
            Brands
          </span>
        </h2>
        <p className="max-w-[70%] text-secondary-400">
          At Boltzshift, we offer a spectrum of digtal services tailored to
          elevate your online presence
        </p>
      </div>

      <div className="mx-auto grid justify-center  gap-4 sm:grid-cols-2 md:max-w-5xl md:grid-cols-3">
        {cardInfo.map((info) => (
          <div
            key={info.id}
            className="relative overflow-hidden rounded-lg border border-primary-200 p-2"
          >
            <Card
              icon={info.icon}
              heading={info.heading}
              alt={info.alt}
              description={info.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
