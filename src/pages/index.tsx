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
      alt: "Kwason By Adlee",
    },
    {
      url: `/media/banner-2.jpeg`,
      alt: "Kwason By Adlee",
    },
    {
      url: `/media/banner-3.jpeg`,
      alt: "Kwason By Adlee",
    },
    {
      url: `/media/banner-4.jpeg`,
      alt: "Kwason By Adlee",
    },
    {
      url: `/media/banner-5.jpeg`,
      alt: "Kwason By Adlee",
    },
    {
      url: `/media/banner-6.jpeg`,
      alt: "Kwason By Adlee",
    },
  ];
  return (
    <Box>
      <Box>
        <Swiper
          slidesPerView={isMobile ? 1 : isTablet ? 3 : 4}
          spaceBetween={2}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <Grid container>
            {bannerItems?.map((i, idx) => (
              <SwiperSlide key={idx}>
                <Grid item>
                  <Image
                    src={i.url}
                    alt={i.alt}
                    width={350}
                    height={500}
                    style={{ display: "block", width: "100%", height: "100%" }}
                  />
                </Grid>
              </SwiperSlide>
            ))}
          </Grid>
        </Swiper>
      </Box>
      <Container>
        <ListingModule />
      </Container>
    </Box>
  );
}
