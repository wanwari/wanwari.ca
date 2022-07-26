import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
	return (
		<div className="h-screen bg-bgOrange flex flex-col justify-between">
			<Header active={"home"} />
			<div>content</div>
			<Footer />
		</div>
	);
};

export default Home;
