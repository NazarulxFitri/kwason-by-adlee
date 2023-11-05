// @ts-nocheck
import { Box, Container } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import HeaderModule from "./HeaderModule";
import FooterModule from "./FooterModule";
import CartModule from "./CartModule";
import { CartIcon, Text } from "@/components";
import { useRecoilState, useRecoilValue } from "recoil";
import { bannerMessage, cartItems, orderSummary } from "@/state/atom";

interface LayoutModuleProps {
  children: ReactNode;
}

const LayoutModule: React.FC<LayoutModuleProps> = ({ children }) => {
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [showSummary, setShowSummary] = useRecoilState(orderSummary)
  const [banner, setBanner] = useRecoilState(bannerMessage);
  const cart = useRecoilValue(cartItems);

  useEffect(() => {
    setCartTotal(cart.length);
  }, [cart]);

  return (
    <Box position={"relative"}>
      <HeaderModule />
      {children}
      <Box
        sx={{
          cursor: "pointer",
          position: "fixed",
          top: { xs: "44px" },
          right: { xs: "16px", md: "40px" },
          display: "flex",
          zIndex: 0,
          transition: "margin .5s",
          "&:hover": {
            mt: -0.5,
          },
        }}
        onClick={() => setShowSummary(true)}
      >
        {cartTotal > 0 && (
          <Box
            key={cartTotal}
            className={`animate__animated animate__bounceIn`}
          >
            <Text
              variant="body1"
              sx={{
                color: "#bf9b30",
                fontWeight: "500",
                fontSize: "16px",
                textAlign: "right",
              }}
              text={`${cartTotal}`}
            />
          </Box>
        )}
        <Box ml={0.5}>
          <CartIcon size={"24px"} />
        </Box>
      </Box>
      {showSummary && <CartModule setShowCart={setShowSummary} />}
      <FooterModule />
    </Box>
  );
};

export default LayoutModule;
