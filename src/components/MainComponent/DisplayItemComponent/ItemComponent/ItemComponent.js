import React from "react";
import './ItemComponent.css'

function ItemComponent() {
	return (
		<div className="myItem">
			<h6>Item Name </h6>
			<img
				src="https://gotchabike.com/wp-content/uploads/2017/09/UNC_ChapelHillBurtsBeesSide-6.png"
				alt="BikeImage"
			/>
			<p>Price : 100 taka </p>
			<button className="btn btn-sm btn-dark">Details</button>
		</div>
	);
}

export default ItemComponent;
