import { Box, Typography, Grid } from "@mui/material";
import Splitter from "../components/Splitter/Splitter";

export default function Home() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#c5e4e7",
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <Grid item sx={{ padding: 0 }} xs={12}>
        <Box sx={{marginTop: 10}}>
          <Typography variant="h4" sx={{ color: "#00494d" }}>
            SPLI
          </Typography>
          <Typography variant="h4" sx={{ color: "#00494d" }}>
            TTER
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ justifyContent: "center", padding: 10, margin: "50px" }}
      >
        <Splitter />
      </Grid>
    </Grid>
  );
}