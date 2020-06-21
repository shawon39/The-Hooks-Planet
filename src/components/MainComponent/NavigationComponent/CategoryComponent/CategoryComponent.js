import React, { useContext } from "react";
import "./CategoryComponent.css";
import { ItemContext } from "../../../App";

const category = ["All", "Bike", "Mobile", "iPhone", "Tab", "Band"];

function CategoryComponent() {
	const itemsContext = useContext(ItemContext);
	console.log(itemsContext.activeCategory);
	return (
		<div className="category">
			<ul className="list-group">
				{category.map((item) => (
					<li
						key={item}
						onClick={() => itemsContext.itemDispatch(item)}
						className={
							"list-group-item " +
							(itemsContext.activeCategory === item ? "active" : "")
						}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default CategoryComponent;
