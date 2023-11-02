import { Box } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import HeaderModule from "./HeaderModule";
import FooterModule from "./FooterModule";
import CartModule from "./CartModule";
import { CartIcon, Text } from "@/components";
import { useRecoilValue } from "recoil";
import { cartItems } from "@/state/atom";

interface LayoutModuleProps {
  children: ReactNode;
}

const LayoutModule: React.FC<LayoutModuleProps> = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const cart = useRecoilValue(cartItems);

  useEffect(() => {
    setCartTotal(cart.length)
  }, [cart]);

  return (
    <Box position={"relative"}>
      <HeaderModule />
      {children}
      <Box
        sx={{
          cursor: "pointer",
          position: "fixed",
          top: { xs: "32px" },
          right: { xs: "16px", md: "40px" },
          zIndex: 0,
        }}
        onClick={() => setShowCart(true)}
      >
        {cartTotal > 0 && <Text
          variant="body1"
          sx={{ color: "#B33A3A", fontSize: "12px", textAlign: "right" }}
          text={`${cartTotal}`}
        />}
        
        <Box sx={{position: "absolute", right: 0, top: "14px"}}>
          <CartIcon size={"28px"} />
        </Box>
      </Box>
      {showCart && <CartModule {...{ setShowCart }} />}
      <FooterModule />
    </Box>
  );
};

export default LayoutModule;
