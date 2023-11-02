// @ts-nocheck
import { CloseIcon, Text } from "@/components";
import { cartItems } from "@/state/atom";
import { Box } from "@mui/material";
import { useRecoilValue } from "recoil";

interface CartModuleProps {
  setShowCart: (value: boolean) => void;
}

const CartModule: React.FC<CartModuleProps> = ({ setShowCart }) => {
  const cart = useRecoilValue(cartItems)

  return (
    <Box
      className={`animate__animated animate__fadeInRight`}
      sx={{
        background: "#FFF",
        boxShadow: "1px 1px 10px #D9D9D9",
        p: 4,
        position: "absolute",
        height: "100%",
        right: "0",
        top: "0",
        width: { xs: "100%", md: "400px" },
        zIndex: 1,
      }}
    >
      <Box display="flex" justifyContent={"space-between"}>
        <Text variant="h2" text="My Cart" />
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
            <Box>
              <Text sx={{ fontWeight: "300" }} variant="body1" text={i.name} />
            </Box>
            <Box>
              <Text
                sx={{ fontWeight: "300" }}
                variant="body1"
                text={`RM${i.price}`}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CartModule;
