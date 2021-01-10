import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/home.css";

function Home() {
    return (
        <div className="full-bg-size bg-dim">
            <Box className="textbox">
                <Typography variant="h3">
                    <Box fontWeight="fontWeightBold" textAlign="center" className="text">
                        Enjoy Original American Chop Suey
                    </Box>
                </Typography>
                <Box textAlign="center">
                    <Button variant="contained" color="secondary" component={Link} to="/shop">
                        Shop Now
                    </Button>
                </Box>
            </Box>
        </div>
    );
}

export default Home;
