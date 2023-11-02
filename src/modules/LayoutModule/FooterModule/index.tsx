import { InstagramIcon, Logo, Text } from "@/components";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";

const FooterModule = () => {
  const theme = useTheme();

  return (
    <Box p={4} mt={4}>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent={"center"} columnGap={4}>
        <Box>
          <Logo />
        </Box>
        <Box display={"flex"} m={{ xs: "32px auto", md: "auto 0" }}>
          <Box mr={1}>
            <InstagramIcon />
          </Box>
          <Box>
            <Link href="/#todo">
              <Text fontWeight={300} variant="body1" text={`@kwason-by-adle`} />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mt:2 }}>
        <Text
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300" }}
          text="Copyright © 2023 Kwason By Adlee . All rights reserved"
        />
      </Box>
    </Box>
  );
};

export default FooterModule;
