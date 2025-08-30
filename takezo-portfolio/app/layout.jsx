import { Inter } from "next/font/google";

import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	variable: "--font-inter",
});

export const metadata = {
	title: "Takezo's Portfolio",
	description: "Developed by Dave Jornales",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} antialiased bg-primary text-neutral-50`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
