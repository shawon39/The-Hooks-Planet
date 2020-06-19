import React from "react";
import './CategoryComponent.css';

function CategoryComponent() {
	return (
		<div className="category">
			<ul className="list-group">
				<li className="list-group-item">All</li>
        <li className="list-group-item">Bikes</li>
        <li className="list-group-item">Mobile</li>
        <li className="list-group-item">iPhone</li>
        <li className="list-group-item">Tab</li>
        <li className="list-group-item">Cookies</li>
			</ul>
		</div>
	);
}

export default CategoryComponent;
