"use client";

import { useUser, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { getOrCreateUser } from "@/lib/supabase/user";
import { getOrCreateCarteiras } from "@/lib/supabase/carteira";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const { user } = useUser();
  if (!user) return null;

  const [carteiras, setCarteiras] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;

    async function carregarCarteiras() {
      if (!user) return;
      
      // First get or create the user in Supabase to get the Supabase user ID
      const supabaseUser = await getOrCreateUser({
        id: user.id,
        email: user.emailAddresses?.[0]?.emailAddress
      });
      
      // Then use the Supabase user ID to get the carteiras
      const carteiras = await getOrCreateCarteiras(supabaseUser.id);
      setCarteiras(carteiras);
    }

    carregarCarteiras();
  }, [user]);

  return (
    <div className="text-sm text-white">
      <div className="flex items-center gap-3 mb-2">
        {user.imageUrl && (
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
            {user.firstName} {user.lastName}
          </p>
          <p className="text-gray-400 font-inter">
            {user.emailAddresses?.[0]?.emailAddress}
          </p>

          <div className="font-inter text-gray-400 text-xs">
            {user.id}
            {carteiras.length > 0 ? (
              carteiras.map((carteira) => (
                <p key={carteira.id}>{carteira.nome_carteira}</p>
              ))
            ) : (
              <p className=" font-inter text-gray-400">Nenhuma carteira encontrada</p>
            )}
          </div>
        </div>
      </div>

      {/* Botão de Logout */}
      <SignOutButton redirectUrl="/sign-in">
        <button className="mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors w-full text-center font-inter">
          Sair
        </button>
      </SignOutButton>
    </div>
  );
}