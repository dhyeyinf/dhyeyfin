import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Dhyey Findoriya - ML Enthusiast',
	description:
		'Portfolio of Dhyey Findoriya, a machine learning enthusiast passionate about building intelligent systems, automation tools, and data-driven solutions.',
	keywords: [
		'Machine Learning',
		'Artificial Intelligence',
		'ML Enthusiast',
		'Data Science',
		'Python',
		'Deep Learning',
		'Streamlit',
		'OpenSearch',
		'LangChain',
		'GitHub MCP',
		'Dhyey Findoriya',
	],
	authors: [{ name: 'Dhyey Findoriya' }],
	creator: 'Dhyey Findoriya',
	openGraph: {
		title: 'Dhyey Findoriya - ML Enthusiast Portfolio',
		description: 'Exploring the intersection of intelligent systems and real-world applications through ML and automation.',
		url: 'https://your-domain.com',
		siteName: 'Dhyey Findoriya - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Dhyey Findoriya - ML Enthusiast Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Dhyey Findoriya - ML Enthusiast',
		description: 'Building intelligent and scalable solutions through ML, AI, and modern tools.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
