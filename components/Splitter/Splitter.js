import { Grid } from "@mui/material";
import Display from "../Display/Display";
import { useState } from "react";
import InputButtons from "../InputButtons/InputButtons";
import InputFields from "../InputFields/InputFields";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

export default function Splitter() {
  
  const [selectedTip, setSelectedTip] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfpeople] = useState(1);



  let amount = customTip === 0 ? Number((bill * selectedTip) / 100 / numberOfPeople) : Number((bill * customTip) / 100 / numberOfPeople)

  let total = bill / numberOfPeople + amount;

  return (
    <Grid
      container
      sx={{
        background: "#ffffff",
        padding: 8,
        borderRadius: "30px",
      }}
    >
      <Grid item xs={6} sx={{ textAlign: "start" }}>
        <InputFields
          title="Bill"
          handleChange={(e) => {
            setBill(e.target.value);
            console.log(bill);
          }}
          name={<EuroOutlinedIcon sx={{ color: "#7f9c9f" }} />}
        />

        <InputButtons
          selectedTip={selectedTip}
          setSelectedTip={setSelectedTip}
          customTip={customTip}
          handleCustomTip={(e) => setCustomTip(e.target.value)}
        />

        <InputFields
          handleChange={(e) => {
            setNumberOfpeople(e.target.value);
            console.log(numberOfPeople);
          }}
          title="Number of people"
          name={<PersonOutlinedIcon sx={{ color: "#7f9c9f" }} />}
        />
      </Grid>

      <Display
        amount={amount}
        total={total}
        handleReset={() => {
          setSelectedTip(0);
          setNumberOfpeople(1);
          setBill(0);
          setCustomTip(0);
          window.location.reload();
          console.log("RESET");
        }}
      />

    </Grid>
  );
}
