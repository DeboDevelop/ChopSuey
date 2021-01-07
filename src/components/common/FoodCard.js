import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: 5,
        margin: 10,
    },
    media: {
        height: 140,
    },
});

function FoodCard({ food }) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://via.placeholder.com/345x140"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {food.Name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {food.Description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
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
