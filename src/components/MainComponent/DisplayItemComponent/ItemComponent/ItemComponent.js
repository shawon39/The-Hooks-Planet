import React, { useState, useContext, useReducer } from "react";
import "./ItemComponent.css";
import Modal from "react-modal";
import { ItemContext } from "../../../App";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		height: "fit-content",
		width: "450px",
		backgroundColor: "rgba(59, 146, 126, 0.88)",
	},
};

const initialItem = {};

const setInitialItem = (myItem) => {
	initialItem.Id = myItem.Id;
	initialItem.itemName = myItem.itemName;
	initialItem.type = myItem.type;
	initialItem.price = myItem.price;
	initialItem.itemImage = myItem.itemImage;
	initialItem.description = myItem.description;
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

// Validation check
const removeErrors = () => {
	const requiredFieldsFields = document.querySelectorAll(".requiredFields");
	requiredFieldsFields.forEach((field) => {
		var elements = field.getElementsByTagName("P");
		while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
	});
};

const checkValidation = (itemVal) => {
	removeErrors();
	if (itemVal.Id && itemVal.itemName && itemVal.type && itemVal.price > 0) {
		return true;
	}
	const requiredFieldsFields = document.querySelectorAll(".requiredFields");
	requiredFieldsFields.forEach((field) => {
		if (field.getElementsByTagName("select").length) {
			var selectedVal = field.getElementsByTagName("select");
			var node, nodeText;
			if (
				selectedVal[0].options[selectedVal[0].selectedIndex].value === "DEFAULT"
			) {
				node = document.createElement("P");
				nodeText = document.createTextNode("Fill up the required fields!");
				node.appendChild(nodeText);
				field.prepend(node);
			}
		} else if (!field.getElementsByTagName("input")[0].value) {
			node = document.createElement("P");
			nodeText = document.createTextNode("Fill up the required fields!");
			node.appendChild(nodeText);
			field.prepend(node);
		}
	});
	return false;
};
//Validation check End

function ItemComponent({ item }) {
	setInitialItem(item);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isDeleteOpenModal, setIsDeleteOpenModal] = useState(false);
	const [isEditOpenModal, setIsEditOpenModal] = useState(false);
	const [itemUpdate, dispatch] = useReducer(reducer, item);
	const itemContext = useContext(ItemContext);

	return (
		<React.Fragment>
			<div className="myItem">
				<h6>{item.itemName} </h6>
				<img
					src={require(`../../../../data/Image/${item.itemImage}`)}
					alt={item.type}
				/>
				<p>Price : ৳ {item.price} </p>
				<div className="btn actionBtn" onClick={() => setIsOpenModal(true)}>
					<i className="fas fa-eye"></i>
				</div>
				<div className="btn actionBtn" onClick={() => setIsEditOpenModal(true)}>
					<i className="fas fa-edit"></i>
				</div>
				<div
					className="btn actionBtn"
					onClick={() => setIsDeleteOpenModal(true)}
				>
					<i className="fas fa-trash"></i>
				</div>
			</div>
			{/* This is for viewing item */}
			<Modal
				isOpen={isOpenModal}
				onRequestClose={() => setIsOpenModal(false)}
				style={customStyles}
			>
				<div className="detailsModal">
					<h4>{item.itemName} </h4>
					<div className="ImagePrice">
						<img
							src={require(`../../../../data/Image/${item.itemImage}`)}
							alt={item.type}
						/>
						<p>
							<strong>Price : ৳ {item.price} </strong>
						</p>
					</div>
					<p>{item.description}</p>
					<button
						className="btn btn-sm btn-dark closeCls"
						onClick={() => setIsOpenModal(false)}
					>
						Close
					</button>
				</div>
			</Modal>
			{/* This is for deleting item */}
			<Modal
				isOpen={isDeleteOpenModal}
				onRequestClose={() => setIsDeleteOpenModal(false)}
				style={customStyles}
			>
				<div className="deleteModal">
					<button
						className="btn btn-sm btn-dark"
						onClick={() => setIsDeleteOpenModal(false)}
					>
						Cancel
					</button>
					<button
						className="btn btn-sm btn-dark"
						onClick={() => {
							itemContext.itemDispatch({
								type: "deleteItem",
								itemId: item.Id,
								currentItem: item.type,
							});
						}}
					>
						Confirm
					</button>
				</div>
			</Modal>
			{/* This is for editing item */}
			<Modal
				isOpen={isEditOpenModal}
				onRequestClose={() => setIsEditOpenModal(false)}
				style={customStyles}
			>
				<h5 className="text-center">Edit The Item</h5>
				<div className="form-group requiredFields">
					<div>
						<label htmlFor="Item No">
							Item No <span className="required">*</span>
						</label>
						<input
							className="form-control"
							type="number"
							readOnly
							value={itemUpdate.Id}
							placeholder="Item no"
							onChange={(event) =>
								dispatch({ type: "Id", value: event.target.value })
							}
						/>
					</div>
				</div>
				<div className="form-group requiredFields">
					<div>
						<label className="selectLabel">
							Select Type <span className="required">*</span>
						</label>
						<select
							value={itemUpdate.type}
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
				</div>
				<div className="form-group requiredFields">
					<div>
						<label htmlFor="Item Name">
							Item Name <span className="required">*</span>
						</label>
						<input
							className="form-control"
							type="text"
							value={itemUpdate.itemName}
							placeholder="Item name"
							onChange={(event) =>
								dispatch({ type: "itemName", value: event.target.value })
							}
						/>
					</div>
				</div>
				<div className="form-group requiredFields">
					<div>
						<label htmlFor="Price">
							Price <span className="required">*</span>
						</label>
						<input
							className="form-control"
							type="number"
							value={itemUpdate.price}
							placeholder="Price"
							onChange={(event) =>
								dispatch({ type: "price", value: event.target.value })
							}
						/>
					</div>
				</div>
				<div className="form-group">
					<div>
						<label htmlFor="url">Picture url</label>
						<input
							className="form-control"
							type="text"
							value={itemUpdate.itemImage}
							placeholder="Picture url"
							onChange={(event) =>
								dispatch({ type: "itemImage", value: event.target.value })
							}
						/>
					</div>
				</div>
				<div className="form-group">
					<div>
						<label htmlFor="description">Description</label>
						<textarea
							className="form-control"
							type="text"
							value={itemUpdate.description}
							placeholder="Description"
							rows="3"
							onChange={(event) =>
								dispatch({ type: "description", value: event.target.value })
							}
						/>
					</div>
				</div>
				<button
					className="btn btn-sm btn-dark closeCls"
					onClick={() => {
						setIsEditOpenModal(false);
						dispatch({ type: "default" });
					}}
				>
					Close
				</button>
				<button
					onClick={() => {
						if (checkValidation(itemUpdate)) {
							itemContext.itemDispatch({
								type: "editItem",
								item: itemUpdate,
								currentItem: item.type,
							});
							setIsEditOpenModal(false);
						}
					}}
					className="btn btn-sm btn-dark submit"
				>
					Update
				</button>
			</Modal>
		</React.Fragment>
	);
}

export default ItemComponent;
