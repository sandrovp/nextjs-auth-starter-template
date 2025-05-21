import { MenuItem } from "./MenuItem";
import icon_carteira from "@/public/icons/icon_carteira.svg";
import icon_documentos from "@/public/icons/icon_documentos.svg";
import icon_oportunidades from "@/public/icons/icon_oportunidades.svg";
import icon_portfolio from "@/public/icons/icon_portfolio.svg";
import logo from "@/public/logos/logo_valore.png";
import Image from "next/image";

export function Sidebar() {
  return (
    <div className="flex flex-col gap-4 bg-cor-fundo-nav p-6 w-[290px] h-full">

      <div className="w-6 p-6 top-[3px] left-0">
        <Image src={logo} alt="Logo" />
      </div>

      <div className="h-[1px] bg-gray-600"></div>

      <div className="flex flex-col gap-4">
        <MenuItem icon={icon_carteira} text="Carteira" />
        <MenuItem icon={icon_portfolio} text="Portfólio" />
        <MenuItem icon={icon_documentos} text="Documentos" />
        <MenuItem icon={icon_oportunidades} text="Oportunidades" />
      </div>

    </div>
  );
};
