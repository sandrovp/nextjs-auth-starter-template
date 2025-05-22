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

export async function getAportesByCarteira(idCarteira: string) {
  // Primeiro, buscamos todos os investimentos da carteira
  const { data: investimentos, error: investimentosError } = await supabase
    .from('investimentos')
    .select('id')
    .eq('id_carteira', idCarteira);

  if (investimentosError) {
    throw new Error(`Erro ao buscar investimentos: ${investimentosError.message}`);
  }

  if (!investimentos || investimentos.length === 0) {
    return [];
  }

  // Extraímos os IDs dos investimentos
  const investimentoIds = investimentos.map(inv => inv.id);

  // Buscamos todos os aportes relacionados a esses investimentos
  const { data: aportes, error: aportesError } = await supabase
    .from('aportes')
    .select('*')
    .in('id_investimento', investimentoIds);

  if (aportesError) {
    throw new Error(`Erro ao buscar aportes: ${aportesError.message}`);
  }

  return aportes || [];
}
