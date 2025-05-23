"use client";

import { useState } from 'react';
import InvestimentosList from './InvestimentosList';
import InvestimentoDetail from './InvestimentoDetail';
import InvestimentosDonutChart from './InvestimentosDonutChart';
import Card from './Card';
import InvestimentosAportesPrevistos from './InvestimentosAportesPrevistos';
import UltimoAporte from './InvestimentosUltimoAporte';
import CardContent from './CardContent';
import IconMoneybag from '@/public/icons/icon_moneybag.svg';
export default function ClientSideInvestimentos({ investimentos }: { investimentos: any[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(
    investimentos[0]?.id || null
  );

  const selectedInvestimento = investimentos.find((i) => i.id === selectedId);

  return (
    <div className='flex flex-col gap-6 h-full'>
      <div className='flex gap-6'>
        <InvestimentosDonutChart data={investimentos} />
        <div className='flex flex-col gap-6 w-full h-full'>
        <div className='flex gap-6 w-full h-full '>
            <InvestimentosAportesPrevistos idCarteira={investimentos[0]?.id_carteira || ''} />
            <UltimoAporte idCarteira={investimentos[0]?.id_carteira || ''} />
        </div>
        <div className='flex gap-6 w-full h-full '>
          <Card>
            <CardContent
              title="Total Investido"
              icon={IconMoneybag}
              value={Number(investimentos.reduce((acc, inv) => acc + inv.valor_investido, 0)).toLocaleString('pt-BR')}
              date={null}
              isLoading={false}
            />  
          </Card>
          <Card>Segunda Coluna</Card>
        </div>
        </div>
      </div>
      <div className='flex gap-6'>
        <InvestimentosList
          investimentos={investimentos}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <InvestimentoDetail investimento={selectedInvestimento} />
      </div>
    </div>


  );
} 