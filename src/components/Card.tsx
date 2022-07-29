import { useSpring, animated } from "react-spring";
import logo from "../img/logo.jpg";

interface CardProps {
	delay: number;
	title: string;
	about: string;
	tags: string;
	codeUrl: string;
	demoUrl?: string;
}

const Card = ({ delay, title, about, tags, codeUrl, demoUrl }: CardProps) => {
	const cardAnimation = useSpring({
		from: { opacity: 0, marginTop: -300 },
		to: { opacity: 1, marginTop: 0 },
		delay: delay,
	});

	return (
		<animated.div style={cardAnimation}>
			<div className="flex flex-col justify-end w-80 md:w-fit border rounded-xl p-4 m-4 mb-8 bg-white shadow-xl">
				<div className="flex justify-center">
					<img
						src={logo}
						className="w-2/5 md:w-1/5 rounded-full -mt-10"
						alt="logo"
					/>
				</div>
				<div className="flex justify-center flex-col text-center mb-2">
					<h1 className="font-bold text-3xl mt-6 mb-2">{title}</h1>
					<p className="text-slate-500">{tags}</p>
				</div>
				<div className="flex justify-center p-2 border-t border-slate-300">
					<p>{about}</p>
				</div>
				<div className="flex justify-center">
					<a
						href={codeUrl}
						rel="noreferrer"
						target="_blank"
						className="bg-yellow m-1 px-4 py-2 self-center rounded-xl text-center hover:text-white hover:shadow-md"
					>
						View Code
					</a>
					{demoUrl && (
						<a
							href={demoUrl}
							rel="noreferrer"
							target="_blank"
							className="bg-yellow m-1 px-4 py-2 self-center text-center rounded-xl hover:text-white hover:shadow-md"
						>
							Visit Project
						</a>
					)}
				</div>
			</div>
		</animated.div>
	);
};

export default Card;
