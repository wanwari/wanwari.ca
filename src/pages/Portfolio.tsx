import { useEffect } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Portfolio = () => {
	useEffect(() => {
		document.title = "Portfolio - wanwari";
	}, []);

	return (
		<div className="bg-bgGreen h-screen flex flex-col justify-between overflow-auto">
			<Header active={"portfolio"} />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-12 pt-4 justify-items-center">
				<Card
					delay={1050}
					title={"Spelling Bzz"}
					about={"about"}
					tags={"JavaScript, ReactJS, TailwindCSS, NodeJS, ExpressJS"}
					codeUrl={"https://github.com/wanwari/spelling-bee"}
					demoUrl={"https://spelling-bzz.netlify.app/"}
				/>
				<Card
					delay={900}
					title={"Image Manipulate API"}
					about={"about"}
					tags={"JavaScript, TypeScript, NodeJS, ExpressJS"}
					codeUrl={"https://github.com/wanwari/image-manipulate-api"}
				/>
				<Card
					delay={750}
					title={"Screen Capture"}
					about={"about"}
					tags={"Java"}
					codeUrl={"https://github.com/wanwari/screen-capture"}
				/>
				<Card
					delay={600}
					title={"wanwari.ca"}
					about={"about"}
					tags={"JavaScript, TypeScript, ReactJS, TailwindCSS"}
					codeUrl={"https://github.com/wanwari/wanwari.ca"}
					demoUrl={"https://wanwari.ca/"}
				/>
				<Card
					delay={450}
					title={"Blended not Stirred"}
					about={"about"}
					tags={"JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB"}
					codeUrl={"https://github.com/wanwari/blended-not-stirred"}
				/>
				<Card
					delay={300}
					title={"Weather App"}
					about={"about"}
					tags={"JavaScript, ReactJS"}
					codeUrl={"https://github.com/wanwari/weather-app"}
					demoUrl={"https://weather-app-wanwari.netlify.app/"}
				/>
				<Card
					delay={150}
					title={"wanwari.ca (old)"}
					about={"about"}
					tags={"JavaScript, ReactJS, TailwindCSS"}
					codeUrl={"https://github.com/wanwari/wanwari-OLD"}
				/>
				<Card
					delay={0}
					title={"To-Do List"}
					about={"about"}
					tags={"JavaScript, ReactJS"}
					codeUrl={"https://github.com/wanwari/react-to-do"}
					demoUrl={"https://to-do-wanwari.netlify.app/"}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Portfolio;
