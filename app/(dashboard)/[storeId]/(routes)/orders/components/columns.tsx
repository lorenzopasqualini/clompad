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
    accessorKey: "products",
    header: "Products",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "totalPrice",
    header: "Total price",
  },
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
];