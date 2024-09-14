import {
  CardContent,
  CardMedia,
  Typography,
  Card as Cr,
  Button,
  Box,
  Grid2,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useQuery } from "@tanstack/react-query";
import { getCoffies } from "../api/rest";

const Card = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coffee"],
    queryFn: getCoffies,
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;

  console.log(data);
  return (
    <Grid2 container spacing={3} justifyContent="center">
      {data &&
        data.map((coffe) => (
          <Cr sx={{ maxWidth: 240, mt: 5, bgcolor: "#1B1D1F" }} key={coffe.id}>
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="170"
                image={coffe.image}
                alt="Paella dish"
                sx={{
                  borderRadius: 3,
                }}
              />
              {
                coffe.popular ?  (<Avatar
                sx={{
                  bgcolor: '#F6C768',
                  position: "absolute",
                  top: 10, // Ajusta la posición vertical
                  left: 10, // Ajusta la posición horizontal
                  width: 50, // Tamaño del avatar
                  height: 10, // Tamaño del avatar
                  fontSize: '10px', // Tamaño del avatar
                  p: 1,
                  color: '#111',
                  borderRadius: '30%'
                }}
                aria-label="recipe"
              >
                <strong>Popular</strong>
              </Avatar>) : ''
              }
              
            </Box>

            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2" sx={{ color: "#FEF7EE" }}>
                  {coffe.name}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#BEE3CC", color: "#111315" }}
                  size='small'
                >
                  {coffe.price}
                </Button>
              </Box>
              <Box
                display="flex"
                justifyContent="start"
                alignContent="center"
                alignItems="center"
              >
                <StarIcon
                  sx={{ color: coffe.rating ? "#F6C768" : "#FEF7EE" }}
                />
                {coffe.rating ? (
                  <Typography variant="body2" sx={{ color: "#FEF7EE" }}>
                    {coffe.rating}{" "}
                    <li style={{ display: "inline", color: "#6F757C" }}>
                      ({coffe.votes + " votes"})
                    </li>
                  </Typography>
                ) : (
                  <Typography variant="body2" sx={{ color: "#6F757C" }}>
                    No ratings
                  </Typography>
                )}

                <Box display="flex" justifyContent="end">
                  {coffe.available ? (
                    ""
                  ) : (
                    <Typography variant="body2" color="error" ml={3}>
                      Sold out
                    </Typography>
                  )}
                </Box>
              </Box>
            </CardContent>
          </Cr>
        ))}
    </Grid2>
  );
};

export default Card;
