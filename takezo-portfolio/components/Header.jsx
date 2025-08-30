import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";

const Header = () => {
	return (
		<header className="py-5 xl:py-12">
			<div className="container mx-auto">
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
				<div className="hidden md:flex">
                    <Nav />
                </div>
			</div>
		</header>
	);
};

export default Header;
