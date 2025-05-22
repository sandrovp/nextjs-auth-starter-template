import { supabase } from './supabaseClient';

export async function getAportesByInvestimento(idInvestimento: string) {
  const { data, error } = await supabase
    .from('aportes')
    .select('*')
    .eq('id_investimento', idInvestimento);

  if (error) {
    throw new Error(`Erro ao buscar aportes: ${error.message}`);
  }

  return data;
}
