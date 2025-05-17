import { Text } from "@/components";
import { Box, Grid } from "@mui/material";
import { Nothing_You_Could_Do } from "next/font/google";
import CardListing from "./Card";
import { useGetItemListings } from "@/utils/useGetItemListings";

interface ListingModuleProps {}

const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: ["400"],
});

const ListingModule: React.FC<ListingModuleProps> = () => {
  const { data: items } = useGetItemListings();

  return (
    <Box mt={8} className={`animate__animated animate__fadeInUp`}>
      <Grid container spacing={2} mt={2}>
        {items?.map((i, idx) => (
          <Grid key={idx} item xs={6} sm={6} md={4}>
            <CardListing item={i} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListingModule;
