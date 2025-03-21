// @ts-nocheck
import { CloseIcon, MinusIcon, Text } from "@/components";
import { cartItems } from "@/state/atom";
import { Box, TextField } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface CartModuleProps {
  setShowCart: (value: boolean) => void;
}

const CartModule: React.FC<CartModuleProps> = ({ setShowCart }) => {
  const [cart, setCart] = useRecoilState(cartItems);
  const [totalCustomerPay, setTotalCustomerPay] = useState(0);

  let totalAmount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalAmount += cart?.[i]?.price;
  }

  function handleRemove(id: number) {
    let temp = [];
    for (let i = 0; i < cart.length; i++) {
      if (i !== id) {
        temp.push(cart[i]);
      }
    }
    setCart(temp);
  }

  const itemListings = cart
    ?.map((i, idx) => {
      return `${idx + 1}) ${i.name}`;
    })
    .join("%0a")
    .replaceAll(" ", "%20");

  return (
    <Box
      className={`animate__animated animate__fadeInRight`}
      sx={{
        background: "#FFF",
        boxShadow: "1px 1px 10px #D9D9D9",
        p: 4,
        position: "fixed",
        height: "100%",
        right: "0",
        top: "0",
        width: { xs: "100%", md: "440px" },
        overflowY: "auto",
        zIndex: 1,
      }}
    >
      <Box display="flex" justifyContent={"space-between"}>
        <Text variant="body1" text="My Cart" />
        <Box
          my={"auto"}
          sx={{ cursor: "pointer" }}
          onClick={() => setShowCart(false)}
        >
          <CloseIcon size={"24px"} color={"#B33A3A"} />
        </Box>
      </Box>
      <Box mt={2}>
        {cart?.map((i, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #D9D9D9",
                py: 2,
              }}
            >
              <Box display="flex">
                <Box
                  sx={{ my: "auto", mr: 1, cursor: "pointer" }}
                  onClick={() => handleRemove(idx)}
                >
                  <MinusIcon size={"16px"} color={"#B33A3A"} />
                </Box>
                <Text
                  sx={{ fontWeight: "300" }}
                  variant="body1"
                  text={i.name}
                />
              </Box>
              <Box display="flex">
                <Text
                  sx={{ fontWeight: "300" }}
                  variant="body1"
                  text={`RM${i.price}`}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box mt={4}>
        <Box textAlign="right">
          <Text
            variant="body1"
            sx={{ fontWeight: "300", fontSize: "20px" }}
            text={`Subtotal : <b>RM${totalAmount.toFixed(2)}</b>`}
          />
        </Box>
        <Box>

          <Box mt={4} sx={{ borderTop: "1px solid pink", pt: 4 }}>
            <TextField
              InputLabelProps={{ shrink: true }}
              type="number"
              label="Total Customer Pay"
              variant="outlined"
              onChange={(e) => setTotalCustomerPay(e.target.value)}
              fullWidth
            />
            <Box textAlign="right" mt={2}>
              <Text
                variant="body1"
                sx={{ fontWeight: "300", fontSize: "20px" }}
                text={`Balance : <b>RM${(totalCustomerPay - totalAmount).toFixed(2) }</b>`}
              />
            </Box>
          </Box>
        
          <Box
            mt={4}
            sx={{
              border: "1px solid pink",
              cursor: "pointer",
              textAlign: "center",
              py: 2,
              position: "relative",
              width: "100%",
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
                height: "100%",
                transform: "scaleY(0)",
                transformOrigin: "bottom center",
                background: "pink",
                zIndex: "-1",
                transition: "transform 0.3s",
              },
              "&:hover::after": {
                transform: "scaleY(1)",
                boxShadow: "1px 1px 10px pink",
              },
            }}
          >
            <Link
              href={`https://wa.me/+601156271776?text=Hi%20theozziecookies,%20here%20is%20my%20order%0a%0a${itemListings}`}
            >
              <Text
                variant="body1"
                sx={{ fontWeight: "300", textAlign: "center" }}
                text={`Proceed`}
              />
            </Link>
          </Box>
          <Text
            mt={1}
            variant="body1"
            sx={{ fontWeight: "300", color: "#666", fontSize: "12px" }}
            text={`Note : For Online orders, above total is not including Delivery charge yet. Delivery charge will be determined based on distance between RM5 - RM10`}
          />
          <Text
            mt={1}
            variant="body1"
            sx={{ fontWeight: "300", color: "#666", fontSize: "12px" }}
            text={`By clicking proceed button, you will be navigated to Whatsapp for order confirmation`}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CartModule;
