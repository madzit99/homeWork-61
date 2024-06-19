import { useEffect, useState } from "react";
import "./App.css";
import { CountryType, countryInfo } from "./types";
import { getCountries } from "./Functions/getCountries";
import { Grid } from "@mui/material";
import Countries from "./Components/Countries";
import Country from "./Components/Country";
import { getCountry } from "./Functions/getCountry";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<countryInfo | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();

      if (data) {
        setCountries(data);
      }
    };

    void fetchData();
  }, []);

  const onCountry = async (code: string) => {
    const data = await getCountry(code);
    if (data) {
      setSelectedCountry(data);
    }
  };

  return (
    <Grid container>
      <Grid item xs sx={{borderRight:"2px solid black", marginRight: "50px" }}>
        <Countries countries={countries} onCountry={onCountry} />
      </Grid>
      <Grid item xs>
        <Country country={selectedCountry} />
      </Grid>
    </Grid>
  );
};

export default App;
