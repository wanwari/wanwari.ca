import { useEffect } from "react";
import Header from "../components/Header";

const NotFound = () => {
	useEffect(() => {
		document.title = "Page Not Found - wanwari";
	}, []);

	return (
		<div>
			<Header active={""} />
			404! Not Found
		</div>
	);
};

export default NotFound;
