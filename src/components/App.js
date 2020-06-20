import React, { useReducer } from "react";
import "./App.css";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import MainComponent from "./MainComponent/MainComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import { initialState } from "../items";

const reducer = (state, action) => {
	let AllItems = initialState;
	switch (action) {
		case "All":
			return initialState;
		case "Bike": {
			AllItems = initialState;
			return AllItems.filter((myState) => myState.type === "Bike");
		}
		case "Mobile": {
			AllItems = initialState;
			return AllItems.filter((myState) => myState.type === "Mobile");
		}
		case "iPhone": {
			AllItems = initialState;
			return AllItems.filter((myState) => myState.type === "iPhone");
		}
		case "Tab": {
			AllItems = initialState;
			return AllItems.filter((myState) => myState.type === "Tab");
		}
		case "Cookies": {
			AllItems = initialState;
			return AllItems.filter((myState) => myState.type === "Cookies");
		}
		default:
			return initialState;
	}
};

const ItemContext = React.createContext();

function App() {
	const [items, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="App container">
			<section className="row">
				<div className="col-sm-12">
					<HeaderComponent />
				</div>
			</section>
			<section className="row">
				<div className="col-sm-12">
					<ItemContext.Provider
						value={{ items: items, itemDispatch: dispatch }}
					>
						<MainComponent />
					</ItemContext.Provider>
				</div>
			</section>
			<section className="row">
				<div className="col-sm-12">
					<FooterComponent />
				</div>
			</section>
		</div>
	);
}

export { ItemContext };
export default App;
