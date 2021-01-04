import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";

function FoodDetail() {
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
                    <Typography variant="h3">Food Name</Typography>
                </Grid>
                <Grid container direction="row" justify="space-evenly" alignItems="center">
                    <Grid item xs={1}>
                        <Typography variant="h6">Rs xxx</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant="h6">In Stock</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{ marginLeft: 100, marginRight: 100, marginTop: 25, marginBottom: 25 }}>
                    <Typography variant="body1" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum, nisl eget viverra
                        ultrices, mi ligula auctor mauris, a bibendum odio lorem pharetra neque. Nunc vitae aliquet ex,
                        nec suscipit lorem. Nam porttitor a nisi sed commodo. Integer commodo, enim sit amet facilisis
                        malesuada, ante nunc vulputate tortor, ut tempor elit diam id justo. Donec sapien mi, efficitur
                        nec ante non, aliquam tempor nulla. Aenean vitae arcu id felis tempus varius non sit amet ante.
                        Ut aliquet accumsan nisi vel tincidunt. Etiam non mi faucibus, luctus ipsum viverra, commodo
                        mauris. Nullam maximus leo velit. Nam in risus at tellus condimentum aliquet ac dignissim orci.
                        Nulla quis dui metus. Nullam accumsan magna varius eros hendrerit malesuada. Nunc mauris justo,
                        placerat imperdiet hendrerit vel, elementum eget urna. Suspendisse porttitor ligula ipsum, sed
                        rhoncus eros congue eget. Etiam auctor rhoncus ligula.{" "}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default FoodDetail;
