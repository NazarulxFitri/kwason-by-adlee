import { Box, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ListingModule from "@/modules/ListingModule";

export default function Home() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const bannerItems = [
    {
      url: `/media/banner-1.jpeg`,
      alt: "theozziecookies",
    },
    {
      url: `/media/banner-2.jpeg`,
      alt: "theozziecookies",
    },
    {
      url: `/media/banner-3.jpeg`,
      alt: "theozziecookies",
    },
    {
      url: `/media/banner-4.jpeg`,
      alt: "theozziecookies",
    },
    {
      url: `/media/banner-5.jpeg`,
      alt: "theozziecookies",
    },
    {
      url: `/media/banner-6.jpeg`,
      alt: "theozziecookies",
    },
  ];
  return (
    <Box>
      <Container>
        <ListingModule />
      </Container>
    </Box>
  );
}
