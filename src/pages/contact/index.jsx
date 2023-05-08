import { Box, Button, Stack, TextField, Typography, useTheme } from "@mui/material";
import CommonSection from "components/CommonSection";
import React from "react";

export default function Contact() {
  const theme = useTheme();
  return (
    <Box>
      <CommonSection><Typography variant='h5' sx={{textAlign:"center"}}>contact us</Typography></CommonSection>
      <Stack
        component="form"
        sx={{
          width: "50%",
          mx: "auto",
          mt: "20px",
          gap: "10px",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "1px 0px 6px 4px #01579b",
        }}

      >
        <TextField
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "10px",
          }}
          type="text"
          required
          placeholder="your name"
        />
        <TextField
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "10px",
          }}
          type="email"
          required
          placeholder="your email"
        />
        <TextField
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "10px",
          }}
          multiline
          required
          rows={4}
          placeholder="your message"
        />
        <Button variant="contained"> send </Button>
      </Stack>
    </Box>
  );
}
