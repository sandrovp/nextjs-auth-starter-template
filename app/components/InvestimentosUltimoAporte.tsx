'use client';

import { useState, useEffect } from 'react';
import Card from './Card';
import { getAportesByCarteira } from '@/lib/supabase/aportes';
import IconMoneybag from '@/public/icons/icon_moneybag.svg';
import IconHouses from '@/public/icons/icon_houses.svg';
import CardContent from './CardContent';
import Icon from './Icon';
interface Props {
    idCarteira: string;
}

export default function UltimoAporteCard({ idCarteira }: Props) {
    const [ultimoAporte, setUltimoAporte] = useState<number | null>(null);
    const [dataUltimoAporte, setDataUltimoAporte] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function carregarAportes() {
            try {
                setIsLoading(true);
                const aportes = await getAportesByCarteira(idCarteira);

                // Ordenar aportes por data (assumindo que existe um campo data)
                const aportesOrdenados = aportes.sort((a, b) =>
                    new Date(b.data || 0).getTime() - new Date(a.data || 0).getTime()
                );

                // Pegar o último aporte (mais recente)
                const ultimo = aportesOrdenados.length > 0 ? aportesOrdenados[0] : null;

                if (ultimo) {
                    setUltimoAporte(ultimo.valor_previsto || 0);
                    setDataUltimoAporte(ultimo.data ? new Date(ultimo.data).toLocaleDateString('pt-BR') : null);
                }
            } catch (error) {
                console.error("Erro ao carregar último aporte:", error);
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
