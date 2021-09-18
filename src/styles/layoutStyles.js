import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;
// export const useStyles = makeStyles({
// 	page: {
// 		background: "#f9f9f9",
// 		width: "100%",
// 	},
// 	drawer: {
// 		width: drawerWidth,
// 	},
// 	// overriding the width of the paper component inside the drawer component
// 	drawerPaper: {
// 		width: drawerWidth,
// 	},
// 	root: {
// 		display: "flex",
// 	},
// 	active: {
// 		background: "#f4f4f4",
// 	},
// 	appbar: {
// 		width: `calc(100% - ${drawerWidth}px)`,
// 	},
// });

// using the default theme object directly in makeStyles

export const useStyles = makeStyles((theme) => {
	return {
		page: {
			background: "#f9f9f9",
			width: "100%",
			padding: theme.spacing(3), // 3* base spacing value
		},
		drawer: {
			width: drawerWidth,
		},
		// overriding the width of the paper component inside the drawer component
		drawerPaper: {
			width: drawerWidth,
		},
		root: {
			display: "flex",
		},
		active: {
			background: "#f4f4f4",
			textDecoration: "none",
		},
		link: {
			textDecoration: "none",
			color: "black",
		},
		title: {
			padding: theme.spacing(2),
		},
		appbar: {
			width: `calc(100% - ${drawerWidth}px)`,
			display: "flex",
		},
		// use the theme toolbar component classes
		toolbar: theme.mixins.toolbar,
		// make welcome take all the possible space to push next element to the other side
		welcome: {
			flexGrow: 1,
		},
		avatar: {
			marginLeft: theme.spacing(2),
		},
	};
});
