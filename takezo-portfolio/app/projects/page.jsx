"use client";

//react
import { useState, useEffect } from "react";

// next
import Image from "next/image";
import Link from "next/link";

// context
import { useTheme } from "../../context/ThemeContext";

const cyberProjects = [
	{
		name: "WIP",
		description: "Coming Soon",
		tech: "???",
		src: "/assets/cyber-bg.svg",
	},
];
const devProjects = [
	{
		name: "BG FILM",
		description:
			"BG Film website is a site for our group project in school about multimedia. My role here is Producer and Webmaster, which is why I created this website. No frameworks were used because I hadn’t explored them at that time.",
		languages: "HTML, CSS, JS",
		src: "/assets/bgfilm.png",
		link: "https://bgfilm.vercel.app/",
	},
	{
		name: "PlatzDodge",
		description:
			"It's group project, horizontal endless dodging game inspired by raylib game examples Space Invaders and Dr. turtle & Mr. gamera.",
		languages: "C, Raylib",
		src: "/assets/platzdodge.png",
		link: "https://github.com/Takezooo/Platz-Dodge",
	},
	{
		name: "Decima",
		description:
			"This was a game dev school group project. The title comes from the word decima, meaning 'tenth,' as the game is based on the ten circles of hell. It’s a side-scrolling platformer made with free assets that I modified for color, along with free music.",
		languages: "C#, Unity",
		src: "/assets/decima.png",
		link: "https://dtakezo.itch.io/decima",
	},
	{
		name: "League of Legends Smart Overlay",
		description: "Org Repo",
		languages: "Riot API",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
	{
		name: "Valorant Manually-controlled Overlay",
		description: "Org Repo",
		languages: "React, Socket.io",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
	{
		name: "Mobile Legends Manually-controlled Overlay",
		description: "Org Repo",
		languages: "React, Socket.io",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
	{
		name: "Call of Duty: Mobile Manually-controlled Overlay   ",
		description: "Org Repo",
		languages: "React, Socket.io",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
	{
		name: "iZip",
		description:
			"Group Project, forked repo (ethanbrimhall/kahoot-clone-nodejs ), Kahoot clone",
		languages: "JavaScript, Nodejs",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
	{
		name: "Bookstore System",
		description: "Practice Project",
		languages: "MERN Stack",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
	{
		name: "Library Management System",
		description: "Group Project, unfinished",
		languages: "Java",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
	{
		name: "ATM Project with Flashdrive",
		description: "School Project",
		languages: "C",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
	{
		name: "iRenta",
		description: "Capstone, Airbnb clone?",
		languages: "MERN Stack",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
	{
		name: "Takezo's Blog Site",
		description: "WIP",
		languages: "???",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
	{
		name: "Breeding Sim",
		description: "WIP",
		languages: "Unity, C#, PostgreSQL, Node",
		src: "/assets/dev-bg.svg",
		link: "/projects",
	},
];

const devSkills = {
	languages: "HTML, CSS, JavaScript, C, C++, C#, Python, Java",
	databases: "MongoDB, PostgreSQL, MySQL",
	frameworks: "ReactJs, AngularJs, Next.js, Tailwind, Bootstrap 5",
	devTools: "Git, Github, Figma, Postman, VS Code",
};

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
