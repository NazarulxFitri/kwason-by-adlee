import { Box } from "@mui/material";
import { Text } from "..";
import { Nothing_You_Could_Do } from "next/font/google";

interface LogoProps {}

const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo: React.FC<LogoProps> = () => {
  return (
    <Box
      className={`animate__animated animate__fadeInUp`}
      sx={{
        height: "fit-content",
        width: "fit-content",
      }}
    >
      <Text
        sx={{
          color: "pink",
          fontSize: "48px",
          fontFamily:
            `${nothingYouCouldDo.style.fontFamily} !important` || "auto",
        }}
        className={nothingYouCouldDo.className}
        text={`Ozzie Cookies`}
      />
      <Text
        sx={{ fontSize: "16px", fontWeight: "300", mt: -2 }}
        text={`By Zati`}
      />
    </Box>
  );
};

export default Logo;
