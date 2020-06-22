import React, { useContext } from "react";
import "./CategoryComponent.css";
import { ItemContext } from "../../../App";

const category = [
	{
		itemName: "All",
		iconName: "fas fa-home",
	},
	{
		itemName: "Bike",
		iconName: "fas fa-bicycle",
	},
	{
		itemName: "Mobile",
		iconName: "fas fa-mobile-alt",
	},
	{
		itemName: "iPhone",
		iconName: "fas fa-mobile",
	},
	{
		itemName: "Tab",
		iconName: "fas fa-tablet-alt",
	},
	{
		itemName: "Band",
		iconName: "fas fa-ring",
	},
];

function CategoryComponent() {
	const itemsContext = useContext(ItemContext);
	return (
		<div className="category">
			<ul className="list-group">
				{category.map((item) => (
					<li
						key={item}
						onClick={() => itemsContext.itemDispatch({ type: item.itemName })}
						className={
							"list-group-item " +
							(itemsContext.activeCategory === item.itemName ? "active" : "")
						}
					>
						<i class={item.iconName}></i> {item.itemName}
					</li>
				))}
			</ul>
		</div>
	);
}

export default CategoryComponent;
