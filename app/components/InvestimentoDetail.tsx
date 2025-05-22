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
      <div className="flex-1 bg-white rounded-lg shadow-md p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-blue-900 text-white rounded p-4">
          <h2 className="text-lg font-semibold">{investimento.nome_ativo}</h2>
          <div className="font-bold text-lg">
            R$ {Number(investimento.valor_investido).toLocaleString('pt-BR')}
          </div>
        </div>
  
        {/* Histórico de Aportes */}
        <div>
          <h3 className="text-md font-semibold mb-2">Histórico de Aportes</h3>
          <div className="bg-gray-50 rounded p-4">
            {investimento.aportes.length === 0 ? (
              <p className="text-sm text-gray-500">Nenhum aporte encontrado.</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="text-left p-2">Data</th>
                    <th className="text-left p-2">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {investimento.aportes.map((a: any) => (
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
      </div>
    );
  }
  