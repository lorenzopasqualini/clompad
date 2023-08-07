'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { cn } from '@/lib/utils';

export type ProductColumn = {
	id: string;
	name: string;
	price: string;
	size: string;
	category: string;
	color: string;
	isFeatured: boolean;
	isArchived: boolean;
	createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
	{
		accessorKey: 'name',
		header: 'Name',
	},
	{
		accessorKey: 'isArchived',
		header: 'Archived',
		cell: ({ row }) => (
			<div
				className={cn(
					'border h-3 w-3 rounded-md',
					row.original.isArchived ? 'bg-rose-500' : 'bg-green-500'
				)}
			/>
		),
	},
	{
		accessorKey: 'isFeatured',
		header: 'Featured',
		cell: ({ row }) => (
			<div
				className={cn(
					'border h-3 w-3 rounded-md',
					row.original.isFeatured ? 'bg-indigo-500' : 'bg-white'
				)}
			/>
		),
	},
	{
		accessorKey: 'price',
		header: 'Price',
	},
	{
		accessorKey: 'category',
		header: 'Category',
	},
	{
		accessorKey: 'size',
		header: 'Size',
	},
	{
		accessorKey: 'color',
		header: 'Color',
		cell: ({ row }) => (
			<div className="flex items-center gap-x-2">
				<div
					className="h-6 w-6 rounded-full border"
					style={{ backgroundColor: row.original.color }}
				/>
					{row.original.color}
			</div>
		),
	},
	{
		accessorKey: 'createdAt',
		header: 'Date',
	},
	{
		id: 'actions',
		cell: ({ row }) => <CellAction data={row.original} />,
	},
];
