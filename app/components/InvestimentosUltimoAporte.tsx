'use client';

import { useState, useEffect } from 'react';
import Card from './Card';
import { getUltimoAporte } from '@/lib/supabase/aportes';
import IconMoneybag from '@/public/icons/icon_moneybag.svg';
import IconHouses from '@/public/icons/icon_houses.svg';
import CardContent from './CardContent';
import Icon from './Icon';
interface Props {
    idCarteira: string;
}

export default function UltimoAporteCard({ idCarteira }: Props) {

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
        <Card className=" justify-center">
            <CardContent
                title="Último aporte"
                icon={IconMoneybag}
                value={ultimoAporte !== null ? formatCurrency(ultimoAporte) : "Sem aportes"}
                date={dataUltimoAporte}
                isLoading={isLoading}
            />
        </Card>
    );
}
