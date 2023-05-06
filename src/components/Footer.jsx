import { Box, Divider, Stack, Typography } from "@mui/material";

export default function Footer({ drawerWidth }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Divider />
      <Stack sx={{justifyContent:"center",alignItems:"center",px:"10px"}}>
      <Typography>developed by housam hegazy</Typography>
      <Typography>Copyright Reserved @ {new Date().getFullYear()}</Typography>
      </Stack>
    </Box>
  );
}
