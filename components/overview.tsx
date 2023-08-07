'use client';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';

interface OverviewProps {
	data: any[];
}

export const Overview: React.FC<OverviewProps> = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={390}>
			<BarChart data={data}>
				<XAxis
					dataKey="name"
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={(value) => `$${value}`}
				/>
				<Bar dataKey="total" fill="#5c39fc" radius={[6, 6, 6, 6]} />
			</BarChart>
		</ResponsiveContainer>
	);
};
