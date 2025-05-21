import { supabase } from "@/lib/supabase/supabaseClient";

type ClerkUser = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  emailAddresses: { emailAddress: string }[];
};

export async function getOrCreateUser(clerkUser: ClerkUser) {
  const { data: usuarioExistente } = await supabase
    .from("usuarios")
    .select("*")
    .eq("id_clerk", clerkUser.id)
    .single();

  if (usuarioExistente) return usuarioExistente;

  const { data: novoUsuario, error } = await supabase
    .from("usuarios")
    .insert({
      id_clerk: clerkUser.id,
      nome: `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`,
      email: clerkUser.emailAddresses[0]?.emailAddress ?? "",
      telefone: "",
    })
    .select()
    .single();

  if (error || !novoUsuario) {
    throw new Error(error?.message || "Erro ao criar usuário.");
  }

  return novoUsuario;
}
