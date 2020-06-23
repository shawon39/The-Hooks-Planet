import React, { useState, useReducer, useContext } from "react";
import "./HeaderComponent.css";
import Modal from "react-modal";
import { ItemContext } from "../App";
Modal.setAppElement("#root");

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		height: "fit-content",
		width: "500px",
		backgroundColor: "rgba(59, 146, 126, 0.88)",
	},
};

const initialItem = {
	Id: 0,
	itemName: "",
	type: "",
	price: 0,
	itemImage: "Band/no-image-available.jpg",
	description: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "Id": {
			return { ...state, Id: action.value };
		}
		case "itemName": {
			return { ...state, itemName: action.value };
		}
		case "type": {
			return { ...state, type: action.value };
		}
		case "price": {
			return { ...state, price: action.value };
		}
		case "itemImage": {
			return { ...state, itemImage: action.value };
		}
		case "description": {
			return { ...state, description: action.value };
		}
		default: {
			return initialItem;
		}
	}
};

function AddItemComponent() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [item, dispatch] = useReducer(reducer, initialItem);
	const itemsContext = useContext(ItemContext);
	return (
		<div>
			<span onClick={() => setIsModalOpen(true)}>
				<i className="fas fa-plus"> Add Item </i>
			</span>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				style={customStyles}
			>
				<h5 className="text-center">Add an Item</h5>
				<div className="form-group">
					<label htmlFor="Item No">Item No</label>
					<input
						className="form-control"
						type="number"
						placeholder="Item no"
						onChange={(event) =>
							dispatch({ type: "Id", value: event.target.value })
						}
					/>
				</div>
				<div className="form-group">
					<label className="selectLabel">Select Type</label>
					<select
						defaultValue={"DEFAULT"}
						className="form-control"
						onChange={(event) =>
							dispatch({ type: "type", value: event.target.value })
						}
					>
						<option value="DEFAULT" disabled>
							Choose Item Type
						</option>
						<option value="Bike">Bike</option>
						<option value="Mobile">Mobile</option>
						<option value="iPhone">iPhone</option>
						<option value="Tab">Tab</option>
						<option value="Band">Band</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="Item Name">Item Name</label>
					<input
						className="form-control"
						type="text"
						placeholder="Item name"
						onChange={(event) =>
							dispatch({ type: "itemName", value: event.target.value })
						}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="Price">Price</label>
					<input
						className="form-control"
						type="number"
						placeholder="Price"
						onChange={(event) =>
							dispatch({ type: "price", value: event.target.value })
						}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="url">Picture url</label>
					<input
						className="form-control"
						type="text"
						placeholder="Picture url"
						onChange={(event) =>
							dispatch({ type: "itemImage", value: event.target.value })
						}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea
						className="form-control"
						type="text"
						placeholder="Description"
						rows="3"
						onChange={(event) =>
							dispatch({ type: "description", value: event.target.value })
						}
					/>
				</div>
				<button
					className="btn btn-sm btn-dark closeCls"
					onClick={() => setIsModalOpen(false)}
				>
					Close
				</button>
				<button
					onClick={() => {
						itemsContext.itemDispatch({ type: "AddItem", item: item });
						setIsModalOpen(false);
						dispatch({type: "default"})
					}}
					className="btn btn-sm btn-dark submit"
				>
					Add Item
				</button>
			</Modal>
		</div>
	);
}

export default AddItemComponent;
