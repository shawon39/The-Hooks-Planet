import React, { useReducer } from "react";
import "./App.css";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import MainComponent from "./MainComponent/MainComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import { initialState } from "../data/items";

let activeCategory = "All";

const reducer = (state, action) => {
	let AllItems = initialState;
	switch (action) {
		case "All": {
			activeCategory = "All";
			return initialState;
		}
		case "Bike": {
			AllItems = initialState;
			activeCategory = "Bike";
			return AllItems.filter((myState) => myState.type === "Bike");
		}
		case "Mobile": {
			AllItems = initialState;
			activeCategory = "Mobile";
			return AllItems.filter((myState) => myState.type === "Mobile");
		}
		case "iPhone": {
			AllItems = initialState;
			activeCategory = "iPhone";
			return AllItems.filter((myState) => myState.type === "iPhone");
		}
		case "Tab": {
			AllItems = initialState;
			activeCategory = "Tab";
			return AllItems.filter((myState) => myState.type === "Tab");
		}
		case "Band": {
			AllItems = initialState;
			activeCategory = "Band";
			return AllItems.filter((myState) => myState.type === "Band");
		}
		default: {
			activeCategory = "All";
			return initialState;
		}
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
						value={{
							items: items,
							itemDispatch: dispatch,
							activeCategory: activeCategory,
						}}
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
