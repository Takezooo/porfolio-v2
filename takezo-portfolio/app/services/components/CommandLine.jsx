"use client";

import { useEffect, useRef, useState } from "react";

const CommandLine = ({
	mode,
	prompt = "takezo@services",
	onCommand,
	placeholder = "type 'help' to list commands",
}) => {
	const [command, setCommand] = useState("");
	const inputRef = useRef(null);
	const historyRef = useRef([]);
	const historyIndexRef = useRef(-1);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [mode]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const value = command.trim();
		if (!value) {
			return;
		}
		historyRef.current = [value, ...historyRef.current];
		historyIndexRef.current = -1;
		onCommand?.(value);
		setCommand("");
	};

	const handleKeyDown = (event) => {
		if (event.key === "ArrowUp") {
			event.preventDefault();
			const nextIndex = Math.min(
				historyRef.current.length - 1,
				historyIndexRef.current + 1,
			);
			if (historyRef.current[nextIndex]) {
				historyIndexRef.current = nextIndex;
				setCommand(historyRef.current[nextIndex]);
			}
		}
		if (event.key === "ArrowDown") {
			event.preventDefault();
			const nextIndex = Math.max(-1, historyIndexRef.current - 1);
			historyIndexRef.current = nextIndex;
			setCommand(historyRef.current[nextIndex] ?? "");
		}
	};

	const accent = mode === "green" ? "text-cyber" : "text-dev";

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-2 sm:gap-4"
		>
			<label
				htmlFor="command-input"
				className={`text-xs sm:text-base md:text-p font-semibold tracking-[0.35em] uppercase ${accent}`}
			>
				{prompt}
			</label>
			<input
				ref={inputRef}
				type="text"
				id="command-input"
				name="command"
				autoComplete="off"
				value={command}
				onChange={(event) => setCommand(event.target.value)}
				onKeyDown={handleKeyDown}
				placeholder={placeholder}
				className="flex-1 bg-transparent text-xs sm:text-base md:text-p text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
			/>
		</form>
	);
};

export default CommandLine;

