import { Grid } from "@mui/material";
import { CountryType } from "../types";

interface Props {
  countries: CountryType[];
}

const Countries: React.FC<Props> = ({ countries }) => {
  return (
    <Grid container direction="column">
      {countries.map((country) => (
        <Grid item>{country.name}</Grid>
      ))}
    </Grid>
  );
};

export default Countries;
