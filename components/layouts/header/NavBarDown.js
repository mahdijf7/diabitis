import { Box, Grid, Toolbar, Typography } from "@mui/material";

const NavBarDown = ({ maxWidth, list }) => {
  return (
    <Toolbar sx={{ maxHeight: "60px" }}>
      <Box width="100%" m="auto" maxWidth={maxWidth}>
        <Grid container columns={33} sx={{ placeItems: "center" }}>
          {list.map((el, index) => (
            <Grid key={index} item xs={el.col} textAlign="center">
              <Typography
                color="common.white"
                component="h3"
                sx={{ typography: { md: "subtitle3", lg: "subtitle1" } }}
              >
                {el.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Toolbar>
  );
};

export default NavBarDown;
