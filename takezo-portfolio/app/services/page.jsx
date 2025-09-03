"use client";

// react
import { MdOutlineMailOutline } from "react-icons/md";

// context
import { useTheme } from "@/context/ThemeContext";

const cyberServices = [
	"Basic Security Awareness",
	"Simple Vulnerability Scans",
	"Basic Web Security Check",
	"Account & Access Security Setup",
];

const devServices = [
	"Full-Stack Web Applications (MERN Stack) – CRUD apps, dashboards, and APIs.",
	"Game Prototyping (Unity, C#, C) – Small-scale games and interactive demos.",
	"Frontend Development – ReactJS or AngularJS apps, UI building.",
	"SEO Integration – Optimizing websites for better search visibility.",
];
const Services = () => {
	const { theme } = useTheme();

	return (
		<main
			className={`w-[100%] lg:w-[80%] sm:w-[90%] flex flex-col justify-center items-center container mx-auto px-4`}
		>
			<div
				className={`w-[100%] lg:w-[80%] sm:w-[90%] mt-6 mb-6 flex flex-col gap-4`}
			>
				<h3
					className={`text-lg md:text-h3 font-semibold mb-4 text-wrap ${
						theme === "green" ? "text-cyber" : "text-dev"
					}
				`}
				>
					SERVICES ==================
				</h3>

				<div className="w-[100%] md:w-[80%] sm:w-[90%] flex flex-col gap-3 border-4 border-dashed p-8 mb-[50px]">
					{theme === "green"
						? cyberServices.map((item, index) => (
								<p
									key={index}
									className="text-xs sm:text-base md:text-p font-semibold leading-7"
								>
									<span className={`text-cyber`}>&#9632;&nbsp;&nbsp;</span>
									{item}
								</p>
						  ))
						: devServices.map((item, index) => (
								<p
									key={index}
									className="text-xs sm:text-base md:text-p font-semibold leading-7"
								>
									<span className={`text-dev`}>&#9632;&nbsp;&nbsp;</span>
									{item}
								</p>
						  ))}
				</div>
				<h3
					className={`text-lg md:text-h3 font-semibold mb-2 text-wrap ${
						theme === "green" ? "text-cyber" : "text-dev"
					}
				`}
				>
					CONTACT ME! ==================
				</h3>
				<div className="flex items-center gap-2">
					<MdOutlineMailOutline
						className={`text-lg sm:text-h3 md:text-h2 font-semibold ${
							theme === "green" ? "text-cyber" : "text-dev"
						}`}
					/>
					<p className="text-xs sm:text-base md:text-lg font-semibold leading-7">
						jornalesdavemartin@gmail.com
					</p>
				</div>
			</div>
		</main>
	);
};

export default Services;
