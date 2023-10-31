import { Box } from "@mui/material";
import { ReactNode } from "react";
import HeaderModule from "./HeaderModule";
import FooterModule from "./FooterModule";

interface LayoutModuleProps {
  children: ReactNode;
}



const LayoutModule: React.FC<LayoutModuleProps> = ({ children }) => {
  return (
    <Box>
      <HeaderModule />
      {children}
      <FooterModule />
    </Box>
  );
};

export default LayoutModule;
