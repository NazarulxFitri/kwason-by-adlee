import { Box } from "@mui/material";
import { Text } from "..";
import { Nothing_You_Could_Do } from "next/font/google";

interface LogoProps {
}

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
          fontSize: "48px",
          fontFamily:
            `${nothingYouCouldDo.style.fontFamily} !important` || "auto",
        }}
        className={nothingYouCouldDo.className}
        text={`Kwason`}
      />
      <Text
        sx={{ fontSize: "16px", fontWeight: "300", mt: -2 }}
        text={`By Adlee ©`}
      />
    </Box>
  );
};

export default Logo;
