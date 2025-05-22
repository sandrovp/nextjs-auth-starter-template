'use client';
import Image from 'next/image';
import IconMoneybag from '@/public/icons/icon_moneybag.svg';
import Card from './Card';
import Icon from './Icon';

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
    // Box
    <Card>
      {/* Header */}
      <div className='flex items-center gap-4 '>
        {/* Icone */}
        <Icon icon={IconMoneybag} alt="Icone de uma bolsa de dinheiro" />
        {/* Titulo */}
        <h2 className="title-block">
          Investimentos
        </h2>
      </div>
      {/* Lista */}
      <ul className="space-y-2 p-0">
        {/* Header */}
        <div className='flex items-center justify-between'>
          <span className='text-[14px] p-2 font-inter font-black text-gray-400'>NOME</span>
          <span className='text-[14px] p-2 font-inter font-black text-gray-400'>VALOR</span>
        </div>
        {/* Lista */}
        {investimentos.map((inv) => (
          <li
            key={inv.id}
            onClick={() => onSelect(inv.id)}
            className={`flex justify-between items-center p-2 rounded cursor-pointer
              ${selectedId === inv.id
                ? 'bg-[#F4F7FE] text-[#061B2E]'
                : 'hover:bg-gray-100'
              }`}
          >
            <span className="text-sm font-inter font-medium text-[#061B2E]">{inv.nome_ativo}</span>
            <span className="text-sm font-inter font-medium text-[#061B2E]">
              R$ {Number(inv.valor_investido).toLocaleString('pt-BR')}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
