// @ts-nocheck
import { CloseIcon, MinusIcon, Text } from "@/components";
import { cartItems } from "@/state/atom";
import { Box } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

interface CartModuleProps {
  setShowCart: (value: boolean) => void;
}

const CartModule: React.FC<CartModuleProps> = ({ setShowCart }) => {
  const [cart, setCart] = useRecoilState(cartItems);

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
      <Box my={4}>
        <Box textAlign="right">
          <Text
            variant="body1"
            sx={{ fontWeight: "300", fontSize: "20px" }}
            text={`Subtotal : <b>RM${totalAmount.toFixed(2)}</b>`}
          />
        </Box>
        <Box
          mt={4}
          sx={{
            border: "1px solid #bf9b30",
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
              background: "#bf9b30",
              zIndex: "-1",
              transition: "transform 0.3s",
            },
            "&:hover::after": {
              transform: "scaleY(1)",
              boxShadow: "1px 1px 10px #bf9b30",
            },
          }}
        >
          <Link
            href={`https://wa.me/176324921?text=Hi%20Kwason-By-Adlee,%20here%20is%20my%20order%0a%0a${itemListings}`}
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
          sx={{ fontWeight: "300", fontSize: "12px" }}
          text={`By clicking proceed button, you will be navigated to Whatsapp for order confirmation`}
        />
      </Box>
    </Box>
  );
};

export default CartModule;
