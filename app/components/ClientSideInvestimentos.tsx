"use client";

import { useState } from 'react';
import InvestimentosList from './InvestimentosList';
import InvestimentoDetail from './InvestimentoDetail';

export default function ClientSideInvestimentos({ investimentos }: { investimentos: any[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(
    investimentos[0]?.id || null
  );

  const selectedInvestimento = investimentos.find((i) => i.id === selectedId);

  return (
    <>
      <InvestimentosList
        investimentos={investimentos}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <InvestimentoDetail investimento={selectedInvestimento} />
    </>
  );
} 