import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FoodDetail() {
    const params = useParams();
    const [food, setFood] = useState({});
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
        <div style={{ marginTop: 70 }}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh" }}>
                <Grid item xs={12}>
                    <img src="https://via.placeholder.com/900x450" alt="Food Text" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h3">{food.Name}</Typography>
                </Grid>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item xs={1}>
                        <Typography variant="h6">Rs {food.Price}</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant="h6"> {food.quantity > 0 ? "In Stock" : "Out of Stock"} </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginLeft: 100, marginRight: 100, marginTop: 25, marginBottom: 25 }}>
                    <Typography variant="body1" align="justify">
                        {food.Description}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default FoodDetail;
