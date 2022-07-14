import { Button, Typography, Box, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomInput = styled(InputBase)(() => ({
  "&:focus": {
    boxShadow: "#c5e4e7",
    borderColor: "#c5e4e7",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
  },
}));

export default function InputButtons({
  selectedTip,
  setSelectedTip,
  customTip,
  handleCustomTip,
}) {
  return (
    <Box sx={{ marginBottom: 3 }}>
      <Typography
        sx={{ textAlign: "start", marginBottom: 1, color: "#7f9c9f" }}
      >
        Select Tip %
      </Typography>
      <Box>
        <Button
          sx={{
            backgroundColor: "#00494d",
            margin: "0 5px 5px 0",
            width: 100,
            padding: 1,
            margin: 1,
          }}
          onClick={() => {
            setSelectedTip(5);
            console.log(selectedTip);
          }}
          value={selectedTip}
        >
          <Typography sx={{ color: "#ffffff" }}>5%</Typography>
        </Button>
        <Button
          sx={{
            backgroundColor: "#00494d",
            margin: "0 5px 5px 0",
            width: 100,
            padding: 1,
            margin: 1,
          }}
          value={selectedTip}
          onClick={() => {
            setSelectedTip(10);
            console.log(selectedTip);
          }}
        >
          <Typography sx={{ color: "#ffffff" }}>10%</Typography>
        </Button>
        <Button
          sx={{ backgroundColor: "#00494d", width: 100, padding: 1, margin: 1 }}
          onClick={() => {
            setSelectedTip(15);
            console.log(selectedTip);
          }}
        >
          <Typography sx={{ color: "#ffffff" }}>15%</Typography>
        </Button>
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: "#00494d",
            margin: "0 5px 5px 0",
            width: 100,
            padding: 1,
            margin: 1,
          }}
          onClick={() => {
            setSelectedTip(25);
            console.log(selectedTip);
          }}
        >
          <Typography sx={{ color: "#ffffff" }}>25%</Typography>
        </Button>
        <Button
          sx={{
            backgroundColor: "#00494d",
            margin: "0 5px 5px 0",
            width: 100,
            padding: 1,
            margin: 1,
          }}
          value={selectedTip}
          onClick={() => {
            setSelectedTip(50);
            console.log(selectedTip);
          }}
        >
          <Typography sx={{ color: "#ffffff" }}>50%</Typography>
        </Button>

        <CustomInput
          label="Custom"
          defaultValue="Custom"
          value={customTip}
          sx={{ background: "#f4fafa", width: 100, margin: 1 }}
          onChange={handleCustomTip}
        />
      </Box>
    </Box>
  );
}
