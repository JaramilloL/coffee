import { Box, Typography, Button } from "@mui/material";
import Card from "./Card";

const Content = () => {
  return (
    <Box bgcolor="#1B1D1F" width="85%" m="0 auto" borderRadius="30px" mt={15}>
      <Box
        width="50%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        m="0 auto"
      >
        <Typography
          variant="h4"
          color="#FEF7EE"
          fontFamily="sans-serif"
          textAlign="center"
          m={3}
        >
          <strong> Our Collection</strong>
        </Typography>
        <Typography variant="body2" color="#6F757C" textAlign="center" m={1}>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </Typography>
        <Box display="flex" justifyContent="space-evenly" sx={{ mt: "5%" }}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#6F757C", borderRadius: 3, fontSize: 10 }}
          >
            All products
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#1B1D1F", borderRadius: 3, fontSize: 10 }}
          >
            Available Now
          </Button>
        </Box>
      </Box>
      <Box width="90%" m="0 auto">
        <Card />
      </Box>
    </Box>
  );
};

export default Content;
