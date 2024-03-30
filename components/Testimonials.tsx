import { testimonialCardInfo } from "@/constants";
import TestimonialCard from "./primitives/TestimonialCard";
import { Badge } from "./ui/badge";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container space-y-6 py-8 md:py-12 lg:pt-[20]"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center text-secondary-100">
        <Badge variant="outline" className="text-secondary-100">
          Testimonials
        </Badge>

        <h2 className="max-w-[85%] text-xl leading-normal text-secondary-200 sm:text-2xl md:text-4xl">
          Client Testimonials
        </h2>
        <p className="max-w-[70%] text-secondary-400">
          Still in doubt? Here is what our clients have to say.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl  justify-center gap-10 md:grid-cols-2 ">
        {testimonialCardInfo.map((info) => (
          <div
            key={info.id}
            className="relative overflow-hidden rounded-lg p-2 shadow shadow-primary-100"
          >
            <TestimonialCard
              logo={info.logo}
              description={info.description}
              person={info.person}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
