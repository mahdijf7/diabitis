import { useContext } from "react";
import StoreContext from "../../assets/context/StoreContext";
import { useTheme } from "@mui/material/styles";
import { Tooltip, IconButton, Box } from "@mui/material";
import { Brightness4, Brightness5 } from "@mui/icons-material";

const ToggleButton = () => {
  const theme = useTheme();
  const { darkMode, setDarkMode } = useContext(StoreContext);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Tooltip title={`${theme.palette.mode} mode`}>
        <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness4 /> : <Brightness5 />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ToggleButton;
