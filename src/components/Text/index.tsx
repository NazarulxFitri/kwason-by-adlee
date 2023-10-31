import { Typography, TypographyProps } from "@mui/material";
import { Poppins } from "next/font/google";

interface TextProps extends TypographyProps {
  text: string;
}

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "700"] });
const Text: React.FC<TextProps> = ({ text, ...props }) => {
  return (
    <Typography
      className={poppins.className}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  );
};

export default Text;
