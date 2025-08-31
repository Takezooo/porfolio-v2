import Image from "next/image";

export default function Home() {
	return (
		<main>
				<Image
					className="absolute -z-1"
					src="./assets/cyber-bg.svg"
					layout="fill"
					objectFit="cover"
					quality={100}
					alt="Cyber Page Background"
				/>
		</main>
	);
}
