'use client';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { columns, CategoryColumn } from './columns';
import { ApiList } from '@/components/ui/apilist';

interface CategoryClientProps {
	data: CategoryColumn[];
}

export const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
	const params = useParams();
	const router = useRouter();

	return (
		<>
			<div className="flex items-center justify-between">
				<Heading
					title={`Categories (${data.length})`}
					description="Manage categories for your store"
				/>
				<Button
					onClick={() => router.push(`/${params.storeId}/categories/new`)}
				>
					<Plus className="mr-2 h-4 w-4" /> Add New
				</Button>
			</div>
			<Separator />
			<DataTable searchKey="name" columns={columns} data={data} />
			<Heading title="API" description="API Categories Calls" />
			<Separator />
			<ApiList entityName="categories" entityIdName="categoryId" />
		</>
	);
};
