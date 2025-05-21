import { supabase } from '@/lib/supabase/supabaseClient';
import { getOrCreateUser } from '@/lib/supabase/user';
import { getOrCreateCarteiras } from '@/lib/supabase/carteira';

type DashboardProps = {
  user: any;
};

export default async function Dashboard({ user }: DashboardProps) {
  if (!user) {
    return <div className="text-red-500">Erro: Usuário não autenticado.</div>;
  }

  const usuario = await getOrCreateUser(user);
  const carteiras = await getOrCreateCarteiras(usuario.id);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4 text-white">
        Olá, {usuario?.nome?.split(' ')[0]} 👋
      </h1>

      <h2 className="text-xl mb-2 text-white">Suas carteiras:</h2>

      <ul className="space-y-2">
        {carteiras?.map((c: any) => (
          <li
            key={c.id}
            className="bg-white text-black p-4 rounded shadow-sm"
          >
            <div className="font-semibold">{c.nome_carteira}</div>
            <div className="text-sm">
              Saldo: R$ {c.saldo_total.toLocaleString('pt-BR')}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
