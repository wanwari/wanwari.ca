import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<Link to="/">&lt;Home &#47; &gt;</Link>
			<Link to="/portfolio">&lt;Portfolio&#47; &gt;</Link>
			<Link to="/contact">&lt;Contact&#47; &gt;</Link>
		</div>
	);
};

export default Header;
