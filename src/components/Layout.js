import {
	AppBar,
	Avatar,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "../styles/layoutStyles";

// const drawerWidth = 240;
// const useStyles = makeStyles({
// 	page: {
// 		background: "#f9f9f9",
// 		width: "100%",
// 	},
// 	drawer: {
// 		width: drawerWidth,
// 	},
// });

const Layout = ({ children }) => {
	const classes = useStyles();

	const menuItems = [
		{
			text: "My Notes",
			icon: <SubjectOutlined color="secondary" />,
			path: "/",
		},
		{
			text: "Create Note",
			icon: <AddCircleOutlineOutlined color="secondary" />,
			path: "/create",
		},
	];

	return (
		<div className={classes.root}>
			{/* app bar */}
			<AppBar className={classes.appbar} elevation={0}>
				<Toolbar>
					<Typography className={classes.welcome}>Welcome</Typography>
					<Typography>Levi</Typography>
					<Avatar src="./levi.jpg" className={classes.avatar} />
				</Toolbar>
			</AppBar>
			{/* side drawer */}
			<Drawer
				className={classes.drawer}
				variant="permanent"
				anchor="left"
				// classes to override the css of the classes inside the drawer component built into it by material ui
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div>
					<Typography variant="h5" className={classes.title}>
						Ninja Notes
					</Typography>
				</div>

				{/* List of Links */}
				<List>
					{React.Children.toArray(
						menuItems.map((item) => (
							<ListItem
								component={NavLink}
								to={item.path}
								className={classes.link}
								activeClassName={classes.active}
								exact
							>
								{/* button ads hover effect */}
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						))
					)}
				</List>
			</Drawer>

			<div className={classes.page}>
				{/* to drop the children content down by toolbar height */}
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	);
};

export default Layout;
