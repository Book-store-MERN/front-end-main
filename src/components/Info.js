import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "Helvetica" }} variant="h2">
          MERN Stack Application
        </Typography>
        <Typography sx={{ fontFamily: "Helvetica" }} variant="h3">
          By Lonnie, Scott, Tarish, Kobir,& Benji
        </Typography>
      </Box>
    </div>
  );
};

export default About;
