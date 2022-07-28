import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useSpring, animated } from "react-spring";

const Footer = () => {
	const animationProps = useSpring({
		loop: { reverse: true },
		from: { marginTop: -15 },
		to: { marginTop: 0 },
		delay: 100,
	});
	return (
		<div className="flex flex-row justify-end p-6">
			<IconContext.Provider value={{ color: "#fff" }}>
				<span className="pr-2">Developed with</span>
				<animated.div style={animationProps}>
					<FaHeart className="inline" />
				</animated.div>
				<span className="pl-2">by Wiesa Anwari</span>
			</IconContext.Provider>
		</div>
	);
};

export default Footer;
