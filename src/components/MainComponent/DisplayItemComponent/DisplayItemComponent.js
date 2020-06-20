import React, { useContext } from "react";
import "./DisplayItemComponent.css";
import ItemComponent from "./ItemComponent/ItemComponent";
import { ItemContext } from "../../App";

function DisplayItemComponent() {
	const itemsContext = useContext(ItemContext);
	return (
		<div className="displayItem">
			<div className="myDisplay">
				{itemsContext.items.map((item) => (
					<React.Fragment key={item.Id}>
						<ItemComponent item={item} />
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default DisplayItemComponent;
