"use client";

import { useState, useEffect } from "react";

// components
import Nav from "./Nav";

// shadcn components
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

// context
import { useTheme } from "../context/ThemeContext";

// react
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
	const { theme, toggleTheme } = useTheme();
	const [borderColor, setBorderColor] = useState("border border-cyber");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		setBorderColor(theme === "green" ? "border-cyber" : "border-dev");
	}, [theme]);

	const handleNav = () => {
		setMenuOpen((prevMenu) => !prevMenu);
	};

	return (
		<header className="mb-10 h-[100px]">
			<div className="items-center grid grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr]">
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
				<div className="flex justify-self-end items-center gap-4">
					<Button
						onClick={toggleTheme}
						className={`hidden md:flex border-3 cursor-pointer transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-100 ${borderColor}`}
					>
						{theme === "green" ? `CYBER` : `DEV`}
					</Button>
					{/* Mobile Nav */}
					<div
						onClick={handleNav}
						className="justify-self-end cursor-pointer lg:hidden"
					>
						<CiMenuFries
							className={`text-h3 md:text-h2 font-bold ${
								theme === "green" ? `text-cyber` : `text-dev`
							}`}
						/>
					</div>
				</div>
			</div>
			<div
				className={`fixed top-0 w-[65%] sm:w-[45%] lg:hidden h-screen bg-my-bgcolor p-10 ease-in duration-500 z-999 ${
					menuOpen ? "left-0" : "left-[-100%]"
				}`}
			>
				<Button
					onClick={toggleTheme}
					className={`flex md:hidden w-[100%] border-3 cursor-pointer transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-100 ${borderColor} mb-8`}
				>
					{theme === "green" ? `CYBER` : `DEV`}
				</Button>
				<Nav />
			</div>
		</header>
	);
};

export default Header;
