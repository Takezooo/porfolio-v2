const Footer = () => {
	const currentYear = new Date().getFullYear();
	return <footer className="h-[60px] mt-6 mb-6 flex items-center">Copyright © {currentYear} - Takezo</footer>;
};

export default Footer;
