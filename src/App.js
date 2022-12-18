import "./App.css";
import HmeRoute from "./HomeRoute/HmeRoute";
import { BrowserRouter } from "react-router-dom";
import Header from "./Component/Header";

function App() {
	return (
		<div className='App'>
			<Header />
			<BrowserRouter>
				<HmeRoute />
			</BrowserRouter>
		</div>
	);
}

export default App;
