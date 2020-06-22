import React, { useContext } from "react";
import "./CategoryComponent.css";
import { ItemContext } from "../../../App";

const category = ["All", "Bike", "Mobile", "iPhone", "Tab", "Band"];

function CategoryComponent() {
	const itemsContext = useContext(ItemContext);
	return (
		<div className="category">
			<ul className="list-group">
				{category.map((item) => (
					<li
						key={item}
						onClick={() => itemsContext.itemDispatch({ type: item })}
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
