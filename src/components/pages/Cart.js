import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 70,
    },
    paper: {
        padding: 50,
        margin: 10,
    },
    pads: {
        padding: 5,
    },
    button: {
        backgroundColor: "#4285F4",
        "&:hover": {
            backgroundColor: "#0e65f1",
        },
    },
}));

function Cart() {
    const classes = useStyles();
    const user = useSelector(state => state.auth.user);
    const [itemList, setItemList] = useState([]);
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        let arr = [];
        for (let item_key in items) {
            arr.push({ id: item_key, ...items[item_key] });
        }
        setItemList(() => arr);
    }, [items]);
    if (user === "") {
        return <Redirect to="/" />;
    } else {
        console.log(itemList);
        return (
            <div className={classes.root}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: "80vh" }}>
                    <Paper elevation={3} style={{ width: "100vh" }} className={classes.paper}>
                        <Grid container item xs={12} spacing={0} alignItems="center" justify="center">
                            <Grid item xs={4} className={classes.pads}>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Item Name
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.pads}>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Price
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.pads}>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Increment
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.pads}>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Quantity
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.pads}>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Decrement
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                        {itemList.map(eachItem => {
                            return (
                                <>
                                    <Grid container item xs={12} spacing={0} alignItems="center" justify="center">
                                        <Grid item xs={4} className={classes.pads}>
                                            <Typography variant="body1">{eachItem.Name}</Typography>
                                        </Grid>
                                        <Grid item xs={2} className={classes.pads}>
                                            <Typography variant="body1">
                                                <Box textAlign="center">{eachItem.price}</Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} className={classes.pads}>
                                            <Box textAlign="center">
                                                <Button size="small" color="secondary" variant="contained">
                                                    +
                                                </Button>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={2} className={classes.pads}>
                                            <Typography variant="body1">
                                                <Box textAlign="center">x{eachItem.quantity}</Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} className={classes.pads}>
                                            <Box textAlign="center">
                                                <Button size="small" color="secondary" variant="contained">
                                                    -
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </>
                            );
                        })}
                        <Grid item xs={12} spacing={0} className={classes.pads}>
                            <Box textAlign="center">
                                <Button variant="contained" fullWidth={true} className={classes.button}>
                                    Checkout
                                </Button>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export default Cart;
