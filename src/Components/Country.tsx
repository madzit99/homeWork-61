import { Grid, List, ListItem, Typography } from "@mui/material";
import { countryInfo } from "../types";

interface Props {
  country: countryInfo | null;
}

const Country: React.FC<Props> = ({ country }) => {
  return (
    (country && (
      <>
        <Grid container direction="column" gap="30px">
          <Typography variant="h2">{country?.name}</Typography>
          <Grid container maxWidth="xs">
            <img
              src={country?.flag}
              style={{ width: "200px" }}
              alt={country?.flag}
            ></img>
          </Grid>
          <Typography variant="h3">Столица: {country?.capital}</Typography>
          <Typography variant="h4">Население: {country?.population}</Typography>

          <Typography variant="h4">Соседи:</Typography>
          <List>
            {country?.borders.map((neighbour) => (
              <ListItem key={Math.random()}>{neighbour}.</ListItem>
            ))}
          </List>
        </Grid>
      </>
    )) || <Typography variant="h3">Выберите страну из списка</Typography>
  );
};

export default Country;
