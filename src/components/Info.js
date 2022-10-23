import { Box, Typography } from "@mui/material";
import React from "react";

const Info = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          About Us
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          place holder 
        </Typography>
      </Box>
    </div>
  );
};

export default Info;
