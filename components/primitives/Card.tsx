import Image from "next/image";

interface Props {
  icon: string;
  heading: string;
  alt: string;
  description: string;
}

const Card = ({ icon, heading, description, alt }: Props) => {
  return (
    <div className="flex max-h-[250px] flex-col justify-between rounded-md p-6">
      <Image src={icon} height={48} width={48} alt={`${alt} icon`} />
      <div className="space-y-2">
        <h3 className="font-bold text-secondary-100">{heading}</h3>
        <p className="text-sm text-secondary-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
