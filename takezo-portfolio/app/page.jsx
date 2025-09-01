"use client";

import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

export default function Home() {
	const defaultContent = {
		intro: "test",
	};
	const { theme } = useTheme();
	const [content, setContent] = useState(defaultContent);

	return (
		<main>
			<Image
				className={`absolute -z-1 object-top ${
					theme === "green" ? `pt-[120px]` : `pt-0 pl-[150px]`
				}`}
				src={
					theme === "green" ? `./assets/cyber-bg.svg` : `./assets/dev-bg.svg`
				}
				layout="fill"
				objectFit="cover"
				quality={100}
				alt="Cyber Page Background"
			/>
			<div className="bg-my-bgcolor">{content.name}</div>
		</main>
	);
}
