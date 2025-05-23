'use client';

import { useState, useEffect } from 'react';
import Card from './Card';
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
        <Card className=" justify-center">
            <CardContent
                title="Total Investido"
                icon={IconMoneybag}
                value={totalAportes !== null ? formatCurrency(totalAportes) : "Sem aportes"}
                date={null}
                isLoading={isLoading}
            />
        </Card>
    );
}
