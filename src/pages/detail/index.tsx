import { useGetItemListings } from "@/utils/useGetItemListings";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const Detail = () => {
    const {query} = useRouter()
    const id = query?.id;
    const {data: items} = useGetItemListings();

    console.log("xxx id", id)

    return <Box></Box>
}

export default Detail;