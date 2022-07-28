import Card from "../components/animated/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Portfolio = () => {
	return (
		<div className="bg-bgGreen flex flex-col justify-between">
			<Header active={"portfolio"} />

			<div className="grid grid-cols-3 m-12 pt-4 justify-items-center">
				<Card
					title={"Title"}
					about={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nisl ex, vel tincidunt mi ullamcorper nec. Suspendisse scelerisque eu nulla a lacinia. Nam interdum est velit, id gravida tortor finibus ornare. Integer sit amet ligula nec quam tempus lacinia. Donec scelerisque arcu nec sapien rhoncus pharetra."
					}
					tags={"JavaScript, TypeScript, ReactJS, TailwindCSS, HTML"}
					codeUrl={"Title"}
					demoUrl={"Title"}
				/>
				<Card
					title={"Title"}
					about={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nisl ex, vel tincidunt mi ullamcorper nec. Suspendisse scelerisque eu nulla a lacinia. Nam interdum est velit, id gravida tortor finibus ornare. Integer sit amet ligula nec quam tempus lacinia. Donec scelerisque arcu nec sapien rhoncus pharetra."
					}
					tags={"JavaScript, TypeScript, ReactJS, TailwindCSS, HTML"}
					codeUrl={"Title"}
				/>
				<Card
					title={"Title"}
					about={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nisl ex, vel tincidunt mi ullamcorper nec. Suspendisse scelerisque eu nulla a lacinia. Nam interdum est velit, id gravida tortor finibus ornare. Integer sit amet ligula nec quam tempus lacinia. Donec scelerisque arcu nec sapien rhoncus pharetra."
					}
					tags={"JavaScript, TypeScript, ReactJS, TailwindCSS, HTML"}
					codeUrl={"Title"}
				/>
				<Card
					title={"Title"}
					about={
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat nisl ex, vel tincidunt mi ullamcorper nec. Suspendisse scelerisque eu nulla a lacinia. Nam interdum est velit, id gravida tortor finibus ornare. Integer sit amet ligula nec quam tempus lacinia. Donec scelerisque arcu nec sapien rhoncus pharetra."
					}
					tags={"JavaScript, TypeScript, ReactJS, TailwindCSS, HTML"}
					codeUrl={"Title"}
				/>
			</div>
			<Footer />
		</div>
	);
};

export default Portfolio;
