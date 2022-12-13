import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  Grid,
  useTheme,
  Skeleton,
  Box,
  useMediaQuery,
} from "@mui/material";
import t from "../../public/locales/defualt/common.json";
import arrowMore from "../../public/images/news/arrowMore.svg";
import Image from "next/image";
const baseUrl = "http://162.55.95.245:7050";

const CardsCustom = ({ data, isLoading }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery("(max-width:1150px)");
  const isMidle = useMediaQuery("(max-width:850px)");

  return (
    <Grid container>
      {isLoading
        ? Array.from(new Array(12)).map((el, index) => (
            <Grid key={index} item md={3} sm={4} xs={12}>
              <Card
                sx={{
                  boxShadow: theme.customShadows.widget,
                  width: "90%",
                  mx: "auto",
                  mb: "10%",
                }}
              >
                <Skeleton variant="rectangular" height={118} />
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Card>
            </Grid>
          ))
        : data.map((el, index) => (
            <Grid
              key={index}
              item
              md={isMatch ? 4 : 3}
              sm={isMidle ? 6 : 4}
              xs={12}
            >
              <Card
                sx={{
                  boxShadow: theme.customShadows.widget,
                  width: "90%",
                  mx: "auto",
                  mb: "10%",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={baseUrl + el.File.path}
                  alt=""
                  loading="lazy"
                />
                <CardContent sx={{ height: "100px", overflow: "hidden" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      typography: {
                        md: "subtitle5",
                        sm: "subtitle6",
                        xs: "subtitle7",
                      },
                    }}
                  >
                    {el.title}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                  }}
                >
                  <Button>
                    <Typography
                      sx={{
                        typography: {
                          md: "subtitle5",
                          sm: "subtitle6",
                          xs: "subtitle7",
                        },
                      }}
                    >
                      {t.news.readNews}
                    </Typography>
                  </Button>
                  <IconButton>
                    <Image src={arrowMore} alt="" loading="lazy" />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
    </Grid>
  );
};

export default CardsCustom;
