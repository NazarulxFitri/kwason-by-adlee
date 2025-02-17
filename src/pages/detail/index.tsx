// @ts-nocheck
import { Text } from "@/components";
import { bannerMessage, cartItems, orderSummary } from "@/state/atom";
import { useGetItemListings } from "@/utils/useGetItemListings";
import { Box, Container, Grid, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";

export interface ExistingCartConfig {
  name: string;
  price: number;
}

const Detail = () => {
  const { query } = useRouter();
  const id = query?.id;
  const { data: items } = useGetItemListings();
  const item = items.find((i) => i.id === id)!;

  const [qty, setQty] = useState(1);
  const [cart, setCart] = useRecoilState(cartItems);
  const [showSummary, setShowSummary] = useRecoilState(orderSummary);
  const [buttonText, setButtonText] = useState("Add to cart");

  function handleClick() {
    const newItem = { name: item?.name, price: item?.price };
    for (let i = 0; i < qty; i++) {
      setCart((existedArray) => [...existedArray, newItem]);
    }
    setShowSummary(true);
    setButtonText("Item added");
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: "flex" }} gap={1} mb={2}>
        <Link href="/">
          <Text fontWeight={300} mt={1} variant="body1" text={`Home`} />
        </Link>
        <Text fontWeight={300} mt={1} variant="body1" text={`>`} />
        <Text
          sx={{ fontWeight: "500" }}
          mt={1}
          variant="body1"
          text={`${item?.name}`}
        />
      </Box>
      <Grid container columnSpacing={4} rowSpacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src={item?.url!}
            alt={item?.alt!}
            width={350}
            height={500}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Box>
            <Text variant="h1" text={`${item?.name}`} />
            <Text
              fontWeight={300}
              mt={1}
              sx={{ fontSize: "24px" }}
              variant="body1"
              text={`RM${item?.price}`}
            />
            <Text
              mt={1}
              fontWeight={300}
              variant="body1"
              text={`${item?.description}`}
            />
          </Box>
          <Grid container mt={4} spacing={2}>
            <Grid item xs={12}>
              <Box>
                <TextField
                  value={qty}
                  type="number"
                  variant="outlined"
                  label="Qty"
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ min: 1, max: 99 }}
                  sx={{
                    width: "80px",
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "pink",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "0",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "pink",
                      },
                  }}
                  onChange={(e) => setQty(+e.currentTarget.value)}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  border: "1px solid pink",
                  cursor: "pointer",
                  my: "auto",
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
                onClick={handleClick}
                onMouseLeave={() => {
                  setButtonText("Add to cart");
                  setQty(1);
                }}
              >
                <Text
                  key={buttonText}
                  className={`animate__animated animate__headShake`}
                  sx={{ fontWeight: "500" }}
                  variant="body1"
                  text={buttonText}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  border: "1px solid beige",
                  cursor: "pointer",
                  my: "auto",
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
                    background: "beige",
                    zIndex: "-1",
                    transition: "transform 0.3s",
                  },
                  "&:hover::after": {
                    transform: "scaleY(1)",
                    boxShadow: "1px 1px 10px pink",
                  },
                }}
              >
                <Link href="/">
                  <Text
                    key={"Go Back to Catalogue"}
                    className={`animate__animated animate__headShake`}
                    sx={{ fontWeight: "500" }}
                    variant="body1"
                    text={"Back to Catalogue"}
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detail;
