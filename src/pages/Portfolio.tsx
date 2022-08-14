import { useEffect } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bee from "../img/bee.png";
import bns from "../img/BnS.png";
import im from "../img/IM.png";
import sc from "../img/SC.png";
import tdl from "../img/TDL.png";
import wa from "../img/WA.png";

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
					about={
						"A spelling game that requires you to build as many words with each days letters."
					}
					tags={"JavaScript, ReactJS, TailwindCSS, NodeJS, ExpressJS"}
					logo={bee}
					codeUrl={"https://github.com/wanwari/spelling-bee"}
					demoUrl={"https://spelling-bzz.netlify.app/"}
				/>
				<Card
					delay={900}
					title={"Image Manipulate API"}
					about={
						"API that allows you to upload pictures and manipulate them how you'd like."
					}
					tags={"JavaScript, TypeScript, NodeJS, ExpressJS"}
					logo={im}
					codeUrl={"https://github.com/wanwari/image-manipulate-api"}
				/>
				<Card
					delay={750}
					title={"Screen Capture"}
					about={
						"A program that lets you take and upload custom sized screenshots of your computer."
					}
					tags={"Java"}
					logo={sc}
					codeUrl={"https://github.com/wanwari/screen-capture"}
				/>
				<Card
					delay={600}
					title={"wanwari.ca"}
					about={"Personal portfolio website."}
					tags={"JavaScript, TypeScript, ReactJS, TailwindCSS"}
					logo={wa}
					codeUrl={"https://github.com/wanwari/wanwari.ca"}
					demoUrl={"https://wanwari.ca/"}
				/>
				<Card
					delay={450}
					title={"Blended not Stirred"}
					about={"Full-stack recipe website"}
					tags={"JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB"}
					logo={bns}
					codeUrl={"https://github.com/wanwari/blended-not-stirred"}
				/>
				<Card
					delay={300}
					title={"Weather App"}
					about={
						"Search the weather for anywhere in the world, includes history, maps, and more"
					}
					tags={"JavaScript, ReactJS"}
					logo={wa}
					codeUrl={"https://github.com/wanwari/weather-app"}
					demoUrl={"https://weather-app-wanwari.netlify.app/"}
				/>
				<Card
					delay={150}
					title={"wanwari.ca (old)"}
					about={"Old personal portfolio webiste"}
					tags={"JavaScript, ReactJS, TailwindCSS"}
					logo={wa}
					codeUrl={"https://github.com/wanwari/wanwari-OLD"}
				/>
				<Card
					delay={0}
					title={"To-Do List"}
					about={"Simple to-do list application"}
					tags={"JavaScript, ReactJS"}
					logo={tdl}
					codeUrl={"https://github.com/wanwari/react-to-do"}
					demoUrl={"https://to-do-wanwari.netlify.app/"}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Portfolio;
