import { useSpring, animated } from "react-spring";

const DropText = () => {
	const animationProps = useSpring({
		from: { opacity: 0, marginTop: -300 },
		to: { opacity: 1, marginTop: -175 },
	});

	return (
		<div>
			<animated.div style={animationProps} className="text-8xl mb-4">
				Hi! I'm <span className="font-bold">Wiesa</span>
			</animated.div>
		</div>
	);
};

export default DropText;
