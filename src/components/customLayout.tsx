import HomePage from "../pages/home";
import AboutMePage from "../pages/about";

const CustomLayout = () => {
	return (
		<div id="rootpage">
			<div id="firstpage">
				<HomePage />
			</div>
			<div id="secondpage">
				<AboutMePage />
			</div>
		</div>
	)
}

export default CustomLayout;