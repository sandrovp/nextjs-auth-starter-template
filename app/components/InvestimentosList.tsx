'use client';
import { Card, CardHeader, CardDescription, CardTitle } from "./card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type InvestimentosListProps = {
  investimentos: any[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export default function InvestimentosList({
  investimentos,
  selectedId,
  onSelect,
}: InvestimentosListProps) {
  return (
    <Card className="@container/card flex-1">
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-semibold">
            Investimentos
          </CardTitle>
        </CardHeader>
        <CardDescription className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">Nome</TableHead>
                <TableHead className="w-[50%]">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investimentos.map((inv) => (
                <TableRow
                  key={inv.id}
                  onClick={() => onSelect(inv.id)}
                  className={`cursor-pointer hover:bg-gray-100 ${
                    selectedId === inv.id ? 'bg-[#F4F7FE] text-[#061B2E]' : ''
                  }`}
                >
                  <TableCell className="text-sm font-medium text-[#061B2E]">
                    {inv.nome_ativo}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-[#061B2E]">
                    R$ {Number(inv.valor_investido).toLocaleString('pt-BR')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>          
        </CardDescription>
    </Card>
    
  );
}
