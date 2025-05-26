'use client';

import { useState, useEffect } from 'react';
import { getAportesByCarteira } from '@/lib/supabase/aportes';
import { Card, CardHeader, CardDescription, CardTitle } from "./Card";

interface Props {
    idCarteira: string;
}

export default function AportesPrevistoCard({ idCarteira }: Props) {
    const [totalAportes, setTotalAportes] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function carregarAportes() {
            try {
                setIsLoading(true);
                const aportes = await getAportesByCarteira(idCarteira);
                const total = aportes.reduce((acc, item) => acc + (item.valor_previsto || 0), 0);
                setTotalAportes(total);
            } catch (error) {
                console.error("Erro ao carregar aportes:", error);
            } finally {
                setIsLoading(false);
            }
        }

        carregarAportes();
    }, [idCarteira]);

    const formatCurrency = (value: number) => {
        if (value >= 1000000) {
            return `R$ ${(value / 1000000).toFixed(1)}M`;
        } else if (value >= 1000) {
            return `R$ ${(value / 1000).toFixed(1)}K`;
        } else {
            return `R$ ${value.toFixed(2)}`;
        }
    };

    return (
        <Card className="@container/card">
            <CardHeader className="relative">
                <CardDescription>Aportes Previstos</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                    {isLoading ? (
                        <div className="animate-pulse h-8 w-24 bg-gray-200 rounded"></div>
                    ) : (
                        <>
                            <p>
                                {formatCurrency(totalAportes)}
                            </p>
                        </>
                    )}
                </CardTitle>
            </CardHeader>
        </Card>
    )
}
