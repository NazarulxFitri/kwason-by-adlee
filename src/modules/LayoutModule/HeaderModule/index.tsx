import { CartIcon, Logo, Text } from "@/components";
import { Box } from "@mui/material";

const HeaderModule = () => {
  return (
    <Box sx={{ display: "flex", py: 2, px: { xs: 2, md: 4 } }}>
      <Logo pos="center" />
      <Box sx={{ height: "fit-content", my: "auto", mr: 2 }}>
        <Text
          sx={{ fontWeight: "300" }}
          text="Contact Us"
        />
      </Box>
      <Box sx={{ height: "fit-content", my: "auto" }}>
        <CartIcon size="24px" />
      </Box>
    </Box>
  );
};

export default HeaderModule;
