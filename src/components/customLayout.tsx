import HomePage from "../pages/home";

const CustomLayout = () => {
	return (
		<div id="rootpage">
			<div id="firstpage">
				<HomePage />
			</div>
			{/* <div id="secondpage">
				<RoadmapPage />
			</div> */}
		</div>
	)
}

export default CustomLayout;