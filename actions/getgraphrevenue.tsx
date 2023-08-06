import prismadb from '@/lib/prismadb';

interface GraphDataProps {
	name: string;
	total: number;
}

export const getGraphRevenue = async (storeId: string) => {
	const paidOrders = await prismadb.order.findMany({
		where: {
			storeId,
			isPaid: true,
		},
		include: {
			orderItems: {
				include: {
					product: true,
				},
			},
		},
	});

	const monthlyRevenue: { [key: number]: number } = {};

	for (const order of paidOrders) {
		let revenueForOrder = 0;
		const month = order.createdAt.getMonth();
		for (const item of order.orderItems) {
			revenueForOrder += item.product.price.toNumber();
		}

		monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder;
	}

	const graphData: GraphDataProps[] = [
		{ name: 'JA', total: 0 },
		{ name: 'FE', total: 0 },
		{ name: 'MR', total: 0 },
		{ name: 'AP', total: 0 },
		{ name: 'MY', total: 0 },
		{ name: 'JN', total: 0 },
		{ name: 'JL', total: 0 },
		{ name: 'AU', total: 0 },
		{ name: 'SE', total: 0 },
		{ name: 'OC', total: 0 },
		{ name: 'NV', total: 0 },
		{ name: 'DE', total: 0 },
	];
	for (const month in monthlyRevenue) {
		graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)];
	}

	return graphData;
};
