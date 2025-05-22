'use client';

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from './Card';
type Investimento = {
    id: string;
    nome_ativo: string;
    valor_investido: number;
};

const COLORS = ['#4A6886', '#E0445C', '#A1B56C', '#FFD166', '#EF476F', '#118AB2', '#06D6A0'];

type Props = {
    data: Investimento[];
};

export default function InvestimentosDonutChart({ data }: Props) {
    const total = data.reduce((acc, item) => acc + item.valor_investido, 0);

    const chartData = data.map((item) => ({
        name: item.nome_ativo,
        value: item.valor_investido,
    }));

    return (
        <Card>
            <h2 className="title-block">Total de Investimentos Assinados</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={3}
                        dataKey="value"
                        label={(entry) => `R$ ${Number(entry.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                        cornerRadius={4}
                    >
                        {chartData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={[
                                '#4A6886',
                                '#6B89A7',
                                '#8FABC9',
                                '#B3CDED',
                                '#D6E5F2',
                                '#E8F1F8'
                            ][index % 7]} />
                        ))}
                    </Pie>
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                    >
                        <tspan x="50%" dy="0" dx="-100" fontFamily='Inter'  fontSize="16" fontWeight="bold" fill="#081B2F">
                            {`R$ ${total >= 1000000 
                                ? (total/1000000).toFixed(1) + 'M' 
                                : total >= 1000 
                                    ? (total/1000).toFixed(1) + 'K'
                                    : total.toFixed(2)
                            }`}
                        </tspan>
                    </text>
                    <Tooltip
                        formatter={(value) =>
                            <span style={{fontFamily: 'Inter'}}>
                                {`R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                            </span>
                        }
                    />
                    <Legend 
                        layout="vertical" 
                        align="right" 
                        verticalAlign="middle"
                        wrapperStyle={{
                            maxWidth: '200px',
                            overflowWrap: 'break-word'
                        }}
                        formatter={(value, entry) => {
                            const dataPoint = chartData.find(item => item.name === value);
                            return <span style={{fontFamily: 'Inter'}}>
                                {value} - R$ {Number(dataPoint?.value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </span>
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>

            
        </Card>
    );
}
