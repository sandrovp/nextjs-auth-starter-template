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
            <div className="flex flex-col items-start justify-center p-4 text-center gap-2" >
                <div className="flex items-center gap-4">
                    <Icon icon={IconMoneybag} alt="Icon" />
                    <div className="flex flex-col items-start justify-center">
                        <div className="text-sm text-gray-500 font-inter m-0">Último aporte</div>
                        {isLoading ? (
                            <div className="animate-pulse h-8 w-24 bg-gray-200 rounded"></div>
                        ) : (
                            <>
                                <p className="font-inter font-medium text-2xl text-gray-500 m-0">
                                    {ultimoAporte !== null ? formatCurrency(ultimoAporte) : "Sem aportes"}
                                </p>
                                {dataUltimoAporte && (
                                    <p className="text-xs text-gray-400 mt-1">
                                        {dataUltimoAporte}
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}
