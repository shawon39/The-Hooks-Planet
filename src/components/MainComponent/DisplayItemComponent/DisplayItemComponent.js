import React, { useContext, useState } from "react";
import "./DisplayItemComponent.css";
import ItemComponent from "./ItemComponent/ItemComponent";
import { ItemContext } from "../../App";
import Pagination from "./Pagination";

function DisplayItemComponent() {
	const itemsContext = useContext(ItemContext);
	const [currentPage, setCurrentPage] = useState(1);
	const itemPerPage = 8;

	// get Current items
	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;
	const currentItems = itemsContext.items.slice(
		indexOfFirstItem,
		indexOfLastItem
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="displayItem">
			<div className="myDisplay">
				{currentItems.map((item) => (
					<React.Fragment key={item.Id}>
						<ItemComponent item={item} />
					</React.Fragment>
				))}
			</div>
			<div className="itemPaginate">
				<Pagination
					itemPerPage={itemPerPage}
					totalItems={itemsContext.items.length}
					paginate={paginate}
					currentPage = {currentPage}
				/>
			</div>
		</div>
	);
}

export default DisplayItemComponent;
