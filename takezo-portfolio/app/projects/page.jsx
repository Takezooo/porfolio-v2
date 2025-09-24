"use client";

//react
import { useState, useEffect } from "react";

// next
import Image from "next/image";
import Link from "next/link";

// context
import { useTheme } from "../../context/ThemeContext";

// data
import cyberProjects from "./data/cyberProjects";
import devProjects from "./data/devProjects";
import devSkills from "./data/devSkills";

const Projects = () => {
	const { theme } = useTheme();
	const [borderColor, setBorderColor] = useState("border border-cyber");

	useEffect(() => {
		setBorderColor(theme === "green" ? "border-cyber" : "border-dev");
	}, [theme]);

	return (
		<main className="flex flex-col justify-center items-center">
			<div className="w-[100%] md:w-[80%] sm:w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 object-top">
				{theme === "green"
					? cyberProjects.map((item, index) => (
							<div
								key={index}
								className="rounded overflow-hidden shadow-lg flex flex-col"
							>
								<div className="relative">
									<Image
										className="w-full"
										src={`${item.src}`}
										alt="Image placeholder"
										loading="lazy"
										width={100}
										height={100}
									/>
									<div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-my-bgcolor opacity-25"></div>
									<div
										className={`text-xs absolute top-0 right-0 bg-my-bgcolor px-4 py-2 text-white mt-3 mr-3 border-3 ${borderColor}`}
									>
										{item.tech}
									</div>
								</div>
								<div className="py-4 mb-auto">
									<h3
										className={`text-lg md:text-h3 font-semibold mb-2  ${
											theme === "green" ? `text-cyber` : `text-dev`
										}`}
									>
										{item.name}
									</h3>
									<p className="text-neutral-50 text-xs sm:text-base md:text-p">
										{item.description}
									</p>
								</div>
							</div>
					  ))
					: devProjects.map((item, index) => (
							<div
								key={index}
								className={`relative rounded overflow-hidden shadow-lg flex flex-col p-4 group`}
							>
								<div class="-z-1 absolute inset-0 bg-gradient-to-t from-dev via-my-bgcolor opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

								<Link href={`${item.link}`}>
									<div className="relative">
										<Image
											src={item.src}
											alt="Image placeholder"
											loading="lazy"
											width={900}
											height={900}
										/>
										<div className="absolute bottom-0 top-0 right-0 left-0 "></div>
										<div
											className={`text-xs absolute top-0 right-0 bg-my-bgcolor px-4 py-2 text-white mt-3 mr-3 border-3 ${borderColor}`}
										>
											{item.languages}
										</div>
									</div>
									<div className="py-4 mb-auto">
										<h3
											className={`text-lg md:text-h3 font-semibold mb-2  ${
												theme === "green" ? `text-cyber` : `text-dev`
											}`}
										>
											{item.name}
										</h3>
										<p className="text-neutral-50 text-xs sm:text-base md:text-p">
											{item.description}
										</p>
									</div>
								</Link>
							</div>
					  ))}
			</div>
			<div
				className={`w-[100%] md:w-[80%] sm:w-[90%] mt-6 mb-6 flex flex-col gap-4 ${
					theme === "blue" ? "flex" : "hidden"
				}`}
			>
				<h3
					className={`text-lg md:text-h3 font-semibold mb-4 text-dev text-wrap
				`}
				>
					SKILLS ====================
				</h3>

				<div className="flex flex-col gap-3 border-4 border-dashed p-8 mb-[50px]">
					<p className="text-xs sm:text-base md:text-p font-semibold leading-7">
						<span className={`text-dev`}>
							&#9632;&nbsp;&nbsp; LANGUAGES: &nbsp;&nbsp;
						</span>
						{devSkills.languages}
					</p>
					<p className="text-xs sm:text-base md:text-p font-semibold leading-7">
						<span className={`text-dev`}>
							&#9632;&nbsp;&nbsp; DATABASES: &nbsp;&nbsp;
						</span>
						{devSkills.databases}
					</p>
					<p className="text-xs sm:text-base md:text-p font-semibold leading-7">
						<span className={`text-dev`}>
							&#9632;&nbsp;&nbsp; FRAMEWORKS: &nbsp;&nbsp;
						</span>
						{devSkills.frameworks}
					</p>
					<p className="text-xs sm:text-base md:text-p font-semibold leading-7">
						<span className={`text-dev`}>
							&#9632;&nbsp;&nbsp; DEVELOPER TOOLS: &nbsp;&nbsp;
						</span>
						{devSkills.devTools}
					</p>
				</div>
			</div>
		</main>
	);
};

export default Projects;
