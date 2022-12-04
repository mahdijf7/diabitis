import {
  Paper,
  Box,
  TableContainer,
  CircularProgress,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";

const TableFrameEdit = ({ loading, notFoundText, data, children }) => {
const theme = useTheme()

  return (
    <TableContainer component={Paper}>
      {loading ? (
        <Box sx={{ m: "10%" }} justifyContent="center" display="flex">
          <CircularProgress />
        </Box>
      ) : (
        <>
          {data ? (
            <Box display="flex" sx={{justifyContent:"center"}}>
              <Box  sx={{ mx:{xs:"5%", md:"10%"},maxWidth:"920px" , boxShadow: theme.customShadows.widget, p:"5%", mt:{xs:3, md:8} }}>
              <Grid container columnSpacing={{sm:5}} display="flex" alignItems="center" justifyContent="center">
                {children}
              </Grid>
            </Box>
            </Box>
          ) : (
            <Box sx={{ m: "20%" }} justifyContent="center" display="flex">
              <Typography>{notFoundText}</Typography>
            </Box>
          )}
        </>
      )}
    </TableContainer>
  );
};

export default TableFrameEdit;
