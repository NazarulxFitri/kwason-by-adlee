import { Text } from "@/components";
import { cartItems } from "@/state/atom";
import { useGetItemListings } from "@/utils/useGetItemListings";
import { Box, Container, Grid, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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

  function handleClick() {
    const newItem = { name: item?.name, price: item?.price };
    // @ts-ignore
    setCart(existedArray => [...existedArray, newItem]);
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
          <Box mt={4} display={"flex"} columnGap={2}>
            <TextField
              value={qty}
              sx={{
                width: "80px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D9D9D9",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0",
                },
              }}
              type="number"
              variant="outlined"
              label="Qty"
              InputLabelProps={{ shrink: true }}
              InputProps={{ inputProps: { min: 1, max: 99 } }}
              onChange={(e) => setQty(+e.currentTarget.value)}
            />
            <Box
              sx={{
                border: "1px solid #D9D9D9",
                cursor: "pointer",
                my: "auto",
                textAlign: "center",
                py: 2,
                width: "100%",
              }}
              onClick={handleClick}
            >
              <Text variant="body1" text={`Add to cart`} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detail;
