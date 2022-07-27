import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { useSpring, animated } from "react-spring";

interface ArrowProps {
	direction: string;
}

const ArrowBtn = ({ direction }: ArrowProps) => {
	const animationProps = useSpring({
		from: { opacity: 0, rotateZ: -180 },
		to: { opacity: 1, rotateZ: 0 },
		delay: 3750,
		config: {
			duration: 300,
		},
	});

	let arrowDirection;

	switch (direction) {
		case "up":
			arrowDirection = <BsArrowUp />;
			break;
		case "down":
			arrowDirection = <BsArrowDown />;
			break;
	}
	return (
		<div>
			<animated.div style={animationProps} className="text-5xl">
				{arrowDirection}
			</animated.div>
		</div>
	);
};

export default ArrowBtn;
