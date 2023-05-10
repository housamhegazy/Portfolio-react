import { Box, Stack, useTheme } from "@mui/material";
import homelogo from "../../assest/images/homelogo.jpg";
import home from "../../assest/images/home.jpg";
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
        <li>
        Bachelor of Science
        </li>
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

      <a
        style={{
          background: theme.palette.mode==='light'?theme.palette.primary.main:"white",
          color: theme.palette.mode==='light'?"white":theme.palette.primary.main,
          borderRadius: "10px",
          textDecoration: "none",
          padding: "5px 10px",
          marginTop: "20px",
        }}
        href={`${homelogo}`}
        download="cv"
      >
        Download Cv
      </a>
    </Stack>
  );
}
