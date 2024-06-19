import { Grid, Typography } from "@mui/material";
import { CountryType } from "../types";

interface Props {
  countries: CountryType[];
  onCountry: (code: string) => void;
}

const Countries: React.FC<Props> = ({ countries, onCountry }) => {
  return (
    <Grid
      container
      direction="row"
      sx={{
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      {countries.map((country) => (
        <Grid
          item
          key={country.alpha3Code}
          onClick={() => onCountry(country.alpha3Code)}
          sx={{paddingRight: 50}}
        >
          <Typography variant="h3">{country.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Countries;
