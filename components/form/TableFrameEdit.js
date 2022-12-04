import {
  Paper,
  Box,
  TableContainer,
  CircularProgress,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";

const TableFrameEdit = ({ notFoundText, data, children }) => {
  const theme = useTheme();

  return (
    <TableContainer component={Paper}>
      <Box display="flex" sx={{ justifyContent: "center" }}>
        <Box
          sx={{
            mx: { xs: "5%", md: "10%" },
            maxWidth: "920px",
            boxShadow: theme.customShadows.widget,
            p: "5%",
            my: { xs: 3, md: 8 },
          }}
        >
          <Grid
            container
            columnSpacing={{ sm: 5 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {children}
          </Grid>
        </Box>
      </Box>
    </TableContainer>
  );
};

export default TableFrameEdit;
