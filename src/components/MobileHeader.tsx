import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { useState } from "react";

interface Props {
	active: string;
}

const MobileHeader = ({ active }: Props) => {
	const [displayMenu, setDisplayMenu] = useState(false);

	return (
		<div className="flex justify-between">
			<div className="p-6 text-4xl font-bold">
				<Link to="/">WA</Link>
			</div>
			<div onClick={() => setDisplayMenu(!displayMenu)} className="p-4">
				<RiMenu5Line className="text-5xl hover:cursor-pointer" />
			</div>

			{displayMenu && (
				<div className="bg-pink h-screen absolute left-0 w-3/4">
					<div className="flex flex-col p-4 text-center mt-48 text-4xl">
						<Link
							to="/"
							className={`m-4 ${
								active === "home" ? "font-bold underline" : ""
							}`}
						>
							&lt;Home &#47; &gt;
						</Link>
						<Link
							to="/portfolio"
							className={`m-4 ${
								active === "portfolio"
									? "font-bold underline"
									: ""
							}`}
						>
							&lt;Portfolio&#47; &gt;
						</Link>
						<Link
							to="/contact"
							className={`m-4 ${
								active === "contact"
									? "font-bold underline"
									: ""
							}`}
						>
							&lt;Contact&#47; &gt;
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default MobileHeader;
