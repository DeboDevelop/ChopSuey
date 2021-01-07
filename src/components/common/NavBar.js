import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textDecoration: "none",
        color: "#ffffff",
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    subheading: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));

function NavBar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:1337/categories")
            .then(res => {
                let newCategories = res.data.map(category => category["Food_type"]);
                setCategories(() => [...newCategories]);
            })
            .catch(err => {
                setCategories([]);
                console.log(err);
            });
    }, []);
    return (
        <div className="App">
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <IconButton
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} component={Link} to="/">
                        ChopSuey
                    </Typography>
                    <Button color="inherit" component={Link} to="/login">
                        Login
                    </Button>

                    <Button color="inherit" component={Link} to="/register">
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List
                    component="nav"
                    subheader={
                        <ListSubheader className={classes.subheading} component="div">
                            Categories
                        </ListSubheader>
                    }>
                    <Divider />
                    <ListItem button component={Link} to="/shop">
                        <ListItemText primary="All Category" />
                    </ListItem>
                    {categories.map(category => {
                        return (
                            <ListItem button component={Link} to={"/shop/" + category}>
                                <ListItemText primary={category} />
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </div>
    );
}

export default NavBar;
