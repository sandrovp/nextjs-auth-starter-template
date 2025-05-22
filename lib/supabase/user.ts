import { supabase } from "@/lib/supabase/supabaseClient";

type ClerkUser = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  emailAddresses: { emailAddress: string }[];
};

export async function getOrCreateUser(userInfo: { id: string; email?: string }) {
  const { data: usuarioExistente } = await supabase
    .from("usuarios")
    .select("*")
    .eq("id_clerk", userInfo.id)
    .single();

  if (usuarioExistente) return usuarioExistente;

  const { data: novoUsuario, error } = await supabase
    .from("usuarios")
    .insert({
      id_clerk: userInfo.id,
      nome: "",
      email: userInfo.email ?? "",
      telefone: "",
    })
    .select()
    .single();

  if (error || !novoUsuario) {
    throw new Error(error?.message || "Erro ao criar usuário.");
  }

  return novoUsuario;
}
