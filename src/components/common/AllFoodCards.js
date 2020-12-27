import Box from "@material-ui/core/Box";
import React from "react";
import FoodCard from "./FoodCard";

function AllFoodCards() {
    return (
        <div style={{ width: "100%" }}>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </Box>
        </div>
    );
}

export default AllFoodCards;
