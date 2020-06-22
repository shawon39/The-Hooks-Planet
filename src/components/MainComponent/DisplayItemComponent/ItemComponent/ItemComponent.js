import React, { useState } from "react";
import "./ItemComponent.css";
import Modal from "react-modal";

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
	return (
		<React.Fragment>
			<div className="myItem">
				<h6>{item.itemName} </h6>
				<img src={item.itemImage} alt={item.type} />
				<p>Price :  ৳ {item.price}  </p>
				<button
					className="btn btn-sm btn-dark"
					onClick={() => setIsOpenModal(true)}
				>
					Details
				</button>
			</div>
			<Modal
				isOpen={isOpenModal}
				onRequestClose={() => setIsOpenModal(false)}
				style={customStyles}
			>
				<div className="detailsModal">
					<h4>{item.itemName} </h4>
					<div className="ImagePrice">
						<img src={item.itemImage} alt={item.type} />
						<p> <strong>Price :  ৳ {item.price} </strong> </p>
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
		</React.Fragment>
	);
}

export default ItemComponent;
