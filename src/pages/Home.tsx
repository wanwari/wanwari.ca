import ArrowBtn from "../components/ArrowBtn";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../components/Welcome";

const Home = () => {
	return (
		<div className="h-screen bg-bgOrange flex flex-col justify-between">
			<Header active={"home"} />
			<div>
				<Welcome />
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
