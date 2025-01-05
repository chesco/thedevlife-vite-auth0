import { Box, Typography } from "@mui/material";

export default function Home() {
  
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        backgroundColor: "#f5f5f5", 
        color: "#333", 
      }}
    >
      <Typography variant="h4">Home page placeholder</Typography>
    </Box>
  );
}
