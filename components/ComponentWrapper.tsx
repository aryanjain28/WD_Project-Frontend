import { Box, Typography } from "@mui/material";
import { TopBar } from "./TopBar";

const ComponentWrapper = (props: any) => {
  const { title, component } = props;
  return (
    <>
      <TopBar />
      {/* <Typography
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          fontSize: 30,
          letterSpacing: 4,
          fontWeight: "light",
          textShadow: 3,
          mt: 3,
        }}
      >
        {"title"}
      </Typography> */}
      <Box sx={{ m: 5 }}>{component}</Box>
    </>
  );
};

export default ComponentWrapper;
