import { useSpring, animated } from "react-spring";

interface CardProps {
	title: string;
	about: string;
	tags: string;
	codeUrl: string;
	demoUrl?: string;
}

const Card = ({ title, about, tags, codeUrl, demoUrl }: CardProps) => {
	return (
		<div className="flex flex-col justify-end  border rounded-xl h-fit p-4 m-4 mb-8 bg-white shadow-xl">
			<div className="flex justify-center">
				<img
					src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
					className="w-1/5 rounded-full -mt-10"
					alt="logo"
				/>
			</div>
			<div className="flex justify-center flex-col text-center mb-4">
				<h1 className="font-bold text-3xl mt-6">{title}</h1>
				<p className="text-slate-500 uppercase">{tags}</p>
			</div>
			<div className="flex justify-center p-2 border-t border-slate-300">
				<p>{about}</p>
			</div>
			<div className="flex justify-center">
				<a
					href={codeUrl}
					className="bg-green-400 p-3 rounded-xl hover:text-white hover:shadow-lg m-2"
				>
					View Code
				</a>
				{demoUrl && (
					<a
						href={demoUrl}
						className="bg-green-400 p-3 rounded-xl hover:text-white hover:shadow-lg m-2"
					>
						Visit Project
					</a>
				)}
			</div>
		</div>
	);
};

export default Card;
