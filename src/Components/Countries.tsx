import { Grid, Typography } from "@mui/material";
import { CountryType } from "../types";

interface Props {
  countries: CountryType[];
  onCountry: (code: string) => void;
}

const Countries: React.FC<Props> = ({ countries, onCountry }) => {
  return (
    <Grid container direction="column">
      {countries.map((country) => (
        <Grid
          item
          key={country.alpha3Code}
          onClick={() => onCountry(country.alpha3Code)}
        >
          <Typography variant="h4"></Typography>
          {country.name}
        </Grid>
      ))}
    </Grid>
  );
};

export default Countries;
