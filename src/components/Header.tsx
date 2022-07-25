import { Link } from "react-router-dom";

interface HeaderProps {
	active: string;
}

const Header = ({ active }: HeaderProps) => {
	return (
		<div className="flex justify-between">
			<div className="p-6">Logo</div>
			<div className="p-6">
				<Link
					to="/"
					className={`pl-4 ${
						active === "home" ? "font-bold underline" : ""
					}`}
				>
					&lt;Home &#47; &gt;
				</Link>
				<Link
					to="/portfolio"
					className={`pl-4 ${
						active === "portfolio" ? "font-bold underline" : ""
					}`}
				>
					&lt;Portfolio&#47; &gt;
				</Link>
				<Link
					to="/contact"
					className={`pl-4 ${
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
