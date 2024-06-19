import { Typography } from "@mui/material";
import { countryInfo } from "../types";

interface Props {
    country: countryInfo | null;
}

const Country:React.FC<Props> = ({country}) => {
  return(
    <>
    <Typography variant='h1'>{country?.name}</Typography>
    </>
  )
};

export default Country;