'use client';

import { useState, useEffect } from 'react';
import Card from './Card';
import { getAportesByCarteira } from '@/lib/supabase/aportes';
import IconMoneybag from '@/public/icons/icon_moneybag.svg';
import IconHouses from '@/public/icons/icon_houses.svg';
import Icon from './Icon';
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
        <Card className=" justify-center">
            <div className="flex flex-col items-start justify-center p-4 text-center gap-2" >
                <div className="flex items-center gap-4">
                    <Icon icon={IconHouses} alt="Icon" />
                    <div className="flex flex-col items-start justify-center">
                        <div className="text-sm text-gray-500 font-inter m-0">Próximos aportes</div>
                        {isLoading ? (
                            <div className="animate-pulse h-8 w-24 bg-gray-200 rounded"></div>
                        ) : (
                            <>
                                <p className="font-inter font-medium text-2xl text-gray-500 m-0">
                                    {formatCurrency(totalAportes)}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}
