import Header from "../components/Header";
import DropText from "../components/DropText";
import TypeText from "../components/TypeText";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		document.title = "Home - wanwari";
	}, []);

	return (
		<div className="h-screen bg-bgOrange flex flex-col justify-between">
			<Header active={"home"} />
			<div className="text-center">
				<DropText />
				<TypeText />
				<div className="flex flex-row justify-center mt-4"></div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
