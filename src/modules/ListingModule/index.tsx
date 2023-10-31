import { Text } from "@/components";
import { Box, Grid } from "@mui/material";
import { Nothing_You_Could_Do } from "next/font/google";
import CardListing from "./Card";
import { useGetItemListings } from "@/utils/useGetItemListings";

interface ListingModuleProps {}

const fontNothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
});


const ListingModule: React.FC<ListingModuleProps> = () => {
  const {data: items} = useGetItemListings();

  return (
    <Box mt={8} className={`animate__animated animate__fadeInUp`}>
      <Text
        sx={{ fontSize: "48px", textAlign: "center", fontFamily: `${fontNothingYouCouldDo.style.fontFamily} !important` || "auto"}}
        className={fontNothingYouCouldDo?.className}
        text={`Our Menu`}
      />
      <Text
        sx={{ fontSize: "16px", fontWeight: "300", mx: "auto", maxWidth: "400px", textAlign: "center" }}
        text={`Presenting our own home-made Kwason. Baked with love and sincerety just to deliver the taste of original Kwason to your door. `}
      />

      <Grid container spacing={2} mt={2}>
        {items?.map((i, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={4}>
            <CardListing item={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListingModule;
