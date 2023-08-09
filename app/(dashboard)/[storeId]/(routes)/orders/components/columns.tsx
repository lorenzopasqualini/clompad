"use client"
import { ColumnDef } from "@tanstack/react-table";
import { cn } from '@/lib/utils';

export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "isPaid",
    header: "Paid",
    cell: ({ row }) => (
      <div
        className={cn(
          'border h-3 w-3 rounded-md',
          row.original.isPaid ? 'bg-green-500' : 'bg-rose-500'
        )}
      />
    ),
  },
  {
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "totalPrice",
    header: "Total price",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
];