// @ts-nocheck
import { Text } from "@/components";
import { bannerMessage, cartItems, orderSummary } from "@/state/atom";
import { Box, Grid } from "@mui/material";
import { Nothing_You_Could_Do } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";

interface CardListingProps {
  item: {
    id: string;
    url: string;
    alt: string;
    name: string;
    description: string;
    price: number;
  };
}

const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
});

const CardListing: React.FC<CardListingProps> = ({ item }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [cart, setCart] = useRecoilState(cartItems);
  const [banner, setBanner] = useRecoilState(bannerMessage);
  const [showSummary, setShowSummary] = useRecoilState(orderSummary);

  function handleClick() {
    const newItem = { name: item?.name, price: item?.price };
    setCart((existedArray) => [...existedArray, newItem]);
    setBanner({
      message: `You have successfully added <b>${item?.name}</b> into your cart`,
    });
    setShowSummary(true);
  }

  return (
    <Box
      sx={{
        overflow: "hidden",
        position: "relative",
        transition: "margin .5s",
        "&:hover": {
          mt: -1,
        },
      }}
      onMouseOver={() => {
        setShowDetail(true);
      }}
      onMouseLeave={() => {
        setShowDetail(false);
      }}
    >
      <Image
        src={item.url}
        alt={item.alt}
        width={350}
        height={500}
        style={{
          display: "block",
          height: "100%",
          width: "100%",
        }}
      />
      {showDetail && (
        <Box
          className={`animate__animated animate__fadeInUp`}
          sx={{
            borderTopRightRadius: "16px",
            borderTopLeftRadius: "16px",
            color: "#FFF",
            cursor: "pointer",
            p: 2,
            position: "absolute",
            bottom: "0",
            background: "rgba(0,0,0,0.6)",
            width: "100%",
          }}
        >
          <Text
            sx={{
              fontSize: "24px",
              fontFamily:
                `${nothingYouCouldDo.style.fontFamily} !important` || "auto",
            }}
            className={nothingYouCouldDo.className}
            text={item.name}
          />
          <Text
            sx={{ fontSize: "16px", fontWeight: "300" }}
            text={`RM ${item.price}`}
          />
          <Grid container mt={1} columnSpacing={1}>
            <Grid item xs={6}>
              <Box
                onClick={handleClick}
                sx={{
                  border: "1px solid #bf9b30",
                  color: "#bf9b30",
                  cursor: "pointer",
                  my: "auto",
                  textAlign: "center",
                  py: 2,
                  position: "relative",
                  width: "100%",
                  "&:hover": {
                    color: "#333 !important",
                  }, 
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
                <Text
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    my: "auto",
                  }}
                  variant="body1"
                  text="Quick add"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  border: "1px solid #FFF",
                  cursor: "pointer",
                  my: "auto",
                  textAlign: "center",
                  py: 2,
                  position: "relative",
                  width: "100%",
                  "&:hover": {
                    color: "#333",
                  }, 
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    transform: "scaleY(0)",
                    transformOrigin: "bottom center",
                    background: "#FFF",
                    zIndex: "-1",
                    transition: "transform 0.3s",
                  },
                  "&:hover::after": {
                    color: "#333",
                    transform: "scaleY(1)",
                    boxShadow: "1px 1px 10px #FFF",
                  },
                }}
                gap={1}
              >
                <Link
                  style={{ width: "100%", textAlign: "center" }}
                  href={`/detail?id=${item.id}`}
                >
                  <Text
                    sx={{ fontSize: "14px", fontWeight: "500", my: "auto" }}
                    variant="body1"
                    text="More detail"
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default CardListing;
