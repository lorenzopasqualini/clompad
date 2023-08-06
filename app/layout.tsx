import './globals.css';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/providers/themeProvider';
import { ToasterProvider } from '@/providers/toastProvider';
import { ModalProvider } from '@/providers/modalProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Clompad',
	description: 'Clomp Admin Dashboard',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem />
					<ToasterProvider />
					<ModalProvider />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
