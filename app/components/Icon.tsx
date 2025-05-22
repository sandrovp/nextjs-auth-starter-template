import Image from "next/image";
import { StaticImageData } from "next/image";

interface IconProps {
  icon: StaticImageData;
  alt?: string;
}

export default function Icon({ icon, alt = "Icon" }: IconProps) {
  return (
    <div className="bg-[#F4F7FE] rounded-full p-1 w-12 h-12 flex items-center justify-center">
      <Image src={icon} alt={alt} className="w-7 h-7" />
    </div>
  );
}