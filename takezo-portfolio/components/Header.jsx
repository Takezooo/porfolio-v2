import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
// components
import Nav from "./Nav";

const Header = () => {
	return (
		<header className="mb-10">
			<div className="flex justify-between items-center">
				{/* Logo */}
				<Link href="/">
					<Image
						src="../assets/green-header-logo.svg"
						width={200}
						height={100}
						alt="Green Takezo's Randomness Header Logo"
					/>
				</Link>
				{/* Desktop Nav */}
				<div className="hidden lg:flex items-center">
					<Nav />
				</div>
				<div className="hidden md:flex items-center">
					<Link href="/contact">
						<Button>Let's Talk</Button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
