import React, { useState, useContext } from "react";
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

function ItemComponent({ item }) {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [isDeleteOpenModal, setIsDeleteOpenModal] = useState(false);
	// delete item
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
				<div className="btn actionBtn" onClick={() => setIsOpenModal(true)}>
					<i className="fas fa-edit"></i>
				</div>
				<div className="btn actionBtn" onClick={() => setIsDeleteOpenModal(true)}>
					<i className="fas fa-trash"></i>
				</div>
			</div>
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
						onClick={() =>{
							itemContext.itemDispatch({type: "deleteItem", itemId : item.Id, currentItem : item.type})
					  }}>
						Confirm
					</button>
				</div>
			</Modal>
		</React.Fragment>
	);
}

export default ItemComponent;
