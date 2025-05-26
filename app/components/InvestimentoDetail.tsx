import Card_old from "./Card_old";

type InvestimentoDetailProps = {
  investimento: any;
};

export default function InvestimentoDetail({ investimento }: InvestimentoDetailProps) {
  if (!investimento) {
    return (
      <div className="flex-1 bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-500">Selecione um investimento.</p>
      </div>
    );
  }

  return (
    <Card_old>
      {/* Header */}
      <div className="flex gap-2 w-full justify-between">
        <div className="flex justify-center items-center bg-[#081B2F] text-white rounded-lg p-4 flex-1">
          <h2 className="title-block-white m-0">{investimento.nome_ativo}</h2>
        </div>
        <div className="flex justify-center items-center bg-[#081B2F] text-white rounded-lg p-4 whitespace-nowrap">
          <div className="font-bold text-2xl font-inter text-center">
            R$ {Number(investimento.valor_investido).toLocaleString('pt-BR')}
          </div>
        </div>
      </div>

      {/* Histórico de Aportes Realizados */}
      <div>
        <h3 className="text-md font-inter font-semibold mb-2">Histórico de Aportes</h3>
        <div className="bg-gray-50 rounded p-4">
          {investimento.aportes.filter((a: any) => a.status === 'realizado').length === 0 ? (
            <p className="text-sm font-inter font-normal text-gray-500">Nenhum aporte realizado encontrado.</p>
          ) : (
            <table className="w-full">
              <thead className="text-[14px] p-2 font-inter font-black text-gray-400">
                <tr>
                  <th className="text-left p-2">DATA</th>
                  <th className="text-left p-2">VALOR</th>
                </tr>
              </thead>
              <tbody className="text-sm font-inter font-medium text-[#061B2E]">
                {investimento.aportes
                  .filter((a: any) => a.status === 'realizado')
                  .map((a: any) => (
                    <tr key={a.id} className="border-b">
                      <td className="p-2">
                        {new Date(a.data_aporte).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="p-2">
                        R$ {Number(a.valor_aporte).toLocaleString('pt-BR')}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Histórico de Aportes Previstos */}
      <div className="mt-4">
        <h3 className="text-md font-inter font-semibold mb-2">Aportes Previstos</h3>
        <div className="bg-gray-50 rounded p-4">
          {investimento.aportes.filter((a: any) => a.status === 'previsto').length === 0 ? (
            <p className="text-sm font-inter font-normal text-gray-500">Nenhum aporte previsto encontrado.</p>
          ) : (
            <table className="w-full">
              <thead className="text-[14px] p-2 font-inter font-black text-gray-400">
                <tr>
                  <th className="text-left p-2">DATA</th>
                  <th className="text-left p-2">VALOR</th>
                </tr>
              </thead>
              <tbody className="text-sm font-inter font-medium text-[#061B2E]">
                {investimento.aportes
                  .filter((a: any) => a.status === 'previsto')
                  .map((a: any) => (
                    <tr key={a.id} className="border-b">
                      <td className="p-2">
                        {new Date(a.data_aporte).toLocaleDateString('pt-BR')}
                      </td>
                      <td className="p-2">
                        R$ {Number(a.valor_aporte).toLocaleString('pt-BR')}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Card_old>
  );
}
