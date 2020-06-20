import React, { useContext } from "react";
import "./CategoryComponent.css";
import { ItemContext } from "../../../App";

function CategoryComponent() {
	const itemsContext = useContext(ItemContext);
	return (
		<div className="category">
			<ul className="list-group">
				<li
					onClick={() => itemsContext.itemDispatch("All")}
					className="list-group-item active"
				>
					All
				</li>
				<li
					onClick={() => itemsContext.itemDispatch("Bike")}
					className="list-group-item"
				>
					Bike
				</li>
				<li
					onClick={() => itemsContext.itemDispatch("Mobile")}
					className="list-group-item"
				>
					Mobile
				</li>
				<li
					onClick={() => itemsContext.itemDispatch("iPhone")}
					className="list-group-item"
				>
					iPhone
				</li>
				<li
					onClick={() => itemsContext.itemDispatch("Tab")}
					className="list-group-item"
				>
					Tab
				</li>
				<li
					onClick={() => itemsContext.itemDispatch("Cookies")}
					className="list-group-item"
				>
					Cookies
				</li>
			</ul>
		</div>
	);
}

export default CategoryComponent;
