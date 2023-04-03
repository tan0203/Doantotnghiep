import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        sx={{ boxShadow: 4 }}
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Bluer
        </Typography>
      </Box>

      <Box>
        
        <Box
          sx={{ boxShadow: 8}}
          // boxShadow="inset 5px 5px 5px 5px rgba(0, 0, 0, 0.5)"
          width={isNonMobileScreens ? "60%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="3px"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Bluer
        </Typography>
        <box>
        {/* <Box
            sx={{ boxShadow: 8, display: "flex" }}
            // boxShadow="inset 5px 5px 5px 5px rgba(0, 0, 0, 0.5)"
            // width={isNonMobileScreens ? "60%" : "93%"}
            p="2rem"
            m="2rem auto"
            borderRadius="3px"
            backgroundColor={theme.palette.background.alt}
          >
            <Form />
          </Box> */}
        </box>
          
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
