import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CommonSection from "components/CommonSection";
import React from "react";
// @ts-ignore
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const theme = useTheme();
  const [state, handleSubmit] = useForm("xjvzkael");
  if (state.succeeded) {
    return (
      <p>
        Thank you for writing to us and we will reply to you as soon as possible{" "}
      </p>
    );
  }
  return (
    <Box>
      <CommonSection>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Contact Us
        </Typography>
      </CommonSection>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: {xs:"90%",md:"70%"},
          mx: "auto",
          mt: "20px",
          gap: "10px",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "-7px 13px 10px 4px #0e101a",
          background: theme.palette.primary.main,
        }}
      >
        <TextField
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "10px",
            background: theme.palette.mode === "light" && "white",
          }}
          type="text"
          id="username"
          name="username"
          required
          placeholder="your name"
        />
        <ValidationError
          prefix="username"
          field="username"
          errors={state.errors}
        />
        <TextField
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "10px",
            background: theme.palette.mode === "light" && "white",
          }}
          type="email"
          required
          placeholder="your email"
          name="email"
          id="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <TextField
          sx={{
            border: `2px solid ${theme.palette.primary.main}`,
            borderRadius: "10px",
            background: theme.palette.mode === "light" && "white",
          }}
          multiline
          required
          rows={4}
          placeholder="your message"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button
          type="submit"
          disabled={state.submitting}
          variant="contained"
        >
          {" "}
          send{" "}
        </Button>
      </Stack>
    </Box>
  );
}
