'use client';

type InvestimentosListProps = {
  investimentos: any[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export default function InvestimentosList({
  investimentos,
  selectedId,
  onSelect,
}: InvestimentosListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-[300px]">
      <h2 className="text-lg font-bold mb-4">Investimentos</h2>
      <ul className="space-y-2">
        {investimentos.map((inv) => (
          <li
            key={inv.id}
            onClick={() => onSelect(inv.id)}
            className={`flex justify-between items-center p-2 rounded cursor-pointer
              ${
                selectedId === inv.id
                  ? 'bg-blue-100 text-blue-800'
                  : 'hover:bg-gray-100'
              }`}
          >
            <span className="text-sm">{inv.nome_ativo}</span>
            <span className="text-sm font-medium">
              R$ {Number(inv.valor_investido).toLocaleString('pt-BR')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
