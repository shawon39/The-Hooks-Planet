import React, { useReducer } from "react";
import "./App.css";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import MainComponent from "./MainComponent/MainComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import { initialState } from "../data/items";

let activeCategory = "All";

const filterPrice = {
	All: [10000, 20000, 50000, 100000, 200000],
	Bike: [5000, 15000, 30000, 50000, 80000, 100000, 200000],
	Mobile: [5000, 10000, 20000, 30000, 50000, 100000, 200000],
	iPhone: [10000, 20000, 50000, 100000, 200000],
	Tab: [10000, 20000, 30000, 50000, 100000, 200000],
	Band: [1000, 2000, 5000, 10000, 20000],
};

const reducer = (state, action) => {
	let AllItems = initialState;
	switch (action.type) {
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
		case "AddItem": {
			AllItems = initialState;
			activeCategory = action.item.type;
			AllItems.push(action.item);
			return AllItems.filter((myState) => myState.type === activeCategory);
		}
		case "SearchItem": {
			AllItems = initialState;
			return AllItems.filter((myState) =>
				myState.itemName.includes(action.searchKey)
			);
		}
		case "filterPrice": {
			AllItems = initialState;
			return (AllItems = AllItems.filter((myState) => {
				if (activeCategory === "All") {
					return myState.price <= action.itemPrice;
				}
				return (
					myState.type === activeCategory && myState.price <= action.itemPrice
				);
			}));
		}
		case "deleteItem": {
			AllItems = initialState;
			activeCategory = action.currentItem;
			return AllItems.filter((myState) => {
				return myState.Id !== action.itemId && myState.type === activeCategory;
			});
		}
		case "editItem": {
			AllItems = initialState;
			activeCategory = action.item.type;
			return AllItems.filter((myState) => {
				if(myState.Id === action.item.Id) {
					myState.itemName = action.item.itemName;
					myState.type = action.item.type;
					myState.price = action.item.price;
					myState.itemImage = action.item.itemImage;
					myState.description = action.item.description;
				}
				return myState.type === activeCategory;
			});
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
					<ItemContext.Provider value={{ itemDispatch: dispatch }}>
						<HeaderComponent />
					</ItemContext.Provider>
				</div>
			</section>
			<section className="row">
				<div className="col-sm-12">
					<ItemContext.Provider
						value={{
							items: items,
							itemDispatch: dispatch,
							activeCategory: activeCategory,
							itemCurrentPage: 1,
							filterPrice: filterPrice[activeCategory],
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
