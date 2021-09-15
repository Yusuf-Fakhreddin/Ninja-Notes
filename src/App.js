import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

// override the object theme of material ui which can be found on docs to speicify ceratin properties
const theme = createTheme({
	palette: {
		primary: {
			// introduce new color
			main: "#fefefe",
		},
		// use a color from material ui colors
		// using a material ui color applies light,main,dark values for us
		secondary: purple,
	},
	typography: {
		// imported in index.css
		fontFamily: "Quicksand",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Notes />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
