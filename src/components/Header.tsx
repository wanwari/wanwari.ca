import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

interface Props {
	active: string;
}
const Header = ({ active }: Props) => {
	const { innerWidth } = window;
	const correctHeader =
		innerWidth >= 768 ? (
			<DesktopHeader active={active} />
		) : (
			<MobileHeader active={active} />
		);
	return <>{correctHeader}</>;
};

export default Header;
