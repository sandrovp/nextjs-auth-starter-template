import { supabase } from './supabaseClient';

export async function getInvestimentos(idCarteira: string) {
  const { data, error } = await supabase
    .from('investimentos')
    .select(`
      *,
      ativos_imobiliarios (
        nome_ativo,
        localizacao,
        tipo_ativo
      )
    `)
    .eq('id_carteira', idCarteira);

  if (error) {
    throw new Error(`Erro ao buscar investimentos: ${error.message}`);
  }

  return data;
}
