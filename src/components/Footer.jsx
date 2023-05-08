import { Box, Divider, Stack, Typography } from "@mui/material";

export default function Footer({ drawerWidth,theme }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background:theme.palette.primary.main,
        color:"white",
        py:2
      }}
    >

      <Stack sx={{justifyContent:"center",alignItems:"center",px:"10px"}}>
      <Typography>developed by housam hegazy</Typography>
      <Typography>Copyright Reserved @ {new Date().getFullYear()}</Typography>
      </Stack>
      <Divider />
    </Box>
  );
}
