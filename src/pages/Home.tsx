import Header from "../components/Header";
import DropText from "../components/DropText";
import TypeText from "../components/TypeText";
import ArrowBtn from "../components/ArrowBtn";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div className="h-screen bg-bgOrange flex flex-col justify-between">
			<Header active={"home"} />
			<div className="text-center">
				<DropText />
				<TypeText />
				<div className="flex flex-row justify-center mt-4">
					<ArrowBtn direction={"up"} />
					<ArrowBtn direction={"down"} />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
