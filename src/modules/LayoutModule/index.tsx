// @ts-nocheck
import { Box, Container } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import HeaderModule from "./HeaderModule";
import FooterModule from "./FooterModule";
import CartModule from "./CartModule";
import { CartIcon, Text } from "@/components";
import { useRecoilState, useRecoilValue } from "recoil";
import { bannerMessage, cartItems } from "@/state/atom";

interface LayoutModuleProps {
  children: ReactNode;
}

const LayoutModule: React.FC<LayoutModuleProps> = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const [banner, setBanner] = useRecoilState(bannerMessage);
  const cart = useRecoilValue(cartItems);

  useEffect(() => {
    setCartTotal(cart.length);
  }, [cart]);

  return (
    <Box position={"relative"}>
      <HeaderModule />
      {/* <Box
        sx={{
          color: "#FFF",
          position: "fixed",
          p: 2,
          zIndex: 2,
          background: "rgba(0,0,0, 0.8)",
          display: !!banner.message ? "block" : "none",
        }}
      >
        <Text variant="body1" text={`${banner.message}`} />
      </Box> */}
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
        onClick={() => setShowCart(true)}
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
      {showCart && <CartModule {...{ setShowCart }} />}
      <FooterModule />
    </Box>
  );
};

export default LayoutModule;
