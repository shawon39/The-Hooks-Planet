import React from "react";
import "./FooterComponent.css";

function FooterComponent() {
	return (
		<div className="footer row">
			<div className="col-md-4">
				<h5>Contacts</h5>
				<p>Shakhawat Hossain</p>
				<p>shshawon39@gmail.com</p>
				<p>01001010101010</p>
			</div>
			<div className="col-md-4">
				<h5>Social Links</h5>
				<p>facebook.com/sh.shawon1</p>
				<p>github.com/shawon39</p>
				<p>twitter.com/shshawon39</p>
			</div>
			<div className="col-md-4">
				<h5>Company</h5>
				<p>Advertise</p>
				<p>Privacy Policy</p>
				<p>Terms of use</p>
			</div>
			<p className="copyright">
				The Hooks Planet || All rights reserved || The Planet
			</p>
		</div>
	);
}

export default FooterComponent;
