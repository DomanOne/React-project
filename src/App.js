import logo from "./logo.svg";
import "./App.css";
import { icons } from "react-icons";
import { FcPhone } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

function App() {
	return (
		<div className="App">
			<h3 className="contacts">Contact:</h3>

			<p>
				<FcPhone />
				Tel:0700-880-749
			</p>
			<p>
				<FcLike />
				Adress:Butt-hole 99 Myslowice
			</p>
		</div>
	);
}

export default App;
