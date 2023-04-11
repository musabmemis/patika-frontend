import Card from "../components/Card";
import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api";

function Products() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: fetchProducts,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default Products;
