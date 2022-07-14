import { Grid, Box, Typography, Button } from "@mui/material";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";


export default function Display({amount, total, handleReset}) {

  return (
    <Grid
      item
      xs={6}
      sx={{
        background: "#00494d",
        borderRadius: "30px",
        padding: 3,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", padding: 3 }}
      >
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h6" sx={{ color: "#7f9c9f" }}>
            Tip amount
          </Typography>
          <Typography variant="caption text" sx={{ color: "#c5e4e7" }}>
            / person
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" sx={{ color: "#93cdd2" }} id='amount'>
            <EuroOutlinedIcon /> {amount}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", padding: 3 }}
      >
        <Box sx={{ textAlign: "start" }}>
          <Typography variant="h6" sx={{ color: "#7f9c9f" }}>
            Total
          </Typography>
          <Typography variant="caption text" sx={{ color: "#c5e4e7" }}>
            / person
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" sx={{ color: "#93cdd2" }} id='total'>
            <EuroOutlinedIcon /> {total}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ background: "	#5e7a7d", margin: "20px 3px 0 3px" }}>
        <Button sx={{ background: "#7f9c9f", width: "100%" }} onClick={handleReset}>
          <Typography sx={{ color: "#00494d" }}>Reset</Typography>
        </Button>
      </Box>
    </Grid>
  );
}
