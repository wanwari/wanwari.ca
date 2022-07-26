import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
	return (
		<div className="flex flex-row justify-end p-6">
			<div>
				<IconContext.Provider value={{ color: "#FE343B" }}>
					Developed with <FaHeart className="inline" /> by Wiesa
					Anwari
				</IconContext.Provider>
			</div>
		</div>
	);
};

export default Footer;
