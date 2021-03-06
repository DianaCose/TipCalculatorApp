import { TextField, Typography, Box } from "@mui/material";

export default function InputFields({ title, name, handleChange }) {
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "start",
          marginBottom: 1,
          marginLeft: 1,
          color: "#7f9c9f",
        }}
      >
        {title}
      </Typography>
      <TextField
        label={name}
        variant="outlined"
        sx={{
          marginBottom: 3,
          marginLeft: 1,
          width: 330,
          background: "#f4fafa",
        }}
        onChange={handleChange}
      />
    </Box>
  );
}
