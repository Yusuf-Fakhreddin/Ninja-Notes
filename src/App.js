import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import {
	AppBar,
	createTheme,
	makeStyles,
	ThemeProvider,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Layout from "./components/Layout";

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
export const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Router>
					<Layout>
						<Switch>
							<Route exact path="/">
								<Notes />
							</Route>
							<Route path="/create">
								<Create />
							</Route>
						</Switch>
					</Layout>
				</Router>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
