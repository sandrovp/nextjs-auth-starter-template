"use client";

import { useUser, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default function UserProfile() {
  const { user } = useUser();
  if (!user) return null;

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