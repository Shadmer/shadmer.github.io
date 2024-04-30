import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export const Loading = () => {
    return (
        <Backdrop
            open={true}
            sx={{ color: '#fff' }}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};
