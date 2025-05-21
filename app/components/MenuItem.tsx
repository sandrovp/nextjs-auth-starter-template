import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  icon: string;
  text: string;
  href: string;
}

export function MenuItem({ icon, text, href }: MenuItemProps) {
  return (
    <Link href={href} className="relative w-24 h-[27px] hover:opacity-80">
      <div className="absolute -top-px left-9 font-typography-body-base font-[number:var(--typography-body-base-font-weight)] text-secondary-primary-white text-[length:var(--typography-body-base-font-size)] tracking-[var(--typography-body-base-letter-spacing)] leading-[var(--typography-body-base-line-height)] whitespace-nowrap [font-style:var(--typography-body-base-font-style)]">
        {text}
      </div>

      <div className="absolute w-6 h-6 top-[3px] left-0">
        <Image src={icon} alt={text} />
      </div>
    </Link>
  );
}
