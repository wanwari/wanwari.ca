import { Link } from "react-router-dom";

interface HeaderProps {
	active: string;
}

const Header = ({ active }: HeaderProps) => {
	return (
		<div className="flex justify-between">
			<div className="p-6 text-2xl font-bold">
				<Link to="/">WA</Link>
			</div>
			<div className="p-6 text-lg">
				<Link
					to="/"
					className={`mx-2 hover:text-white ${
						active === "home" ? "font-bold underline" : ""
					}`}
				>
					&lt;Home &#47; &gt;
				</Link>
				<Link
					to="/portfolio"
					className={`mx-2 hover:text-white ${
						active === "portfolio" ? "font-bold underline" : ""
					}`}
				>
					&lt;Portfolio&#47; &gt;
				</Link>
				<Link
					to="/contact"
					className={`mx-2 hover:text-white ${
						active === "contact" ? "font-bold underline" : ""
					}`}
				>
					&lt;Contact&#47; &gt;
				</Link>
			</div>
		</div>
	);
};

export default Header;
