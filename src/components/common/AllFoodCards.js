import Box from "@material-ui/core/Box";
import React from "react";
import FoodCard from "./FoodCard";

function AllFoodCards({ foodlist }) {
    return (
        <div style={{ width: "100%" }}>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                {foodlist.map(food => {
                    return <FoodCard food={food} />;
                })}
            </Box>
        </div>
    );
}

export default AllFoodCards;
