import { Box } from "@mui/material";
import Image from "next/image";
import ProfileImage from "../../public/images/register/Profile.svg";

const Profile = () => {
  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Box
        display="flex"
        sx={{
          ml: { sm: "5%" },
          alignItems: "center",
          justifyContent: "center"
        }}
      >
          <Image src={ProfileImage} alt="Profile" />
      </Box>
    </Box>
  );
};

export default Profile;
