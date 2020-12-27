import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function FoodCard() {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.media} image="" title="Contemplative Reptile" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
                            all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Add to Card
                    </Button>
                    <Button size="small" color="primary">
                        Details
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default FoodCard;
