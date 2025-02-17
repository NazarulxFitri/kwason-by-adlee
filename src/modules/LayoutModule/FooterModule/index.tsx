import { InstagramIcon, Logo, Text } from "@/components";
import { Box } from "@mui/material";
import Link from "next/link";

const FooterModule = () => {

  return (
    <Box p={4} mt={4}>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent={"center"} columnGap={4}>
        <Box sx={{ width: "fit-content", mx: {xs: "auto",md :"unset"}}}>
          <Logo />
        </Box>
        <Box display={"flex"} m={{ xs: "32px auto", md: "auto 0" }}>
          <Box mr={1}>
            <InstagramIcon />
          </Box>
          <Box>
            <Link href="/#todo">
              <Text fontWeight={300} variant="body1" text={`@theozziecookies`} />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mt:2 }}>
        <Text
          variant="body1"
          sx={{ fontSize: "12px", fontWeight: "300" }}
          text="Copyright © 2024 theozziecookies . All rights reserved"
        />
      </Box>
    </Box>
  );
};

export default FooterModule;
