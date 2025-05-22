'use client';

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from '@tanstack/react-table';
import { useState } from 'react';

type Aporte = {
  id: string;
  valor_aporte: number;
  data_aporte: string;
  status: string;
};

type Investimento = {
  id: string;
  nome_ativo: string;
  localizacao: string;
  tipo_ativo: string;
  valor_investido: number;
  participacao_percentual: number;
  data_investimento: string;
  status: string;
  aportes: Aporte[];
};

type Props = {
  data: Investimento[];
};

export function InvestimentosTable({ data }: Props) {
  const columns: ColumnDef<Investimento>[] = [
    {
      accessorKey: 'nome_ativo',
      header: 'Ativo',
    },
    {
      accessorKey: 'localizacao',
      header: 'Localização',
    },
    {
      accessorKey: 'tipo_ativo',
      header: 'Tipo',
    },
    {
      accessorKey: 'valor_investido',
      header: 'Valor Investido',
      cell: (info) =>
        `R$ ${Number(info.getValue() as number).toLocaleString('pt-BR')}`,
    },
    {
      accessorKey: 'participacao_percentual',
      header: 'Participação (%)',
      cell: (info) => `${info.getValue()}%`,
    },
    {
      accessorKey: 'status',
      header: 'Status',
    },
    {
      accessorKey: 'data_investimento',
      header: 'Data',
      cell: (info) =>
        new Date(info.getValue() as string).toLocaleDateString('pt-BR'),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Investimentos</h2>

      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-b p-2 bg-gray-100 text-left text-sm"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
              <th className="border-b p-2 bg-gray-100 text-left text-sm">Aportes</th>
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <>
              <tr
                key={row.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() =>
                  setExpandedRow(
                    expandedRow === row.original.id ? null : row.original.id
                  )
                }
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-2 border-b text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                <td className="p-2 border-b text-sm">
                  {expandedRow === row.original.id ? '🔼' : '🔽'}
                </td>
              </tr>

              {expandedRow === row.original.id && (
                <tr>
                  <td colSpan={columns.length + 1} className="p-4 bg-gray-50">
                    {row.original.aportes.length === 0 ? (
                      <p className="text-sm text-gray-500">
                        Nenhum aporte encontrado.
                      </p>
                    ) : (
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="p-2 text-left text-xs">Data</th>
                            <th className="p-2 text-left text-xs">Valor</th>
                            <th className="p-2 text-left text-xs">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {row.original.aportes.map((aporte) => (
                            <tr key={aporte.id} className="hover:bg-gray-100">
                              <td className="p-2 text-xs">
                                {new Date(aporte.data_aporte).toLocaleDateString('pt-BR')}
                              </td>
                              <td className="p-2 text-xs">
                                R$ {Number(aporte.valor_aporte).toLocaleString('pt-BR')}
                              </td>
                              <td className="p-2 text-xs capitalize">{aporte.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
