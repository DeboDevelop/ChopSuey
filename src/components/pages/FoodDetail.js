import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../../redux/dispatchers/cartAddDispatcher";

const useStyles = makeStyles(theme => ({
    box: {
        maxWidth: 400,
    },
    paper: {
        maxWidth: 900,
        padding: 10,
        [theme.breakpoints.down("xs")]: {
            marginTop: 50,
        },
    },
    img: {
        padding: 10,
    },
    space: {
        marginTop: 10,
        marginBottom: 10,
    },
}));

function FoodDetail() {
    const classes = useStyles();
    const params = useParams();
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const [food, setFood] = useState({});
    const addItem = () => {
        if (user !== "") {
            dispatch(addCart({ id: food.id, Name: food.Name, price: food.Price, quantity: 1 }));
        }
    };
    useEffect(() => {
        axios
            .get(`http://localhost:1337/dishes/${params.id}`)
            .then(res => {
                if (params.id !== undefined) setFood(() => res.data);
            })
            .catch(err => {
                setFood([]);
                console.log(err);
            });
    }, [params.id]);
    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh" }}>
                <Grid item xs={12}>
                    <Paper elevation={3} className={classes.paper}>
                        <Box display="flex" flexDirection="row" flexWrap="wrap">
                            <Box>
                                <img
                                    src="https://via.placeholder.com/400x400"
                                    alt="Food Text"
                                    className={classes.img}
                                />
                            </Box>
                            <Box className={classes.box}>
                                <Box fontWeight="fontWeightBold" textAlign="center">
                                    <Typography variant="h4">{food.Name}</Typography>
                                </Box>
                                <Typography variant="h6" className={classes.space}>
                                    {" "}
                                    {food.quantity > 0 ? "Rs: " + food.Price : "Out of Stock"}{" "}
                                </Typography>
                                <Box className={classes.space}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        disabled={food.quantity === 0 ? true : false}
                                        onClick={() => addItem()}>
                                        Add to Cart
                                    </Button>
                                </Box>
                                <Box className={classes.space}>
                                    <Typography variant="body1" align="justify">
                                        {food.Description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default FoodDetail;
