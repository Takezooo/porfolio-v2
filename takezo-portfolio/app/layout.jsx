import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
	title: "Takezo's Portfolio",
	description: "Developed by Dave Jornales",
};

export default function RootLayout({ children }) {
	return (
		<ThemeProvider>
			<html lang="en">
				<body
					className={`antialiased bg-my-bgcolor text-neutral-50 p-10 font-inter`}
				>
					<Header />
					{children}
				</body>
			</html>
		</ThemeProvider>
	);
}
