import {
  Paper,
  Box,
  TableContainer,
  CircularProgress,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";

const TableFrameLogin = ({ children }) => {
  const theme = useTheme();

  return (
    <TableContainer component={Box}>
      <Box display="flex" sx={{ justifyContent: "center", p: 2 }}>
        <Box
          bgcolor="white"
          sx={{
            mx: { xs: "5%", md: "10%" },
            maxWidth: "648px",
            boxShadow: theme.customShadows.widget,
            p: "5%",
          }}
        >
          <Grid
            container
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

export default TableFrameLogin;
