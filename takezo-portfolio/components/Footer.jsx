const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="mt-6 flex">
			<div className="h-[60px] w-[100%] bg-my-bgcolor z-99 text-center flex justify-center items-center p-2">
				<p className="font-semibold">Copyright © {currentYear} - <em>Takezo | Dave</em></p>
			</div>
		</footer>
	);
};

export default Footer;
