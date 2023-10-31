import { Box } from "@mui/material";
import { Text } from "..";
import { Nothing_You_Could_Do } from "next/font/google";

interface LogoProps {
  pos: string;
}

const fontNothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo: React.FC<LogoProps> = ({ pos }) => {
  return (
    <Box
    className={`animate__animated animate__fadeInUp`}
      sx={{
        height: "fit-content",
        mx: pos === "center" ? "auto" : "inherit",
        width: "fit-content",
      }}
    >
      <Text
        sx={{ fontSize: "48px", fontFamily: `${fontNothingYouCouldDo.style.fontFamily} !important` || "auto" }}
        className={fontNothingYouCouldDo.className}
        text={`Kwason`}
      />
      <Text
        sx={{ fontSize: "16px", mt: -2 }}
        text={`By Adlee ©`}
      />
    </Box>
  );
};

export default Logo;
