import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import cardImage from "../../assets/img/cardImage.jpg";
import { addCart } from "../../redux/dispatchers/cartAddDispatcher";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: 5,
        margin: 10,
    },
    media: {
        height: 140,
    },
    customBox: {
        display: "-webkit-box",
        boxOrient: "vertical",
        lineClamp: 3,
        wordBreak: "break-all",
        overflow: "hidden",
    },
});

function FoodCard({ food }) {
    const classes = useStyles();
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    let history = useHistory();
    const addItem = () => {
        if (user !== "") {
            dispatch(addCart({ id: food.id, Name: food.Name, price: food.Price, quantity: 1 }));
        } else {
            history.push("/login");
        }
    };
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={cardImage} title="Food you are about to buy" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {food.Name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <Box className={classes.customBox}>{food.Description}</Box>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button
                        size="small"
                        color="primary"
                        onClick={() => addItem()}
                        disabled={food.quantity === 0 ? true : false}>
                        Add to Card
                    </Button>
                    <Button size="small" color="primary" component={Link} to={"/food/" + food.id}>
                        Details
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default FoodCard;
