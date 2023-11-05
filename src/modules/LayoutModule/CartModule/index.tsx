// @ts-nocheck
import { CloseIcon, MinusIcon, Text } from "@/components";
import { cartItems } from "@/state/atom";
import { Box } from "@mui/material";
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
        {cart?.map((i, idx) => (
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
              <Text sx={{ fontWeight: "300" }} variant="body1" text={i.name} />
            </Box>
            <Box display="flex">
              <Box sx={{ my: "auto", mr: 1, cursor: "pointer" }}>
                <Text
                  sx={{ fontWeight: "300" }}
                  variant="body1"
                  text={`${i.qty} x `}
                />
              </Box>
              <Text
                sx={{ fontWeight: "300" }}
                variant="body1"
                text={`RM${i.price}`}
              />
            </Box>
          </Box>
        ))}
      </Box>
      <Box mt={4}>
        <Box textAlign="right">
          <Text
            variant="body1"
            sx={{ fontWeight: "300", fontSize: "20px" }}
            text={`Subtotal : <b>RM${totalAmount}</b>`}
          />
        </Box>
        <Box mt={4} sx={{ border: "1px solid #D8D8D8", p: 2 }}>
          <Text
            variant="body1"
            sx={{ fontWeight: "300", textAlign: "center" }}
            text={`Proceed`}
          />
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
