'use client';

import { useState, useEffect } from 'react';
import { getUltimoAporte } from '@/lib/supabase/aportes';
import { Card, CardHeader, CardDescription, CardTitle } from "./Card";
interface Props {
    idCarteira: string;
}

export default function InvestimentosUltimoAporte({ idCarteira }: Props) {

    const [ultimoAporte, setUltimoAporte] = useState<any>(null);
    const [dataUltimoAporte, setDataUltimoAporte] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ultimoAporte = await getUltimoAporte(idCarteira);
                setUltimoAporte(ultimoAporte?.valor_previsto || 0);
                setDataUltimoAporte(ultimoAporte?.data ? new Date(ultimoAporte.data).toLocaleDateString('pt-BR') : null);
            } catch (error) {
                console.error("Erro ao buscar último aporte:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
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
                <CardDescription>Último aporte</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                    {isLoading ? (
                        <div className="animate-pulse h-8 w-24 bg-gray-200 rounded"></div>
                    ) : (
                        <>
                            <p>
                                {ultimoAporte !== null ? formatCurrency(ultimoAporte) : "Sem aportes"}
                            </p>
                        </>
                    )}
                </CardTitle>
            </CardHeader>
        </Card>
    );
}
