import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
// components
import Nav from "./Nav";

const Header = () => {
	return (
		<header className="mb-10">
			<div className="flex items-center justify-between">
				{/* Logo */}
				<Link href="/">
					<Image
						className="flex-none"
						src="../assets/green-header-logo.svg"
						width={170}
						height={100}
						alt="Green Takezo's Randomness Header Logo"
					/>
				</Link>
				{/* Desktop Nav */}
				<div className="hidden lg:flex items-center justify-center pr-8 flex-grow">
					<Nav />
				</div>
				<div className="hidden md:flex flex-none">
					<Link href="/contact">
						<Button>Let's Talk</Button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
