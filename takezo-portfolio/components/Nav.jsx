"use client";

// react
import { useEffect, useState } from "react";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";

// context 
import { useTheme } from "@/context/ThemeContext";


const links = [
	{
		name: "About",
		path: "/",
	},
	{
		name: "Projects",
		path: "/projects",
	},
	{
		name: "Services",
		path: "/services",
	},
];

const Nav = () => {
	const { theme } = useTheme();
	const pathname = usePathname();
	const [fontColor, setFontColor] = useState("text-cyber");
	useEffect(() => {
		setFontColor(theme === "green" ? "text-cyber" : "text-dev");
	}, [theme]);

	return (
		<nav className={`flex max-lg:flex-col gap-10 items-center font-semibold`}>
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={link.name}
						className={`w-[100%] pb-2 border-b border-gray-700 lg:pb-0 lg:w-[auto] lg:border-none ${
							pathname === link.path ? fontColor : "text-neutral-50"
						} transition-text duration-200 ${
							theme === "green" ? `hover:text-cyber` : `hover:text-dev`
						}`}
					>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
