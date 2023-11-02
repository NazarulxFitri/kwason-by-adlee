import { Typography, TypographyProps } from "@mui/material";
import { Nothing_You_Could_Do, Poppins } from "next/font/google";

interface TextProps extends TypographyProps {
  text: string;
}

const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
});
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "700"] });
const Text: React.FC<TextProps> = ({ text, ...props }) => {
  return (
    <Typography
      sx={{
        "&.MuiTypography-h1": {
          fontFamily:
            `${nothingYouCouldDo.style.fontFamily} !important` || "auto",
          fontSize: "32px",
          fontWeight: "500",
        },
        "&.MuiTypography-h2": {
          fontSize: "24px",
          fontWeight: "500",
        },
        "&.MuiTypography-subtitle1": {
          fontSize: "20px",
        },
        "&.MuiTypography-body1": {
          fontSize: "16px",
          fontWeight: "300",
        },
      }}
      className={poppins.className}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  );
};

export default Text;
