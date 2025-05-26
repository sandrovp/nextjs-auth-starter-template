import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getOrCreateUser } from "@/lib/supabase/user";
import { getOrCreateCarteiras } from "@/lib/supabase/carteira";
import { getInvestimentos } from "@/lib/supabase/investimento";
import { getAportesByInvestimento } from "@/lib/supabase/aportes";
import ClientSideInvestimentos from "@/app/components/Carteira";

export default async function Investimentos() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const userInfo = { id: user.id, email: user.emailAddresses[0]?.emailAddress };
  const usuario = await getOrCreateUser(userInfo);
  const carteiras = await getOrCreateCarteiras(usuario.id);
  const carteira = carteiras[0];

  if (!carteira) {
    return <div className="text-red-500">Nenhuma carteira encontrada.</div>;
  }

  const investimentos = await getInvestimentos(carteira.id);

  const investimentosComAportes = await Promise.all(
    investimentos.map(async (inv) => {
      const aportes = await getAportesByInvestimento(inv.id);
      return {
        ...inv,
        nome_ativo: inv.ativos_imobiliarios?.nome_ativo || "",
        localizacao: inv.ativos_imobiliarios?.localizacao || "",
        tipo_ativo: inv.ativos_imobiliarios?.tipo_ativo || "",
        aportes: aportes || [],
      };
    })
  );

  return (
    <div className="flex flex-col gap-6 bg-cor-fundo-content p-10 h-screen">

      <h1 className="text-5xl font-bold font-poppins m-0 text-[#081B2F]">
        Esta é sua Carteira V.E. Real Estate
      </h1>
      <h2 className="text-[#707EAE] text-2xl font-poppins m-0 font-medium">
        Acompanhe seus aportes, evolução e previsões de forma centralizada
      </h2>

      <ClientSideInvestimentos investimentos={investimentosComAportes} />
    </div>
  );
}
