import React, { useState } from "react";
import "./HeaderComponent.css";
import Modal from "react-modal";

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
		backgroundColor: "#E3E6E3",
	},
};

function AddItemComponent() {
	const [isModalOpen, setIsModalOpen] = useState(false);
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
				<h5>Add an Item</h5>
				<input className="form-control my-2" type="text" />
				<input className="form-control my-2" type="text" />
				<input className="form-control my-2" type="text" />
				<input className="form-control my-2" type="text" />
				<button
					className="btn btn-sm btn-dark closeCls"
					onClick={() => setIsModalOpen(false)}
				>
					Close
				</button>
				<button className="btn btn-sm btn-dark submit">Add Item</button>
			</Modal>
		</div>
	);
}

export default AddItemComponent;
