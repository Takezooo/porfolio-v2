import { ImageResponse } from "next/og";
export async function GET() {
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "black",
				}}
			>
				<div tw="bg-my-bgcolor flex">
					<div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-center p-8">
						<img
							src="https://dave-portfolio-three.vercel.app/assets/blue-header-logo.svg"
							width="500"
							height="200"
							alt="Blue Takezo's Randomness Header Logo"
						/>
					</div>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
