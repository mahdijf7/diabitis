import {
  Box,
  Container,
  Pagination,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import CardsCustom from "./CardsCustom";
import FetchApi from "../../services/FetchApi";
import t from "../../public/locales/defualt/common.json";

const PaginationCustom = () => {
  const theme = useTheme();

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getNews = async (p = 1) => {
    setIsLoading(true);
    const res = await FetchApi("", "fa", "getNews", {}, `?page=${p}&limit=12`);
    if (res.success) {
      setData(res.dataBody.list);
      setTotalPages(res.dataBody.pages);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    async function fetchData() {
      await getNews();
    }
    fetchData();
  }, []);

  const handleChange = async (e, p) => {
    if (p > 0 && p <= totalPages && p != page) {
      setPage(p);
      await getNews(p);
    }
  };

  return (
    <Container sx={{ py: 5 }}>
      {!isLoading && !data[0] ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", height: "10vw" }}
        >
          <Typography variant="h2">{t.all.noData}</Typography>
        </Box>
      ) : (
        <CardsCustom data={data} isLoading={isLoading} />
      )}
      <Stack alignItems="center" spacing={2}>
        <Pagination
          dir="ltr"
          count={totalPages}
          shape="rounded"
          onChange={handleChange}
          sx={{
            "& .MuiSvgIcon-root": {
              fill: theme.palette.secondary.main,
              fontSize: "35px",
            },
            "& .MuiPaginationItem-root": {
              color: "secondary.main",
            },
            "& li .Mui-selected": {
              color: "common.white",
              backgroundColor: "secondary.main",
            },
            my: 5,
          }}
        />
      </Stack>
    </Container>
  );
};

export default PaginationCustom;
