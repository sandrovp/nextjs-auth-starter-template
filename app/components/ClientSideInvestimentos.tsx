"use client";

import { useState } from 'react';
import InvestimentosList from './InvestimentosList';
import InvestimentoDetail from './InvestimentoDetail';
import InvestimentosDonutChart from './InvestimentosDonutChart';
import Card from './Card';
export default function ClientSideInvestimentos({ investimentos }: { investimentos: any[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(
    investimentos[0]?.id || null
  );

  const selectedInvestimento = investimentos.find((i) => i.id === selectedId);

  return (
    <div className='flex flex-col gap-6 h-full'>
      <div className='flex gap-6'>
        <InvestimentosDonutChart data={investimentos} />
        <Card>Segunda Coluna</Card>
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