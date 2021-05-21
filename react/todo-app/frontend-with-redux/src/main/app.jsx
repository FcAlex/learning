import Menu from "../components/Menu"
import Routes from "./routes"
import './../style/custom.css'

const App = (props) => {
	return (
		<div className="container">
			<Menu />
			<Routes />
		</div>
	)
}

export default App