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
} from "@mui/material";
import t from "../../public/locales/defualt/common.json";
import arrowMore from "../../public/images/news/arrowMore.svg";
import Image from "next/image";
const baseUrl = "http://162.55.95.245:7050";

const CardsCustom = ({ data }) => {
  const theme = useTheme();

  return (
    <Grid container spacing={5}>
      {data.map((el, index) => (
        <Grid key={index} item md={3} sm={4} xs={12}>
          <Card sx={{ boxShadow: theme.customShadows.widget }}>
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
              sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}
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
