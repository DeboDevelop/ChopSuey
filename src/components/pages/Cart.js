import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { checkoutCart } from "../../redux/dispatchers/cartCheckoutDispatcher";
import { decrementCart } from "../../redux/dispatchers/cartDecrementDispatcher";
import { incrementCart } from "../../redux/dispatchers/cartIncrementDispatcher";

const useStyles = makeStyles(theme => ({
    root: {
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
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let arr = [];
        let totalPrice = 0;
        for (let item_key in items) {
            arr.push({ id: item_key, ...items[item_key] });
            totalPrice += items[item_key].price * items[item_key].quantity;
        }
        setTotal(totalPrice);
        setItemList(() => arr);
    }, [items]);
    const decrementItem = item => {
        dispatch(decrementCart({ id: item.id }));
    };
    const incrementItem = item => {
        axios
            .get(`http://localhost:1337/dishes/${item.id}`)
            .then(res => {
                if (res.data !== undefined) {
                    dispatch(incrementCart({ id: item.id, quantity: res.data.quantity }));
                }
            })
            .catch(err => {
                console.log(err);
            });
    };
    if (user === "") {
        return <Redirect to="/" />;
    } else {
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
                        {/* <Box display="flex" flexDirection="column" flexWrap="wrap">
                            <Box display="flex" flexDirection="row" flexwrap="wrap" justifyContent="space-between">
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Item Name
                                    </Box>
                                </Typography>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Price
                                    </Box>
                                </Typography>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Increment
                                    </Box>
                                </Typography>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Quantity
                                    </Box>
                                </Typography>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Decrement
                                    </Box>
                                </Typography>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Total
                                    </Box>
                                </Typography>
                            </Box>
                            {itemList.map(eachItem => {
                                return (
                                    <Box
                                        display="flex"
                                        flexDirection="row"
                                        flexwrap="wrap"
                                        justifyContent="space-between">
                                        <Typography variant="body1">
                                            <Box textAlign="center">{eachItem.Name}</Box>
                                        </Typography>
                                        <Typography variant="body1">
                                            <Box textAlign="center">{eachItem.price}</Box>
                                        </Typography>
                                        <Box textAlign="center">
                                            <Button size="small" color="secondary" variant="contained">
                                                +
                                            </Button>
                                        </Box>
                                        <Typography variant="body1">
                                            <Box textAlign="center">x{eachItem.quantity}</Box>
                                        </Typography>
                                        <Box textAlign="center">
                                            <Button size="small" color="secondary" variant="contained">
                                                -
                                            </Button>
                                        </Box>
                                        <Typography variant="body1">
                                            <Box textAlign="center">{eachItem.price * eachItem.quantity}</Box>
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Box> */}
                        <Grid container item xs={12} spacing={0} alignItems="center" justify="center">
                            <Grid item xs={4} className={classes.pads}>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Item Name
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={1} className={classes.pads}>
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
                            <Grid item xs={1} className={classes.pads}>
                                <Typography variant="body1">
                                    <Box fontWeight="fontWeightBold" textAlign="center">
                                        Total
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
                                        <Grid item xs={1} className={classes.pads}>
                                            <Typography variant="body1">
                                                <Box textAlign="center">{eachItem.price}</Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2} className={classes.pads}>
                                            <Box textAlign="center">
                                                <Button
                                                    size="small"
                                                    color="secondary"
                                                    variant="contained"
                                                    onClick={() => incrementItem(eachItem)}>
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
                                                <Button
                                                    size="small"
                                                    color="secondary"
                                                    variant="contained"
                                                    onClick={() => decrementItem(eachItem)}>
                                                    -
                                                </Button>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={1} className={classes.pads}>
                                            <Typography variant="body1">
                                                <Box textAlign="center">{eachItem.price * eachItem.quantity}</Box>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </>
                            );
                        })}
                        <Grid item xs={12} spacing={0} className={classes.pads}>
                            <Box textAlign="center" display="flex" direction="row" flexwrap="wrap">
                                <Button
                                    variant="contained"
                                    fullWidth={true}
                                    className={classes.button}
                                    onClick={() => dispatch(checkoutCart())}>
                                    Checkout
                                </Button>
                                <Box textAlign="center" m={1}>
                                    <Typography variant="body1">{total}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        );
    }
}

export default Cart;
