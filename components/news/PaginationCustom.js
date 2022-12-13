import { Container, Pagination, Stack, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import CardsCustom from "./CardsCustom";
import FetchApi from "../../services/FetchApi";

const PaginationCustom = () => {
  const theme = useTheme();

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getNews = async (p = 1) => {
    const res = await FetchApi("", "fa", "getNews", {}, `?page=${p}&limit=12`);
    if (res.success) {
      setData(res.dataBody.list);
      setTotalPages(res.dataBody.pages);
    }
  };

  useEffect(() => {
    async function fetchData() {
      await getNews();
    }
    fetchData();
  }, []);

  const handleChange = async (e, p) => {
    if (p > 0 && p <= totalPages) {
      setPage(p);
      await getNews(p);
    }
  };

  return (
    <Container sx={{ py: 5 }}>
      <CardsCustom data={data} />
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
