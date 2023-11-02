import { Logo } from "@/components";
import { Box } from "@mui/material";

const HeaderModule = () => {
  return (
    <Box
      sx={{
        display: "flex",
        py: 2,
        px: { xs: 2, md: 4 },
        justifyContent: "center",
      }}
    >
      <Logo />
    </Box>
  );
};

export default HeaderModule;
