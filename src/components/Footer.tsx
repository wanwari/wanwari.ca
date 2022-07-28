import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
	return (
		<div className="flex flex-row justify-end p-6">
			<div>
				<IconContext.Provider value={{ color: "#fff" }}>
					<span className="pr-2">Developed with</span>
					<FaHeart className="inline" />
					<span className="pl-2">by Wiesa Anwari</span>
				</IconContext.Provider>
			</div>
		</div>
	);
};

export default Footer;
