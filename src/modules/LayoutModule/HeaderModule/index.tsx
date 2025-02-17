import { InstagramIcon, Logo, Text } from "@/components";
import { Box } from "@mui/material";
import Link from "next/link";

const HeaderModule = () => {

  return (
    <Box pt={4} mt={4}>
      <Box display="flex" flexDirection={'column'} justifyContent={"center"} columnGap={4}>
        <Box sx={{ width: "fit-content", mx: "auto"}}>
          <Logo />
        </Box>
        <Box display={"flex"} m={{ xs: "32px auto 0", md: "auto" }}>
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
    </Box>
  );
};

export default HeaderModule;
