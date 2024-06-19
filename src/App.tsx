import { useEffect, useState } from "react";
import "./App.css";
import { CountryType } from "./types";
import { getCountries } from "./Functions/getCountries";
import { Grid } from "@mui/material";
import Countries from "./Components/Countries";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();

      if (data) {
        setCountries(data);
      }
    };

    void fetchData();
  }, []);

  return (
    <Grid container>
      <Countries countries={countries} />
    </Grid>
  );
};

export default App;
