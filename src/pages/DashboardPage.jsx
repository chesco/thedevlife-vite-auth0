import { Box, Typography } from "@mui/material";

export default function HomePage() {
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Make it full height
        backgroundColor: "#f5f5f5", // Light background
        color: "#333", // Dark text
      }}
    >
      <Typography variant="h4">Dashboard page placeholder</Typography>
    </Box>
  );
}
