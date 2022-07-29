import { useEffect } from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Contact = () => {
	useEffect(() => {
		document.title = "Contact - wanwari";
	}, []);

	return (
		<div className="h-screen bg-sky-300 flex flex-col justify-between">
			<Header active={"contact"} />
			<div className="flex justify-center">
				<Form />
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
