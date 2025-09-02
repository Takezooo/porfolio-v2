"use client";

import { useState, useEffect } from "react";

// components
import Nav from "./Nav";
import { useTheme } from "../context/ThemeContext";

// shadcn components
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Header = () => {
	const { theme, toggleTheme } = useTheme();
	const [borderColor, setBorderColor] = useState("border border-cyber");
	useEffect(() => {
		setBorderColor(theme === "green" ? "border-cyber" : "border-dev");
	}, [theme]);

	return (
		<header className="mb-10 h-[100px]">
			{/* flex items-center justify-between */}
			<div className="items-center grid md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
				{/* Logo */}
				<Link href="/" className="col-start-1">
					<Image
						src={
							theme === "green"
								? `../assets/green-header-logo.svg`
								: `../assets/blue-header-logo.svg`
						}
						width={170}
						height={100}
						alt={
							theme === "green"
								? `Green Takezo's Randomness Header Logo`
								: `Blue Takezo's Randomness Header Logo`
						}
					/>
				</Link>
				{/* Desktop Nav */}
				<div className="hidden lg:flex text-nav">
					<Nav />
				</div>
				<div className="hidden md:flex justify-self-end items-center gap-4">
					<Link href="/contact">
						<Button
							className={`border-3 font-semibold !px-4 !py-4 bg-my-bgcolor cursor-pointer transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-100 ${borderColor}`}
						>
							Let's Talk
						</Button>
					</Link>
					<Button
						onClick={toggleTheme}
						className={`border-3 cursor-pointer transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-100 ${borderColor}`}
					>
						{theme === "green" ? `CYBER` : `DEV`}
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
