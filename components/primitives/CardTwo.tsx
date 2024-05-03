import Image from "next/image";
import { Badge } from "../ui/badge";
interface Person {
  name: string;
  avatar: string;
  position: string;
}

interface Props {
  logo?: string;
  description: string;
  person?: Person;
  title?: string;
  tags?: string[];
  imgUrl?: any;
}

const TestimonialCard = ({
  logo,
  description,
  person,
  title,
  tags,
  imgUrl,
}: Props) => {
  return (
    <div className="flex h-full flex-col justify-between gap-8 rounded p-6">
      <div className="flex flex-col gap-6">
        {logo && (
          <>
            <Image
              src={logo}
              width={100}
              height={50}
              alt="company logo"
              className="invert"
            />
            <p className="space-y-2 text-sm text-secondary-400">
              {description}
            </p>
          </>
        )}
        {imgUrl && (
          <>
            <Image
              src={imgUrl}
              alt="Projects we've worked on"
              className="rounded-lg"
            />
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        {person && (
          <>
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
          </>
        )}

        {title && tags && (
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-secondary-100">{title}</h3>
            <p className="text-sm text-secondary-400">{description}</p>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
