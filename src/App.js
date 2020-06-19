import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from './components/MainComponent/MainComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
	return (
		<div className="App container">
			<section className="row">
				<div className="col-sm-12">
					<HeaderComponent />
				</div>
			</section>
      <section className="row">
				<div className="col-sm-12">
					<MainComponent />
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

export default App;
