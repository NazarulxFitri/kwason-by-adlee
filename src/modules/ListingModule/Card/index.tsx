import { CartIcon, Text } from "@/components";
import { Box } from "@mui/material";
import { Nothing_You_Could_Do } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const fontNothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
});

const CardListing: React.FC<CardListingProps> = ({ item }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <Box
      sx={{ overflow: "hidden", position: "relative" }}
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
        style={{ display: "block", height: "100%", width: "100%" }}
      />
      {showDetail && (
        <Box
          className={`animate__animated animate__fadeInUp`}
          sx={{
            borderTopRightRadius: "16px",
            borderTopLeftRadius: "16px",
            color: "#FFF",
            p: 2,
            position: "absolute",
            bottom: "0",
            background: "rgba(0,0,0,0.6)",
            width: "100%",
          }}
        >
          <Text
            sx={{ fontSize: "24px", fontFamily: `${fontNothingYouCouldDo.style.fontFamily} !important` || "auto" }}
            className={fontNothingYouCouldDo.className}
            text={item.name}
          />
          <Text
            sx={{ fontSize: "16px", fontWeight: "300" }}
            text={`RM ${item.price}`}
          />
          <Box sx={{ display: "flex", mt: 1 }}>
            <Box
              sx={{
                background: "rgba(255,255,255,0.6)",
                p: 1,
                width: "50%",
                mr: 1,
                display: "flex",
                justifyContent: "center",
              }}
              gap={1}
            >
              <Box>
                <CartIcon size={`20px`} />
              </Box>
              <Text
                sx={{ fontSize: "12px", fontWeight: "300", my: "auto" }}
                variant="body1"
                text="Quick Add"
              />
            </Box>
            <Box
              sx={{
                border: "1px solid #FFF",
                p: 1,
                width: "50%",
                ml: 1,
                display: "flex",
                justifyContent: "center",
              }}
              gap={1}
            >
              <Link href={`/detail?id=${item.id}`}>
              <Text
                sx={{ fontSize: "12px", fontWeight: "300", my: "auto" }}
                variant="body1"
                text="More detail"
              />
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CardListing;
