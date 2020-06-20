import React from "react";
import "./DisplayItemComponent.css";
import ItemComponent from "./ItemComponent/ItemComponent";

function DisplayItemComponent() {
	return (
		<div className="displayItem">
			<div className="myDisplay">
				<ItemComponent />
				<ItemComponent />
				<ItemComponent />
				<ItemComponent />
				<ItemComponent />
				<ItemComponent />
        <ItemComponent />	
			</div>
		</div>
	);
}

export default DisplayItemComponent;
