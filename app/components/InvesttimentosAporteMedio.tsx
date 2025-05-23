'use client';

import { useState, useEffect } from 'react';
import Card from './Card';
import { getAporteMedio } from '@/lib/supabase/aportes';
import IconMoneybag from '@/public/icons/icon_moneybag.svg';
import CardContent from './CardContent';
interface Props {
    idCarteira: string;
}

export default function InvesttimentosAporteMedio({ idCarteira }: Props) {

    const [aporteMedio, setAporteMedio] = useState<any>(null);
    const [dataAporteMedio, setDataAporteMedio] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const aporteMedio = await getAporteMedio(idCarteira);
                setAporteMedio(aporteMedio?.valor_previsto || 0);
                setDataAporteMedio(aporteMedio?.data ? new Date(aporteMedio.data).toLocaleDateString('pt-BR') : null);
            } catch (error) {
                console.error("Erro ao buscar aporte médio:", error);
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
                title="Aporte médio"
                icon={IconMoneybag}
                value={aporteMedio !== null ? formatCurrency(aporteMedio) : "Sem aportes"}
                date={dataAporteMedio}
                isLoading={isLoading}
            />
        </Card>
    );
}
