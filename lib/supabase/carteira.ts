import { supabase } from "@/lib/supabase/supabaseClient";

export async function getOrCreateCarteiras(idUsuario: string) {
  const { data: carteiras, error } = await supabase
    .from("carteiras")
    .select("*")
    .eq("id_usuario", idUsuario);

  if (error) {
    throw new Error(error.message);
  }

  if (carteiras && carteiras.length > 0) {
    return carteiras;
  }

  const { data: novaCarteira, error: erroCriar } = await supabase
    .from("carteiras")
    .insert({
      id_usuario: idUsuario,
      nome_carteira: "Carteira V.E. Real Estate",
      saldo_total: 0,
    })
    .select()
    .single();

  if (erroCriar || !novaCarteira) {
    throw new Error(erroCriar?.message || "Erro ao criar carteira.");
  }

  return [novaCarteira];
}
