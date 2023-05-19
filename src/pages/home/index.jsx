import { Box, Button, Stack, useTheme } from "@mui/material";
import home from "../../assest/images/home.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        background: theme.palette.mode === "light" && `url(${home})`,
        backgroundSize: "cover",
        minHeight: `calc(100vh - 147px)`,
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>H.Hegazy/Home</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <Box
        component="ul"
        sx={{
          width: { xs: "100%", md: "80%" },
          lineHeight: "2",
          fontSize: { xs: "14px", md: "18px" },
          padding: "26px",
          background: "#141b2ded",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <li>Hi there, My name is Housam Hegazy.</li>
        <li>Bachelor of Science - 2015</li>
        <li>
          I’m a Self-motivated Front-end Web Developer with a strong ambition to
          learn and discover the newest cutting-edge methodologies to build
          high-performance websites.
        </li>
        <li>
          {" "}
          Capable of self-managing in addition to collaborating with others in
          group projects.
        </li>
        <li>
          {" "}
          Skilled in using{" "}
          <span style={{ color: "yellow" }}>
            HTML& HTML5, CSS & CSS3, BootStrap, Javascript, React, MUI,
            Firebase, and Redux
          </span>
          .{" "}
        </li>
        <li>
          Excellent communication skills with clients to establish the best
          service quality to accomplish customer satisfaction
        </li>
      </Box>

      <Stack
        direction="row"
        sx={{
          marginTop: "20px",
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <a href={'./mycv.pdf'} attributes-list download="housam aly elsayed">
          <Button variant="contained" sx={{ textTransform: "capitalize" }}>
            Download Cv
          </Button>
        </a>

        <Link to={"./mywork"}>
          <Button variant="contained" sx={{ textTransform: "capitalize" }}>
            see my works
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}
