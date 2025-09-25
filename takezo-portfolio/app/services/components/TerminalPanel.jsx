"use client";

const TerminalPanel = ({ title, children, accent = "" }) => (
	<section className="relative flex flex-col gap-4 rounded-xl border border-dashed border-neutral-700/70 bg-my-bgcolor/30 p-4 sm:p-6 md:p-8">
		<div
			className="pointer-events-none absolute inset-0 rounded-xl border border-neutral-600/10"
			aria-hidden="true"
		/>
		<header className="flex items-center justify-between text-xs sm:text-base md:text-p font-semibold uppercase tracking-[0.35em] text-neutral-400">
			<span>{title}</span>
			<div className="flex items-center gap-1">
				<span className="h-2 w-2 rounded-full bg-red-500/70" aria-hidden="true" />
				<span className="h-2 w-2 rounded-full bg-amber-500/70" aria-hidden="true" />
				<span className="h-2 w-2 rounded-full bg-emerald-500/70" aria-hidden="true" />
			</div>
		</header>
		<div className={`flex flex-col gap-4 text-neutral-200 ${accent}`}>{children}</div>
	</section>
);

export default TerminalPanel;

