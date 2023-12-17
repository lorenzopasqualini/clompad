'use client';
import { useParams, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react'

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	const pathname = usePathname();
	const params = useParams();
	const [menuOpen, setMenuOpen] = useState(false);
	const routes = [
		{
			href: `/${params.storeId}`,
			label: 'Dashboard',
			active: pathname === `/${params.storeId}`,
		},
		{
			href: `/${params.storeId}/billboards`,
			label: 'Billboards',
			active: pathname === `/${params.storeId}/billboards`,
		},
		{
			href: `/${params.storeId}/categories`,
			label: 'Categories',
			active: pathname === `/${params.storeId}/categories`,
		},
		{
			href: `/${params.storeId}/sizes`,
			label: 'Sizes',
			active: pathname === `/${params.storeId}/sizes`,
		},
		{
			href: `/${params.storeId}/colors`,
			label: 'Colors',
			active: pathname === `/${params.storeId}/colors`,
		},
		{
			href: `/${params.storeId}/products`,
			label: 'Products',
			active: pathname === `/${params.storeId}/products`,
		},
		{
			href: `/${params.storeId}/orders`,
			label: 'Orders',
			active: pathname === `/${params.storeId}/orders`,
		},
		{
			href: `/${params.storeId}/settings`,
			label: 'Settings',
			active: pathname === `/${params.storeId}/settings`,
		},
	];

	return (
		<nav
			className={cn('flex flex-col lg:flex-row items-center lg:space-x-6', className)}
			{...props}
		>
			<button
				className="lg:hidden p-2"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle Navigation Menu"
			>
				Menu
			</button>

			<div
				className={cn(
					'lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6',
					{ hidden: !menuOpen }
				)}
			>
				{routes.map((route) => (
					<Link
						key={route.href}
						href={route.href}
						className={cn(
							'text-sm font-medium transition-colors hover:text-primary',
							route.active
								? 'text-black dark:text-white'
								: 'text-muted-foreground'
						)}
					>
						{route.label}
					</Link>
				))}
			</div>
		</nav>
	);
}
