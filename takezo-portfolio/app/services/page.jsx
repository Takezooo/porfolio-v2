"use client";

// react-icons
import { MdOutlineMailOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import { FaMagic } from "react-icons/fa";

// context
import { useTheme } from "@/context/ThemeContext";

// data
import { serviceDirectory } from "./data/serviceDirectory";
import { terminalPresets } from "./data/terminalPresets";

// components
import CommandLine from "./components/CommandLine";
import TerminalPanel from "./components/TerminalPanel";

const Services = () => {
	const { theme } = useTheme();
	const mode = theme === "green" ? "green" : "blue";
	const palette = terminalPresets[mode];
	const services = serviceDirectory[mode];
	const [lines, setLines] = useState([
		"Welcome to the services terminal. Type 'help' to list commands.",
		`Loaded ${mode === "green" ? "cyber" : "dev"} profile.`,
	]);

	const appendLine = (line) =>
		setLines((prev) => [...prev, line].slice(-8));

	const handleCommand = (rawCommand) => {
		const command = rawCommand.toLowerCase();
		appendLine(`$ ${rawCommand}`);

		switch (command) {
			case "help":
				appendLine("Available commands: help, clear, list, contact");
				break;
			case "clear":
				setLines([]);
				break;
			case "list":
				services.forEach((group) => appendLine(`- ${group.title}`));
				break;
			case "contact":
				appendLine("Email: jornalesdavemartin@gmail.com");
				break;
			default:
				appendLine(`Command not found: ${command}`);
		}
	};

	useEffect(() => {
		setLines([
			"Theme change detected.",
			"Type 'help' to list commands.",
			`Loaded ${mode === "green" ? "cyber" : "dev"} profile.`,
		]);
	}, [mode]);

	return (
		<main className="relative min-h-screen w-full overflow-hidden">
			<section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 md:py-16 lg:px-10">
				<header className="flex flex-col gap-6">
					<div className="grid gap-3">
						<span className="text-xs sm:text-base md:text-p font-semibold uppercase tracking-[0.35em] text-neutral-200">
							/services
						</span>
						<h1
							className={`text-lg sm:text-h2 md:text-h1 font-semibold ${palette.accent}`}
						>
							Services Command Terminal
						</h1>
						<p className="text-xs sm:text-base md:text-p text-neutral-400">
							Use the terminal below to explore available operations. Theme switching adjusts
							between cyber and development presets.
						</p>
					</div>
					<div className="flex flex-wrap items-center gap-3 text-xs sm:text-base md:text-p text-neutral-400">
						<span className={`inline-flex items-center gap-2 rounded-full border border-neutral-700/70 px-3 py-1 ${palette.accent}`}>
							<FaMagic className="text-xs" aria-hidden="true" />
							Mode: {mode === "green" ? "Cyber Ops" : "Dev Build"}
						</span>
						<span className="inline-flex items-center gap-2 rounded-full border border-neutral-700/60 px-3 py-1">
							Status: interactive
						</span>
					</div>
				</header>

				<div className={`flex flex-col gap-4 rounded border border-dashed ${mode === "green" ? "border-cyber/60" : "border-dev/60"} bg-my-bgcolor/40 p-4`}>
					<div className="flex flex-col gap-2">
						{lines.map((line, index) => (
							<p key={`${line}-${index}`} className="text-xs sm:text-base md:text-p text-neutral-300">
								{line}
							</p>
						))}
					</div>
					<CommandLine
						mode={mode}
						prompt="takezo@services"
						onCommand={handleCommand}
					/>
				</div>

				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<TerminalPanel title="cat ./services.log" accent={palette.accent}>
						{services.map((group, index) => (
							<article key={group.id} className="flex flex-col gap-3">
								<h2 className="text-sm sm:text-base md:text-h3 font-semibold">
									&gt; {group.title}
								</h2>
								<p className="text-xs sm:text-base md:text-p text-neutral-400">
									{group.description}
								</p>
								<ul className="flex flex-col gap-2 text-xs sm:text-base md:text-p">
									{group.items.map((item) => (
										<li key={item} className="flex items-start gap-3">
											<span className={`text-xs sm:text-base md:text-p ${palette.accent}`} aria-hidden="true">
												&gt;
											</span>
											<p>{item}</p>
										</li>
									))}
								</ul>
								{index !== services.length - 1 && (
									<hr className="border-t border-dashed border-neutral-700/60" />
								)}
							</article>
						))}
					</TerminalPanel>

					<TerminalPanel title="whoami --contact" accent={palette.accent}>
						<p className="text-xs sm:text-base md:text-p text-neutral-400">
							Deliverables shipped with command-line precision and theme-aware UX. Send a
							ping and let’s bootstrap your stack.
						</p>
						<div className="flex flex-col gap-4 rounded border border-dashed border-neutral-700/70 bg-my-bgcolor/40 p-4">
							<div className="flex items-center gap-3">
								<MdOutlineMailOutline className={`text-lg sm:text-h3 md:text-h2 ${palette.accent}`} aria-hidden="true" />
								<a
									href="mailto:jornalesdavemartin@gmail.com"
									className="text-xs sm:text-base md:text-lg text-neutral-50 hover:underline"
								>
									jornalesdavemartin@gmail.com
								</a>
							</div>
							<div className="flex flex-wrap gap-3 text-xs sm:text-base md:text-p text-neutral-400">
								<span className={`inline-flex items-center gap-2 rounded-full border border-neutral-700/70 px-3 py-1 ${palette.accent}`}>
									Priority: open
								</span>
								<span className="inline-flex items-center gap-2 rounded-full border border-neutral-700/60 px-3 py-1">
									Response SLA: under 24h
								</span>
							</div>
							<div className="rounded border border-neutral-700/60 bg-my-bgcolor/60 px-3 py-2 text-xs sm:text-base md:text-p text-neutral-400">
								<p>&gt; launch --project "Your Next Build"</p>
								<p>&gt; assign --owner "Dave Jornales"</p>
								<p>&gt; run --status-check</p>
							</div>
						</div>
					</TerminalPanel>
				</div>

			</section>
		</main>
	);
};

export default Services;
