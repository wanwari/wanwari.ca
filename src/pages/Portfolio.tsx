import Card from "../components/animated/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Portfolio = () => {
	return (
		<div className="bg-bgGreen h-screen flex flex-col justify-between overflow-auto">
			<Header active={"portfolio"} />

			<div className="grid grid-cols-3 m-12 pt-4 justify-items-center">
				<Card
					delay={600}
					title={"Title"}
					about={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nisl ex, vel tincidunt mi ullamcorper nec. Suspendisse scelerisque eu nulla a lacinia. Nam interdum est velit, id gravida tortor finibus ornare. Integer sit amet ligula nec quam tempus lacinia. Donec scelerisque arcu nec sapien rhoncus pharetra."
					}
					tags={"JavaScript, TypeScript, ReactJS, TailwindCSS, HTML"}
					codeUrl={"Title"}
					demoUrl={"Title"}
				/>
				<Card
					delay={400}
					title={"Title"}
					about={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nisl ex, vel tincidunt mi ullamcorper nec. Suspendisse scelerisque eu nulla a lacinia. Nam interdum est velit, id gravida tortor finibus ornare. Integer sit amet ligula nec quam tempus lacinia. Donec scelerisque arcu nec sapien rhoncus pharetra."
					}
					tags={"JavaScript, TypeScript, ReactJS, TailwindCSS, HTML"}
					codeUrl={"Title"}
					demoUrl={"Title"}
				/>
				<Card
					delay={200}
					title={"Title"}
					about={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nisl ex, vel tincidunt mi ullamcorper nec. Suspendisse scelerisque eu nulla a lacinia. Nam interdum est velit, id gravida tortor finibus ornare. Integer sit amet ligula nec quam tempus lacinia. Donec scelerisque arcu nec sapien rhoncus pharetra."
					}
					tags={"JavaScript, TypeScript, ReactJS, TailwindCSS, HTML"}
					codeUrl={"Title"}
					demoUrl={"Title"}
				/>
				<Card
					delay={0}
					title={"Title"}
					about={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nisl ex, vel tincidunt mi ullamcorper nec. Suspendisse scelerisque eu nulla a lacinia. Nam interdum est velit, id gravida tortor finibus ornare. Integer sit amet ligula nec quam tempus lacinia. Donec scelerisque arcu nec sapien rhoncus pharetra."
					}
					tags={"JavaScript, TypeScript, ReactJS, TailwindCSS, HTML"}
					codeUrl={"Title"}
					demoUrl={"Title"}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Portfolio;
