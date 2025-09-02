"use client";

import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";

const defaultContent = {
	initialTitle: "Building My Path in Cybersecurity",
	introOne:
		"I’m an aspiring Cybersecurity Professional with a strong foundation in system analysis, programming, and web technologies. I have joined Capture-the-Flag competitions like HackForGov and continue to sharpen my skills in ethical hacking and penetration testing.",
	introTwo:
		"My journey started in Information Systems, and along the way, I’ve explored both development and security, but my passion lies in protecting systems, analyzing threats, and solving complex security challenges.",
	introThree:
		"Through workshops, certifications, and hands-on practice, I’m building the expertise to help organizations secure their digital assets while continuously learning in this fast-evolving field.",
};

const devContent = {
	initialTitle: "Full-Stack Developer in the Making",
	introOne:
		"I’m an aspiring Software and Web Developer with experience in frontend and backend development, system analysis, and project collaboration. I’ve worked on projects ranging from full-stack web applications like iRenta to game development using Unity and C, showcasing both technical skill and creativity.",
	introTwo:
		"My journey in Information Systems has given me a strong foundation in programming, databases, and frameworks such as ReactJS, AngularJS, Node.js, and MongoDB. I enjoy transforming ideas into functional, user-friendly applications while working in collaborative environments.",
	introThree:
		"Through internships, leadership roles, and continuous practice, I’m building the expertise to develop scalable, efficient, and innovative solutions that address real-world challenges.",
};

const cyberSkills = [];
const devSkills = [];
const cyberCerts = [];
const devCerts = [];
const cyberExp = ["test", "test2"];
const devExp = ["test", "test2"];

export default function Home() {
	const numOfDashes = 10;
	const { theme } = useTheme();
	const [content, setContent] = useState(defaultContent);

	useEffect(() => {
		theme === "green" ? setContent(defaultContent) : setContent(devContent);
	}, [theme]);

	return (
		<main
			className={`flex flex-col justify-center items-center container mx-auto px-4`}
		>
			<Image
				className={`absolute -z-1 object-top h-[100vh] !top-[120px] !overflow-x-hidden ${
					theme !== "green" && `!left-[0]`
				}`}
				src={
					theme === "green" ? `./assets/cyber-bg.svg` : `./assets/dev-bg.svg`
				}
				layout="fill"
				objectFit={theme === "green" ? `cover` : `contain`}
				quality={100}
				alt="Cyber Page Background"
			/>
			<div className="w-[100%] md:w-[80%] sm:w-[90%] mb-4 md:mb-10">
				<h2 className="text-lg md:text-h2 sm:text-h3 font-bold">Hello I'm</h2>
				<h1
					className={`text-h3 md:text-h1 sm:text-h2 font-bold ${
						theme === "green" ? `text-cyber` : `text-dev`
					}`}
				>
					Dave Jornales
				</h1>
				<h2 className="text-lg md:text-h2 sm:text-h3 font-bold">
					{content.initialTitle}
				</h2>
			</div>
			<div className="w-[100%] md:w-[80%] sm:w-[90%] flex flex-col justify-center md:pl-[30px] md:border-l-4 -neutral-50 text-p">
				<h3
					className={`text-lg md:text-h3 font-semibold mb-6 md:pl-4  ${
						theme === "green" ? `text-cyber` : `text-dev`
					}`}
				>
					INTRO
				</h3>
				<div className="flex flex-col gap-5 sm:pl-0 text-xs sm:text-base md:text-p md:p-4 ">
					<p>{content.introOne}</p>
					<p>{content.introTwo}</p>
					<p>{content.introThree}</p>
				</div>
			</div>
			<div className="w-[100%] md:w-[80%] sm:w-[90%] grid grid-cols-2 mt-10">
				<div>
					<div className={`${theme === "green" && `hidden`}`}>
						<h3
							className={`justify-self-start text-lg md:text-h3 font-semibold mb-6 ${
								theme === "green" ? `text-cyber` : `text-dev`
							}`}
						>
							EXPERIENCE
						</h3>
						{theme === "green"
							? cyberExp.map((item) => {
									return (
										<p className="text-xs sm:text-base md:text-p">
											- {item}
											<br />-
										</p>
									);
							  })
							: devExp.map((item) => {
									return (
										<p className="text-xs sm:text-base md:text-p">
											- {item}
											<br />-
										</p>
									);
							  })}
					</div>
					<div>
						<h3
							className={`justify-self-start text-lg md:text-h3 font-semibold mb-6 ${
								theme === "green" ? `text-cyber` : `text-dev`
							}`}
						>
							CERTIFICATES
						</h3>
					</div>
				</div>

				<div>
					{" "}
					<h3
						className={`justify-self-end text-lg md:text-h3 font-semibold mb-6 ${
							theme === "green" ? `text-cyber` : `text-dev`
						}`}
					>
						CONTACT
					</h3>{" "}
				</div>
			</div>
		</main>
	);
}
