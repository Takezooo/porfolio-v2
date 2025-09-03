"use client";

// next
import Image from "next/image";
import Link from "next/link";

// context
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";

// contents
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

const achievements = [
	"Participant at 2025 National AI Prompt Design Challenge Philippines at Asian Institute of Management Makati City, Philippines.",
	"Participant at 2024 TUP Tech Guild Technolympics",
	"Participant at 2024 HackForGov 3 CTF Competition Manila, Philippines",
	"Participant at 2023 HackForGov 2 CTF Competition Manila, Philippines",
];

const certs = {
	cyberCertOne: {
		provider: "MSTCONNECT EDUCATIONAL CONSULTANCY",
		name: "Ethical Hacking & Pentesting Workshop: An Introduction to Hacking , Pentesting, and Cybersecurity",
		date: "July 5-6, 2025",
	},
	devCertOne: {
		provider: "Code Signal",
		name: "Prompt Engineering for Everyone",
		date: "May 6, 2025",
	},
	devCertTwo: {
		provider: "HubSpot Academy",
		name: "SEO Certified",
		date: "March 2025",
	},
	devCertThree: {
		provider: "ZUITT Free Coding Bootcamp",
		name: "JavaScript Game Development Workshop",
		date: "August 24-25, 2024",
	},
};

const cyberExp = ["NONE"];
const devExp = {
	expOne: {
		role: "WordPress Developer",
		companyAndDuration: "(Start Up Company, 06/2024 - 12/2024)",
	},
	expTwo: {
		role: "WordPress Developer Team Leader",
		companyAndDuration: "(Start Up Company, 01/2025 - 08/2025)",
	},
	expThree: {
		role: "Web Developer Trainee",
		companyAndDuration: "(Easycom Japan Philippines Inc., 02/2025 - 05/2025)",
	},
	expFour: {
		role: "Developer Head Officer",
		companyAndDuration:
			"(TUP Gaming Enthusiasts Association Ring, 06/2022 - 08/2025)",
	},
};

export default function Home() {
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
				className={`z-1 object-top !top-[150px] !overflow-x-hidden
        ${theme !== "green" && "!left-[0]"}
				}`}
				src={
					theme === "green" ? `./assets/cyber-bg.svg` : `./assets/dev-bg.svg`
				}
				fill
				objectFit="contain"
				alt="Cyber Page Background"
			/>
			<div className="w-[100%] md:w-[80%] sm:w-[90%] mb-4 md:mb-10 mt-10 ">
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
					className={`text-lg md:text-h3 font-semibold mb-2 md:pl-4  ${
						theme === "green" ? `text-cyber` : `text-dev`
					}`}
				>
					INTRO
				</h3>
				<div className="flex flex-col gap-5 mb-2 sm:pl-0 text-xs sm:text-base md:text-p md:p-4 ">
					<p>{content.introOne}</p>
					<p>{content.introTwo}</p>
					<p>{content.introThree}</p>
				</div>
				<h3
					className={`text-lg md:text-h3 font-semibold mt-2 mb-2 md:pl-4  ${
						theme === "green" ? `text-cyber` : `text-dev`
					}`}
				>
					EDUCATION
				</h3>
				<div className="md:pl-4 mb-2">
					<div className="flex flex-wrap justify-between">
						<div className="flex flex-col gap-1 mb-2">
							<p className="text-xs sm:text-base md:text-p font-semibold">
								<span
									className={`${theme === "green" ? `text-cyber` : `text-dev`}`}
								>
									&#9632;&nbsp;&nbsp;
								</span>
								Technological University of the Philippines - Manila
							</p>
							<p className="text-xs sm:text-base md:text-p font-semibold">
								Bachelor of Science in Information Systems
							</p>
							<p className="text-xs sm:text-base md:text-p italic">
								2021 - August 7, 2025
							</p>
						</div>
						<div className="flex flex-col gap-1">
							<p className="text-xs sm:text-base md:text-p font-semibold">
								<span
									className={`${theme === "green" ? `text-cyber` : `text-dev`}`}
								>
									&#9632;&nbsp;&nbsp;
								</span>
								Pasay City South High School
							</p>
							<p className="text-xs sm:text-base md:text-p font-semibold">
								TVL - Information and Communication Technology
							</p>
							<p className="text-xs sm:text-base md:text-p italic">
								2019 - 2021
							</p>
						</div>
					</div>
				</div>
				<h3
					className={`text-lg md:text-h3 font-semibold mt-2 mb-2 md:pl-4  ${
						theme === "green" ? `text-cyber` : `text-dev`
					}`}
				>
					ACHIEVEMENTS
				</h3>
				<div className="md:pl-4">
					{achievements.map((item, index) => (
						<p className="mb-2 text-xs sm:text-base md:text-p" key={index}>
							<span
								className={`${theme === "green" ? `text-cyber` : `text-dev`}`}
							>
								&#9632;&nbsp;&nbsp;
							</span>
							{item}
						</p>
					))}
				</div>
			</div>
			<div className="w-[100%] md:w-[80%] sm:w-[90%] pt-[20px] pb-[20px] text-center border-b-4 border-dashed">
				{" "}
			</div>

			<div className="w-[100%] md:w-[80%] sm:w-[90%] flex justify-between flex-wrap mt-10">
				<div className="flex-grow">
					<div className={`${theme === "green" && `hidden`}`}>
						<h3
							className={`justify-self-start text-lg md:text-h3 font-semibold mb-6 ${
								theme === "green" ? `text-cyber` : `text-dev`
							}`}
						>
							EXPERIENCE
						</h3>
						{theme === "green" ? (
							cyberExp.map((item, index) => {
								return (
									<p className="text-xs sm:text-base md:text-p" key={index}>
										- {item}
										<br />-
									</p>
								);
							})
						) : (
							<div className={`flex flex-col gap-2 mb-10`}>
								<p className="text-xs sm:text-base md:text-p">
									- <span className="font-semibold">{devExp.expOne.role}</span>
								</p>
								<p className="text-xs sm:text-base md:text-p italic">
									- {devExp.expOne.companyAndDuration}
								</p>
								<p className="text-xs sm:text-base md:text-p">
									- <span className="font-semibold">{devExp.expTwo.role}</span>
								</p>
								<p className="text-xs sm:text-base md:text-p italic">
									- {devExp.expTwo.companyAndDuration}
								</p>
								<p className="text-xs sm:text-base md:text-p">
									-{" "}
									<span className="font-semibold">{devExp.expThree.role}</span>
								</p>
								<p className="text-xs sm:text-base md:text-p italic">
									- {devExp.expThree.companyAndDuration}
								</p>
								<p className="text-xs sm:text-base md:text-p">
									- <span className="font-semibold">{devExp.expFour.role}</span>
								</p>
								<p className="text-xs sm:text-base md:text-p italic">
									- {devExp.expFour.companyAndDuration}
								</p>
							</div>
						)}
					</div>
					<div>
						<h3
							className={`justify-self-start text-lg md:text-h3 font-semibold mb-6 ${
								theme === "green" ? `text-cyber` : `text-dev`
							}`}
						>
							CERTIFICATES
						</h3>
						<div className={`w-[100%] sm:w-[450px] flex flex-col gap-2 mb-10`}>
							<div className="flex flex-col gap-1">
								<p className="text-xs sm:text-base md:text-p font-semibold">
									<span
										className={`${
											theme === "green" ? `text-cyber` : `text-dev`
										}`}
									>
										&#9632;&nbsp;&nbsp;
									</span>
									{certs.cyberCertOne.provider}
								</p>
								<p className="text-xs sm:text-base md:text-p font-semibold">
									{certs.cyberCertOne.name}
								</p>
								<p className="text-xs sm:text-base md:text-p italic">
									{certs.cyberCertOne.date}
								</p>
							</div>
							<p
								className={`justify-self-start text-xs sm:text-base md:text-p font-semibold font-semibold mt-3 mb-1 ${
									theme === "green" ? `text-cyber` : `hidden`
								}`}
							>
								Other tech related certificates
							</p>
							<div className="flex flex-col gap-1 mt-2 mb-2">
								<p className="text-xs sm:text-base md:text-p font-semibold">
									<span
										className={`${
											theme === "green" ? `text-cyber` : `text-dev`
										}`}
									>
										&#9632;&nbsp;&nbsp;
									</span>
									{certs.devCertOne.provider}
								</p>
								<p className="text-xs sm:text-base md:text-p font-semibold">
									{certs.devCertOne.name}
								</p>
								<p className="text-xs sm:text-base md:text-p italic">
									{certs.devCertOne.date}
								</p>
							</div>
							<div className="flex flex-col gap-1 mb-2">
								<p className="text-xs sm:text-base md:text-p font-semibold">
									<span
										className={`${
											theme === "green" ? `text-cyber` : `text-dev`
										}`}
									>
										&#9632;&nbsp;&nbsp;
									</span>
									{certs.devCertTwo.provider}
								</p>
								<p className="text-xs sm:text-base md:text-p font-semibold">
									{certs.devCertTwo.name}
								</p>
								<p className="text-xs sm:text-base md:text-p italic">
									{certs.devCertTwo.date}
								</p>
							</div>
							<div className="flex flex-col gap-1 mb-2">
								<p className="text-xs sm:text-base md:text-p font-semibold">
									<span
										className={`${
											theme === "green" ? `text-cyber` : `text-dev`
										}`}
									>
										&#9632;&nbsp;&nbsp;
									</span>
									{certs.devCertThree.provider}
								</p>
								<p className="text-xs sm:text-base md:text-p font-semibold">
									{certs.devCertThree.name}
								</p>
								<p className="text-xs sm:text-base md:text-p italic">
									{certs.devCertThree.date}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[100%] sm:w-[450px] flex-grow">
					<h3
						className={`justify-self-start text-lg md:text-h3 font-semibold mb-6 ${
							theme === "green" ? `text-cyber` : `text-dev`
						}`}
					>
						SOCIALS
					</h3>
					<div className="text-xs sm:text-base md:text-p font-semibold justify-self-start text-left flex flex-col gap-2">
						<Link
							href="https://www.linkedin.com/in/dave-martin-jornales-850297198/"
							className={`${
								theme === "green" ? `hover:text-cyber` : `hover:text-dev`
							}`}
						>
							<span
								className={`${theme === "green" ? `text-cyber` : `text-dev`}`}
							>
								&#9632;&nbsp;&nbsp;&nbsp;
							</span>
							LinkedIn ===================
						</Link>
						<Link
							href="https://github.com/Takezooo"
							className={`${
								theme === "green" ? `hover:text-cyber` : `hover:text-dev`
							}`}
						>
							<span
								className={`${theme === "green" ? `text-cyber` : `text-dev`}`}
							>
								&#9632;&nbsp;&nbsp;&nbsp;
							</span>
							GitHub ====================
						</Link>
						<Link
							href="https://www.youtube.com/@takezosrandomness"
							className={`${
								theme === "green" ? `hover:text-cyber` : `hover:text-dev`
							}`}
						>
							<span
								className={`${theme === "green" ? `text-cyber` : `text-dev`}`}
							>
								&#9632;&nbsp;&nbsp;&nbsp;
							</span>
							YouTube ===================
						</Link>
						<Link
							href="https://www.instagram.com/d_takezooo/"
							className={`${
								theme === "green" ? `hover:text-cyber` : `hover:text-dev`
							}`}
						>
							{" "}
							<span
								className={`${theme === "green" ? `text-cyber` : `text-dev`}`}
							>
								&#9632;&nbsp;&nbsp;&nbsp;
							</span>
							Instagram ===================
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
