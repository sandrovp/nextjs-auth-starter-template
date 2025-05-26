'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardDescription, CardTitle } from "../components/card";
import IconMoneybag from '@/public/icons/icon_moneybag.svg';
import CardContent from './CardContent';
import { getOrCreateCarteiras } from '@/lib/supabase/carteira';     
interface Props {
    idCarteira: string;
}

export default function InvestimentosTotalCarteira({ idCarteira }: Props) {
            
    const [totalAportes, setTotalAportes] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const carteiras = await getOrCreateCarteiras(idCarteira);
                setTotalAportes(carteiras[0]?.saldo_total || 0);
            } catch (error) {
                console.error("Erro ao buscar saldo total:", error);
                setTotalAportes(0);
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
            <CardDescription>Total Investido</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                {isLoading ? (
                    <div className="animate-pulse h-8 w-24 bg-gray-200 rounded"></div>
                ) : (
                    <>
                        <p>
                            {totalAportes !== null ? formatCurrency(totalAportes) : "Sem aportes"}
                        </p>
                    </>
                )}
            </CardTitle>
        </CardHeader>
    </Card>
    );
}
