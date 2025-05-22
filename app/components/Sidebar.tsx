"use client";

import { MenuItem } from "./MenuItem";
import icon_carteira from "@/public/icons/icon_carteira.svg";
import icon_documentos from "@/public/icons/icon_documentos.svg";
import icon_oportunidades from "@/public/icons/icon_oportunidades.svg";
import icon_portfolio from "@/public/icons/icon_portfolio.svg";
import logo from "@/public/logos/logo_valore.png";
import Image from "next/image";
import { useUser, SignOutButton } from "@clerk/nextjs";

export function Sidebar() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex flex-col gap-6 bg-cor-fundo-nav p-6 w-[290px] h-screen sticky top-0">
      {/* Logo */}
      <div className="w-32 mb-4">
        <Image src={logo} alt="Logo Valore" />
      </div>

      <div className="h-[1px] bg-gray-600"></div>

      {/* Menu */}
      <div className="flex flex-col gap-4">
        <MenuItem icon={icon_carteira} text="Carteira" href="/ " />
        <MenuItem icon={icon_portfolio} text="Portfólio" href="/portfolio" />
        <MenuItem icon={icon_documentos} text="Documentos" href="/documentos" />
        <MenuItem icon={icon_oportunidades} text="Oportunidades" href="/oportunidades" />
      </div>

      <div className="h-[1px] bg-gray-600 mt-4"></div>

      {/* Dados do Usuário */}
      <div className="text-sm text-white">
        <div className="flex items-center gap-3 mb-2">
          {user?.imageUrl && (
            <Image 
              src={user.imageUrl} 
              alt="Foto de perfil" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
          )}
          <div>
            <p className="font-semibold font-inter">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-gray-400 font-inter">{user?.emailAddresses?.[0]?.emailAddress}</p>
          </div>
        </div>
        
        {/* Botão de Logout */}
        <SignOutButton redirectUrl="/sign-in">
          <button 
            className="mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors w-full text-center font-inter"
          >
            Sair
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
