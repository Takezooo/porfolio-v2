"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "About",
		path: "/",
	},
	{
		name: "Projects",
		path: "/projects",
	},
	// {
	// 	name: "Certifications",
	// 	path: "/certificates",
	// },
	{
		name: "Services",
		path: "/services",
	},
];

const Nav = () => {

	const pathname = usePathname();

	return (
		<nav className={`flex gap-10 items-center font-semibold`}>
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
            key={link.name}
						className={`${pathname === link.path ? 'text-cyber' : 'text-neutral-50'}`}
					>
            {link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
