import React from "react";
import "./NavigationComponent.css";
import CategoryComponent from "./CategoryComponent/CategoryComponent";
import FilterComponent from "./FilterComponent/FilterComponent";

function NavigationComponent() {
	return (
		<div className="navigation">
			<div className="CategoryComp">
				<CategoryComponent />
			</div>
			<div className="FilterComp">
				<FilterComponent />
			</div>
		</div>
	);
}

export default NavigationComponent;
