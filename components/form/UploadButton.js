import { Box, IconButton, Typography } from "@mui/material";
import { useFormikContext, ErrorMessage } from "formik";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const UploadButton = ({
  name,
  text,
  children,
}) => {
  const { setFieldValue, values } = useFormikContext();
  const handleChange = (event, value) => {
    setFieldValue(name, event.currentTarget.files[0]);
  };
  const configInput = {
    onChange: handleChange,
    type: "file",
    id: name,
    accept: "application/pdf application/vnd.ms-powerpoint",
  };
  return (
    <>
      <Box
        bgcolor="primary.light"
        sx={{
          width: "100%",
          minWidth: "100px !important",
          m: "15px 0px",
          height: "59px",
          width: "100%",
          border: "solid #D1D1D6 1px",
          borderRadius: "8px",
        }}
      >
        <input {...configInput} style={{ display: "none" }} />
        <label htmlFor={name} style={{ color: "inherit" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={1}
            sx={{ width: "100%", height: "100%" }}
          >
            <Box display="block" width="85%">
              <Typography
                dir="ltr"
                display="block"
                position="relative"
                top={values[name] ? 25 : 0}
                color="black"
                component="span"
                variant={values[name] ? "subtitle6" : "subtitle5"}
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "wrap",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                }}
              >
                {/* {fileUploaded ? `${fileUploaded?.name}`.slice(-10) + "..." : ""} */}
                {values[name] ? `${values[name]?.name}` : ""}
              </Typography>
              <Typography
                textAlign="start"
                display="block"
                position="relative"
                bottom={values[name] ? 25 : 0}
                color="black"
                component="span"
                variant={values[name] ? "subtitle6" : "subtitle5"}
              >
                {text}
              </Typography>
            </Box>
            <IconButton component="span">
              <FileUploadOutlinedIcon fontSize="medium" />
              {children}
            </IconButton>
          </Box>
        </label>
      </Box>
      <ErrorMessage name={name}>
        {(msg) => (
          <Typography
            variant="body5"
            component="span"
            sx={{
              display: "flex",
              color: "#d84949",
              justifyContent: "left",
              padding: "0px 10px",
            }}
          >
            {msg}
          </Typography>
        )}
      </ErrorMessage>
    </>
  );
};

export default UploadButton;
