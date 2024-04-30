import Image from "next/image";
interface Person {
  name: string;
  avatar: string;
  position: string;
}

interface Props {
  logo: string;
  description: string;
  person: Person;
}

const TestimonialCard = ({ logo, description, person }: Props) => {
  return (
    <div className="flex h-full flex-col justify-between gap-8 rounded p-6">
      <div className="flex flex-col gap-6">
        <Image
          src={logo}
          width={100}
          height={50}
          alt="company logo"
          className="invert"
        />
        <p className="space-y-2 text-sm text-secondary-400">{description}</p>
      </div>

      <div className="flex items-center gap-4">
        <Image
          src={person.avatar}
          width={60}
          height={60}
          alt="avatar"
          className="rounded-full border"
        />
        <div>
          <h3 className="font-bold text-secondary-100">{person.name}</h3>
          <p className="text-sm text-secondary-100">{person.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
