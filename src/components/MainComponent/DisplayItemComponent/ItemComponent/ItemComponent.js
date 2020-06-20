import React from "react";
import './ItemComponent.css'

function ItemComponent({item}) {
	return (
		<div className="myItem">
			<h6>{item.itemName} </h6>
			<img
				src={item.itemImage}
				alt="BikeImage"
			/>
			<p>Price : {item.price} taka </p>
			<button className="btn btn-sm btn-dark">Details</button>
		</div>
	);
}

export default ItemComponent;
